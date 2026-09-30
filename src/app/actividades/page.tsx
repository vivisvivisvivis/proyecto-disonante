import type { Metadata } from "next";
import Link from "next/link";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import Reveal from "@/components/Reveal";
import GeometricAccent from "@/components/GeometricAccent";
import PageHero from "@/components/PageHero";

export const metadata: Metadata = {
  title: "Actividades — Proyecto Disonante",
  description: "Nuestros proyectos actuales tienen como objetivo conocer y potenciar experiencias exitosas de fortalecimiento del espacio cívico.",
};

export default function ActividadesPage() {
  return (
    <>
      <Navbar lang="es" />
      <main>
        <PageHero
          label="Proyectos"
          title="Actividades"
          description="Nuestros proyectos actuales tienen como objetivo conocer y potenciar experiencias exitosas de fortalecimiento del espacio cívico y capacitar en buenas prácticas de deliberación pública."
        />

        {/* Proyecto 01 — Redes Plurales */}
        <section className="py-24 px-6 bg-white">
          <div className="max-w-5xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-16 items-start">
            <Reveal direction="left">
              <span className="label text-[#C0442C]">Proyecto 01</span>
              <h2 className="mt-4">Redes Plurales</h2>
              <p className="mt-6" style={{ color: "#5A6A7A" }}>
                Conocer buenas prácticas, desarrollar herramientas de diálogo y generar capacidades son las tres principales actividades que proponemos desarrollar durante el primer año de trabajo. Sabemos que en diversos lugares del mundo existen organizaciones de la sociedad civil, instituciones académicas y programas de gobierno orientados a promover el diálogo, la construcción de consensos, la convivencia, el debate de ideas y otras actividades que fomentan el pluralismo en la esfera pública.
              </p>
              <p className="mt-4" style={{ color: "#5A6A7A" }}>
                Si queremos multiplicar estas capacidades, es necesario poner en marcha un programa que recopile estas experiencias y herramientas, las sistematice conceptualmente, y cree redes para potenciar su potencial e impacto. Esas herramientas, ahora potenciadas, pueden llevarse a nuevas áreas y situaciones.
              </p>
            </Reveal>

            <Reveal direction="right">
              <div className="bg-[#FAF7F2] rounded-3xl p-10 border border-[#E8E2D9] flex flex-col gap-5">
                <span className="label text-[#6B7280]">Tres ejes de trabajo</span>
                <ul className="flex flex-col gap-4">
                  {[
                    "Conocer buenas prácticas de diálogo y deliberación en el mundo",
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
        <section className="py-24 px-6 bg-[#FAF7F2] relative overflow-hidden">
          <div className="absolute -right-20 -bottom-20 pointer-events-none">
            <GeometricAccent size={420} opacity={0.05} color="#C0442C" />
          </div>
          <div className="max-w-5xl mx-auto">
            <Reveal>
              <span className="label text-[#C0442C]">Proyecto 02</span>
              <h2 className="mt-4 max-w-xl">Deliberar para entendernos</h2>
            </Reveal>

            <div className="mt-12 grid grid-cols-1 md:grid-cols-3 gap-10">
              <Reveal className="md:col-span-2 flex flex-col gap-5" delay={0.1}>
                <p style={{ color: "#5A6A7A" }}>
                  Programa Deliberar para entendernos se nutre y multiplica los hallazgos de Redes Plurales. Es necesario entrenar la capacidad de deliberar para que la deliberación se vuelva una práctica habitual, constructiva y superadora de la confrontación. Diversos actores pueden ser promotores. Los gobiernos son líderes naturales para estas transformaciones: instituciones legislativas (concejos locales, legislaturas subnacionales, congresos nacionales), poderes ejecutivos de distintos niveles de gobierno que formulan proyectos normativos, autoridades judiciales y órganos de control superior.
                </p>
                <p style={{ color: "#5A6A7A" }}>
                  También los actores no gubernamentales —OSCs, empresas, instituciones académicas, y hasta escuelas secundarias— han demostrado creciente capacidad de generar instancias de debate público. Existen en todas estas instituciones prácticas usuales de debate pero no aún de deliberación. El debate político en las instituciones legislativas es competitivo y no necesariamente constructivo; la polarización reinante socava la posibilidad de comprensión mutua y de construcción colectiva.
                </p>
                <p style={{ color: "#5A6A7A" }}>
                  Deliberar para entendernos es un programa orientado a crear materiales pedagógicos y a capacitar a funcionarios, legisladores, asesores, activistas de sociedad civil, profesores y estudiantes en recursos útiles para potenciar las capacidades de diálogo en un contexto en el que predomina el conflicto y la competencia.
                </p>
              </Reveal>

              <Reveal delay={0.2}>
                <div className="bg-[#1B3A5C] rounded-3xl p-8 flex flex-col gap-5 h-full">
                  <span className="label text-blue-300">Actores destinatarios</span>
                  <ul className="flex flex-col gap-3">
                    {[
                      "Funcionarios y legisladores",
                      "Asesores y activistas",
                      "OSCs y empresas",
                      "Instituciones académicas",
                      "Profesores y estudiantes",
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
          <div className="absolute inset-0 pointer-events-none opacity-[0.07]">
            <div className="absolute -right-20 -top-20">
              <GeometricAccent size={480} color="white" />
            </div>
          </div>
          <Reveal className="max-w-4xl mx-auto text-center relative z-10">
            <p
              className="text-2xl md:text-3xl font-bold text-white leading-snug"
              style={{ fontFamily: "var(--font-jakarta)", letterSpacing: "-0.02em" }}
            >
              Proyecto Disonante se propone trabajar simultáneamente en los dos programas: detectar capacidades de diálogo y ponerlas en red, por un lado, y potenciar la deliberación como práctica en las instituciones, por otro.
            </p>
          </Reveal>
        </section>

        {/* CTA */}
        <section className="py-20 px-6 bg-white border-t border-[#E8E2D9]">
          <div className="max-w-5xl mx-auto flex flex-col md:flex-row gap-10 items-center justify-between">
            <Reveal direction="left">
              <span className="label text-[#6B7280]">Sumate</span>
              <h2 className="mt-3 max-w-md">¿Querés ser parte?</h2>
              <p className="mt-3 max-w-md" style={{ color: "#5A6A7A" }}>
                Nos interesa conocer tus inquietudes y propuestas.
              </p>
            </Reveal>
            <Reveal direction="right">
              <Link
                href="/contacto"
                className="bg-[#C0442C] text-white px-9 py-3.5 rounded-full font-semibold hover:bg-[#a03824] transition-colors text-sm tracking-wide"
                style={{ fontFamily: "var(--font-jakarta)" }}
              >
                Contactanos
              </Link>
            </Reveal>
          </div>
        </section>
      </main>
      <Footer lang="es" />
    </>
  );
}
