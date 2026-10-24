import { articles, articlePath } from "@/lib/articles";

const SITE = "https://proyectodisonante.org";

export async function GET() {
  const items = articles
    .filter((a) => a.isoDate)
    .sort((a, b) => (a.isoDate > b.isoDate ? -1 : 1))
    .map((a) => {
      const pubDate = new Date(a.isoDate).toUTCString();
      return `
    <item>
      <title><![CDATA[${a.es.title}]]></title>
      <link>${SITE}${articlePath(a, "es")}</link>
      <guid isPermaLink="true">${SITE}${articlePath(a, "es")}</guid>
      <pubDate>${pubDate}</pubDate>
      ${a.es.author ? `<author>${a.es.author}</author>` : ""}
      ${a.es.excerpt ? `<description><![CDATA[${a.es.excerpt}]]></description>` : ""}
      <category>${a.es.tag}</category>
    </item>`;
    })
    .join("");

  const xml = `<?xml version="1.0" encoding="UTF-8"?>
<rss version="2.0" xmlns:atom="http://www.w3.org/2005/Atom">
  <channel>
    <title>Proyecto Disonante</title>
    <link>${SITE}</link>
    <description>Publicaciones, actividades y novedades de Proyecto Disonante.</description>
    <language>es</language>
    <atom:link href="${SITE}/feed.xml" rel="self" type="application/rss+xml"/>
    ${items}
  </channel>
</rss>`;

  return new Response(xml, {
    headers: {
      "Content-Type": "application/xml; charset=utf-8",
      "Cache-Control": "public, max-age=3600, s-maxage=3600",
    },
  });
}
