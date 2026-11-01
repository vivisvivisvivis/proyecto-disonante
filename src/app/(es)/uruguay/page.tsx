import type { Metadata } from "next";
import Link from "next/link";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import CaseCards from "@/components/CaseCards";
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
          <div className="max-w-3xl mx-auto flex flex-col gap-5">
            <span className="label text-rust">{eventLine || "Proyecto Disonante en Uruguay"}</span>
            <h1>Gracias por acompañarnos</h1>
            <p className="text-lg">
              Proyecto Disonante trabaja para que los desacuerdos públicos, incluidos los más difíciles, se discutan con
              método, evidencia y respeto. Aquí encontrarás lo que hacemos y cómo seguir en contacto.
            </p>
            {event.slidesUrl && (
              <a href={event.slidesUrl} target="_blank" rel="noopener noreferrer" className="text-rust font-semibold hover:underline self-start" style={ui}>
                Ver la presentación <span aria-hidden>→</span>
              </a>
            )}
          </div>
        </section>

        <section className="py-16 md:py-20 px-6 bg-cream">
          <div className="max-w-5xl mx-auto flex flex-col gap-8">
            <div>
              <span className="label text-rust">Trabajo reciente</span>
              <h2 className="mt-3">Lo que hemos hecho</h2>
            </div>
            <CaseCards lang="es" />
          </div>
        </section>

        <section className="py-16 px-6 bg-navy">
          <div className="max-w-3xl mx-auto flex flex-col gap-5 items-start">
            <span className="label text-blue-200">Diálogo</span>
            <h2 className="heading-sentence text-white">¿Tu organización enfrenta una discusión bloqueada o polarizada?</h2>
            <p className="text-blue-100">
              Diseñamos talleres, formaciones y espacios de diálogo a la medida de cada institución.
            </p>
            <div className="flex flex-wrap gap-4 items-center">
              <Link href="/contacto" className="bg-cream text-navy px-8 py-3.5 rounded font-ui font-semibold hover:bg-sand transition-colors text-sm">
                Escribir al equipo
              </Link>
              <Link href="/que-ofrecemos" className="text-white font-semibold underline underline-offset-4 hover:no-underline text-sm" style={ui}>
                ¿Qué hacemos?
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
