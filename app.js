const SESSION_KEY = "nossa-casa-session-v1";
const PROMOTER_SPLIT_KEY = "nossa-casa-promoter-split-v1";
const embeddedData = globalThis.NOSSA_CASA_DATA || null;

const fallbackEvents = [
  {
    id: "all-night-lou-brasil-x-haiti",
    name: "ALL NIGHT LOU - BRASIL X HAITI",
    source: "ALL NIGHT LOU - BRASIL X HAITI - 25-06-2026 15h05.xlsx",
    sold: 599,
    complimentary: 1715,
    validated: 1475,
    revenue: 105373.92,
    batches: [
      { label: "Pista", sold: 481, complimentary: 0, validated: 439, revenue: 86580 },
      { label: "Backstage", sold: 73, complimentary: 0, validated: 64, revenue: 17973.48 },
      { label: "Cortesia 23h59 Direct", sold: 0, complimentary: 256, validated: 137, revenue: 0 },
      { label: "Cortesia 23h59 Exit", sold: 0, complimentary: 256, validated: 147, revenue: 0 },
      { label: "Cortesia Pista Somosbw", sold: 0, complimentary: 210, validated: 117, revenue: 0 },
      { label: "Cortesia Pista Today", sold: 0, complimentary: 248, validated: 161, revenue: 0 },
      { label: "Cortesia 23h59 Jhonny", sold: 0, complimentary: 140, validated: 71, revenue: 0 }
    ],
    promoters: {
      marianaparik: { sold: 20, revenue: 2120.4, complimentary: 0, validated: 17 },
      somosbw: { sold: 14, revenue: 1895, complimentary: 210, validated: 130 },
      mdaccula: { sold: 11, revenue: 1710, complimentary: 0, validated: 11 },
      timelapse: { sold: 7, revenue: 1130.5, complimentary: 0, validated: 7 },
      today: { sold: 6, revenue: 1092.5, complimentary: 56, validated: 47 },
      exit: { sold: 5, revenue: 518, complimentary: 256, validated: 152 },
      direct: { sold: 4, revenue: 551.5, complimentary: 256, validated: 139 },
      convidadothicenora: { sold: 1, revenue: 237.5, complimentary: 0, validated: 1 }
    }
  },
  {
    id: "cat-house-brasil-x-escocia",
    name: "CAT HOUSE - BRASIL X ESCOCIA",
    source: "CAT HOUSE - BRASIL X ESCOCIA  - 25-06-2026 10h55.xlsx",
    sold: 164,
    complimentary: 2756,
    validated: 1277,
    revenue: 32880,
    batches: [
      { label: "Pista", sold: 136, complimentary: 0, validated: 127, revenue: 24480 },
      { label: "Area VIP", sold: 28, complimentary: 0, validated: 26, revenue: 8400 },
      { label: "Cortesia Direct", sold: 0, complimentary: 518, validated: 187, revenue: 0 },
      { label: "Cortesia Impact", sold: 0, complimentary: 225, validated: 68, revenue: 0 },
      { label: "Cortesia Today", sold: 0, complimentary: 219, validated: 123, revenue: 0 },
      { label: "Cortesia Somosbw", sold: 0, complimentary: 140, validated: 85, revenue: 0 },
      { label: "Cortesia Convidado Thicenora", sold: 0, complimentary: 100, validated: 19, revenue: 0 }
    ],
    promoters: {
      timelapse: { sold: 9, revenue: 1605.5, complimentary: 117, validated: 57 },
      marianaparik: { sold: 8, revenue: 652.5, complimentary: 0, validated: 8 },
      ra: { sold: 6, revenue: 619.5, complimentary: 0, validated: 4 },
      direct: { sold: 3, revenue: 256.5, complimentary: 518, validated: 190 },
      impact: { sold: 3, revenue: 256.5, complimentary: 225, validated: 71 },
      somosbw: { sold: 2, revenue: 420, complimentary: 140, validated: 87 },
      convidadothicenora: { sold: 0, revenue: 0, complimentary: 100, validated: 19 }
    }
  },
  {
    id: "manual-pratico-do-novo-samba-tradicional",
    name: "MANUAL PRATICO DO NOVO SAMBA TRADICIONAL",
    source: "MANUAL PRATICO DO NOVO SAMBA TRADICIONAL - 25-06-2026 15h04.xlsx",
    sold: 988,
    complimentary: 1098,
    validated: 1564,
    revenue: 145312.12,
    batches: [
      { label: "Feminino", sold: 525, complimentary: 0, validated: 484, revenue: 67528.13 },
      { label: "Masculino", sold: 463, complimentary: 0, validated: 422, revenue: 77784 },
      { label: "Cortesia Somosbw", sold: 0, complimentary: 215, validated: 127, revenue: 0 },
      { label: "Cortesia Today", sold: 0, complimentary: 149, validated: 102, revenue: 0 },
      { label: "Cortesia Grupo Rub", sold: 0, complimentary: 128, validated: 94, revenue: 0 },
      { label: "Cortesia Convidado Vitty", sold: 0, complimentary: 92, validated: 62, revenue: 0 },
      { label: "Cortesia Convidado Thicenora", sold: 0, complimentary: 83, validated: 54, revenue: 0 }
    ],
    promoters: {
      maipp: { sold: 152, revenue: 17163, complimentary: 0, validated: 135 },
      nivererick: { sold: 98, revenue: 11547, complimentary: 0, validated: 93 },
      wegoout: { sold: 61, revenue: 6663, complimentary: 0, validated: 55 },
      ra: { sold: 44, revenue: 5433, complimentary: 0, validated: 41 },
      marianaparik: { sold: 45, revenue: 5330, complimentary: 0, validated: 42 },
      somosbw: { sold: 8, revenue: 1070, complimentary: 252, validated: 159 },
      convidadothicenora: { sold: 1, revenue: 114, complimentary: 83, validated: 54 }
    }
  },
  {
    id: "nossa-junina",
    name: "NOSSA JUNINA",
    source: "NOSSA JUNINA - 25-06-2026 15h05.xlsx",
    sold: 6,
    complimentary: 338,
    validated: 62,
    revenue: 1080,
    batches: [
      { label: "Masculino", sold: 6, complimentary: 0, validated: 3, revenue: 1080 },
      { label: "Cortesias Feminino", sold: 0, complimentary: 142, validated: 21, revenue: 0 },
      { label: "Cortesias Masculino", sold: 0, complimentary: 107, validated: 23, revenue: 0 },
      { label: "Cortesia Patrocinador", sold: 0, complimentary: 62, validated: 10, revenue: 0 }
    ],
    promoters: {
      ra: { sold: 3, revenue: 264, complimentary: 0, validated: 3 },
      exit: { sold: 0, revenue: 0, complimentary: 85, validated: 15 },
      patrocinador: { sold: 0, revenue: 0, complimentary: 62, validated: 10 },
      somosbw: { sold: 0, revenue: 0, complimentary: 62, validated: 8 }
    }
  },
  {
    id: "red-room",
    name: "RED ROOM",
    source: "RED ROOM - 25-06-2026 15h04.xlsx",
    sold: 75,
    complimentary: 158,
    validated: 87,
    revenue: 10564.8,
    batches: [
      { label: "Pista", sold: 59, complimentary: 0, validated: 43, revenue: 7080 },
      { label: "Backstage", sold: 16, complimentary: 0, validated: 7, revenue: 3484.8 },
      { label: "Cortesia Backstage", sold: 0, complimentary: 62, validated: 14, revenue: 0 },
      { label: "Cortesia Today", sold: 0, complimentary: 61, validated: 20, revenue: 0 }
    ],
    promoters: {
      technosp: { sold: 4, revenue: 360, complimentary: 0, validated: 4 },
      renova: { sold: 4, revenue: 320, complimentary: 0, validated: 4 },
      exit: { sold: 2, revenue: 440, complimentary: 0, validated: 2 },
      today: { sold: 0, revenue: 0, complimentary: 61, validated: 20 }
    }
  },
  {
    id: "sambae",
    name: "SAMBAE",
    source: "SAMBAE - 25-06-2026 15h04.xlsx",
    sold: 22,
    complimentary: 328,
    validated: 113,
    revenue: 2940,
    batches: [
      { label: "Feminino", sold: 12, complimentary: 0, validated: 10, revenue: 1440 },
      { label: "Masculino", sold: 10, complimentary: 0, validated: 10, revenue: 1500 },
      { label: "Cortesia Convidado Thicenora", sold: 0, complimentary: 90, validated: 45, revenue: 0 },
      { label: "Cortesia Hands Up", sold: 0, complimentary: 45, validated: 2, revenue: 0 },
      { label: "Cortesia Caldi", sold: 0, complimentary: 39, validated: 21, revenue: 0 },
      { label: "Cortesia Patrocinador", sold: 0, complimentary: 42, validated: 3, revenue: 0 }
    ],
    promoters: {
      ra: { sold: 2, revenue: 128, complimentary: 0, validated: 1 },
      marianaparik: { sold: 1, revenue: 80, complimentary: 0, validated: 1 },
      convidadothicenora: { sold: 0, revenue: 0, complimentary: 90, validated: 45 },
      caldi: { sold: 0, revenue: 0, complimentary: 39, validated: 21 },
      handsup: { sold: 0, revenue: 0, complimentary: 45, validated: 2 }
    }
  }
];

const state = {
  view: "overview",
  events: loadEvents(),
  selectedEventId: null,
  expandedPromoter: "",
  drawerOpen: false,
  detailTab: "batches",
  promoterSplit: loadPromoterSplit(),
  query: "",
  expandedAudienceKey: "",
  mailingEventId: "all",
  filters: {
    search: "",
    pne: "all",
    sort: "date"
  },
  recurrenceFilters: {
    eventId: "all",
    type: "all",
    min: "2",
    validatedOnly: false
  }
};

let activeDataVersion = dataVersion(embeddedData);

function loadEvents() {
  return embeddedData?.events?.length ? embeddedData.events : fallbackEvents;
}

function loadPromoterSplit() {
  try {
    const saved = Number(localStorage.getItem(PROMOTER_SPLIT_KEY));
    return Number.isFinite(saved) ? Math.min(76, Math.max(48, saved)) : 63;
  } catch {
    return 63;
  }
}

