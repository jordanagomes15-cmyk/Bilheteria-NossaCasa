const fs = require("fs");
const path = require("path");

const STORE_PATH = path.join("/tmp", "nossa-casa-access-requests.json");

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

module.exports = { closeLocalRequest, createLocalRequest, listLocalRequests };
