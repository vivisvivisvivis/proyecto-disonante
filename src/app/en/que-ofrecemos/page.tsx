import type { Metadata } from "next";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import Reveal from "@/components/Reveal";
import ScrollWords from "@/components/motion/ScrollWords";
import CtaBand from "@/components/CtaBand";
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
          <div className="max-w-[72rem] mx-auto">
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
          <div className="max-w-[72rem] mx-auto">
            <div className="mb-12 flex flex-col gap-4">
              <p className="font-ui text-sm font-semibold text-rust">Services</p>
              <h2 className="section-title">What can we offer?</h2>
            </div>

            <ul className="border-t border-navy/20">
              {services.map((s) => (
                <li key={s.id} id={s.id} className="scroll-mt-28 border-b border-navy/20 py-10 md:py-14 grid grid-cols-1 md:grid-cols-12 gap-4 md:gap-12 items-baseline">
                  <h3 className="service-title md:col-span-7">{s.title}</h3>
                  <p className="md:col-span-5 text-lg" style={{ lineHeight: 1.7 }}>{s.desc}</p>
                </li>
              ))}
            </ul>
          </div>
        </section>

        {/* Audiences */}
        <section className="py-24 px-6 bg-sand">
          <div className="max-w-[72rem] mx-auto grid grid-cols-1 md:grid-cols-2 gap-16 items-center">
            <Reveal direction="left">
              <p className="font-ui text-sm font-semibold text-rust">Audiences</p>
              <h2 className="section-title mt-4">Who is our work aimed at?</h2>
              <p className="mt-5" style={{ color: "var(--pd-body)" }}>
                Public policy proposals, legislative projects, and reform agendas can increase their legitimacy and effectiveness to the extent that they incorporate plurality, deliberation and evidence in the discussion process.
              </p>
            </Reveal>
            <Reveal direction="right">
              <ul className="border-t border-navy/20">
                {audiences.map((a) => (
                  <li key={a} className="border-b border-navy/20 py-4 font-ui text-lg md:text-xl font-semibold text-navy">
                    {a}
                  </li>
                ))}
              </ul>
            </Reveal>
          </div>
        </section>

        {/* Conviction: fills in word by word */}
        <section className="bg-navy px-6 py-28 md:py-40">
          <div className="max-w-[72rem] mx-auto flex flex-col gap-10">
            <ScrollWords text="Both the legitimacy and effectiveness of proposals will be strengthened if they are discussed with adequate mechanisms" className="manifesto max-w-5xl" />
            <p className="text-xl text-blue-100 max-w-xl" style={{ lineHeight: 1.6 }}>Mechanisms that preserve them from being hijacked by identities that exceed them.</p>
          </div>
        </section>

        <CtaBand lang="en" />
      </main>
      <Footer lang="en" />
    </>
  );
}
