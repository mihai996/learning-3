const navigation = document.querySelector("#course-navigation");
const article = document.querySelector("#article");
const menuButton = document.querySelector("#menu-button");
const closeButton = document.querySelector("#close-button");
const backdrop = document.querySelector("#backdrop");

let library = null;

function escapeHtml(value) {
  return value
    .replaceAll("&", "&amp;")
    .replaceAll("<", "&lt;")
    .replaceAll(">", "&gt;")
    .replaceAll('"', "&quot;")
    .replaceAll("'", "&#039;");
}

function inlineMarkdown(value) {
  return escapeHtml(value)
    .replace(/!\[([^\]]*)\]\(([^)]+)\)/g, '<img src="$2" alt="$1" loading="lazy">')
    .replace(/\[([^\]]+)\]\(([^)]+)\)/g, '<a href="$2">$1</a>')
    .replace(/\*\*([^*]+)\*\*/g, "<strong>$1</strong>")
    .replace(/\*([^*]+)\*/g, "<em>$1</em>")
    .replace(/`([^`]+)`/g, "<code>$1</code>");
}

function renderMarkdown(markdown) {
  const lines = markdown.replace(/\r/g, "").split("\n");
  const output = [];
  let paragraph = [];
  let listType = null;
  let tableRows = [];

  const flushParagraph = () => {
    if (paragraph.length) {
      output.push(`<p>${inlineMarkdown(paragraph.join(" "))}</p>`);
      paragraph = [];
    }
  };

  const flushList = () => {
    if (listType) {
      output.push(`</${listType}>`);
      listType = null;
    }
  };

  const flushTable = () => {
    if (!tableRows.length) return;
    const rows = tableRows.filter((row) => !row.every((cell) => /^:?-{3,}:?$/.test(cell)));
    if (rows.length) {
      const header = rows.shift();
      output.push("<table><thead><tr>");
      header.forEach((cell) => output.push(`<th>${inlineMarkdown(cell)}</th>`));
      output.push("</tr></thead><tbody>");
      rows.forEach((row) => {
        output.push("<tr>");
        row.forEach((cell) => output.push(`<td>${inlineMarkdown(cell)}</td>`));
        output.push("</tr>");
      });
      output.push("</tbody></table>");
    }
    tableRows = [];
  };

  for (const rawLine of [...lines, ""]) {
    const line = rawLine.trim();
    const tableMatch = line.match(/^\|(.+)\|$/);

    if (tableMatch) {
      flushParagraph();
      flushList();
      tableRows.push(tableMatch[1].split("|").map((cell) => cell.trim()));
      continue;
    }

    flushTable();

    if (!line) {
      flushParagraph();
      flushList();
      continue;
    }

    const heading = line.match(/^(#{1,3})\s+(.+)$/);
    if (heading) {
      flushParagraph();
      flushList();
      const level = heading[1].length;
      output.push(`<h${level}>${inlineMarkdown(heading[2])}</h${level}>`);
      continue;
    }

    const unordered = line.match(/^[-*]\s+(.+)$/);
    const ordered = line.match(/^\d+\.\s+(.+)$/);
    if (unordered || ordered) {
      flushParagraph();
      const nextType = unordered ? "ul" : "ol";
      if (listType !== nextType) {
        flushList();
        listType = nextType;
        output.push(`<${listType}>`);
      }
      output.push(`<li>${inlineMarkdown((unordered || ordered)[1])}</li>`);
      continue;
    }

    paragraph.push(line);
  }

  return output.join("");
}

function closeMenu() {
  document.body.classList.remove("menu-open");
  menuButton.setAttribute("aria-expanded", "false");
}

function openMenu() {
  document.body.classList.add("menu-open");
  menuButton.setAttribute("aria-expanded", "true");
}

function toggleSection(button) {
  const children = document.querySelector(`#${button.getAttribute("aria-controls")}`);
  const open = button.getAttribute("aria-expanded") === "true";
  button.setAttribute("aria-expanded", String(!open));
  children.hidden = open;
}

function firstTopic(course) {
  return course.modules.flatMap((module) => module.topics)[0];
}

function makeTrigger(label, targetId, className, expanded = false) {
  const button = document.createElement("button");
  button.type = "button";
  button.className = `nav-trigger ${className}`;
  button.setAttribute("aria-expanded", String(expanded));
  button.setAttribute("aria-controls", targetId);
  button.innerHTML = `<span>${escapeHtml(label)}</span><span class="chevron" aria-hidden="true">›</span>`;
  button.addEventListener("click", () => toggleSection(button));
  return button;
}

