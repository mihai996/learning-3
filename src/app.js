const app = document.querySelector("#app");
const state = { catalog: null, query: "", routeToken: 0 };

const searchIcon = `<svg viewBox="0 0 24 24" fill="none" aria-hidden="true"><circle cx="11" cy="11" r="6.5" stroke="currentColor" stroke-width="1.8"/><path d="m16 16 4 4" stroke="currentColor" stroke-width="1.8" stroke-linecap="round"/></svg>`;

function escapeHtml(value = "") {
  return String(value)
    .replaceAll("&", "&amp;")
    .replaceAll("<", "&lt;")
    .replaceAll(">", "&gt;")
    .replaceAll('"', "&quot;")
    .replaceAll("'", "&#039;");
}

function safeUrl(value) {
  const url = String(value).trim();
  if (/^(https?:|mailto:|#|\.\.?\/)/i.test(url) || !/^[a-z][a-z0-9+.-]*:/i.test(url)) {
    return escapeHtml(url);
  }
  return "#";
}

function inlineMarkdown(value) {
  let text = escapeHtml(value);
  text = text.replace(/!\[([^\]]*)\]\(([^)]+)\)/g, (_, alt, src) => `<img src="${safeUrl(src)}" alt="${alt}" loading="lazy">`);
  text = text.replace(/\[([^\]]+)\]\(([^)]+)\)/g, (_, label, href) => `<a href="${safeUrl(href)}">${label}</a>`);
  text = text.replace(/`([^`]+)`/g, "<code>$1</code>");
  text = text.replace(/\*\*([^*]+)\*\*/g, "<strong>$1</strong>");
  text = text.replace(/(?<!\*)\*([^*]+)\*(?!\*)/g, "<em>$1</em>");
  return text;
}

function stripFrontmatter(source) {
  return source.replace(/^---\n[\s\S]*?\n---\n/, "");
}

function renderMarkdown(source) {
  const lines = stripFrontmatter(source.replace(/\r\n/g, "\n")).split("\n");
  const html = [];
  let paragraph = [];
  let listType = null;
  let code = null;

  const flushParagraph = () => {
    if (paragraph.length) html.push(`<p>${inlineMarkdown(paragraph.join(" "))}</p>`);
    paragraph = [];
  };
  const closeList = () => {
    if (listType) html.push(`</${listType}>`);
    listType = null;
  };

  for (const line of lines) {
    if (line.startsWith("```")) {
      flushParagraph();
      closeList();
      if (code === null) code = [];
      else {
        html.push(`<pre><code>${escapeHtml(code.join("\n"))}</code></pre>`);
        code = null;
      }
      continue;
    }
    if (code !== null) {
      code.push(line);
      continue;
    }
    if (!line.trim()) {
      flushParagraph();
      closeList();
      continue;
    }
    const heading = line.match(/^(#{1,4})\s+(.+)$/);
    if (heading) {
      flushParagraph();
      closeList();
      const level = heading[1].length;
      html.push(`<h${level}>${inlineMarkdown(heading[2])}</h${level}>`);
      continue;
    }
    if (/^(-{3,}|\*{3,})$/.test(line.trim())) {
      flushParagraph();
      closeList();
      html.push("<hr>");
      continue;
    }
    if (line.startsWith("> ")) {
      flushParagraph();
      closeList();
      html.push(`<blockquote><p>${inlineMarkdown(line.slice(2))}</p></blockquote>`);
      continue;
    }
    const unordered = line.match(/^\s*[-*]\s+(.+)$/);
    const ordered = line.match(/^\s*\d+[.)]\s+(.+)$/);
    if (unordered || ordered) {
      flushParagraph();
      const nextType = ordered ? "ol" : "ul";
      if (listType !== nextType) {
        closeList();
        listType = nextType;
        html.push(`<${listType}>`);
      }
      const item = (unordered || ordered)[1];
      html.push(`<li>${inlineMarkdown(item.replace(/^\[[ xX]\]\s+/, ""))}</li>`);
      continue;
    }
    paragraph.push(line.trim());
  }
  flushParagraph();
  closeList();
  if (code !== null) html.push(`<pre><code>${escapeHtml(code.join("\n"))}</code></pre>`);
  return html.join("\n");
}

