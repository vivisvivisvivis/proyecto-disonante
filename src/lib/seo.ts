const SITE = "https://proyectodisonante.org";

export function esAlternates(path: string) {
  const enPath = path === "/" ? "/en" : `/en${path}`;
  return {
    canonical: `${SITE}${path}`,
    languages: {
      es: `${SITE}${path}`,
      en: `${SITE}${enPath}`,
      "x-default": `${SITE}${path}`,
    },
  };
}

export function enAlternates(esPath: string) {
  const enPath = esPath === "/" ? "/en" : `/en${esPath}`;
  return {
    canonical: `${SITE}${enPath}`,
    languages: {
      es: `${SITE}${esPath}`,
      en: `${SITE}${enPath}`,
      "x-default": `${SITE}${esPath}`,
    },
  };
}
