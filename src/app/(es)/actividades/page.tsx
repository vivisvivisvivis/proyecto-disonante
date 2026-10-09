import type { Metadata } from "next";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import Reveal from "@/components/Reveal";
import ScrollWords from "@/components/motion/ScrollWords";
import CtaBand from "@/components/CtaBand";
import PageHero from "@/components/PageHero";
import CaseCards from "@/components/CaseCards";

import { esAlternates } from "@/lib/seo";

export const metadata: Metadata = {
  title: "Actividades realizadas",
  description: "Las actividades realizadas por Proyecto Disonante: talleres, formaciones, charlas y participaciones en espacios públicos.",
  alternates: esAlternates("/actividades"),
};

export default function ActividadesPage() {
  return (
    <>
      <Navbar lang="es" />
      <main id="main">
        <PageHero
          label="Proyectos"
          title="Actividades realizadas"
          description="Nuestros proyectos buscan identificar y fortalecer experiencias exitosas de construcción de espacio cívico y la formación en buenas prácticas de deliberación pública."
        />

        {/* Cases */}
        <section className="py-20 md:py-24 px-6 bg-cream">
          <div className="max-w-[72rem] mx-auto flex flex-col gap-10">
            <Reveal>
              <span className="label text-rust">Trabajo reciente</span>
              <h2 className="section-title mt-3">Casos</h2>
              <p className="mt-4 max-w-2xl">Talleres, formaciones y encuentros que diseñamos y coordinamos con instituciones y organizaciones de la sociedad civil.</p>
            </Reveal>
            <CaseCards lang="es" />
          </div>
        </section>

        <section className="pt-20 px-6 bg-sand border-t border-line">
          <div className="max-w-[72rem] mx-auto">
            <span className="label text-rust">Programas</span>
            <h2 className="section-title mt-3">Nuestros programas</h2>
          </div>
        </section>


        {/* Proyecto 01 — Redes Plurales */}
        <section className="pt-12 pb-24 px-6 bg-sand">
          <div className="max-w-[72rem] mx-auto grid grid-cols-1 md:grid-cols-2 gap-16 items-start">
            <Reveal direction="left">
              <span className="label text-rust">Proyecto 01</span>
              <h2 className="section-title mt-4">Redes Plurales</h2>
              <p className="mt-6" style={{ color: "var(--pd-body)" }}>
                Identificar buenas prácticas, desarrollar herramientas de diálogo y construir capacidades son las tres principales actividades que proponemos para el primer año de trabajo. Sabemos que en diversas partes del mundo existen organizaciones de la sociedad civil, instituciones académicas y programas gubernamentales orientados a promover el diálogo, la búsqueda de consensos, la convivencia, el debate de ideas y otras actividades que fomentan el pluralismo en el espacio público.
              </p>
              <p className="mt-4" style={{ color: "var(--pd-body)" }}>
                Si queremos multiplicar estas capacidades, es necesario lanzar un programa que recoja estas experiencias y herramientas, las sistematice conceptualmente y cree redes para potenciar su impacto y llevarlas a nuevas áreas y situaciones.
              </p>
            </Reveal>

            <Reveal direction="right">
              <div className="bg-cream rounded-lg p-10 border border-line flex flex-col gap-5">
                <span className="label text-muted">Tres líneas de trabajo</span>
                <ul className="flex flex-col gap-4">
                  {[
                    "Identificar buenas prácticas de diálogo y deliberación a nivel mundial",
                    "Desarrollar herramientas de diálogo adaptables a distintos contextos",
                    "Crear redes para potenciar su impacto y llevarlas a nuevas áreas",
                  ].map((item) => (
                    <li key={item} className="flex items-start gap-3">
                      <span className="w-1.5 h-1.5 rounded-full bg-terracotta flex-shrink-0 mt-2" />
                      <span className="text-sm leading-relaxed" style={{ color: "var(--pd-body)", fontFamily: "var(--font-jakarta)" }}>
                        {item}
                      </span>
                    </li>
                  ))}
                </ul>
              </div>
            </Reveal>
          </div>
        </section>

        {/* Proyecto 02 — Deliberar para entendernos */}
        <section className="py-24 px-6 bg-cream relative overflow-hidden">
          <div className="max-w-[72rem] mx-auto">
            <Reveal>
              <span className="label text-rust">Proyecto 02</span>
              <h2 className="section-title mt-4 max-w-xl">Deliberar para entendernos</h2>
            </Reveal>

            <div className="mt-12 grid grid-cols-1 md:grid-cols-3 gap-10">
              <Reveal className="md:col-span-2 flex flex-col gap-5" delay={0.1}>
                <p style={{ color: "var(--pd-body)" }}>
                  El programa Deliberar para Entendernos construye sobre y multiplica los hallazgos de Redes Plurales. Es necesario entrenar la capacidad de deliberar para que la deliberación se convierta en una práctica habitual, constructiva y que trascienda la confrontación. Distintos actores pueden ser promotores. Los gobiernos son líderes naturales de estas transformaciones: las instituciones legislativas (concejos municipales, legislaturas subnacionales, congresos nacionales), los poderes ejecutivos en sus distintos niveles que formulan proyectos normativos, las autoridades judiciales y los órganos supremos de control.
                </p>
                <p style={{ color: "var(--pd-body)" }}>
                  Los actores no gubernamentales —OSC, empresas, instituciones académicas e incluso escuelas secundarias— también han demostrado una capacidad creciente para generar instancias de debate público. En todas estas instituciones existen prácticas comunes de debate, pero aún no de deliberación. El debate político en las instituciones legislativas es competitivo y no necesariamente constructivo; la polarización imperante socava la posibilidad de entendimiento mutuo y construcción colectiva.
                </p>
                <p style={{ color: "var(--pd-body)" }}>
                  Deliberar para Entendernos es un programa orientado a crear materiales pedagógicos y a capacitar funcionarios, legisladores, asesores, activistas de la sociedad civil, docentes y estudiantes en recursos útiles para fortalecer las capacidades de diálogo en un contexto dominado por el conflicto y la competencia.
                </p>
              </Reveal>

              <Reveal delay={0.2}>
                <div className="bg-navy rounded-lg p-8 flex flex-col gap-5 h-full">
                  <span className="label text-blue-300">Actores destinatarios</span>
                  <ul className="flex flex-col gap-3">
                    {[
                      "Funcionarios y legisladores",
                      "Asesores y activistas",
                      "OSC y empresas",
                      "Instituciones académicas",
                      "Docentes y estudiantes",
                      "Escuelas secundarias",
                    ].map((item) => (
                      <li key={item} className="flex items-start gap-2.5">
                        <span className="w-1 h-1 rounded-full bg-terracotta flex-shrink-0 mt-2" />
                        <span className="text-sm text-blue-100 leading-relaxed" style={{ fontFamily: "var(--font-jakarta)" }}>
                          {item}
                        </span>
                      </li>
                    ))}
                  </ul>
                </div>
              </Reveal>
            </div>
          </div>
        </section>

        {/* Both programs, in one sentence */}
        <section className="bg-terracotta px-6 py-28 md:py-40">
          <ScrollWords text="Proyecto Disonante aspira a trabajar simultáneamente en ambos programas: detectar capacidades de diálogo y ponerlas en red, por un lado, y fortalecer la deliberación como práctica en las instituciones, por el otro." className="manifesto max-w-5xl mx-auto" />
        </section>

        <CtaBand lang="es" />
      </main>
      <Footer lang="es" />
    </>
  );
}
