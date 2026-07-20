const crypto = require("crypto");

const COOKIE_NAME = "nossa_casa_session";
const SESSION_TTL_SECONDS = 60 * 60 * 8;

function json(res, status, body, headers = {}) {
  res.statusCode = status;
  Object.entries({
    "Content-Type": "application/json; charset=utf-8",
    "Cache-Control": "no-store",
    ...headers
  }).forEach(([key, value]) => res.setHeader(key, value));
  res.end(JSON.stringify(body));
}

function base64url(input) {
  return Buffer.from(input).toString("base64url");
}

function sign(value, secret) {
  return crypto.createHmac("sha256", secret).update(value).digest("base64url");
}

function safeEqual(a, b) {
  const left = Buffer.from(String(a || ""));
  const right = Buffer.from(String(b || ""));
  return left.length === right.length && crypto.timingSafeEqual(left, right);
}

function sha256(value) {
  return crypto.createHash("sha256").update(String(value || "")).digest("hex");
}

function parseCookies(req) {
  return String(req.headers.cookie || "")
    .split(";")
    .map((part) => part.trim())
    .filter(Boolean)
    .reduce((cookies, part) => {
      const index = part.indexOf("=");
      if (index > -1) cookies[decodeURIComponent(part.slice(0, index))] = decodeURIComponent(part.slice(index + 1));
      return cookies;
    }, {});
}

function cookieOptions(maxAge = SESSION_TTL_SECONDS) {
  const secure = process.env.NODE_ENV === "production" ? "; Secure" : "";
  return `Path=/; Max-Age=${maxAge}; HttpOnly; SameSite=Lax${secure}`;
}

function createSession(email) {
  const secret = process.env.SESSION_SECRET;
  if (!secret) throw new Error("SESSION_SECRET nao configurado.");
  const payload = {
    sub: String(email || "dashboard"),
    exp: Math.floor(Date.now() / 1000) + SESSION_TTL_SECONDS
  };
  const encodedPayload = base64url(JSON.stringify(payload));
  return `${encodedPayload}.${sign(encodedPayload, secret)}`;
}

function verifySession(req) {
  const secret = process.env.SESSION_SECRET;
  if (!secret) return null;
  const token = parseCookies(req)[COOKIE_NAME];
  if (!token || !token.includes(".")) return null;
  const [encodedPayload, signature] = token.split(".");
  if (!safeEqual(signature, sign(encodedPayload, secret))) return null;
  try {
    const payload = JSON.parse(Buffer.from(encodedPayload, "base64url").toString("utf8"));
    if (!payload.exp || payload.exp < Math.floor(Date.now() / 1000)) return null;
    return payload;
  } catch {
    return null;
  }
}

function requireSession(req, res) {
  const session = verifySession(req);
  if (!session) {
    json(res, 401, { ok: false, error: "Sessao invalida ou expirada." });
    return null;
  }
  return session;
}

function setSessionCookie(res, token) {
  res.setHeader("Set-Cookie", `${COOKIE_NAME}=${encodeURIComponent(token)}; ${cookieOptions()}`);
}

function clearSessionCookie(res) {
  res.setHeader("Set-Cookie", `${COOKIE_NAME}=; ${cookieOptions(0)}`);
}

module.exports = {
  clearSessionCookie,
  createSession,
  json,
  requireSession,
  safeEqual,
  setSessionCookie,
  sha256,
  verifySession
};