function dataVersion(data) {
  if (data?.dataVersion) return data.dataVersion;
  if (data?.generatedAt) return data.generatedAt;
  return "";
}

function parseGeneratedDataScript(source) {
  const match = String(source || "").match(/window\.NOSSA_CASA_DATA\s*=\s*([\s\S]*);\s*$/);
  if (!match) return null;
  try {
    return JSON.parse(match[1]);
  } catch {
    return null;
  }
}

function applyGeneratedData(data) {
  if (!data?.events?.length) return;
  const nextVersion = dataVersion(data);
  if (nextVersion && nextVersion === activeDataVersion) return;
  const selectedId = state.selectedEventId;
  state.events = data.events;
  activeDataVersion = nextVersion;
  if (selectedId && !state.events.some((event) => event.id === selectedId)) {
    state.selectedEventId = null;
    state.view = "overview";
  }
  render();
}

async function refreshGeneratedData() {
  if (location.protocol === "file:") return;
  try {
    const response = await fetch(`generated-data.js?sync=${Date.now()}`, { cache: "no-store" });
    if (!response.ok) return;
    applyGeneratedData(parseGeneratedDataScript(await response.text()));
  } catch {
    // A preview may be temporarily unavailable while the local files are being rebuilt.
  }
}

function startRealtimeDataSync() {
  refreshGeneratedData();
  setInterval(refreshGeneratedData, 5000);
}

function money(value) {
  return Number(value || 0).toLocaleString("pt-BR", { style: "currency", currency: "BRL" });
}

function int(value) {
  return Math.round(Number(value || 0)).toLocaleString("pt-BR");
}

function pct(value) {
  return `${Math.round(Number(value || 0))}%`;
}

function clampPercent(value) {
  return Math.max(0, Math.min(100, Number(value || 0)));
}

function esc(value) {
  return String(value ?? "")
    .replaceAll("&", "&amp;")
    .replaceAll("<", "&lt;")
    .replaceAll(">", "&gt;")
    .replaceAll('"', "&quot;");
}

function slug(value) {
  return normalizeText(value).replaceAll(" ", "-") || `evento-${Date.now()}`;
}

function normalizeText(value) {
  return String(value || "")
    .normalize("NFD")
    .replace(/[\u0300-\u036f]/g, "")
    .toLowerCase()
    .replace(/[^a-z0-9]+/g, " ")
    .trim()
    .replace(/\s+/g, " ");
}

function normalizeBatch(value) {
  const base = normalizeText(value)
    .replace(/\b\d{1,2}\s*h\s*\d{0,2}\b/g, " ")
    .replace(/\b\d{1,2}\s+\d{2}\b/g, " ")
    .replace(/\b(1o|1|2o|2|3o|3|4o|4|lote|entrada|ate|valido|validas|valida|sujeito|lotacao)\b/g, " ")
    .replace(/\s+/g, " ")
    .trim();
  return base || "sem lote";
}

function displayName(key) {
  return String(key || "Sem nome")
    .replace(/-/g, " ")
    .replace(/\b\w/g, (letter) => letter.toUpperCase());
}

function filteredEvents() {
  const search = normalizeText(state.filters.search);
  return state.events
    .filter((event) => {
      const haystack = normalizeText(`${event.name || ""} ${event.source || ""}`);
      const searchMatch = !search || haystack.includes(search);
      const pneMatch =
        state.filters.pne === "all" ||
        (state.filters.pne === "with" && event.pne) ||
        (state.filters.pne === "without" && !event.pne);
      return searchMatch && pneMatch;
    })
    .sort(sortEvents);
}

function sortEvents(a, b) {
  if (state.filters.sort === "date") return eventDateValue(a) - eventDateValue(b) || String(a.name || "").localeCompare(String(b.name || ""), "pt-BR");
  if (state.filters.sort === "name") return String(a.name || "").localeCompare(String(b.name || ""), "pt-BR");
  if (state.filters.sort === "checkins") return Number(b.validated || 0) - Number(a.validated || 0);
  if (state.filters.sort === "presence") return eventPresenceRate(b) - eventPresenceRate(a);
  return Number(b.revenue || 0) - Number(a.revenue || 0);
}

function eventDateValue(event) {
  const value = Date.parse(event?.eventDateTime || event?.eventDate || "");
  return Number.isFinite(value) ? value : Number.MAX_SAFE_INTEGER;
}

function eventPresenceRate(event) {
  const total = Number(event.sold || 0) + Number(event.complimentary || 0);
  return (Number(event.validated || 0) / Math.max(total, 1)) * 100;
}

function totals(events = filteredEvents()) {
  return events.reduce(
    (acc, event) => {
      acc.sold += Number(event.sold || 0);
      acc.complimentary += Number(event.complimentary || 0);
      acc.validated += Number(event.validated || 0);
      acc.revenue += Number(event.revenue || 0);
      acc.pneInserted += Number(event.pne?.inserted || 0);
      acc.pneConverted += Number(event.pne?.converted || 0);
      return acc;
    },
    { sold: 0, complimentary: 0, validated: 0, revenue: 0, pneInserted: 0, pneConverted: 0 }
  );
}

function safeRate(value, total) {
  return (Number(value || 0) / Math.max(Number(total || 0), 1)) * 100;
}

function rowComplimentaryValidated(row) {
  if (Number.isFinite(Number(row?.complimentaryValidated))) return Number(row.complimentaryValidated || 0);
  const complimentary = Number(row?.complimentary || 0);
  if (!complimentary) return 0;
  const validated = Number(row?.validated || 0);
  const sold = Number(row?.sold || 0);
  const estimatedPaid = Math.min(sold, validated);
  return Math.min(complimentary, Math.max(0, validated - estimatedPaid));
}

function rowSoldValidated(row) {
  if (Number.isFinite(Number(row?.soldValidated))) return Number(row.soldValidated || 0);
  const sold = Number(row?.sold || 0);
  if (!sold) return 0;
  return Math.min(sold, Math.max(0, Number(row?.validated || 0) - rowComplimentaryValidated(row)));
}

function eventComplimentaryValidated(event) {
  const total = (event.batches || []).reduce((acc, batch) => acc + rowComplimentaryValidated(batch), 0);
  return Math.min(Number(event.complimentary || 0), total || rowComplimentaryValidated(event));
}

function eventSoldValidated(event) {
  const total = (event.batches || []).reduce((acc, batch) => acc + rowSoldValidated(batch), 0);
  return Math.min(Number(event.sold || 0), total || rowSoldValidated(event));
}

function eventSalesBreakdown(event) {
  const linkRows = Object.values(event.promoters || {});
  const linkSold = linkRows.reduce((acc, row) => acc + Number(row.sold || 0), 0);
  const linkRevenue = linkRows.reduce((acc, row) => acc + Number(row.revenue || 0), 0);
  const revenue = Number(event.revenue || 0);
  const sold = Number(event.sold || 0);
  return {
    revenue,
    sold,
    linkSold,
    linkRevenue,
    generalSold: Math.max(0, sold - linkSold),
    generalRevenue: Math.max(0, revenue - linkRevenue),
    complimentary: Number(event.complimentary || 0),
    complimentaryValidated: eventComplimentaryValidated(event),
    soldValidated: eventSoldValidated(event)
  };
}

function salesBreakdown(events = filteredEvents()) {
  return events.reduce(
    (acc, event) => {
      const item = eventSalesBreakdown(event);
      acc.revenue += item.revenue;
      acc.sold += item.sold;
      acc.linkRevenue += item.linkRevenue;
      acc.linkSold += item.linkSold;
      acc.generalRevenue += item.generalRevenue;
      acc.generalSold += item.generalSold;
      acc.complimentary += item.complimentary;
      acc.complimentaryValidated += item.complimentaryValidated;
      acc.soldValidated += item.soldValidated;
      return acc;
    },
    {
      revenue: 0,
      sold: 0,
      linkRevenue: 0,
      linkSold: 0,
      generalRevenue: 0,
      generalSold: 0,
      complimentary: 0,
      complimentaryValidated: 0,
      soldValidated: 0
    }
  );
}

function recurringPeople(events = filteredEvents()) {
  const map = new Map();
  events.forEach((event) => {
    (event.attendees || []).forEach((person) => {
      const key = person.key || normalizeText(person.name);
      if (!key) return;
      if (!map.has(key)) {
        map.set(key, {
          key,
          name: person.name || "Sem nome",
          eventIds: new Set(),
          paidEventIds: new Set(),
          courtesyEventIds: new Set(),
          sold: 0,
          soldValidated: 0,
          complimentary: 0,
          complimentaryValidated: 0,
          validated: 0,
          revenue: 0,
          transferRecipients: new Set(),
          transferSenders: new Set(),
          transferQuantity: 0,
          courtesyContexts: new Set(),
          courtesyLabels: new Set(),
          events: []
        });
      }
      const row = map.get(key);
      const sold = Number(person.sold || 0);
      const soldValidated = rowSoldValidated(person);
      const complimentary = Number(person.complimentary || 0);
      const complimentaryValidated = rowComplimentaryValidated(person);
      const eventId = person.eventId || event.id;
      const eventName = person.eventName || event.name;
      row.eventIds.add(eventId);
      if (sold > 0) row.paidEventIds.add(eventId);
      if (complimentary > 0) row.courtesyEventIds.add(eventId);
      row.sold += sold;
      row.soldValidated += soldValidated;
      row.complimentary += complimentary;
      row.complimentaryValidated += complimentaryValidated;
      row.validated += Number(person.validated || 0);
      row.revenue += Number(person.revenue || 0);
      (person.transferRecipients || []).forEach((name) => row.transferRecipients.add(name));
      (person.transferSenders || []).forEach((name) => row.transferSenders.add(name));
      (person.courtesyContexts || []).forEach((context) => row.courtesyContexts.add(context));
      (person.courtesyLabels || []).forEach((label) => row.courtesyLabels.add(label));
      row.transferQuantity += Number(person.transferQuantity || 0);
      row.events.push({
        id: eventId,
        name: eventName,
        sold,
        soldValidated,
        complimentary,
        complimentaryValidated,
        revenue: Number(person.revenue || 0),
        transferRecipients: person.transferRecipients || [],
        transferSenders: person.transferSenders || [],
        courtesyLabels: person.courtesyLabels || []
      });
    });
  });
  return [...map.values()].map((row) => ({
    ...row,
    transferRecipients: [...row.transferRecipients],
    transferSenders: [...row.transferSenders],
    courtesyContexts: [...row.courtesyContexts],
    courtesyLabels: [...row.courtesyLabels],
    eventCount: row.eventIds.size,
    paidEventCount: row.paidEventIds.size,
    courtesyEventCount: row.courtesyEventIds.size,
    courtesyContextCount: row.courtesyContexts.size
  }));
}

