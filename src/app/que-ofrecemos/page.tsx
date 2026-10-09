import type { Metadata } from "next";
import Link from "next/link";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import Reveal from "@/components/Reveal";
import PageHero from "@/components/PageHero";

import { esAlternates } from "@/lib/seo";

export const metadata: Metadata = {
  title: "¿Qué ofrecemos?",
  description: "Una propuesta para mejorar la conversación pública a través del respeto, la argumentación, la evidencia, la diversidad y el pluralismo.",
  alternates: esAlternates("/que-ofrecemos"),
};

const services = [
  {
    number: "01",
    title: "Diagnóstico y soluciones",
    desc: "Evaluación y propuestas de solución de situaciones en donde el diálogo y la toma de decisiones colectivas se encuentra bloqueada.",
  },
  {
    number: "02",
    title: "Formación",
    desc: "Formación en distintos niveles relativas a prácticas deliberativas y diálogo racional.",
  },
  {
    number: "03",
    title: "Implementación",
    desc: "Ayuda en la implementación de decisiones que generan conflictividad, son resistidas por un sector o son difíciles de trasmitir para ser comprendidas.",
  },
  {
    number: "04",
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
      <main>
        <PageHero
          label="Deliberación · Evidencia · Pluralismo"
          title="¿Qué ofrecemos?"
          description="Una propuesta para poner en práctica dispositivos que mejoren la conversación pública a través del respeto, la lógica argumentativa, la incorporación de evidencia, la diversidad y el pluralismo."
        />

        {/* Services */}
        <section className="py-24 px-6 bg-[#EBD7BE] relative overflow-hidden">
          <div className="max-w-5xl mx-auto">
            <Reveal className="mb-14">
              <span className="label text-[#C0442C]">Servicios</span>
              <h2 className="mt-4 max-w-xl">¿Qué podemos ofrecer?</h2>
            </Reveal>

            <div className="flex flex-col gap-px bg-[#D8C9B3]">
              {services.map((s, i) => (
                <Reveal key={s.title} delay={i * 0.07}>
                  <div className="bg-[#EBD7BE] group flex flex-col md:flex-row gap-6 md:gap-12 md:items-start p-8 md:p-10 hover:bg-[#E2CDB4] transition-colors duration-200">
                    <span
                      className="text-4xl font-extrabold text-[#D8C9B3] group-hover:text-[#C0442C] transition-colors duration-200 flex-shrink-0 w-12"
                      style={{ fontFamily: "var(--font-jakarta)", letterSpacing: "-0.04em" }}
                    >
                      {s.number}
                    </span>
                    <div className="flex flex-col gap-2 flex-1">
                      <h3 className="group-hover:text-[#C0442C] transition-colors duration-200">{s.title}</h3>
                      <p className="text-sm leading-relaxed" style={{ color: "#5A6A7A" }}>{s.desc}</p>
                    </div>
                    <span
                      className="md:ml-auto self-center text-[#D8C9B3] group-hover:text-[#C0442C] group-hover:translate-x-1.5 transition-all duration-200 text-xl flex-shrink-0"
                      aria-hidden
                    >
                      →
                    </span>
                  </div>
                </Reveal>
              ))}
            </div>
          </div>
        </section>

        {/* Audiences */}
        <section className="py-24 px-6 bg-[#E2CDB4]">
          <div className="max-w-5xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-16 items-center">
            <Reveal direction="left">
              <span className="label text-[#C0442C]">Destinatarios</span>
              <h2 className="mt-4">¿A quiénes se dirige nuestro trabajo?</h2>
              <p className="mt-5" style={{ color: "#5A6A7A" }}>
                Las propuestas de política pública, los proyectos legislativos, las agendas de reformas, pueden incrementar su legitimidad y su eficacia en la medida en que incorporen la pluralidad, la deliberación y la evidencia en los procesos de discusión.
              </p>
            </Reveal>
            <Reveal direction="right">
              <ul className="flex flex-col gap-4">
                {audiences.map((a, i) => (
                  <li key={a} className="flex items-center gap-4 p-5 rounded border border-[#D8C9B3] bg-[#EBD7BE] hover:border-[#C0442C] transition-colors duration-200 group">
                    <span
                      className="text-xl font-extrabold text-[#D8C9B3] group-hover:text-[#C0442C] transition-colors duration-200 flex-shrink-0 w-8"
                      style={{ fontFamily: "var(--font-jakarta)" }}
                    >
                      {String(i + 1).padStart(2, "0")}
                    </span>
                    <span className="text-sm font-medium group-hover:text-[#C0442C] transition-colors duration-200" style={{ color: "#2D2D2D", fontFamily: "var(--font-jakarta)" }}>
                      {a}
                    </span>
                  </li>
                ))}
              </ul>
            </Reveal>
          </div>
        </section>

        {/* Navy conviction */}
        <section className="bg-[#1B3A5C] py-24 px-6 relative overflow-hidden">
          <Reveal className="max-w-3xl mx-auto text-center flex flex-col gap-7">
            <span className="label text-blue-300">Nuestra convicción</span>
            <h2 className="text-white">
              Tanto la legitimidad como la eficacia de las propuestas se fortalecerán si se las discute con dispositivos adecuados
            </h2>
            <p className="text-blue-200 text-lg leading-relaxed" style={{ fontFamily: "var(--font-source)" }}>
              Dispositivos que las preserven del secuestro por identidades que las exceden.
            </p>
            <Link
              href="/contacto"
              className="self-center bg-[#EBD7BE] text-[#1B3A5C] px-9 py-3.5 rounded font-semibold hover:bg-[#E0CEAE] transition-colors text-sm tracking-wide"
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
