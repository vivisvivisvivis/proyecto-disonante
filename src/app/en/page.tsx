import type { Metadata } from "next";
import Link from "next/link";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import Reveal from "@/components/Reveal";
import HeroText from "@/components/HeroText";
import ClientMarquee from "@/components/ClientMarquee";
import NewsletterForm from "@/components/NewsletterForm";
import { enAlternates } from "@/lib/seo";
import { articles } from "@/lib/articles";

export const metadata: Metadata = {
  title: "Proyecto Disonante",
  description:
    "Strengthening public space through rational deliberation, the use of evidence and pluralism.",
  alternates: enAlternates("/"),
};

const services = [
  {
    number: "01",
    title: "Diagnosis and solutions",
    desc: "Evaluation and proposed solutions for situations where dialogue and collective decision-making is blocked.",
  },
  {
    number: "02",
    title: "Training",
    desc: "Training at various levels related to deliberative practices and rational dialogue.",
  },
  {
    number: "03",
    title: "Implementation",
    desc: "Support in the implementation of decisions that generate conflict, are resisted by a sector, or are difficult to communicate for understanding.",
  },
  {
    number: "04",
    title: "Evidence-based argumentation",
    desc: "Collaboration in the elaboration of arguments based on evidence and built following good practices of rational dialogue.",
  },
];

const audiences = [
  "Governments and legislative bodies",
  "Educators and educational institutions",
  "NGOs and Civil Society Organizations (CSO)",
  "Businesses",
  "Professional associations and organizations",
];

