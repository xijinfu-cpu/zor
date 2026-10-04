// scripts/generate-sitemap.ts
import * as fs from "node:fs";
import * as path from "node:path";

// Base URL and output folder (use env in CI)
const baseUrl = process.env.BASE_URL || "https://sharang.tech";
const outDir = process.env.OUT_DIR || "out";

// === Example dynamic data ===
// Replace this with your real Stories data source
const Stories = [
  { id: 1 },
  { id: 2 },
  { id: 3 },
  { id: 4 },
];

// Folders to scan for pages
const possibleRoutes = ["src/app", "src/pages", "app", "pages"];
const routeDir = possibleRoutes.find((dir) => fs.existsSync(dir));
if (!routeDir) {
  console.error("❌ Could not find app/pages folder in src or root.");
  process.exit(1);
}

console.log(`🔍 Scanning routes from: ${routeDir}/`);

const IGNORED = [
  "api",
  "_middleware",
  "_app",
  "_document",
  "layout.tsx",
  "template.tsx",
  "error.tsx",
];

// Recursively walk pages/app folder
function walkRoutes(dir: string, parentPath = ""): string[] {
  const routes: string[] = [];

  for (const entry of fs.readdirSync(dir)) {
    const fullPath = path.join(dir, entry);
    const stat = fs.statSync(fullPath);

    if (IGNORED.includes(entry)) continue;

    if (stat.isDirectory()) {
      routes.push(...walkRoutes(fullPath, path.join(parentPath, entry)));
    } else if (
      entry === "page.tsx" ||
      entry === "page.jsx" ||
      entry.endsWith(".html") ||
      (!routeDir?.includes("app") && entry.endsWith(".tsx")) ||
      (!routeDir?.includes("app") && entry.endsWith(".js"))
    ) {
      const route = parentPath.replace(/\\/g, "/").replace(/\/page$/, "");
      routes.push(route);
    }
  }

  return routes;
}

// Normalize route paths
function normalizeRoute(route: string): string {
  return route === "/" || route === "" ? "" : route.replace(/\/$/, "");
}

// Expand dynamic routes (replace [id] with real values)
function expandDynamicRoute(route: string): string[] {
  if (route.includes("[id]")) {
    return Stories.map((s) => route.replace("[id]", String(s.id)));
  }
  return [route];
}

// Priority for sitemap
function getPriority(route: string): string {
  if (!route || route === "") return "1.0";
  return route.split("/").length <= 1 ? "0.8" : "0.5";
}

// Change frequency for sitemap
function getChangeFreq(route: string): string {
  if (!route || route === "") return "weekly";
  if (route.includes("blog")) return "monthly";
  return "monthly";
}

// Last modified date from out folder
function getLastModFromOutFile(route: string): string {
  const htmlFile = route === "" ? "index.html" : `${route}/index.html`;
  const outPath = path.join(outDir, htmlFile);
  if (fs.existsSync(outPath)) {
    return fs.statSync(outPath).mtime.toISOString();
  }
  return new Date().toISOString();
}

// Walk routes and normalize
const rawRoutes = walkRoutes(routeDir);
const normalizedRoutes = Array.from(new Set(rawRoutes.map(normalizeRoute)));

// Expand dynamic routes
const finalRoutes: string[] = [];
normalizedRoutes.forEach((route) => {
  finalRoutes.push(...expandDynamicRoute(route));
});

// Generate sitemap entries
const urls = finalRoutes.map((route) => ({
  loc: `${baseUrl}/${route}`.replace(/\/+$/, ""),
  lastmod: getLastModFromOutFile(route),
  priority: getPriority(route),
  changefreq: getChangeFreq(route),
}));

// Write sitemap.xml
const sitemap = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
${urls
    .map(
      (u) => `<url>
  <loc>${u.loc}</loc>
  <lastmod>${u.lastmod}</lastmod>
  <changefreq>${u.changefreq}</changefreq>
  <priority>${u.priority}</priority>
</url>`
    )
    .join("\n")}
</urlset>`;

fs.mkdirSync(outDir, { recursive: true });
fs.writeFileSync(path.join(outDir, "sitemap.xml"), sitemap);
console.log("✅ sitemap.xml generated");

// Write robots.txt
const robots = `User-agent: *
Allow: /

Sitemap: ${baseUrl}/sitemap.xml
`;

fs.writeFileSync(path.join(outDir, "robots.txt"), robots);
console.log("✅ robots.txt generated");
