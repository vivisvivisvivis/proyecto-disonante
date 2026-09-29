import Link from "next/link";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import Reveal from "@/components/Reveal";
import HeroText from "@/components/HeroText";

const clients = [
  "National Democratic Institute",
  "Minerva University",
  "Rios NGO",
  "CEPAL / Uruguay",
];

const services = [
  {
    title: "Diagnóstico y soluciones",
    desc: "Evaluación y propuestas de solución de situaciones en donde el diálogo y la toma de decisiones colectivas se encuentra bloqueada.",
  },
  {
    title: "Formación",
    desc: "Formación en distintos niveles relativas a prácticas deliberativas y diálogo racional.",
  },
  {
    title: "Acompañamiento",
    desc: "Las propuestas de política pública, los proyectos legislativos y las agendas de reformas pueden incrementar su legitimidad y eficacia incorporando pluralidad, deliberación y evidencia.",
  },
];

const recentActivities = [
  { title: "Taller: Conversaciones difíciles", client: "Minerva University", date: "Nov 2025", cat: "Taller" },
  { title: "Libertad de expresión en redes sociales", client: "Rios NGO", date: "Dic 2024", cat: "Charla" },
  { title: "Legislación y Diálogo", client: "NDI", date: "Jul 2024", cat: "Formación" },
];

