import Link from "next/link";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import Reveal from "@/components/Reveal";
import HeroText from "@/components/HeroText";
import GeometricAccent from "@/components/GeometricAccent";
import ClientMarquee from "@/components/ClientMarquee";
import NewsletterForm from "@/components/NewsletterForm";

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

const news = [
  {
    title: "Proyecto Disonante en la Conferencia Regional de CEPAL: derechos sexuales y reproductivos y polarización",
    author: "Carolina Fernández Blanco",
    date: "29 de septiembre de 2026",
    excerpt: "En agosto Proyecto Disonante participó en dos actividades vinculadas a los derechos sexuales y reproductivos.",
    featured: true,
  },
  {
    title: "Newsletter con las actividades de 2024",
    author: "",
    date: "27 de febrero de 2025",
    excerpt: "Durante su primer año Proyecto Disonante participó de interesantes propuestas.",
    featured: false,
  },
  {
    title: "Encrucijadas de la Libertad de Expresión en redes sociales",
    author: "Alianza Regional por la Libre Expresión e Información",
    date: "15 de diciembre de 2024",
    excerpt: "",
    featured: false,
  },
  {
    title: "Financiamiento de la política",
    author: "",
    date: "15 de diciembre de 2024",
    excerpt: "Polarización ideológica y partidista en la conversación pública.",
    featured: false,
  },
];

