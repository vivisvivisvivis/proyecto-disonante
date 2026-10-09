import type { Metadata } from "next";
import Link from "next/link";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import CaseRail from "@/components/CaseRail";
import ButtonLink from "@/components/ButtonLink";
import KineticText from "@/components/motion/KineticText";
import NewsletterForm from "@/components/NewsletterForm";
import { event, site } from "@/lib/site";

// Landing page for the QR code shown at the Oct 15 talk in Uruguay.
export const metadata: Metadata = {
  title: "Uruguay",
  description: "Proyecto Disonante en Uruguay: deliberación, evidencia y pluralismo frente a la polarización.",
  robots: { index: false, follow: true },
};

const ui = { fontFamily: "var(--font-jakarta)" };

export default function UruguayPage() {
  const eventLine = [event.name, event.date, event.place].filter(Boolean).join(" · ");

  return (
    <>
      <Navbar lang="es" altHref="/en" />
      <main id="main">
        <section className="bg-cream pt-12 pb-14 md:pt-20 md:pb-16 px-6 border-b border-line">
          <div className="max-w-[72rem] mx-auto flex flex-col gap-6">
            <p className="font-ui text-sm font-semibold text-rust">{eventLine || "Proyecto Disonante en Uruguay"}</p>
            <KineticText text="Gracias por acompañarnos" as="h1" spread={40} className="page-title" />
            <p className="text-lg md:text-xl max-w-2xl" style={{ lineHeight: 1.6 }}>
              Proyecto Disonante trabaja para que los desacuerdos públicos, incluidos los más difíciles, se discutan con
              método, evidencia y respeto. Aquí encontrarás lo que hacemos y cómo seguir en contacto.
            </p>
            {event.slidesUrl && (
              <a href={event.slidesUrl} target="_blank" rel="noopener noreferrer" className="text-rust font-semibold link-underline self-start" style={ui}>
                Ver la presentación
              </a>
            )}
          </div>
        </section>

        <section className="py-14 px-6 bg-sand border-b border-line">
          <div className="max-w-[72rem] mx-auto grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-16 items-center">
            <div className="flex flex-col gap-3">
              <h2 className="section-title">Recibe nuestras novedades</h2>
              <p>Te escribiremos cuando publiquemos análisis, materiales y nuevas actividades.</p>
            </div>
            <NewsletterForm lang="es" source="uruguay" />
          </div>
        </section>

        <section className="py-16 md:py-20 px-6 bg-cream">
          <div className="max-w-[72rem] mx-auto flex flex-col gap-10">
            <h2 className="section-title">Lo que hemos hecho</h2>
            <CaseRail lang="es" />
          </div>
        </section>

        <section className="py-24 md:py-32 px-6 bg-navy-deep">
          <div className="max-w-[72rem] mx-auto flex flex-col gap-6 items-start">
            <h2 className="section-title text-cream max-w-4xl">¿Tu organización enfrenta una discusión bloqueada o polarizada?</h2>
            <p className="text-blue-100 text-lg max-w-xl">
              Diseñamos talleres, formaciones y espacios de diálogo a la medida de cada institución.
            </p>
            <div className="flex flex-wrap gap-4 items-center">
              <ButtonLink href="/contacto">Escribir al equipo</ButtonLink>
              <Link href="/que-ofrecemos" className="text-white font-semibold link-underline text-sm" style={ui}>
                Qué hacemos
              </Link>
            </div>
            {site.email && (
              <p className="text-blue-100 text-sm">
                O escríbenos directamente a{" "}
                <a href={`mailto:${site.email}`} className="text-white underline break-all">{site.email}</a>
              </p>
            )}
          </div>
        </section>
      </main>
      <Footer lang="es" />
    </>
  );
}
