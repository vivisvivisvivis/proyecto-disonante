import Link from "next/link";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import Reveal from "@/components/Reveal";
import PageHero from "@/components/PageHero";
import { localHref } from "@/lib/nav";

// "El problema" lives only on the home page; this page covers what we do and for whom.
const copy = {
  es: {
    heroLabel: "Deliberación · Evidencia · Pluralismo",
    title: "¿Cómo podemos ayudarte?",
    intro:
      "Una propuesta para poner en práctica dispositivos que mejoren el debate público, la legislación y las políticas públicas frente a desafíos como la polarización, a través del respeto, la argumentación, la evidencia y el pluralismo.",
    servicesTitle: "Líneas de trabajo",
    services: [
      {
        id: "diagnostico",
        title: "Diagnóstico y soluciones",
        desc: "Evaluación y propuestas de solución de situaciones en donde el diálogo y la toma de decisiones colectivas se encuentra bloqueada.",
        more: "Apoyamos a gobiernos, legislaturas, OSC y empresas para que lideren sus propuestas en un entorno de contradicciones múltiples.",
      },
      {
        id: "formacion",
        title: "Formación",
        desc: "Formación en distintos niveles relativas a prácticas deliberativas y diálogo racional.",
        more: "Una mejor conversación pública no es un fenómeno espontáneo: requiere conocimiento de los fundamentos morales, las emociones, los sesgos y las falacias que nos afectan a todos. Múltiples disciplinas científicas han generado evidencia acerca de las razones y de los modos de encauzar aquello que nos dificulta entendernos.",
      },
      {
        id: "argumentacion",
        title: "Argumentación basada en evidencia",
        desc: "Colaboración en la elaboración de argumentos basados en la evidencia y construidos siguiendo las buenas prácticas del diálogo racional.",
        more: "La evidencia no habla por sí sola: entra en una discusión ya cargada de identidades y suele leerse según lo que cada parte quiere defender. Por eso, en procesos de decisión de políticas públicas o como aporte experto en litigios de interés público, por ejemplo mediante amicus curiae, trabajamos para que los argumentos se apoyen en evidencia pertinente, hagan explícitos sus supuestos y anticipen las objeciones razonables, de modo que puedan sostenerse ante quienes no comparten el punto de partida.",
      },
    ],
    audiencesLabel: "Destinatarios",
    audiencesTitle: "¿A quiénes se dirige nuestro trabajo?",
    audiencesP:
      "Las propuestas de política pública, los proyectos legislativos, las agendas de reformas, pueden incrementar su legitimidad y su eficacia en la medida en que incorporen la pluralidad, la deliberación y la evidencia en los procesos de discusión.",
    audiences: [
      "Gobiernos y poderes legislativos",
      "Educadores y centros educativos",
      "ONGs y organizaciones de la sociedad civil (OSC)",
      "Empresas",
      "Asociaciones y organizaciones profesionales",
    ],
    convictionLabel: "Nuestra convicción",
    convictionTitle:
      "Tanto la legitimidad como la eficacia de las propuestas se fortalecerán si se las discute con dispositivos adecuados",
    convictionP: "Dispositivos que las preserven del secuestro por identidades que las exceden.",
    convictionCta: "Habla con el equipo",
  },
  en: {
    heroLabel: "Deliberation · Evidence · Pluralism",
    title: "How can we help you?",
    intro:
      "A proposal to put into practice mechanisms that improve public debate, legislation and public policy in the face of challenges such as polarization, through respect, argumentation, evidence and pluralism.",
    servicesTitle: "Lines of work",
    services: [
      {
        id: "diagnostico",
        title: "Diagnosis and solutions",
        desc: "Evaluation and proposed solutions for situations where dialogue and collective decision-making is blocked.",
        more: "We support governments, legislatures, CSOs and businesses so that they can lead their proposals in an environment of multiple contradictions.",
      },
      {
        id: "formacion",
        title: "Training",
        desc: "Training at various levels related to deliberative practices and rational dialogue.",
        more: "A better public conversation is not a spontaneous phenomenon: it requires knowledge of the moral foundations, emotions, biases and fallacies that affect us all. Multiple scientific disciplines have produced evidence about the reasons behind what makes it hard for us to understand each other, and about ways to channel it.",
      },
      {
        id: "argumentacion",
        title: "Evidence-based argumentation",
        desc: "Collaboration in the elaboration of arguments based on evidence and built following good practices of rational dialogue.",
        more: "Evidence does not speak for itself: it enters a discussion already charged with identities and is usually read according to what each side wants to defend. That is why, in public policy decision-making or as expert input in public interest litigation, for example through amicus curiae briefs, we work to make sure arguments rest on relevant evidence, make their assumptions explicit and anticipate reasonable objections, so that they can hold up before those who do not share the same starting point.",
      },
    ],
    audiencesLabel: "Audiences",
    audiencesTitle: "Who is our work for?",
    audiencesP:
      "Public policy proposals, legislative projects, and reform agendas can increase their legitimacy and effectiveness to the extent that they incorporate plurality, deliberation and evidence in the discussion process.",
    audiences: [
      "Governments and legislative bodies",
      "Educators and educational institutions",
      "NGOs and civil society organizations (CSOs)",
      "Businesses",
      "Professional associations and organizations",
    ],
    convictionLabel: "Our conviction",
    convictionTitle:
      "Both the legitimacy and effectiveness of proposals will be strengthened if they are discussed with adequate mechanisms",
    convictionP: "Mechanisms that preserve them from being hijacked by identities that exceed them.",
    convictionCta: "Talk to the team",
  },
};

