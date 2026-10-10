// One name per section, used by the navbar, the footer and page titles.
export const navLinks = [
  { href: "/que-ofrecemos", es: "Nuestro trabajo", en: "Our work" },
  { href: "/quienes-somos", es: "Quiénes somos", en: "About us" },
  { href: "/actividades", es: "Actividades realizadas", en: "Past activities" },
  { href: "/blog", es: "Blog", en: "Blog" },
  { href: "/contacto", es: "Contáctanos", en: "Contact us" },
] as const;

export function localHref(lang: "es" | "en", href: string) {
  if (lang === "es") return href;
  return href === "/" ? "/en" : `/en${href}`;
}
