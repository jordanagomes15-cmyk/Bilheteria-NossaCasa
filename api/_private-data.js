const fs = require("fs");
const path = require("path");

let cachedAudience = null;

function readJsonFile(filePath) {
  return JSON.parse(fs.readFileSync(filePath, "utf8"));
}

function loadAudienceData() {
  if (cachedAudience) return cachedAudience;

  if (process.env.AUDIENCE_DATA_B64) {
    cachedAudience = JSON.parse(Buffer.from(process.env.AUDIENCE_DATA_B64, "base64").toString("utf8"));
    return cachedAudience;
  }

  const privatePath = path.join(process.cwd(), "private-data", "audience.json");
  if (fs.existsSync(privatePath)) {
    cachedAudience = readJsonFile(privatePath);
    return cachedAudience;
  }

  const bundledPath = path.join(process.cwd(), "data", "private", "audience.json");
  if (fs.existsSync(bundledPath)) {
    cachedAudience = readJsonFile(bundledPath);
    return cachedAudience;
  }

  return null;
}

function normalizePhone(value) {
  return String(value || "").replace(/\D+/g, "");
}

function personKey(entry) {
  const email = String(entry?.email || "").trim().toLowerCase();
  if (email) return `email:${email}`;
  const name = String(entry?.name || "").trim().toLowerCase();
  const phone = normalizePhone(entry?.phone);
  if (name && phone) return `name-phone:${name}:${phone}`;
  return name ? `name:${name}` : "";
}

function mailingRows(data, eventId = "all") {
  const rows = new Map();
  (data?.events || []).forEach((event) => {
    if (eventId !== "all" && event.id !== eventId) return;
    (event.audience || []).forEach((entry) => {
      const key = personKey(entry);
      if (!key) return;
      if (!rows.has(key)) {
        rows.set(key, {
          key,
          name: entry.name || "Sem nome",
          email: String(entry.email || "").trim().toLowerCase(),
          phone: normalizePhone(entry.phone),
          events: new Set(),
          eventCount: 0,
          participationTypes: new Set(),
          tickets: 0,
          validationCount: 0,
          origins: new Set(),
          lastAppearance: ""
        });
      }
      const row = rows.get(key);
      row.name = row.name || entry.name || "Sem nome";
      row.email = row.email || String(entry.email || "").trim().toLowerCase();
      row.phone = row.phone || normalizePhone(entry.phone);
      row.events.add(event.name || event.id);
      row.participationTypes.add(entry.type === "courtesy" ? "Cortesia" : "Compra");
      row.tickets += 1;
      if (entry.validated) row.validationCount += 1;
      if (entry.linkOrCommissioner) row.origins.add(entry.linkOrCommissioner);
      const date = entry.date || event.eventDateTime || event.eventDate || "";
      if (date && (!row.lastAppearance || Date.parse(date) > Date.parse(row.lastAppearance || ""))) row.lastAppearance = date;
    });
  });
  return [...rows.values()]
    .map((row) => ({
      ...row,
      events: [...row.events],
      eventCount: row.events.size,
      participationType:
        row.participationTypes.has("Compra") && row.participationTypes.has("Cortesia")
          ? "Compra e cortesia"
          : [...row.participationTypes][0] || "-",
      origins: [...row.origins],
      participationTypes: undefined
    }))
    .sort((a, b) => b.eventCount - a.eventCount || b.validationCount - a.validationCount || a.name.localeCompare(b.name, "pt-BR"));
}

module.exports = { loadAudienceData, mailingRows };
