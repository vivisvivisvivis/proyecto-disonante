import Link from "next/link";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import Reveal from "@/components/Reveal";
import HeroText from "@/components/HeroText";
import { activities, articlePath } from "@/lib/articles";
import { partners } from "@/lib/cases";
import { localHref } from "@/lib/nav";

const copy = {
  es: {
    ctaPrimary: "Nuestro trabajo",
    ctaSecondary: "Actividades realizadas",
    problemLabel: "El problema",
    problemTitle: "La polarización es un desafío para la gobernanza democrática",
    problemP1:
      "La polarización es una tendencia que impacta globalmente en la conversación pública. Cada vez es más difícil la discusión de asuntos públicos, desde una película o una canción hasta el contenido de un proyecto de ley o de una política pública. Se ponen en juego inmediatamente identidades políticas, culturales y morales y el tema más nimio es un campo de batalla.",
    problemP2:
      "Este fenómeno es un desafío para la gobernanza democrática. Los gobiernos de todos los niveles, los legisladores y hasta los jueces enfrentan el desafío de que sus propuestas y decisiones se procesen en clave de batalla cultural, política o moral. El periodismo y las Organizaciones de la Sociedad Civil atraviesan el mismo problema con sus agendas de intervención en la escena pública. De este modo, cualquier iniciativa está o bien etiquetada desde su origen, o bien asimilada con posterioridad a un bando u otro de los antagonismos que atraviesan las distintas sociedades. Esto, a su vez, genera un espiral de intolerancia que dificulta el debate, la convivencia, y en algunos casos, fomenta el autoritarismo.",
    quote:
      "Esta polarización es, en algún sentido, tentadora: toca alguna fibra íntima de nuestras convicciones pero vuelve estéril cualquier debate.",
    proposalLabel: "Nuestra propuesta",
    // PROPOSED wording (point 10), pending Carolina's approval.
    proposalTitle: "Una propuesta para mejorar el debate público, la legislación y las políticas públicas",
    proposalP1:
      "Proyecto Disonante es una propuesta para poner en práctica dispositivos que mejoren la conversación pública a través del respeto, la lógica argumentativa, la incorporación de evidencia, la diversidad y el pluralismo.",
    proposalP2:
      "Las propuestas de política pública, los proyectos legislativos y las agendas de reformas pueden incrementar su legitimidad y su eficacia en la medida en que incorporen la pluralidad, la deliberación y la evidencia en los procesos de discusión.",
    proposalLink: "Nuestro trabajo",
    manifesto:
      "Una conversación pública sujeta a reglas de respeto y argumentación puede ser más productiva para una mejor gobernanza.",
    helpTitle: "¿Cómo podemos ayudarte?",
    // Short summary of the services page (point 11).
    helpP:
      "Trabajamos con gobiernos y poderes legislativos, centros educativos, organizaciones de la sociedad civil, empresas y asociaciones profesionales en cuatro líneas: diagnóstico y soluciones, formación, implementación y argumentación basada en evidencia.",
    newsLabel: "Actividades realizadas",
    newsTitle: "Últimas actividades",
    newsAll: "Actividades realizadas",
    partnersLabel: "Con quién trabajamos",
    teamLabel: "Nosotros",
    teamTitle: "Quiénes somos",
    teamP: "Proyecto Disonante está liderado por Hernán Charosky y Carolina Fernández Blanco.",
    teamLink: "Conocer al equipo",
    contactLabel: "Diálogo",
    contactTitle: "Contáctanos",
    contactP: "Nos interesa conocer tus inquietudes y propuestas.",
    contactLink: "Escríbenos",
  },
  en: {
    ctaPrimary: "Our work",
    ctaSecondary: "Past activities",
    problemLabel: "The problem",
    problemTitle: "Polarization is a challenge for democratic governance",
    problemP1:
      "Polarization is a trend that globally impacts public conversation. It is increasingly difficult to discuss public issues, from a film or a song to the content of a bill or a public policy. Political, cultural and moral identities are immediately at stake and the most trivial topic becomes a battlefield.",
    problemP2:
      "This phenomenon is a challenge for democratic governance. Governments at all levels, legislators, and even judges face the challenge that their proposals and decisions are processed as cultural, political or moral warfare. Journalism and Civil Society Organizations face the same problem with their agendas for intervention in the public sphere. In this way, any initiative is either labeled from its outset, or subsequently assimilated to one side or the other of the antagonisms that run through different societies. This, in turn, generates a spiral of intolerance that hinders debate, coexistence and, in some cases, fosters authoritarianism.",
    quote:
      "This polarization is, in some sense, tempting: it touches something intimate in our convictions, but renders any debate sterile.",
    proposalLabel: "Our proposal",
    proposalTitle: "A proposal to improve public debate, legislation and public policy",
    proposalP1:
      "Proyecto Disonante is a proposal to put into practice mechanisms that improve public conversation through respect, argumentative logic, the incorporation of evidence, diversity and pluralism.",
    proposalP2:
      "Public policy proposals, legislative projects, and reform agendas can increase their legitimacy and effectiveness to the extent that they incorporate plurality, deliberation and evidence in the discussion process.",
    proposalLink: "Our work",
    manifesto:
      "A public conversation subject to rules of respect and argumentation can be more productive for better governance.",
    helpTitle: "How can we help you?",
    helpP:
      "We work with governments and legislative bodies, educational institutions, civil society organizations, businesses and professional associations along four lines: diagnosis and solutions, training, implementation, and evidence-based argumentation.",
    newsLabel: "Past activities",
    newsTitle: "Latest activities",
    newsAll: "Past activities",
    partnersLabel: "Who we work with",
    teamLabel: "About us",
    teamTitle: "Who we are",
    teamP: "Proyecto Disonante is led by Hernán Charosky and Carolina Fernández Blanco.",
    teamLink: "Meet the team",
    contactLabel: "Dialogue",
    contactTitle: "Contact us",
    contactP: "We are interested in hearing your concerns and proposals.",
    contactLink: "Write to us",
  },
};

