import type { Metadata } from "next";
import Link from "next/link";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import Reveal from "@/components/Reveal";
import PageHero from "@/components/PageHero";

import { esAlternates } from "@/lib/seo";

export const metadata: Metadata = {
  title: "Quiénes somos",
  description: "Proyecto Disonante está liderado por Carolina Fernández Blanco y Hernán Charosky.",
  alternates: esAlternates("/quienes-somos"),
};

export default function QuienesSomosPage() {
  return (
    <>
      <Navbar lang="es" />
      <main id="main">
        <PageHero
          label="Nosotros"
          title="Quiénes somos"
          description="Proyecto Disonante está liderado por Carolina Fernández Blanco y Hernán Charosky."
        />

        {/* Carolina */}
        <section className="py-24 px-6 bg-sand relative overflow-hidden">
          <div className="max-w-5xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-12 items-start">
            <Reveal direction="left">
              <div className="flex flex-col gap-4">
                <div className="w-24 h-24 rounded-full bg-line flex items-center justify-center flex-shrink-0">
                  <span className="text-3xl font-extrabold text-navy" style={{ fontFamily: "var(--font-jakarta)" }}>CF</span>
                </div>
                <div>
                  <h3 className="text-xl">Carolina Fernández Blanco</h3>
                  <p className="text-sm font-semibold text-rust mt-1" style={{ fontFamily: "var(--font-jakarta)" }}>Doctora en Derecho · Abogada</p>
                  <p className="text-sm text-muted mt-0.5" style={{ fontFamily: "var(--font-jakarta)" }}>España</p>
                </div>
              </div>
            </Reveal>

            <Reveal direction="right" className="md:col-span-2 flex flex-col gap-4">
              <p style={{ color: "var(--pd-body)" }}>
                Carolina es Doctora en Derecho por la Universitat de Girona, abogada por la Universidad de Buenos Aires y magíster en Derecho (LL. M.) por Columbia University (Nueva York). Su trabajo se centra en la calidad legislativa, la deliberación y el Estado de derecho. Ha dictado cursos y formaciones sobre legislación racional, deliberación parlamentaria y políticas públicas basadas en evidencia para legisladores y funcionarios de distintos países de América Latina. Actualmente integra los proyectos de investigación <em>Sesgos en la producción y aplicación del derecho</em> y <em>Epistemología social y Derecho</em>.
              </p>
              <details className="group">
                <summary className="cursor-pointer list-none [&::-webkit-details-marker]:hidden text-sm font-semibold text-rust hover:underline font-ui w-fit">
                  <span className="group-open:hidden">Leer biografía completa ↓</span>
                  <span className="hidden group-open:inline">Ocultar ↑</span>
                </summary>
                <div className="mt-4 flex flex-col gap-4">
              <p style={{ color: "var(--pd-body)" }}>
                Es investigadora de la Cátedra de Cultura Jurídica de la Universitat de Girona, donde fue investigadora postdoctoral y coordinó el Máster oficial en Derecho de Daños entre 2021 y 2026. Tiene una amplia experiencia docente en la Universidad de Buenos Aires y en la Universitat de Girona, y actualmente enseña en el Máster en Derecho de Daños, en el Máster en Fundamentos de la Responsabilidad Civil y en el Master in Global Rule of Law & Constitutional Democracy (Génova y Girona).
              </p>
              <p style={{ color: "var(--pd-body)" }}>
                Ejerció la abogacía en Buenos Aires y trabajó en organizaciones de derechos humanos. Actúa también como consultora jurídica y litigante ante el Sistema Interamericano y el Tribunal Europeo de Derechos Humanos.
              </p>
                </div>
              </details>

              {/* Publications */}
              <div className="pt-2">
                <p className="text-xs font-semibold uppercase tracking-widest text-muted mb-3" style={{ fontFamily: "var(--font-jakarta)" }}>
                  Libros
                </p>
                <ul className="flex flex-col gap-2">
                  {[
                    { text: "Eficacia, efectividad y entramado normativo", detail: "Marcial Pons, 2026" },
                    { text: "Derecho y Desarrollo. Una visión desde América Latina y el Caribe", detail: "" },
                    { text: "La Seguridad Jurídica para el Desarrollo Humano: desafíos en Iberoamérica", detail: "coautora · Marcial Pons, 2025" },
                    { text: "Errores en la creación y aplicación del derecho", detail: "coeditora con F. Carbonell · Marcial Pons, 2026" },
                    { text: "Derecho y Pobreza", detail: "coeditora con E. Pereira Fredes · 2021" },
                    { text: "Seguridad jurídica, pobreza y corrupción", detail: "coeditora con J. Ferrer · 2018" },
                    { text: "Seguridad jurídica y democracia en Iberoamérica", detail: "coeditora con J. Ferrer y C. Cruz · 2015" },
                  ].map((pub) => (
                    <li key={pub.text} className="flex items-start gap-2">
                      <span className="mt-1.5 w-1.5 h-1.5 rounded-full bg-terracotta flex-shrink-0" aria-hidden />
                      <span className="text-sm" style={{ color: "var(--pd-body)", fontFamily: "var(--font-source)" }}>
                        <em>{pub.text}</em>
                        {pub.detail && <span className="not-italic text-xs text-muted"> · {pub.detail}</span>}
                      </span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Journal badges */}
              <div className="pt-1">
                <p className="text-xs font-semibold uppercase tracking-widest text-muted mb-3" style={{ fontFamily: "var(--font-jakarta)" }}>
                  Revistas
                </p>
                <div className="flex flex-wrap gap-2">
                  {[
                    "European Law Journal",
                    "International Journal for the Semiotics of Law",
                    "Doxa",
                    "Isonomía",
                    "Analisi e Diritto",
                    "Diritto & Questioni Pubbliche",
                    "Revista Catalana de Derecho Público",
                  ].map((journal) => (
                    <span
                      key={journal}
                      className="px-3 py-1 rounded border border-line text-xs text-muted"
                      style={{ fontFamily: "var(--font-jakarta)" }}
                    >
                      {journal}
                    </span>
                  ))}
                </div>
              </div>
            </Reveal>
          </div>
        </section>

        <div className="h-px bg-line" />

        {/* Hernán */}
        <section className="py-24 px-6 bg-cream relative overflow-hidden">
          <div className="max-w-5xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-12 items-start">
            <Reveal direction="left">
              <div className="flex flex-col gap-4">
                <div className="w-24 h-24 rounded-full bg-navy flex items-center justify-center flex-shrink-0">
                  <span className="text-3xl font-extrabold text-white" style={{ fontFamily: "var(--font-jakarta)" }}>HC</span>
                </div>
                <div>
                  <h3 className="text-xl">Hernán Charosky</h3>
                  <p className="text-sm font-semibold text-rust mt-1" style={{ fontFamily: "var(--font-jakarta)" }}>Abogado y sociólogo</p>
                  <p className="text-sm text-muted mt-0.5" style={{ fontFamily: "var(--font-jakarta)" }}>Argentina</p>
                </div>
              </div>
            </Reveal>

            <Reveal direction="right" className="md:col-span-2 flex flex-col gap-4">
              <p style={{ color: "var(--pd-body)" }}>
                Hernán es sociólogo y abogado por la Universidad de Buenos Aires y máster en Políticas Públicas por George Washington University, donde fue Fulbright Fellow y Global Leaders Fellow. Desde el inicio de su carrera promueve la participación y la deliberación como prácticas clave para la consolidación democrática, y en cada una de las posiciones que ocupó impulsó procesos de diálogo pluralista y participativo. Actualmente coordina el programa Dialogando Buenos Aires.
              </p>
              <details className="group">
                <summary className="cursor-pointer list-none [&::-webkit-details-marker]:hidden text-sm font-semibold text-rust hover:underline font-ui w-fit">
                  <span className="group-open:hidden">Leer biografía completa ↓</span>
                  <span className="hidden group-open:inline">Ocultar ↑</span>
                </summary>
                <div className="mt-4 flex flex-col gap-4">
              <p style={{ color: "var(--pd-body)" }}>
                Fue director ejecutivo de Poder Ciudadano, capítulo local de Transparencia Internacional, consejero de la Oficina de Integridad del Banco Interamericano de Desarrollo y líder de la iniciativa Argentina Debate. Entre sus experiencias más relevantes, impulsó la discusión plural en la elaboración de la ley de Acceso a la Información Pública y del Código Electoral de la Ciudad de Buenos Aires, lideró la coalición de la sociedad civil que logró los primeros debates presidenciales de la Argentina en 2015 y promovió el uso del acceso a la información pública para el control del gasto en protección social por parte de sus propios beneficiarios.
              </p>
              <p style={{ color: "var(--pd-body)" }}>
                Es docente de la Universidad de Palermo y lo fue anteriormente de la Universidad Austral, la Universidad de San Andrés y la Universidad de Buenos Aires. Ha sido consultor en Centroamérica, Sudamérica y África en temas de transparencia, anticorrupción, cooperación multipartidaria y participación ciudadana para el Banco Interamericano de Desarrollo, el Banco Mundial, el Programa de las Naciones Unidas para el Desarrollo, el National Endowment for Democracy y el National Democratic Institute, entre otros.
              </p>
                </div>
              </details>

              {/* Org badges */}
              <div className="pt-2">
                <p className="text-xs font-semibold uppercase tracking-widest text-muted mb-3" style={{ fontFamily: "var(--font-jakarta)" }}>
                  Organizaciones
                </p>
                <div className="flex flex-wrap gap-2">
                  {[
                    "National Democratic Institute",
                    "Banco Interamericano de Desarrollo",
                    "Banco Mundial",
                    "PNUD",
                    "National Endowment for Democracy",
                    "Poder Ciudadano",
                    "Argentina Debate",
                    "Dialogando Buenos Aires",
                  ].map((org) => (
                    <span
                      key={org}
                      className="px-3 py-1 rounded border border-line text-xs text-muted"
                      style={{ fontFamily: "var(--font-jakarta)" }}
                    >
                      {org}
                    </span>
                  ))}
                </div>
              </div>
            </Reveal>
          </div>
        </section>

        {/* Network */}
        <section className="bg-navy py-20 px-6 relative overflow-hidden">
          <Reveal className="max-w-4xl mx-auto flex flex-col gap-6">
            <span className="label text-blue-300">Nuestra red</span>
            <h2 className="heading-sentence text-white max-w-2xl">Una red de profesionales para las más diversas realidades</h2>
            <p className="text-blue-200 text-lg leading-relaxed max-w-2xl" style={{ fontFamily: "var(--font-source)" }}>
              A lo largo de nuestra experiencia hemos trabajado con profesionales de diversas áreas tales como abogados, comunicadores, sociólogos y politólogos, entre otros, en toda la región latinoamericana, Estados Unidos, África y Europa. Nuestra red cuenta con especialistas que han participado de todo tipo de escenarios políticos y sociales, facilitando talleres, diseñando y evaluando políticas e investigando en el ámbito académico.
            </p>
            <p className="text-blue-200 leading-relaxed max-w-2xl" style={{ fontFamily: "var(--font-source)" }}>
              Para cada proyecto y para cada intervención en el terreno, Proyecto Disonante cuenta con una red de profesionales preparados para las más diversas realidades.
            </p>
          </Reveal>
        </section>

        {/* CTA */}
        <section className="py-20 px-6 bg-sand border-t border-line">
          <div className="max-w-5xl mx-auto flex flex-col md:flex-row gap-8 items-center justify-between">
            <Reveal direction="left">
              <span className="label text-muted">Diálogo</span>
              <h2 className="mt-3 max-w-sm">¿Quieres trabajar con nosotros?</h2>
              <p className="mt-3 max-w-sm" style={{ color: "var(--pd-body)" }}>
                Nos interesa conocer tus inquietudes y propuestas.
              </p>
            </Reveal>
            <Reveal direction="right">
              <Link
                href="/contacto"
                className="bg-navy text-white px-9 py-3.5 rounded font-semibold hover:bg-navy-dark transition-colors text-sm tracking-wide"
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
