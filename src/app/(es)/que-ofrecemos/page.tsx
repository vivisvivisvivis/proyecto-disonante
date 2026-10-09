import type { Metadata } from "next";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import Reveal from "@/components/Reveal";
import ScrollWords from "@/components/motion/ScrollWords";
import CtaBand from "@/components/CtaBand";
import PageHero from "@/components/PageHero";

import { esAlternates } from "@/lib/seo";

export const metadata: Metadata = {
  title: "Qué hacemos",
  description: "Una propuesta para mejorar la conversación pública a través del respeto, la argumentación, la evidencia, la diversidad y el pluralismo.",
  alternates: esAlternates("/que-ofrecemos"),
};

const services = [
  {
    id: "diagnostico",
    title: "Diagnóstico y soluciones",
    desc: "Evaluación y propuestas de solución de situaciones en donde el diálogo y la toma de decisiones colectivas se encuentra bloqueada.",
  },
  {
    id: "formacion",
    title: "Formación",
    desc: "Formación en distintos niveles relativas a prácticas deliberativas y diálogo racional.",
  },
  {
    id: "implementacion",
    title: "Implementación",
    desc: "Ayuda en la implementación de decisiones que generan conflictividad, son resistidas por un sector o son difíciles de trasmitir para ser comprendidas.",
  },
  {
    id: "argumentacion",
    title: "Argumentación basada en evidencia",
    desc: "Colaboración en la elaboración de argumentos basados en la evidencia y construidos siguiendo las buenas prácticas del diálogo racional.",
  },
];

const audiences = [
  "Gobiernos y poderes legislativos",
  "Educadores y centros educativos",
  "ONGs y Organizaciones de la sociedad civil (OSC)",
  "Empresas",
  "Asociaciones y organizaciones profesionales",
];

export default function QueOfrecemosPage() {
  return (
    <>
      <Navbar lang="es" />
      <main id="main">
        <PageHero
          label="Deliberación · Evidencia · Pluralismo"
          title="Qué hacemos"
          description="Una propuesta para poner en práctica dispositivos que mejoren la conversación pública a través del respeto, la lógica argumentativa, la incorporación de evidencia, la diversidad y el pluralismo."
        />

        {/* Services */}
        <section className="py-24 px-6 bg-cream relative overflow-hidden">
          <div className="max-w-[72rem] mx-auto">
            <div className="mb-12 flex flex-col gap-4">
              <p className="font-ui text-sm font-semibold text-rust">Servicios</p>
              <h2 className="section-title">¿Qué podemos ofrecer?</h2>
            </div>

            <ul className="border-t border-navy/20">
              {services.map((s) => (
                <li key={s.id} id={s.id} className="scroll-mt-28 border-b border-navy/20 py-10 md:py-14 grid grid-cols-1 md:grid-cols-12 gap-4 md:gap-12 items-baseline">
                  <h3 className="service-title md:col-span-7">{s.title}</h3>
                  <p className="md:col-span-5 text-lg" style={{ lineHeight: 1.7 }}>{s.desc}</p>
                </li>
              ))}
            </ul>
          </div>
        </section>

        {/* Audiences */}
        <section className="py-24 px-6 bg-sand">
          <div className="max-w-[72rem] mx-auto grid grid-cols-1 md:grid-cols-2 gap-16 items-center">
            <Reveal direction="left">
              <p className="font-ui text-sm font-semibold text-rust">Destinatarios</p>
              <h2 className="section-title mt-4">¿A quiénes se dirige nuestro trabajo?</h2>
              <p className="mt-5" style={{ color: "var(--pd-body)" }}>
                Las propuestas de política pública, los proyectos legislativos, las agendas de reformas, pueden incrementar su legitimidad y su eficacia en la medida en que incorporen la pluralidad, la deliberación y la evidencia en los procesos de discusión.
              </p>
            </Reveal>
            <Reveal direction="right">
              <ul className="border-t border-navy/20">
                {audiences.map((a) => (
                  <li key={a} className="border-b border-navy/20 py-4 font-ui text-lg md:text-xl font-semibold text-navy">
                    {a}
                  </li>
                ))}
              </ul>
            </Reveal>
          </div>
        </section>

        {/* Conviction: fills in word by word */}
        <section className="bg-navy px-6 py-28 md:py-40">
          <div className="max-w-[72rem] mx-auto flex flex-col gap-10">
            <ScrollWords text="Tanto la legitimidad como la eficacia de las propuestas se fortalecerán si se las discute con dispositivos adecuados" className="manifesto max-w-5xl" />
            <p className="text-xl text-blue-100 max-w-xl" style={{ lineHeight: 1.6 }}>Dispositivos que las preserven del secuestro por identidades que las exceden.</p>
          </div>
        </section>

        <CtaBand lang="es" />
      </main>
      <Footer lang="es" />
    </>
  );
}
