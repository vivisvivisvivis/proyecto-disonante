import type { Metadata } from "next";
import Link from "next/link";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import Reveal from "@/components/Reveal";
import PageHero from "@/components/PageHero";

import { enAlternates } from "@/lib/seo";

export const metadata: Metadata = {
  title: "What we do",
  description: "A proposal to improve public conversation through respect, argumentative logic, evidence, diversity and pluralism.",
  alternates: enAlternates("/que-ofrecemos"),
};

const services = [
  {
    id: "diagnostico",
    title: "Diagnosis and solutions",
    desc: "Evaluation and proposed solutions for situations where dialogue and collective decision-making is blocked.",
  },
  {
    id: "formacion",
    title: "Training",
    desc: "Training at various levels related to deliberative practices and rational dialogue.",
  },
  {
    id: "implementacion",
    title: "Implementation",
    desc: "Support in the implementation of decisions that generate conflict, are resisted by a sector, or are difficult to communicate for understanding.",
  },
  {
    id: "argumentacion",
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

export default function QueOfrecemosEnPage() {
  return (
    <>
      <Navbar lang="en" />
      <main id="main">
        <PageHero
          label="Deliberation · Evidence · Pluralism"
          title="What we do"
          description="A proposal to put into practice mechanisms that improve public conversation through respect, argumentative logic, the incorporation of evidence, diversity and pluralism."
        />

        {/* The problem */}
        <section className="py-24 px-6 bg-sand relative overflow-hidden">
          <div className="max-w-5xl mx-auto">
            <Reveal>
              <span className="label text-rust">The problem</span>
              <h2 className="mt-4 max-w-2xl">Polarization as a democratic challenge</h2>
            </Reveal>
            <div className="mt-10 grid grid-cols-1 md:grid-cols-2 gap-12">
              <Reveal direction="left" delay={0.1}>
                <p style={{ color: "var(--pd-body)" }}>
                  Polarization is a trend that globally impacts public conversation. It is increasingly difficult to discuss public issues—from a film or a song to the content of a bill or a public policy. Political, cultural and moral identities are immediately at stake and the most trivial topic becomes a battlefield.
                </p>
                <p className="mt-4" style={{ color: "var(--pd-body)" }}>
                  This polarization is, in some sense, tempting—it touches something intimate in our convictions—but renders any debate sterile.
                </p>
              </Reveal>
              <Reveal direction="right" delay={0.1}>
                <p style={{ color: "var(--pd-body)" }}>
                  This phenomenon is a challenge for democratic governance. Governments at all levels, legislators, and even judges face the challenge that their proposals and decisions are processed as cultural, political or moral warfare. In this way, any initiative is either labeled from its outset, or subsequently assimilated to one side or the other of the antagonisms that run through different societies. This generates a spiral of intolerance that hinders debate, coexistence and, in some cases, fosters authoritarianism.
                </p>
              </Reveal>
            </div>
          </div>
        </section>

        {/* Services */}
        <section className="py-24 px-6 bg-cream relative overflow-hidden">
          <div className="max-w-5xl mx-auto">
            <Reveal className="mb-14">
              <span className="label text-rust">Services</span>
              <h2 className="mt-4 max-w-xl">What can we offer?</h2>
            </Reveal>

            <div className="flex flex-col gap-px bg-line">
              {services.map((s, i) => (
                <Reveal key={s.title} delay={i * 0.07}>
                  <div id={s.id} className="bg-cream scroll-mt-24 flex flex-col gap-2 p-8 md:p-10">
                    <h3>{s.title}</h3>
                      <p className="text-sm leading-relaxed" style={{ color: "var(--pd-body)" }}>{s.desc}</p>
                    </div>
                </Reveal>
              ))}
            </div>
          </div>
        </section>

        {/* Audiences */}
        <section className="py-24 px-6 bg-sand">
          <div className="max-w-5xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-16 items-center">
            <Reveal direction="left">
              <span className="label text-rust">Audiences</span>
              <h2 className="mt-4">Who is our work aimed at?</h2>
              <p className="mt-5" style={{ color: "var(--pd-body)" }}>
                Public policy proposals, legislative projects, and reform agendas can increase their legitimacy and effectiveness to the extent that they incorporate plurality, deliberation and evidence in the discussion process.
              </p>
            </Reveal>
            <Reveal direction="right">
              <ul className="flex flex-col gap-4">
                {audiences.map((a) => (
                  <li key={a} className="flex items-center gap-4 p-5 rounded border border-line bg-cream">
                    <span aria-hidden className="w-1.5 h-1.5 rounded-full bg-terracotta flex-shrink-0" />
                    <span className="text-[0.9375rem] font-medium" style={{ color: "var(--pd-ink)", fontFamily: "var(--font-jakarta)" }}>
                      {a}
                    </span>
                  </li>
                ))}
              </ul>
            </Reveal>
          </div>
        </section>

        {/* Navy conviction */}
        <section className="bg-navy py-24 px-6 relative overflow-hidden">
          <Reveal className="max-w-3xl mx-auto text-center flex flex-col gap-7">
            <span className="label text-blue-300">Our conviction</span>
            <h2 className="heading-sentence text-white">
              Both the legitimacy and effectiveness of proposals will be strengthened if they are discussed with adequate mechanisms
            </h2>
            <p className="text-blue-200 text-lg leading-relaxed" style={{ fontFamily: "var(--font-source)" }}>
              Mechanisms that preserve them from being hijacked by identities that exceed them.
            </p>
            <Link
              href="/en/contacto"
              className="self-center bg-cream text-navy px-9 py-3.5 rounded font-semibold hover:bg-sand transition-colors text-sm tracking-wide"
              style={{ fontFamily: "var(--font-jakarta)" }}
            >
              Talk to the team
            </Link>
          </Reveal>
        </section>
      </main>
      <Footer lang="en" />
    </>
  );
}