function recurringAnalysis(events = filteredEvents()) {
  const people = recurringPeople(events);
  const buyers = people
    .filter((row) => row.paidEventCount > 1)
    .sort((a, b) => b.revenue - a.revenue || b.sold - a.sold || b.paidEventCount - a.paidEventCount);
  const courtesy = people
    .filter((row) => row.courtesyContextCount > 1 && row.complimentaryValidated > 0)
    .sort((a, b) => b.complimentaryValidated - a.complimentaryValidated || b.courtesyContextCount - a.courtesyContextCount || b.courtesyEventCount - a.courtesyEventCount);
  return { buyers, courtesy, people };
}

function normalizeParticipantKey(participant) {
  const email = String(participant?.email || "").trim().toLowerCase();
  if (email) return `email:${email}`;
  return `name:${normalizeText(participant?.name || participant?.participantKey || "sem nome")}`;
}

function normalizePhone(value) {
  return String(value || "").replace(/\D+/g, "");
}

function personMailingKey(entry) {
  const email = String(entry?.email || "").trim().toLowerCase();
  if (email) return `email:${email}`;
  const name = normalizeText(entry?.name || "");
  const phone = normalizePhone(entry?.phone);
  if (name && phone) return `name-phone:${name}:${phone}`;
  if (name) return `possible-name:${name}`;
  return "";
}

function eventAudienceSummary(event) {
  const all = new Set();
  const buyers = new Set();
  const courtesy = new Set();
  (event?.audience || []).forEach((entry) => {
    const key = personMailingKey(entry) || normalizeParticipantKey(entry);
    if (!key) return;
    all.add(key);
    if (entry.type === "purchase") buyers.add(key);
    if (entry.type === "courtesy") courtesy.add(key);
  });
  return {
    uniquePeople: all.size,
    uniqueBuyers: buyers.size,
    uniqueCourtesy: courtesy.size
  };
}

function audienceEntriesFromEvents(events) {
  return events.flatMap((event) =>
    (event.audience || []).map((entry) => ({
      ...entry,
      eventId: event.id,
      eventName: event.name,
      eventDate: event.eventDateTime || event.eventDate || ""
    }))
  );
}

function buildMailingRows(events = filteredEvents(), eventId = "all") {
  const rows = new Map();
  audienceEntriesFromEvents(events).forEach((entry) => {
    if (eventId !== "all" && entry.eventId !== eventId) return;
    const key = personMailingKey(entry);
    if (!key) return;
    if (!rows.has(key)) {
      rows.set(key, {
        key,
        name: entry.name || "Sem nome",
        email: String(entry.email || "").trim().toLowerCase(),
        phone: normalizePhone(entry.phone),
        possibleDuplicate: key.startsWith("possible-name:"),
        events: new Set(),
        eventDates: [],
        participationTypes: new Set(),
        validationCount: 0,
        origins: new Set(),
        tickets: 0,
        lastAppearance: ""
      });
    }
    const row = rows.get(key);
    row.name = row.name || entry.name || "Sem nome";
    row.email = row.email || String(entry.email || "").trim().toLowerCase();
    row.phone = row.phone || normalizePhone(entry.phone);
    row.events.add(entry.eventName || entry.eventId);
    row.participationTypes.add(entry.type === "courtesy" ? "Cortesia" : "Compra");
    row.tickets += 1;
    if (entry.validated) row.validationCount += 1;
    if (entry.linkOrCommissioner) row.origins.add(displayName(entry.linkOrCommissioner));
    const date = entry.date || entry.eventDate || "";
    if (date) row.eventDates.push(date);
    if (!row.lastAppearance || entryDateValue({ date }) > entryDateValue({ date: row.lastAppearance })) {
      row.lastAppearance = date;
    }
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
      origins: [...row.origins]
    }))
    .sort((a, b) => b.eventCount - a.eventCount || b.validationCount - a.validationCount || a.name.localeCompare(b.name, "pt-BR"));
}

function csvValue(value) {
  return `"${String(value ?? "").replaceAll('"', '""')}"`;
}

function slugFileName(value) {
  return normalizeText(value).replace(/\s+/g, "-") || "mailing";
}

function downloadTextFile(filename, content) {
  const blob = new Blob([content], { type: "text/csv;charset=utf-8" });
  const url = URL.createObjectURL(blob);
  const link = document.createElement("a");
  link.href = url;
  link.download = filename;
  document.body.appendChild(link);
  link.click();
  link.remove();
  URL.revokeObjectURL(url);
}

function exportMailingCsv(eventId = "all") {
  const events = filteredEvents();
  const selected = eventId === "all" ? null : events.find((event) => event.id === eventId) || state.events.find((event) => event.id === eventId);
  const scopeEvents = selected ? [selected] : events;
  const rows = buildMailingRows(scopeEvents, selected ? selected.id : "all");
  const headers = [
    "Nome",
    "E-mail",
    "Telefone",
    "Eventos",
    "Quantidade de eventos",
    "Tipo de participacao",
    "Ingressos",
    "Validacoes",
    "Ultima aparicao",
    "Origem/link/comissario",
    "Possivel duplicidade"
  ];
  const lines = [
    headers.map(csvValue).join(";"),
    ...rows.map((row) =>
      [
        row.name,
        row.email,
        row.phone,
        row.events.join(", "),
        row.eventCount,
        row.participationType,
        row.tickets,
        row.validationCount,
        formatDate(row.lastAppearance),
        row.origins.join(", "),
        row.possibleDuplicate ? "Sim" : "Nao"
      ]
        .map(csvValue)
        .join(";")
    )
  ];
  const filename = selected ? `mailing-${slugFileName(selected.name)}.csv` : "mailing-consolidado-nossa-casa.csv";
  downloadTextFile(filename, `\uFEFF${lines.join("\n")}`);
}

function formatDate(value) {
  const date = new Date(value || "");
  if (!Number.isFinite(date.getTime())) return "-";
  return date.toLocaleDateString("pt-BR");
}

function entryDateValue(entry) {
  const value = Date.parse(entry.date || entry.eventDate || "");
  return Number.isFinite(value) ? value : 0;
}

function getAudienceRecurrence(events = filteredEvents()) {
  const people = new Map();
  events.forEach((event) => {
    (event.audience || []).forEach((entry) => {
      if (entry.type !== "purchase") return;
      const participantKey = normalizeParticipantKey(entry);
      if (!participantKey || participantKey === "name:") return;
      if (!people.has(participantKey)) {
        people.set(participantKey, {
          name: entry.name || "Sem nome",
          email: entry.email || "",
          participantKey,
          possibleDuplicate: !entry.email,
          eventIds: new Set(),
          appearanceKeys: new Set(),
          recurrenceTypes: new Set(),
          validatedEventIds: new Set(),
          appearancesCount: 0,
          lastAppearance: "",
          eventNames: [],
          entries: [],
          ticketIds: new Set()
        });
      }
      const row = people.get(participantKey);
      const ticketKey = entry.ticketId || `${event.id}:${entry.batchKey}:${entry.type}:${entry.date}`;
      if (row.ticketIds.has(ticketKey)) return;
      row.ticketIds.add(ticketKey);
      row.name = row.name || entry.name || "Sem nome";
      row.email = row.email || entry.email || "";
      row.possibleDuplicate = row.possibleDuplicate || !entry.email;
      row.eventIds.add(event.id);
      row.appearanceKeys.add(`${event.id}:${entry.batchKey || entry.batchName || "sem lote"}`);
      if (!row.eventNames.includes(event.name)) row.eventNames.push(event.name);
      row.recurrenceTypes.add("purchase");
      if (entry.validated) {
        row.validatedEventIds.add(event.id);
        row.recurrenceTypes.add("validated");
      }
      const fullEntry = {
        eventId: event.id,
        eventName: event.name,
        date: entry.date || event.eventDateTime || event.eventDate || "",
        type: "purchase",
        validated: Boolean(entry.validated),
        ticketId: entry.ticketId || "",
        batchName: entry.batchName || "Sem lote",
        linkOrCommissioner: entry.linkOrCommissioner || ""
      };
      row.entries.push(fullEntry);
      if (!row.lastAppearance || entryDateValue(fullEntry) > Date.parse(row.lastAppearance || "")) {
        row.lastAppearance = fullEntry.date;
      }
    });
  });
  return [...people.values()]
    .map((row) => ({
      ...row,
      totalEvents: row.eventIds.size,
      appearancesCount: row.eventIds.size,
      validationsCount: row.validatedEventIds.size,
      recurrenceTypes: [...row.recurrenceTypes],
      entries: row.entries.sort((a, b) => entryDateValue(b) - entryDateValue(a))
    }))
    .filter((row) => row.appearancesCount > 1)
    .sort((a, b) => b.totalEvents - a.totalEvents || b.validationsCount - a.validationsCount || b.appearancesCount - a.appearancesCount);
}

function filteredAudienceRecurrence(events = filteredEvents()) {
  const filters = state.recurrenceFilters;
  const min = Math.max(2, Number(filters.min || 2));
  return getAudienceRecurrence(events).filter((row) => {
    const entries = row.entries.filter((entry) => filters.eventId === "all" || entry.eventId === filters.eventId);
    if (!entries.length) return false;
    const typeMatch = filters.type === "all" || filters.type === "purchase" || (filters.type === "validated" && row.validationsCount > 0);
    if (!typeMatch) return false;
    if (filters.validatedOnly && !entries.some((entry) => entry.validated)) return false;
    const scopedAppearances = new Set(entries.map((entry) => entry.eventId)).size;
    return scopedAppearances >= min || (filters.eventId === "all" && row.appearancesCount >= min);
  });
}

