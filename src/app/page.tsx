import Link from "next/link";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import Reveal from "@/components/Reveal";
import HeroText from "@/components/HeroText";
import ImpactNumbers from "@/components/ImpactNumbers";
import GeometricAccent from "@/components/GeometricAccent";

const clients = [
  "National Democratic Institute",
  "Minerva University",
  "Rios NGO",
  "CEPAL / Uruguay",
];

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
    title: "Acompañamiento",
    desc: "Las propuestas de política pública y los proyectos legislativos pueden incrementar su legitimidad incorporando pluralidad, deliberación y evidencia.",
  },
];

const recentActivities = [
  {
    title: "Taller: Conversaciones difíciles",
    client: "Minerva University",
    date: "Noviembre 2025",
    cat: "Taller",
    featured: true,
  },
  {
    title: "Libertad de expresión en redes sociales",
    client: "Rios NGO",
    date: "Diciembre 2024",
    cat: "Charla",
    featured: false,
  },
  {
    title: "Legislación y Diálogo",
    client: "NDI",
    date: "Julio 2024",
    cat: "Formación",
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
          {/* Geometric accent — top right, very faint */}
          <div className="absolute -top-10 -right-16 pointer-events-none">
            <GeometricAccent size={520} opacity={0.045} color="#1B3A5C" />
          </div>
          {/* Geometric accent — bottom left, terracotta */}
          <div className="absolute -bottom-20 -left-20 pointer-events-none rotate-180">
            <GeometricAccent size={300} opacity={0.03} color="#C0442C" />
          </div>

          <div className="max-w-4xl mx-auto text-center flex flex-col items-center gap-8 relative z-10">
            <HeroText />
            <Reveal delay={0.55}>
              <div className="flex flex-col sm:flex-row gap-4 mt-2">
                <Link
                  href="/que-ofrecemos"
                  className="bg-[#C0442C] text-white px-9 py-3.5 rounded-full font-semibold hover:bg-[#a03824] transition-all duration-200 text-sm tracking-wide"
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

        {/* ── Clients bar ────────────────────────────────── */}
        <section className="bg-white border-y border-[#E8E2D9] py-9 px-6">
          <div className="max-w-5xl mx-auto flex flex-col items-center gap-5">
            <Reveal>
              <p className="label text-[#9CA3AF]">Trabajamos con</p>
            </Reveal>
            <div className="flex flex-wrap justify-center gap-x-12 gap-y-3">
              {clients.map((c, i) => (
                <Reveal key={c} delay={i * 0.08}>
                  <span
                    className="text-[#1B3A5C] font-semibold text-sm md:text-base opacity-70 hover:opacity-100 transition-opacity"
                    style={{ fontFamily: "var(--font-jakarta)" }}
                  >
                    {c}
                  </span>
                </Reveal>
              ))}
            </div>
          </div>
        </section>

        {/* ── Problem + Solution ─────────────────────────── */}
        <section className="py-28 px-6 bg-[#FAF7F2] relative overflow-hidden">
          <div className="absolute bottom-0 right-0 pointer-events-none opacity-[0.035]">
            <GeometricAccent size={380} color="#C0442C" />
          </div>
          <div className="max-w-5xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-20 items-center">
            <Reveal direction="left">
              <div className="flex flex-col gap-6">
                <span className="label text-[#C0442C]">El problema</span>
                <h2>La polarización es un desafío para la gobernanza democrática</h2>
                <p className="text-lg leading-relaxed" style={{ color: "#5A6A7A" }}>
                  La polarización es una tendencia que impacta globalmente en la conversación
                  pública. Cada vez es más difícil la discusión de asuntos públicos —desde una
                  película o una canción hasta el contenido de un proyecto de ley.
                </p>
                <p className="leading-relaxed italic" style={{ color: "#7A8A9A", fontFamily: "var(--font-lora)" }}>
                  "Esta polarización es, en algún sentido tentadora, toca alguna fibra íntima
                  de nuestras convicciones pero vuelve estéril cualquier debate."
                </p>
              </div>
            </Reveal>

            <Reveal direction="right">
              <div
                className="bg-white border border-[#E8E2D9] rounded-3xl p-10 flex flex-col gap-5 shadow-sm relative overflow-hidden"
              >
                <div className="absolute top-0 right-0 w-32 h-32 bg-[#FAF7F2] rounded-bl-full" />
                <span className="label text-[#C0442C] relative z-10">Nuestra propuesta</span>
                <h3 className="relative z-10">Dispositivos que mejoran la conversación pública</h3>
                <p className="text-sm relative z-10" style={{ color: "#5A6A7A" }}>
                  Proyecto Disonante es una propuesta para poner en práctica dispositivos que mejoren
                  la conversación pública a través del respeto, la lógica argumentativa, la
                  incorporación de evidencia, la diversidad y el pluralismo.
                </p>
                <Link
                  href="/que-ofrecemos"
                  className="text-[#C0442C] text-sm font-semibold hover:underline mt-1 relative z-10 self-start"
                  style={{ fontFamily: "var(--font-jakarta)" }}
                >
                  Conocer el proyecto →
                </Link>
              </div>
            </Reveal>
          </div>
        </section>

        {/* ── Impact Numbers ─────────────────────────────── */}
        <ImpactNumbers />

        {/* ── Services ───────────────────────────────────── */}
        <section className="py-28 px-6 bg-white relative overflow-hidden">
          <div className="max-w-5xl mx-auto">
            <Reveal className="mb-16">
              <span className="label text-[#C0442C]">Servicios</span>
              <h2 className="mt-3 max-w-xl">¿Qué ofrecemos?</h2>
              <p className="mt-4 max-w-xl" style={{ color: "#5A6A7A" }}>
                Para gobiernos, legislaturas, educadores, ONGs, empresas y asociaciones profesionales.
              </p>
            </Reveal>

            <div className="flex flex-col gap-px bg-[#E8E2D9]">
              {services.map((s, i) => (
                <Reveal key={s.title} delay={i * 0.1}>
                  <div className="bg-white group flex flex-col md:flex-row gap-6 md:gap-12 md:items-start p-8 md:p-10 hover:bg-[#FAF7F2] transition-colors duration-200">
                    <span
                      className="text-4xl font-extrabold text-[#E8E2D9] group-hover:text-[#C0442C] transition-colors duration-200 flex-shrink-0 w-12"
                      style={{ fontFamily: "var(--font-jakarta)", letterSpacing: "-0.04em" }}
                    >
                      {s.number}
                    </span>
                    <div className="flex flex-col gap-2">
                      <h3 className="group-hover:text-[#C0442C] transition-colors duration-200">{s.title}</h3>
                      <p className="text-sm leading-relaxed" style={{ color: "#5A6A7A" }}>{s.desc}</p>
                    </div>
                    <span
                      className="md:ml-auto self-center text-[#E8E2D9] group-hover:text-[#C0442C] group-hover:translate-x-1 transition-all duration-200 text-xl flex-shrink-0"
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
                Ver todos los servicios →
              </Link>
            </Reveal>
          </div>
        </section>

        {/* ── Manifesto callout ──────────────────────────── */}
        <section className="bg-[#1B3A5C] py-24 px-6 relative overflow-hidden">
          <div className="absolute -left-16 top-1/2 -translate-y-1/2 pointer-events-none opacity-[0.06]">
            <GeometricAccent size={400} color="white" />
          </div>
          <Reveal className="max-w-3xl mx-auto text-center flex flex-col gap-7 relative z-10">
            <span className="label text-blue-400">Nuestra convicción</span>
            <h2 className="text-white">
              Las propuestas ganan legitimidad cuando incorporan pluralidad, deliberación y evidencia
            </h2>
            <p className="text-blue-200 text-lg leading-relaxed" style={{ fontFamily: "var(--font-lora)" }}>
              Los proyectos legislativos, las agendas de reformas y las políticas públicas pueden
              incrementar su eficacia en la medida que incorporen estos procesos de discusión.
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

        {/* ── Recent Activities — editorial layout ───────── */}
        <section className="py-28 px-6 bg-[#FAF7F2]">
          <div className="max-w-5xl mx-auto">
            <Reveal className="flex items-end justify-between mb-14">
              <div>
                <span className="label text-[#C0442C]">Actividades recientes</span>
                <h2 className="mt-2">Lo que hacemos</h2>
              </div>
              <Link
                href="/actividades"
                className="text-[#C0442C] text-sm font-semibold hover:underline hidden sm:block"
                style={{ fontFamily: "var(--font-jakarta)" }}
              >
                Ver todas →
              </Link>
            </Reveal>

            <div className="grid grid-cols-1 md:grid-cols-5 gap-6">
              {/* Featured large card */}
              {recentActivities.filter(a => a.featured).map((a) => (
                <Reveal key={a.title} className="md:col-span-3">
                  <div className="group bg-white border border-[#E8E2D9] rounded-3xl overflow-hidden hover:shadow-lg transition-all duration-300 h-full flex flex-col">
                    <div className="bg-[#E8E2D9] h-56 group-hover:bg-[#D8D2C9] transition-colors duration-300" />
                    <div className="p-8 flex flex-col gap-3 flex-1">
                      <div className="flex items-center gap-3">
                        <span
                          className="label text-[#C0442C]"
                        >
                          {a.cat}
                        </span>
                        <span className="w-1 h-1 rounded-full bg-[#C0442C]" />
                        <span className="text-xs text-[#9CA3AF]" style={{ fontFamily: "var(--font-jakarta)" }}>
                          {a.date}
                        </span>
                      </div>
                      <h3 className="text-2xl group-hover:text-[#C0442C] transition-colors duration-200">
                        {a.title}
                      </h3>
                      <p className="text-sm" style={{ color: "#7A8A9A", fontFamily: "var(--font-jakarta)" }}>
                        Con {a.client}
                      </p>
                    </div>
                  </div>
                </Reveal>
              ))}

              {/* Small cards */}
              <div className="md:col-span-2 flex flex-col gap-6">
                {recentActivities.filter(a => !a.featured).map((a, i) => (
                  <Reveal key={a.title} delay={i * 0.1}>
                    <div className="group bg-white border border-[#E8E2D9] rounded-3xl overflow-hidden hover:shadow-md transition-all duration-300 flex flex-col">
                      <div className="bg-[#E8E2D9] h-28 group-hover:bg-[#D8D2C9] transition-colors duration-300" />
                      <div className="p-6 flex flex-col gap-2">
                        <div className="flex items-center gap-2">
                          <span className="label text-[#C0442C]">{a.cat}</span>
                          <span className="w-1 h-1 rounded-full bg-[#C0442C]" />
                          <span className="text-xs text-[#9CA3AF]" style={{ fontFamily: "var(--font-jakarta)" }}>
                            {a.date}
                          </span>
                        </div>
                        <h3 className="text-base group-hover:text-[#C0442C] transition-colors duration-200">
                          {a.title}
                        </h3>
                        <p className="text-xs" style={{ color: "#7A8A9A", fontFamily: "var(--font-jakarta)" }}>
                          Con {a.client}
                        </p>
                      </div>
                    </div>
                  </Reveal>
                ))}
              </div>
            </div>

            <Reveal className="mt-8 sm:hidden">
              <Link
                href="/actividades"
                className="text-[#C0442C] text-sm font-semibold hover:underline"
                style={{ fontFamily: "var(--font-jakarta)" }}
              >
                Ver todas las actividades →
              </Link>
            </Reveal>
          </div>
        </section>

        {/* ── Contact CTA ────────────────────────────────── */}
        <section className="py-24 px-6 bg-white border-t border-[#E8E2D9]">
          <Reveal className="max-w-2xl mx-auto text-center flex flex-col gap-6">
            <span className="label text-[#C0442C]">Contacto</span>
            <h2>¿Hablamos?</h2>
            <p className="text-lg" style={{ color: "#5A6A7A" }}>
              Si tu organización enfrenta decisiones difíciles o diálogos bloqueados,
              escribinos. Evaluamos cada caso sin costo.
            </p>
            <Link
              href="/contacto"
              className="self-center bg-[#C0442C] text-white px-9 py-3.5 rounded-full font-semibold hover:bg-[#a03824] transition-colors text-sm tracking-wide"
              style={{ fontFamily: "var(--font-jakarta)" }}
            >
              Contactar
            </Link>
          </Reveal>
        </section>

      </main>
      <Footer lang="es" />
    </>
  );
}