export default function HomePage() {
  return (
    <>
      <Navbar lang="es" />
      <main>

        {/* ── Hero ───────────────────────────────────────── */}
        <section className="relative bg-[#FAF7F2] pt-24 pb-28 px-6 overflow-hidden">
          <div className="absolute -top-10 -right-16 pointer-events-none">
            <GeometricAccent size={560} opacity={0.08} color="#1B3A5C" />
          </div>
          <div className="absolute -bottom-20 -left-20 pointer-events-none rotate-180">
            <GeometricAccent size={320} opacity={0.06} color="#C0442C" />
          </div>
          <div className="max-w-4xl mx-auto text-center flex flex-col items-center gap-8 relative z-10">
            <HeroText />
            <Reveal delay={0.55}>
              <div className="flex flex-col sm:flex-row gap-4 mt-2">
                <Link
                  href="/que-ofrecemos"
                  className="bg-[#C0442C] text-white px-9 py-3.5 rounded-full font-semibold hover:bg-[#a03824] transition-all duration-200 text-sm tracking-wide shadow-sm hover:shadow-md"
                  style={{ fontFamily: "var(--font-jakarta)" }}
                >
                  ¿Qué ofrecemos?
                </Link>
                <Link
                  href="/actividades"
                  className="border-2 border-[#1B3A5C] text-[#1B3A5C] px-9 py-3.5 rounded-full font-semibold hover:bg-[#1B3A5C] hover:text-white transition-all duration-200 text-sm tracking-wide"
                  style={{ fontFamily: "var(--font-jakarta)" }}
                >
                  Ver actividades
                </Link>
              </div>
            </Reveal>
          </div>
        </section>

        {/* ── Clients marquee ─────────────────────────────── */}
        <ClientMarquee />

        {/* ── Problem — full copy ────────────────────────── */}
        <section className="py-28 px-6 bg-[#FAF7F2] relative overflow-hidden">
          <div className="absolute bottom-0 right-0 pointer-events-none">
            <GeometricAccent size={420} opacity={0.07} color="#C0442C" />
          </div>
          <div className="max-w-5xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-20 items-start">
            <Reveal direction="left">
              <div className="flex flex-col gap-6">
                <span className="label text-[#C0442C]">El problema</span>
                <h2>La polarización es un desafío para la gobernanza democrática</h2>
                <p style={{ color: "#5A6A7A" }}>
                  La polarización es una tendencia que impacta globalmente en la conversación pública. Cada vez es más difícil la discusión de asuntos públicos —desde una película o una canción hasta contenido de un proyecto de ley o de una política pública. Se ponen en juego inmediatamente identidades políticas, culturales y morales y el tema más nimio es un campo de batalla.
                </p>
                <p style={{ color: "#5A6A7A" }}>
                  Este fenómeno es un desafío para la gobernanza democrática. Los gobiernos de todos los niveles, los legisladores y hasta los jueces enfrentan el desafío de que sus propuestas y decisiones se procesen en clave de batalla cultural, política o moral. El periodismo y las Organizaciones de la Sociedad Civil atraviesan el mismo problema con sus agendas de intervención en la escena pública. De este modo, cualquier iniciativa está o bien etiquetada desde su origen, o bien asimilada con posterioridad a un bando u otro de los antagonismos que atraviesan las distintas sociedades. Esto, a su vez, genera un espiral de intolerancia que dificulta el debate, la convivencia, y en algunos casos, fomenta el autoritarismo.
                </p>

                {/* Pull quote with large decorative mark */}
                <div className="relative pl-6 border-l-4 border-[#C0442C] mt-2">
                  <span
                    className="absolute -top-6 -left-2 text-8xl leading-none text-[#C0442C] select-none pointer-events-none"
                    style={{ fontFamily: "var(--font-jakarta)", opacity: 0.18 }}
                    aria-hidden
                  >
                    "
                  </span>
                  <p className="italic text-lg" style={{ color: "#4A5568", fontFamily: "var(--font-lora)" }}>
                    Esta polarización es, en algún sentido tentadora, toca alguna fibra íntima de nuestras convicciones pero vuelve estéril cualquier debate.
                  </p>
                </div>
              </div>
            </Reveal>

            <Reveal direction="right">
              <div className="flex flex-col gap-8">
                <div className="bg-white border border-[#E8E2D9] rounded-3xl p-10 flex flex-col gap-5 shadow-sm hover:shadow-md transition-shadow duration-300 relative overflow-hidden">
                  <div className="absolute top-0 right-0 w-32 h-32 bg-[#FAF7F2] rounded-bl-full" />
                  <div className="absolute -bottom-8 -right-8 pointer-events-none opacity-[0.06]">
                    <GeometricAccent size={160} color="#1B3A5C" />
                  </div>
                  <span className="label text-[#C0442C] relative z-10">Nuestra propuesta</span>
                  <p className="relative z-10" style={{ color: "#5A6A7A" }}>
                    Proyecto Disonante es una propuesta para poner en práctica dispositivos que mejoren la conversación pública a través del respeto, la lógica argumentativa, la incorporación de evidencia, la diversidad y el pluralismo.
                  </p>
                  <p className="relative z-10 text-sm" style={{ color: "#5A6A7A" }}>
                    Las propuestas de política pública, los proyectos legislativos, las agendas de reformas, pueden incrementar su legitimidad y su eficacia en la medida en que incorporen la pluralidad, la deliberación y la evidencia en los procesos de discusión.
                  </p>
                  <Link
                    href="/que-ofrecemos"
                    className="text-[#C0442C] text-sm font-semibold hover:underline mt-1 relative z-10 self-start"
                    style={{ fontFamily: "var(--font-jakarta)" }}
                  >
                    Conocer el proyecto →
                  </Link>
                </div>

                <div className="flex flex-col gap-4 px-2">
                  <span className="label text-[#9CA3AF]">¿A quiénes se dirige nuestro trabajo?</span>
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
              Una conversación pública sujeta a reglas de respeto y argumentación puede ser
              más productiva para una mejor gobernanza.
            </p>
          </Reveal>
        </section>

        {/* ── Services ───────────────────────────────────── */}
        <section className="py-28 px-6 bg-white relative overflow-hidden">
          <div className="absolute -left-20 bottom-0 pointer-events-none">
            <GeometricAccent size={360} opacity={0.05} color="#1B3A5C" />
          </div>
          <div className="max-w-5xl mx-auto">
            <Reveal className="mb-16">
              <span className="label text-[#C0442C]">Servicios</span>
              <h2 className="mt-3 max-w-xl">¿Qué podemos ofrecer?</h2>
              <p className="mt-4 max-w-xl" style={{ color: "#5A6A7A" }}>
                Para gobiernos, legislaturas, educadores, ONGs, empresas y asociaciones profesionales.
              </p>
            </Reveal>

            <div className="flex flex-col gap-px bg-[#E8E2D9]">
              {services.map((s, i) => (
                <Reveal key={s.title} delay={i * 0.08}>
                  <div className="bg-white group flex flex-col md:flex-row gap-6 md:gap-12 md:items-start p-8 md:p-10 hover:bg-[#FAF7F2] transition-colors duration-200">
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
          <div className="absolute -left-16 top-1/2 -translate-y-1/2 pointer-events-none opacity-[0.07]">
            <GeometricAccent size={420} color="white" />
          </div>
          <div className="absolute right-0 bottom-0 pointer-events-none opacity-[0.05]">
            <GeometricAccent size={280} color="white" />
          </div>
          <Reveal className="max-w-3xl mx-auto text-center flex flex-col gap-7 relative z-10">
            <span className="label text-blue-400">Nuestra convicción</span>
            <h2 className="text-white">
              Tanto la legitimidad como la eficacia de las propuestas se fortalecerán si se las discute con dispositivos adecuados
            </h2>
            <p className="text-blue-200 text-lg leading-relaxed" style={{ fontFamily: "var(--font-lora)" }}>
              Dispositivos que las preserven del secuestro por identidades que las exceden.
            </p>
            <Link
              href="/contacto"
              className="self-center bg-white text-[#1B3A5C] px-9 py-3.5 rounded-full font-semibold hover:bg-[#FAF7F2] transition-colors text-sm tracking-wide shadow-sm"
              style={{ fontFamily: "var(--font-jakarta)" }}
            >
              Hablar con el equipo
            </Link>
          </Reveal>
        </section>

        {/* ── News / Actualidad ──────────────────────────── */}
        <section className="py-28 px-6 bg-[#FAF7F2]">
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
              {/* Featured card — dark editorial style */}
              {news.filter(n => n.featured).map((n) => (
                <Reveal key={n.title} className="md:col-span-3">
                  <div className="group rounded-3xl overflow-hidden hover:shadow-xl transition-all duration-300 h-full flex flex-col relative bg-[#1B3A5C] hover:scale-[1.01]">
                    {/* Dark image placeholder with motif */}
                    <div className="relative h-52 overflow-hidden flex-shrink-0">
                      <div className="absolute inset-0 bg-gradient-to-br from-[#1B3A5C] to-[#0f2238]" />
                      <div className="absolute -right-8 -top-8 opacity-10">
                        <GeometricAccent size={200} color="white" />
                      </div>
                      <div className="absolute bottom-4 left-6">
                        <span className="label text-blue-300">CEPAL</span>
                      </div>
                    </div>
                    <div className="p-8 flex flex-col gap-3 flex-1">
                      <div className="flex items-center gap-2 flex-wrap">
                        {n.author && (
                          <>
                            <span className="text-xs font-semibold text-blue-300" style={{ fontFamily: "var(--font-jakarta)" }}>
                              {n.author}
                            </span>
                            <span className="w-1 h-1 rounded-full bg-[#C0442C]" />
                          </>
                        )}
                        <span className="text-xs text-blue-400" style={{ fontFamily: "var(--font-jakarta)" }}>
                          {n.date}
                        </span>
                      </div>
                      <h3 className="text-xl text-white group-hover:text-blue-200 transition-colors duration-200 leading-snug">
                        {n.title}
                      </h3>
                      {n.excerpt && (
                        <p className="text-sm leading-relaxed text-blue-200">
                          {n.excerpt}
                        </p>
                      )}
                    </div>
                  </div>
                </Reveal>
              ))}

              {/* Secondary cards */}
              <div className="md:col-span-2 flex flex-col gap-5">
                {news.filter(n => !n.featured).map((n, i) => (
                  <Reveal key={n.title} delay={i * 0.08}>
                    <div className="group bg-white border border-[#E8E2D9] rounded-3xl p-6 flex flex-col gap-2 hover:shadow-md hover:scale-[1.01] transition-all duration-300">
                      <div className="flex items-center gap-2 flex-wrap">
                        {n.author && (
                          <>
                            <span className="text-xs font-semibold text-[#1B3A5C] leading-tight" style={{ fontFamily: "var(--font-jakarta)" }}>
                              {n.author}
                            </span>
                            <span className="w-1 h-1 rounded-full bg-[#C0442C] flex-shrink-0" />
                          </>
                        )}
                        <span className="text-xs text-[#9CA3AF]" style={{ fontFamily: "var(--font-jakarta)" }}>
                          {n.date}
                        </span>
                      </div>
                      <h3 className="text-base leading-snug group-hover:text-[#C0442C] transition-colors duration-200">
                        {n.title}
                      </h3>
                      {n.excerpt && (
                        <p className="text-xs leading-relaxed" style={{ color: "#7A8A9A" }}>
                          {n.excerpt}
                        </p>
                      )}
                    </div>
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
        <section className="py-20 px-6 bg-white border-t border-[#E8E2D9]">
          <div className="max-w-5xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-6">
            <Reveal direction="left">
              <div className="group bg-[#FAF7F2] border border-[#E8E2D9] rounded-3xl p-10 flex flex-col gap-4 h-full hover:border-[#1B3A5C] hover:shadow-md transition-all duration-300 relative overflow-hidden">
                <div className="absolute -bottom-8 -right-8 pointer-events-none opacity-[0.06]">
                  <GeometricAccent size={160} color="#1B3A5C" />
                </div>
                <span className="label text-[#9CA3AF]">Nosotros</span>
                <h3>Quiénes somos</h3>
                <p style={{ color: "#5A6A7A" }}>
                  Proyecto Disonante está liderado por Carolina Fernández Blanco y Hernán Charosky.
                </p>
                <Link
                  href="/quienes-somos"
                  className="text-[#C0442C] text-sm font-semibold hover:underline mt-auto self-start group-hover:translate-x-1 transition-transform duration-200"
                  style={{ fontFamily: "var(--font-jakarta)" }}
                >
                  Conocé más →
                </Link>
              </div>
            </Reveal>

            <Reveal direction="right">
              <div className="group bg-[#1B3A5C] rounded-3xl p-10 flex flex-col gap-4 h-full hover:bg-[#152d47] transition-colors duration-300 relative overflow-hidden">
                <div className="absolute -bottom-8 -right-8 pointer-events-none opacity-[0.08]">
                  <GeometricAccent size={160} color="white" />
                </div>
                <span className="label text-blue-400">Diálogo</span>
                <h3 className="text-white">Contactanos</h3>
                <p className="text-blue-200" style={{ fontFamily: "var(--font-lora)" }}>
                  Nos interesa conocer tus inquietudes y propuestas.
                </p>
                <Link
                  href="/contacto"
                  className="text-white text-sm font-semibold hover:underline mt-auto self-start group-hover:translate-x-1 transition-transform duration-200"
                  style={{ fontFamily: "var(--font-jakarta)" }}
                >
                  Conocé más →
                </Link>
              </div>
            </Reveal>
          </div>
        </section>

        {/* ── Newsletter ─────────────────────────────────── */}
        <section className="py-20 px-6 bg-[#FAF7F2] border-t border-[#E8E2D9] relative overflow-hidden">
          <div className="absolute right-0 top-0 pointer-events-none">
            <GeometricAccent size={300} opacity={0.06} color="#1B3A5C" />
          </div>
          <Reveal className="max-w-xl mx-auto text-center flex flex-col gap-6 relative z-10">
            <span className="label text-[#C0442C]">Newsletter</span>
            <h2>Suscribite</h2>
            <p style={{ color: "#5A6A7A" }}>Ingresá tu correo para recibir novedades.</p>
            <NewsletterForm />
          </Reveal>
        </section>

      </main>
      <Footer lang="es" />
    </>
  );
}
