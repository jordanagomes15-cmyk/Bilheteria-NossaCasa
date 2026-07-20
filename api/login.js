const { createSession, json, safeEqual, setSessionCookie, sha256 } = require("./_auth");

module.exports = async function login(req, res) {
  if (req.method !== "POST") {
    res.setHeader("Allow", "POST");
    return json(res, 405, { ok: false, error: "Metodo nao permitido." });
  }

  const expectedHash = process.env.LOGIN_PASSWORD_HASH;
  const expectedEmail = process.env.LOGIN_EMAIL || "";
  if (!expectedHash || !process.env.SESSION_SECRET) {
    return json(res, 503, { ok: false, error: "Autenticacao nao configurada no servidor." });
  }

  const chunks = [];
  for await (const chunk of req) chunks.push(chunk);
  let body = {};
  try {
    body = JSON.parse(Buffer.concat(chunks).toString("utf8") || "{}");
  } catch {
    return json(res, 400, { ok: false, error: "JSON invalido." });
  }

  const email = String(body.email || "").trim().toLowerCase();
  const password = String(body.password || "");
  const emailOk = !expectedEmail || safeEqual(email, expectedEmail.toLowerCase());
  const passwordOk = safeEqual(sha256(password), expectedHash);
  if (!emailOk || !passwordOk) {
    return json(res, 401, { ok: false, error: "E-mail ou senha invalidos." });
  }

  setSessionCookie(res, createSession(email || "dashboard"));
  return json(res, 200, { ok: true });
};
