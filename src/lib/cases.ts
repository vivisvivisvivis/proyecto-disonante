// Recent work, written only from facts stated in the published articles.
// Each case links to its full article (Actividades realizadas or Blog). Used on /uruguay.

export interface Case {
  slug: string; // article slug
  client: string;
  es: { when: string; format: string; summary: string; highlight?: string };
  en: { when: string; format: string; summary: string; highlight?: string };
}

export const cases: Case[] = [
  {
    slug: "cepal-derechos-sexuales-reproductivos",
    client: "Mysu · Salud sin miedo",
    es: {
      when: "Montevideo, agosto de 2026",
      format: "Taller y panel",
      summary:
        "Taller de trabajo con Mysu y la red latinoamericana Salud sin miedo, y panel en el evento paralelo «Derechos que provocan» de la Conferencia Regional sobre Población y Desarrollo.",
      highlight: "Polarización y derechos sexuales y reproductivos",
    },
    en: {
      when: "Montevideo, August 2026",
      format: "Workshop and panel",
      summary:
        "Working session with Mysu and the Latin American network Salud sin miedo, and a panel at the side event “Derechos que provocan” of the ECLAC Regional Conference on Population and Development.",
      highlight: "Polarization and sexual and reproductive rights",
    },
  },
  {
    slug: "taller-minerva-university",
    client: "Minerva University",
    es: {
      when: "Noviembre de 2025",
      format: "Taller",
      summary:
        "Taller sobre conversaciones difíciles con la cohorte M27, basado en el Modelo Disonante para entornos polarizados.",
      highlight: "Más de 150 estudiantes",
    },
    en: {
      when: "November 2025",
      format: "Workshop",
      summary:
        "Workshop on difficult conversations with the M27 cohort, based on the Disonante Model for polarized environments.",
      highlight: "More than 150 students",
    },
  },
  {
    slug: "financiamiento-politica",
    client: "Inter-American Dialogue · IDEA Internacional",
    es: {
      when: "Último trimestre de 2024",
      format: "Documento y taller de diálogo",
      summary:
        "Documento sobre dinero y política para el Programa sobre Estado de derecho del Inter-American Dialogue, discutido en un taller de diálogo con el sector privado, la sociedad civil y funcionarios electorales de la región.",
      highlight: "Polarización y financiamiento de la política",
    },
    en: {
      when: "Last quarter of 2024",
      format: "Paper and dialogue workshop",
      summary:
        "A paper on money and politics for the Inter-American Dialogue's Rule of Law Program, discussed in a dialogue workshop with the private sector, civil society and electoral officials from across the region.",
      highlight: "Polarization and political finance",
    },
  },
  {
    slug: "encrucijadas-libertad-expresion",
    client: "Alianza Regional por la Libre Expresión e Información",
    es: {
      when: "2024",
      format: "Diseño y coordinación de encuentros",
      summary:
        "Dos encuentros sobre libertad de expresión en redes sociales: un panel con especialistas de CELE y Observacom y una sesión de diálogo entre las organizaciones miembro.",
      highlight: "Libertad de expresión en entornos digitales",
    },
    en: {
      when: "2024",
      format: "Meeting design and facilitation",
      summary:
        "Two meetings on freedom of expression on social media: a panel with experts from CELE and Observacom, and a dialogue session among member organizations.",
      highlight: "Freedom of expression online",
    },
  },
  {
    slug: "capacitacion-ndi",
    client: "National Democratic Institute",
    es: {
      when: "Junio de 2024",
      format: "Formación virtual",
      summary:
        "Curso «Legislación y diálogo» para la Red de Innovación del NDI, con legisladores, asesores, funcionarios e investigadores de toda América Latina.",
      highlight: "Legisladores de América Latina",
    },
    en: {
      when: "June 2024",
      format: "Online training",
      summary:
        "“Legislation and Dialogue” course for NDI's Innovation Network, with legislators, advisors, officials and researchers from across Latin America.",
      highlight: "Legislators across Latin America",
    },
  },
];

// Organizations shown in "Con quién trabajamos" (home and /actividades).
export const partners = [
  "National Democratic Institute",
  "Minerva University",
  "Alianza Regional por la Libre Expresión e Información",
  "Ríos Strategic Lawyering for Social Justice",
];