export default function HomePageEn() {
  const featured = articles[0];
  const secondary = articles.slice(1, 4);

  return (
    <>
      <Navbar lang="en" />
      <main>

        {/* ── Hero ───────────────────────────────────────── */}
        <section className="relative bg-[#EBD7BE] pt-24 pb-28 px-6 overflow-hidden">
          <div className="max-w-4xl mx-auto text-center flex flex-col items-center gap-8 relative z-10">
            <HeroText lang="en" />
            <Reveal delay={0.55}>
              <div className="flex flex-col sm:flex-row gap-4 mt-2">
                <Link
                  href="/en/que-ofrecemos"
                  className="bg-[#C0442C] text-white px-9 py-3.5 rounded font-semibold hover:bg-[#a03824] transition-all duration-200 text-sm tracking-wide"
                  style={{ fontFamily: "var(--font-jakarta)" }}
                >
                  What we offer
                </Link>
                <Link
                  href="/en/actividades"
                  className="border-2 border-[#1B3A5C] text-[#1B3A5C] px-9 py-3.5 rounded font-semibold hover:bg-[#1B3A5C] hover:text-white transition-all duration-200 text-sm tracking-wide"
                  style={{ fontFamily: "var(--font-jakarta)" }}
                >
                  Our activities
                </Link>
              </div>
            </Reveal>
          </div>
        </section>

        {/* ── Clients marquee ─────────────────────────────── */}
        <ClientMarquee lang="en" />

        {/* ── Problem — full copy ────────────────────────── */}
        <section className="py-28 px-6 bg-[#EBD7BE] relative overflow-hidden">
          <div className="max-w-5xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-20 items-start">
            <Reveal direction="left">
              <div className="flex flex-col gap-6">
                <span className="label text-[#C0442C]">The problem</span>
                <h2>Polarization is a challenge for democratic governance</h2>
                <p style={{ color: "#5A6A7A" }}>
                  Polarization is a trend that globally impacts public conversation. It is increasingly difficult to discuss public issues—from a film or a song to the content of a bill or a public policy. Political, cultural and moral identities are immediately at stake and the most trivial topic becomes a battlefield.
                </p>
                <p style={{ color: "#5A6A7A" }}>
                  This phenomenon is a challenge for democratic governance. Governments at all levels, legislators, and even judges face the challenge that their proposals and decisions are processed as cultural, political or moral warfare. Journalism and Civil Society Organizations face the same problem with their agendas for intervention in the public sphere. In this way, any initiative is either labeled from its outset, or subsequently assimilated to one side or the other of the antagonisms that run through different societies. This, in turn, generates a spiral of intolerance that hinders debate, coexistence and, in some cases, fosters authoritarianism.
                </p>

                {/* Pull quote */}
                <div className="mt-6 pl-5 py-2 border-l-2 border-[#D8C9B3]">
                  <p className="italic text-lg" style={{ color: "#4A5568", fontFamily: "var(--font-source)" }}>
                    "This polarization is, in some sense, tempting: it touches something intimate in our convictions, but renders any debate sterile."
                  </p>
                </div>
              </div>
            </Reveal>

            <Reveal direction="right">
              <div className="flex flex-col gap-8">
                <div className="bg-[#EBD7BE] border border-[#D8C9B3] rounded-lg p-10 flex flex-col gap-5">
                  <span className="label text-[#C0442C]">Our proposal</span>
                  <p style={{ color: "#5A6A7A" }}>
                    Proyecto Disonante is a proposal to put into practice mechanisms that improve public conversation through respect, argumentative logic, the incorporation of evidence, diversity and pluralism.
                  </p>
                  <p className="text-sm" style={{ color: "#5A6A7A" }}>
                    Public policy proposals, legislative projects, and reform agendas can increase their legitimacy and effectiveness to the extent that they incorporate plurality, deliberation and evidence in the discussion process.
                  </p>
                  <Link
                    href="/en/que-ofrecemos"
                    className="text-[#C0442C] text-sm font-semibold hover:underline mt-1 self-start"
                    style={{ fontFamily: "var(--font-jakarta)" }}
                  >
                    Learn about the project →
                  </Link>
                </div>

                <div className="flex flex-col gap-4 px-2">
                  <span className="label text-[#6B7280]">Who is our work aimed at?</span>
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
              A public conversation subject to rules of respect and argumentation can be more productive for better governance.
            </p>
          </Reveal>
        </section>

        {/* ── Services ───────────────────────────────────── */}
        <section className="py-28 px-6 bg-[#E2CDB4] relative overflow-hidden">
          <div className="max-w-5xl mx-auto">
            <Reveal className="mb-16">
              <span className="label text-[#C0442C]">Services</span>
              <h2 className="mt-3 max-w-xl">What can we offer?</h2>
              <p className="mt-4 max-w-xl" style={{ color: "#5A6A7A" }}>
                For governments, legislatures, educators, NGOs, businesses and professional associations.
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
                href="/en/que-ofrecemos"
                className="text-[#C0442C] font-semibold hover:underline text-sm"
                style={{ fontFamily: "var(--font-jakarta)" }}
              >
                Learn more →
              </Link>
            </Reveal>
          </div>
        </section>

        {/* ── Navy manifesto callout ─────────────────────── */}
        <section className="bg-[#1B3A5C] py-24 px-6 relative overflow-hidden">
          <Reveal className="max-w-3xl mx-auto text-center flex flex-col gap-7">
            <span className="label text-blue-300">Our conviction</span>
            <h2 className="text-white">
              Both the legitimacy and effectiveness of proposals will be strengthened if they are discussed with adequate mechanisms
            </h2>
            <p className="text-blue-200 text-lg leading-relaxed" style={{ fontFamily: "var(--font-source)" }}>
              Mechanisms that preserve them from being hijacked by identities that exceed them.
            </p>
            <Link
              href="/en/contacto"
              className="self-center bg-[#EBD7BE] text-[#1B3A5C] px-9 py-3.5 rounded font-semibold hover:bg-[#E0CEAE] transition-colors text-sm tracking-wide"
              style={{ fontFamily: "var(--font-jakarta)" }}
            >
              Talk to the team
            </Link>
          </Reveal>
        </section>

        {/* ── News / Latest ──────────────────────────────── */}
        <section className="py-28 px-6 bg-[#EBD7BE]">
          <div className="max-w-5xl mx-auto">
            <Reveal className="flex items-end justify-between mb-14">
              <div>
                <span className="label text-[#C0442C]">Latest</span>
                <h2 className="mt-2">News</h2>
              </div>
              <Link
                href="/en/blog"
                className="text-[#C0442C] text-sm font-semibold hover:underline hidden sm:block"
                style={{ fontFamily: "var(--font-jakarta)" }}
              >
                See all →
              </Link>
            </Reveal>

            <div className="grid grid-cols-1 md:grid-cols-5 gap-6">
              {/* Featured card */}
              <Reveal className="md:col-span-3">
                <Link href={`/en/blog/${featured.slug}`} className="block h-full">
                  <div className="group rounded-lg overflow-hidden transition-all duration-300 h-full flex flex-col relative bg-[#1B3A5C]">
                    {/* TODO: insert real product demo / workshop photo here */}
                    <div className="relative h-52 overflow-hidden flex-shrink-0 bg-[#0f2238] flex items-end">
                      <div className="absolute bottom-4 left-6">
                        <span className="label text-blue-300">{featured.en.tag}</span>
                      </div>
                    </div>
                    <div className="p-8 flex flex-col gap-3 flex-1">
                      <div className="flex items-center gap-2 flex-wrap">
                        {featured.en.author && (
                          <>
                            <span className="text-xs font-semibold text-blue-300" style={{ fontFamily: "var(--font-jakarta)" }}>
                              {featured.en.author}
                            </span>
                            <span className="w-1 h-1 rounded-full bg-[#C0442C]" />
                          </>
                        )}
                        <span className="text-xs text-blue-400" style={{ fontFamily: "var(--font-jakarta)" }}>
                          {featured.en.date}
                        </span>
                      </div>
                      <h3 className="text-xl text-white group-hover:text-blue-200 transition-colors duration-200 leading-snug">
                        {featured.en.title}
                      </h3>
                      {featured.en.excerpt && (
                        <p className="text-sm leading-relaxed text-blue-200">
                          {featured.en.excerpt}
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
                    <Link href={`/en/blog/${a.slug}`} className="block">
                      <div className="group bg-[#EBD7BE] border border-[#D8C9B3] rounded-lg p-6 flex flex-col gap-2 transition-all duration-300 hover:border-[#C0442C]">
                        <div className="flex items-center gap-2 flex-wrap">
                          {a.en.author && (
                            <>
                              <span className="text-xs font-semibold text-[#1B3A5C] leading-tight" style={{ fontFamily: "var(--font-jakarta)" }}>
                                {a.en.author}
                              </span>
                              <span className="w-1 h-1 rounded-full bg-[#C0442C] flex-shrink-0" />
                            </>
                          )}
                          <span className="text-xs text-[#9CA3AF]" style={{ fontFamily: "var(--font-jakarta)" }}>
                            {a.en.date}
                          </span>
                        </div>
                        <h3 className="text-base leading-snug group-hover:text-[#C0442C] transition-colors duration-200">
                          {a.en.title}
                        </h3>
                        {a.en.excerpt && (
                          <p className="text-xs leading-relaxed" style={{ color: "#7A8A9A" }}>
                            {a.en.excerpt}
                          </p>
                        )}
                      </div>
                    </Link>
                  </Reveal>
                ))}
              </div>
            </div>

            <Reveal className="mt-8 sm:hidden">
              <Link href="/en/blog" className="text-[#C0442C] text-sm font-semibold hover:underline" style={{ fontFamily: "var(--font-jakarta)" }}>
                See all news →
              </Link>
            </Reveal>
          </div>
        </section>

        {/* ── Team + Contact teasers ─────────────────────── */}
        <section className="py-20 px-6 bg-[#E2CDB4] border-t border-[#D8C9B3]">
          <div className="max-w-5xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-6">
            <Reveal direction="left">
              <div className="group bg-[#EBD7BE] border border-[#D8C9B3] rounded-lg p-10 flex flex-col gap-4 h-full hover:border-[#1B3A5C] transition-all duration-300">
                <span className="label text-[#6B7280]">About us</span>
                <h3>Who we are</h3>
                <p style={{ color: "#5A6A7A" }}>
                  Proyecto Disonante is led by Carolina Fernández Blanco and Hernán Charosky.
                </p>
                <Link
                  href="/en/quienes-somos"
                  className="text-[#C0442C] text-sm font-semibold hover:underline mt-auto self-start group-hover:translate-x-1 transition-transform duration-200"
                  style={{ fontFamily: "var(--font-jakarta)" }}
                >
                  Learn more →
                </Link>
              </div>
            </Reveal>

            <Reveal direction="right">
              <div className="group bg-[#1B3A5C] rounded-lg p-10 flex flex-col gap-4 h-full hover:bg-[#152d47] transition-colors duration-300">
                <span className="label text-blue-300">Dialogue</span>
                <h3 className="text-white">Contact us</h3>
                <p className="text-blue-200" style={{ fontFamily: "var(--font-source)" }}>
                  We are interested in learning about your concerns and proposals.
                </p>
                <Link
                  href="/en/contacto"
                  className="text-white text-sm font-semibold hover:underline mt-auto self-start group-hover:translate-x-1 transition-transform duration-200"
                  style={{ fontFamily: "var(--font-jakarta)" }}
                >
                  Learn more →
                </Link>
              </div>
            </Reveal>
          </div>
        </section>

        {/* ── Newsletter ─────────────────────────────────── */}
        <section className="py-20 px-6 bg-[#EBD7BE] border-t border-[#D8C9B3] relative overflow-hidden">
          <Reveal className="max-w-xl mx-auto text-center flex flex-col gap-6">
            <span className="label text-[#C0442C]">Newsletter</span>
            <h2>Subscribe</h2>
            <p style={{ color: "#5A6A7A" }}>Enter your email to receive updates.</p>
            <NewsletterForm />
          </Reveal>
        </section>

      </main>
      <Footer lang="en" />
    </>
  );
}
