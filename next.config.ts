import type { NextConfig } from "next";
import { articles, activities } from "./src/lib/articles";

// Where an article lives now (/actividades/... or /blog/...).
const pathOf = (slug: string) => `/${articles.find((a) => a.slug === slug)?.section ?? "blog"}/${slug}`;

// Old WordPress URLs (proyectodisonante.org and english.proyectodisonante.org),
// taken from the WP sitemaps on 2026-10-09, so shared links and search results keep working.
const oldPosts: Record<string, string> = {
  "noticia-1": "legislacion-simbolica",
  "noticia-2": "dialogo-politico-mejores-politicas",
  "noticia-3": "antagonismo-desacuerdo-conflicto",
  "noticia-4": "apertura-polarizacion",
  "noticia-5": "capacitacion-ndi",
  "polarizacion-y-toma-de-decisiones-racionales": "polarizacion-toma-decisiones",
  "financiamiento-de-la-politica": "financiamiento-politica",
  "encrucijadas-de-la-libertad-de-expresion-en-redes-sociales-2": "encrucijadas-libertad-expresion",
  "newsletter-con-las-actividades-de-2024": "newsletter-actividades-2024",
  "proyecto-disonante-realizo-un-taller-sobre-conversaciones-dificiles-con-minerva-university": "taller-minerva-university",
  "proyecto-disonante-en-la-conferencia-regional-de-cepal-derechos-sexuales-y-reproductivos-y-polarizacion":
    "cepal-derechos-sexuales-reproductivos",
};

const oldPages: Record<string, string> = {
  proyectos: "/actividades",
  noticias: "/blog",
  "politica-privacidad": "/privacy",
  "category/politica": "/blog",
  "category/polarizacion": "/blog",
  "category/sin-categoria/actividades-realizadas": "/actividades",
  "author/admin": "/blog",
};

const englishHost = [{ type: "host" as const, value: "english.proyectodisonante.org" }];

const englishPages: Record<string, string> = {
  "": "/en",
  programs: "/en/actividades",
  news: "/en/blog",
  contact: "/en/contacto",
  "who-we-are": "/en/quienes-somos",
  "politica-privacidad": "/en/privacy",
};

const nextConfig: NextConfig = {
  experimental: {
    // Needed because ES and EN each have their own root layout (for the correct <html lang>).
    globalNotFound: true,
  },
  async redirects() {
    return [
      // english.proyectodisonante.org → proyectodisonante.org/en/...
      ...Object.entries(englishPages).map(([from, to]) => ({
        source: `/${from}`,
        has: englishHost,
        destination: `https://proyectodisonante.org${to}`,
        permanent: true,
      })),
      ...Object.entries(oldPosts).map(([from, slug]) => ({
        source: `/${from}`,
        has: englishHost,
        destination: `https://proyectodisonante.org/en${pathOf(slug)}`,
        permanent: true,
      })),
      // proyectodisonante.org old paths
      ...Object.entries(oldPosts).map(([from, slug]) => ({
        source: `/${from}`,
        destination: pathOf(slug),
        permanent: true,
      })),
      // Activities used to live under /blog (moved Oct 2026).
      ...activities.flatMap((a) => [
        { source: `/blog/${a.slug}`, destination: `/actividades/${a.slug}`, permanent: true },
        { source: `/en/blog/${a.slug}`, destination: `/en/actividades/${a.slug}`, permanent: true },
      ]),
      ...Object.entries(oldPages).map(([from, to]) => ({
        source: `/${from}`,
        destination: to,
        permanent: true,
      })),
    ];
  },
};

export default nextConfig;