function renderNavigation() {
  navigation.replaceChildren();
  const courseList = document.querySelector("#course-list");

  library.courses.forEach((course, courseIndex) => {
    const courseId = `course-${courseIndex}`;
    const group = document.createElement("section");
    group.className = "nav-group";
    const trigger = makeTrigger(course.title, courseId, "course-trigger", courseIndex === 0);
    const children = document.createElement("div");
    children.id = courseId;
    children.className = "nav-children";
    children.hidden = courseIndex !== 0;
    group.append(trigger, children);

    course.modules.forEach((module, moduleIndex) => {
      const moduleId = `${courseId}-module-${moduleIndex}`;
      const moduleGroup = document.createElement("div");
      moduleGroup.className = "module-group";
      const moduleTrigger = makeTrigger(module.title, moduleId, "module-trigger", courseIndex === 0 && moduleIndex === 0);
      const topicList = document.createElement("div");
      topicList.id = moduleId;
      topicList.className = "nav-children";
      topicList.hidden = !(courseIndex === 0 && moduleIndex === 0);

      module.topics.forEach((topic) => {
        const link = document.createElement("a");
        link.className = "topic-link";
        link.href = `#${topic.id}`;
        link.textContent = topic.title;
        link.dataset.topicId = topic.id;
        topicList.append(link);
      });

      moduleGroup.append(moduleTrigger, topicList);
      children.append(moduleGroup);
    });

    navigation.append(group);

    const topic = firstTopic(course);
    if (courseList && topic) {
      const card = document.createElement("a");
      card.className = "course-card";
      card.href = `#${topic.id}`;
      card.innerHTML = `<strong>${escapeHtml(course.title)}</strong><span>${course.modules.length} module</span>`;
      courseList.append(card);
    }
  });
}

function findTopic(id) {
  for (const course of library.courses) {
    for (const module of course.modules) {
      const topic = module.topics.find((item) => item.id === id);
      if (topic) return { course, module, topic };
    }
  }
  return null;
}

function openTopicInNavigation(topicId) {
  const link = document.querySelector(`[data-topic-id="${CSS.escape(topicId)}"]`);
  if (!link) return;

  document.querySelectorAll(".topic-link.active").forEach((item) => item.classList.remove("active"));
  link.classList.add("active");

  let current = link.parentElement;
  while (current && current !== navigation) {
    if (current.classList.contains("nav-children")) {
      current.hidden = false;
      const trigger = document.querySelector(`[aria-controls="${current.id}"]`);
      trigger?.setAttribute("aria-expanded", "true");
    }
    current = current.parentElement;
  }
}

async function showTopic(topicId) {
  const match = findTopic(topicId);
  if (!match) return;

  openTopicInNavigation(topicId);
  article.innerHTML = '<p class="status">Se încarcă…</p>';

  try {
    if (match.topic.type === "interactive") {
      article.innerHTML = `
        <p class="eyebrow">${escapeHtml(match.course.title)} · ${escapeHtml(match.module.title)}</p>
        <h1>${escapeHtml(match.topic.title)}</h1>
        <iframe class="interactive-frame" src="${match.topic.path}" title="${escapeHtml(match.topic.title)}"></iframe>
      `;
    } else {
      const response = await fetch(match.topic.path);
      if (!response.ok) throw new Error(`HTTP ${response.status}`);
      const markdown = await response.text();
      article.innerHTML = `<p class="eyebrow">${escapeHtml(match.course.title)} · ${escapeHtml(match.module.title)}</p>${renderMarkdown(markdown)}`;
    }
    document.title = `${match.topic.title} — Biblioteca pentru examene`;
  } catch (error) {
    article.innerHTML = '<h1>Conținut indisponibil</h1><p class="status">Fișierul temei nu a putut fi încărcat. Verifică adresa din structure.json.</p>';
    console.error(error);
  }

  document.querySelector("#content").focus({ preventScroll: true });
  window.scrollTo({ top: 0, behavior: "smooth" });
  closeMenu();
}

function handleRoute() {
  const topicId = decodeURIComponent(location.hash.slice(1));
  if (topicId) showTopic(topicId);
}

async function initialize() {
  try {
    const response = await fetch("content/structure.json");
    if (!response.ok) throw new Error(`HTTP ${response.status}`);
    library = await response.json();
    renderNavigation();
    handleRoute();
  } catch (error) {
    navigation.innerHTML = '<p class="status">Cuprinsul nu a putut fi încărcat.</p>';
    console.error(error);
  }
}

menuButton.addEventListener("click", () => {
  document.body.classList.contains("menu-open") ? closeMenu() : openMenu();
});
closeButton.addEventListener("click", closeMenu);
backdrop.addEventListener("click", closeMenu);
document.addEventListener("keydown", (event) => {
  if (event.key === "Escape") closeMenu();
});
window.addEventListener("hashchange", handleRoute);

initialize();