const ui = { fontFamily: "var(--font-jakarta)" };

export default function HomePage({ lang }: { lang: "es" | "en" }) {
  const t = copy[lang];
  const href = (p: string) => localHref(lang, p);
  const latest = activities.slice(0, 3);

  return (
    <>
      <Navbar lang={lang} />
      <main id="main">
        {/* ── Hero ─────────────────────────────────────── */}
        <section className="bg-cream pt-12 pb-16 md:pt-24 md:pb-20 px-6 overflow-hidden">
          <div className="max-w-5xl mx-auto flex flex-col items-center gap-10">
            <HeroText lang={lang} />
            <div className="flex flex-col sm:flex-row gap-4 w-full sm:w-auto">
              <Link
                href={href("/que-ofrecemos")}
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

        {/* ── Problem and proposal: one question, one answer ── */}
        <section className="py-20 md:py-28 px-6 bg-sand border-y border-line">
          <div className="max-w-6xl mx-auto flex flex-col gap-12">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 items-stretch">
              <Reveal>
                <div className="h-full bg-cream border border-line rounded-lg p-8 md:p-12 flex flex-col gap-5">
                  <h2>{t.problemLabel}</h2>
                  <h3 className="text-xl md:text-2xl">{t.problemTitle}</h3>
                  <p>{t.problemP1}</p>
                  <p>{t.problemP2}</p>
                  <blockquote className="mt-auto pt-4 pl-5 border-l-2 border-terracotta">
                    <p className="italic text-lg text-ink">“{t.quote}”</p>
                  </blockquote>
                </div>
              </Reveal>

              <Reveal>
                <div className="h-full bg-terracotta rounded-lg p-8 md:p-12 flex flex-col gap-5">
                  <h2 className="text-white">{t.proposalLabel}</h2>
                  <h3 className="text-xl md:text-2xl text-white">{t.proposalTitle}</h3>
                  <p className="text-white">{t.proposalP1}</p>
                  <p className="text-white">{t.proposalP2}</p>
                  <Link
                    href={href("/que-ofrecemos")}
                    className="mt-auto pt-4 text-white font-semibold underline underline-offset-4 hover:no-underline self-start"
                    style={ui}
                  >
                    {t.proposalLink} <span aria-hidden>→</span>
                  </Link>
                </div>
              </Reveal>
            </div>
          </div>
        </section>

        {/* ── Manifesto ────────────────────────────────── */}
        <section className="bg-cream py-16 md:py-20 px-6">
          <Reveal className="max-w-4xl mx-auto text-center">
            <p className="text-2xl md:text-4xl font-light text-navy leading-snug text-balance">{t.manifesto}</p>
          </Reveal>
        </section>

        {/* ── How we can help: summary of the services page ── */}
        <section className="py-20 md:py-24 px-6 bg-sand border-y border-line">
          <Reveal className="max-w-3xl mx-auto flex flex-col gap-6 items-start">
            <h2>{t.helpTitle}</h2>
            <p className="text-lg leading-relaxed">{t.helpP}</p>
            <Link
              href={href("/que-ofrecemos")}
              className="bg-terracotta text-white px-9 py-3.5 rounded font-ui font-semibold hover:bg-terracotta-dark transition-colors duration-200 text-sm tracking-wide"
            >
              {t.proposalLink}
            </Link>
          </Reveal>
        </section>

        {/* ── Latest activities ──────────────────────────── */}
        <section className="py-20 md:py-28 px-6 bg-cream">
          <div className="max-w-5xl mx-auto">
            <Reveal className="flex items-end justify-between gap-6 flex-wrap mb-12">
              <div>
                <span className="label text-rust">{t.newsLabel}</span>
                <h2 className="mt-3">{t.newsTitle}</h2>
              </div>
              <Link href={href("/actividades")} className="text-rust text-sm font-semibold hover:underline" style={ui}>
                {t.newsAll} <span aria-hidden>→</span>
              </Link>
            </Reveal>
            <ul className="grid grid-cols-1 md:grid-cols-3 gap-5">
              {latest.map((a) => (
                <li key={a.slug}>
                  <Link
                    href={articlePath(a, lang)}
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

        {/* ── Partners: a quiet line of text ───────────── */}
        <section aria-labelledby="partners-label" className="px-6 pb-16 bg-cream">
          <div className="max-w-5xl mx-auto border-t border-line pt-8 flex flex-col gap-2">
            <h2 id="partners-label" className="text-xs font-semibold uppercase tracking-widest text-muted" style={ui}>
              {t.partnersLabel}
            </h2>
            <p className="text-sm text-muted">{partners.join(" · ")}</p>
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
              className="group bg-cream border border-line rounded-lg p-10 flex flex-col gap-4 h-full hover:border-navy transition-colors duration-200"
            >
              <span className="label text-muted">{t.contactLabel}</span>
              <h3 className="text-xl">{t.contactTitle}</h3>
              <p>{t.contactP}</p>
              <span className="text-rust text-sm font-semibold mt-auto group-hover:underline" style={ui}>
                {t.contactLink} <span aria-hidden>→</span>
              </span>
            </Link>
          </div>
        </section>
      </main>
      <Footer lang={lang} />
    </>
  );
}
