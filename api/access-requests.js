const { json, requireSession } = require("./_auth");
const { listLocalRequests, publicRequests } = require("./_access-store");
const { githubErrorResponse, listIssuesByLabel, isConfigured } = require("./_github");

function parseField(body, label) {
  const match = body.match(new RegExp(`\\*\\*${label}:\\*\\*\\s*(.+)`));
  return match ? match[1].trim() : "";
}

module.exports = async function accessRequests(req, res) {
  if (!requireSession(req, res)) return;
  const localRequests = listLocalRequests();
  if (!isConfigured()) {
    return json(res, 200, { ok: true, requests: publicRequests(localRequests), degraded: true });
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
    return json(res, 200, { ok: true, requests: [...publicRequests(localRequests), ...requests] });
  } catch (error) {
    const result = githubErrorResponse(error, "Falha ao consultar solicitacoes.");
    if (result.body?.code && String(result.body.code).startsWith("github_")) {
      return json(res, 200, { ok: true, requests: publicRequests(localRequests), degraded: true, warning: result.body.error });
    }
    return json(res, result.status, result.body);
  }
};
