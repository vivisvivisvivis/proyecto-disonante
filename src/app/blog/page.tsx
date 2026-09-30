import type { Metadata } from "next";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import Reveal from "@/components/Reveal";
import PageHero from "@/components/PageHero";

export const metadata: Metadata = {
  title: "Noticias — Proyecto Disonante",
  description: "Novedades, publicaciones y actividades de Proyecto Disonante.",
};

const articles = [
  {
    title: "Proyecto Disonante en la Conferencia Regional de CEPAL: derechos sexuales y reproductivos y polarización",
    author: "Carolina Fernández Blanco",
    date: "29 de septiembre de 2026",
    excerpt: "En agosto Proyecto Disonante participó en dos actividades vinculadas a los derechos sexuales y reproductivos y la polarización.",
    tag: "CEPAL",
  },
  {
    title: "Newsletter con las actividades de 2024",
    author: "",
    date: "27 de febrero de 2025",
    excerpt: "Durante su primer año Proyecto Disonante participó de interesantes propuestas y junto con sus miembros impulsó distintas iniciativas.",
    tag: "Newsletter",
  },
  {
    title: "Encrucijadas de la Libertad de Expresión en redes sociales",
    author: "Alianza Regional por la Libre Expresión e Información",
    date: "15 de diciembre de 2024",
    excerpt: "",
    tag: "Libertad de expresión",
  },
  {
    title: "Financiamiento de la política",
    author: "",
    date: "15 de diciembre de 2024",
    excerpt: "Polarización ideológica y partidista en la conversación pública. Durante el último trimestre de 2024, Proyecto Disonante participó en distintas actividades.",
    tag: "Política",
  },
  {
    title: "Polarización y toma de decisiones racionales",
    author: "",
    date: "10 de octubre de 2024",
    excerpt: "La polarización extrema es un fenómeno que se ha convertido en parte de la vida cotidiana y que impacta en la toma de decisiones.",
    tag: "Deliberación",
  },
  {
    title: "Antagonismo, desacuerdo y conflicto institucionalizado",
    author: "",
    date: "",
    excerpt: "",
    tag: "Deliberación",
  },
  {
    title: "La legislación eminentemente simbólica: un problema para la legislación razonable",
    author: "",
    date: "",
    excerpt: "",
    tag: "Legislación",
  },
  {
    title: "Diálogo político y mejores políticas: algunos hitos biográficos",
    author: "",
    date: "",
    excerpt: "",
    tag: "Diálogo",
  },
  {
    title: "Apertura en tiempos de polarización",
    author: "",
    date: "",
    excerpt: "",
    tag: "Polarización",
  },
  {
    title: "Capacitación 'Legislación y Diálogo' para el National Democratic Institute",
    author: "",
    date: "",
    excerpt: "",
    tag: "Formación",
  },
];

export default function BlogPage() {
  const [featured, ...rest] = articles;

  return (
    <>
      <Navbar lang="es" />
      <main>
        <PageHero
          label="Actualidad"
          title="Noticias"
          description="Publicaciones, actividades y novedades de Proyecto Disonante."
        />

        <section className="py-24 px-6 bg-[#FAF7F2]">
          <div className="max-w-5xl mx-auto">

            {/* Featured */}
            <Reveal className="mb-10">
              <div className="group rounded-3xl overflow-hidden bg-[#1B3A5C] hover:shadow-xl hover:scale-[1.005] transition-all duration-300 flex flex-col md:flex-row">
                <div className="flex-1 p-10 md:p-14 flex flex-col gap-4">
                  <div className="flex items-center gap-3 flex-wrap">
                    <span className="label text-blue-300">{featured.tag}</span>
                    {featured.date && (
                      <>
                        <span className="w-1 h-1 rounded-full bg-[#C0442C]" />
                        <span className="text-xs text-blue-400" style={{ fontFamily: "var(--font-jakarta)" }}>{featured.date}</span>
                      </>
                    )}
                  </div>
                  <h2 className="text-white text-2xl md:text-3xl leading-snug group-hover:text-blue-100 transition-colors duration-200">
                    {featured.title}
                  </h2>
                  {featured.excerpt && (
                    <p className="text-blue-200 text-base leading-relaxed" style={{ fontFamily: "var(--font-lora)" }}>
                      {featured.excerpt}
                    </p>
                  )}
                  {featured.author && (
                    <p className="text-sm font-semibold text-blue-300 mt-2" style={{ fontFamily: "var(--font-jakarta)" }}>
                      {featured.author}
                    </p>
                  )}
                </div>
                <div className="hidden md:flex w-64 flex-shrink-0 bg-gradient-to-br from-[#0f2238] to-[#1B3A5C] items-center justify-center p-10">
                  <span
                    className="text-[8rem] font-extrabold text-white leading-none select-none"
                    style={{ fontFamily: "var(--font-jakarta)", opacity: 0.06, letterSpacing: "-0.05em" }}
                    aria-hidden
                  >
                    PD
                  </span>
                </div>
              </div>
            </Reveal>

            {/* Grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
              {rest.map((article, i) => (
                <Reveal key={article.title} delay={i * 0.06}>
                  <div className="group bg-white border border-[#E8E2D9] rounded-3xl p-7 flex flex-col gap-3 h-full hover:shadow-md hover:border-[#1B3A5C] hover:scale-[1.01] transition-all duration-300">
                    <div className="flex items-center gap-2 flex-wrap">
                      <span className="label text-[#C0442C]">{article.tag}</span>
                      {article.date && (
                        <>
                          <span className="w-1 h-1 rounded-full bg-[#E8E2D9] flex-shrink-0" />
                          <span className="text-xs text-[#9CA3AF]" style={{ fontFamily: "var(--font-jakarta)" }}>
                            {article.date}
                          </span>
                        </>
                      )}
                    </div>
                    <h3 className="text-base leading-snug group-hover:text-[#C0442C] transition-colors duration-200">
                      {article.title}
                    </h3>
                    {article.excerpt && (
                      <p className="text-xs leading-relaxed mt-auto" style={{ color: "#7A8A9A" }}>
                        {article.excerpt}
                      </p>
                    )}
                    {article.author && (
                      <p className="text-xs font-semibold text-[#1B3A5C] mt-auto" style={{ fontFamily: "var(--font-jakarta)" }}>
                        {article.author}
                      </p>
                    )}
                  </div>
                </Reveal>
              ))}
            </div>
          </div>
        </section>
      </main>
      <Footer lang="es" />
    </>
  );
}
