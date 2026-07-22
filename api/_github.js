const API_BASE = "https://api.github.com";

class GithubIntegrationError extends Error {
  constructor(message, code, status = 502) {
    super(message);
    this.name = "GithubIntegrationError";
    this.code = code;
    this.status = status;
  }
}

function config() {
  const repo = process.env.GITHUB_REPO;
  const token = process.env.GITHUB_TOKEN;
  if (!repo || !token) return null;
  return { repo, token };
}

function isConfigured() {
  return Boolean(config());
}

async function githubRequest(path, options = {}) {
  const cfg = config();
  if (!cfg) {
    throw new GithubIntegrationError(
      "GITHUB_REPO/GITHUB_TOKEN nao configurados no servidor.",
      "github_not_configured",
      503
    );
  }
  const response = await fetch(`${API_BASE}/repos/${cfg.repo}${path}`, {
    ...options,
    headers: {
      Authorization: `Bearer ${cfg.token}`,
      Accept: "application/vnd.github+json",
      "X-GitHub-Api-Version": "2022-11-28",
      "Content-Type": "application/json",
      ...(options.headers || {})
    }
  });
  const text = await response.text();
  let data = null;
  try {
    data = text ? JSON.parse(text) : null;
  } catch {
    data = null;
  }
  if (!response.ok) {
    if (response.status === 401) {
      throw new GithubIntegrationError(
        "Token do GitHub invalido ou expirado. Atualize GITHUB_TOKEN na Vercel.",
        "github_token_invalid",
        503
      );
    }
    if (response.status === 403) {
      throw new GithubIntegrationError(
        "Token do GitHub sem permissao suficiente. Garanta Issues: Read and write no repositorio.",
        "github_token_scope",
        503
      );
    }
    if (response.status === 404) {
      throw new GithubIntegrationError(
        "Repositorio do GitHub nao encontrado. Confira GITHUB_REPO e o acesso do token.",
        "github_repo_not_found",
        503
      );
    }
    throw new GithubIntegrationError(data?.message || `GitHub API respondeu ${response.status}`, "github_api_error");
  }
  return data;
}

function createIssue({ title, body, labels }) {
  return githubRequest("/issues", { method: "POST", body: JSON.stringify({ title, body, labels }) });
}

function listIssuesByLabel(label, state = "open") {
  return githubRequest(`/issues?state=${encodeURIComponent(state)}&labels=${encodeURIComponent(label)}&per_page=100&sort=created&direction=desc`);
}

function commentOnIssue(number, body) {
  return githubRequest(`/issues/${number}/comments`, { method: "POST", body: JSON.stringify({ body }) });
}

function updateIssue(number, patch) {
  return githubRequest(`/issues/${number}`, { method: "PATCH", body: JSON.stringify(patch) });
}

function githubErrorResponse(error, fallback = "Falha na integracao com GitHub.") {
  if (error instanceof GithubIntegrationError) {
    return {
      status: error.status,
      body: { ok: false, error: error.message, code: error.code }
    };
  }
  return {
    status: 502,
    body: { ok: false, error: error?.message || fallback, code: "github_unknown_error" }
  };
}

module.exports = { createIssue, listIssuesByLabel, commentOnIssue, updateIssue, isConfigured, githubErrorResponse };
