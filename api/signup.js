const { json } = require("./_auth");
const { createLocalRequest } = require("./_access-store");
const { createIssue, githubErrorResponse, isConfigured } = require("./_github");

const ACCESS_LEVELS = {
  overview: "Visao geral (sem dados pessoais)",
  full: "Completo (inclui audiencia e mailing)",
  promoter: "Comissario/RP (apenas seus proprios links)"
};

function isValidEmail(value) {
  return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value);
}

module.exports = async function signup(req, res) {
  if (req.method !== "POST") {
    res.setHeader("Allow", "POST");
    return json(res, 405, { ok: false, error: "Metodo nao permitido." });
  }

  const chunks = [];
  for await (const chunk of req) chunks.push(chunk);
  let body = {};
  try {
    body = JSON.parse(Buffer.concat(chunks).toString("utf8") || "{}");
  } catch {
    return json(res, 400, { ok: false, error: "JSON invalido." });
  }

  const name = String(body.name || "").trim().slice(0, 120);
  const email = String(body.email || "").trim().toLowerCase().slice(0, 160);
  const phone = String(body.phone || "").trim().slice(0, 40);
  const reason = String(body.reason || "").trim().slice(0, 600);
  const accessLevel = ACCESS_LEVELS[body.accessLevel] ? body.accessLevel : "overview";

  if (!name || !isValidEmail(email)) {
    return json(res, 400, { ok: false, error: "Informe nome e um e-mail valido." });
  }

  const title = `Solicitacao de acesso: ${name} (${email})`;
  const requestBody = [
    `**Nome:** ${name}`,
    `**E-mail:** ${email}`,
    `**Telefone:** ${phone || "nao informado"}`,
    `**Nivel de acesso solicitado:** ${ACCESS_LEVELS[accessLevel]}`,
    `**Motivo/observacoes:** ${reason || "nao informado"}`,
    "",
    "_Enviado automaticamente pelo formulario de cadastro do dashboard Nossa Casa._"
  ].join("\n");

  const fallbackRequest = () =>
    createLocalRequest({
      name,
      email,
      phone: phone || "nao informado",
      accessLevel: ACCESS_LEVELS[accessLevel],
      reason: reason || "nao informado",
      url: ""
    });

  if (!isConfigured()) {
    const request = fallbackRequest();
    return json(res, 200, { ok: true, id: request.number, fallback: true });
  }

  try {
    const issue = await createIssue({ title, body: requestBody, labels: ["acesso-pendente"] });
    return json(res, 200, { ok: true, id: issue.number });
  } catch (error) {
    const result = githubErrorResponse(error, "Nao foi possivel registrar a solicitacao agora. Tente novamente em instantes.");
    if (result.body?.code && String(result.body.code).startsWith("github_")) {
      const request = fallbackRequest();
      return json(res, 200, { ok: true, id: request.number, fallback: true, warning: result.body.error });
    }
    return json(res, result.status, result.body);
  }
};