function typeBadges(types, validatedCount = 0) {
  const items = [];
  if (types.includes("purchase")) items.push(`<span class="pill good">Compra</span>`);
  if (types.includes("courtesy")) items.push(`<span class="pill warn">Cortesia</span>`);
  items.push(`<span class="pill ${validatedCount ? "good" : "muted-pill"}">${validatedCount ? "Validado" : "Nao validado"}</span>`);
  return `<div class="badge-row">${items.join("")}</div>`;
}

function rateCell(value, total, strong = false, mode = "count-rate") {
  if (!Number(total || 0)) return "-";
  const rate = safeRate(value, total);
  const label = mode === "rate-only" ? pct(rate) : `${int(value)} (${pct(rate)})`;
  return `
    <div class="rate-cell">
      <span class="${strong ? "strong" : ""}">${label}</span>
      <div class="bar thin"><i style="width:${clampPercent(rate)}%"></i></div>
    </div>
  `;
}

function shareCell(value, total) {
  const rate = safeRate(value, total);
  return `
    <div class="rate-cell">
      <span class="strong">${pct(rate)}</span>
      <div class="bar thin"><i style="width:${clampPercent(rate)}%"></i></div>
    </div>
  `;
}

function promoterRanking(events = filteredEvents()) {
  const map = new Map();
  events.forEach((event) => {
    Object.entries(event.promoters || {}).forEach(([name, data]) => {
      const key = normalizeText(name);
      if (!key) return;
      if (!map.has(key)) {
        map.set(key, {
          name: displayName(key),
          sold: 0,
          complimentary: 0,
          validated: 0,
          soldValidated: 0,
          complimentaryValidated: 0,
          revenue: 0,
          events: []
        });
      }
      const row = map.get(key);
      const sold = Number(data.sold || 0);
      const complimentary = Number(data.complimentary || 0);
      const validated = Number(data.validated || 0);
      const soldValidated = rowSoldValidated(data);
      const complimentaryValidated = rowComplimentaryValidated(data);
      const revenue = Number(data.revenue || 0);
      row.sold += sold;
      row.complimentary += complimentary;
      row.validated += validated;
      row.soldValidated += soldValidated;
      row.complimentaryValidated += complimentaryValidated;
      row.revenue += revenue;
      row.events.push({ id: event.id, name: event.name, sold, complimentary, validated, soldValidated, complimentaryValidated, revenue });
    });
  });
  return [...map.values()].sort((a, b) => b.revenue - a.revenue || b.sold - a.sold || b.validated - a.validated);
}

function selectedEvent() {
  return state.events.find((event) => event.id === state.selectedEventId) || state.events[0];
}

function isLoggedIn() {
  return localStorage.getItem(SESSION_KEY) === "active";
}

function login() {
  localStorage.setItem(SESSION_KEY, "active");
  render();
}

function logout() {
  localStorage.removeItem(SESSION_KEY);
  render();
}

function setView(view) {
  state.view = view;
  state.drawerOpen = false;
  render();
}

function openEvent(id) {
  state.selectedEventId = id;
  state.view = "detail";
  state.drawerOpen = false;
  render();
}

function app() {
  return document.getElementById("app");
}

function render() {
  if (!isLoggedIn()) {
    app().innerHTML = renderLogin();
    bindLogin();
    return;
  }

  app().innerHTML = `
    <div class="drawer-backdrop ${state.drawerOpen ? "show" : ""}" data-action="toggle-drawer"></div>
    <div class="app-shell">
      ${renderSidebar()}
      <main class="main">
        ${renderTopbar()}
        ${renderView()}
      </main>
    </div>
  `;
  bindActions();
}

function renderKeepingFocus(id) {
  render();
  const element = document.getElementById(id);
  if (!element) return;
  element.focus();
  if (typeof element.setSelectionRange === "function") {
    const end = String(element.value || "").length;
    try {
      element.setSelectionRange(end, end);
    } catch {
      // Alguns inputs numericos nao aceitam selecao de texto programatica.
    }
  }
}

function renderLogin() {
  return `
    <section class="login">
      <div class="login-panel">
        <div class="login-brand">
          <img class="logo-img" src="/assets/nossa-casa-logo.jpeg" alt="Nossa Casa" />
          <h1>Nossa Casa</h1>
          <p>Dashboard de performance de eventos, vendas, cortesias, validacoes e ranking de comissarios/RPs.</p>
        </div>
        <form class="login-form" id="loginForm">
          <h2>Acesso</h2>
          <label class="field">E-mail<input type="email" value="jordanagomes15@gmail.com" /></label>
          <label class="field">Senha<input type="password" value="admjo123" /></label>
          <button class="primary" type="submit">Entrar</button>
          <p class="muted">Os dados sao lidos automaticamente das pastas Gandaya e PNE.</p>
        </form>
      </div>
    </section>
  `;
}

function bindLogin() {
  document.getElementById("loginForm").addEventListener("submit", (event) => {
    event.preventDefault();
    login();
  });
}

function renderSidebar() {
  const items = [
    ["overview", "Visao geral"],
    ["events", "Eventos"],
    ["commissioners", "Comissarios"],
    ["mailing", "Mailing"],
    ["audienceRecurrence", "Recorrencia"],
    ["validation", "Validacao"]
  ];
  return `
    <aside class="sidebar ${state.drawerOpen ? "open" : ""}">
      <div class="brand-row">
        <img class="logo-img" src="/assets/nossa-casa-logo.jpeg" alt="Nossa Casa" />
        <div><strong>Nossa Casa</strong><span>Performance de eventos</span></div>
      </div>
      <nav class="nav">
        ${items
          .map(([id, label]) => `<button class="${state.view === id ? "active" : ""}" data-view="${id}">${label}</button>`)
          .join("")}
      </nav>
      <div class="sidebar-foot">
        <strong>${state.events.length} eventos</strong><br />
        Gandaya + PNE sincronizados.
      </div>
      <button class="ghost" data-action="logout">Sair</button>
    </aside>
  `;
}

function renderTopbar() {
  const titles = {
    overview: ["Visao geral", "Resumo consolidado de todos os eventos"],
    events: ["Eventos", "Compare resultados e abra o detalhe de cada evento"],
    commissioners: ["Comissarios/RPs", "Ranking geral com parcial por evento"],
    mailing: ["Mailing", "Contatos finais deduplicados por evento ou consolidado"],
    audienceRecurrence: ["Recorrencia de Compradores", "Clientes com compra paga em mais de um evento"],
    validation: ["Validacao", "Leitura consolidada de check-ins e lotes"],
    detail: [selectedEvent()?.name || "Evento", "Detalhe de vendas, lotes e validacoes"]
  };
  const [title, subtitle] = titles[state.view] || titles.overview;
  return `
    <header class="topbar">
      <button class="secondary mobile-menu" data-action="toggle-drawer">Menu</button>
      <div class="section-title">
        <h1>${esc(title)}</h1>
        <p>${esc(subtitle)}</p>
      </div>
      <div class="source-status">Anexos em tempo real</div>
    </header>
  `;
}

function renderView() {
  if (state.view === "events") return renderEvents();
  if (state.view === "commissioners") return renderCommissioners();
  if (state.view === "mailing") return renderMailingPage();
  if (state.view === "audienceRecurrence") return renderAudienceRecurrence();
  if (state.view === "validation") return renderValidation();
  if (state.view === "detail") return renderDetail();
  return renderOverview();
}

function renderOverview() {
  const events = filteredEvents();
  const sum = totals(events);
  const split = salesBreakdown(events);
  const rate = (sum.validated / Math.max(sum.sold + sum.complimentary, 1)) * 100;
  const courtesyRate = safeRate(split.complimentaryValidated, split.complimentary);
  return `
    <section class="grid">
      ${renderDashboardFilters(events)}
      <div class="grid cards">
        ${metric("Faturamento", money(sum.revenue), "Receita total registrada")}
        ${metric("Venda geral", money(split.generalRevenue), `${int(split.generalSold)} ingressos sem link`)}
        ${metric("Venda por link", money(split.linkRevenue), `${pct(safeRate(split.linkRevenue, sum.revenue))} do faturamento`)}
        ${metric("Cortesias", int(sum.complimentary), `${int(split.complimentaryValidated)} validadas (${pct(courtesyRate)})`)}
        ${metric("Check-ins", int(sum.validated), `${pct(rate)} de presenca`)}
        ${metric("PNE inseridos", int(sum.pneInserted), `${int(sum.pneConverted)} convertidos`)}
      </div>
      ${renderSplitSummary(split, sum)}
      <div class="grid two overview-link-grid">
        <div class="card">
          <div class="section-title"><h2>Vendas por link</h2><p>Receita, volume vendido e participacao no faturamento.</p></div>
          ${renderSalesLinkTable(promoterRanking(events).filter((row) => row.revenue > 0 || row.sold > 0).slice(0, 18), sum.revenue, { compact: true })}
        </div>
        <div class="card">
          <div class="section-title"><h2>Cortesias por link</h2><p>Emitidas, validadas e taxa de presenca.</p></div>
          ${renderCourtesyLinkTable(promoterRanking(events).filter((row) => row.complimentary > 0).slice(0, 18), { compact: true })}
        </div>
      </div>
      <div class="card">
        <div class="section-title"><h2>Eventos em destaque</h2><p>Maiores faturamentos dentro do recorte filtrado.</p></div>
        <div class="event-highlight-grid">
          ${events
            .slice()
            .sort((a, b) => Number(b.revenue || 0) - Number(a.revenue || 0))
            .slice(0, 6)
            .map((event) => eventMini(event))
            .join("") || `<p class="notice">Nenhum evento encontrado com os filtros atuais.</p>`}
        </div>
      </div>
    </section>
  `;
}