export default function HomePage() {
  return (
    <>
      <Navbar lang="es" />
      <main>
        {/* Hero */}
        <section className="bg-[#FAF7F2] pt-20 pb-24 px-6">
          <div className="max-w-4xl mx-auto text-center flex flex-col items-center gap-6">
            <HeroText />
            <Reveal delay={0.5}>
              <div className="flex flex-col sm:flex-row gap-4 mt-2">
                <Link
                  href="/que-ofrecemos"
                  className="bg-[#C0442C] text-white px-8 py-3 rounded-full font-semibold hover:bg-[#a03824] transition-colors"
                >
                  ¿Qué ofrecemos?
                </Link>
                <Link
                  href="/actividades"
                  className="border border-[#1B3A5C] text-[#1B3A5C] px-8 py-3 rounded-full font-semibold hover:bg-[#1B3A5C] hover:text-white transition-colors"
                >
                  Ver actividades
                </Link>
              </div>
            </Reveal>
          </div>
        </section>

        {/* Clients bar */}
        <section className="bg-white border-y border-[#E8E2D9] py-8 px-6">
          <div className="max-w-5xl mx-auto flex flex-col items-center gap-4">
            <Reveal>
              <p className="text-xs uppercase tracking-widest text-[#6B7280] font-semibold">
                Trabajamos con
              </p>
            </Reveal>
            <div className="flex flex-wrap justify-center gap-x-10 gap-y-3">
              {clients.map((c, i) => (
                <Reveal key={c} delay={i * 0.1}>
                  <span className="text-[#1B3A5C] font-semibold text-sm md:text-base">{c}</span>
                </Reveal>
              ))}
            </div>
          </div>
        </section>

        {/* Problem + Solution */}
        <section className="py-24 px-6 bg-[#FAF7F2]">
          <div className="max-w-5xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-16 items-center">
            <Reveal direction="left">
              <div className="flex flex-col gap-6">
                <h2 className="text-3xl md:text-4xl font-bold text-[#1B3A5C]">
                  La polarización es un desafío para la gobernanza democrática
                </h2>
                <p className="text-[#6B7280] leading-relaxed">
                  La polarización es una tendencia que impacta globalmente en la conversación pública. Cada vez es más difícil la discusión de asuntos públicos —desde una película o una canción hasta el contenido de un proyecto de ley o de una política pública.
                </p>
                <p className="text-[#6B7280] leading-relaxed">
                  Esta polarización es, en algún sentido tentadora, toca alguna fibra íntima de nuestras convicciones pero vuelve estéril cualquier debate.
                </p>
              </div>
            </Reveal>
            <Reveal direction="right">
              <div className="bg-white border border-[#E8E2D9] rounded-2xl p-8 flex flex-col gap-4">
                <span className="text-[#C0442C] text-xs font-semibold uppercase tracking-widest">Nuestra propuesta</span>
                <h3 className="text-xl font-bold text-[#1B3A5C]">
                  Dispositivos que mejoran la conversación pública
                </h3>
                <p className="text-[#6B7280] leading-relaxed text-sm">
                  Proyecto Disonante es una propuesta para poner en práctica dispositivos que mejoren la conversación pública a través del respeto, la lógica argumentativa, la incorporación de evidencia, la diversidad y el pluralismo.
                </p>
                <Link href="/que-ofrecemos" className="text-[#C0442C] text-sm font-semibold hover:underline mt-2">
                  Conocer el proyecto →
                </Link>
              </div>
            </Reveal>
          </div>
        </section>

        {/* Services */}
        <section className="py-24 px-6 bg-white border-t border-[#E8E2D9]">
          <div className="max-w-5xl mx-auto">
            <Reveal className="mb-12 text-center">
              <h2 className="text-3xl md:text-4xl font-bold text-[#1B3A5C]">¿Qué ofrecemos?</h2>
              <p className="mt-4 text-[#6B7280] max-w-xl mx-auto">
                Para gobiernos, legislaturas, educadores, ONGs, empresas y asociaciones profesionales.
              </p>
            </Reveal>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {services.map((s, i) => (
                <Reveal key={s.title} delay={i * 0.15}>
                  <div className="border border-[#E8E2D9] rounded-2xl p-8 flex flex-col gap-4 hover:shadow-md transition-shadow bg-[#FAF7F2] h-full">
                    <div className="w-8 h-1 bg-[#C0442C] rounded-full" />
                    <h3 className="text-xl font-bold text-[#1B3A5C]">{s.title}</h3>
                    <p className="text-[#6B7280] text-sm leading-relaxed">{s.desc}</p>
                  </div>
                </Reveal>
              ))}
            </div>
            <Reveal className="text-center mt-10">
              <Link href="/que-ofrecemos" className="text-[#C0442C] font-semibold hover:underline">
                Ver todos los servicios →
              </Link>
            </Reveal>
          </div>
        </section>

        {/* Mission callout */}
        <section className="bg-[#1B3A5C] py-20 px-6">
          <Reveal className="max-w-3xl mx-auto text-center flex flex-col gap-6">
            <h2 className="text-3xl md:text-4xl font-bold text-white">
              Las propuestas ganan legitimidad cuando incorporan pluralidad, deliberación y evidencia
            </h2>
            <p className="text-blue-200 text-lg leading-relaxed">
              Los proyectos legislativos, las agendas de reformas y las políticas públicas pueden incrementar su eficacia en la medida que incorporen estos procesos de discusión.
            </p>
            <Link
              href="/contacto"
              className="self-center bg-white text-[#1B3A5C] px-8 py-3 rounded-full font-semibold hover:bg-[#FAF7F2] transition-colors"
            >
              Hablar con el equipo
            </Link>
          </Reveal>
        </section>

        {/* Recent activities */}
        <section className="py-24 px-6 bg-[#FAF7F2]">
          <div className="max-w-5xl mx-auto">
            <Reveal className="flex items-end justify-between mb-10">
              <h2 className="text-3xl font-bold text-[#1B3A5C]">Actividades recientes</h2>
              <Link href="/actividades" className="text-[#C0442C] text-sm font-semibold hover:underline">
                Ver todas →
              </Link>
            </Reveal>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {recentActivities.map((a, i) => (
                <Reveal key={a.title} delay={i * 0.15}>
                  <div className="bg-white border border-[#E8E2D9] rounded-2xl overflow-hidden hover:shadow-md transition-shadow">
                    <div className="bg-[#E8E2D9] h-40" />
                    <div className="p-6 flex flex-col gap-2">
                      <div className="flex items-center gap-2">
                        <span className="text-xs font-semibold text-[#C0442C] uppercase tracking-wide">{a.cat}</span>
                        <span className="text-xs text-[#6B7280]">· {a.date}</span>
                      </div>
                      <h3 className="font-bold text-[#1B3A5C]">{a.title}</h3>
                      <p className="text-xs text-[#6B7280]">{a.client}</p>
                    </div>
                  </div>
                </Reveal>
              ))}
            </div>
          </div>
        </section>

        {/* Contact CTA */}
        <section className="py-20 px-6 bg-white border-t border-[#E8E2D9]">
          <Reveal className="max-w-2xl mx-auto text-center flex flex-col gap-6">
            <h2 className="text-3xl font-bold text-[#1B3A5C]">¿Hablamos?</h2>
            <p className="text-[#6B7280]">
              Si tu organización enfrenta decisiones difíciles o diálogos bloqueados, escribinos. Evaluamos cada caso sin costo.
            </p>
            <Link
              href="/contacto"
              className="self-center bg-[#C0442C] text-white px-8 py-3 rounded-full font-semibold hover:bg-[#a03824] transition-colors"
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
