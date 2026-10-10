const STORAGE_KEY = "atlas.study.v1";
const app = document.querySelector("#app");

const icons = {
  search: `<svg viewBox="0 0 24 24" fill="none" aria-hidden="true"><circle cx="11" cy="11" r="6.5" stroke="currentColor" stroke-width="1.8"/><path d="m16 16 4 4" stroke="currentColor" stroke-width="1.8" stroke-linecap="round"/></svg>`,
  home: `<svg viewBox="0 0 24 24" fill="none" aria-hidden="true"><path d="m4 10 8-6 8 6v9a1 1 0 0 1-1 1h-5v-6h-4v6H5a1 1 0 0 1-1-1v-9Z" stroke="currentColor" stroke-width="1.7" stroke-linejoin="round"/></svg>`,
  grid: `<svg viewBox="0 0 24 24" fill="none" aria-hidden="true"><rect x="4" y="4" width="6" height="6" rx="1.5" stroke="currentColor" stroke-width="1.7"/><rect x="14" y="4" width="6" height="6" rx="1.5" stroke="currentColor" stroke-width="1.7"/><rect x="4" y="14" width="6" height="6" rx="1.5" stroke="currentColor" stroke-width="1.7"/><rect x="14" y="14" width="6" height="6" rx="1.5" stroke="currentColor" stroke-width="1.7"/></svg>`,
  star: `<svg viewBox="0 0 24 24" fill="none" aria-hidden="true"><path d="m12 3 2.7 5.5 6.1.9-4.4 4.3 1 6.1-5.4-2.9-5.4 2.9 1-6.1-4.4-4.3 6.1-.9L12 3Z" stroke="currentColor" stroke-width="1.7" stroke-linejoin="round"/></svg>`
};

const state = {
  catalog: null,
  query: "",
  routeToken: 0,
  study: loadStudyState()
};

function loadStudyState() {
  try {
    return { completed: [], favorites: [], recent: [], ...JSON.parse(localStorage.getItem(STORAGE_KEY) || "{}") };
  } catch {
    return { completed: [], favorites: [], recent: [] };
  }
}

function saveStudyState() {
  localStorage.setItem(STORAGE_KEY, JSON.stringify(state.study));
}

function escapeHtml(value = "") {
  return String(value)
    .replaceAll("&", "&amp;")
    .replaceAll("<", "&lt;")
    .replaceAll(">", "&gt;")
    .replaceAll('"', "&quot;")
    .replaceAll("'", "&#039;");
}

function safeUrl(value) {
  const decoded = String(value).trim();
  if (/^(https?:|mailto:|#|\.\.?\/)/i.test(decoded) || !/^[a-z][a-z0-9+.-]*:/i.test(decoded)) {
    return escapeHtml(decoded);
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
      let item = (unordered || ordered)[1];
      const task = item.match(/^\[([ xX])\]\s+(.+)$/);
      if (task) {
        html.push(`<li class="task"><input type="checkbox" disabled ${task[1].toLowerCase() === "x" ? "checked" : ""}>${inlineMarkdown(task[2])}</li>`);
      } else {
        html.push(`<li>${inlineMarkdown(item)}</li>`);
      }
      continue;
    }
    paragraph.push(line.trim());
  }
  flushParagraph();
  closeList();
  if (code !== null) html.push(`<pre><code>${escapeHtml(code.join("\n"))}</code></pre>`);
  return html.join("\n");
}

function moduleHref(module) {
  return `#/modul/${module.id}`;
}

function subjectModules(key) {
  return state.catalog.modules.filter((module) => module.subject === key);
}

function isCompleted(id) {
  return state.study.completed.includes(id);
}

function renderShell(content, active = "home") {
  app.innerHTML = `
    <div class="site-shell">
      <header class="site-header">
        <a class="brand" href="#/" aria-label="Atlas de studiu — pagina principală">
          <span class="brand-mark" aria-hidden="true">A</span>
          <span class="brand-copy"><strong>Atlas de studiu</strong><small>Biblioteca examenelor</small></span>
        </a>
        <nav class="desktop-nav" aria-label="Navigare principală">
          <a href="#/discipline">Discipline</a>
          <a href="#/favorite">Favorite</a>
          <button class="icon-button search-button" data-action="focus-search" type="button">${icons.search}<span>Caută</span></button>
        </nav>
      </header>
      <div class="reading-progress" id="reading-progress" aria-hidden="true"></div>
      <main id="main-content">${content}</main>
      <nav class="bottom-nav" aria-label="Navigare mobilă">
        <a href="#/" class="${active === "home" ? "active" : ""}">${icons.home}<span>Acasă</span></a>
        <a href="#/discipline" class="${active === "subjects" ? "active" : ""}">${icons.grid}<span>Discipline</span></a>
        <a href="#/favorite" class="${active === "favorites" ? "active" : ""}">${icons.star}<span>Favorite</span></a>
      </nav>
    </div>`;
}

