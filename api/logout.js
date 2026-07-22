const { json } = require("./_auth");

function expiredCookie(name) {
  const secure = process.env.NODE_ENV === "production" ? "; Secure" : "";
  return `${name}=; Path=/; Max-Age=0; HttpOnly; SameSite=Lax${secure}`;
}

module.exports = function logout(req, res) {
  res.setHeader("Set-Cookie", [expiredCookie("nossa_casa_session"), expiredCookie("nossa_casa_settlement")]);
  return json(res, 200, { ok: true });
};
