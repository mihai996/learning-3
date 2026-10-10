import path from "node:path";

export function parseFrontmatter(source, file = "document") {
  const normalized = source.replace(/\r\n/g, "\n");
  if (!normalized.startsWith("---\n")) {
    throw new Error(`${file}: lipsește frontmatter-ul de la început`);
  }

  const closing = normalized.indexOf("\n---\n", 4);
  if (closing === -1) {
    throw new Error(`${file}: frontmatter-ul nu este închis cu ---`);
  }

  const header = normalized.slice(4, closing);
  const body = normalized.slice(closing + 5).trimStart();
  const data = {};

  for (const rawLine of header.split("\n")) {
    if (!rawLine.trim() || rawLine.trimStart().startsWith("#")) continue;
    const separator = rawLine.indexOf(":");
    if (separator === -1) {
      throw new Error(`${file}: linie de metadate invalidă: ${rawLine}`);
    }
    const key = rawLine.slice(0, separator).trim();
    const rawValue = rawLine.slice(separator + 1).trim();
    data[key] = key === "order" ? Number(rawValue) : rawValue;
  }

  return { data, body };
}

export function moduleIdFromPath(relativePath) {
  return relativePath.split(path.sep).join("/").replace(/\.md$/i, "");
}
