const PROMOTER_SPLIT_KEY = "nossa-casa-promoter-split-v1";
const SIDEBAR_COLLAPSED_KEY = "nossa-casa-sidebar-collapsed-v1";
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
  salesCodeDrawerKey: "",
  batchDrawerGroupKey: "",
  drawerReturnSelector: "",
  pendingDrawerFocus: false,
  drawerOpen: false,
  sidebarCollapsed: loadSidebarCollapsed(),
  syncStatus: "ok",
  authStatus: "checking",
  authError: "",
  privateDataLoaded: false,
  privateDataLoading: false,
  privateDataError: "",
  detailTab: "batches",
  promoterSplit: loadPromoterSplit(),
  query: "",
  expandedAudienceKey: "",
  mailingEventId: "all",
  mailingPage: 1,
  audiencePage: 1,
  profileEventId: "all",
  profileFilters: {
    ticketType: "all",
    gender: "all",
    ageBand: "all",
    segment: "main"
  },
  codeRankingSort: "revenue",
  promoterLinkSearch: "",
  batchFilters: {
    search: "",
    type: "all",
    sort: "revenue"
  },
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
  },
  showSignup: false,
  signupSubmitting: false,
  signupError: "",
  signupSuccess: false,
  accessRequests: [],
  accessRequestsLoaded: false,
  accessRequestsLoading: false,
  accessRequestsError: "",
  accessDecisionBusy: ""
};

let activeDataVersion = dataVersion(embeddedData);

function loadEvents() {
  return embeddedData?.events?.length ? embeddedData.events : fallbackEvents;
}

function loadPromoterSplit() {
  try {
    const saved = Number(localStorage.getItem(PROMOTER_SPLIT_KEY));
    return Number.isFinite(saved) ? Math.min(78, Math.max(22, saved)) : 63;
  } catch {
    return 63;
  }
}