function moduleCard(module, index = 0) {
  const subject = state.catalog.subjects[module.subject];
  return `
    <a class="module-card" href="${moduleHref(module)}" style="--module-color:${subject.color}">
      <span class="module-number">${String(index + 1).padStart(2, "0")}</span>
      <span class="module-copy">
        <h3>${escapeHtml(module.title)}</h3>
        <p>${escapeHtml(module.summary)}</p>
      </span>
      <span class="module-meta"><span class="status-dot ${isCompleted(module.id) ? "done" : ""}"></span>${escapeHtml(module.duration)}</span>
    </a>`;
}

function subjectCard(key, subject) {
  const modules = subjectModules(key);
  const done = modules.filter((module) => isCompleted(module.id)).length;
  const percent = modules.length ? Math.round(done / modules.length * 100) : 0;
  return `
    <a class="subject-card" href="#/disciplina/${key}" style="--accent:${subject.color}">
      <span class="subject-top">
        <span class="subject-code">${escapeHtml(subject.short)}</span>
        <span class="subject-count">${modules.length} ${modules.length === 1 ? "modul" : "module"}</span>
      </span>
      <h3>${escapeHtml(subject.name)}</h3>
      <p>${escapeHtml(subject.description)}</p>
      <span class="progress-track" aria-label="Progres ${percent}%"><span style="width:${percent}%"></span></span>
    </a>`;
}

function homePage() {
  const modules = state.catalog.modules;
  const completed = modules.filter((module) => isCompleted(module.id)).length;
  const recent = state.study.recent.map((id) => modules.find((module) => module.id === id)).filter(Boolean);
  const next = recent[0] || modules.find((module) => !isCompleted(module.id)) || modules[0];
  renderShell(`
    <div class="page">
      <section class="hero">
        <div class="hero-copy">
          <p class="eyebrow">Sesiune de studiu · ${Object.keys(state.catalog.subjects).length} discipline</p>
          <h1>Învață în straturi. Reține prin legături.</h1>
          <p>Un singur loc pentru notițe, recapitulări și scheme. Conținutul crește modular, iar progresul rămâne pe dispozitivul tău.</p>
        </div>
        <div class="hero-side">
          <div class="mini-stat"><span>Module</span><strong>${modules.length}</strong></div>
          <div class="mini-stat"><span>Finalizate</span><strong>${completed}</strong></div>
          ${next ? `<a class="hero-cta" href="${moduleHref(next)}"><span>${recent.length ? "Continuă lectura" : "Începe primul modul"}</span><span aria-hidden="true">→</span></a>` : ""}
        </div>
      </section>

      <div class="toolbar">
        <div><h2 class="section-heading">Discipline</h2><p class="section-kicker">Alege contextul în care studiezi astăzi.</p></div>
        <a class="text-link" href="#/discipline">Vezi toate →</a>
      </div>
      <section class="subject-grid" aria-label="Discipline">
        ${Object.entries(state.catalog.subjects).map(([key, subject]) => subjectCard(key, subject)).join("")}
      </section>

      <section class="search-panel" id="search-panel">
        <div class="search-box">${icons.search}<input id="global-search" type="search" autocomplete="off" placeholder="Caută un concept, modul sau etichetă…" aria-label="Caută în atlas"></div>
        <div class="search-results" id="search-results">${renderSearchResults(recent.length ? recent : modules.slice(0, 4), recent.length ? "Lecturi recente" : "Primele module")}</div>
      </section>
    </div>`, "home");
}

function renderSearchResults(modules, label = "Rezultate") {
  if (!modules.length) return `<div class="empty-state">Nu am găsit niciun modul. Încearcă un termen mai general.</div>`;
  return `<div class="toolbar"><div><h2 class="section-heading">${escapeHtml(label)}</h2><p class="section-kicker">${modules.length} ${modules.length === 1 ? "modul" : "module"}</p></div></div><div class="module-list">${modules.map(moduleCard).join("")}</div>`;
}

function updateSearchResults() {
  const target = document.querySelector("#search-results");
  if (!target) return;
  const query = state.query.trim().toLocaleLowerCase("ro");
  if (!query) {
    const recent = state.study.recent.map((id) => state.catalog.modules.find((module) => module.id === id)).filter(Boolean);
    target.innerHTML = renderSearchResults(recent.length ? recent : state.catalog.modules.slice(0, 4), recent.length ? "Lecturi recente" : "Primele module");
    return;
  }
  const filtered = state.catalog.modules.filter((module) => {
    const subject = state.catalog.subjects[module.subject];
    return [module.title, module.summary, module.tags.join(" "), subject.name].join(" ").toLocaleLowerCase("ro").includes(query);
  });
  target.innerHTML = renderSearchResults(filtered, `Rezultate pentru „${state.query.trim()}”`);
}