export const servicesMeta = {
  es: { title: copy.es.title, description: copy.es.intro },
  en: { title: copy.en.title, description: copy.en.intro },
};

const ui = { fontFamily: "var(--font-jakarta)" };

export default function ServicesPage({ lang }: { lang: "es" | "en" }) {
  const t = copy[lang];

  return (
    <>
      <Navbar lang={lang} />
      <main id="main">
        <PageHero label={t.heroLabel} title={t.title} description={t.intro} />

        {/* Lines of work */}
        <section className="py-20 md:py-24 px-6 bg-cream">
          <div className="max-w-5xl mx-auto">
            <Reveal className="mb-12">
              <h2 className="max-w-xl">{t.servicesTitle}</h2>
            </Reveal>
            <ul className="flex flex-col gap-px bg-line border border-line">
              {t.services.map((s) => (
                <li key={s.id} id={s.id} className="bg-cream scroll-mt-24 flex flex-col gap-2 p-8 md:p-10">
                  <h3>{s.title}</h3>
                  <p className="text-[0.9375rem] leading-relaxed">{s.desc}</p>
                  <p className="text-[0.9375rem] leading-relaxed">{s.more}</p>
                </li>
              ))}
            </ul>
          </div>
        </section>

        {/* Audiences */}
        <section className="py-20 md:py-24 px-6 bg-sand border-t border-line">
          <div className="max-w-5xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-12 md:gap-16 items-center">
            <div>
              <span className="label text-rust">{t.audiencesLabel}</span>
              <h2 className="mt-3">{t.audiencesTitle}</h2>
              <p className="mt-5">{t.audiencesP}</p>
            </div>
            <ul className="flex flex-col gap-3">
              {t.audiences.map((a) => (
                <li key={a} className="flex items-center gap-4 p-5 rounded border border-line bg-cream">
                  <span aria-hidden className="w-1.5 h-1.5 rounded-full bg-terracotta flex-shrink-0" />
                  <span className="text-[0.9375rem] font-medium text-ink" style={ui}>{a}</span>
                </li>
              ))}
            </ul>
          </div>
        </section>

        {/* Conviction: the accent background */}
        <section className="bg-terracotta py-20 md:py-24 px-6">
          <Reveal className="max-w-3xl mx-auto text-center flex flex-col gap-7">
            <span className="label text-white">{t.convictionLabel}</span>
            <h2 className="heading-sentence text-white">{t.convictionTitle}</h2>
            <p className="text-white text-lg leading-relaxed">{t.convictionP}</p>
            <Link
              href={localHref(lang, "/contacto")}
              className="self-center bg-cream text-navy px-9 py-3.5 rounded font-semibold hover:bg-sand transition-colors text-sm tracking-wide"
              style={ui}
            >
              {t.convictionCta}
            </Link>
          </Reveal>
        </section>
      </main>
      <Footer lang={lang} />
    </>
  );
}
