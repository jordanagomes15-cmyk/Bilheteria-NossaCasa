const API_BASE = "https://api.github.com";

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
  if (!cfg) throw new Error("GITHUB_REPO/GITHUB_TOKEN nao configurados no servidor.");
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
  const data = text ? JSON.parse(text) : null;
  if (!response.ok) {
    throw new Error(data?.message || `GitHub API respondeu ${response.status}`);
  }
  return data;
}

function createIssue({ title, body, labels }) {
  return githubRequest("/issues", { method: "POST", body: JSON.stringify({ title, body, labels }) });
}

function listIssuesByLabel(label) {
  return githubRequest(`/issues?state=open&labels=${encodeURIComponent(label)}&per_page=100&sort=created&direction=desc`);
}

function commentOnIssue(number, body) {
  return githubRequest(`/issues/${number}/comments`, { method: "POST", body: JSON.stringify({ body }) });
}

function updateIssue(number, patch) {
  return githubRequest(`/issues/${number}`, { method: "PATCH", body: JSON.stringify(patch) });
}

module.exports = { createIssue, listIssuesByLabel, commentOnIssue, updateIssue, isConfigured };
