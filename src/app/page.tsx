import type { Metadata } from "next";
import Link from "next/link";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import Reveal from "@/components/Reveal";
import HeroText from "@/components/HeroText";
import ClientMarquee from "@/components/ClientMarquee";
import NewsletterForm from "@/components/NewsletterForm";
import { esAlternates } from "@/lib/seo";
import { articles } from "@/lib/articles";

export const metadata: Metadata = {
  title: "Proyecto Disonante",
  description:
    "Fortalecemos el espacio público a través de la deliberación racional, el uso de evidencia y el pluralismo.",
  alternates: esAlternates("/"),
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

export default function HomePage() {
  const featured = articles[0];
  const secondary = articles.slice(1, 4);

  return (
    <>
      <Navbar lang="es" />
      <main>

        {/* ── Hero ───────────────────────────────────────── */}
        <section className="relative bg-[#EBD7BE] pt-24 pb-28 px-6 overflow-hidden">
          <div className="max-w-4xl mx-auto text-center flex flex-col items-center gap-8 relative z-10">
            <HeroText />
            <Reveal delay={0.55}>
              <div className="flex flex-col sm:flex-row gap-4 mt-2">
                <Link
                  href="/que-ofrecemos"
                  className="bg-[#C0442C] text-white px-9 py-3.5 rounded font-semibold hover:bg-[#a03824] transition-all duration-200 text-sm tracking-wide"
                  style={{ fontFamily: "var(--font-jakarta)" }}
                >
                  Nuestro trabajo
                </Link>
                <Link
                  href="/actividades"
                  className="border-2 border-[#1B3A5C] text-[#1B3A5C] px-9 py-3.5 rounded font-semibold hover:bg-[#1B3A5C] hover:text-white transition-all duration-200 text-sm tracking-wide"
                  style={{ fontFamily: "var(--font-jakarta)" }}
                >
                  Actividades realizadas
                </Link>
              </div>
            </Reveal>
          </div>
        </section>

        {/* ── Clients marquee ─────────────────────────────── */}
        <ClientMarquee lang="es" />

        {/* ── Problem — full copy ────────────────────────── */}
        <section className="py-28 px-6 bg-[#EBD7BE] relative overflow-hidden">
          <div className="max-w-5xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-20 items-start">
            <Reveal direction="left">
              <div className="flex flex-col gap-6">
                <span className="label text-[#6B7280]">El problema</span>
                <h2 className="text-[#1B3A5C]">La polarización es un desafío para la gobernanza democrática</h2>
                <p style={{ color: "#5A6A7A" }}>
                  La polarización es una tendencia que impacta globalmente en la conversación pública. Cada vez es más difícil la discusión de asuntos públicos —desde una película o una canción hasta contenido de un proyecto de ley o de una política pública. Se ponen en juego inmediatamente identidades políticas, culturales y morales y el tema más nimio es un campo de batalla.
                </p>
                <p style={{ color: "#5A6A7A" }}>
                  Este fenómeno es un desafío para la gobernanza democrática. Los gobiernos de todos los niveles, los legisladores y hasta los jueces enfrentan el desafío de que sus propuestas y decisiones se procesen en clave de batalla cultural, política o moral. El periodismo y las Organizaciones de la Sociedad Civil atraviesan el mismo problema con sus agendas de intervención en la escena pública. De este modo, cualquier iniciativa está o bien etiquetada desde su origen, o bien asimilada con posterioridad a un bando u otro de los antagonismos que atraviesan las distintas sociedades. Esto, a su vez, genera un espiral de intolerancia que dificulta el debate, la convivencia, y en algunos casos, fomenta el autoritarismo.
                </p>

                {/* Pull quote */}
                <div className="mt-6 pl-5 py-2 border-l-2 border-[#D8C9B3]">
                  <p className="italic text-lg" style={{ color: "#4A5568", fontFamily: "var(--font-source)" }}>
                    "Esta polarización es, en algún sentido tentadora, toca alguna fibra íntima de nuestras convicciones pero vuelve estéril cualquier debate."
                  </p>
                </div>
              </div>
            </Reveal>

            <Reveal direction="right">
              <div className="flex flex-col gap-8">
                <div className="bg-[#C0442C] rounded-lg p-10 flex flex-col gap-5">
                  <span className="label text-white/70">Nuestra propuesta</span>
                  <h2 className="text-white">Una propuesta para mejorar la conversación pública</h2>
                  <p className="text-white/90">
                    Proyecto Disonante es una propuesta para poner en práctica dispositivos que mejoren la conversación pública a través del respeto, la lógica argumentativa, la incorporación de evidencia, la diversidad y el pluralismo.
                  </p>
                  <p className="text-sm text-white/80">
                    Las propuestas de política pública, los proyectos legislativos, las agendas de reformas, pueden incrementar su legitimidad y su eficacia en la medida en que incorporen la pluralidad, la deliberación y la evidencia en los procesos de discusión.
                  </p>
                  <Link
                    href="/que-ofrecemos"
                    className="text-white text-sm font-semibold hover:underline mt-1 self-start"
                    style={{ fontFamily: "var(--font-jakarta)" }}
                  >
                    Conoce el proyecto →
                  </Link>
                </div>

                <div className="flex flex-col gap-4 px-2">
                  <span className="label text-[#6B7280]">¿A quiénes se dirige nuestro trabajo?</span>
                  <ul className="flex flex-col gap-2.5">
                    {audiences.map((a) => (
                      <li key={a} className="flex items-center gap-3 group">
                        <span className="w-1.5 h-1.5 rounded-full bg-[#C0442C] flex-shrink-0 group-hover:scale-150 transition-transform duration-200" />
                        <span className="text-sm group-hover:text-[#C0442C] transition-colors duration-200" style={{ color: "#2D2D2D", fontFamily: "var(--font-jakarta)" }}>
                          {a}
                        </span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </Reveal>
          </div>
        </section>

        {/* ── Terracotta manifesto strip ─────────────────── */}
        <section className="bg-[#C0442C] py-16 px-6 relative overflow-hidden">
          <Reveal className="max-w-4xl mx-auto text-center">
            <p
              className="text-2xl md:text-4xl font-light text-white leading-relaxed"
              style={{ fontFamily: "var(--font-source)", letterSpacing: "0.01em" }}
            >
              Una conversación pública sujeta a reglas de respeto y argumentación puede ser
              más productiva para una mejor gobernanza.
            </p>
          </Reveal>
        </section>

        {/* ── Services ───────────────────────────────────── */}
        <section className="py-28 px-6 bg-[#E2CDB4] relative overflow-hidden">
          <div className="max-w-5xl mx-auto">
            <Reveal className="mb-16">
              <span className="label text-[#C0442C]">Servicios</span>
              <h2 className="mt-3 max-w-xl">¿Qué podemos ofrecer?</h2>
              <p className="mt-4 max-w-xl" style={{ color: "#5A6A7A" }}>
                Para gobiernos, legislaturas, educadores, ONGs, empresas y asociaciones profesionales.
              </p>
            </Reveal>

            <div className="flex flex-col gap-px bg-[#D8C9B3]">
              {services.map((s, i) => (
                <Reveal key={s.title} delay={i * 0.08}>
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

            <Reveal className="mt-10">
              <Link
                href="/que-ofrecemos"
                className="text-[#C0442C] font-semibold hover:underline text-sm"
                style={{ fontFamily: "var(--font-jakarta)" }}
              >
                Ver más →
              </Link>
            </Reveal>
          </div>
        </section>

        {/* ── Navy manifesto callout ─────────────────────── */}
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

        {/* ── News / Actualidad ──────────────────────────── */}
        <section className="py-28 px-6 bg-[#EBD7BE]">
          <div className="max-w-5xl mx-auto">
            <Reveal className="flex items-end justify-between mb-14">
              <div>
                <span className="label text-[#C0442C]">Actualidad</span>
                <h2 className="mt-2">Noticias</h2>
              </div>
              <Link
                href="/blog"
                className="text-[#C0442C] text-sm font-semibold hover:underline hidden sm:block"
                style={{ fontFamily: "var(--font-jakarta)" }}
              >
                Ver todas →
              </Link>
            </Reveal>

            <div className="grid grid-cols-1 md:grid-cols-5 gap-6">
              {/* Featured card */}
              <Reveal className="md:col-span-3">
                <Link href={`/blog/${featured.slug}`} className="block h-full">
                  <div className="group rounded-lg overflow-hidden transition-all duration-300 h-full flex flex-col relative bg-[#1B3A5C]">
                    {/* TODO: insert real product demo / workshop photo here */}
                    <div className="relative h-52 overflow-hidden flex-shrink-0 bg-[#0f2238] flex items-end">
                      <div className="absolute bottom-4 left-6">
                        <span className="label text-blue-300">{featured.es.tag}</span>
                      </div>
                    </div>
                    <div className="p-8 flex flex-col gap-3 flex-1">
                      <div className="flex items-center gap-2 flex-wrap">
                        {featured.es.author && (
                          <>
                            <span className="text-xs font-semibold text-blue-300" style={{ fontFamily: "var(--font-jakarta)" }}>
                              {featured.es.author}
                            </span>
                            <span className="w-1 h-1 rounded-full bg-[#C0442C]" />
                          </>
                        )}
                        <span className="text-xs text-blue-400" style={{ fontFamily: "var(--font-jakarta)" }}>
                          {featured.es.date}
                        </span>
                      </div>
                      <h3 className="text-xl text-white group-hover:text-blue-200 transition-colors duration-200 leading-snug">
                        {featured.es.title}
                      </h3>
                      {featured.es.excerpt && (
                        <p className="text-sm leading-relaxed text-blue-200">
                          {featured.es.excerpt}
                        </p>
                      )}
                    </div>
                  </div>
                </Link>
              </Reveal>

              {/* Secondary cards */}
              <div className="md:col-span-2 flex flex-col gap-5">
                {secondary.map((a, i) => (
                  <Reveal key={a.slug} delay={i * 0.08}>
                    <Link href={`/blog/${a.slug}`} className="block">
                      <div className="group bg-[#EBD7BE] border border-[#D8C9B3] rounded-lg p-6 flex flex-col gap-2 transition-all duration-300 hover:border-[#C0442C]">
                        <div className="flex items-center gap-2 flex-wrap">
                          {a.es.author && (
                            <>
                              <span className="text-xs font-semibold text-[#1B3A5C] leading-tight" style={{ fontFamily: "var(--font-jakarta)" }}>
                                {a.es.author}
                              </span>
                              <span className="w-1 h-1 rounded-full bg-[#C0442C] flex-shrink-0" />
                            </>
                          )}
                          <span className="text-xs text-[#9CA3AF]" style={{ fontFamily: "var(--font-jakarta)" }}>
                            {a.es.date}
                          </span>
                        </div>
                        <h3 className="text-base leading-snug group-hover:text-[#C0442C] transition-colors duration-200">
                          {a.es.title}
                        </h3>
                        {a.es.excerpt && (
                          <p className="text-xs leading-relaxed" style={{ color: "#7A8A9A" }}>
                            {a.es.excerpt}
                          </p>
                        )}
                      </div>
                    </Link>
                  </Reveal>
                ))}
              </div>
            </div>

            <Reveal className="mt-8 sm:hidden">
              <Link href="/blog" className="text-[#C0442C] text-sm font-semibold hover:underline" style={{ fontFamily: "var(--font-jakarta)" }}>
                Ver todas las noticias →
              </Link>
            </Reveal>
          </div>
        </section>

        {/* ── Team + Contact teasers ─────────────────────── */}
        <section className="py-20 px-6 bg-[#E2CDB4] border-t border-[#D8C9B3]">
          <div className="max-w-5xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-6">
            <Reveal direction="left">
              <div className="group bg-[#EBD7BE] border border-[#D8C9B3] rounded-lg p-10 flex flex-col gap-4 h-full hover:border-[#1B3A5C] transition-all duration-300">
                <span className="label text-[#6B7280]">Nosotros</span>
                <h3>Quiénes somos</h3>
                <p style={{ color: "#5A6A7A" }}>
                  Proyecto Disonante está liderado por Carolina Fernández Blanco y Hernán Charosky.
                </p>
                <Link
                  href="/quienes-somos"
                  className="text-[#C0442C] text-sm font-semibold hover:underline mt-auto self-start group-hover:translate-x-1 transition-transform duration-200"
                  style={{ fontFamily: "var(--font-jakarta)" }}
                >
                  Conoce más →
                </Link>
              </div>
            </Reveal>

            <Reveal direction="right">
              <div className="group bg-[#1B3A5C] rounded-lg p-10 flex flex-col gap-4 h-full hover:bg-[#152d47] transition-colors duration-300">
                <span className="label text-blue-300">Diálogo</span>
                <h3 className="text-white">Contáctanos</h3>
                <p className="text-blue-200" style={{ fontFamily: "var(--font-source)" }}>
                  Nos interesa conocer tus inquietudes y propuestas.
                </p>
                <Link
                  href="/contacto"
                  className="text-white text-sm font-semibold hover:underline mt-auto self-start group-hover:translate-x-1 transition-transform duration-200"
                  style={{ fontFamily: "var(--font-jakarta)" }}
                >
                  Conoce más →
                </Link>
              </div>
            </Reveal>
          </div>
        </section>

        {/* ── Newsletter ─────────────────────────────────── */}
        <section className="py-20 px-6 bg-[#EBD7BE] border-t border-[#D8C9B3] relative overflow-hidden">
          <Reveal className="max-w-xl mx-auto text-center flex flex-col gap-6">
            <span className="label text-[#C0442C]">Newsletter</span>
            <h2>Suscríbete</h2>
            <p style={{ color: "#5A6A7A" }}>Ingresa tu correo para recibir novedades.</p>
            <NewsletterForm />
          </Reveal>
        </section>

      </main>
      <Footer lang="es" />
    </>
  );
}
