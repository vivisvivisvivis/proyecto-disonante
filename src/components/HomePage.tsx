import Link from "next/link";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import NewsletterForm from "@/components/NewsletterForm";
import ButtonLink from "@/components/ButtonLink";
import CaseRail from "@/components/CaseRail";
import ServiceStack from "@/components/ServiceStack";
import CtaBand from "@/components/CtaBand";
import KineticText from "@/components/motion/KineticText";
import ScrollWords from "@/components/motion/ScrollWords";
import DissonanceStage from "@/components/motion/DissonanceStage";
import Marquee from "@/components/motion/Marquee";
import { partners } from "@/lib/cases";
import { articles } from "@/lib/articles";
import { localHref } from "@/lib/nav";

const copy = {
  es: {
    h1: "Escuchar lo que nos cuesta oír",
    intro:
      "Proyecto Disonante es una contribución para fortalecer el espacio cívico a través de la deliberación pública, el uso de evidencia y el pluralismo.",
    servicesMore: "Ver el detalle",
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
    h1: "Listen to what is hard for us to hear",
    intro:
      "Proyecto Disonante is a contribution to strengthen civic space through public deliberation, the use of evidence and pluralism.",
    servicesMore: "See the details",
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
        {/* ── Hero: the headline is the image ───────────── */}
        <section className="bg-cream min-h-[calc(100svh-5rem)] flex flex-col justify-between pt-10 md:pt-16">
          <div className="max-w-[75rem] w-full mx-auto px-6 flex flex-col gap-10 md:gap-14">
            <KineticText text={t.h1} as="h1" spread={56} className="hero-title" />
            <div className="flex flex-col md:flex-row md:items-end justify-between gap-8 border-t border-line pt-8">
              <p className="max-w-md text-lg md:text-xl text-pretty" style={{ lineHeight: 1.6 }}>
                {t.intro}
              </p>
              <div className="flex flex-col sm:flex-row gap-3 shrink-0">
                <ButtonLink href={href("/contacto")}>{t.ctaPrimary}</ButtonLink>
                <ButtonLink href={href("/actividades")} variant="outline">
                  {t.ctaSecondary}
                </ButtonLink>
              </div>
            </div>
          </div>
          <div className="mt-14 border-y border-line bg-sand py-5 flex flex-col gap-3">
            <p className="max-w-[75rem] w-full mx-auto px-6 font-ui text-xs font-semibold text-muted">{t.partnersLabel}</p>
            <Marquee items={partners} label={t.partnersLabel} />
          </div>
        </section>

        {/* ── Problem → proposal, pinned ────────────────── */}
        <DissonanceStage
          problemLabel={t.problemLabel}
          problem={t.problemTitle}
          proposalLabel={t.proposalLabel}
          proposal={t.proposalTitle}
        />

        {/* ── The argument in full ──────────────────────── */}
        <section className="bg-cream px-6 pb-24 md:pb-32">
          <div className="max-w-[72rem] mx-auto grid grid-cols-1 md:grid-cols-12 gap-12 md:gap-16">
            <div className="md:col-span-6 flex flex-col gap-6">
              <h2 className="heading-sentence">{t.problemTitle}</h2>
              <p>{t.problemP1}</p>
              <p>{t.problemP2}</p>
            </div>
            <div className="md:col-span-5 md:col-start-8 flex flex-col gap-10">
              <blockquote className="pull-quote">“{t.quote}”</blockquote>
              <div className="flex flex-col gap-5">
                <h2 className="heading-sentence">{t.proposalTitle}</h2>
                <p>{t.proposalP1}</p>
                <p>{t.proposalP2}</p>
              </div>
              <div className="flex flex-col gap-4">
                <h3 className="text-base">{t.audiencesLabel}</h3>
                <ul className="flex flex-wrap gap-2">
                  {t.audiences.map((a) => (
                    <li key={a} className="font-ui text-sm text-navy border border-navy/30 rounded px-3 py-1.5">
                      {a}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </section>

        {/* ── Manifesto ────────────────────────────────── */}
        <section className="bg-terracotta px-6 py-28 md:py-40">
          <ScrollWords text={t.manifesto} className="manifesto max-w-5xl mx-auto" />
        </section>

        {/* ── Services ─────────────────────────────────── */}
        <section className="bg-cream px-6 py-24 md:py-32">
          <div className="max-w-[72rem] mx-auto flex flex-col gap-12">
            <div className="flex flex-col md:flex-row md:items-end justify-between gap-6">
              <h2 className="section-title">{t.servicesTitle}</h2>
              <p className="max-w-sm">{t.servicesIntro}</p>
            </div>
            <ServiceStack services={t.services} href={href("/que-ofrecemos")} more={t.servicesMore} />
          </div>
        </section>

        {/* ── Recent work ──────────────────────────────── */}
        <section className="bg-cream px-6 pb-24 md:pb-32">
          <div className="max-w-[72rem] mx-auto flex flex-col gap-10">
            <div className="flex items-end justify-between gap-6 flex-wrap">
              <h2 className="section-title">{t.casesTitle}</h2>
              <Link href={href("/actividades")} className="font-ui text-sm font-semibold text-rust link-underline">
                {t.casesAll}
              </Link>
            </div>
            <CaseRail lang={lang} />
          </div>
        </section>

        {/* ── Publications, as an index ─────────────────── */}
        <section className="bg-sand border-t border-line px-6 py-24 md:py-32">
          <div className="max-w-[72rem] mx-auto flex flex-col gap-10">
            <div className="flex items-end justify-between gap-6 flex-wrap">
              <h2 className="section-title">{t.newsTitle}</h2>
              <Link href={href("/blog")} className="font-ui text-sm font-semibold text-rust link-underline">
                {t.newsAll}
              </Link>
            </div>
            <ul className="border-t border-navy/20">
              {latest.map((a) => (
                <li key={a.slug} className="border-b border-navy/20">
                  <Link href={`${blogBase}/${a.slug}`} className="index-row group">
                    <time dateTime={a.isoDate} className="font-ui text-sm text-muted md:w-40 shrink-0">
                      {a[lang].date}
                    </time>
                    <div className="flex flex-col gap-2 flex-1">
                      <h3 className="index-row-title">{a[lang].title}</h3>
                      <p className="text-[0.9375rem] leading-relaxed max-w-2xl">{a[lang].excerpt}</p>
                    </div>
                    <span className="font-ui text-sm font-semibold text-navy md:w-48 md:text-right shrink-0">
                      {a[lang].author}
                    </span>
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </section>

        {/* ── Newsletter ───────────────────────────────── */}
        <section className="bg-cream px-6 py-20">
          <div className="max-w-[72rem] mx-auto grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-16 items-center">
            <div className="flex flex-col gap-3">
              <h2 className="section-title">{t.newsletterTitle}</h2>
              <p>{t.newsletterP}</p>
            </div>
            <NewsletterForm lang={lang} source={`home-${lang}`} />
          </div>
        </section>

        <CtaBand lang={lang} />
      </main>
      <Footer lang={lang} />
    </>
  );
}
