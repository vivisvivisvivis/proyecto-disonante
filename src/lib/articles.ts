// Two sections share this list:
// - "actividades": the chronological record of what the project did (/actividades/[slug])
// - "blog": reflection pieces (/blog/[slug])
export type Section = "actividades" | "blog";

export interface Article {
  slug: string;
  section: Section;
  isoDate: string; // ISO 8601, empty string if unknown
  es: {
    title: string;
    author: string;
    date: string;
    excerpt: string;
    tag: string;
  };
  en: {
    title: string;
    author: string;
    date: string;
    excerpt: string;
    tag: string;
  };
}

const allArticles: Article[] = [
  {
    slug: "cepal-derechos-sexuales-reproductivos",
    section: "actividades",
    isoDate: "2026-09-29",
    es: {
      title:
        "Proyecto Disonante en la Conferencia Regional de CEPAL: derechos sexuales y reproductivos y polarización",
      author: "Carolina Fernández Blanco",
      date: "29 de septiembre de 2026",
      excerpt:
        "En agosto Proyecto Disonante participó en dos actividades vinculadas a los derechos sexuales y reproductivos y la polarización.",
      tag: "CEPAL",
    },
    en: {
      title:
        "Proyecto Disonante at the ECLAC Regional Conference: sexual and reproductive rights and polarization",
      author: "Carolina Fernández Blanco",
      date: "September 29, 2026",
      excerpt:
        "In August Proyecto Disonante participated in two activities related to sexual and reproductive rights and polarization.",
      tag: "ECLAC",
    },
  },
  {
    slug: "taller-minerva-university",
    section: "actividades",
    isoDate: "2025-11-12",
    es: {
      title:
        "Proyecto Disonante realizó un taller sobre “conversaciones difíciles” con Minerva University",
      author: "Carolina Fernández Blanco",
      date: "12 de noviembre de 2025",
      excerpt:
        "Proyecto Disonante llevó adelante un taller con la cohorte M27 de Minerva University, orientado a mejorar la calidad del disenso y las habilidades para mantener conversaciones difíciles en contextos de alta diversidad.",
      tag: "Formación",
    },
    en: {
      title:
        "Proyecto Disonante held a workshop on “difficult conversations” with Minerva University",
      author: "Carolina Fernández Blanco",
      date: "November 12, 2025",
      excerpt:
        "Proyecto Disonante held a workshop with Minerva University's M27 cohort, focused on improving the quality of dissent and the skills for difficult conversations in high-diversity contexts.",
      tag: "Training",
    },
  },
  {
    slug: "newsletter-actividades-2024",
    section: "actividades",
    isoDate: "2025-02-27",
    es: {
      title: "Newsletter con las actividades de 2024",
      author: "Carolina Fernández Blanco",
      date: "27 de febrero de 2025",
      excerpt:
        "Durante su primer año Proyecto Disonante participó de interesantes propuestas y junto con sus miembros impulsó distintas iniciativas.",
      tag: "Newsletter",
    },
    en: {
      title: "Newsletter with 2024 activities",
      author: "Carolina Fernández Blanco",
      date: "February 27, 2025",
      excerpt:
        "During its first year Proyecto Disonante participated in interesting proposals and together with its members promoted various initiatives.",
      tag: "Newsletter",
    },
  },
  {
    slug: "evidencia-creacion-derecho-girona",
    section: "actividades",
    isoDate: "2025-06-05",
    es: {
      title: "Evidencia en la creación del derecho: una introducción y un modelo plausible",
      author: "Carolina Fernández Blanco",
      date: "5 de junio de 2025",
      excerpt:
        "Ponencia presentada en la II Michele Taruffo Girona Evidence Week, en el workshop «La prueba en la legislación».",
      tag: "Ponencia",
    },
    en: {
      title: "Evidence in lawmaking: an introduction and a plausible model",
      author: "Carolina Fernández Blanco",
      date: "June 5, 2025",
      excerpt:
        "Paper presented at the 2nd Michele Taruffo Girona Evidence Week, in the workshop “Evidence in legislation”.",
      tag: "Paper",
    },
  },
  {
    slug: "encrucijadas-libertad-expresion",
    section: "actividades",
    isoDate: "2024-12-15",
    es: {
      title: "Encrucijadas de la Libertad de Expresión en redes sociales",
      author: "Alianza Regional por la Libre Expresión e Información",
      date: "15 de diciembre de 2024",
      excerpt:
        "La Alianza Regional por la Libre Expresión e Información invitó a Proyecto Disonante a diseñar y coordinar dos encuentros sobre los dilemas de la libertad de expresión en redes sociales.",
      tag: "Libertad de expresión",
    },
    en: {
      title: "Crossroads of Freedom of Expression on social media",
      author: "Alianza Regional por la Libre Expresión e Información",
      date: "December 15, 2024",
      excerpt:
        "The Alianza Regional por la Libre Expresión e Información invited Proyecto Disonante to design and coordinate two meetings on the dilemmas of freedom of expression on social media.",
      tag: "Freedom of expression",
    },
  },
  {
    slug: "financiamiento-politica",
    section: "blog",
    isoDate: "2024-12-15",
    es: {
      title: "Financiamiento de la política",
      author: "Carolina Fernández Blanco",
      date: "15 de diciembre de 2024",
      excerpt:
        "Polarización ideológica y partidista en la conversación pública. Durante el último trimestre de 2024, Proyecto Disonante participó en distintas actividades.",
      tag: "Política",
    },
    en: {
      title: "Political financing",
      author: "Carolina Fernández Blanco",
      date: "December 15, 2024",
      excerpt:
        "Ideological and partisan polarization in public conversation. During the last quarter of 2024, Proyecto Disonante participated in various activities.",
      tag: "Politics",
    },
  },
  {
    slug: "capacitacion-ndi",
    section: "actividades",
    isoDate: "2024-07-29",
    es: {
      title:
        "Capacitación “Legislación y diálogo” para el National Democratic Institute",
      author: "Carolina Fernández Blanco",
      date: "29 de julio de 2024",
      excerpt:
        "Durante junio, Proyecto Disonante realizó una capacitación sobre “Legislación y diálogo” para la Red de Innovación del National Democratic Institute.",
      tag: "Formación",
    },
    en: {
      title:
        "Training on “Legislation and dialogue” for the National Democratic Institute",
      author: "Carolina Fernández Blanco",
      date: "July 29, 2024",
      excerpt:
        "During June, Proyecto Disonante conducted a training course on “Legislation and dialogue” for the National Democratic Institute's Innovation Network.",
      tag: "Training",
    },
  },
  {
    slug: "apertura-polarizacion",
    section: "blog",
    isoDate: "2024-07-09",
    es: {
      title: "Apertura en tiempos de polarización",
      author: "Hernán Charosky",
      date: "9 de julio de 2024",
      excerpt:
        "¿Es el gobierno abierto políticamente neutral, o puede ser utilizado como arma por cualquier oposición política contra cualquier gobierno en funciones?",
      tag: "Polarización",
    },
    en: {
      title: "Openness in times of polarization",
      author: "Hernán Charosky",
      date: "July 9, 2024",
      excerpt:
        "Is open government politically neutral, or can it be used as a weapon by any political opposition against any government in office?",
      tag: "Polarization",
    },
  },
  {
    slug: "polarizacion-toma-decisiones",
    section: "blog",
    isoDate: "2024-10-10",
    es: {
      title: "Polarización y toma de decisiones racionales",
      author: "Carolina Fernández Blanco",
      date: "10 de octubre de 2024",
      excerpt:
        "La polarización extrema es un fenómeno que se ha convertido en parte de la vida cotidiana y que impacta en la toma de decisiones.",
      tag: "Deliberación",
    },
    en: {
      title: "Polarization and rational decision-making",
      author: "Carolina Fernández Blanco",
      date: "October 10, 2024",
      excerpt:
        "Extreme polarization is a phenomenon that has become part of everyday life and impacts decision-making.",
      tag: "Deliberation",
    },
  },
  {
    slug: "dialogo-politico-mejores-politicas",
    section: "blog",
    isoDate: "2024-03-01",
    es: {
      title: "Diálogo político y mejores políticas: algunos hitos biográficos",
      author: "Hernán Charosky",
      date: "1 de marzo de 2024",
      excerpt:
        "A lo largo de su carrera, Hernán Charosky participó en procesos de diálogo que muestran cómo la metodología puede transformar conflictos en acuerdos.",
      tag: "Diálogo",
    },
    en: {
      title:
        "Political dialogue and better policies: some biographical milestones",
      author: "Hernán Charosky",
      date: "March 1, 2024",
      excerpt:
        "Throughout his career, Hernán Charosky participated in dialogue processes that show how methodology can transform conflicts into agreements.",
      tag: "Dialogue",
    },
  },
  {
    slug: "antagonismo-desacuerdo-conflicto",
    section: "blog",
    isoDate: "2023-03-19",
    es: {
      title: "Antagonismo, desacuerdo y conflicto institucionalizado",
      author: "Hernán Charosky",
      date: "19 de marzo de 2023",
      excerpt:
        "En el primer trimestre de 2023 fuimos testigos en nuestra región del rechazo del orden político por parte de sectores de la sociedad que se perciben excluidos.",
      tag: "Deliberación",
    },
    en: {
      title: "Antagonism, disagreement, and institutionalized conflict",
      author: "Hernán Charosky",
      date: "March 19, 2023",
      excerpt:
        "In the first quarter of 2023 we witnessed in our region the rejection of the political order by sectors of society who perceive themselves as excluded.",
      tag: "Deliberation",
    },
  },
  {
    slug: "legislacion-simbolica",
    section: "blog",
    isoDate: "2023-03-09",
    es: {
      title:
        "La legislación eminentemente simbólica: un problema para la legislación razonable",
      author: "Carolina Fernández Blanco",
      date: "9 de marzo de 2023",
      excerpt:
        "La legislación simbólica recibe gran atención en ámbitos políticos, académicos y periodísticos. ¿Qué la hace un problema para la legislación razonable?",
      tag: "Legislación",
    },
    en: {
      title: "Eminently symbolic legislation: a problem for reasonable lawmaking",
      author: "Carolina Fernández Blanco",
      date: "March 9, 2023",
      excerpt:
        "Symbolic legislation receives a great deal of attention in political, academic and journalistic circles. What makes it a problem for reasonable lawmaking?",
      tag: "Legislation",
    },
  },
];

// Newest first.
export const articles: Article[] = [...allArticles].sort((a, b) => b.isoDate.localeCompare(a.isoDate));

export const activities = articles.filter((a) => a.section === "actividades");
export const blogPosts = articles.filter((a) => a.section === "blog");

export const sectionLabels: Record<Section, { es: string; en: string }> = {
  actividades: { es: "Actividades realizadas", en: "Past activities" },
  blog: { es: "Blog", en: "Blog" },
};

export function sectionPath(section: Section, lang: "es" | "en") {
  const base = section === "actividades" ? "/actividades" : "/blog";
  return lang === "en" ? `/en${base}` : base;
}

export function articlePath(article: Article, lang: "es" | "en") {
  return `${sectionPath(article.section, lang)}/${article.slug}`;
}
