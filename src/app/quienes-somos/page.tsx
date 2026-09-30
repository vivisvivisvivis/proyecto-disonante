import type { Metadata } from "next";
import Link from "next/link";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import Reveal from "@/components/Reveal";
import GeometricAccent from "@/components/GeometricAccent";
import PageHero from "@/components/PageHero";

export const metadata: Metadata = {
  title: "Quiénes Somos — Proyecto Disonante",
  description: "Proyecto Disonante está liderado por Carolina Fernández Blanco y Hernán Charosky.",
};

export default function QuienesSomosPage() {
  return (
    <>
      <Navbar lang="es" />
      <main>
        <PageHero
          label="Nosotros"
          title="Quiénes somos"
          description="Proyecto Disonante está liderado por Carolina Fernández Blanco y Hernán Charosky."
        />

        {/* Carolina */}
        <section className="py-24 px-6 bg-white relative overflow-hidden">
          <div className="absolute -right-16 -top-10 pointer-events-none">
            <GeometricAccent size={360} opacity={0.04} color="#1B3A5C" />
          </div>
          <div className="max-w-5xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-12 items-start">
            <Reveal direction="left">
              <div className="flex flex-col gap-4">
                <div className="w-24 h-24 rounded-full bg-[#E8E2D9] flex items-center justify-center flex-shrink-0">
                  <span className="text-3xl font-extrabold text-[#1B3A5C]" style={{ fontFamily: "var(--font-jakarta)" }}>CF</span>
                </div>
                <div>
                  <h3 className="text-xl">Carolina Fernández Blanco</h3>
                  <p className="text-sm font-semibold text-[#C0442C] mt-1" style={{ fontFamily: "var(--font-jakarta)" }}>Abogada</p>
                  <p className="text-sm text-[#6B7280] mt-0.5" style={{ fontFamily: "var(--font-jakarta)" }}>España</p>
                </div>
              </div>
            </Reveal>

            <Reveal direction="right" className="md:col-span-2 flex flex-col gap-4">
              <p style={{ color: "#5A6A7A" }}>
                Carolina es Doctora por la Universitat de Girona, abogada por la Universidad de Buenos Aires y magíster en Derecho (LL. M.) por Columbia University (Nueva York). Actualmente es investigadora postdoctoral de la Cátedra de Cultura Jurídica de la Universitat de Girona. En esa misma universidad coordina el Máster oficial en Derecho de Daños; la Especialización "Bases para una legislación racional" y el módulo del mismo nombre en el Máster en Sistemas Judiciales y Racionalidad (UdG-Univ. Génova).
              </p>
              <p style={{ color: "#5A6A7A" }}>
                Es autora del libro <em>Derecho y Desarrollo. Una visión desde América Latina y el Caribe</em> y de distintos artículos vinculados a la actividad legislativa, la deliberación y el Estado de derecho. Es coeditora, con Jordi Ferrer y Carles Cruz, del libro <em>Seguridad jurídica y democracia en Iberoamérica</em> (Marcial Pons, 2015); con Jordi Ferrer, del libro <em>Seguridad jurídica, pobreza y corrupción en Iberoamérica</em> (Marcial Pons, 2018) y con Esteban Pereira Fredes del libro <em>Derecho y Pobreza</em>.
              </p>
              <p style={{ color: "#5A6A7A" }}>
                Tiene una amplia experiencia docente universitaria y ha desarrollado esta actividad en la Universidad de Buenos Aires, en la Universitat de Girona y en el Master in Global Rule of Law & Constitutional Democracy de la Università degli Studi di Genova y la Universitat de Girona. Ha publicado artículos en prestigiosas revistas nacionales e internacionales como Analisi e Diritto, Doxa, Diritto & Questione Pubbliche, Isonomía, Discusiones, Fair Play, Revista Catalana de Derecho Público, entre otras. Anteriormente se dedicó a la actividad profesional y se desempeñó en diversas organizaciones no gubernamentales.
              </p>
            </Reveal>
          </div>
        </section>

        <div className="h-px bg-[#E8E2D9]" />

        {/* Hernán */}
        <section className="py-24 px-6 bg-[#FAF7F2] relative overflow-hidden">
          <div className="absolute -left-16 -bottom-10 pointer-events-none rotate-180">
            <GeometricAccent size={360} opacity={0.04} color="#C0442C" />
          </div>
          <div className="max-w-5xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-12 items-start">
            <Reveal direction="left">
              <div className="flex flex-col gap-4">
                <div className="w-24 h-24 rounded-full bg-[#1B3A5C] flex items-center justify-center flex-shrink-0">
                  <span className="text-3xl font-extrabold text-white" style={{ fontFamily: "var(--font-jakarta)" }}>HC</span>
                </div>
                <div>
                  <h3 className="text-xl">Hernán Charosky</h3>
                  <p className="text-sm font-semibold text-[#C0442C] mt-1" style={{ fontFamily: "var(--font-jakarta)" }}>Abogado y sociólogo</p>
                  <p className="text-sm text-[#6B7280] mt-0.5" style={{ fontFamily: "var(--font-jakarta)" }}>Argentina</p>
                </div>
              </div>
            </Reveal>

            <Reveal direction="right" className="md:col-span-2 flex flex-col gap-4">
              <p style={{ color: "#5A6A7A" }}>
                Hernán es sociólogo, abogado (UBA) y máster en Políticas Públicas (George Washington University / Fulbright Fellow, Global Leaders Fellow). Coordina el programa Dialogando Buenos Aires, lideró la iniciativa de sociedad civil para lograr el primer debate presidencial Argentina Debate, fue director ejecutivo de Poder Ciudadano (capítulo local de Transparencia Internacional) y consejero de la Oficina de Integridad del Banco Interamericano de Desarrollo.
              </p>
              <p style={{ color: "#5A6A7A" }}>
                A lo largo de su carrera impulsó la participación y la deliberación como prácticas clave para la consolidación democrática. Así, en las distintas posiciones que ocupó, lideró talleres de diálogo para la elaboración e impulso de la ley de Acceso a la Información Pública y el Código Electoral de la Ciudad de Buenos Aires y para la cooperación entre partidos políticos, y promovió el uso del acceso a la información pública para el control del gasto en protección social por parte de sus propios beneficiarios.
              </p>
              <p style={{ color: "#5A6A7A" }}>
                Además, ha sido consultor en Centro y Sud América y África en temas de transparencia, anticorrupción, cooperación multipartidaria y participación ciudadana, para el Banco Interamericano de Desarrollo, el Banco Mundial, el Programa de Naciones Unidas para el Desarrollo, el National Endowment for Democracy y el National Democratic Institute, entre otros.
              </p>
            </Reveal>
          </div>
        </section>

        {/* Network */}
        <section className="bg-[#1B3A5C] py-20 px-6 relative overflow-hidden">
          <div className="absolute -right-16 top-1/2 -translate-y-1/2 pointer-events-none opacity-[0.07]">
            <GeometricAccent size={400} color="white" />
          </div>
          <Reveal className="max-w-4xl mx-auto flex flex-col gap-6 relative z-10">
            <span className="label text-blue-300">Nuestra red</span>
            <h2 className="text-white max-w-2xl">Una red de profesionales para las más diversas realidades</h2>
            <p className="text-blue-200 text-lg leading-relaxed max-w-2xl" style={{ fontFamily: "var(--font-lora)" }}>
              A lo largo de nuestra experiencia hemos trabajado con profesionales de diversas áreas tales como abogados, comunicadores, sociólogos y politólogos, entre otros, en toda la región latinoamericana, Estados Unidos, África y Europa. Nuestra red cuenta con especialistas que han participado de todo tipo de escenarios políticos y sociales, facilitando talleres, diseñando y evaluando políticas e investigando en el ámbito académico.
            </p>
            <p className="text-blue-200 leading-relaxed max-w-2xl" style={{ fontFamily: "var(--font-lora)" }}>
              Para cada proyecto y para cada intervención en el terreno, Proyecto Disonante cuenta con una red de profesionales preparados para las más diversas realidades.
            </p>
          </Reveal>
        </section>

        {/* CTA */}
        <section className="py-20 px-6 bg-white border-t border-[#E8E2D9]">
          <div className="max-w-5xl mx-auto flex flex-col md:flex-row gap-8 items-center justify-between">
            <Reveal direction="left">
              <span className="label text-[#6B7280]">Diálogo</span>
              <h2 className="mt-3 max-w-sm">¿Querés trabajar con nosotros?</h2>
              <p className="mt-3 max-w-sm" style={{ color: "#5A6A7A" }}>
                Nos interesa conocer tus inquietudes y propuestas.
              </p>
            </Reveal>
            <Reveal direction="right">
              <Link
                href="/contacto"
                className="bg-[#1B3A5C] text-white px-9 py-3.5 rounded-full font-semibold hover:bg-[#152d47] transition-colors text-sm tracking-wide"
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