function loadSidebarCollapsed() {
  try {
    return localStorage.getItem(SIDEBAR_COLLAPSED_KEY) === "1";
  } catch {
    return false;
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
  if (state.privateDataLoaded) {
    state.privateDataLoaded = false;
    state.privateDataError = "";
    if (["audienceProfile", "mailing", "audienceRecurrence"].includes(state.view)) {
      setTimeout(() => ensurePrivateData(), 0);
    }
  }
  activeDataVersion = nextVersion;
  if (selectedId && !state.events.some((event) => event.id === selectedId)) {
    state.selectedEventId = null;
    state.view = "overview";
  }
  render();
}

function setSyncStatus(status, options = {}) {
  const shouldRender = options.render !== false;
  if (state.syncStatus === status) return;
  state.syncStatus = status;
  if (shouldRender) render();
}

async function refreshGeneratedData() {
  if (location.protocol === "file:") return;
  const previousStatus = state.syncStatus;
  state.syncStatus = "syncing";
  try {
    const response = await fetch(`generated-data.js?sync=${Date.now()}`, { cache: "no-store" });
    if (!response.ok) throw new Error(`Falha ao buscar generated-data.js: ${response.status}`);
    applyGeneratedData(parseGeneratedDataScript(await response.text()));
    if (previousStatus === "ok") {
      state.syncStatus = "ok";
    } else {
      setSyncStatus("ok");
    }
  } catch {
    if (previousStatus === "error") {
      state.syncStatus = "error";
    } else {
      setSyncStatus("error");
    }
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
  if ((!event?.audience || !event.audience.length) && event?.audienceSummary) {
    return {
      uniquePeople: Number(event.audienceSummary.uniquePeople || 0),
      uniqueBuyers: Number(event.audienceSummary.uniqueBuyers || 0),
      uniqueCourtesy: Number(event.audienceSummary.uniqueCourtesy || 0)
    };
  }
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

function renderPrivateDataGate(title = "Dados privados") {
  if (!state.privateDataLoading && !state.privateDataLoaded && !state.privateDataError) {
    setTimeout(() => ensurePrivateData(), 0);
  }
  return `
    <section class="grid">
      ${renderDashboardFilters(filteredEvents())}
      <div class="card">
        <div class="section-title">
          <h2>${esc(title)}</h2>
          <p>Esta area usa dados de audiencia/mailing protegidos por sessao no servidor.</p>
        </div>
        ${
          state.privateDataError
            ? `<p class="notice warning">${esc(state.privateDataError)}</p>`
            : `<p class="notice">${state.privateDataLoading ? "Carregando dados privados..." : "Preparando carregamento seguro..."}</p>`
        }
      </div>
    </section>
  `;
}

function requirePrivateData(title) {
  if (state.privateDataLoaded) return "";
  return renderPrivateDataGate(title);
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

function cleanAudienceGender(value) {
  const normalized = normalizeText(value);
  if (!normalized) return "Nao informado";
  if (normalized.startsWith("masc") || normalized === "m") return "Masculino";
  if (normalized.startsWith("fem") || normalized === "f") return "Feminino";
  if (normalized.includes("nao") || normalized.includes("prefiro")) return "Nao informado";
  return displayName(value);
}

function audienceAgeBand(age) {
  const value = Number(age || 0);
  if (!value || value < 1) return "Nao informado";
  if (value <= 17) return "Ate 17";
  if (value <= 24) return "18 a 24";
  if (value <= 34) return "25 a 34";
  if (value <= 44) return "35 a 44";
  return "45+";
}

function audienceLabel(value, fallback = "Nao informado") {
  const text = String(value || "").trim();
  return text ? displayName(text) : fallback;
}

function incrementAudienceBucket(map, key, ticket = null) {
  if (!map.has(key)) {
    map.set(key, {
      label: key,
      people: new Set(),
      tickets: 0,
      validated: 0,
      purchases: 0,
      courtesy: 0
    });
  }
  const row = map.get(key);
  if (!ticket) return row;
  row.tickets += 1;
  if (ticket.validated) row.validated += 1;
  if (ticket.type === "purchase") row.purchases += 1;
  if (ticket.type === "courtesy") row.courtesy += 1;
  if (ticket.personKey) row.people.add(ticket.personKey);
  return row;
}

function entryMatchesAudienceProfile(entry, filters = {}) {
  const type = filters.ticketType || "all";
  if (type === "purchase" && entry.type !== "purchase") return false;
  if (type === "courtesy" && entry.type !== "courtesy") return false;
  if (type === "validated" && !entry.validated) return false;
  if (filters.gender && filters.gender !== "all" && cleanAudienceGender(entry.gender) !== filters.gender) return false;
  if (filters.ageBand && filters.ageBand !== "all" && audienceAgeBand(entry.age) !== filters.ageBand) return false;
  return true;
}

function collectAudienceProfile(events, filters = {}) {
  const people = new Map();
  const gender = new Map();
  const ages = new Map();
  const ticketTypes = new Map();
  const links = new Map();
  const batches = new Map();
  const entries = audienceEntriesFromEvents(events).filter((entry) => entryMatchesAudienceProfile(entry, filters));

  entries.forEach((entry, index) => {
    const personKey = personMailingKey(entry) || normalizeParticipantKey(entry) || `ticket:${entry.ticketId || index}`;
    if (!people.has(personKey)) {
      people.set(personKey, {
        key: personKey,
        name: entry.name || "Sem nome",
        email: String(entry.email || "").trim().toLowerCase(),
        phone: normalizePhone(entry.phone),
        age: Number(entry.age || 0),
        gender: cleanAudienceGender(entry.gender),
        tickets: 0,
        purchases: 0,
        courtesy: 0,
        validated: 0,
        events: new Set()
      });
    }
    const person = people.get(personKey);
    person.name = person.name || entry.name || "Sem nome";
    person.email = person.email || String(entry.email || "").trim().toLowerCase();
    person.phone = person.phone || normalizePhone(entry.phone);
    if (!person.age && Number(entry.age || 0) > 0) person.age = Number(entry.age || 0);
    if (person.gender === "Nao informado" && cleanAudienceGender(entry.gender) !== "Nao informado") {
      person.gender = cleanAudienceGender(entry.gender);
    }
    person.tickets += 1;
    if (entry.type === "purchase") person.purchases += 1;
    if (entry.type === "courtesy") person.courtesy += 1;
    if (entry.validated) person.validated += 1;
    if (entry.eventName || entry.eventId) person.events.add(entry.eventName || entry.eventId);

    const ticket = { ...entry, personKey };
    incrementAudienceBucket(gender, cleanAudienceGender(entry.gender), ticket);
    incrementAudienceBucket(ages, audienceAgeBand(entry.age), ticket);
    incrementAudienceBucket(ticketTypes, entry.type === "courtesy" ? "Cortesia" : "Compra", ticket);
    incrementAudienceBucket(links, audienceLabel(entry.linkOrCommissioner, "Sem link"), ticket);
    incrementAudienceBucket(batches, entry.rawBatchName || entry.batchName || "Sem lote", ticket);
  });

  const peopleRows = [...people.values()];
  const knownAges = peopleRows.map((row) => Number(row.age || 0)).filter((age) => age > 0);
  const knownGenderRows = [...gender.values()].filter((row) => row.label !== "Nao informado");
  const dominantGender = knownGenderRows.sort((a, b) => b.people.size - a.people.size)[0]?.label || "-";
  const avgAge = knownAges.length ? knownAges.reduce((acc, age) => acc + age, 0) / knownAges.length : 0;
  const buyers = peopleRows.filter((row) => row.purchases > 0).length;
  const courtesy = peopleRows.filter((row) => row.courtesy > 0).length;
  const validatedPeople = peopleRows.filter((row) => row.validated > 0).length;

  const normalizeRows = (map, totalPeople = peopleRows.length) =>
    [...map.values()]
      .map((row) => ({
        ...row,
        peopleCount: row.people.size,
        share: safeRate(row.people.size, totalPeople)
      }))
      .sort((a, b) => b.peopleCount - a.peopleCount || b.tickets - a.tickets || String(a.label).localeCompare(String(b.label), "pt-BR"));

  return {
    entries,
    peopleRows,
    summary: {
      uniquePeople: peopleRows.length,
      tickets: entries.length,
      buyers,
      courtesy,
      validatedPeople,
      validatedTickets: entries.filter((entry) => entry.validated).length,
      avgAge,
      knownAges: knownAges.length,
      knownGender: knownGenderRows.reduce((acc, row) => acc + row.people.size, 0),
      dominantGender
    },
    genderRows: normalizeRows(gender),
    ageRows: normalizeRows(ages),
    typeRows: normalizeRows(ticketTypes),
    linkRows: normalizeRows(links).slice(0, 12),
    batchRows: normalizeRows(batches).slice(0, 12)
  };
}

function buildAudienceProfile(events = filteredEvents(), filters = {}) {
  const profile = collectAudienceProfile(events, filters);
  profile.eventRows = events
    .map((event) => {
      const eventProfile = collectAudienceProfile([event], filters);
      return {
        id: event.id,
        name: event.name,
        revenue: Number(event.revenue || 0),
        ...eventProfile.summary,
        presenceRate: safeRate(eventProfile.summary.validatedTickets, eventProfile.summary.tickets)
      };
    })
    .sort((a, b) => b.uniquePeople - a.uniquePeople || b.tickets - a.tickets || b.revenue - a.revenue);
  return profile;
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

async function exportMailingCsv(eventId = "all") {
  if (!state.privateDataLoaded) {
    await ensurePrivateData();
    if (!state.privateDataLoaded) return;
  }
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

function codeConversion(row, type = "sales") {
  if (type === "courtesy") return safeRate(row.complimentaryValidated, row.complimentary);
  return safeRate(row.soldValidated, row.sold);
}

function sortCodeRanking(rows, type = "sales") {
  return rows.slice().sort((a, b) => {
    if (state.codeRankingSort === "conversion") {
      return (
        codeConversion(b, type) - codeConversion(a, type) ||
        Number(b.soldValidated || b.complimentaryValidated || 0) - Number(a.soldValidated || a.complimentaryValidated || 0) ||
        Number(b.sold || b.complimentary || 0) - Number(a.sold || a.complimentary || 0) ||
        Number(b.validated || 0) - Number(a.validated || 0) ||
        Number(b.revenue || 0) - Number(a.revenue || 0)
      );
    }
    return Number(b.revenue || 0) - Number(a.revenue || 0) || Number(b.sold || 0) - Number(a.sold || 0) || Number(b.validated || 0) - Number(a.validated || 0);
  });
}

function salesCodeKey(name) {
  return normalizeCodeName(name || "sem codigo");
}

function normalizeCodeName(name) {
  return normalizeText(name).replace(/\s+/g, "");
}

function salesCodeBatchRows(row, eventRow) {
  const event = state.events.find((item) => item.id === eventRow.id);
  const codeKey = normalizeCodeName(row.name);
  const grouped = new Map();
  let hasRevenueByEntry = false;
  (event?.audience || []).forEach((entry) => {
    if (entry.type !== "purchase") return;
    if (normalizeCodeName(entry.linkOrCommissioner || "") !== codeKey) return;
    const batchName = entry.batchName || "Sem lote";
    const batchKey = normalizeBatch(batchName);
    if (!grouped.has(batchKey)) {
      grouped.set(batchKey, {
        label: batchName,
        sold: 0,
        soldValidated: 0,
        revenue: 0,
        revenueEstimated: false
      });
    }
    const batch = grouped.get(batchKey);
    batch.sold += 1;
    if (entry.validated) batch.soldValidated += 1;
    if (Number.isFinite(Number(entry.revenue)) && Number(entry.revenue) > 0) {
      hasRevenueByEntry = true;
      batch.revenue += Number(entry.revenue || 0);
    }
  });
  const rows = [...grouped.values()].sort((a, b) => b.sold - a.sold || b.soldValidated - a.soldValidated || a.label.localeCompare(b.label));
  if (rows.length) {
    if (!hasRevenueByEntry && Number(eventRow.revenue || 0) > 0) {
      const soldTotal = rows.reduce((sum, batch) => sum + Number(batch.sold || 0), 0);
      rows.forEach((batch) => {
        batch.revenue = soldTotal ? (Number(eventRow.revenue || 0) * Number(batch.sold || 0)) / soldTotal : 0;
        batch.revenueEstimated = Number(batch.revenue || 0) > 0;
      });
    }
    return rows;
  }
  return [
    {
      label: "Total do link no evento",
      sold: Number(eventRow.sold || 0),
      soldValidated: Number(eventRow.soldValidated || 0),
      revenue: Number(eventRow.revenue || 0),
      revenueEstimated: false
    }
  ];
}

function batchGroupKey(label, values = null) {
  const normalized = normalizeText(label);
  if (normalized.includes("cortesia") || (values && values.complimentary > 0 && !values.sold)) return "cortesia";
  if (normalized.includes("pista")) return "pista";
  if (normalized.includes("backstage")) return "backstage";
  if (normalized.includes("area vip") || normalized.includes("vip")) return "area vip";
  if (normalized.includes("open bar")) return "open bar";
  return normalizeBatch(label);
}

function batchGroupLabel(label) {
  const key = batchGroupKey(label);
  if (key === "cortesia") return "Cortesia";
  if (key === "area vip") return "Area VIP";
  return displayName(key);
}

function batchValues(batch) {
  const sold = Number(batch.sold || 0);
  const complimentary = Number(batch.complimentary || 0);
  const soldValidated = rowSoldValidated(batch);
  const complimentaryValidated = rowComplimentaryValidated(batch);
  const validated = Number(batch.validated || 0);
  const revenue = Number(batch.revenue || 0);
  return { sold, complimentary, soldValidated, complimentaryValidated, validated, revenue, tickets: sold + complimentary };
}

function buildBatchGroups(batches) {
  const groups = new Map();
  batches.forEach((batch) => {
    const values = batchValues(batch);
    const key = batchGroupKey(batch.label, values);
    if (!groups.has(key)) {
      groups.set(key, {
        key,
        label: key === "cortesia" ? "Cortesia" : batchGroupLabel(batch.label),
        batches: [],
        sold: 0,
        complimentary: 0,
        soldValidated: 0,
        complimentaryValidated: 0,
        validated: 0,
        revenue: 0,
        tickets: 0
      });
    }
    const group = groups.get(key);
    group.batches.push({ ...batch, ...values });
    group.sold += values.sold;
    group.complimentary += values.complimentary;
    group.soldValidated += values.soldValidated;
    group.complimentaryValidated += values.complimentaryValidated;
    group.validated += values.validated;
    group.revenue += values.revenue;
    group.tickets += values.tickets;
  });
  return [...groups.values()].map((group) => ({
    ...group,
    batches: group.batches.sort((a, b) => b.revenue - a.revenue || b.sold - a.sold || b.validated - a.validated || String(a.label || "").localeCompare(String(b.label || "")))
  }));
}

function sortBatchGroups(groups, sort) {
  return groups.slice().sort((a, b) => {
    if (sort === "sold") return b.sold - a.sold || b.revenue - a.revenue;
    if (sort === "courtesy") return b.complimentary - a.complimentary || b.validated - a.validated;
    if (sort === "validated") return b.validated - a.validated || b.sold - a.sold;
    if (sort === "conversion") return safeRate(b.validated, b.tickets) - safeRate(a.validated, a.tickets) || b.tickets - a.tickets;
    if (sort === "name") return String(a.label || "").localeCompare(String(b.label || ""));
    return b.revenue - a.revenue || b.sold - a.sold || b.validated - a.validated;
  });
}

function selectedEvent() {
  return state.events.find((event) => event.id === state.selectedEventId) || state.events[0];
}

function isLoggedIn() {
  return state.authStatus === "authenticated";
}

async function checkSession() {
  try {
    const response = await fetch("/api/session", { credentials: "include", cache: "no-store" });
    const data = await response.json();
    state.authStatus = data.ok ? "authenticated" : "anonymous";
  } catch {
    state.authStatus = "anonymous";
  }
  render();
}

async function login(email, password) {
  const response = await fetch("/api/login", {
    method: "POST",
    credentials: "include",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ email, password })
  });
  const data = await response.json().catch(() => ({ ok: false, error: "Falha ao autenticar." }));
  if (!response.ok || !data.ok) throw new Error(data.error || "E-mail ou senha invalidos.");
  state.authStatus = "authenticated";
  state.authError = "";
  render();
}

async function logout() {
  try {
    await fetch("/api/logout", { method: "POST", credentials: "include" });
  } catch {
    // A interface ainda deve limpar o estado local mesmo se a rede falhar.
  }
  state.authStatus = "anonymous";
  state.privateDataLoaded = false;
  state.privateDataLoading = false;
  state.privateDataError = "";
  state.events = loadEvents();
  render();
}

function mergePrivateAudienceData(data) {
  const privateEvents = new Map((data?.events || []).map((event) => [event.id, event]));
  state.events = state.events.map((event) => {
    const privateEvent = privateEvents.get(event.id);
    if (!privateEvent) return event;
    return {
      ...event,
      audience: privateEvent.audience || [],
      attendees: privateEvent.attendees || []
    };
  });
}

async function ensurePrivateData() {
  if (state.privateDataLoaded || state.privateDataLoading) return;
  state.privateDataLoading = true;
  state.privateDataError = "";
  render();
  try {
    const response = await fetch("/api/audience", { credentials: "include", cache: "no-store" });
    const data = await response.json();
    if (!response.ok || !data.ok) throw new Error(data.error || "Nao foi possivel carregar dados privados.");
    mergePrivateAudienceData(data);
    state.privateDataLoaded = true;
  } catch (error) {
    state.privateDataError = error.message || "Nao foi possivel carregar dados privados.";
    if (/sessao|401|auth/i.test(state.privateDataError)) state.authStatus = "anonymous";
  } finally {
    state.privateDataLoading = false;
    render();
  }
}

async function ensureAccessRequests() {
  if (state.accessRequestsLoaded || state.accessRequestsLoading) return;
  state.accessRequestsLoading = true;
  state.accessRequestsError = "";
  render();
  try {
    const response = await fetch("/api/access-requests", { credentials: "include", cache: "no-store" });
    const data = await response.json();
    if (!response.ok || !data.ok) throw new Error(data.error || "Nao foi possivel carregar as solicitacoes.");
    state.accessRequests = data.requests || [];
    state.accessRequestsLoaded = true;
  } catch (error) {
    state.accessRequestsError = error.message || "Nao foi possivel carregar as solicitacoes.";
  } finally {
    state.accessRequestsLoading = false;
    render();
  }
}

async function decideAccessRequest(issueNumber, decision, tier) {
  state.accessDecisionBusy = String(issueNumber);
  render();
  try {
    const response = await fetch("/api/access-decide", {
      method: "POST",
      credentials: "include",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ issueNumber, decision, tier })
    });
    const data = await response.json().catch(() => ({ ok: false, error: "Falha ao registrar decisao." }));
    if (!response.ok || !data.ok) throw new Error(data.error || "Falha ao registrar decisao.");
    state.accessRequests = state.accessRequests.filter((request) => request.number !== issueNumber);
  } catch (error) {
    state.accessRequestsError = error.message || "Falha ao registrar decisao.";
  } finally {
    state.accessDecisionBusy = "";
    render();
  }
}

function renderAccessRequests() {
  if (state.accessRequestsLoading && !state.accessRequestsLoaded) {
    return renderStatePanel("Carregando solicitacoes", "Buscando pedidos pendentes no GitHub Issues.", "loading");
  }
  if (state.accessRequestsError) {
    return renderStatePanel(
      "Nao foi possivel carregar",
      state.accessRequestsError,
      "error",
      `<button class="secondary" type="button" data-action="retry-access-requests">Tentar novamente</button>`
    );
  }
  if (!state.accessRequests.length) {
    return renderStatePanel("Sem solicitacoes pendentes", "Quando alguem pedir acesso, a solicitacao aparece aqui para aprovacao.", "empty");
  }
  return `
    <div class="panel access-requests">
      ${state.accessRequests
        .map((requestItem) => {
          const busy = state.accessDecisionBusy === String(requestItem.number);
          return `
            <div class="access-request-card">
              <div class="access-request-head">
                <strong>${esc(requestItem.name || "Sem nome")}</strong>
                <span class="muted">${esc(requestItem.email || "")}</span>
              </div>
              <p class="muted">${esc(requestItem.phone ? `Telefone: ${requestItem.phone}` : "Telefone nao informado")}</p>
              <p><strong>Nivel solicitado:</strong> ${esc(requestItem.accessLevel || "-")}</p>
              ${requestItem.reason ? `<p class="muted">"${esc(requestItem.reason)}"</p>` : ""}
              <div class="access-request-actions">
                <select data-tier-select="${esc(requestItem.number)}">
                  <option value="overview">Visao geral</option>
                  <option value="full">Completo</option>
                  <option value="promoter">Comissario/RP</option>
                </select>
                <button class="primary" type="button" data-action="approve-access" data-issue="${esc(requestItem.number)}" ${busy ? "disabled" : ""}>Aprovar</button>
                <button class="secondary" type="button" data-action="deny-access" data-issue="${esc(requestItem.number)}" ${busy ? "disabled" : ""}>Recusar</button>
              </div>
            </div>
          `;
        })
        .join("")}
    </div>
  `;
}

function setLoginError(message) {
  const error = document.getElementById("loginError");
  if (error) error.textContent = message;
}

function setView(view) {
  state.view = view;
  state.salesCodeDrawerKey = "";
  state.batchDrawerGroupKey = "";
  state.drawerReturnSelector = "";
  state.pendingDrawerFocus = false;
  state.drawerOpen = false;
  render();
}

function openEvent(id) {
  state.selectedEventId = id;
  state.view = "detail";
  state.salesCodeDrawerKey = "";
  state.batchDrawerGroupKey = "";
  state.drawerReturnSelector = "";
  state.pendingDrawerFocus = false;
  state.drawerOpen = false;
  render();
}

function app() {
  return document.getElementById("app");
}

function render() {
  if (state.authStatus === "checking") {
    app().innerHTML = `
      <section class="login">
        <div class="login-panel">
          <div class="login-brand">
            <img class="logo-img" src="/assets/nossa-casa-logo-small.jpeg" alt="Nossa Casa" />
            <h1>Nossa Casa</h1>
            <p>Verificando sessao segura...</p>
          </div>
        </div>
      </section>
    `;
    return;
  }
  if (!isLoggedIn()) {
    app().innerHTML = renderLogin();
    bindLogin();
    return;
  }
  app().innerHTML = `
    <div class="drawer-backdrop ${state.drawerOpen ? "show" : ""}" data-action="toggle-drawer"></div>
    <div class="app-shell ${state.sidebarCollapsed ? "sidebar-collapsed" : ""}">
      ${renderSidebar()}
      <main class="main">
        ${renderTopbar()}
        ${renderView()}
      </main>
    </div>
    ${renderSalesCodeDrawer()}
    ${renderBatchLotDrawer()}
  `;
  bindActions();
  syncDrawerBodyState();
  focusPendingDrawer();
}

function renderPreservingScroll() {
  const scrollX = window.scrollX;
  const scrollY = window.scrollY;
  render();
  window.scrollTo(scrollX, scrollY);
  requestAnimationFrame(() => window.scrollTo(scrollX, scrollY));
}

function hasOpenDrawer() {
  return Boolean(state.salesCodeDrawerKey || state.batchDrawerGroupKey);
}

function syncDrawerBodyState() {
  document.body.classList.toggle("drawer-locked", hasOpenDrawer());
}

function activeDrawer() {
  return document.querySelector(".batch-drawer");
}

function drawerFocusableElements(drawer) {
  if (!drawer) return [];
  return [...drawer.querySelectorAll(`
    button,
    [href],
    input,
    select,
    textarea,
    [tabindex]:not([tabindex="-1"])
  `)].filter((element) => !element.disabled && element.getClientRects().length > 0);
}

function focusPendingDrawer() {
  if (!state.pendingDrawerFocus) return;
  state.pendingDrawerFocus = false;
  const drawer = activeDrawer();
  const first = drawerFocusableElements(drawer)[0];
  first?.focus({ preventScroll: true });
}

function restoreDrawerFocus(selector) {
  if (!selector) return;
  requestAnimationFrame(() => {
    document.querySelector(selector)?.focus?.({ preventScroll: true });
  });
}

function closeActiveDrawer() {
  if (!hasOpenDrawer()) return;
  const returnSelector = state.drawerReturnSelector;
  state.salesCodeDrawerKey = "";
  state.batchDrawerGroupKey = "";
  state.drawerReturnSelector = "";
  state.pendingDrawerFocus = false;
  renderPreservingScroll();
  restoreDrawerFocus(returnSelector);
}

function handleDrawerKeydown(event) {
  const drawer = activeDrawer();
  if (!drawer) return;

  if (event.key === "Escape") {
    event.preventDefault();
    closeActiveDrawer();
    return;
  }

  if (event.key !== "Tab") return;
  const focusable = drawerFocusableElements(drawer);
  if (!focusable.length) {
    event.preventDefault();
    return;
  }

  const first = focusable[0];
  const last = focusable[focusable.length - 1];
  if (event.shiftKey && document.activeElement === first) {
    event.preventDefault();
    last.focus();
  } else if (!event.shiftKey && document.activeElement === last) {
    event.preventDefault();
    first.focus();
  }
}

function cssAttr(value) {
  return String(value || "").replace(/\\/g, "\\\\").replace(/"/g, '\\"');
}

function dataSelector(name, value) {
  return `[${name}="${cssAttr(value)}"]`;
}

function renderPreservingElement(selector) {
  const previousTop = document.querySelector(selector)?.getBoundingClientRect().top;
  render();
  if (!Number.isFinite(previousTop)) return;
  const restore = () => {
    const nextTop = document.querySelector(selector)?.getBoundingClientRect().top;
    if (Number.isFinite(nextTop)) window.scrollBy(0, nextTop - previousTop);
  };
  restore();
  requestAnimationFrame(restore);
  requestAnimationFrame(() => requestAnimationFrame(restore));
  [40, 120, 260].forEach((delay) => setTimeout(restore, delay));
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

function renderSignupForm() {
  if (state.signupSuccess) {
    return `
      <div class="signup-success" role="status">
        <p><strong>Solicitacao enviada.</strong></p>
        <p class="muted">A administradora foi avisada e vai revisar seu pedido de acesso em breve.</p>
        <button class="secondary" type="button" data-action="hide-signup">Voltar ao login</button>
      </div>
    `;
  }
  return `
    <form class="login-form signup-form" id="signupForm">
      <div class="login-form-head">
        <span class="login-kicker">Novo cadastro</span>
        <h2>Solicitar acesso</h2>
        <p>Preencha seus dados para a administradora revisar e liberar o melhor nivel de permissao.</p>
      </div>
      <label class="field">Nome<input id="signupName" name="name" type="text" required maxlength="120" /></label>
      <label class="field">E-mail<input id="signupEmail" name="email" type="email" required maxlength="160" /></label>
      <label class="field">Telefone (opcional)<input id="signupPhone" name="phone" type="tel" maxlength="40" /></label>
      <label class="field">
        Nivel de acesso desejado
        <select id="signupAccessLevel" name="accessLevel">
          <option value="overview">Visao geral (sem dados pessoais)</option>
          <option value="full">Completo (inclui audiencia e mailing)</option>
          <option value="promoter">Comissario/RP (apenas meus links)</option>
        </select>
      </label>
      <label class="field">Motivo/observacoes (opcional)<textarea id="signupReason" name="reason" rows="3" maxlength="600"></textarea></label>
      <p class="login-error" id="signupError" aria-live="polite"></p>
      <button class="primary" type="submit">Enviar solicitacao</button>
      <button class="secondary" type="button" data-action="hide-signup">Cancelar</button>
      <div class="login-secure-note" role="note">
        <span aria-hidden="true">✓</span>
        <p><strong>Fluxo revisado.</strong> A administradora recebe o pedido e decide o nivel de acesso liberado.</p>
      </div>
    </form>
  `;
}

function renderLogin() {
  return `
    <section class="login">
      <div class="login-panel">
        <div class="login-brand">
          <img class="logo-img" src="/assets/nossa-casa-logo-small.jpeg" alt="Nossa Casa" />
          <div class="login-brand-copy">
            <span class="login-kicker">Performance de eventos</span>
            <h1>Nossa Casa</h1>
            <p>Gerencie eventos, vendas, validacoes, cortesias e performance dos comissarios em um unico painel.</p>
            <ul class="login-feature-list" aria-label="Recursos do dashboard">
              <li>Eventos e faturamento</li>
              <li>Ranking de comissarios</li>
              <li>Cortesias e validacoes</li>
            </ul>
          </div>
        </div>
        ${
          state.showSignup
            ? renderSignupForm()
            : `
        <form class="login-form" id="loginForm">
          <div class="login-form-head">
            <span class="login-kicker">Central segura</span>
            <h2>Acesso</h2>
            <p>Bem-vindo de volta. Entre com sua conta para visualizar os indicadores em tempo real.</p>
          </div>
          <label class="field">E-mail<input id="loginEmail" name="email" type="email" autocomplete="username" required /></label>
          <label class="field">Senha<input id="loginPassword" name="password" type="password" autocomplete="current-password" required /></label>
          <p class="login-error" id="loginError" aria-live="polite"></p>
          <button class="primary" type="submit">Entrar</button>
          <div class="login-signup-inline">
            <span>Ainda nao possui acesso?</span>
            <button class="link-button" type="button" data-action="show-signup">Solicitar cadastro</button>
          </div>
          <div class="login-secure-note" role="note">
            <span aria-hidden="true">✓</span>
            <p><strong>Ambiente seguro.</strong> As informacoes privadas sao carregadas somente apos o login.</p>
          </div>
        </form>
        `
        }
      </div>
    </section>
  `;
}

function bindLogin() {
  document.getElementById("loginForm")?.addEventListener("submit", async (event) => {
    event.preventDefault();
    setLoginError("");
    const email = document.getElementById("loginEmail")?.value?.trim() || "";
    const password = document.getElementById("loginPassword")?.value || "";
    const button = event.currentTarget.querySelector("button[type='submit']");
    if (button) {
      button.disabled = true;
      button.dataset.originalText = button.textContent || "";
      button.textContent = "Entrando...";
      button.setAttribute("aria-busy", "true");
    }
    try {
      await login(email, password);
    } catch (error) {
      setLoginError(error.message || "E-mail ou senha invalidos.");
    } finally {
      if (button) {
        button.disabled = false;
        button.textContent = button.dataset.originalText || "Entrar";
        button.removeAttribute("aria-busy");
      }
    }
  });
  document.querySelector("[data-action='show-signup']")?.addEventListener("click", () => {
    state.showSignup = true;
    state.signupSuccess = false;
    state.signupError = "";
    render();
  });
  document.querySelector("[data-action='hide-signup']")?.addEventListener("click", () => {
    state.showSignup = false;
    state.signupSuccess = false;
    state.signupError = "";
    render();
  });
  document.getElementById("signupForm")?.addEventListener("submit", async (event) => {
    event.preventDefault();
    state.signupError = "";
    const payload = {
      name: document.getElementById("signupName")?.value?.trim() || "",
      email: document.getElementById("signupEmail")?.value?.trim() || "",
      phone: document.getElementById("signupPhone")?.value?.trim() || "",
      accessLevel: document.getElementById("signupAccessLevel")?.value || "overview",
      reason: document.getElementById("signupReason")?.value?.trim() || ""
    };
    const button = event.currentTarget.querySelector("button[type='submit']");
    if (button) {
      button.disabled = true;
      button.dataset.originalText = button.textContent || "";
      button.textContent = "Enviando...";
      button.setAttribute("aria-busy", "true");
    }
    try {
      const response = await fetch("/api/signup", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(payload)
      });
      const data = await response.json().catch(() => ({ ok: false, error: "Falha ao enviar solicitacao." }));
      if (!response.ok || !data.ok) throw new Error(data.error || "Falha ao enviar solicitacao.");
      state.signupSuccess = true;
      render();
    } catch (error) {
      state.signupError = error.message || "Falha ao enviar solicitacao.";
      const errorField = document.getElementById("signupError");
      if (errorField) errorField.textContent = state.signupError;
    } finally {
      if (button) {
        button.disabled = false;
        button.textContent = button.dataset.originalText || "Enviar solicitacao";
        button.removeAttribute("aria-busy");
      }
    }
  });
}

const NAV_ICON_PATHS = {
  overview: '<rect x="3" y="3" width="7" height="7" rx="1.5"></rect><rect x="14" y="3" width="7" height="7" rx="1.5"></rect><rect x="14" y="14" width="7" height="7" rx="1.5"></rect><rect x="3" y="14" width="7" height="7" rx="1.5"></rect>',
  events: '<path d="M8 2v4"></path><path d="M16 2v4"></path><rect x="3" y="4" width="18" height="18" rx="2"></rect><path d="M3 10h18"></path>',
  commissioners: '<path d="M16 21v-2a4 4 0 0 0-4-4H7a4 4 0 0 0-4 4v2"></path><circle cx="9.5" cy="7" r="4"></circle><path d="M17 11l2 2 4-4"></path>',
  audienceProfile: '<path d="M3 3v18h18"></path><path d="M7 15l3-3 3 2 5-6"></path><circle cx="7" cy="15" r="1"></circle><circle cx="10" cy="12" r="1"></circle><circle cx="13" cy="14" r="1"></circle><circle cx="18" cy="8" r="1"></circle>',
  mailing: '<rect x="3" y="5" width="18" height="14" rx="2"></rect><path d="M3 7l9 6 9-6"></path>',
  audienceRecurrence: '<path d="M3 12a8 8 0 0 1 13.66-5.66L19 8"></path><path d="M19 3v5h-5"></path><path d="M21 12a8 8 0 0 1-13.66 5.66L5 16"></path><path d="M5 21v-5h5"></path>',
  validation: '<path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"></path><path d="M22 4L12 14.01l-3-3"></path>',
  accessRequests: '<path d="M9 3h6l1 2h3a2 2 0 0 1 2 2v12a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V7a2 2 0 0 1 2-2h3l1-2Z"></path><path d="M9 12h6"></path><path d="M9 16h4"></path>'
};

function navIcon(id) {
  return `<svg class="nav-icon-svg" viewBox="0 0 24 24" aria-hidden="true" focusable="false">${NAV_ICON_PATHS[id] || NAV_ICON_PATHS.overview}</svg>`;
}

function renderStatePanel(title, message, type = "empty", actions = "") {
  return `
    <div class="panel state-panel ${esc(type)}" role="${type === "error" ? "alert" : "status"}" aria-live="polite">
      <div class="state-dot" aria-hidden="true"></div>
      <div>
        <strong>${esc(title)}</strong>
        <p class="muted">${esc(message)}</p>
        ${actions ? `<div class="state-actions">${actions}</div>` : ""}
      </div>
    </div>
  `;
}

function renderSidebar() {
  const items = [
    ["overview", "Visao geral"],
    ["events", "Eventos"],
    ["commissioners", "Comissarios"],
    ["audienceProfile", "Perfil"],
    ["mailing", "Mailing"],
    ["audienceRecurrence", "Recorrencia"],
    ["validation", "Validacao"],
    ["accessRequests", "Solicitacoes"]
  ];
  return `
    <aside class="sidebar ${state.drawerOpen ? "open" : ""} ${state.sidebarCollapsed ? "collapsed" : ""}">
      <div class="brand-row">
        <img class="logo-img" src="/assets/nossa-casa-logo-small.jpeg" alt="Nossa Casa" />
        <div><strong>Nossa Casa</strong><span>Performance de eventos</span></div>
        <button class="sidebar-toggle" data-action="toggle-sidebar" aria-label="${state.sidebarCollapsed ? "Expandir menu" : "Recolher menu"}">${state.sidebarCollapsed ? "›" : "‹"}</button>
      </div>
      <nav class="nav">
        ${items
          .map(([id, label]) => {
            const active = state.view === id;
            return `<button class="${active ? "active" : ""}" data-view="${id}" title="${esc(label)}" aria-label="${esc(label)}" ${active ? 'aria-current="page"' : ""}>${navIcon(id)}<span class="nav-label">${esc(label)}</span></button>`;
          })
          .join("")}
      </nav>
      <div class="sidebar-foot">
        <strong>${state.events.length} eventos</strong><br />
        Gandaya + PNE sincronizados.
      </div>
    </aside>
  `;
}

function renderTopbar() {
  const titles = {
    overview: ["Visao geral", "Resumo consolidado de todos os eventos"],
    events: ["Eventos", "Compare resultados e abra o detalhe de cada evento"],
    commissioners: ["Comissarios/RPs", "Ranking geral com parcial por evento"],
    audienceProfile: ["Perfil do publico", "Mapeamento demografico por evento e consolidado"],
    mailing: ["Mailing", "Contatos finais deduplicados por evento ou consolidado"],
    audienceRecurrence: ["Recorrencia de Compradores", "Clientes com compra paga em mais de um evento"],
    validation: ["Validacao", "Leitura consolidada de check-ins e lotes"],
    accessRequests: ["Solicitacoes de acesso", "Pessoas que pediram cadastro no dashboard"],
    detail: [selectedEvent()?.name || "Evento", "Detalhe de vendas, lotes e validacoes"]
  };
  const [title, subtitle] = titles[state.view] || titles.overview;
  const syncLabels = {
    ok: "Anexos em tempo real",
    syncing: "Sincronizando anexos...",
    error: "Sincronizacao com falha - dados podem estar desatualizados"
  };
  const syncStatus = syncLabels[state.syncStatus] ? state.syncStatus : "ok";
  return `
    <header class="topbar">
      <button class="secondary mobile-menu" data-action="toggle-drawer" aria-label="Abrir menu de navegacao">Menu</button>
      <div class="section-title">
        <h1>${esc(title)}</h1>
        <p>${esc(subtitle)}</p>
      </div>
      <div class="source-status ${esc(syncStatus)}" role="status" aria-live="polite">${esc(syncLabels[syncStatus])}</div>
    </header>
  `;
}

function renderView() {
  if (state.view === "events") return renderEvents();
  if (state.view === "commissioners") return renderCommissioners();
  if (state.view === "audienceProfile") return renderAudienceProfile();
  if (state.view === "mailing") return renderMailingPage();
  if (state.view === "audienceRecurrence") return renderAudienceRecurrence();
  if (state.view === "validation") return renderValidation();
  if (state.view === "accessRequests") {
    if (!state.accessRequestsLoaded && !state.accessRequestsLoading && !state.accessRequestsError) {
      setTimeout(() => ensureAccessRequests(), 0);
    }
    return renderAccessRequests();
  }
  if (state.view === "detail") return renderDetail();
  return renderOverview();
}

function renderOverview() {
  const events = filteredEvents();
  const sum = totals(events);
  const split = salesBreakdown(events);
  const rate = (sum.validated / Math.max(sum.sold + sum.complimentary, 1)) * 100;
  const courtesyRate = safeRate(split.complimentaryValidated, split.complimentary);
  const codeRows = promoterRanking(events);
  const salesCodeRows = sortCodeRanking(codeRows.filter((row) => row.revenue > 0 || row.sold > 0), "sales").slice(0, 18);
  const courtesyCodeRows = sortCodeRanking(codeRows.filter((row) => row.complimentary > 0), "courtesy").slice(0, 18);
  return `
    <section class="grid">
      ${renderDashboardFilters(events)}
      <div class="grid cards overview-metrics">
        ${metric("Faturamento", money(sum.revenue), "Receita total registrada")}
        ${metric("Venda geral", money(split.generalRevenue), `${int(split.generalSold)} ingressos sem link`)}
        ${metric("Venda por link", money(split.linkRevenue), `${pct(safeRate(split.linkRevenue, sum.revenue))} do faturamento`)}
        ${metric("Cortesias", int(sum.complimentary), `${int(split.complimentaryValidated)} validadas (${pct(courtesyRate)})`)}
        ${metric("Check-ins", int(sum.validated), `${pct(rate)} de presenca`)}
        ${metric("PNE inseridos", int(sum.pneInserted), `${int(sum.pneConverted)} convertidos`)}
      </div>
      ${renderSplitSummary(split, sum)}
      <div class="card code-ranking-control">
        <div class="section-title">
          <h2>Ranking dos codigos</h2>
          <p>Organize links/comissarios por faturamento ou conversao, sempre da maior taxa para a menor.</p>
        </div>
        <label class="filter-field compact-select">
          <span>Ordenar por</span>
          <select id="overviewCodeSort">
            <option value="revenue" ${state.codeRankingSort === "revenue" ? "selected" : ""}>Faturamento</option>
            <option value="conversion" ${state.codeRankingSort === "conversion" ? "selected" : ""}>Conversao maior</option>
          </select>
        </label>
      </div>
      <div class="grid two overview-link-grid">
        <div class="card">
          <div class="section-title"><h2>Vendas por link</h2><p>Receita, volume vendido e participacao no faturamento.</p></div>
          ${renderSalesLinkTable(salesCodeRows, sum.revenue, { compact: true })}
        </div>
        <div class="card">
          <div class="section-title"><h2>Cortesias por link</h2><p>Emitidas, validadas e taxa de presenca.</p></div>
          ${renderCourtesyLinkTable(courtesyCodeRows, { compact: true, preserveOrder: true })}
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
  const text = String(value ?? "");
  const moneyMatch = text.match(/^R\$\s*(.+)$/);
  const compactValue = text.length > 13;
  const valueHtml = moneyMatch
    ? `<strong class="metric-value money-value ${compactValue ? "compact-value" : ""}" title="${esc(text)}"><span class="metric-currency">R$</span><span class="metric-number">${esc(moneyMatch[1])}</span></strong>`
    : `<strong class="metric-value ${compactValue ? "compact-value" : ""}" title="${esc(text)}">${esc(text)}</strong>`;
  return `<div class="card metric"><span>${esc(label)}</span>${valueHtml}<small class="muted">${esc(note)}</small></div>`;
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
  const showConversion = compact && state.codeRankingSort === "conversion";
  const salesHeaders = compact
    ? `<th>Link/comissario</th><th>Receita</th><th>Vendidos</th><th>${showConversion ? "% conversao" : "% faturamento"}</th>`
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
            .map((row) => {
              const key = salesCodeKey(row.name);
              const expanded = state.salesCodeDrawerKey === key;
              return `
              <tr class="sales-code-row ${expanded ? "is-expanded" : ""}" data-sales-code="${esc(key)}" title="Clique para ver detalhes">
                <td data-label="Link/comissario"><strong>${esc(row.name)}</strong><span class="row-hint">${expanded ? "Detalhes abertos" : "Ver detalhes"}</span></td>
                <td data-label="Receita"><span class="cell-value">${money(row.revenue)}</span></td>
                ${
                  compact
                    ? `<td data-label="Vendidos"><span class="cell-value">${int(row.sold)}</span></td><td data-label="${showConversion ? "% conversao" : "% faturamento"}">${showConversion ? rateCell(row.soldValidated, row.sold, true, "rate-only") : shareCell(row.revenue, totalRevenue)}</td>`
                    : `<td data-label="% faturamento">${shareCell(row.revenue, totalRevenue)}</td><td data-label="Vendidos"><span class="cell-value">${int(row.sold)}</span></td><td data-label="Val. vendas">${row.sold ? rateCell(row.soldValidated, row.sold) : `<span class="cell-value">-</span>`}</td>`
                }
              </tr>
            `;
            })
            .join("")}
        </tbody>
      </table>
    </div>
  `;
}

function renderSalesCodeDetail(row, totalRevenue) {
  const events = row.events
    .slice()
    .sort((a, b) => Number(b.revenue || 0) - Number(a.revenue || 0) || Number(b.sold || 0) - Number(a.sold || 0));
  return `
    <div class="sales-code-detail">
      ${events
        .map((eventRow) => {
          const batchRows = salesCodeBatchRows(row, eventRow);
          const sold = batchRows.reduce((sum, batch) => sum + Number(batch.sold || 0), 0);
          const soldValidated = batchRows.reduce((sum, batch) => sum + Number(batch.soldValidated || 0), 0);
          const revenue = batchRows.reduce((sum, batch) => sum + Number(batch.revenue || 0), 0);
          return `
            <div class="batch-detail-block sales-code-event-block">
              <div class="batch-detail-head">
                <h4>
                  <button class="ghost detail-event-link" data-event="${esc(eventRow.id)}">
                    <span>${esc(eventRow.name)}</span>
                  </button>
                </h4>
                <p>${int(batchRows.length)} ${batchRows.length === 1 ? "lote" : "lotes"} · ${int(sold)} vendidos · ${money(revenue)} · ${pct(safeRate(soldValidated, sold))} validados</p>
              </div>
              <div class="table-wrap nested-detail-table" tabindex="0">
                <table class="sales-detail-table">
                  <thead><tr><th>Lote</th><th>Quantidade</th><th>Receita</th><th>Validados</th></tr></thead>
                  <tbody>
                    ${batchRows
                      .map(
                        (batch) => `
                          <tr class="detail-batch-row">
                            <td class="detail-lot-cell" data-label="Lote">${esc(batch.label)}</td>
                            <td class="detail-count-cell" data-label="Quantidade">${int(batch.sold)}</td>
                            <td class="detail-count-cell" data-label="Receita">${money(batch.revenue)}${batch.revenueEstimated ? ` <small title="Receita estimada proporcionalmente aos vendidos do lote.">estimado</small>` : ""}</td>
                            <td class="detail-count-cell" data-label="Validados">${int(batch.soldValidated)}</td>
                          </tr>
                        `
                      )
                      .join("")}
                  </tbody>
                </table>
              </div>
            </div>
          `;
        })
        .join("")}
    </div>
  `;
}

function salesCodeDrawerContext() {
  if (!state.salesCodeDrawerKey) return null;
  if (!["overview", "detail"].includes(state.view)) return null;
  const currentEvent = selectedEvent();
  const isDetail = state.view === "detail" && currentEvent;
  const scopeEvents = isDetail ? [currentEvent] : filteredEvents();
  const rows = isDetail ? eventPromoters(currentEvent) : promoterRanking(scopeEvents);
  const row = rows.find((item) => salesCodeKey(item.name) === state.salesCodeDrawerKey);
  if (!row) return null;
  const totalRevenue = isDetail
    ? Number(currentEvent.revenue || 0)
    : scopeEvents.reduce((sum, event) => sum + Number(event.revenue || 0), 0);
  return { row, totalRevenue, scopeTitle: isDetail ? currentEvent.name : "Visao geral" };
}

function renderSalesCodeDrawer() {
  const context = salesCodeDrawerContext();
  if (!context) return "";
  const { row, totalRevenue, scopeTitle } = context;
  return `
    <div class="batch-drawer-backdrop" data-action="close-sales-code-drawer"></div>
    <aside class="batch-drawer" role="dialog" aria-modal="true" aria-label="Detalhes do link">
      <div class="batch-drawer-head">
        <div>
          <span class="eyebrow">${esc(scopeTitle || "Recorte atual")}</span>
          <h3>${esc(row.name)}</h3>
          <p>${int(row.sold)} vendidos · ${int(row.soldValidated)} validados · ${money(row.revenue)} · ${pct(safeRate(row.revenue, totalRevenue))}</p>
        </div>
        <button class="ghost icon-button" data-action="close-sales-code-drawer" aria-label="Fechar detalhes">×</button>
      </div>
      ${renderSalesCodeDetail(row, totalRevenue)}
    </aside>
  `;
}

function renderCourtesyLinkTable(rows, options = {}) {
  if (!rows.length) return `<p class="notice">Nenhuma cortesia por link no recorte atual.</p>`;
  const compact = Boolean(options.compact);
  const orderedRows = options.preserveOrder ? rows : rows.slice().sort((a, b) => b.complimentaryValidated - a.complimentaryValidated || b.complimentary - a.complimentary);
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
          ${orderedRows
            .map((row) => {
              const rate = safeRate(row.complimentaryValidated, row.complimentary);
              return `
                <tr>
                  <td data-label="Link/comissario"><strong>${esc(row.name)}</strong></td>
                  <td data-label="Cortesias emitidas"><span class="cell-value">${int(row.complimentary)}</span></td>
                  <td data-label="Validadas"><span class="cell-value">${int(row.complimentaryValidated)}</span></td>
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

function profileSegmentRows(profile, segment = "main") {
  const rows = [];
  const addRows = (category, items) => {
    items.forEach((row) => rows.push({ ...row, category }));
  };
  const validationRows = [
    {
      label: "Validados",
      peopleCount: profile.summary.validatedPeople,
      tickets: profile.summary.validatedTickets,
      validated: profile.summary.validatedTickets,
      people: new Set()
    },
    {
      label: "Nao validados",
      peopleCount: Math.max(0, profile.summary.uniquePeople - profile.summary.validatedPeople),
      tickets: Math.max(0, profile.summary.tickets - profile.summary.validatedTickets),
      validated: 0,
      people: new Set()
    }
  ];
  if (segment === "main" || segment === "demographic") {
    addRows("Genero", profile.genderRows);
    addRows("Idade", profile.ageRows);
  }
  if (segment === "main" || segment === "behavior") {
    addRows("Ingresso", profile.typeRows);
    addRows("Validacao", validationRows);
  }
  if (segment === "all" || segment === "origin") {
    addRows("Link", profile.linkRows);
    addRows("Lote", profile.batchRows);
  }
  return rows;
}

function renderAudienceSegmentTable(rows, total) {
  if (!rows.length) return `<p class="notice">Nao ha dados suficientes para este recorte.</p>`;
  return `
    <div class="table-wrap compact-table profile-table profile-segment-table">
      <table>
        <thead><tr><th>Categoria</th><th>Perfil</th><th>Pessoas</th><th>Ingressos</th><th>Validados</th><th>Participacao</th></tr></thead>
        <tbody>
          ${rows
            .map(
              (row) => `
                <tr>
                  <td data-label="Categoria"><span class="pill soft">${esc(row.category)}</span></td>
                  <td data-label="Perfil"><strong>${esc(row.label)}</strong></td>
                  <td data-label="Pessoas"><span class="cell-value">${int(row.peopleCount)}</span></td>
                  <td data-label="Ingressos"><span class="cell-value">${int(row.tickets)}</span></td>
                  <td data-label="Validados"><span class="cell-value">${int(row.validated)}</span></td>
                  <td data-label="Participacao">${shareCell(row.peopleCount, total)}</td>
                </tr>
              `
            )
            .join("")}
        </tbody>
      </table>
    </div>
  `;
}

function renderProfileBarChart(title, subtitle, rows, total, options = {}) {
  const limit = options.limit || 6;
  const visibleRows = rows.filter((row) => Number(row.peopleCount || 0) > 0).slice(0, limit);
  const chartTotal = total || visibleRows.reduce((sum, row) => sum + Number(row.peopleCount || 0), 0);
  if (!visibleRows.length) {
    return `
      <div class="card profile-chart">
        <div class="section-title"><h3>${esc(title)}</h3><p>${esc(subtitle)}</p></div>
        <p class="notice">Sem dados para este recorte.</p>
      </div>
    `;
  }
  return `
    <div class="card profile-chart">
      <div class="section-title"><h3>${esc(title)}</h3><p>${esc(subtitle)}</p></div>
      <div class="chart-bars">
        ${visibleRows
          .map((row) => {
            const rate = safeRate(row.peopleCount, chartTotal);
            return `
              <div class="chart-row">
                <div class="chart-label">
                  <strong>${esc(row.label)}</strong>
                  <span>${int(row.peopleCount)} pessoas · ${int(row.tickets)} ingressos</span>
                </div>
                <div class="chart-track" aria-hidden="true"><i style="width:${clampPercent(rate)}%"></i></div>
                <b>${pct(rate)}</b>
              </div>
            `;
          })
          .join("")}
      </div>
    </div>
  `;
}

function renderAudienceProfile() {
  const gate = requirePrivateData("Perfil do publico");
  if (gate) return gate;
  const events = filteredEvents();
  const selectedEvent = state.profileEventId === "all" ? null : state.events.find((event) => event.id === state.profileEventId);
  const scopeEvents = selectedEvent ? [selectedEvent] : events;
  const baseProfile = buildAudienceProfile(scopeEvents);
  const profile = buildAudienceProfile(scopeEvents, state.profileFilters);
  const summary = profile.summary;
  const title = selectedEvent ? selectedEvent.name : "Todos os eventos do recorte atual";
  const avgAge = summary.avgAge ? `${Math.round(summary.avgAge)} anos` : "-";
  const validationRate = safeRate(summary.validatedTickets, summary.tickets);
  const segmentRows = profileSegmentRows(profile, state.profileFilters.segment);
  return `
    <section class="grid">
      ${renderDashboardFilters(events)}
      <div class="card">
        <div class="toolbar mailing-header">
          <div class="section-title">
            <h2>Perfil do publico</h2>
            <p>${esc(title)} · ${int(summary.uniquePeople)} pessoas unicas mapeadas</p>
          </div>
          <div class="mailing-actions profile-actions">
            <label class="filter-field compact-select">
              <span>Evento</span>
              <select id="profileEvent">
                <option value="all" ${state.profileEventId === "all" ? "selected" : ""}>Todos os eventos</option>
                ${state.events.map((event) => `<option value="${esc(event.id)}" ${state.profileEventId === event.id ? "selected" : ""}>${esc(event.name)}</option>`).join("")}
              </select>
            </label>
            <label class="filter-field compact-select">
              <span>Tipo</span>
              <select id="profileTicketType">
                <option value="all" ${state.profileFilters.ticketType === "all" ? "selected" : ""}>Todos</option>
                <option value="purchase" ${state.profileFilters.ticketType === "purchase" ? "selected" : ""}>Compras</option>
                <option value="courtesy" ${state.profileFilters.ticketType === "courtesy" ? "selected" : ""}>Cortesias</option>
                <option value="validated" ${state.profileFilters.ticketType === "validated" ? "selected" : ""}>Validados</option>
              </select>
            </label>
            <label class="filter-field compact-select">
              <span>Genero</span>
              <select id="profileGender">
                <option value="all" ${state.profileFilters.gender === "all" ? "selected" : ""}>Todos</option>
                ${baseProfile.genderRows.map((row) => `<option value="${esc(row.label)}" ${state.profileFilters.gender === row.label ? "selected" : ""}>${esc(row.label)}</option>`).join("")}
              </select>
            </label>
            <label class="filter-field compact-select">
              <span>Idade</span>
              <select id="profileAgeBand">
                <option value="all" ${state.profileFilters.ageBand === "all" ? "selected" : ""}>Todas</option>
                ${baseProfile.ageRows.map((row) => `<option value="${esc(row.label)}" ${state.profileFilters.ageBand === row.label ? "selected" : ""}>${esc(row.label)}</option>`).join("")}
              </select>
            </label>
            <label class="filter-field compact-select">
              <span>Mostrar</span>
              <select id="profileSegment">
                <option value="main" ${state.profileFilters.segment === "main" ? "selected" : ""}>Resumo</option>
                <option value="demographic" ${state.profileFilters.segment === "demographic" ? "selected" : ""}>Genero + idade</option>
                <option value="behavior" ${state.profileFilters.segment === "behavior" ? "selected" : ""}>Ingresso + validacao</option>
                <option value="origin" ${state.profileFilters.segment === "origin" ? "selected" : ""}>Links + lotes</option>
                <option value="all" ${state.profileFilters.segment === "all" ? "selected" : ""}>Tudo</option>
              </select>
            </label>
          </div>
        </div>
      </div>
      <div class="grid cards">
        ${metric("Publico unico", int(summary.uniquePeople), "Deduplicado por e-mail, telefone ou nome")}
        ${metric("Ingressos", int(summary.tickets), "Compras e cortesias do recorte")}
        ${metric("Compradores", int(summary.buyers), "Pessoas com compra paga")}
        ${metric("Convidados", int(summary.courtesy), "Pessoas com cortesia")}
        ${metric("Idade media", avgAge, `${int(summary.knownAges)} perfis com idade`)}
        ${metric("Genero principal", summary.dominantGender, `${int(summary.knownGender)} perfis com genero`)}
      </div>
      <div class="grid profile-chart-grid">
        ${renderProfileBarChart("Genero", "Participacao por pessoas unicas.", profile.genderRows, summary.uniquePeople, { limit: 4 })}
        ${renderProfileBarChart("Faixa etaria", "Distribuicao por idade declarada.", profile.ageRows, summary.uniquePeople)}
        ${renderProfileBarChart("Tipo de ingresso", "Compras, cortesias e validacoes.", profile.typeRows, summary.uniquePeople, { limit: 4 })}
      </div>
      <div class="card">
        <div class="toolbar">
          <div class="section-title"><h2>Segmentos do publico</h2><p>Genero, idade, tipo de ingresso, validacao, links e lotes em uma leitura unica.</p></div>
          <div class="insight-card mini-insight">
            <span>Presenca</span>
            <strong>${pct(validationRate)}</strong>
            <div class="bar"><i style="width:${clampPercent(validationRate)}%"></i></div>
          </div>
        </div>
        ${renderAudienceSegmentTable(segmentRows, summary.uniquePeople)}
      </div>
      ${
        selectedEvent
          ? ""
          : `<div class="card">
              <div class="section-title"><h2>Perfil por evento</h2><p>Resumo comparativo do publico mapeado.</p></div>
              <div class="table-wrap compact-table profile-table event-profile-table">
                <table>
                  <thead><tr><th>Evento</th><th>Publico</th><th>Compradores</th><th>Convidados</th><th>Idade media</th><th>Genero principal</th><th>Presenca</th></tr></thead>
                  <tbody>
                    ${profile.eventRows
                      .map(
                        (row) => `
                          <tr>
                            <td data-label="Evento"><button class="ghost" data-event="${esc(row.id)}">${esc(row.name)}</button></td>
                            <td data-label="Publico"><span class="cell-value">${int(row.uniquePeople)}</span></td>
                            <td data-label="Compradores"><span class="cell-value">${int(row.buyers)}</span></td>
                            <td data-label="Convidados"><span class="cell-value">${int(row.courtesy)}</span></td>
                            <td data-label="Idade media"><span class="cell-value">${row.avgAge ? `${Math.round(row.avgAge)} anos` : "-"}</span></td>
                            <td data-label="Genero principal"><span class="cell-value">${esc(row.dominantGender)}</span></td>
                            <td data-label="Presenca">${shareCell(row.validatedTickets, row.tickets)}</td>
                          </tr>
                        `
                      )
                      .join("")}
                  </tbody>
                </table>
              </div>
            </div>`
      }
    </section>
  `;
}

function renderMailingPage() {
  const gate = requirePrivateData("Mailing");
  if (gate) return gate;
  const events = filteredEvents();
  const selectedEvent = state.mailingEventId === "all" ? null : state.events.find((event) => event.id === state.mailingEventId);
  const scopeEvents = selectedEvent ? [selectedEvent] : events;
  const rows = buildMailingRows(scopeEvents, selectedEvent ? selectedEvent.id : "all");
  const pageSize = 50;
  const totalPages = Math.max(1, Math.ceil(rows.length / pageSize));
  const page = Math.min(Math.max(1, state.mailingPage), totalPages);
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
      ${renderMailingTable(rows, pageSize, page)}
      ${renderPagination(rows.length, page, pageSize, "mailing-page")}
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
  const gate = requirePrivateData("Recorrencia de compradores");
  if (gate) return gate;
  const events = filteredEvents();
  const rows = filteredAudienceRecurrence(events);
  const pageSize = 50;
  const totalPages = Math.max(1, Math.ceil(rows.length / pageSize));
  const page = Math.min(Math.max(1, state.audiencePage), totalPages);
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
        ${renderAudienceTable(rows, pageSize, page)}
        ${renderPagination(rows.length, page, pageSize, "audience-page")}
      </div>
    </section>
  `;
}

function renderAudienceTable(rows, pageSize = 50, page = 1) {
  if (!rows.length) return `<p class="notice">Nenhum comprador recorrente encontrado com os filtros atuais.</p>`;
  const start = (page - 1) * pageSize;
  return `
    <div class="table-wrap compact-table audience-table recurring-table">
      <table>
        <thead><tr><th>Comprador</th><th>E-mail</th><th>Historico</th><th>Tipo</th><th>Ultima aparicao</th></tr></thead>
        <tbody>
          ${rows
            .slice(start, start + pageSize)
            .map((row) => {
              const expanded = state.expandedAudienceKey === row.participantKey;
              return `
                <tr class="audience-row ${expanded ? "is-expanded" : ""}" data-audience-key="${esc(row.participantKey)}">
                  <td data-label="Comprador"><strong>${esc(row.name)}</strong>${row.possibleDuplicate ? `<span class="pill warn">Possivel duplicidade</span>` : ""}</td>
                  <td data-label="E-mail">${row.email ? esc(row.email) : "-"}</td>
                  <td data-label="Historico"><strong>${int(row.totalEvents)} eventos</strong><small>${int(row.validationsCount)} validacoes</small></td>
                  <td data-label="Tipo">${typeBadges(row.recurrenceTypes, row.validationsCount)}</td>
                  <td data-label="Ultima aparicao">${formatDate(row.lastAppearance)}</td>
                </tr>
                <tr class="audience-detail-row" data-audience-detail="${esc(row.participantKey)}" ${expanded ? "" : "hidden"}><td colspan="5">${renderAudienceEntries(row.entries)}</td></tr>
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

function renderResponsiveTable({ className = "", columns = [], rows = [], empty = "Nenhum registro encontrado." }) {
  return `
    <div class="table-wrap responsive-table ${className}">
      <table>
        <thead><tr>${columns.map((column) => `<th>${esc(column.label)}</th>`).join("")}</tr></thead>
        <tbody>
          ${
            rows.length
              ? rows
                  .map(
                    (row) => `
                      <tr>
                        ${columns
                          .map(
                            (column) => `
                              <td data-label="${esc(column.label)}" class="${column.className ? esc(column.className) : ""}">
                                ${column.render(row)}
                              </td>
                            `
                          )
                          .join("")}
                      </tr>
                    `
                  )
                  .join("")
              : `<tr><td colspan="${columns.length || 1}">${esc(empty)}</td></tr>`
          }
        </tbody>
      </table>
    </div>
  `;
}

function renderPagination(total, page, pageSize, action) {
  const pages = Math.max(1, Math.ceil(total / pageSize));
  if (pages <= 1) return "";
  return `
    <div class="pagination" role="navigation" aria-label="Paginacao">
      <button class="secondary" data-action="${esc(action)}" data-page="${Math.max(1, page - 1)}" ${page <= 1 ? "disabled" : ""}>Anterior</button>
      <span>Pagina ${int(page)} de ${int(pages)}</span>
      <button class="secondary" data-action="${esc(action)}" data-page="${Math.min(pages, page + 1)}" ${page >= pages ? "disabled" : ""}>Proxima</button>
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
  const query = normalizeText(state.promoterLinkSearch);
  const rows = eventPromoters(event).filter((row) => !query || normalizeText(row.name).includes(query));
  const salesRows = rows.filter((row) => row.revenue > 0 || row.sold > 0);
  const courtesyRows = rows.filter((row) => row.complimentary > 0);
  return `
    <div class="grid promoter-compare-panel">
      <div class="card filter-panel promoter-link-filter">
        <div class="section-title">
          <h3>Comparativo por link</h3>
          <p>Busque um link/comissario para comparar vendas e cortesias nas duas colunas.</p>
        </div>
        <div class="filter-grid promoter-link-filter-grid">
          <label class="filter-field">
            <span>Buscar link/comissario</span>
            <input class="search" id="promoterLinkSearch" value="${esc(state.promoterLinkSearch)}" placeholder="Digite o nome do link" />
          </label>
          <div class="detail-metrics promoter-link-summary">
            <span><b>${int(salesRows.length)}</b><small>Links com venda</small></span>
            <span><b>${int(courtesyRows.length)}</b><small>Links com cortesia</small></span>
          </div>
        </div>
      </div>
      <div class="grid two promoter-split" style="--promoter-left:${state.promoterSplit}%">
        <div class="promoter-pane">
          <div class="section-title inline-section"><h3>Vendas por link</h3><p>% sobre o faturamento deste evento.</p></div>
          ${renderSalesLinkTable(salesRows, Number(event.revenue || 0))}
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
          ${renderCourtesyLinkTable(courtesyRows)}
        </div>
      </div>
    </div>
  `;
}

function renderBatches(event) {
  const filters = state.batchFilters;
  const rows = (event.batches || [])
    .filter((batch) => {
      const sold = Number(batch.sold || 0);
      const complimentary = Number(batch.complimentary || 0);
      const validated = Number(batch.validated || 0);
      const queryMatch = !filters.search || normalizeText(batch.label).includes(normalizeText(filters.search));
      const typeMatch =
        filters.type === "all" ||
        (filters.type === "sales" && sold > 0) ||
        (filters.type === "courtesy" && complimentary > 0) ||
        (filters.type === "validated" && validated > 0);
      return queryMatch && typeMatch;
    })
    .slice();
  const groups = sortBatchGroups(buildBatchGroups(rows), filters.sort);
  const filteredTotals = rows.reduce(
    (acc, batch) => {
      acc.sold += Number(batch.sold || 0);
      acc.complimentary += Number(batch.complimentary || 0);
      acc.validated += Number(batch.validated || 0);
      acc.revenue += Number(batch.revenue || 0);
      return acc;
    },
    { sold: 0, complimentary: 0, validated: 0, revenue: 0 }
  );
  const filteredTickets = filteredTotals.sold + filteredTotals.complimentary;
  return `
    <div class="batch-filter-panel">
      <div class="section-title">
        <h3>Lotes do evento</h3>
        <p>${int(groups.length)} grupos / ${int(rows.length)} de ${int((event.batches || []).length)} lotes exibidos.</p>
      </div>
      <div class="filter-grid batch-filter-grid">
        <label class="filter-field">
          <span>Buscar lote</span>
          <input class="search" id="batchSearch" value="${esc(filters.search)}" placeholder="Nome do lote" />
        </label>
        <label class="filter-field">
          <span>Tipo</span>
          <select id="batchType">
            <option value="all" ${filters.type === "all" ? "selected" : ""}>Todos</option>
            <option value="sales" ${filters.type === "sales" ? "selected" : ""}>Com venda</option>
            <option value="courtesy" ${filters.type === "courtesy" ? "selected" : ""}>Cortesia</option>
            <option value="validated" ${filters.type === "validated" ? "selected" : ""}>Com validacao</option>
          </select>
        </label>
        <label class="filter-field">
          <span>Ordenar por</span>
          <select id="batchSort">
            <option value="revenue" ${filters.sort === "revenue" ? "selected" : ""}>Faturamento</option>
            <option value="sold" ${filters.sort === "sold" ? "selected" : ""}>Vendidos</option>
            <option value="courtesy" ${filters.sort === "courtesy" ? "selected" : ""}>Cortesias</option>
            <option value="validated" ${filters.sort === "validated" ? "selected" : ""}>Validados</option>
            <option value="conversion" ${filters.sort === "conversion" ? "selected" : ""}>Conversao</option>
            <option value="name" ${filters.sort === "name" ? "selected" : ""}>Nome</option>
          </select>
        </label>
      </div>
      <div class="detail-metrics batch-filter-summary">
        <span><b>${money(filteredTotals.revenue)}</b><small>Receita total</small></span>
        <span><b>${int(filteredTotals.sold)}</b><small>Vendidos</small></span>
        <span><b>${int(filteredTotals.complimentary)}</b><small>Cortesias</small></span>
        <span><b>${int(filteredTotals.validated)}</b><small>Validados</small></span>
        <span><b>${pct(safeRate(filteredTotals.validated, filteredTickets))}</b><small>Presenca</small></span>
      </div>
    </div>
    <div class="table-wrap">
      <table class="batch-group-table">
        <thead><tr><th>Area/Tipo</th><th>Vendidos</th><th>Val. vendas</th><th>Cortesias</th><th>Val. cortesias</th><th>Receita</th><th>% Fat.</th></tr></thead>
        <tbody>
          ${groups
            .map((group) => {
              const expanded = state.batchDrawerGroupKey === group.key;
              return `
                <tr class="batch-group-row ${expanded ? "is-expanded" : ""}" data-batch-group="${esc(group.key)}" title="Clique para ver os lotes deste grupo">
                  <td><strong>${esc(group.label)}</strong><span class="row-hint">${expanded ? "Detalhes abertos" : `${int(group.batches.length)} lotes`}</span></td>
                  <td>${int(group.sold)}</td>
                  <td>${group.sold ? rateCell(group.soldValidated, group.sold) : "-"}</td>
                  <td>${int(group.complimentary)}</td>
                  <td>${group.complimentary ? rateCell(group.complimentaryValidated, group.complimentary, true) : "-"}</td>
                  <td>${money(group.revenue)}</td>
                  <td>${Number(group.revenue || 0) ? shareCell(group.revenue, event.revenue) : "-"}</td>
                </tr>
              `;
            })
            .join("") || `<tr><td colspan="7">Nenhum lote encontrado com os filtros atuais.</td></tr>`}
        </tbody>
      </table>
    </div>
	  `;
}

function renderBatchGroupDetail(event, group, options = {}) {
  const showHeader = options.showHeader !== false;
  return `
    <div class="batch-group-detail">
      <div class="batch-detail-block">
        ${
          showHeader
            ? `<div class="batch-detail-head">
                <h4>${esc(group.label)}</h4>
                <p>${int(group.batches.length)} lotes com nomenclatura do Excel.</p>
              </div>`
            : ""
        }
        <div class="table-wrap nested-detail-table batch-lot-table" tabindex="0">
          <table>
            <thead><tr><th>Lote</th><th>Vendas</th><th>Cortesias</th><th>Total val.</th><th>Presenca</th><th>Receita</th></tr></thead>
            <tbody>
              ${group.batches
                .map((batch) => {
                  const tickets = Number(batch.sold || 0) + Number(batch.complimentary || 0);
                  return `
                    <tr class="detail-batch-row">
                      <td data-label="Lote"><strong>${esc(batch.rawLabel || batch.label || "Sem lote")}</strong></td>
                      <td data-label="Vendas"><strong>${int(batch.sold)}</strong><small>${int(batch.soldValidated)} validadas</small></td>
                      <td data-label="Cortesias"><strong>${int(batch.complimentary)}</strong><small>${int(batch.complimentaryValidated)} validadas</small></td>
                      <td data-label="Total val.">${int(batch.validated)}</td>
                      <td class="rate-col" data-label="Presenca">${tickets ? rateCell(batch.validated, tickets, true, "rate-only") : "-"}</td>
                      <td class="money-col" data-label="Receita"><strong>${money(batch.revenue)}</strong><small>${Number(batch.revenue || 0) ? pct(safeRate(batch.revenue, event.revenue)) : "-"}</small></td>
                    </tr>
                  `;
                })
                .join("")}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  `;
}

function renderBatchLotDrawer() {
  if (state.view !== "detail" || !state.batchDrawerGroupKey) return "";
  const event = selectedEvent();
  const group = buildBatchGroups(event?.batches || []).find((item) => item.key === state.batchDrawerGroupKey);
  if (!event || !group) return "";
  const tickets = Number(group.sold || 0) + Number(group.complimentary || 0);
  return `
    <div class="batch-drawer-backdrop" data-action="close-batch-drawer"></div>
    <aside class="batch-drawer" role="dialog" aria-modal="true" aria-label="Detalhes dos lotes">
      <div class="batch-drawer-head">
        <div>
          <span class="eyebrow">${esc(event.name)}</span>
          <h3>${esc(group.label)}</h3>
          <p>${int(group.batches.length)} lotes · ${int(tickets)} ingressos · ${money(group.revenue)}</p>
        </div>
        <button class="ghost icon-button" data-action="close-batch-drawer" aria-label="Fechar detalhes">×</button>
      </div>
      ${renderBatchGroupDetail(event, group, { showHeader: false })}
    </aside>
  `;
}

function renderMailingTable(rows, pageSize = 50, page = 1) {
  const start = (page - 1) * pageSize;
  return renderResponsiveTable({
    className: "compact-table mailing-table",
    columns: [
      { label: "Nome", render: (row) => `<strong>${esc(row.name)}</strong>${row.possibleDuplicate ? `<span class="pill warn">Possivel duplicidade</span>` : ""}` },
      { label: "Contato", render: (row) => `<strong>${row.email ? esc(row.email) : "-"}</strong><small>${row.phone ? esc(row.phone) : "-"}</small>` },
      { label: "Tipo", render: (row) => esc(row.participationType) },
      { label: "Ingressos", render: (row) => int(row.tickets) },
      { label: "Validacoes", render: (row) => int(row.validationCount) },
      { label: "Origem/link", render: (row) => esc(row.origins.slice(0, 3).join(", ") || "-") }
    ],
    rows: rows.slice(start, start + pageSize),
    empty: "Nenhum participante encontrado."
  });
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
      const key = row.dataset.promoter;
      state.expandedPromoter = state.expandedPromoter === key ? "" : key;
      renderPreservingElement(dataSelector("data-promoter", key));
    });
  });
  document.querySelectorAll("[data-sales-code]").forEach((row) => {
    row.addEventListener("click", () => {
      const key = row.dataset.salesCode;
      state.salesCodeDrawerKey = key;
      state.batchDrawerGroupKey = "";
      state.drawerReturnSelector = dataSelector("data-sales-code", key);
      state.pendingDrawerFocus = true;
      renderPreservingElement(dataSelector("data-sales-code", key));
    });
  });
  document.querySelectorAll("[data-action='close-sales-code-drawer']").forEach((element) => {
    element.addEventListener("click", closeActiveDrawer);
  });
  document.querySelectorAll("[data-batch-group]").forEach((row) => {
    row.addEventListener("click", () => {
      const key = row.dataset.batchGroup;
      state.salesCodeDrawerKey = "";
      state.batchDrawerGroupKey = key;
      state.drawerReturnSelector = dataSelector("data-batch-group", key);
      state.pendingDrawerFocus = true;
      renderPreservingElement(dataSelector("data-batch-group", key));
    });
  });
  document.querySelectorAll("[data-action='close-batch-drawer']").forEach((element) => {
    element.addEventListener("click", closeActiveDrawer);
  });
  document.onkeydown = handleDrawerKeydown;
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
  document.querySelector("[data-action='toggle-sidebar']")?.addEventListener("click", () => {
    state.sidebarCollapsed = !state.sidebarCollapsed;
    try {
      localStorage.setItem(SIDEBAR_COLLAPSED_KEY, state.sidebarCollapsed ? "1" : "0");
    } catch {
      // localStorage pode estar indisponivel em alguns contextos embarcados.
    }
    render();
  });
  document.querySelectorAll("[data-action='export-mailing']").forEach((button) => {
    button.addEventListener("click", async (event) => {
      event.stopPropagation();
      await exportMailingCsv(button.dataset.mailingScope === "event" ? button.dataset.eventId : "all");
    });
  });
  document.querySelector("[data-action='logout']")?.addEventListener("click", logout);
  document.querySelector("[data-action='retry-access-requests']")?.addEventListener("click", () => {
    state.accessRequestsError = "";
    state.accessRequestsLoaded = false;
    state.accessRequests = [];
    ensureAccessRequests();
  });
  document.querySelectorAll("[data-action='approve-access']").forEach((button) => {
    button.addEventListener("click", () => {
      const issueNumber = Number(button.dataset.issue);
      const tierSelect = document.querySelector(`[data-tier-select="${button.dataset.issue}"]`);
      decideAccessRequest(issueNumber, "approved", tierSelect?.value || "overview");
    });
  });
  document.querySelectorAll("[data-action='deny-access']").forEach((button) => {
    button.addEventListener("click", () => {
      decideAccessRequest(Number(button.dataset.issue), "denied");
    });
  });
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
  document.getElementById("overviewCodeSort")?.addEventListener("change", (event) => {
    state.codeRankingSort = event.target.value;
    render();
  });
  document.getElementById("promoterLinkSearch")?.addEventListener("input", (event) => {
    state.promoterLinkSearch = event.target.value;
    render();
  });
  document.getElementById("batchSearch")?.addEventListener("input", (event) => {
    state.batchFilters.search = event.target.value;
    render();
  });
  document.getElementById("batchType")?.addEventListener("change", (event) => {
    state.batchFilters.type = event.target.value;
    render();
  });
  document.getElementById("batchSort")?.addEventListener("change", (event) => {
    state.batchFilters.sort = event.target.value;
    render();
  });
  document.getElementById("recurrenceEvent")?.addEventListener("change", (event) => {
    state.recurrenceFilters.eventId = event.target.value;
    state.expandedAudienceKey = "";
    state.audiencePage = 1;
    render();
  });
  document.getElementById("recurrenceType")?.addEventListener("change", (event) => {
    state.recurrenceFilters.type = event.target.value;
    state.expandedAudienceKey = "";
    state.audiencePage = 1;
    render();
  });
  document.getElementById("recurrenceMin")?.addEventListener("input", (event) => {
    state.recurrenceFilters.min = event.target.value;
    state.expandedAudienceKey = "";
    state.audiencePage = 1;
    renderKeepingFocus("recurrenceMin");
  });
  document.getElementById("recurrenceValidatedOnly")?.addEventListener("change", (event) => {
    state.recurrenceFilters.validatedOnly = event.target.checked;
    state.expandedAudienceKey = "";
    state.audiencePage = 1;
    render();
  });
  document.getElementById("mailingEvent")?.addEventListener("change", (event) => {
    state.mailingEventId = event.target.value;
    state.mailingPage = 1;
    render();
  });
  document.querySelectorAll("[data-action='mailing-page']").forEach((button) => {
    button.addEventListener("click", () => {
      state.mailingPage = Number(button.dataset.page || 1);
      render();
    });
  });
  document.querySelectorAll("[data-action='audience-page']").forEach((button) => {
    button.addEventListener("click", () => {
      state.audiencePage = Number(button.dataset.page || 1);
      render();
    });
  });
  document.getElementById("profileEvent")?.addEventListener("change", (event) => {
    state.profileEventId = event.target.value;
    render();
  });
  document.getElementById("profileTicketType")?.addEventListener("change", (event) => {
    state.profileFilters.ticketType = event.target.value;
    render();
  });
  document.getElementById("profileGender")?.addEventListener("change", (event) => {
    state.profileFilters.gender = event.target.value;
    render();
  });
  document.getElementById("profileAgeBand")?.addEventListener("change", (event) => {
    state.profileFilters.ageBand = event.target.value;
    render();
  });
  document.getElementById("profileSegment")?.addEventListener("change", (event) => {
    state.profileFilters.segment = event.target.value;
    render();
  });
  bindHorizontalDetailScroll();
  bindPromoterSplitResize();
}

function bindHorizontalDetailScroll() {
  document.querySelectorAll(".nested-detail-table").forEach((container) => {
    let startX = 0;
    let startScrollLeft = 0;
    let dragging = false;
    let activeDrag = false;

    const startDrag = (event, moveName, upName, cancelName) => {
      if (event.button !== undefined && event.button !== 0) return;
      if (event.target.closest("button, a, input, select, textarea")) return;
      if (container.scrollWidth <= container.clientWidth + 2) return;
      if (activeDrag) return;

      startX = event.clientX;
      startScrollLeft = container.scrollLeft;
      dragging = false;
      activeDrag = true;
      container.setPointerCapture?.(event.pointerId);

      const onMove = (moveEvent) => {
        const distance = moveEvent.clientX - startX;
        if (!dragging && Math.abs(distance) < 4) return;
        dragging = true;
        container.classList.add("is-dragging");
        container.scrollLeft = startScrollLeft - distance;
        moveEvent.preventDefault();
      };

      const onUp = () => {
        container.classList.remove("is-dragging");
        container.releasePointerCapture?.(event.pointerId);
        activeDrag = false;
        window.removeEventListener(moveName, onMove);
        window.removeEventListener(upName, onUp);
        if (cancelName) window.removeEventListener(cancelName, onUp);
      };

      window.addEventListener(moveName, onMove, { passive: false });
      window.addEventListener(upName, onUp, { once: true });
      if (cancelName) window.addEventListener(cancelName, onUp, { once: true });
    };

    container.addEventListener("pointerdown", (event) => startDrag(event, "pointermove", "pointerup", "pointercancel"));
    container.addEventListener("mousedown", (event) => startDrag(event, "mousemove", "mouseup"));
  });
}

function setPromoterSplit(value, container) {
  state.promoterSplit = Math.round(Math.min(78, Math.max(22, value)));
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
      setPromoterSplit(22, container);
    }
    if (event.key === "End") {
      event.preventDefault();
      setPromoterSplit(78, container);
    }
  });

  handle.addEventListener("dblclick", () => setPromoterSplit(63, container));
}

render();
checkSession();
startRealtimeDataSync();
