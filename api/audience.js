const { json, requireSession } = require("./_auth");
const { loadAudienceData } = require("./_private-data");

module.exports = function audience(req, res) {
  if (!requireSession(req, res)) return;
  const data = loadAudienceData();
  if (!data) {
    return json(res, 503, {
      ok: false,
      error: "Dados privados de audiencia nao configurados. Configure AUDIENCE_DATA_B64 ou private-data/audience.json."
    });
  }
  const url = new URL(req.url, `https://${req.headers.host || "localhost"}`);
  const eventId = url.searchParams.get("eventId");
  const events = eventId && eventId !== "all" ? (data.events || []).filter((event) => event.id === eventId) : data.events || [];
  return json(res, 200, { ok: true, generatedAt: data.generatedAt, dataVersion: data.dataVersion, events });
};
