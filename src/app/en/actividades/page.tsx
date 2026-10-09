import type { Metadata } from "next";
import Link from "next/link";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import Reveal from "@/components/Reveal";
import PageHero from "@/components/PageHero";
import CaseCards from "@/components/CaseCards";

import { enAlternates } from "@/lib/seo";

export const metadata: Metadata = {
  title: "Activities",
  description: "Our current projects aim to identify and strengthen successful experiences in civic space building and training in deliberative practices.",
  alternates: enAlternates("/actividades"),
};

export default function ActividadesEnPage() {
  return (
    <>
      <Navbar lang="en" />
      <main id="main">
        <PageHero
          label="Projects"
          title="Activities"
          description="Our current projects aim to identify and strengthen successful experiences in civic space building and to train in good practices of public deliberation."
        />

        {/* Cases */}
        <section className="py-20 md:py-24 px-6 bg-cream">
          <div className="max-w-5xl mx-auto flex flex-col gap-10">
            <Reveal>
              <span className="label text-rust">Recent work</span>
              <h2 className="mt-3">Cases</h2>
              <p className="mt-4 max-w-2xl">Workshops, training and meetings we designed and led with institutions and civil society organizations.</p>
            </Reveal>
            <CaseCards lang="en" />
          </div>
        </section>

        <section className="pt-20 px-6 bg-sand border-t border-line">
          <div className="max-w-5xl mx-auto">
            <span className="label text-rust">Programs</span>
            <h2 className="mt-3">Our programs</h2>
          </div>
        </section>


        {/* Project 01 — Plural Networks */}
        <section className="pt-12 pb-24 px-6 bg-sand">
          <div className="max-w-5xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-16 items-start">
            <Reveal direction="left">
              <span className="label text-rust">Project 01</span>
              <h2 className="mt-4">Plural Networks</h2>
              <p className="mt-6" style={{ color: "var(--pd-body)" }}>
                Identifying good practices, developing dialogue tools, and building capacity are the three main activities we propose for the first year of work. We know that in various parts of the world there are civil society organizations, academic institutions, and government programs oriented toward promoting dialogue, consensus-building, coexistence, the debate of ideas, and other activities that foster pluralism in the public sphere.
              </p>
              <p className="mt-4" style={{ color: "var(--pd-body)" }}>
                If we want to multiply these capacities, it is necessary to launch a program that collects these experiences and tools, systematizes them conceptually, and creates networks to enhance their potential and impact. Those tools, now strengthened, can be brought to new areas and situations.
              </p>
            </Reveal>

            <Reveal direction="right">
              <div className="bg-cream rounded-lg p-10 border border-line flex flex-col gap-5">
                <span className="label text-muted">Three lines of work</span>
                <ul className="flex flex-col gap-4">
                  {[
                    "Identify good dialogue and deliberation practices worldwide",
                    "Develop dialogue tools adaptable to different contexts",
                    "Create networks to enhance their impact and bring them to new areas",
                  ].map((item) => (
                    <li key={item} className="flex items-start gap-3">
                      <span className="w-1.5 h-1.5 rounded-full bg-terracotta flex-shrink-0 mt-2" />
                      <span className="text-sm leading-relaxed" style={{ color: "var(--pd-body)", fontFamily: "var(--font-jakarta)" }}>
                        {item}
                      </span>
                    </li>
                  ))}
                </ul>
              </div>
            </Reveal>
          </div>
        </section>

        {/* Project 02 — Deliberating to understand each other */}
        <section className="py-24 px-6 bg-cream relative overflow-hidden">
          <div className="max-w-5xl mx-auto">
            <Reveal>
              <span className="label text-rust">Project 02</span>
              <h2 className="mt-4 max-w-xl">Deliberating to understand each other</h2>
            </Reveal>

            <div className="mt-12 grid grid-cols-1 md:grid-cols-3 gap-10">
              <Reveal className="md:col-span-2 flex flex-col gap-5" delay={0.1}>
                <p style={{ color: "var(--pd-body)" }}>
                  The Deliberating to Understand Each Other program builds on and multiplies the findings of Plural Networks. It is necessary to train the capacity to deliberate so that deliberation becomes a habitual practice, constructive and transcending confrontation. Various actors can be promoters. Governments are natural leaders for these transformations: legislative institutions (local councils, subnational legislatures, national congresses), executive branches at various levels of government that formulate normative projects, judicial authorities, and supreme oversight bodies.
                </p>
                <p style={{ color: "var(--pd-body)" }}>
                  Non-governmental actors—CSOs, businesses, academic institutions, and even secondary schools—have also demonstrated a growing capacity to generate instances of public debate. Across all these institutions there are common practices of debate, but not yet of deliberation. Political debate in legislative institutions is competitive and not necessarily constructive; the prevailing polarization undermines the possibility of mutual understanding and collective construction.
                </p>
                <p style={{ color: "var(--pd-body)" }}>
                  Deliberating to Understand Each Other is a program oriented toward creating pedagogical materials and training officials, legislators, advisors, civil society activists, teachers and students in resources useful for strengthening dialogue capacities in a context dominated by conflict and competition.
                </p>
              </Reveal>

              <Reveal delay={0.2}>
                <div className="bg-navy rounded-lg p-8 flex flex-col gap-5 h-full">
                  <span className="label text-blue-300">Target actors</span>
                  <ul className="flex flex-col gap-3">
                    {[
                      "Officials and legislators",
                      "Advisors and activists",
                      "CSOs and businesses",
                      "Academic institutions",
                      "Teachers and students",
                      "Secondary schools",
                    ].map((item) => (
                      <li key={item} className="flex items-start gap-2.5">
                        <span className="w-1 h-1 rounded-full bg-terracotta flex-shrink-0 mt-2" />
                        <span className="text-sm text-blue-100 leading-relaxed" style={{ fontFamily: "var(--font-jakarta)" }}>
                          {item}
                        </span>
                      </li>
                    ))}
                  </ul>
                </div>
              </Reveal>
            </div>
          </div>
        </section>

        {/* Impact strip */}
        <section className="bg-terracotta py-16 px-6 relative overflow-hidden">
          <Reveal className="max-w-4xl mx-auto text-center">
            <p
              className="text-2xl md:text-3xl font-bold text-white leading-snug"
              style={{ fontFamily: "var(--font-jakarta)", letterSpacing: "-0.02em" }}
            >
              Proyecto Disonante aims to work simultaneously on both programs: detecting dialogue capacities and networking them, on the one hand, and strengthening deliberation as a practice in institutions, on the other.
            </p>
          </Reveal>
        </section>

        {/* CTA */}
        <section className="py-20 px-6 bg-sand border-t border-line">
          <div className="max-w-5xl mx-auto flex flex-col md:flex-row gap-10 items-center justify-between">
            <Reveal direction="left">
              <span className="label text-muted">Join us</span>
              <h2 className="mt-3 max-w-md">Want to be part?</h2>
              <p className="mt-3 max-w-md" style={{ color: "var(--pd-body)" }}>
                We are interested in learning about your concerns and proposals.
              </p>
            </Reveal>
            <Reveal direction="right">
              <Link
                href="/en/contacto"
                className="bg-terracotta text-white px-9 py-3.5 rounded font-semibold hover:bg-terracotta-dark transition-colors text-sm tracking-wide"
                style={{ fontFamily: "var(--font-jakarta)" }}
              >
                Contact us
              </Link>
            </Reveal>
          </div>
        </section>
      </main>
      <Footer lang="en" />
    </>
  );
}
