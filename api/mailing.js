const { json, requireSession } = require("./_auth");
const { loadAudienceData, mailingRows } = require("./_private-data");

module.exports = function mailing(req, res) {
  if (!requireSession(req, res)) return;
  const data = loadAudienceData();
  if (!data) {
    return json(res, 503, {
      ok: false,
      error: "Dados privados de mailing nao configurados. Configure AUDIENCE_DATA_B64 ou private-data/audience.json."
    });
  }
  const url = new URL(req.url, `https://${req.headers.host || "localhost"}`);
  const eventId = url.searchParams.get("eventId") || "all";
  const page = Math.max(1, Number(url.searchParams.get("page") || 1));
  const pageSize = Math.min(200, Math.max(25, Number(url.searchParams.get("pageSize") || 50)));
  const rows = mailingRows(data, eventId);
  const start = (page - 1) * pageSize;
  return json(res, 200, {
    ok: true,
    page,
    pageSize,
    total: rows.length,
    rows: rows.slice(start, start + pageSize)
  });
};