function renderSplitSummary(split, sum) {
  const linkShare = safeRate(split.linkRevenue, sum.revenue);
  const generalShare = safeRate(split.generalRevenue, sum.revenue);
  const courtesyRate = safeRate(split.complimentaryValidated, split.complimentary);
  const soldRate = safeRate(split.soldValidated, split.sold);
  return `
    <section class="insight-grid">
      <div class="insight-card">
        <span>Origem da receita</span>
        <strong>${pct(linkShare)} via link</strong>
        <div class="stacked-bar">
          <i class="gold" style="width:${clampPercent(generalShare)}%"></i>
          <i class="green" style="width:${clampPercent(linkShare)}%"></i>
        </div>
        <small>${money(split.generalRevenue)} geral / ${money(split.linkRevenue)} por link</small>
      </div>
      <div class="insight-card">
        <span>Validacao paga</span>
        <strong>${pct(soldRate)}</strong>
        <div class="bar"><i style="width:${clampPercent(soldRate)}%"></i></div>
        <small>${int(split.soldValidated)} de ${int(split.sold)} vendidos validados</small>
      </div>
      <div class="insight-card">
        <span>Validacao cortesia</span>
        <strong>${pct(courtesyRate)}</strong>
        <div class="bar"><i style="width:${clampPercent(courtesyRate)}%"></i></div>
        <small>${int(split.complimentaryValidated)} de ${int(split.complimentary)} cortesias validadas</small>
      </div>
    </section>
  `;
}

function renderDashboardFilters(events) {
  return `
    <section class="card filter-panel">
      <div class="section-title">
        <h2>Filtros do dashboard</h2>
        <p>${int(events.length)} de ${int(state.events.length)} eventos no recorte atual</p>
      </div>
      <div class="filter-grid">
        <label class="filter-field">
          <span>Buscar evento</span>
          <input class="search" id="dashboardSearch" value="${esc(state.filters.search)}" placeholder="Nome do evento ou arquivo" />
        </label>
        <label class="filter-field">
          <span>PNE</span>
          <select id="dashboardPne">
            <option value="all" ${state.filters.pne === "all" ? "selected" : ""}>Todos</option>
            <option value="with" ${state.filters.pne === "with" ? "selected" : ""}>Com PNE</option>
            <option value="without" ${state.filters.pne === "without" ? "selected" : ""}>Sem PNE</option>
          </select>
        </label>
        <label class="filter-field">
          <span>Ordenar eventos</span>
          <select id="dashboardSort">
            <option value="date" ${state.filters.sort === "date" ? "selected" : ""}>Data do evento</option>
            <option value="revenue" ${state.filters.sort === "revenue" ? "selected" : ""}>Receita</option>
            <option value="checkins" ${state.filters.sort === "checkins" ? "selected" : ""}>Check-ins</option>
            <option value="presence" ${state.filters.sort === "presence" ? "selected" : ""}>Presenca</option>
            <option value="name" ${state.filters.sort === "name" ? "selected" : ""}>Nome</option>
          </select>
        </label>
      </div>
    </section>
  `;
}

function metric(label, value, note) {
  const longValue = String(value ?? "").length > 22;
  return `<div class="card metric"><span>${esc(label)}</span><strong class="${longValue ? "long-value" : ""}" title="${esc(value)}">${esc(value)}</strong><small class="muted">${esc(note)}</small></div>`;
}

function eventMini(event) {
  const total = Number(event.sold || 0) + Number(event.complimentary || 0);
  const rate = (Number(event.validated || 0) / Math.max(total, 1)) * 100;
  const split = eventSalesBreakdown(event);
  const linkShare = safeRate(split.linkRevenue, event.revenue);
  return `
    <button class="event-mini" data-event="${esc(event.id)}">
      <div>
        <h3>${esc(event.name)}</h3>
        <p class="muted">${money(event.revenue)} em receita</p>
      </div>
      <div class="event-mini-stats">
        <span><b>${int(event.sold)}</b> vendidos</span>
        <span><b>${int(event.complimentary)}</b> cortesias</span>
        <span><b>${pct(rate)}</b> presenca</span>
        <span><b>${pct(linkShare)}</b> por link</span>
      </div>
      <div class="bar"><i style="width:${clampPercent(rate)}%"></i></div>
    </button>
  `;
}

function renderRankingTable(rows) {
  if (!rows.length) return `<p class="notice">Nenhum comissario encontrado.</p>`;
  const totalRevenue = totals().revenue;
  return `
    <div class="table-wrap">
      <table>
        <thead><tr><th>Comissario/RP</th><th>Receita</th><th>% Fat.</th><th>Vendidos</th><th>Val. vendas</th><th>Cortesias</th><th>Val. cortesias</th></tr></thead>
        <tbody>
          ${rows
            .map((row, index) => {
              const key = normalizeText(row.name);
              const expanded = state.expandedPromoter === key;
              const soldRate = safeRate(row.soldValidated, row.sold);
              const courtesyRate = safeRate(row.complimentaryValidated, row.complimentary);
              return `
                <tr class="rank-row" data-promoter="${esc(key)}">
                  <td><strong>${index + 1}. ${esc(row.name)}</strong></td>
                  <td>${money(row.revenue)}</td>
                  <td>${shareCell(row.revenue, totalRevenue)}</td>
                  <td>${int(row.sold)}</td>
                  <td>${row.sold ? rateCell(row.soldValidated, row.sold) : "-"}</td>
                  <td>${int(row.complimentary)}</td>
                  <td>${row.complimentary ? rateCell(row.complimentaryValidated, row.complimentary) : "-"}</td>
                </tr>
                ${
                  expanded
                    ? `<tr><td colspan="7">${renderPromoterEvents(row.events)}</td></tr>`
                    : ""
                }
              `;
            })
            .join("")}
        </tbody>
      </table>
    </div>
  `;
}

function renderSalesLinkTable(rows, totalRevenue, options = {}) {
  if (!rows.length) return `<p class="notice">Nenhum link com venda registrada no recorte atual.</p>`;
  const compact = Boolean(options.compact);
  const salesHeaders = compact
    ? "<th>Link/comissario</th><th>Receita</th><th>Vendidos</th><th>% faturamento</th>"
    : "<th>Link/comissario</th><th>Receita</th><th>% faturamento</th><th>Vendidos</th><th>Val. vendas</th>";
  const salesCols = compact
    ? `
          <col class="name-col" />
          <col class="money-col" />
          <col class="count-col" />
          <col class="percent-col" />`
    : `
          <col class="name-col" />
          <col class="money-col" />
          <col class="percent-col" />
          <col class="count-col" />
          <col class="percent-col" />`;
  return `
    <div class="table-wrap compact-table sales-link-table ${compact ? "overview-compact-table" : ""}">
      <table>
        <colgroup>
          ${salesCols}
        </colgroup>
        <thead><tr>${salesHeaders}</tr></thead>
        <tbody>
          ${rows
            .map((row) => `
              <tr>
                <td data-label="Link/comissario"><strong>${esc(row.name)}</strong></td>
                <td data-label="Receita">${money(row.revenue)}</td>
                ${
                  compact
                    ? `<td data-label="Vendidos">${int(row.sold)}</td><td data-label="% faturamento">${shareCell(row.revenue, totalRevenue)}</td>`
                    : `<td data-label="% faturamento">${shareCell(row.revenue, totalRevenue)}</td><td data-label="Vendidos">${int(row.sold)}</td><td data-label="Val. vendas">${row.sold ? rateCell(row.soldValidated, row.sold) : "-"}</td>`
                }
              </tr>
            `)
            .join("")}
        </tbody>
      </table>
    </div>
  `;
}

function renderCourtesyLinkTable(rows, options = {}) {
  if (!rows.length) return `<p class="notice">Nenhuma cortesia por link no recorte atual.</p>`;
  const compact = Boolean(options.compact);
  return `
    <div class="table-wrap compact-table courtesy-link-table ${compact ? "overview-compact-table" : ""}">
      <table>
        <colgroup>
          <col class="name-col" />
          <col class="count-col" />
          <col class="count-col" />
          <col class="percent-col" />
        </colgroup>
        <thead><tr><th>Link/comissario</th><th>Emitidas</th><th>Validadas</th><th>% validacao</th></tr></thead>
        <tbody>
          ${rows
            .sort((a, b) => b.complimentaryValidated - a.complimentaryValidated || b.complimentary - a.complimentary)
            .map((row) => {
              const rate = safeRate(row.complimentaryValidated, row.complimentary);
              return `
                <tr>
                  <td data-label="Link/comissario"><strong>${esc(row.name)}</strong></td>
                  <td data-label="Cortesias emitidas">${int(row.complimentary)}</td>
                  <td data-label="Validadas">${int(row.complimentaryValidated)}</td>
                  <td data-label="% validacao">${rateCell(row.complimentaryValidated, row.complimentary, true, compact ? "rate-only" : "count-rate")}</td>
                </tr>
              `;
            })
            .join("")}
        </tbody>
      </table>
    </div>
  `;
}

function renderPromoterEvents(events) {
  return `
    <div class="table-wrap">
      <table>
        <thead><tr><th>Evento</th><th>Receita</th><th>Vendidos</th><th>Val. vendas</th><th>Cortesias</th><th>Val. cortesias</th></tr></thead>
        <tbody>
          ${events
            .sort((a, b) => b.revenue - a.revenue)
            .map(
              (event) => `
                <tr>
                  <td><button class="ghost" data-event="${esc(event.id)}">${esc(event.name)}</button></td>
                  <td>${money(event.revenue)}</td>
                  <td>${int(event.sold)}</td>
                  <td>${event.sold ? rateCell(event.soldValidated, event.sold) : "-"}</td>
                  <td>${int(event.complimentary)}</td>
                  <td>${event.complimentary ? rateCell(event.complimentaryValidated, event.complimentary) : "-"}</td>
                </tr>
              `
            )
            .join("")}
        </tbody>
      </table>
    </div>
  `;
}

