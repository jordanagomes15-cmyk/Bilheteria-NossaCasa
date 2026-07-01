const SESSION_KEY = "nossa-casa-session-v1";
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
  query: "",
  filters: {
    search: "",
    pne: "all",
    sort: "revenue"
  }
};

let activeDataVersion = dataVersion(embeddedData);

function loadEvents() {
  return embeddedData?.events?.length ? embeddedData.events : fallbackEvents;
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
  if (state.filters.sort === "name") return String(a.name || "").localeCompare(String(b.name || ""), "pt-BR");
  if (state.filters.sort === "checkins") return Number(b.validated || 0) - Number(a.validated || 0);
  if (state.filters.sort === "presence") return eventPresenceRate(b) - eventPresenceRate(a);
  return Number(b.revenue || 0) - Number(a.revenue || 0);
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
    element.setSelectionRange(end, end);
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
      <div class="grid two">
        <div class="card">
          <div class="toolbar">
            <div class="section-title"><h2>Vendas por link</h2><p>Participacao de cada link no faturamento do recorte.</p></div>
          </div>
          ${renderSalesLinkTable(promoterRanking(events).filter((row) => row.revenue > 0 || row.sold > 0).slice(0, 18), sum.revenue)}
        </div>
        <div class="card">
          <div class="section-title"><h2>Cortesias por link</h2><p>Quantidade emitida, validada e taxa de presenca.</p></div>
          ${renderCourtesyLinkTable(promoterRanking(events).filter((row) => row.complimentary > 0).slice(0, 18))}
        </div>
      </div>
      <div class="card">
        <div class="section-title"><h2>Eventos em destaque</h2><p>Ordenado pelos filtros atuais.</p></div>
        ${events
          .slice(0, 6)
          .map((event) => eventMini(event))
          .join("") || `<p class="notice">Nenhum evento encontrado com os filtros atuais.</p>`}
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
  return `
    <button class="event-mini" data-event="${esc(event.id)}">
      <h3>${esc(event.name)}</h3>
      <div class="bar"><i style="width:${Math.min(100, rate)}%"></i></div>
      <div class="muted">${money(event.revenue)} • ${int(event.validated)} check-ins</div>
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
                  <td>${pct(safeRate(row.revenue, totalRevenue))}</td>
                  <td>${int(row.sold)}</td>
                  <td>${row.sold ? `${int(row.soldValidated)} (${pct(soldRate)})` : "-"}</td>
                  <td>${int(row.complimentary)}</td>
                  <td>${row.complimentary ? `${int(row.complimentaryValidated)} (${pct(courtesyRate)})` : "-"}</td>
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

function renderSalesLinkTable(rows, totalRevenue) {
  if (!rows.length) return `<p class="notice">Nenhum link com venda registrada no recorte atual.</p>`;
  return `
    <div class="table-wrap compact-table">
      <table>
        <thead><tr><th>Link/comissario</th><th>Receita</th><th>% faturamento</th><th>Vendidos</th><th>Val. vendas</th></tr></thead>
        <tbody>
          ${rows
            .map((row) => `
              <tr>
                <td><strong>${esc(row.name)}</strong></td>
                <td>${money(row.revenue)}</td>
                <td><span class="pill ${safeRate(row.revenue, totalRevenue) >= 10 ? "good" : ""}">${pct(safeRate(row.revenue, totalRevenue))}</span></td>
                <td>${int(row.sold)}</td>
                <td>${row.sold ? `${int(row.soldValidated)} (${pct(safeRate(row.soldValidated, row.sold))})` : "-"}</td>
              </tr>
            `)
            .join("")}
        </tbody>
      </table>
    </div>
  `;
}

function renderCourtesyLinkTable(rows) {
  if (!rows.length) return `<p class="notice">Nenhuma cortesia por link no recorte atual.</p>`;
  return `
    <div class="table-wrap compact-table">
      <table>
        <thead><tr><th>Link/comissario</th><th>Cortesias</th><th>Validadas</th><th>% validacao</th></tr></thead>
        <tbody>
          ${rows
            .sort((a, b) => b.complimentary - a.complimentary || b.complimentaryValidated - a.complimentaryValidated)
            .map((row) => {
              const rate = safeRate(row.complimentaryValidated, row.complimentary);
              return `
                <tr>
                  <td><strong>${esc(row.name)}</strong></td>
                  <td>${int(row.complimentary)}</td>
                  <td>${int(row.complimentaryValidated)}</td>
                  <td><span class="pill ${rate >= 55 ? "good" : "warn"}">${pct(rate)}</span></td>
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
                  <td>${event.sold ? `${int(event.soldValidated)} (${pct(safeRate(event.soldValidated, event.sold))})` : "-"}</td>
                  <td>${int(event.complimentary)}</td>
                  <td>${event.complimentary ? `${int(event.complimentaryValidated)} (${pct(safeRate(event.complimentaryValidated, event.complimentary))})` : "-"}</td>
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
      <div class="grid event-list">
      ${events
        .map(
          (event) => `
            <article class="card event-card">
              <h3>${esc(event.name)}</h3>
              <p class="muted">${esc(event.source || "Fonte da pasta de anexos")}</p>
              <div class="event-stats">
                <div><span class="muted">Receita</span><strong>${money(event.revenue)}</strong></div>
                <div><span class="muted">Vendidos</span><strong>${int(event.sold)}</strong></div>
                <div><span class="muted">Check-ins</span><strong>${int(event.validated)}</strong></div>
                <div><span class="muted">PNE</span><strong>${event.pne ? `${int(event.pne.converted)}/${int(event.pne.inserted)}` : "-"}</strong></div>
              </div>
              <button class="primary" data-event="${esc(event.id)}">Abrir evento</button>
            </article>
          `
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
                      <td><span class="pill ${event.rate >= 55 ? "good" : "warn"}">${pct(event.rate)}</span></td>
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
  return `
    <section class="grid">
      <div class="grid cards">
        ${metric("Faturamento", money(event.revenue), "Receita total do evento")}
        ${metric("Venda geral", money(split.generalRevenue), `${int(split.generalSold)} ingressos sem link`)}
        ${metric("Venda por link", money(split.linkRevenue), `${pct(safeRate(split.linkRevenue, event.revenue))} do faturamento`)}
        ${metric("Cortesias", int(event.complimentary), `${int(split.complimentaryValidated)} validadas (${pct(safeRate(split.complimentaryValidated, event.complimentary))})`)}
        ${metric("Check-ins", int(event.validated), `${pct(rate)} de presenca`)}
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
  return { batches: "Vendas por lote", promoters: "Comissarios/RPs", pne: "PNE", summary: "Resumo" }[tab] || tab;
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
    <div class="grid two">
      <div>
        <div class="section-title inline-section"><h3>Vendas por link</h3><p>% sobre o faturamento deste evento.</p></div>
        ${renderSalesLinkTable(rows.filter((row) => row.revenue > 0 || row.sold > 0), Number(event.revenue || 0))}
      </div>
      <div>
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
                  <td>${sold ? `${int(soldValidated)} (${pct(soldRate)})` : "-"}</td>
                  <td>${int(complimentary)}</td>
                  <td>${complimentary ? `<span class="pill ${courtesyRate >= 55 ? "good" : "warn"}">${int(complimentaryValidated)} (${pct(courtesyRate)})</span>` : "-"}</td>
                  <td>${money(batch.revenue)}</td>
                  <td>${Number(batch.revenue || 0) ? pct(safeRate(batch.revenue, event.revenue)) : "-"}</td>
                </tr>
              `;
            })
            .join("")}
        </tbody>
      </table>
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
  document.querySelectorAll("[data-action='toggle-drawer']").forEach((button) => {
    button.addEventListener("click", () => {
      state.drawerOpen = !state.drawerOpen;
      render();
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
}

render();
startRealtimeDataSync();
