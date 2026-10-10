import Link from "next/link";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import Reveal from "@/components/Reveal";
import PageHero from "@/components/PageHero";
import CaseCards from "@/components/CaseCards";
import { partners } from "@/lib/cases";
import { localHref } from "@/lib/nav";

const copy = {
  es: {
    heroLabel: "Proyecto Disonante",
    title: "Actividades realizadas",
    intro:
      "Talleres, formaciones, documentos y encuentros que diseñamos y coordinamos con instituciones y organizaciones de la sociedad civil.",
    partnersLabel: "Con quién trabajamos",
    casesLabel: "Actividades",
    casesTitle: "Lo que hemos hecho",
    ctaLabel: "Colabora",
    ctaTitle: "¿Quieres ser parte?",
    ctaP: "Nos interesa conocer tus inquietudes y propuestas.",
    ctaButton: "Contáctanos",
  },
  en: {
    heroLabel: "Proyecto Disonante",
    title: "Past activities",
    intro:
      "Workshops, training, papers and meetings we designed and led with institutions and civil society organizations.",
    partnersLabel: "Who we work with",
    casesLabel: "Activities",
    casesTitle: "What we have done",
    ctaLabel: "Join us",
    ctaTitle: "Want to be part of it?",
    ctaP: "We are interested in hearing your concerns and proposals.",
    ctaButton: "Contact us",
  },
};

export const activitiesMeta = {
  es: { title: copy.es.title, description: copy.es.intro },
  en: { title: copy.en.title, description: copy.en.intro },
};

export default function ActivitiesPage({ lang }: { lang: "es" | "en" }) {
  const t = copy[lang];

  return (
    <>
      <Navbar lang={lang} />
      <main id="main">
        <PageHero label={t.heroLabel} title={t.title} description={t.intro} />

        {/* Partners */}
        <section aria-labelledby="partners-label" className="bg-sand border-b border-line py-10 px-6">
          <div className="max-w-5xl mx-auto flex flex-col gap-4">
            <h2 id="partners-label" className="label text-rust">{t.partnersLabel}</h2>
            <ul className="flex flex-wrap gap-x-10 gap-y-3">
              {partners.map((p) => (
                <li key={p} className="text-navy font-semibold text-sm" style={{ fontFamily: "var(--font-jakarta)" }}>
                  {p}
                </li>
              ))}
            </ul>
          </div>
        </section>

        {/* Activities */}
        <section className="py-20 md:py-24 px-6 bg-cream">
          <div className="max-w-5xl mx-auto flex flex-col gap-10">
            <Reveal>
              <span className="label text-rust">{t.casesLabel}</span>
              <h2 className="mt-3">{t.casesTitle}</h2>
            </Reveal>
            <CaseCards lang={lang} />
          </div>
        </section>

        {/* CTA */}
        <section className="py-20 px-6 bg-sand border-t border-line">
          <div className="max-w-5xl mx-auto flex flex-col md:flex-row gap-10 md:items-center justify-between">
            <div>
              <span className="label text-muted">{t.ctaLabel}</span>
              <h2 className="mt-3 max-w-md">{t.ctaTitle}</h2>
              <p className="mt-3 max-w-md">{t.ctaP}</p>
            </div>
            <Link
              href={localHref(lang, "/contacto")}
              className="self-start md:self-center bg-terracotta text-white px-9 py-3.5 rounded font-semibold hover:bg-terracotta-dark transition-colors text-sm tracking-wide"
              style={{ fontFamily: "var(--font-jakarta)" }}
            >
              {t.ctaButton}
            </Link>
          </div>
        </section>
      </main>
      <Footer lang={lang} />
    </>
  );
}
