"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
// scripts/generate-sitemap.ts
var fs = require("node:fs");
var path = require("node:path");
// Base URL and output folder (use env in CI)
var baseUrl = process.env.BASE_URL || "https://sharang.tech";
var outDir = process.env.OUT_DIR || "out";
// === Example dynamic data ===
// Replace this with your real Stories data source
var Stories = [
    { id: 1 },
    { id: 2 },
    { id: 3 },
    { id: 4 },
];
// Folders to scan for pages
var possibleRoutes = ["src/app", "src/pages", "app", "pages"];
var routeDir = possibleRoutes.find(function (dir) { return fs.existsSync(dir); });
if (!routeDir) {
    console.error("❌ Could not find app/pages folder in src or root.");
    process.exit(1);
}
console.log("\uD83D\uDD0D Scanning routes from: ".concat(routeDir, "/"));
var IGNORED = [
    "api",
    "_middleware",
    "_app",
    "_document",
    "layout.tsx",
    "template.tsx",
    "error.tsx",
];
// Recursively walk pages/app folder
function walkRoutes(dir, parentPath) {
    if (parentPath === void 0) { parentPath = ""; }
    var routes = [];
    for (var _i = 0, _a = fs.readdirSync(dir); _i < _a.length; _i++) {
        var entry = _a[_i];
        var fullPath = path.join(dir, entry);
        var stat = fs.statSync(fullPath);
        if (IGNORED.includes(entry))
            continue;
        if (stat.isDirectory()) {
            routes.push.apply(routes, walkRoutes(fullPath, path.join(parentPath, entry)));
        }
        else if (entry === "page.tsx" ||
            entry === "page.jsx" ||
            entry.endsWith(".html") ||
            (!(routeDir === null || routeDir === void 0 ? void 0 : routeDir.includes("app")) && entry.endsWith(".tsx")) ||
            (!(routeDir === null || routeDir === void 0 ? void 0 : routeDir.includes("app")) && entry.endsWith(".js"))) {
            var route = parentPath.replace(/\\/g, "/").replace(/\/page$/, "");
            routes.push(route);
        }
    }
    return routes;
}
// Normalize route paths
function normalizeRoute(route) {
    return route === "/" || route === "" ? "" : route.replace(/\/$/, "");
}
// Expand dynamic routes (replace [id] with real values)
function expandDynamicRoute(route) {
    if (route.includes("[id]")) {
        return Stories.map(function (s) { return route.replace("[id]", String(s.id)); });
    }
    return [route];
}
// Priority for sitemap
function getPriority(route) {
    if (!route || route === "")
        return "1.0";
    return route.split("/").length <= 1 ? "0.8" : "0.5";
}
// Change frequency for sitemap
function getChangeFreq(route) {
    if (!route || route === "")
        return "weekly";
    if (route.includes("blog"))
        return "monthly";
    return "monthly";
}
// Last modified date from out folder
function getLastModFromOutFile(route) {
    var htmlFile = route === "" ? "index.html" : "".concat(route, "/index.html");
    var outPath = path.join(outDir, htmlFile);
    if (fs.existsSync(outPath)) {
        return fs.statSync(outPath).mtime.toISOString();
    }
    return new Date().toISOString();
}
// Walk routes and normalize
var rawRoutes = walkRoutes(routeDir);
var normalizedRoutes = Array.from(new Set(rawRoutes.map(normalizeRoute)));
// Expand dynamic routes
var finalRoutes = [];
normalizedRoutes.forEach(function (route) {
    finalRoutes.push.apply(finalRoutes, expandDynamicRoute(route));
});
// Generate sitemap entries
var urls = finalRoutes.map(function (route) { return ({
    loc: "".concat(baseUrl, "/").concat(route).replace(/\/+$/, ""),
    lastmod: getLastModFromOutFile(route),
    priority: getPriority(route),
    changefreq: getChangeFreq(route),
}); });
// Write sitemap.xml
var sitemap = "<?xml version=\"1.0\" encoding=\"UTF-8\"?>\n<urlset xmlns=\"http://www.sitemaps.org/schemas/sitemap/0.9\">\n".concat(urls
    .map(function (u) { return "<url>\n  <loc>".concat(u.loc, "</loc>\n  <lastmod>").concat(u.lastmod, "</lastmod>\n  <changefreq>").concat(u.changefreq, "</changefreq>\n  <priority>").concat(u.priority, "</priority>\n</url>"); })
    .join("\n"), "\n</urlset>");
fs.mkdirSync(outDir, { recursive: true });
fs.writeFileSync(path.join(outDir, "sitemap.xml"), sitemap);
console.log("✅ sitemap.xml generated");
// Write robots.txt
var robots = "User-agent: *\nAllow: /\n\nSitemap: ".concat(baseUrl, "/sitemap.xml\n");
fs.writeFileSync(path.join(outDir, "robots.txt"), robots);
console.log("✅ robots.txt generated");
