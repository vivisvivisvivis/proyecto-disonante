import type { Metadata } from "next";
import Link from "next/link";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import Reveal from "@/components/Reveal";
import GeometricAccent from "@/components/GeometricAccent";
import PageHero from "@/components/PageHero";

export const metadata: Metadata = {
  title: "¿Qué ofrecemos? — Proyecto Disonante",
  description: "Una propuesta para mejorar la conversación pública a través del respeto, la argumentación, la evidencia, la diversidad y el pluralismo.",
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

        {/* The problem */}
        <section className="py-24 px-6 bg-white relative overflow-hidden">
          <div className="absolute -left-16 top-1/2 -translate-y-1/2 pointer-events-none">
            <GeometricAccent size={360} opacity={0.04} color="#C0442C" />
          </div>
          <div className="max-w-5xl mx-auto">
            <Reveal>
              <span className="label text-[#C0442C]">El problema</span>
              <h2 className="mt-4 max-w-2xl">La polarización como desafío democrático</h2>
            </Reveal>
            <div className="mt-10 grid grid-cols-1 md:grid-cols-2 gap-12">
              <Reveal direction="left" delay={0.1}>
                <p style={{ color: "#5A6A7A" }}>
                  La polarización es una tendencia que impacta globalmente en la conversación pública. Cada vez es más difícil la discusión de asuntos públicos —desde una película o una canción hasta contenido de un proyecto de ley o de una política pública. Se ponen en juego inmediatamente identidades políticas, culturales y morales y el tema más nimio es un campo de batalla.
                </p>
                <p className="mt-4" style={{ color: "#5A6A7A" }}>
                  Esta polarización es, en algún sentido tentadora, toca alguna fibra íntima de nuestras convicciones pero vuelve estéril cualquier debate.
                </p>
              </Reveal>
              <Reveal direction="right" delay={0.1}>
                <p style={{ color: "#5A6A7A" }}>
                  Este fenómeno es un desafío para la gobernanza democrática. Los gobiernos de todos los niveles, los legisladores y hasta los jueces enfrentan el desafío de que sus propuestas y decisiones se procesen en clave de batalla cultural, política o moral. De este modo, cualquier iniciativa está etiquetada desde su origen o asimilada a un bando u otro de los antagonismos que atraviesan las distintas sociedades. Esto genera un espiral de intolerancia que dificulta el debate, la convivencia, y en algunos casos, fomenta el autoritarismo.
                </p>
              </Reveal>
            </div>
          </div>
        </section>

        {/* Services */}
        <section className="py-24 px-6 bg-[#FAF7F2] relative overflow-hidden">
          <div className="absolute -right-16 bottom-0 pointer-events-none">
            <GeometricAccent size={360} opacity={0.05} color="#1B3A5C" />
          </div>
          <div className="max-w-5xl mx-auto">
            <Reveal className="mb-14">
              <span className="label text-[#C0442C]">Servicios</span>
              <h2 className="mt-4 max-w-xl">¿Qué podemos ofrecer?</h2>
            </Reveal>

            <div className="flex flex-col gap-px bg-[#E8E2D9]">
              {services.map((s, i) => (
                <Reveal key={s.title} delay={i * 0.07}>
                  <div className="bg-[#FAF7F2] group flex flex-col md:flex-row gap-6 md:gap-12 md:items-start p-8 md:p-10 hover:bg-white transition-colors duration-200">
                    <span
                      className="text-4xl font-extrabold text-[#E8E2D9] group-hover:text-[#C0442C] transition-colors duration-200 flex-shrink-0 w-12"
                      style={{ fontFamily: "var(--font-jakarta)", letterSpacing: "-0.04em" }}
                    >
                      {s.number}
                    </span>
                    <div className="flex flex-col gap-2 flex-1">
                      <h3 className="group-hover:text-[#C0442C] transition-colors duration-200">{s.title}</h3>
                      <p className="text-sm leading-relaxed" style={{ color: "#5A6A7A" }}>{s.desc}</p>
                    </div>
                    <span
                      className="md:ml-auto self-center text-[#E8E2D9] group-hover:text-[#C0442C] group-hover:translate-x-1.5 transition-all duration-200 text-xl flex-shrink-0"
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
        <section className="py-24 px-6 bg-white">
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
                  <li key={a} className="flex items-center gap-4 p-5 rounded-2xl border border-[#E8E2D9] bg-[#FAF7F2] hover:border-[#C0442C] hover:shadow-sm transition-all duration-200 group">
                    <span
                      className="text-xl font-extrabold text-[#E8E2D9] group-hover:text-[#C0442C] transition-colors duration-200 flex-shrink-0 w-8"
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
          <div className="absolute -left-16 top-1/2 -translate-y-1/2 pointer-events-none opacity-[0.07]">
            <GeometricAccent size={420} color="white" />
          </div>
          <Reveal className="max-w-3xl mx-auto text-center flex flex-col gap-7 relative z-10">
            <span className="label text-blue-300">Nuestra convicción</span>
            <h2 className="text-white">
              Tanto la legitimidad como la eficacia de las propuestas se fortalecerán si se las discute con dispositivos adecuados
            </h2>
            <p className="text-blue-200 text-lg leading-relaxed" style={{ fontFamily: "var(--font-lora)" }}>
              Dispositivos que las preserven del secuestro por identidades que las exceden.
            </p>
            <Link
              href="/contacto"
              className="self-center bg-white text-[#1B3A5C] px-9 py-3.5 rounded-full font-semibold hover:bg-[#FAF7F2] transition-colors text-sm tracking-wide"
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
