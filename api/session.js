const { json, verifySession } = require("./_auth");

module.exports = function session(req, res) {
  const payload = verifySession(req);
  return json(res, 200, { ok: Boolean(payload), user: payload?.sub || null });
};
