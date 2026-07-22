const crypto = require("crypto");
const { json, requireSession, safeEqual, sha256 } = require("./_auth");

const COOKIE_NAME = "nossa_casa_settlement";
const ACCESS_TTL_SECONDS = 60 * 60 * 4;

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

function sign(value) {
  return crypto.createHmac("sha256", process.env.SESSION_SECRET || "").update(value).digest("base64url");
}

function cookieOptions(maxAge = ACCESS_TTL_SECONDS) {
  const secure = process.env.NODE_ENV === "production" ? "; Secure" : "";
  return `Path=/; Max-Age=${maxAge}; HttpOnly; SameSite=Lax${secure}`;
}

function createToken() {
  const payload = `settlement.${Math.floor(Date.now() / 1000) + ACCESS_TTL_SECONDS}`;
  return `${payload}.${sign(payload)}`;
}

function verifyToken(req) {
  if (!process.env.SESSION_SECRET) return false;
  const token = parseCookies(req)[COOKIE_NAME];
  if (!token) return false;
  const parts = token.split(".");
  if (parts.length !== 3) return false;
  const payload = `${parts[0]}.${parts[1]}`;
  if (!safeEqual(parts[2], sign(payload))) return false;
  const expiresAt = Number(parts[1]);
  return Number.isFinite(expiresAt) && expiresAt >= Math.floor(Date.now() / 1000);
}

function readJsonBody(req) {
  return new Promise((resolve, reject) => {
    const chunks = [];
    req.on("data", (chunk) => chunks.push(chunk));
    req.on("end", () => {
      try {
        resolve(JSON.parse(Buffer.concat(chunks).toString("utf8") || "{}"));
      } catch (error) {
        reject(error);
      }
    });
    req.on("error", reject);
  });
}

module.exports = async function settlementAccess(req, res) {
  if (!requireSession(req, res)) return;

  if (req.method === "GET") {
    return json(res, 200, { ok: verifyToken(req) });
  }

  if (req.method === "DELETE") {
    res.setHeader("Set-Cookie", `${COOKIE_NAME}=; ${cookieOptions(0)}`);
    return json(res, 200, { ok: true });
  }

  if (req.method !== "POST") {
    res.setHeader("Allow", "GET, POST, DELETE");
    return json(res, 405, { ok: false, error: "Metodo nao permitido." });
  }

  const expectedHash = process.env.SETTLEMENT_PASSWORD_HASH || process.env.LOGIN_PASSWORD_HASH;
  if (!expectedHash || !process.env.SESSION_SECRET) {
    return json(res, 503, { ok: false, error: "Senha do fechamento nao configurada no servidor." });
  }

  let body = {};
  try {
    body = await readJsonBody(req);
  } catch {
    return json(res, 400, { ok: false, error: "JSON invalido." });
  }

  const password = String(body.password || "");
  if (!safeEqual(sha256(password), expectedHash)) {
    return json(res, 401, { ok: false, error: "Senha do fechamento invalida." });
  }

  res.setHeader("Set-Cookie", `${COOKIE_NAME}=${encodeURIComponent(createToken())}; ${cookieOptions()}`);
  return json(res, 200, { ok: true });
};
