import type { Metadata } from "next";
import Link from "next/link";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import Reveal from "@/components/Reveal";
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
          <div className="max-w-5xl mx-auto">
            <Reveal className="mb-14">
              <span className="label text-rust">Servicios</span>
              <h2 className="mt-4 max-w-xl">¿Qué podemos ofrecer?</h2>
            </Reveal>

            <div className="flex flex-col gap-px bg-line">
              {services.map((s, i) => (
                <Reveal key={s.title} delay={i * 0.07}>
                  <div id={s.id} className="bg-cream scroll-mt-24 flex flex-col gap-2 p-8 md:p-10">
                    <h3>{s.title}</h3>
                      <p className="text-sm leading-relaxed" style={{ color: "var(--pd-body)" }}>{s.desc}</p>
                    </div>
                </Reveal>
              ))}
            </div>
          </div>
        </section>

        {/* Audiences */}
        <section className="py-24 px-6 bg-sand">
          <div className="max-w-5xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-16 items-center">
            <Reveal direction="left">
              <span className="label text-rust">Destinatarios</span>
              <h2 className="mt-4">¿A quiénes se dirige nuestro trabajo?</h2>
              <p className="mt-5" style={{ color: "var(--pd-body)" }}>
                Las propuestas de política pública, los proyectos legislativos, las agendas de reformas, pueden incrementar su legitimidad y su eficacia en la medida en que incorporen la pluralidad, la deliberación y la evidencia en los procesos de discusión.
              </p>
            </Reveal>
            <Reveal direction="right">
              <ul className="flex flex-col gap-4">
                {audiences.map((a) => (
                  <li key={a} className="flex items-center gap-4 p-5 rounded border border-line bg-cream">
                    <span aria-hidden className="w-1.5 h-1.5 rounded-full bg-terracotta flex-shrink-0" />
                    <span className="text-[0.9375rem] font-medium" style={{ color: "var(--pd-ink)", fontFamily: "var(--font-jakarta)" }}>
                      {a}
                    </span>
                  </li>
                ))}
              </ul>
            </Reveal>
          </div>
        </section>

        {/* Navy conviction */}
        <section className="bg-navy py-24 px-6 relative overflow-hidden">
          <Reveal className="max-w-3xl mx-auto text-center flex flex-col gap-7">
            <span className="label text-blue-300">Nuestra convicción</span>
            <h2 className="heading-sentence text-white">
              Tanto la legitimidad como la eficacia de las propuestas se fortalecerán si se las discute con dispositivos adecuados
            </h2>
            <p className="text-blue-200 text-lg leading-relaxed" style={{ fontFamily: "var(--font-source)" }}>
              Dispositivos que las preserven del secuestro por identidades que las exceden.
            </p>
            <Link
              href="/contacto"
              className="self-center bg-cream text-navy px-9 py-3.5 rounded font-semibold hover:bg-sand transition-colors text-sm tracking-wide"
              style={{ fontFamily: "var(--font-jakarta)" }}
            >
              Hablar con el equipo
            </Link>
          </Reveal>
        </section>
      </main>
      <Footer lang="es" />
    </>
  );
}
