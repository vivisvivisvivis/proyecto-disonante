import { articles } from "@/lib/articles";

const SITE = "https://proyectodisonante.org";

export async function GET() {
  const items = articles
    .filter((a) => a.isoDate)
    .sort((a, b) => (a.isoDate > b.isoDate ? -1 : 1))
    .map((a) => {
      const pubDate = new Date(a.isoDate).toUTCString();
      return `
    <item>
      <title><![CDATA[${a.en.title}]]></title>
      <link>${SITE}/en/blog/${a.slug}</link>
      <guid isPermaLink="true">${SITE}/en/blog/${a.slug}</guid>
      <pubDate>${pubDate}</pubDate>
      ${a.en.author ? `<author>${a.en.author}</author>` : ""}
      ${a.en.excerpt ? `<description><![CDATA[${a.en.excerpt}]]></description>` : ""}
      <category>${a.en.tag}</category>
    </item>`;
    })
    .join("");

  const xml = `<?xml version="1.0" encoding="UTF-8"?>
<rss version="2.0" xmlns:atom="http://www.w3.org/2005/Atom">
  <channel>
    <title>Proyecto Disonante</title>
    <link>${SITE}/en</link>
    <description>Publications, activities and updates from Proyecto Disonante.</description>
    <language>en</language>
    <atom:link href="${SITE}/en/feed.xml" rel="self" type="application/rss+xml"/>
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
