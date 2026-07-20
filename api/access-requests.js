const { json, requireSession } = require("./_auth");
const { listIssuesByLabel, isConfigured } = require("./_github");

function parseField(body, label) {
  const match = body.match(new RegExp(`\\*\\*${label}:\\*\\*\\s*(.+)`));
  return match ? match[1].trim() : "";
}

module.exports = async function accessRequests(req, res) {
  if (!requireSession(req, res)) return;
  if (!isConfigured()) {
    return json(res, 503, {
      ok: false,
      error: "Solicitacoes de acesso ainda nao configuradas no servidor (GITHUB_REPO/GITHUB_TOKEN)."
    });
  }
  try {
    const issues = await listIssuesByLabel("acesso-pendente");
    const requests = issues.map((issue) => ({
      number: issue.number,
      createdAt: issue.created_at,
      name: parseField(issue.body || "", "Nome"),
      email: parseField(issue.body || "", "E-mail"),
      phone: parseField(issue.body || "", "Telefone"),
      accessLevel: parseField(issue.body || "", "Nivel de acesso solicitado"),
      reason: parseField(issue.body || "", "Motivo/observacoes"),
      url: issue.html_url
    }));
    return json(res, 200, { ok: true, requests });
  } catch (error) {
    return json(res, 502, { ok: false, error: error.message || "Falha ao consultar solicitacoes." });
  }
};
