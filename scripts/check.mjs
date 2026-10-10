import { access, readdir, readFile } from "node:fs/promises";
import path from "node:path";
import { fileURLToPath } from "node:url";
import { spawnSync } from "node:child_process";
import { requiredFields, subjects } from "./content-config.mjs";
import { parseFrontmatter } from "./content-utils.mjs";

const root = path.resolve(path.dirname(fileURLToPath(import.meta.url)), "..");
const contentRoot = path.join(root, "content", "subjects");
const errors = [];

async function walk(directory) {
  const entries = await readdir(directory, { withFileTypes: true });
  const files = [];
  for (const entry of entries) {
    const full = path.join(directory, entry.name);
    if (entry.isDirectory()) files.push(...await walk(full));
    else files.push(full);
  }
  return files;
}

const files = (await walk(contentRoot))
  .filter((file) => file.endsWith(".md") && !path.basename(file).startsWith("_"));

for (const file of files) {
  const relative = path.relative(root, file);
  try {
    const { data } = parseFrontmatter(await readFile(file, "utf8"), relative);
    for (const field of requiredFields) {
      if (data[field] === undefined || data[field] === "") {
        errors.push(`${relative}: lipsește câmpul ${field}`);
      }
    }
    if (!subjects[data.subject]) errors.push(`${relative}: disciplină necunoscută: ${data.subject}`);
    if (!Number.isFinite(data.order)) errors.push(`${relative}: order trebuie să fie număr`);
    if (!['draft', 'review', 'ready'].includes(data.status)) {
      errors.push(`${relative}: status trebuie să fie draft, review sau ready`);
    }
    if (data.interactive) {
      try { await access(path.join(root, data.interactive)); }
      catch { errors.push(`${relative}: interactivul nu există: ${data.interactive}`); }
    }
  } catch (error) {
    errors.push(error.message);
  }
}

if (errors.length) {
  console.error(errors.map((error) => `• ${error}`).join("\n"));
  process.exit(1);
}

const build = spawnSync(process.execPath, [path.join(root, "scripts", "build.mjs")], {
  cwd: root,
  stdio: "inherit"
});
if (build.status !== 0) process.exit(build.status || 1);

for (const required of ["index.html", "assets/app.js", "assets/styles.css", "content/catalog.json", "sw.js"]) {
  try { await access(path.join(root, "dist", required)); }
  catch { errors.push(`dist/${required}: lipsește după construire`); }
}

if (errors.length) {
  console.error(errors.map((error) => `• ${error}`).join("\n"));
  process.exit(1);
}

console.log(`Verificare reușită: ${files.length} module valide.`);
