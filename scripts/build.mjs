import { cp, mkdir, readdir, readFile, rm, writeFile } from "node:fs/promises";
import path from "node:path";
import { fileURLToPath } from "node:url";
import { subjects } from "./content-config.mjs";
import { moduleIdFromPath, parseFrontmatter } from "./content-utils.mjs";

const root = path.resolve(path.dirname(fileURLToPath(import.meta.url)), "..");
const dist = path.join(root, "dist");
const contentRoot = path.join(root, "content", "subjects");

async function walk(directory) {
  const entries = await readdir(directory, { withFileTypes: true });
  const result = [];
  for (const entry of entries) {
    const fullPath = path.join(directory, entry.name);
    if (entry.isDirectory()) result.push(...await walk(fullPath));
    else result.push(fullPath);
  }
  return result;
}

await rm(dist, { recursive: true, force: true });
await mkdir(path.join(dist, "assets"), { recursive: true });
await mkdir(path.join(dist, "content"), { recursive: true });

await cp(path.join(root, "public"), dist, { recursive: true });
await cp(path.join(root, "assets"), path.join(dist, "assets"), { recursive: true });
await cp(path.join(root, "interactives"), path.join(dist, "interactives"), { recursive: true });
await cp(path.join(root, "src", "styles.css"), path.join(dist, "assets", "styles.css"));
await cp(path.join(root, "src", "app.js"), path.join(dist, "assets", "app.js"));

const markdownFiles = (await walk(contentRoot))
  .filter((file) => file.endsWith(".md") && !path.basename(file).startsWith("_"));

const modules = [];
for (const file of markdownFiles) {
  const relative = path.relative(contentRoot, file);
  const id = moduleIdFromPath(relative);
  const source = await readFile(file, "utf8");
  const { data, body } = parseFrontmatter(source, relative);
  const headingCounts = new Map();
  const headings = body
    .split("\n")
    .map((line) => line.match(/^(#{2,4})\s+(.+)$/))
    .filter(Boolean)
    .map((match) => {
      const base = match[2]
        .normalize("NFD")
        .replace(/[\u0300-\u036f]/g, "")
        .toLowerCase()
        .replace(/[^a-z0-9]+/g, "-")
        .replace(/^-|-$/g, "") || "sectiune";
      const count = (headingCounts.get(base) || 0) + 1;
      headingCounts.set(base, count);
      return { level: match[1].length, title: match[2], id: count === 1 ? base : `${base}-${count}` };
    });
  const destination = path.join(dist, "content", relative);
  await mkdir(path.dirname(destination), { recursive: true });
  await cp(file, destination);

  modules.push({
    id,
    path: `content/${relative.split(path.sep).join("/")}`,
    title: data.title,
    subject: data.subject,
    order: data.order,
    duration: data.duration,
    summary: data.summary,
    status: data.status,
    tags: String(data.tags || "")
      .split(",")
      .map((tag) => tag.trim())
      .filter(Boolean),
    headings,
    interactive: data.interactive || null
  });
}

modules.sort((a, b) => {
  const subjectOrder = Object.keys(subjects);
  return subjectOrder.indexOf(a.subject) - subjectOrder.indexOf(b.subject)
    || a.order - b.order
    || a.title.localeCompare(b.title, "ro");
});

const catalog = {
  site: {
    title: "Atlas de studiu",
    description: "Bibliotecă personală pentru pregătirea examenelor",
    contentVersion: new Date().toISOString()
  },
  subjects,
  modules
};

await writeFile(
  path.join(dist, "content", "catalog.json"),
  `${JSON.stringify(catalog, null, 2)}\n`
);

await cp(path.join(dist, "index.html"), path.join(dist, "404.html"));

const filesForCache = (await walk(dist))
  .map((file) => `./${path.relative(dist, file).split(path.sep).join("/")}`)
  .filter((file) => !file.endsWith("/sw.js"));

const serviceWorker = `const CACHE = "atlas-${Date.now()}";
const FILES = ${JSON.stringify(filesForCache, null, 2)};
self.addEventListener("install", (event) => {
  event.waitUntil(caches.open(CACHE).then((cache) => cache.addAll(FILES)));
  self.skipWaiting();
});
self.addEventListener("activate", (event) => {
  event.waitUntil(caches.keys().then((keys) => Promise.all(
    keys.filter((key) => key.startsWith("atlas-") && key !== CACHE).map((key) => caches.delete(key))
  )));
  self.clients.claim();
});
self.addEventListener("fetch", (event) => {
  if (event.request.method !== "GET") return;
  event.respondWith(caches.match(event.request).then((cached) => cached || fetch(event.request).then((response) => {
    const copy = response.clone();
    caches.open(CACHE).then((cache) => cache.put(event.request, copy));
    return response;
  }).catch(() => caches.match("./index.html"))));
});
`;
await writeFile(path.join(dist, "sw.js"), serviceWorker);

console.log(`Atlas construit: ${modules.length} module în dist/`);