function renderShell(content) {
  app.innerHTML = `
    <div class="site-shell">
      <header class="site-header">
        <a class="brand" href="#/" aria-label="Atlas de studiu — pagina principală">
          <span class="brand-mark" aria-hidden="true">A</span>
          <span class="brand-copy"><strong>Atlas de studiu</strong><small>Biblioteca examenelor</small></span>
        </a>
        <nav aria-label="Navigare principală"><a href="#/discipline">Discipline</a></nav>
      </header>
      <main id="main-content">${content}</main>
    </div>`;
}

function moduleHref(module) {
  return `#/modul/${module.id}`;
}

function subjectModules(key) {
  return state.catalog.modules.filter((module) => module.subject === key);
}

function moduleCard(module, index = 0) {
  const subject = state.catalog.subjects[module.subject];
  return `
    <a class="module-card" href="${moduleHref(module)}" style="--accent:${subject.color}">
      <span class="module-number">${String(index + 1).padStart(2, "0")}</span>
      <span class="module-copy">
        <small>${escapeHtml(subject.name)} · ${escapeHtml(module.duration)}</small>
        <h3>${escapeHtml(module.title)}</h3>
        <p>${escapeHtml(module.summary)}</p>
      </span>
      <span class="module-arrow" aria-hidden="true">→</span>
    </a>`;
}

function subjectCard(key, subject) {
  const modules = subjectModules(key);
  return `
    <a class="subject-card" href="#/disciplina/${key}" style="--accent:${subject.color}">
      <span class="subject-top"><span class="subject-code">${escapeHtml(subject.short)}</span><span>${modules.length} ${modules.length === 1 ? "modul" : "module"}</span></span>
      <h2>${escapeHtml(subject.name)}</h2>
      <p>${escapeHtml(subject.description)}</p>
      <span class="subject-arrow" aria-hidden="true">→</span>
    </a>`;
}

function renderModuleList(modules) {
  if (!modules.length) return `<p class="empty-state">Nu am găsit niciun modul.</p>`;
  return `<div class="module-list">${modules.map(moduleCard).join("")}</div>`;
}

function homePage() {
  renderShell(`
    <div class="page">
      <section class="hero">
        <p class="eyebrow">Microbiologie · Biochimie · Genetică · Pedologie</p>
        <h1>Învață în straturi. Reține prin legături.</h1>
        <p>Notițe clare, scheme vizuale și o navigare simplă pentru pregătirea examenelor.</p>
      </section>

      <section class="section-block">
        <div class="section-heading"><div><p class="eyebrow">Bibliotecă</p><h2>Discipline</h2></div></div>
        <div class="subject-grid">${Object.entries(state.catalog.subjects).map(([key, subject]) => subjectCard(key, subject)).join("")}</div>
      </section>

      <section class="section-block search-section">
        <div class="section-heading"><div><p class="eyebrow">Acces rapid</p><h2>Caută în notițe</h2></div></div>
        <label class="search-box">${searchIcon}<span class="sr-only">Caută în atlas</span><input id="global-search" type="search" autocomplete="off" placeholder="Concept, modul sau etichetă…"></label>
        <div id="search-results">${renderModuleList(state.catalog.modules)}</div>
      </section>
    </div>`);
}

function updateSearchResults() {
  const target = document.querySelector("#search-results");
  if (!target) return;
  const query = state.query.trim().toLocaleLowerCase("ro");
  const modules = !query ? state.catalog.modules : state.catalog.modules.filter((module) => {
    const subject = state.catalog.subjects[module.subject];
    return [module.title, module.summary, module.tags.join(" "), subject.name]
      .join(" ")
      .toLocaleLowerCase("ro")
      .includes(query);
  });
  target.innerHTML = renderModuleList(modules);
}

function disciplinesPage() {
  renderShell(`
    <div class="page narrow-top">
      <a class="back-link" href="#/">← Acasă</a>
      <header class="page-title"><p class="eyebrow">Bibliotecă</p><h1>Discipline</h1><p>Alege disciplina și deschide direct modulul de care ai nevoie.</p></header>
      <div class="subject-grid">${Object.entries(state.catalog.subjects).map(([key, subject]) => subjectCard(key, subject)).join("")}</div>
    </div>`);
}

