// One name per section, used by the navbar, the footer and page titles.
export const navLinks = [
  { href: "/que-ofrecemos", es: "Qué hacemos", en: "What we do" },
  { href: "/quienes-somos", es: "Quiénes somos", en: "About us" },
  { href: "/actividades", es: "Actividades", en: "Activities" },
  { href: "/blog", es: "Publicaciones", en: "Publications" },
  { href: "/contacto", es: "Contacto", en: "Contact" },
] as const;

export function localHref(lang: "es" | "en", href: string) {
  if (lang === "es") return href;
  return href === "/" ? "/en" : `/en${href}`;
}
