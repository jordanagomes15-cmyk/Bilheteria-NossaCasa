const { clearSessionCookie, json } = require("./_auth");

module.exports = function logout(req, res) {
  clearSessionCookie(res);
  return json(res, 200, { ok: true });
};
