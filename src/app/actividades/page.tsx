import type { Metadata } from "next";
import Link from "next/link";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import Reveal from "@/components/Reveal";
import PageHero from "@/components/PageHero";

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
      <main>
        <PageHero
          label="Proyectos"
          title="Actividades realizadas"
          description="Nuestros proyectos buscan identificar y fortalecer experiencias exitosas de construcción de espacio cívico y la formación en buenas prácticas de deliberación pública."
        />

        {/* Proyecto 01 — Redes Plurales */}
        <section className="py-24 px-6 bg-[#E2CDB4]">
          <div className="max-w-5xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-16 items-start">
            <Reveal direction="left">
              <span className="label text-[#C0442C]">Proyecto 01</span>
              <h2 className="mt-4">Redes Plurales</h2>
              <p className="mt-6" style={{ color: "#5A6A7A" }}>
                Identificar buenas prácticas, desarrollar herramientas de diálogo y construir capacidades son las tres principales actividades que proponemos para el primer año de trabajo. Sabemos que en diversas partes del mundo existen organizaciones de la sociedad civil, instituciones académicas y programas gubernamentales orientados a promover el diálogo, la búsqueda de consensos, la convivencia, el debate de ideas y otras actividades que fomentan el pluralismo en el espacio público.
              </p>
              <p className="mt-4" style={{ color: "#5A6A7A" }}>
                Si queremos multiplicar estas capacidades, es necesario lanzar un programa que recoja estas experiencias y herramientas, las sistematice conceptualmente y cree redes para potenciar su impacto y llevarlas a nuevas áreas y situaciones.
              </p>
            </Reveal>

            <Reveal direction="right">
              <div className="bg-[#EBD7BE] rounded-lg p-10 border border-[#D8C9B3] flex flex-col gap-5">
                <span className="label text-[#6B7280]">Tres líneas de trabajo</span>
                <ul className="flex flex-col gap-4">
                  {[
                    "Identificar buenas prácticas de diálogo y deliberación a nivel mundial",
                    "Desarrollar herramientas de diálogo adaptables a distintos contextos",
                    "Crear redes para potenciar su impacto y llevarlas a nuevas áreas",
                  ].map((item) => (
                    <li key={item} className="flex items-start gap-3">
                      <span className="w-1.5 h-1.5 rounded-full bg-[#C0442C] flex-shrink-0 mt-2" />
                      <span className="text-sm leading-relaxed" style={{ color: "#5A6A7A", fontFamily: "var(--font-jakarta)" }}>
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
        <section className="py-24 px-6 bg-[#EBD7BE] relative overflow-hidden">
          <div className="max-w-5xl mx-auto">
            <Reveal>
              <span className="label text-[#C0442C]">Proyecto 02</span>
              <h2 className="mt-4 max-w-xl">Deliberar para entendernos</h2>
            </Reveal>

            <div className="mt-12 grid grid-cols-1 md:grid-cols-3 gap-10">
              <Reveal className="md:col-span-2 flex flex-col gap-5" delay={0.1}>
                <p style={{ color: "#5A6A7A" }}>
                  El programa Deliberar para Entendernos construye sobre y multiplica los hallazgos de Redes Plurales. Es necesario entrenar la capacidad de deliberar para que la deliberación se convierta en una práctica habitual, constructiva y que trascienda la confrontación. Distintos actores pueden ser promotores. Los gobiernos son líderes naturales de estas transformaciones: las instituciones legislativas (concejos municipales, legislaturas subnacionales, congresos nacionales), los poderes ejecutivos en sus distintos niveles que formulan proyectos normativos, las autoridades judiciales y los órganos supremos de control.
                </p>
                <p style={{ color: "#5A6A7A" }}>
                  Los actores no gubernamentales —OSC, empresas, instituciones académicas e incluso escuelas secundarias— también han demostrado una capacidad creciente para generar instancias de debate público. En todas estas instituciones existen prácticas comunes de debate, pero aún no de deliberación. El debate político en las instituciones legislativas es competitivo y no necesariamente constructivo; la polarización imperante socava la posibilidad de entendimiento mutuo y construcción colectiva.
                </p>
                <p style={{ color: "#5A6A7A" }}>
                  Deliberar para Entendernos es un programa orientado a crear materiales pedagógicos y a capacitar funcionarios, legisladores, asesores, activistas de la sociedad civil, docentes y estudiantes en recursos útiles para fortalecer las capacidades de diálogo en un contexto dominado por el conflicto y la competencia.
                </p>
              </Reveal>

              <Reveal delay={0.2}>
                <div className="bg-[#1B3A5C] rounded-lg p-8 flex flex-col gap-5 h-full">
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
                        <span className="w-1 h-1 rounded-full bg-[#C0442C] flex-shrink-0 mt-2" />
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

        {/* Impact strip */}
        <section className="bg-[#C0442C] py-16 px-6 relative overflow-hidden">
          <Reveal className="max-w-4xl mx-auto text-center">
            <p
              className="text-2xl md:text-3xl font-bold text-white leading-snug"
              style={{ fontFamily: "var(--font-jakarta)", letterSpacing: "-0.02em" }}
            >
              Proyecto Disonante aspira a trabajar simultáneamente en ambos programas: detectar capacidades de diálogo y ponerlas en red, por un lado, y fortalecer la deliberación como práctica en las instituciones, por el otro.
            </p>
          </Reveal>
        </section>

        {/* CTA */}
        <section className="py-20 px-6 bg-[#E2CDB4] border-t border-[#D8C9B3]">
          <div className="max-w-5xl mx-auto flex flex-col md:flex-row gap-10 items-center justify-between">
            <Reveal direction="left">
              <span className="label text-[#6B7280]">Colabora</span>
              <h2 className="mt-3 max-w-md">¿Quieres ser parte?</h2>
              <p className="mt-3 max-w-md" style={{ color: "#5A6A7A" }}>
                Nos interesa conocer tus inquietudes y propuestas.
              </p>
            </Reveal>
            <Reveal direction="right">
              <Link
                href="/contacto"
                className="bg-[#C0442C] text-white px-9 py-3.5 rounded font-semibold hover:bg-[#a03824] transition-colors text-sm tracking-wide"
                style={{ fontFamily: "var(--font-jakarta)" }}
              >
                Contáctanos
              </Link>
            </Reveal>
          </div>
        </section>
      </main>
      <Footer lang="es" />
    </>
  );
}