function renderEvents() {
  const events = filteredEvents();
  return `
    <section class="grid">
      ${renderDashboardFilters(events)}
      <div class="card mailing-toolbar">
        <div class="section-title">
          <h2>Mailing consolidado</h2>
          <p>Participantes finais deduplicados por e-mail, telefone ou nome.</p>
        </div>
        <div class="mailing-actions">
          <button class="secondary" data-action="export-mailing" data-mailing-scope="all">Exportar mailing total</button>
        </div>
      </div>
      <div class="grid event-list">
      ${events
        .map(
          (event) => {
            const rate = eventPresenceRate(event);
            const totalTickets = Number(event.sold || 0) + Number(event.complimentary || 0);
            return `
            <article class="card event-card" data-event="${esc(event.id)}">
              <h3>${esc(event.name)}</h3>
              <p class="muted">${formatDate(event.eventDateTime || event.eventDate)} · ${esc(event.source || "Fonte da pasta de anexos")}</p>
              <div class="event-stats">
                <div><span class="muted">Ingressos</span><strong>${int(totalTickets)}</strong></div>
                <div><span class="muted">Validados</span><strong>${int(event.validated)}</strong></div>
                <div><span class="muted">Taxa</span><strong>${pct(rate)}</strong></div>
                <div><span class="muted">Receita</span><strong>${money(event.revenue)}</strong></div>
              </div>
              <div class="event-card-bars">
                <div><span>Validacao</span>${shareCell(event.validated, totalTickets)}</div>
              </div>
              <button class="primary" data-event="${esc(event.id)}">Abrir evento</button>
            </article>
          `;
          }
        )
        .join("") || `<p class="notice">Nenhum evento encontrado com os filtros atuais.</p>`}
      </div>
    </section>
  `;
}

function renderCommissioners() {
  const events = filteredEvents();
  const rows = promoterRanking(events).filter((row) => normalizeText(row.name).includes(normalizeText(state.query)));
  return `
    <section class="grid">
      ${renderDashboardFilters(events)}
      <div class="card">
        <div class="toolbar">
          <div class="section-title"><h2>Ranking completo</h2><p>Receita, vendidos, cortesias e check-ins por RP.</p></div>
          <input class="search" id="rankSearch" value="${esc(state.query)}" placeholder="Buscar comissario" />
        </div>
        ${renderRankingTable(rows)}
      </div>
    </section>
  `;
}

function renderMailingPage() {
  const events = filteredEvents();
  const selectedEvent = state.mailingEventId === "all" ? null : state.events.find((event) => event.id === state.mailingEventId);
  const scopeEvents = selectedEvent ? [selectedEvent] : events;
  const rows = buildMailingRows(scopeEvents, selectedEvent ? selectedEvent.id : "all");
  const buyers = rows.filter((row) => row.participationType.includes("Compra")).length;
  const courtesy = rows.filter((row) => row.participationType.includes("Cortesia")).length;
  const validated = rows.filter((row) => row.validationCount > 0).length;
  const possibleDuplicates = rows.filter((row) => row.possibleDuplicate).length;
  return `
    <section class="grid">
      ${renderDashboardFilters(events)}
      <div class="card">
        <div class="toolbar mailing-header">
          <div class="section-title">
            <h2>Mailing</h2>
            <p>${selectedEvent ? esc(selectedEvent.name) : "Todos os eventos do recorte atual"} · ${int(rows.length)} contatos unicos</p>
          </div>
          <div class="mailing-actions">
            <label class="filter-field compact-select">
              <span>Evento</span>
              <select id="mailingEvent">
                <option value="all" ${state.mailingEventId === "all" ? "selected" : ""}>Todos os eventos</option>
                ${state.events.map((event) => `<option value="${esc(event.id)}" ${state.mailingEventId === event.id ? "selected" : ""}>${esc(event.name)}</option>`).join("")}
              </select>
            </label>
            <button class="secondary" data-action="export-mailing" data-mailing-scope="${selectedEvent ? "event" : "all"}" ${selectedEvent ? `data-event-id="${esc(selectedEvent.id)}"` : ""}>
              ${selectedEvent ? "Exportar evento" : "Exportar total"}
            </button>
          </div>
        </div>
      </div>
      <div class="grid cards">
        ${metric("Contatos unicos", int(rows.length), "Deduplicados por e-mail/telefone")}
        ${metric("Compradores", int(buyers), "Participantes com compra paga")}
        ${metric("Convidados", int(courtesy), "Participantes com cortesia")}
        ${metric("Com validacao", int(validated), "Pessoas com check-in")}
        ${metric("Possiveis duplicados", int(possibleDuplicates), "Sem e-mail nem telefone")}
      </div>
      ${renderMailingTable(rows)}
    </section>
  `;
}

function recurringEventNames(row, limit = 3) {
  const names = [];
  row.events.forEach((event) => {
    if ((event.sold > 0 || event.complimentary > 0 || event.complimentaryValidated > 0) && !names.includes(event.name)) {
      names.push(event.name);
    }
  });
  const visible = names.slice(0, limit).map((name) => esc(name)).join(", ");
  const extra = names.length > limit ? ` +${names.length - limit}` : "";
  return visible ? `${visible}${extra}` : "-";
}

function renderAudienceFilters(events) {
  const filters = state.recurrenceFilters;
  return `
    <section class="card filter-panel">
      <div class="section-title">
        <h2>Filtros de recorrencia</h2>
        <p>Recorte especifico para compradores pagos.</p>
      </div>
      <div class="filter-grid recurrence-filter-grid">
        <label class="filter-field">
          <span>Evento</span>
          <select id="recurrenceEvent">
            <option value="all" ${filters.eventId === "all" ? "selected" : ""}>Todos</option>
            ${events.map((event) => `<option value="${esc(event.id)}" ${filters.eventId === event.id ? "selected" : ""}>${esc(event.name)}</option>`).join("")}
          </select>
        </label>
        <label class="filter-field">
          <span>Tipo de participacao</span>
          <select id="recurrenceType">
            <option value="all" ${filters.type === "all" ? "selected" : ""}>Compra</option>
            <option value="purchase" ${filters.type === "purchase" ? "selected" : ""}>Compra</option>
            <option value="validated" ${filters.type === "validated" ? "selected" : ""}>Validacao</option>
          </select>
        </label>
        <label class="filter-field">
          <span>Minimo de recorrencia</span>
          <input id="recurrenceMin" type="number" min="2" value="${esc(filters.min)}" />
        </label>
      </div>
      <div class="check-row">
        <label><input id="recurrenceValidatedOnly" type="checkbox" ${filters.validatedOnly ? "checked" : ""} /> Somente quem validou presenca</label>
      </div>
    </section>
  `;
}

function renderAudienceRecurrence() {
  const events = filteredEvents();
  const rows = filteredAudienceRecurrence(events);
  const validated = rows.filter((row) => row.validationsCount > 0).length;
  const maxEvents = rows.reduce((max, row) => Math.max(max, row.totalEvents), 0);
  const totalTickets = rows.reduce((acc, row) => acc + row.entries.length, 0);
  return `
    <section class="grid">
      ${renderDashboardFilters(events)}
      ${renderAudienceFilters(events)}
      <div class="grid cards">
        ${metric("Compradores recorrentes", int(rows.length), "Compra paga em 2+ eventos/lotes")}
        ${metric("Ingressos comprados", int(totalTickets), "Compras dos recorrentes")}
        ${metric("Validaram presenca", int(validated), "Compradores com check-in")}
        ${metric("Max. eventos/pessoa", int(maxEvents), "Maior recorrencia encontrada")}
      </div>
      <div class="card">
        <div class="section-title"><h2>Recorrencia de Compradores</h2><p>${int(rows.length)} compradores no recorte atual.</p></div>
        ${renderAudienceTable(rows)}
      </div>
    </section>
  `;
}

function renderAudienceTable(rows) {
  if (!rows.length) return `<p class="notice">Nenhum comprador recorrente encontrado com os filtros atuais.</p>`;
  return `
    <div class="table-wrap compact-table audience-table recurring-table">
      <table>
        <thead><tr><th>Comprador</th><th>E-mail</th><th>Eventos</th><th>Tipo</th><th>Validacoes</th><th>Ultima aparicao</th></tr></thead>
        <tbody>
          ${rows
            .slice(0, 120)
            .map((row) => {
              const expanded = state.expandedAudienceKey === row.participantKey;
              return `
                <tr class="audience-row ${expanded ? "is-expanded" : ""}" data-audience-key="${esc(row.participantKey)}">
                  <td data-label="Comprador"><strong>${esc(row.name)}</strong>${row.possibleDuplicate ? `<span class="pill warn">Possivel duplicidade</span>` : ""}</td>
                  <td data-label="E-mail">${row.email ? esc(row.email) : "-"}</td>
                  <td data-label="Eventos">${int(row.totalEvents)}</td>
                  <td data-label="Tipo">${typeBadges(row.recurrenceTypes, row.validationsCount)}</td>
                  <td data-label="Validacoes">${int(row.validationsCount)}</td>
                  <td data-label="Ultima aparicao">${formatDate(row.lastAppearance)}</td>
                </tr>
                <tr class="audience-detail-row" data-audience-detail="${esc(row.participantKey)}" ${expanded ? "" : "hidden"}><td colspan="6">${renderAudienceEntries(row.entries)}</td></tr>
              `;
            })
            .join("")}
        </tbody>
      </table>
    </div>
  `;
}

function renderAudienceEntries(entries) {
  const grouped = new Map();
  entries.forEach((entry) => {
    const key = normalizeText(entry.eventName || entry.eventId);
    if (!grouped.has(key)) {
      grouped.set(key, {
        eventName: entry.eventName,
        date: entry.date,
        validatedCount: 0,
        ticketCount: 0,
        batches: new Set(),
        links: new Set()
      });
    }
    const row = grouped.get(key);
    row.ticketCount += 1;
    if (entry.validated) row.validatedCount += 1;
    if (entryDateValue(entry) > entryDateValue(row)) row.date = entry.date;
    if (entry.batchName) row.batches.add(entry.batchName);
    if (entry.linkOrCommissioner) row.links.add(displayName(entry.linkOrCommissioner));
  });
  return `
    <div class="audience-entry-list">
      ${[...grouped.values()]
        .sort((a, b) => entryDateValue(b) - entryDateValue(a))
        .map(
          (entry) => `
            <div class="audience-entry">
              <strong>${esc(entry.eventName)}</strong>
              <span>Compra · ${int(entry.ticketCount)} ingresso${entry.ticketCount > 1 ? "s" : ""} · ${int(entry.validatedCount)} validado${entry.validatedCount === 1 ? "" : "s"}</span>
              <small>${esc([...entry.batches].join(", ") || "Sem lote")}${entry.links.size ? ` · ${esc([...entry.links].join(", "))}` : ""} · ${formatDate(entry.date)}</small>
            </div>
          `
        )
        .join("")}
    </div>
  `;
}