function disciplinesPage() {
  renderShell(`
    <div class="page">
      <section class="page-title">
        <div><p class="eyebrow">Bibliotecă</p><h1>Discipline</h1><p>Fiecare disciplină are propriile module, dar toate folosesc aceeași structură de recapitulare.</p></div>
      </section>
      <section class="subject-grid" style="margin-top:1.5rem" aria-label="Toate disciplinele">
        ${Object.entries(state.catalog.subjects).map(([key, subject]) => subjectCard(key, subject)).join("")}
      </section>
    </div>`, "subjects");
}

function subjectPage(key) {
  const subject = state.catalog.subjects[key];
  if (!subject) return notFoundPage();
  const modules = subjectModules(key);
  const done = modules.filter((module) => isCompleted(module.id)).length;
  renderShell(`
    <div class="page">
      <a class="back-link" href="#/discipline">← Toate disciplinele</a>
      <section class="subject-hero" style="--accent:${subject.color}" data-code="${escapeHtml(subject.short)}">
        <p class="eyebrow">Disciplină</p>
        <h1>${escapeHtml(subject.name)}</h1>
        <p>${escapeHtml(subject.description)}. Adaugă notițele treptat și marchează modulele după o recapitulare activă.</p>
        <div class="subject-summary"><span>${modules.length} ${modules.length === 1 ? "modul" : "module"}</span><span>${done} finalizate</span><span>progres local</span></div>
      </section>
      <div class="toolbar"><div><h2 class="section-heading">Module</h2><p class="section-kicker">În ordinea recomandată pentru studiu.</p></div></div>
      <section class="module-list">${modules.map(moduleCard).join("")}</section>
    </div>`, "subjects");
}

function favoritesPage() {
  const favorites = state.study.favorites.map((id) => state.catalog.modules.find((module) => module.id === id)).filter(Boolean);
  renderShell(`
    <div class="page">
      <section class="page-title"><div><p class="eyebrow">Colecția mea</p><h1>Favorite</h1><p>Modulele pe care vrei să le găsești imediat. Lista este salvată numai în acest browser.</p></div></section>
      <section style="margin-top:1.5rem">${favorites.length ? `<div class="module-list">${favorites.map(moduleCard).join("")}</div>` : `<div class="empty-state"><p>Nu ai adăugat încă module la favorite.</p><a class="primary-button" href="#/discipline">Explorează disciplinele</a></div>`}</section>
    </div>`, "favorites");
}

