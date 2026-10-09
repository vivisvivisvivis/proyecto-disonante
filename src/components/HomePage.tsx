import Link from "next/link";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import Reveal from "@/components/Reveal";
import HeroText from "@/components/HeroText";
import CaseCards from "@/components/CaseCards";
import NewsletterForm from "@/components/NewsletterForm";
import { partners } from "@/lib/cases";
import { articles } from "@/lib/articles";
import { localHref } from "@/lib/nav";

const copy = {
  es: {
    ctaPrimary: "Hablemos de tu proyecto",
    ctaSecondary: "Ver actividades",
    partnersLabel: "Han trabajado con nosotros",
    casesLabel: "Trabajo reciente",
    casesTitle: "Talleres, formaciones y encuentros",
    casesAll: "Todas las actividades",
    problemLabel: "El problema",
    problemTitle: "La polarización es un desafío para la gobernanza democrática",
    problemP1:
      "La polarización es una tendencia que impacta globalmente en la conversación pública. Cada vez es más difícil la discusión de asuntos públicos, desde una película o una canción hasta el contenido de un proyecto de ley o de una política pública. Se ponen en juego inmediatamente identidades políticas, culturales y morales y el tema más nimio es un campo de batalla.",
    problemP2:
      "Este fenómeno es un desafío para la gobernanza democrática. Los gobiernos de todos los niveles, los legisladores y hasta los jueces enfrentan el desafío de que sus propuestas y decisiones se procesen en clave de batalla cultural, política o moral. El periodismo y las Organizaciones de la Sociedad Civil atraviesan el mismo problema con sus agendas de intervención en la escena pública. De este modo, cualquier iniciativa está o bien etiquetada desde su origen, o bien asimilada con posterioridad a un bando u otro de los antagonismos que atraviesan las distintas sociedades. Esto, a su vez, genera un espiral de intolerancia que dificulta el debate, la convivencia, y en algunos casos, fomenta el autoritarismo.",
    quote:
      "Esta polarización es, en algún sentido, tentadora: toca alguna fibra íntima de nuestras convicciones pero vuelve estéril cualquier debate.",
    proposalLabel: "Nuestra propuesta",
    proposalTitle: "Una propuesta para mejorar la conversación pública",
    proposalP1:
      "Proyecto Disonante es una propuesta para poner en práctica dispositivos que mejoren la conversación pública a través del respeto, la lógica argumentativa, la incorporación de evidencia, la diversidad y el pluralismo.",
    proposalP2:
      "Las propuestas de política pública, los proyectos legislativos y las agendas de reformas pueden incrementar su legitimidad y su eficacia en la medida en que incorporen la pluralidad, la deliberación y la evidencia en los procesos de discusión.",
    proposalLink: "Qué hacemos",
    audiencesLabel: "¿A quiénes se dirige nuestro trabajo?",
    audiences: [
      "Gobiernos y poderes legislativos",
      "Educadores y centros educativos",
      "ONGs y organizaciones de la sociedad civil (OSC)",
      "Empresas",
      "Asociaciones y organizaciones profesionales",
    ],
    manifesto:
      "Una conversación pública sujeta a reglas de respeto y argumentación puede ser más productiva para una mejor gobernanza.",
    servicesLabel: "Servicios",
    servicesTitle: "Qué podemos ofrecer",
    servicesIntro: "Para gobiernos, legislaturas, educadores, ONGs, empresas y asociaciones profesionales.",
    services: [
      { id: "diagnostico", title: "Diagnóstico y soluciones", desc: "Evaluación y propuestas de solución de situaciones en donde el diálogo y la toma de decisiones colectivas se encuentra bloqueada." },
      { id: "formacion", title: "Formación", desc: "Formación en distintos niveles relativas a prácticas deliberativas y diálogo racional." },
      { id: "implementacion", title: "Implementación", desc: "Ayuda en la implementación de decisiones que generan conflictividad, son resistidas por un sector o son difíciles de transmitir para ser comprendidas." },
      { id: "argumentacion", title: "Argumentación basada en evidencia", desc: "Colaboración en la elaboración de argumentos basados en la evidencia y construidos siguiendo las buenas prácticas del diálogo racional." },
    ],
    convictionLabel: "Nuestra convicción",
    convictionTitle:
      "Tanto la legitimidad como la eficacia de las propuestas se fortalecerán si se las discute con dispositivos adecuados",
    convictionP: "Dispositivos que las preserven del secuestro por identidades que las exceden.",
    convictionCta: "Escribir al equipo",
    newsLabel: "Publicaciones",
    newsTitle: "Análisis y novedades",
    newsAll: "Ver todas las publicaciones",
    teamLabel: "Nosotros",
    teamTitle: "Quiénes somos",
    teamP: "Proyecto Disonante está liderado por Carolina Fernández Blanco y Hernán Charosky.",
    teamLink: "Conocer al equipo",
    contactLabel: "Diálogo",
    contactTitle: "Contacto",
    contactP: "Nos interesa conocer tus inquietudes y propuestas.",
    contactLink: "Escribir al equipo",
    newsletterTitle: "Suscríbete",
    newsletterP: "Recibe nuestras novedades y publicaciones por correo.",
  },
  en: {
    ctaPrimary: "Let's talk about your project",
    ctaSecondary: "See our activities",
    partnersLabel: "We have worked with",
    casesLabel: "Recent work",
    casesTitle: "Workshops, training and meetings",
    casesAll: "All activities",
    problemLabel: "The problem",
    problemTitle: "Polarization is a challenge for democratic governance",
    problemP1:
      "Polarization is a trend that globally impacts public conversation. It is increasingly difficult to discuss public issues, from a film or a song to the content of a bill or a public policy. Political, cultural and moral identities are immediately at stake and the most trivial topic becomes a battlefield.",
    problemP2:
      "This phenomenon is a challenge for democratic governance. Governments at all levels, legislators, and even judges face the challenge that their proposals and decisions are processed as cultural, political or moral warfare. Journalism and Civil Society Organizations face the same problem with their agendas for intervention in the public sphere. In this way, any initiative is either labeled from its outset, or subsequently assimilated to one side or the other of the antagonisms that run through different societies. This, in turn, generates a spiral of intolerance that hinders debate, coexistence and, in some cases, fosters authoritarianism.",
    quote:
      "This polarization is, in some sense, tempting: it touches something intimate in our convictions, but renders any debate sterile.",
    proposalLabel: "Our proposal",
    proposalTitle: "A proposal to improve public conversation",
    proposalP1:
      "Proyecto Disonante is a proposal to put into practice mechanisms that improve public conversation through respect, argumentative logic, the incorporation of evidence, diversity and pluralism.",
    proposalP2:
      "Public policy proposals, legislative projects, and reform agendas can increase their legitimacy and effectiveness to the extent that they incorporate plurality, deliberation and evidence in the discussion process.",
    proposalLink: "What we do",
    audiencesLabel: "Who is our work for?",
    audiences: [
      "Governments and legislative bodies",
      "Educators and educational institutions",
      "NGOs and civil society organizations (CSOs)",
      "Businesses",
      "Professional associations and organizations",
    ],
    manifesto:
      "A public conversation subject to rules of respect and argumentation can be more productive for better governance.",
    servicesLabel: "Services",
    servicesTitle: "What we can offer",
    servicesIntro: "For governments, legislatures, educators, NGOs, businesses and professional associations.",
    services: [
      { id: "diagnostico", title: "Diagnosis and solutions", desc: "Evaluation and proposed solutions for situations where dialogue and collective decision-making is blocked." },
      { id: "formacion", title: "Training", desc: "Training at various levels related to deliberative practices and rational dialogue." },
      { id: "implementacion", title: "Implementation", desc: "Support in the implementation of decisions that generate conflict, are resisted by a sector, or are difficult to communicate for understanding." },
      { id: "argumentacion", title: "Evidence-based argumentation", desc: "Collaboration in the elaboration of arguments based on evidence and built following good practices of rational dialogue." },
    ],
    convictionLabel: "Our conviction",
    convictionTitle:
      "Both the legitimacy and effectiveness of proposals will be strengthened if they are discussed with adequate mechanisms",
    convictionP: "Mechanisms that preserve them from being hijacked by identities that exceed them.",
    convictionCta: "Write to the team",
    newsLabel: "Publications",
    newsTitle: "Analysis and news",
    newsAll: "See all publications",
    teamLabel: "About us",
    teamTitle: "Who we are",
    teamP: "Proyecto Disonante is led by Carolina Fernández Blanco and Hernán Charosky.",
    teamLink: "Meet the team",
    contactLabel: "Dialogue",
    contactTitle: "Contact",
    contactP: "We are interested in hearing your concerns and proposals.",
    contactLink: "Write to the team",
    newsletterTitle: "Subscribe",
    newsletterP: "Get our news and publications by email.",
  },
};