function renderRecurringBuyers() {
  const events = filteredEvents();
  const analysis = recurringAnalysis(events);
  const buyers = analysis.buyers;
  const recurringRevenue = buyers.reduce((acc, row) => acc + Number(row.revenue || 0), 0);
  const recurringSold = buyers.reduce((acc, row) => acc + Number(row.sold || 0), 0);
  const recurringSoldValidated = buyers.reduce((acc, row) => acc + Number(row.soldValidated || 0), 0);
  return `
    <section class="grid">
      ${renderDashboardFilters(events)}
      <div class="grid cards">
        ${metric("Compradores recorrentes", int(buyers.length), "Compra paga em 2+ eventos")}
        ${metric("Receita recorrente", money(recurringRevenue), `${int(recurringSold)} ingressos pagos`)}
        ${metric("Ingressos validados", int(recurringSoldValidated), `${pct(safeRate(recurringSoldValidated, recurringSold))} de presenca paga`)}
        ${metric("Media por cliente", money(buyers.length ? recurringRevenue / buyers.length : 0), "Receita recorrente / clientes")}
      </div>
      <div class="card">
        <div class="section-title"><h2>Compradores recorrentes</h2><p>Clientes com compra paga em dois ou mais eventos, ordenados por receita.</p></div>
        ${renderRecurringBuyersTable(buyers)}
      </div>
    </section>
  `;
}

function renderRecurringBuyersTable(rows) {
  if (!rows.length) return `<p class="notice">Nenhum comprador recorrente encontrado no recorte atual.</p>`;
  return `
    <div class="table-wrap compact-table recurring-table">
      <table>
        <thead><tr><th>Comprador</th><th>Eventos</th><th>Ingressos</th><th>Validados</th><th>Receita</th><th>Eventos recentes</th></tr></thead>
        <tbody>
          ${rows
            .slice(0, 60)
            .map(
              (row) => `
                <tr>
                  <td data-label="Comprador"><strong>${esc(row.name)}</strong></td>
                  <td data-label="Eventos">${int(row.paidEventCount)}</td>
                  <td data-label="Ingressos">${int(row.sold)}</td>
                  <td data-label="Validados">${row.sold ? rateCell(row.soldValidated, row.sold) : "-"}</td>
                  <td data-label="Receita">${money(row.revenue)}</td>
                  <td data-label="Eventos recentes">${recurringEventNames(row)}</td>
                </tr>
              `
            )
            .join("")}
        </tbody>
      </table>
    </div>
  `;
}

function renderValidation() {
  const events = filteredEvents();
  const rows = events.map((event) => {
    const total = Number(event.sold || 0) + Number(event.complimentary || 0);
    const rate = (Number(event.validated || 0) / Math.max(total, 1)) * 100;
    return { ...event, total, rate };
  });
  return `
    <section class="grid">
      ${renderDashboardFilters(events)}
      <div class="card">
        <div class="section-title"><h2>Validacao por evento</h2><p>Consolidado de check-ins pela aba Ingressos.</p></div>
        <div class="table-wrap table-spaced">
          <table>
            <thead><tr><th>Evento</th><th>Ingressos</th><th>Check-ins</th><th>Taxa</th><th>PNE inseridos</th><th>PNE convertidos</th><th>Acao</th></tr></thead>
            <tbody>
              ${rows
                .map(
                  (event) => `
                    <tr>
                      <td><strong>${esc(event.name)}</strong></td>
                      <td>${int(event.total)}</td>
                      <td>${int(event.validated)}</td>
                      <td>${rateCell(event.validated, event.total, true)}</td>
                      <td>${event.pne ? int(event.pne.inserted) : "-"}</td>
                      <td>${event.pne ? int(event.pne.converted) : "-"}</td>
                      <td><button class="ghost" data-event="${esc(event.id)}">Ver lotes</button></td>
                    </tr>
                  `
                )
                .join("") || `<tr><td colspan="7">Nenhum evento encontrado com os filtros atuais.</td></tr>`}
            </tbody>
          </table>
        </div>
      </div>
    </section>
  `;
}

function renderDetail() {
  const event = selectedEvent();
  if (!event) return `<p class="notice">Nenhum evento selecionado.</p>`;
  const total = Number(event.sold || 0) + Number(event.complimentary || 0);
  const rate = (Number(event.validated || 0) / Math.max(total, 1)) * 100;
  const split = eventSalesBreakdown(event);
  const audienceSummary = eventAudienceSummary(event);
  return `
    <section class="grid">
      <div class="grid cards">
        ${metric("Ingressos emitidos", int(total), `${int(event.sold)} vendas / ${int(event.complimentary)} cortesias`)}
        ${metric("Faturamento", money(event.revenue), "Receita total do evento")}
        ${metric("Venda geral", money(split.generalRevenue), `${int(split.generalSold)} ingressos sem link`)}
        ${metric("Venda por link", money(split.linkRevenue), `${pct(safeRate(split.linkRevenue, event.revenue))} do faturamento`)}
        ${metric("Cortesias", int(event.complimentary), `${int(split.complimentaryValidated)} validadas (${pct(safeRate(split.complimentaryValidated, event.complimentary))})`)}
        ${metric("Check-ins", int(event.validated), `${pct(rate)} de presenca`)}
        ${metric("Compradores unicos", int(audienceSummary.uniqueBuyers), "Participantes finais com compra")}
        ${metric("Convidados unicos", int(audienceSummary.uniqueCourtesy), "Participantes finais com cortesia")}
        ${metric("Pessoas unicas", int(audienceSummary.uniquePeople), "Deduplicadas para mailing")}
        ${metric("PNE", event.pne ? `${int(event.pne.converted)}/${int(event.pne.inserted)}` : "-", "Convertidos / inseridos")}
      </div>
      <div class="card">
        <div class="toolbar">
          <div class="tabs">
            ${["batches", "promoters", "pne", "summary"].map((tab) => `<button class="tab ${state.detailTab === tab ? "active" : ""}" data-detail-tab="${tab}">${tabLabel(tab)}</button>`).join("")}
          </div>
          <button class="secondary" data-view="events">Voltar</button>
        </div>
        ${state.detailTab === "promoters" ? renderEventPromoterSplit(event) : state.detailTab === "pne" ? renderPne(event) : state.detailTab === "summary" ? renderEventSummary(event) : renderBatches(event)}
      </div>
    </section>
  `;
}

function tabLabel(tab) {
  return { batches: "Lote", promoters: "Link", pne: "PNE", summary: "Resumo" }[tab] || tab;
}

function renderPne(event) {
  if (!event.pne) {
    return `<p class="notice">Nao encontrei PDF PNE correspondente para este evento na pasta PNE.</p>`;
  }
  const rate = (Number(event.pne.converted || 0) / Math.max(Number(event.pne.inserted || 0), 1)) * 100;
  return `
    <div class="grid">
      <div class="grid cards">
        ${metric("PNE inseridos", int(event.pne.inserted), "Total do PDF")}
        ${metric("PNE convertidos", int(event.pne.converted), `${pct(rate)} de conversao`)}
        ${metric("Fonte PNE", event.pne.source, "Documents/Nossa Casa/PNE")}
      </div>
      <div class="table-wrap">
        <table>
          <thead><tr><th>Usuario</th><th>Inseridos</th><th>Convertidos</th><th>Taxa</th></tr></thead>
          <tbody>
            ${(event.pne.people || [])
              .sort((a, b) => b.converted - a.converted || b.inserted - a.inserted)
              .map((person) => {
                const personRate = (Number(person.converted || 0) / Math.max(Number(person.inserted || 0), 1)) * 100;
                return `
                  <tr>
                    <td><strong>${esc(person.name)}</strong></td>
                    <td>${int(person.inserted)}</td>
                    <td>${int(person.converted)}</td>
                    <td><span class="pill ${personRate >= 35 ? "good" : "warn"}">${pct(personRate)}</span></td>
                  </tr>
                `;
              })
              .join("")}
          </tbody>
        </table>
      </div>
    </div>
  `;
}

function eventPromoters(event) {
  return Object.entries(event.promoters || {})
    .map(([name, data]) => ({
      name: displayName(name),
      sold: Number(data.sold || 0),
      complimentary: Number(data.complimentary || 0),
      validated: Number(data.validated || 0),
      soldValidated: rowSoldValidated(data),
      complimentaryValidated: rowComplimentaryValidated(data),
      revenue: Number(data.revenue || 0),
      events: [{ id: event.id, name: event.name, ...data, soldValidated: rowSoldValidated(data), complimentaryValidated: rowComplimentaryValidated(data) }]
    }))
    .sort((a, b) => b.revenue - a.revenue || b.sold - a.sold);
}

function renderEventPromoterSplit(event) {
  const rows = eventPromoters(event);
  return `
    <div class="grid two promoter-split" style="--promoter-left:${state.promoterSplit}%">
      <div class="promoter-pane">
        <div class="section-title inline-section"><h3>Vendas por link</h3><p>% sobre o faturamento deste evento.</p></div>
        ${renderSalesLinkTable(rows.filter((row) => row.revenue > 0 || row.sold > 0), Number(event.revenue || 0))}
      </div>
      <button
        class="split-resizer"
        type="button"
        data-action="resize-promoter-split"
        aria-label="Redimensionar colunas"
        title="Arraste para redimensionar"
      ></button>
      <div class="promoter-pane">
        <div class="section-title inline-section"><h3>Cortesias por link</h3><p>Validadas em quantidade e percentual.</p></div>
        ${renderCourtesyLinkTable(rows.filter((row) => row.complimentary > 0))}
      </div>
    </div>
  `;
}

