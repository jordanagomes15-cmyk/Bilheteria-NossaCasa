const { json, requireSession } = require("./_auth");
const { closeLocalRequest } = require("./_access-store");
const { commentOnIssue, githubErrorResponse, updateIssue, isConfigured } = require("./_github");

const TIER_LABELS = {
  overview: "Visao geral (sem dados pessoais)",
  full: "Completo (inclui audiencia e mailing)",
  promoter: "Comissario/RP (apenas seus proprios links)"
};

module.exports = async function accessDecide(req, res) {
  if (!requireSession(req, res)) return;
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

  const issueNumber = Number(body.issueNumber);
  const decision = body.decision === "approved" ? "approved" : body.decision === "denied" ? "denied" : null;
  const tier = TIER_LABELS[body.tier] ? body.tier : "overview";
  const note = String(body.note || "").trim().slice(0, 400);

  if (!issueNumber || !decision) {
    return json(res, 400, { ok: false, error: "Informe issueNumber e decision valida." });
  }

  if (!isConfigured() || issueNumber > 1000000000000) {
    closeLocalRequest(issueNumber);
    return json(res, 200, { ok: true, fallback: true });
  }

  const commentLines =
    decision === "approved"
      ? [`**Decisao:** Aprovado`, `**Nivel concedido:** ${TIER_LABELS[tier]}`]
      : [`**Decisao:** Recusado`];
  if (note) commentLines.push(`**Observacao:** ${note}`);
  commentLines.push(
    "",
    "_Registrado pelo painel administrativo do dashboard. A concessao do login em si ainda precisa ser feita manualmente enquanto o sistema tiver um unico usuario administrador (ver README)._"
  );

  try {
    await commentOnIssue(issueNumber, commentLines.join("\n"));
    await updateIssue(issueNumber, {
      state: "closed",
      labels: [decision === "approved" ? `acesso-aprovado:${tier}` : "acesso-recusado"]
    });
    return json(res, 200, { ok: true });
  } catch (error) {
    const result = githubErrorResponse(error, "Falha ao registrar decisao.");
    if (result.body?.code && String(result.body.code).startsWith("github_")) {
      closeLocalRequest(issueNumber);
      return json(res, 200, { ok: true, fallback: true, warning: result.body.error });
    }
    return json(res, result.status, result.body);
  }
};
