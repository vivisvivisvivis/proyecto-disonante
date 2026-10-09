import type { Metadata } from "next";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import PageHero from "@/components/PageHero";
import { esAlternates } from "@/lib/seo";

export const metadata: Metadata = {
  title: "Términos de uso",
  description: "Términos de uso del sitio web de Proyecto Disonante.",
  alternates: esAlternates("/terms"),
};

export default function TermsPage() {
  return (
    <>
      <Navbar lang="es" />
      <main id="main">
        <PageHero
          label="Legal"
          title="Términos de uso"
          description="Última actualización: octubre de 2026"
        />

        <section className="py-24 px-6 bg-sand">
          <div className="max-w-3xl mx-auto flex flex-col gap-10">

            <div className="flex flex-col gap-4">
              <h2 className="text-xl">1. Uso aceptable</h2>
              <p style={{ color: "var(--pd-body)" }}>
                Al acceder y utilizar este sitio web, aceptas usarlo únicamente con fines lícitos y de acuerdo con estos términos. Queda prohibido utilizar el sitio para difundir contenido ilegal, engañoso o que vulnere derechos de terceros.
              </p>
            </div>

            <div className="flex flex-col gap-4">
              <h2 className="text-xl">2. Propiedad intelectual</h2>
              <p style={{ color: "var(--pd-body)" }}>
                Todos los contenidos del sitio (textos, imágenes, diseño) son propiedad de Proyecto Disonante o de sus autores, y están protegidos por las leyes de propiedad intelectual aplicables. Queda prohibida su reproducción total o parcial sin autorización expresa.
              </p>
            </div>

            <div className="flex flex-col gap-4">
              <h2 className="text-xl">3. Limitación de responsabilidad</h2>
              <p style={{ color: "var(--pd-body)" }}>
                Proyecto Disonante no será responsable por daños directos, indirectos, incidentales o consecuentes derivados del uso o imposibilidad de uso de este sitio. Los contenidos se ofrecen con fines informativos y no constituyen asesoramiento jurídico.
              </p>
            </div>

            <div className="flex flex-col gap-4">
              <h2 className="text-xl">4. Modificaciones</h2>
              <p style={{ color: "var(--pd-body)" }}>
                Nos reservamos el derecho de modificar estos términos en cualquier momento. Los cambios serán efectivos desde su publicación en esta página. El uso continuado del sitio tras cualquier modificación implica la aceptación de los nuevos términos.
              </p>
            </div>

            <div className="flex flex-col gap-4">
              <h2 className="text-xl">5. Ley aplicable</h2>
              <p style={{ color: "var(--pd-body)" }}>
                Estos términos se rigen por la legislación española. Cualquier controversia derivada de su interpretación o aplicación se someterá a los tribunales competentes de España.
              </p>
            </div>

            <div className="flex flex-col gap-4">
              <h2 className="text-xl">6. Contacto</h2>
              <p style={{ color: "var(--pd-body)" }}>
                Para cualquier consulta sobre estos términos, escríbenos a{" "}
                <a href="mailto:contacto@proyectodisonante.org" className="text-rust hover:underline">
                  contacto@proyectodisonante.org
                </a>.
              </p>
            </div>

          </div>
        </section>
      </main>
      <Footer lang="es" />
    </>
  );
}
