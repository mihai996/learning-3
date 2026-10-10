const app = document.querySelector("#app");
const state = { catalog: null, routeToken: 0 };

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
  if (/^(https?:|mailto:|#|\.\.?\/)/i.test(url) || !/^[a-z][a-z0-9+.-]*:/i.test(url)) return escapeHtml(url);
  return "#";
}

function slugify(value) {
  return String(value)
    .normalize("NFD")
    .replace(/[\u0300-\u036f]/g, "")
    .toLowerCase()
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/^-|-$/g, "") || "sectiune";
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
  const headingCounts = new Map();
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
      const base = slugify(heading[2]);
      const count = (headingCounts.get(base) || 0) + 1;
      headingCounts.set(base, count);
      const id = count === 1 ? base : `${base}-${count}`;
      html.push(`<h${level} id="${id}">${inlineMarkdown(heading[2])}</h${level}>`);
      continue;
    }
    if (/^(-{3,}|\*{3,})$/.test(line.trim())) {
      flushParagraph();
      closeList();
      html.push("<hr>");
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
      html.push(`<li>${inlineMarkdown((unordered || ordered)[1].replace(/^\[[ xX]\]\s+/, ""))}</li>`);
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

function sectionHref(module, heading) {
  return `${moduleHref(module)}?sectiune=${encodeURIComponent(heading.id)}`;
}

function subjectModules(key) {
  return state.catalog.modules.filter((module) => module.subject === key);
}

function outlineTree({ currentModuleId = null, currentSubject = null, allOpen = false } = {}) {
  const currentModule = state.catalog.modules.find((module) => module.id === currentModuleId);
  const activeSubject = currentSubject || currentModule?.subject;
  return `
    <ol class="outline-subjects">
      ${Object.entries(state.catalog.subjects).map(([key, subject], subjectIndex) => {
        const modules = subjectModules(key);
        const open = allOpen || key === activeSubject;
        return `<li>
          <details ${open ? "open" : ""}>
            <summary><span>${String(subjectIndex + 1).padStart(2, "0")}</span>${escapeHtml(subject.name)}</summary>
            <ol class="outline-modules">
              ${modules.map((module, moduleIndex) => `
                <li class="${module.id === currentModuleId ? "current" : ""}">
                  <a href="${moduleHref(module)}"><span>${subjectIndex + 1}.${moduleIndex + 1}</span>${escapeHtml(module.title)}</a>
                  ${module.id === currentModuleId || allOpen ? `<ol class="outline-headings">${module.headings.map((heading) => `<li class="level-${heading.level}"><a href="${sectionHref(module, heading)}">${escapeHtml(heading.title)}</a></li>`).join("")}</ol>` : ""}
                </li>`).join("")}
            </ol>
          </details>
        </li>`;
      }).join("")}
    </ol>`;
}

function renderShell(content) {
  app.innerHTML = `
    <div class="site-shell">
      <header class="site-header">
        <a class="brand" href="#/" aria-label="Atlas de studiu — cuprins">
          <span class="brand-mark" aria-hidden="true">A</span>
          <strong>Atlas de studiu</strong>
        </a>
        <a class="header-index" href="#/">Cuprins</a>
      </header>
      <main id="main-content">${content}</main>
    </div>`;
}

function documentLayout(main, options = {}) {
  const tree = outlineTree(options);
  return `
    <div class="book-layout">
      <aside class="book-sidebar" aria-label="Cuprinsul documentului">
        <p class="sidebar-label">Cuprins</p>
        ${tree}
      </aside>
      <div class="book-main">
        <details class="mobile-outline">
          <summary>Cuprinsul documentului</summary>
          ${tree}
        </details>
        ${main}
      </div>
    </div>`;
}

function moduleRow(module, subjectIndex, moduleIndex) {
  return `
    <li>
      <a href="${moduleHref(module)}">
        <span class="toc-number">${subjectIndex + 1}.${moduleIndex + 1}</span>
        <span><strong>${escapeHtml(module.title)}</strong><small>${escapeHtml(module.summary)}</small></span>
        <span class="toc-page">${escapeHtml(module.duration)}</span>
      </a>
    </li>`;
}

function homePage() {
  renderShell(`
    <div class="index-page">
      <header class="document-title">
        <p>Document de studiu</p>
        <h1>Atlas de studiu</h1>
        <dl><div><dt>Discipline</dt><dd>${Object.keys(state.catalog.subjects).length}</dd></div><div><dt>Module</dt><dd>${state.catalog.modules.length}</dd></div></dl>
      </header>

      <section class="index-search" aria-labelledby="search-title">
        <h2 id="search-title">Căutare</h2>
        <label>${searchIcon}<span class="sr-only">Caută în cuprins</span><input id="global-search" type="search" autocomplete="off" placeholder="Caută în cuprins…"></label>
        <div id="search-results" hidden></div>
      </section>

      <section class="general-index" aria-labelledby="index-title">
        <h2 id="index-title">Cuprins general</h2>
        ${outlineTree({ allOpen: true })}
      </section>
    </div>`);
}

function updateSearchResults(query) {
  const target = document.querySelector("#search-results");
  if (!target) return;
  const normalized = query.trim().toLocaleLowerCase("ro");
  if (!normalized) {
    target.hidden = true;
    target.innerHTML = "";
    return;
  }
  const matches = state.catalog.modules.filter((module) => {
    const subject = state.catalog.subjects[module.subject];
    const headings = module.headings.map((heading) => heading.title).join(" ");
    return [subject.name, module.title, module.summary, module.tags.join(" "), headings]
      .join(" ")
      .toLocaleLowerCase("ro")
      .includes(normalized);
  });
  target.hidden = false;
  target.innerHTML = matches.length
    ? `<ol class="search-matches">${matches.map((module) => `<li><a href="${moduleHref(module)}"><strong>${escapeHtml(module.title)}</strong><span>${escapeHtml(state.catalog.subjects[module.subject].name)}</span></a></li>`).join("")}</ol>`
    : `<p class="empty-state">Niciun rezultat.</p>`;
}

function subjectPage(key) {
  const subject = state.catalog.subjects[key];
  if (!subject) return notFoundPage();
  const entries = Object.entries(state.catalog.subjects);
  const subjectIndex = entries.findIndex(([subjectKey]) => subjectKey === key);
  const modules = subjectModules(key);
  const main = `
    <article class="paper-sheet subject-document">
      <nav class="breadcrumbs" aria-label="Poziția în document"><a href="#/">Cuprins</a><span>/</span><span>${escapeHtml(subject.name)}</span></nav>
      <header class="chapter-title" style="--accent:${subject.color}">
        <p>Capitolul ${subjectIndex + 1}</p>
        <h1>${escapeHtml(subject.name)}</h1>
        <p>${escapeHtml(subject.description)}</p>
      </header>
      <section class="chapter-list">
        <h2>Module</h2>
        <ol>${modules.map((module, moduleIndex) => moduleRow(module, subjectIndex, moduleIndex)).join("")}</ol>
      </section>
    </article>`;
  renderShell(documentLayout(main, { currentSubject: key }));
}

async function modulePage(id, token, section = null) {
  const module = state.catalog.modules.find((item) => item.id === id);
  if (!module) return notFoundPage();
  const subject = state.catalog.subjects[module.subject];
  const subjects = Object.keys(state.catalog.subjects);
  const subjectIndex = subjects.indexOf(module.subject);
  const moduleIndex = subjectModules(module.subject).findIndex((item) => item.id === id);
  renderShell(`<p class="loading-message">Se încarcă documentul…</p>`);
  try {
    const response = await fetch(`./${module.path}`);
    if (!response.ok) throw new Error(`HTTP ${response.status}`);
    const markdown = await response.text();
    if (token !== state.routeToken) return;
    const chapterOutline = module.headings.length ? `
      <nav class="chapter-outline" aria-label="Cuprinsul modulului">
        <p>În acest modul</p>
        <ol>${module.headings.map((heading, index) => `<li class="level-${heading.level}"><a href="${sectionHref(module, heading)}"><span>${String(index + 1).padStart(2, "0")}</span>${escapeHtml(heading.title)}</a></li>`).join("")}</ol>
      </nav>` : "";
    const main = `
      <article class="paper-sheet article-document">
        <nav class="breadcrumbs" aria-label="Poziția în document"><a href="#/">Cuprins</a><span>/</span><a href="#/disciplina/${module.subject}">${escapeHtml(subject.name)}</a><span>/</span><span>${escapeHtml(module.title)}</span></nav>
        <header class="article-header">
          <p>Capitolul ${subjectIndex + 1}.${moduleIndex + 1} · ${escapeHtml(module.duration)}</p>
          <h1>${escapeHtml(module.title)}</h1>
          <p>${escapeHtml(module.summary)}</p>
        </header>
        ${chapterOutline}
        ${module.interactive ? `<figure class="visual-section"><figcaption>Schemă vizuală</figcaption><iframe src="./${safeUrl(module.interactive)}?embed=1" title="Schemă vizuală: ${escapeHtml(module.title)}" loading="lazy"></iframe></figure>` : ""}
        <div class="markdown">${renderMarkdown(markdown)}</div>
      </article>`;
    renderShell(documentLayout(main, { currentModuleId: module.id }));
    if (section) requestAnimationFrame(() => document.getElementById(section)?.scrollIntoView({ block: "start" }));
  } catch {
    if (token !== state.routeToken) return;
    renderShell(`<section class="error-page"><h1>Documentul nu s-a încărcat</h1><a href="${moduleHref(module)}">Reîncarcă</a></section>`);
  }
}

function notFoundPage() {
  renderShell(`<section class="error-page"><p>404</p><h1>Pagina nu există</h1><a href="#/">Cuprins</a></section>`);
}

function currentRoute() {
  return decodeURI(location.hash.replace(/^#\/?/, "")) || "";
}

function route() {
  if (!state.catalog) return;
  const token = ++state.routeToken;
  const raw = currentRoute();
  const [path, query = ""] = raw.split("?");
  const params = new URLSearchParams(query);
  const section = params.get("sectiune");
  if (!section) window.scrollTo({ top: 0, behavior: "instant" });
  if (!path || path === "discipline") return homePage();
  if (path.startsWith("disciplina/")) return subjectPage(path.slice("disciplina/".length));
  if (path.startsWith("modul/")) return modulePage(path.slice("modul/".length), token, section);
  return notFoundPage();
}

app.addEventListener("input", (event) => {
  if (event.target.id === "global-search") updateSearchResults(event.target.value);
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
    app.innerHTML = `<main class="error-page"><h1>Atlasul nu se poate deschide</h1><p>Catalogul documentului lipsește.</p></main>`;
  }
}

init();
