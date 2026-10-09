import type { MetadataRoute } from "next";
import { articles } from "@/lib/articles";

const SITE = "https://proyectodisonante.org";

const staticPages = [
  "",
  "/que-ofrecemos",
  "/quienes-somos",
  "/actividades",
  "/blog",
  "/contacto",
  "/privacy",
  "/terms",
];

export default function sitemap(): MetadataRoute.Sitemap {
  const statics = staticPages.map((path) => ({
    url: `${SITE}${path || "/"}`,
    lastModified: new Date(),
    alternates: {
      languages: {
        en: `${SITE}/en${path}`,
        "x-default": `${SITE}${path || "/"}`,
      },
    },
  }));

  const blogPosts = articles.map((a) => ({
    url: `${SITE}/blog/${a.slug}`,
    lastModified: a.isoDate ? new Date(a.isoDate) : new Date(),
    alternates: {
      languages: {
        en: `${SITE}/en/blog/${a.slug}`,
        "x-default": `${SITE}/blog/${a.slug}`,
      },
    },
  }));

  return [...statics, ...blogPosts];
}
