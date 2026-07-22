const fs = require("fs");
const path = require("path");

const STORE_PATH = path.join("/tmp", "nossa-casa-access-requests.json");
const USERS_PATH = path.join("/tmp", "nossa-casa-access-users.json");

function readRequests() {
  try {
    return JSON.parse(fs.readFileSync(STORE_PATH, "utf8"));
  } catch {
    return [];
  }
}

function writeRequests(requests) {
  fs.writeFileSync(STORE_PATH, JSON.stringify(requests, null, 2));
}

function createLocalRequest(input) {
  const requests = readRequests();
  const request = {
    number: Date.now(),
    source: "local",
    createdAt: new Date().toISOString(),
    ...input
  };
  requests.unshift(request);
  writeRequests(requests.slice(0, 200));
  return request;
}

function listLocalRequests() {
  return readRequests();
}

function closeLocalRequest(number) {
  const target = Number(number);
  const requests = readRequests().filter((request) => Number(request.number) !== target);
  writeRequests(requests);
}

function readUsers() {
  try {
    return JSON.parse(fs.readFileSync(USERS_PATH, "utf8"));
  } catch {
    return [];
  }
}

function writeUsers(users) {
  fs.writeFileSync(USERS_PATH, JSON.stringify(users, null, 2));
}

function approveLocalRequest(number, tier) {
  const target = Number(number);
  const requests = readRequests();
  const request = requests.find((item) => Number(item.number) === target);
  if (!request) return null;
  const user = {
    email: String(request.email || "").trim().toLowerCase(),
    name: request.name || "",
    passwordHash: request.passwordHash || "",
    accessLevel: tier || request.accessLevel || "overview",
    approvedAt: new Date().toISOString()
  };
  if (user.email && user.passwordHash) {
    const users = readUsers().filter((item) => String(item.email || "").toLowerCase() !== user.email);
    users.unshift(user);
    writeUsers(users.slice(0, 200));
  }
  closeLocalRequest(target);
  return user;
}

function findLocalUser(email) {
  const normalized = String(email || "").trim().toLowerCase();
  return readUsers().find((user) => String(user.email || "").toLowerCase() === normalized) || null;
}

function publicRequest(request) {
  const { passwordHash, ...safeRequest } = request || {};
  return safeRequest;
}

function publicRequests(requests) {
  return (requests || []).map(publicRequest);
}

module.exports = { approveLocalRequest, closeLocalRequest, createLocalRequest, findLocalUser, listLocalRequests, publicRequests };