function subjectPage(key) {
  const subject = state.catalog.subjects[key];
  if (!subject) return notFoundPage();
  const modules = subjectModules(key);
  renderShell(`
    <div class="page narrow-top">
      <a class="back-link" href="#/discipline">← Discipline</a>
      <header class="subject-header" style="--accent:${subject.color}">
        <span class="subject-code">${escapeHtml(subject.short)}</span>
        <p class="eyebrow">Disciplină</p>
        <h1>${escapeHtml(subject.name)}</h1>
        <p>${escapeHtml(subject.description)}</p>
      </header>
      <section class="section-block compact"><div class="section-heading"><h2>Module</h2></div>${renderModuleList(modules)}</section>
    </div>`);
}

async function modulePage(id, token) {
  const module = state.catalog.modules.find((item) => item.id === id);
  if (!module) return notFoundPage();
  const subject = state.catalog.subjects[module.subject];
  const modules = subjectModules(module.subject);
  const index = modules.findIndex((item) => item.id === module.id);
  const previous = modules[index - 1];
  const next = modules[index + 1];

  renderShell(`<div class="page"><p class="loading-message">Se încarcă modulul…</p></div>`);
  try {
    const response = await fetch(`./${module.path}`);
    if (!response.ok) throw new Error(`HTTP ${response.status}`);
    const markdown = await response.text();
    if (token !== state.routeToken) return;
    renderShell(`
      <div class="reading-page">
        <a class="back-link" href="#/disciplina/${module.subject}">← ${escapeHtml(subject.name)}</a>
        <article class="article-card">
          <header class="article-header">
            <p class="eyebrow" style="color:${subject.color}">${escapeHtml(subject.name)} · ${escapeHtml(module.duration)}</p>
            <h1>${escapeHtml(module.title)}</h1>
            <p>${escapeHtml(module.summary)}</p>
          </header>
          ${module.interactive ? `
            <section class="visual-section" aria-label="Vizualizare explicativă">
              <p class="visual-label">Schemă vizuală</p>
              <iframe src="./${safeUrl(module.interactive)}?embed=1" title="Schemă vizuală: ${escapeHtml(module.title)}" loading="lazy"></iframe>
            </section>` : ""}
          <div class="markdown">${renderMarkdown(markdown)}</div>
        </article>
        ${(previous || next) ? `<nav class="module-pagination" aria-label="Module alăturate">
          ${previous ? `<a href="${moduleHref(previous)}"><small>← Anterior</small><strong>${escapeHtml(previous.title)}</strong></a>` : `<span></span>`}
          ${next ? `<a class="next" href="${moduleHref(next)}"><small>Următor →</small><strong>${escapeHtml(next.title)}</strong></a>` : ""}
        </nav>` : ""}
      </div>`);
  } catch {
    if (token !== state.routeToken) return;
    renderShell(`<div class="page"><section class="error-card"><h1>Modulul nu s-a încărcat</h1><p>Verifică conexiunea și încearcă din nou.</p><a href="${moduleHref(module)}">Reîncarcă</a></section></div>`);
  }
}

function notFoundPage() {
  renderShell(`<div class="page"><section class="error-card"><p class="eyebrow">404</p><h1>Pagina nu este în atlas</h1><a href="#/">Înapoi acasă</a></section></div>`);
}

function currentRoute() {
  return decodeURI(location.hash.replace(/^#\/?/, "")) || "";
}

function route() {
  if (!state.catalog) return;
  const token = ++state.routeToken;
  const value = currentRoute();
  window.scrollTo({ top: 0, behavior: "instant" });
  if (!value) return homePage();
  if (value === "discipline") return disciplinesPage();
  if (value.startsWith("disciplina/")) return subjectPage(value.slice("disciplina/".length));
  if (value.startsWith("modul/")) return modulePage(value.slice("modul/".length), token);
  return notFoundPage();
}

app.addEventListener("input", (event) => {
  if (event.target.id !== "global-search") return;
  state.query = event.target.value;
  updateSearchResults();
});

window.addEventListener("hashchange", route);

async function init() {
  try {
    const response = await fetch("./content/catalog.json");
    if (!response.ok) throw new Error(`HTTP ${response.status}`);
    state.catalog = await response.json();
    route();
    if ("serviceWorker" in navigator) navigator.serviceWorker.register("./sw.js").catch(() => {});
  } catch {
    app.innerHTML = `<main class="page"><section class="error-card"><h1>Atlasul nu se poate deschide</h1><p>Catalogul lipsește sau conexiunea a fost întreruptă.</p><button onclick="location.reload()">Încearcă din nou</button></section></main>`;
  }
}

init();