const ui = { fontFamily: "var(--font-jakarta)" };

export default function HomePage({ lang }: { lang: "es" | "en" }) {
  const t = copy[lang];
  const href = (p: string) => localHref(lang, p);
  const blogBase = lang === "en" ? "/en/blog" : "/blog";
  // Latest analysis and news. Activities already appear as cases; newsletters are not news.
  const latest = articles.filter((a) => a.category === "analisis").slice(0, 3);

  return (
    <>
      <Navbar lang={lang} />
      <main id="main">
        {/* ── Hero ─────────────────────────────────────── */}
        <section className="bg-cream pt-12 pb-16 md:pt-24 md:pb-20 px-6">
          <div className="max-w-5xl mx-auto flex flex-col items-center gap-10">
            <HeroText lang={lang} />
            <div className="flex flex-col sm:flex-row gap-4 w-full sm:w-auto">
              <Link
                href={href("/contacto")}
                className="text-center bg-terracotta text-white px-9 py-3.5 rounded font-ui font-semibold hover:bg-terracotta-dark transition-colors duration-200 text-sm tracking-wide"
              >
                {t.ctaPrimary}
              </Link>
              <Link
                href={href("/actividades")}
                className="text-center border-2 border-navy text-navy px-9 py-3.5 rounded font-ui font-semibold hover:bg-navy hover:text-white transition-colors duration-200 text-sm tracking-wide"
              >
                {t.ctaSecondary}
              </Link>
            </div>
          </div>
        </section>

        {/* ── Partners ─────────────────────────────────── */}
        <section aria-labelledby="partners-label" className="bg-sand border-y border-line py-8 px-6">
          <div className="max-w-6xl mx-auto flex flex-col items-center gap-4">
            <p id="partners-label" className="label text-muted">{t.partnersLabel}</p>
            <ul className="flex flex-wrap justify-center gap-x-10 gap-y-3">
              {partners.map((p) => (
                <li key={p} className="text-navy font-semibold text-sm text-center" style={ui}>
                  {p}
                </li>
              ))}
            </ul>
          </div>
        </section>

        {/* ── Recent work ──────────────────────────────── */}
        <section className="py-20 md:py-24 px-6 bg-cream">
          <div className="max-w-5xl mx-auto flex flex-col gap-10">
            <Reveal className="flex items-end justify-between gap-6 flex-wrap">
              <div>
                <span className="label text-rust">{t.casesLabel}</span>
                <h2 className="mt-3">{t.casesTitle}</h2>
              </div>
              <Link href={href("/actividades")} className="text-rust text-sm font-semibold hover:underline" style={ui}>
                {t.casesAll} <span aria-hidden>→</span>
              </Link>
            </Reveal>
            <Reveal>
              <CaseCards lang={lang} />
            </Reveal>
          </div>
        </section>

        {/* ── Problem and proposal ─────────────────────── */}
        <section className="py-20 md:py-28 px-6 bg-sand border-t border-line">
          <div className="max-w-5xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-14 md:gap-20 items-start">
            <Reveal>
              <div className="flex flex-col gap-6">
                <span className="label text-muted">{t.problemLabel}</span>
                <h2 className="heading-sentence">{t.problemTitle}</h2>
                <p>{t.problemP1}</p>
                <p>{t.problemP2}</p>
                <blockquote className="mt-4 pl-5 py-2 border-l-2 border-terracotta">
                  <p className="italic text-lg text-ink">“{t.quote}”</p>
                </blockquote>
              </div>
            </Reveal>

            <Reveal>
              <div className="flex flex-col gap-8">
                <div className="bg-terracotta rounded-lg p-8 md:p-10 flex flex-col gap-5">
                  <span className="label text-white">{t.proposalLabel}</span>
                  <h2 className="heading-sentence text-white">{t.proposalTitle}</h2>
                  <p className="text-white">{t.proposalP1}</p>
                  <p className="text-white">{t.proposalP2}</p>
                  <Link href={href("/que-ofrecemos")} className="text-white text-sm font-semibold underline underline-offset-4 hover:no-underline self-start" style={ui}>
                    {t.proposalLink} <span aria-hidden>→</span>
                  </Link>
                </div>

                <div className="flex flex-col gap-4 px-2">
                  <span className="label text-muted">{t.audiencesLabel}</span>
                  <ul className="flex flex-col gap-2.5">
                    {t.audiences.map((a) => (
                      <li key={a} className="flex items-center gap-3">
                        <span aria-hidden className="w-1.5 h-1.5 rounded-full bg-terracotta flex-shrink-0" />
                        <span className="text-[0.9375rem] text-ink" style={ui}>{a}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </Reveal>
          </div>
        </section>

        {/* ── Manifesto strip ──────────────────────────── */}
        <section className="bg-terracotta py-14 md:py-16 px-6">
          <Reveal className="max-w-4xl mx-auto text-center">
            <p className="text-2xl md:text-4xl font-light text-white leading-snug text-balance">{t.manifesto}</p>
          </Reveal>
        </section>

        {/* ── Services ─────────────────────────────────── */}
        <section className="py-20 md:py-28 px-6 bg-cream">
          <div className="max-w-5xl mx-auto">
            <Reveal className="mb-12">
              <span className="label text-rust">{t.servicesLabel}</span>
              <h2 className="mt-3 max-w-xl">{t.servicesTitle}</h2>
              <p className="mt-4 max-w-xl">{t.servicesIntro}</p>
            </Reveal>
            <ul className="flex flex-col gap-px bg-line border border-line">
              {t.services.map((s) => (
                <li key={s.id}>
                  <Link
                    href={`${href("/que-ofrecemos")}#${s.id}`}
                    className="bg-cream group flex flex-col md:flex-row gap-3 md:gap-12 md:items-center p-7 md:p-9 hover:bg-sand transition-colors duration-200"
                  >
                    <div className="flex flex-col gap-2 flex-1">
                      <h3 className="group-hover:text-rust transition-colors duration-200">{s.title}</h3>
                      <p className="text-[0.9375rem] leading-relaxed">{s.desc}</p>
                    </div>
                    <span aria-hidden className="hidden md:block text-muted group-hover:text-rust group-hover:translate-x-1.5 transition-[color,transform] duration-200 text-xl">
                      →
                    </span>
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </section>

        {/* ── Conviction ───────────────────────────────── */}
        <section className="bg-navy py-20 md:py-24 px-6">
          <Reveal className="max-w-3xl mx-auto text-center flex flex-col gap-7">
            <span className="label text-blue-200">{t.convictionLabel}</span>
            <h2 className="heading-sentence text-white">{t.convictionTitle}</h2>
            <p className="text-blue-100 text-lg leading-relaxed">{t.convictionP}</p>
            <Link
              href={href("/contacto")}
              className="self-center bg-cream text-navy px-9 py-3.5 rounded font-ui font-semibold hover:bg-sand transition-colors text-sm tracking-wide"
            >
              {t.convictionCta}
            </Link>
          </Reveal>
        </section>

        {/* ── Publications ─────────────────────────────── */}
        <section className="py-20 md:py-28 px-6 bg-cream">
          <div className="max-w-5xl mx-auto">
            <Reveal className="flex items-end justify-between gap-6 flex-wrap mb-12">
              <div>
                <span className="label text-rust">{t.newsLabel}</span>
                <h2 className="mt-3">{t.newsTitle}</h2>
              </div>
              <Link href={href("/blog")} className="text-rust text-sm font-semibold hover:underline" style={ui}>
                {t.newsAll} <span aria-hidden>→</span>
              </Link>
            </Reveal>
            <ul className="grid grid-cols-1 md:grid-cols-3 gap-5">
              {latest.map((a) => (
                <li key={a.slug}>
                  <Link
                    href={`${blogBase}/${a.slug}`}
                    className="group h-full bg-cream border border-line rounded-lg p-7 flex flex-col gap-3 hover:border-navy transition-colors duration-200"
                  >
                    <div className="flex items-center gap-2 flex-wrap text-xs" style={ui}>
                      <span className="label text-rust">{a[lang].tag}</span>
                      <span aria-hidden className="text-muted">·</span>
                      <time dateTime={a.isoDate} className="text-muted">{a[lang].date}</time>
                    </div>
                    <h3 className="text-lg leading-snug group-hover:text-rust transition-colors duration-200">{a[lang].title}</h3>
                    <p className="text-sm leading-relaxed">{a[lang].excerpt}</p>
                    <p className="mt-auto pt-2 text-xs font-semibold text-navy" style={ui}>{a[lang].author}</p>
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </section>

        {/* ── Team and contact ─────────────────────────── */}
        <section className="py-20 px-6 bg-sand border-t border-line">
          <div className="max-w-5xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-6">
            <Link
              href={href("/quienes-somos")}
              className="group bg-cream border border-line rounded-lg p-10 flex flex-col gap-4 h-full hover:border-navy transition-colors duration-200"
            >
              <span className="label text-muted">{t.teamLabel}</span>
              <h3 className="text-xl">{t.teamTitle}</h3>
              <p>{t.teamP}</p>
              <span className="text-rust text-sm font-semibold mt-auto group-hover:underline" style={ui}>
                {t.teamLink} <span aria-hidden>→</span>
              </span>
            </Link>
            <Link
              href={href("/contacto")}
              className="group bg-navy rounded-lg p-10 flex flex-col gap-4 h-full hover:bg-navy-dark transition-colors duration-200"
            >
              <span className="label text-blue-200">{t.contactLabel}</span>
              <h3 className="text-xl text-white">{t.contactTitle}</h3>
              <p className="text-blue-100">{t.contactP}</p>
              <span className="text-white text-sm font-semibold mt-auto group-hover:underline" style={ui}>
                {t.contactLink} <span aria-hidden>→</span>
              </span>
            </Link>
          </div>
        </section>

        {/* ── Newsletter ───────────────────────────────── */}
        <section className="py-20 px-6 bg-cream border-t border-line">
          <Reveal className="max-w-xl mx-auto text-center flex flex-col gap-5">
            <span className="label text-rust">Newsletter</span>
            <h2>{t.newsletterTitle}</h2>
            <p>{t.newsletterP}</p>
            <NewsletterForm lang={lang} source={`home-${lang}`} />
          </Reveal>
        </section>
      </main>
      <Footer lang={lang} />
    </>
  );
}
