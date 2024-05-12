import fs from "fs";
import {globby} from "globby";
import {format} from "prettier";

const getDate = new Date().toISOString();

const DOMAIN = "https://studiesofchange.hfk-bremen.de";

(async () => {
    const pages = await globby([
        // include
        "pages/*.tsx",
        // exclude
        "posts/*.md",
        "!pages/_*.tsx"
    ]);
    const pagesSitemap = `
	    ${pages
            .map(page => {
                const path = page
                    .replace("pages/", "")
                    .replace(".tsx", "")
                    .replace(/\/index/g, "")
                    .replace(".md", "");
                const route = path === "index" ? "" : path;
                return `
  <url>
    <loc>${DOMAIN}/${route}</loc>
    <lastmod>${getDate}</lastmod>
    <changefreq>daily</changefreq>
    <priority>1</priority>
  </url>
                  `;
            })
            .join("")}
	  `;

  const generatedSitemap = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
${pagesSitemap}
</urlset>
	  `;


    fs.writeFileSync("public/sitemap.xml", generatedSitemap, "utf8");
})();

