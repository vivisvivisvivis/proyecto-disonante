import type { Metadata } from "next";
import Link from "next/link";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import Reveal from "@/components/Reveal";
import PageHero from "@/components/PageHero";

import { enAlternates } from "@/lib/seo";

export const metadata: Metadata = {
  title: "About us",
  description: "Proyecto Disonante is led by Carolina Fernández Blanco and Hernán Charosky.",
  alternates: enAlternates("/quienes-somos"),
};

export default function QuienesSomosEnPage() {
  return (
    <>
      <Navbar lang="en" />
      <main id="main">
        <PageHero
          label="About us"
          title="Who we are"
          description="Proyecto Disonante is led by Carolina Fernández Blanco and Hernán Charosky."
        />

        {/* Carolina */}
        <section className="py-24 px-6 bg-sand relative overflow-hidden">
          <div className="max-w-5xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-12 items-start">
            <Reveal direction="left">
              <div className="flex flex-col gap-4">
                <div className="w-24 h-24 rounded-full bg-line flex items-center justify-center flex-shrink-0">
                  <span className="text-3xl font-extrabold text-navy" style={{ fontFamily: "var(--font-jakarta)" }}>CF</span>
                </div>
                <div>
                  <h3 className="text-xl">Carolina Fernández Blanco</h3>
                  <p className="text-sm font-semibold text-rust mt-1" style={{ fontFamily: "var(--font-jakarta)" }}>Doctor in Law · Lawyer</p>
                  <p className="text-sm text-muted mt-0.5" style={{ fontFamily: "var(--font-jakarta)" }}>Spain</p>
                </div>
              </div>
            </Reveal>

            <Reveal direction="right" className="md:col-span-2 flex flex-col gap-4">
              <p style={{ color: "var(--pd-body)" }}>
                Carolina holds a PhD from the Universitat de Girona, a law degree from the University of Buenos Aires, and an LL.M. from Columbia University (New York). Her work focuses on legislative quality, deliberation and the rule of law. She has taught courses and conducted training on rational legislation, parliamentary deliberation and evidence-based public policy for legislators and officials from various Latin American countries. She is currently a researcher at the Chair of Legal Culture at the Universitat de Girona and a member of the research projects <em>Biases in the production and application of law</em> and <em>Social Epistemology and Law</em>.
              </p>
              <details className="group">
                <summary className="cursor-pointer list-none [&::-webkit-details-marker]:hidden text-sm font-semibold text-rust hover:underline font-ui w-fit">
                  <span className="group-open:hidden">Read full biography ↓</span>
                  <span className="hidden group-open:inline">Hide ↑</span>
                </summary>
                <div className="mt-4 flex flex-col gap-4">
              <p style={{ color: "var(--pd-body)" }}>
                She was a postdoctoral researcher at the same institution and coordinated the official Master’s program in Tort Law between 2021 and 2026. She has extensive teaching experience at the University of Buenos Aires and the Universitat de Girona, and currently teaches in the Master’s in Tort Law, the Master’s in Foundations of Civil Liability, and the Master in Global Rule of Law &amp; Constitutional Democracy (Genova and Girona).
              </p>
              <p style={{ color: "var(--pd-body)" }}>
                She practiced law in Buenos Aires and worked at human rights organizations. She also acts as a legal consultant and litigator before the Inter-American System and the European Court of Human Rights.
              </p>
                </div>
              </details>

              {/* Publications */}
              <div className="pt-2">
                <p className="text-xs font-semibold uppercase tracking-widest text-muted mb-3" style={{ fontFamily: "var(--font-jakarta)" }}>
                  Books
                </p>
                <ul className="flex flex-col gap-2">
                  {[
                    { text: "Eficacia, efectividad y entramado normativo", detail: "Marcial Pons, 2026" },
                    { text: "Derecho y Desarrollo. Una visión desde América Latina y el Caribe", detail: "" },
                    { text: "La Seguridad Jurídica para el Desarrollo Humano: desafíos en Iberoamérica", detail: "co-author · Marcial Pons, 2025" },
                    { text: "Errores en la creación y aplicación del derecho", detail: "co-editor with F. Carbonell · Marcial Pons, 2026" },
                    { text: "Derecho y Pobreza", detail: "co-editor with E. Pereira Fredes · 2021" },
                    { text: "Seguridad jurídica, pobreza y corrupción", detail: "co-editor with J. Ferrer · 2018" },
                    { text: "Seguridad jurídica y democracia en Iberoamérica", detail: "co-editor with J. Ferrer and C. Cruz · 2015" },
                  ].map((pub) => (
                    <li key={pub.text} className="flex items-start gap-2">
                      <span className="mt-1.5 w-1.5 h-1.5 rounded-full bg-terracotta flex-shrink-0" aria-hidden />
                      <span className="text-sm" style={{ color: "var(--pd-body)", fontFamily: "var(--font-source)" }}>
                        <em>{pub.text}</em>
                        {pub.detail && <span className="not-italic text-xs text-muted"> · {pub.detail}</span>}
                      </span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Journal badges */}
              <div className="pt-1">
                <p className="text-xs font-semibold uppercase tracking-widest text-muted mb-3" style={{ fontFamily: "var(--font-jakarta)" }}>
                  Journals
                </p>
                <div className="flex flex-wrap gap-2">
                  {[
                    "European Law Journal",
                    "International Journal for the Semiotics of Law",
                    "Doxa",
                    "Isonomía",
                    "Analisi e Diritto",
                    "Diritto & Questioni Pubbliche",
                    "Revista Catalana de Derecho Público",
                  ].map((journal) => (
                    <span
                      key={journal}
                      className="px-3 py-1 rounded border border-line text-xs text-muted"
                      style={{ fontFamily: "var(--font-jakarta)" }}
                    >
                      {journal}
                    </span>
                  ))}
                </div>
              </div>
            </Reveal>
          </div>
        </section>

        <div className="h-px bg-line" />

        {/* Hernán */}
        <section className="py-24 px-6 bg-cream relative overflow-hidden">
          <div className="max-w-5xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-12 items-start">
            <Reveal direction="left">
              <div className="flex flex-col gap-4">
                <div className="w-24 h-24 rounded-full bg-navy flex items-center justify-center flex-shrink-0">
                  <span className="text-3xl font-extrabold text-white" style={{ fontFamily: "var(--font-jakarta)" }}>HC</span>
                </div>
                <div>
                  <h3 className="text-xl">Hernán Charosky</h3>
                  <p className="text-sm font-semibold text-rust mt-1" style={{ fontFamily: "var(--font-jakarta)" }}>Lawyer and sociologist</p>
                  <p className="text-sm text-muted mt-0.5" style={{ fontFamily: "var(--font-jakarta)" }}>Argentina</p>
                </div>
              </div>
            </Reveal>

            <Reveal direction="right" className="md:col-span-2 flex flex-col gap-4">
              <p style={{ color: "var(--pd-body)" }}>
                Hernán is a sociologist and lawyer (UBA), and holds a Master’s in Public Policy (George Washington University / Fulbright Fellow, Global Leaders Fellow). From the start of his career he has promoted participation and deliberation as key practices for democratic consolidation, and in each of the positions he held he led pluralist and participatory dialogue processes. He currently coordinates the Dialogando Buenos Aires program.
              </p>
              <details className="group">
                <summary className="cursor-pointer list-none [&::-webkit-details-marker]:hidden text-sm font-semibold text-rust hover:underline font-ui w-fit">
                  <span className="group-open:hidden">Read full biography ↓</span>
                  <span className="hidden group-open:inline">Hide ↑</span>
                </summary>
                <div className="mt-4 flex flex-col gap-4">
              <p style={{ color: "var(--pd-body)" }}>
                He was executive director of Poder Ciudadano (local chapter of Transparency International), advisor to the Integrity Office of the Inter-American Development Bank, and leader of the Argentina Debate initiative. Among his most relevant experiences, he promoted pluralist discussion in the drafting of the Freedom of Information Law and the Electoral Code of the City of Buenos Aires, led the civil society coalition that achieved Argentina’s first presidential debates in 2015, and promoted the use of public information access for the control of social protection spending by its own beneficiaries.
              </p>
              <p style={{ color: "var(--pd-body)" }}>
                He is a professor at the Universidad de Palermo and previously at Universidad Austral, Universidad de San Andrés and the University of Buenos Aires. He has been a consultant in Central and South America and Africa on transparency, anti-corruption, multiparty cooperation and citizen participation, for the Inter-American Development Bank, the World Bank, the United Nations Development Programme, the National Endowment for Democracy and the National Democratic Institute, among others.
              </p>
                </div>
              </details>

              {/* Org badges */}
              <div className="pt-2">
                <p className="text-xs font-semibold uppercase tracking-widest text-muted mb-3" style={{ fontFamily: "var(--font-jakarta)" }}>
                  Organizations
                </p>
                <div className="flex flex-wrap gap-2">
                  {[
                    "National Democratic Institute",
                    "Inter-American Development Bank",
                    "World Bank",
                    "UNDP",
                    "National Endowment for Democracy",
                    "Poder Ciudadano",
                    "Argentina Debate",
                    "Dialogando Buenos Aires",
                  ].map((org) => (
                    <span
                      key={org}
                      className="px-3 py-1 rounded border border-line text-xs text-muted"
                      style={{ fontFamily: "var(--font-jakarta)" }}
                    >
                      {org}
                    </span>
                  ))}
                </div>
              </div>
            </Reveal>
          </div>
        </section>

        {/* Network */}
        <section className="bg-navy py-20 px-6 relative overflow-hidden">
          <Reveal className="max-w-4xl mx-auto flex flex-col gap-6">
            <span className="label text-blue-300">Our network</span>
            <h2 className="heading-sentence text-white max-w-2xl">A network of professionals for the most diverse realities</h2>
            <p className="text-blue-200 text-lg leading-relaxed max-w-2xl" style={{ fontFamily: "var(--font-source)" }}>
              Throughout our experience we have worked with professionals from various fields such as lawyers, communications specialists, sociologists and political scientists, among others, throughout the Latin American region, the United States, Africa and Europe. Our network includes specialists who have participated in all kinds of political and social scenarios, facilitating workshops, designing and evaluating policies and conducting academic research.
            </p>
            <p className="text-blue-200 leading-relaxed max-w-2xl" style={{ fontFamily: "var(--font-source)" }}>
              For each project and for each field intervention, Proyecto Disonante has a network of professionals prepared for the most diverse realities.
            </p>
          </Reveal>
        </section>

        {/* CTA */}
        <section className="py-20 px-6 bg-sand border-t border-line">
          <div className="max-w-5xl mx-auto flex flex-col md:flex-row gap-8 items-center justify-between">
            <Reveal direction="left">
              <span className="label text-muted">Dialogue</span>
              <h2 className="mt-3 max-w-sm">Want to work with us?</h2>
              <p className="mt-3 max-w-sm" style={{ color: "var(--pd-body)" }}>
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
