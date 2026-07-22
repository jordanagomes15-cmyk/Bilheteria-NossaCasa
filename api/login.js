const { createSession, json, safeEqual, setSessionCookie, sha256 } = require("./_auth");
const { findLocalUser } = require("./_access-store");
const { listIssuesByLabel } = require("./_github");

const APPROVED_LABELS = ["acesso-aprovado:overview", "acesso-aprovado:full", "acesso-aprovado:promoter"];

function parseField(body, label) {
  const match = String(body || "").match(new RegExp(`\\*\\*${label}:\\*\\*\\s*(.+)`));
  return match ? match[1].trim() : "";
}

async function findApprovedGithubUser(email) {
  const normalized = String(email || "").trim().toLowerCase();
  if (!normalized) return null;
  const batches = await Promise.all(
    APPROVED_LABELS.map((label) =>
      listIssuesByLabel(label, "closed").catch(() => [])
    )
  );
  return batches
    .flat()
    .map((issue) => ({
      email: parseField(issue.body, "E-mail").toLowerCase(),
      passwordHash: parseField(issue.body, "Senha hash")
    }))
    .find((user) => user.email === normalized && user.passwordHash) || null;
}

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
  const passwordHash = sha256(password);
  const adminEmailOk = !expectedEmail || safeEqual(email, expectedEmail.toLowerCase());
  const adminPasswordOk = safeEqual(passwordHash, expectedHash);
  if (adminEmailOk && adminPasswordOk) {
    setSessionCookie(res, createSession(email || "dashboard"));
    return json(res, 200, { ok: true });
  }

  const localUser = findLocalUser(email);
  if (localUser?.passwordHash && safeEqual(passwordHash, localUser.passwordHash)) {
    setSessionCookie(res, createSession(email || "dashboard"));
    return json(res, 200, { ok: true });
  }

  try {
    const githubUser = await findApprovedGithubUser(email);
    if (githubUser?.passwordHash && safeEqual(passwordHash, githubUser.passwordHash)) {
      setSessionCookie(res, createSession(email || "dashboard"));
      return json(res, 200, { ok: true });
    }
  } catch {
    // Se o GitHub estiver indisponivel, o login admin/local continua funcionando.
  }

  return json(res, 401, { ok: false, error: "E-mail ou senha invalidos ou acesso ainda pendente de aprovacao." });
};