function renderBatches(event) {
  const rows = (event.batches || []).slice().sort((a, b) => b.revenue - a.revenue || b.sold - a.sold || b.validated - a.validated);
  return `
    <div class="table-wrap">
      <table>
        <thead><tr><th>Area/Tipo</th><th>Vendidos</th><th>Val. vendas</th><th>Cortesias</th><th>Val. cortesias</th><th>Receita</th><th>% Fat.</th></tr></thead>
        <tbody>
          ${rows
            .map((batch) => {
              const sold = Number(batch.sold || 0);
              const complimentary = Number(batch.complimentary || 0);
              const soldValidated = rowSoldValidated(batch);
              const complimentaryValidated = rowComplimentaryValidated(batch);
              const soldRate = safeRate(soldValidated, sold);
              const courtesyRate = safeRate(complimentaryValidated, complimentary);
              return `
                <tr>
                  <td><strong>${esc(batch.label)}</strong></td>
                  <td>${int(sold)}</td>
                  <td>${sold ? rateCell(soldValidated, sold) : "-"}</td>
                  <td>${int(complimentary)}</td>
                  <td>${complimentary ? rateCell(complimentaryValidated, complimentary, true) : "-"}</td>
                  <td>${money(batch.revenue)}</td>
                  <td>${Number(batch.revenue || 0) ? shareCell(batch.revenue, event.revenue) : "-"}</td>
                </tr>
              `;
            })
            .join("")}
        </tbody>
      </table>
    </div>
  `;
}

function renderMailingTable(rows, limit = 120) {
  return `
    <div class="table-wrap compact-table mailing-table">
      <table>
        <thead><tr><th>Nome</th><th>E-mail</th><th>Telefone</th><th>Tipo</th><th>Ingressos</th><th>Validacoes</th><th>Origem/link</th></tr></thead>
        <tbody>
          ${rows
            .slice(0, limit)
            .map(
              (row) => `
                <tr>
                  <td data-label="Nome"><strong>${esc(row.name)}</strong>${row.possibleDuplicate ? `<span class="pill warn">Possivel duplicidade</span>` : ""}</td>
                  <td data-label="E-mail">${row.email ? esc(row.email) : "-"}</td>
                  <td data-label="Telefone">${row.phone ? esc(row.phone) : "-"}</td>
                  <td data-label="Tipo">${esc(row.participationType)}</td>
                  <td data-label="Ingressos">${int(row.tickets)}</td>
                  <td data-label="Validacoes">${int(row.validationCount)}</td>
                  <td data-label="Origem/link">${esc(row.origins.slice(0, 3).join(", ") || "-")}</td>
                </tr>
              `
            )
            .join("") || `<tr><td colspan="7">Nenhum participante encontrado.</td></tr>`}
        </tbody>
      </table>
    </div>
  `;
}

function renderMailing(event) {
  const rows = buildMailingRows([event], event.id);
  const buyers = rows.filter((row) => row.participationType.includes("Compra")).length;
  const courtesy = rows.filter((row) => row.participationType.includes("Cortesia")).length;
  const validated = rows.filter((row) => row.validationCount > 0).length;
  const possibleDuplicates = rows.filter((row) => row.possibleDuplicate).length;
  return `
    <div class="grid mailing-panel">
      <div class="toolbar mailing-header">
        <div class="section-title">
          <h3>Mailing do evento</h3>
          <p>Participantes finais deduplicados. Cortesias consideram quem recebeu o ingresso, nao quem enviou.</p>
        </div>
        <div class="mailing-actions">
          <button class="secondary" data-action="export-mailing" data-mailing-scope="event" data-event-id="${esc(event.id)}">Exportar evento</button>
          <button class="ghost" data-action="export-mailing" data-mailing-scope="all">Exportar total</button>
        </div>
      </div>
      <div class="grid cards">
        ${metric("Contatos unicos", int(rows.length), "Deduplicados no evento")}
        ${metric("Compradores", int(buyers), "Participantes com compra paga")}
        ${metric("Convidados", int(courtesy), "Participantes com cortesia")}
        ${metric("Com validacao", int(validated), "Pessoas com check-in")}
        ${metric("Possiveis duplicados", int(possibleDuplicates), "Sem e-mail nem telefone")}
      </div>
      ${renderMailingTable(rows, 80)}
    </div>
  `;
}

function renderEventSummary(event) {
  return `
    <div class="grid two">
      <div>
        <h3>Origem</h3>
        <p class="muted">${esc(event.source || "Fonte da pasta de anexos")}</p>
        <p class="muted">${event.pne ? `PNE: ${esc(event.pne.source)}` : "Sem PDF PNE vinculado"}</p>
        <h3>Leitura aplicada</h3>
        <p>Os nomes de lote e links similares foram mesclados por normalizacao. Exemplo: "convidadothicenora" e variacoes com separadores entram no mesmo grupo.</p>
      </div>
      <div>
        <h3>Atualizacao</h3>
        <p>Novos arquivos nas pastas Gandaya e PNE sao incorporados automaticamente enquanto a previa local estiver rodando.</p>
      </div>
    </div>
  `;
}

function toggleAudienceRow(row) {
  const key = row.dataset.audienceKey;
  const nextKey = state.expandedAudienceKey === key ? "" : key;
  state.expandedAudienceKey = nextKey;
  document.querySelectorAll(".audience-row").forEach((item) => {
    item.classList.toggle("is-expanded", item.dataset.audienceKey === nextKey);
  });
  document.querySelectorAll(".audience-detail-row").forEach((detail) => {
    detail.hidden = detail.dataset.audienceDetail !== nextKey;
  });
}

function bindActions() {
  document.querySelectorAll("[data-view]").forEach((button) => {
    button.addEventListener("click", () => setView(button.dataset.view));
  });
  document.querySelectorAll("[data-event]").forEach((button) => {
    button.addEventListener("click", () => openEvent(button.dataset.event));
  });
  document.querySelectorAll("[data-promoter]").forEach((row) => {
    row.addEventListener("click", () => {
      state.expandedPromoter = state.expandedPromoter === row.dataset.promoter ? "" : row.dataset.promoter;
      render();
    });
  });
  document.querySelectorAll("[data-detail-tab]").forEach((button) => {
    button.addEventListener("click", () => {
      state.detailTab = button.dataset.detailTab;
      render();
    });
  });
  document.querySelectorAll(".audience-row").forEach((row) => {
    row.addEventListener("click", () => {
      toggleAudienceRow(row);
    });
  });
  document.querySelectorAll("[data-action='toggle-drawer']").forEach((button) => {
    button.addEventListener("click", () => {
      state.drawerOpen = !state.drawerOpen;
      render();
    });
  });
  document.querySelectorAll("[data-action='export-mailing']").forEach((button) => {
    button.addEventListener("click", (event) => {
      event.stopPropagation();
      exportMailingCsv(button.dataset.mailingScope === "event" ? button.dataset.eventId : "all");
    });
  });
  document.querySelector("[data-action='logout']")?.addEventListener("click", logout);
  document.getElementById("rankSearch")?.addEventListener("input", (event) => {
    state.query = event.target.value;
    renderKeepingFocus("rankSearch");
  });
  document.getElementById("dashboardSearch")?.addEventListener("input", (event) => {
    state.filters.search = event.target.value;
    renderKeepingFocus("dashboardSearch");
  });
  document.getElementById("dashboardPne")?.addEventListener("change", (event) => {
    state.filters.pne = event.target.value;
    render();
  });
  document.getElementById("dashboardSort")?.addEventListener("change", (event) => {
    state.filters.sort = event.target.value;
    render();
  });
  document.getElementById("recurrenceEvent")?.addEventListener("change", (event) => {
    state.recurrenceFilters.eventId = event.target.value;
    state.expandedAudienceKey = "";
    render();
  });
  document.getElementById("recurrenceType")?.addEventListener("change", (event) => {
    state.recurrenceFilters.type = event.target.value;
    state.expandedAudienceKey = "";
    render();
  });
  document.getElementById("recurrenceMin")?.addEventListener("input", (event) => {
    state.recurrenceFilters.min = event.target.value;
    state.expandedAudienceKey = "";
    renderKeepingFocus("recurrenceMin");
  });
  document.getElementById("recurrenceValidatedOnly")?.addEventListener("change", (event) => {
    state.recurrenceFilters.validatedOnly = event.target.checked;
    state.expandedAudienceKey = "";
    render();
  });
  document.getElementById("mailingEvent")?.addEventListener("change", (event) => {
    state.mailingEventId = event.target.value;
    render();
  });
  bindPromoterSplitResize();
}

function setPromoterSplit(value, container) {
  state.promoterSplit = Math.round(Math.min(76, Math.max(48, value)));
  container?.style.setProperty("--promoter-left", `${state.promoterSplit}%`);
  try {
    localStorage.setItem(PROMOTER_SPLIT_KEY, String(state.promoterSplit));
  } catch {
    // O ajuste ainda vale na tela atual mesmo quando o navegador bloqueia armazenamento.
  }
}

function bindPromoterSplitResize() {
  const handle = document.querySelector("[data-action='resize-promoter-split']");
  const container = handle?.closest(".promoter-split");
  if (!handle || !container) return;

  const updateFromPoint = (clientX) => {
    const rect = container.getBoundingClientRect();
    if (!rect.width) return;
    setPromoterSplit(((clientX - rect.left) / rect.width) * 100, container);
  };

  handle.addEventListener("pointerdown", (event) => {
    event.preventDefault();
    handle.setPointerCapture?.(event.pointerId);
    document.body.classList.add("is-resizing");
    updateFromPoint(event.clientX);

    const onMove = (moveEvent) => updateFromPoint(moveEvent.clientX);
    const onUp = () => {
      document.body.classList.remove("is-resizing");
      window.removeEventListener("pointermove", onMove);
      window.removeEventListener("pointerup", onUp);
    };

    window.addEventListener("pointermove", onMove);
    window.addEventListener("pointerup", onUp, { once: true });
  });

  handle.addEventListener("keydown", (event) => {
    const step = event.shiftKey ? 6 : 3;
    if (event.key === "ArrowLeft") {
      event.preventDefault();
      setPromoterSplit(state.promoterSplit - step, container);
    }
    if (event.key === "ArrowRight") {
      event.preventDefault();
      setPromoterSplit(state.promoterSplit + step, container);
    }
    if (event.key === "Home") {
      event.preventDefault();
      setPromoterSplit(48, container);
    }
    if (event.key === "End") {
      event.preventDefault();
      setPromoterSplit(76, container);
    }
  });

  handle.addEventListener("dblclick", () => setPromoterSplit(63, container));
}

render();
startRealtimeDataSync();