async function modulePage(id, token) {
  const module = state.catalog.modules.find((item) => item.id === id);
  if (!module) return notFoundPage();
  const subject = state.catalog.subjects[module.subject];
  const modules = subjectModules(module.subject);
  const index = modules.findIndex((item) => item.id === module.id);
  const previous = modules[index - 1];
  const next = modules[index + 1];
  const favorite = state.study.favorites.includes(module.id);
  const completed = isCompleted(module.id);

  state.study.recent = [module.id, ...state.study.recent.filter((item) => item !== module.id)].slice(0, 8);
  saveStudyState();

  renderShell(`<div class="page"><div class="loading-shell" style="min-height:55vh"><p>Se încarcă modulul…</p></div></div>`, "subjects");
  try {
    const response = await fetch(`./${module.path}`);
    if (!response.ok) throw new Error(`HTTP ${response.status}`);
    const markdown = await response.text();
    if (token !== state.routeToken) return;
    renderShell(`
      <div class="page article-view">
        <div class="article-topline">
          <a class="back-link" style="margin:0" href="#/disciplina/${module.subject}">← ${escapeHtml(subject.name)}</a>
          <div class="article-actions">
            <button class="round-action" type="button" data-action="favorite" data-module="${escapeHtml(module.id)}" aria-pressed="${favorite}">${icons.star}<span class="label">${favorite ? "Salvat" : "Favorite"}</span></button>
          </div>
        </div>
        <div class="article-layout">
          <div class="article-wrap">
            <article class="article-card">
              <header class="article-header">
                <p class="eyebrow" style="color:${subject.color}">${escapeHtml(subject.name)} · ${escapeHtml(module.duration)}</p>
                <h1>${escapeHtml(module.title)}</h1>
                <p>${escapeHtml(module.summary)}</p>
                <div class="tag-row">${module.tags.map((tag) => `<span class="tag">#${escapeHtml(tag)}</span>`).join("")}</div>
              </header>
              <div class="markdown">${renderMarkdown(markdown)}</div>
            </article>
            <nav class="module-pagination" aria-label="Module alăturate">
              ${previous ? `<a class="page-link" href="${moduleHref(previous)}"><small>← Anterior</small><strong>${escapeHtml(previous.title)}</strong></a>` : `<span></span>`}
              ${next ? `<a class="page-link next" href="${moduleHref(next)}"><small>Următor →</small><strong>${escapeHtml(next.title)}</strong></a>` : ""}
            </nav>
          </div>
          <aside class="article-aside">
            <section class="aside-card">
              <h2>Starea modulului</h2>
              <p>Marchează-l după ce poți explica ideile principale fără să privești notițele.</p>
              <button class="primary-button ${completed ? "completed" : ""}" type="button" data-action="complete" data-module="${escapeHtml(module.id)}">${completed ? "✓ Finalizat" : "Marchează finalizat"}</button>
            </section>
            ${module.interactive ? `<section class="aside-card"><h2>Schemă interactivă</h2><p>Explorează vizual procesul, apoi revino la întrebările de verificare.</p><a class="primary-button" href="./${safeUrl(module.interactive)}">Deschide schema →</a></section>` : ""}
            <section class="aside-card"><h2>Notă locală</h2><p>Progresul și favoritele sunt păstrate numai pe dispozitivul curent; conținutul site-ului rămâne read-only.</p></section>
          </aside>
        </div>
      </div>`, "subjects");
    updateReadingProgress();
  } catch (error) {
    if (token !== state.routeToken) return;
    renderShell(`<div class="page"><section class="error-card"><h1>Modulul nu s-a încărcat</h1><p>Verifică conexiunea și încearcă din nou.</p><a class="primary-button" href="${moduleHref(module)}">Reîncarcă</a></section></div>`, "subjects");
  }
}

function notFoundPage() {
  renderShell(`<div class="page"><section class="error-card"><p class="eyebrow">404</p><h1>Pagina nu este în atlas</h1><p>Legătura poate fi veche sau modulul a fost mutat.</p><a class="primary-button" href="#/">Înapoi acasă</a></section></div>`);
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
  if (value === "favorite") return favoritesPage();
  if (value.startsWith("disciplina/")) return subjectPage(value.slice("disciplina/".length));
  if (value.startsWith("modul/")) return modulePage(value.slice("modul/".length), token);
  return notFoundPage();
}

function toggleInList(list, id) {
  return list.includes(id) ? list.filter((item) => item !== id) : [...list, id];
}

function updateReadingProgress() {
  const bar = document.querySelector("#reading-progress");
  const article = document.querySelector(".article-view");
  if (!bar || !article) return;
  const max = document.documentElement.scrollHeight - window.innerHeight;
  bar.style.width = max > 0 ? `${Math.min(100, Math.max(0, window.scrollY / max * 100))}%` : "100%";
}

app.addEventListener("click", (event) => {
  const action = event.target.closest("[data-action]");
  if (!action) return;
  const type = action.dataset.action;
  if (type === "focus-search") {
    if (currentRoute()) location.hash = "#/";
    setTimeout(() => {
      document.querySelector("#search-panel")?.scrollIntoView({ behavior: "smooth", block: "center" });
      document.querySelector("#global-search")?.focus({ preventScroll: true });
    }, 60);
  }
  if (type === "complete") {
    state.study.completed = toggleInList(state.study.completed, action.dataset.module);
    saveStudyState();
    route();
  }
  if (type === "favorite") {
    state.study.favorites = toggleInList(state.study.favorites, action.dataset.module);
    saveStudyState();
    route();
  }
});

app.addEventListener("input", (event) => {
  if (event.target.id !== "global-search") return;
  state.query = event.target.value;
  updateSearchResults();
});

window.addEventListener("hashchange", route);
window.addEventListener("scroll", updateReadingProgress, { passive: true });

async function init() {
  try {
    const response = await fetch("./content/catalog.json");
    if (!response.ok) throw new Error(`HTTP ${response.status}`);
    state.catalog = await response.json();
    route();
    if ("serviceWorker" in navigator) navigator.serviceWorker.register("./sw.js").catch(() => {});
  } catch {
    app.innerHTML = `<main class="page"><section class="error-card"><h1>Atlasul nu se poate deschide</h1><p>Catalogul lipsește sau conexiunea a fost întreruptă.</p><button class="primary-button" onclick="location.reload()">Încearcă din nou</button></section></main>`;
  }
}

init();
