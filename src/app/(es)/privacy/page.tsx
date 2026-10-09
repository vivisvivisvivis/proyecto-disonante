import type { Metadata } from "next";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import PageHero from "@/components/PageHero";
import { esAlternates } from "@/lib/seo";

export const metadata: Metadata = {
  title: "Política de privacidad",
  description: "Política de privacidad de Proyecto Disonante.",
  alternates: esAlternates("/privacy"),
};

export default function PrivacyPage() {
  return (
    <>
      <Navbar lang="es" />
      <main id="main">
        <PageHero
          label="Legal"
          title="Política de privacidad"
          description="Última actualización: octubre de 2026"
        />

        <section className="py-24 px-6 bg-sand">
          <div className="max-w-3xl mx-auto flex flex-col gap-10">

            <div className="flex flex-col gap-4">
              <h2 className="text-xl">1. Datos que recopilamos</h2>
              <p style={{ color: "var(--pd-body)" }}>
                Recopilamos únicamente los datos que tú nos proporcionas de forma voluntaria: nombre, dirección de correo electrónico y mensaje cuando completas el formulario de contacto, o tu correo electrónico cuando te suscribes al newsletter.
              </p>
              <p style={{ color: "var(--pd-body)" }}>
                No recopilamos datos de navegación ni utilizamos herramientas de análisis de terceros que rastreen tu comportamiento.
              </p>
            </div>

            <div className="flex flex-col gap-4">
              <h2 className="text-xl">2. Cookies</h2>
              <p style={{ color: "var(--pd-body)" }}>
                Este sitio no utiliza cookies propias ni de terceros: ni de análisis, ni de seguimiento, ni de publicidad. Por eso no te pedimos consentimiento de cookies al entrar.
              </p>
            </div>

            <div className="flex flex-col gap-4">
              <h2 className="text-xl">3. Servicios de terceros</h2>
              <p style={{ color: "var(--pd-body)" }}>
                Utilizamos los siguientes servicios de terceros para operar el sitio:
              </p>
              <ul className="flex flex-col gap-2 pl-4" style={{ color: "var(--pd-body)" }}>
                <li><strong>Vercel</strong> — alojamiento y entrega del sitio web. Los datos de acceso pueden ser procesados por Vercel Inc. (EE. UU.).</li>
                <li><strong>Resend</strong> — envío por correo electrónico de los mensajes del formulario de contacto y de las suscripciones al newsletter. Los datos que envías se transmiten a través de sus servidores (Resend Inc., EE. UU.).</li>
              </ul>
            </div>

            <div className="flex flex-col gap-4">
              <h2 className="text-xl">4. Uso de los datos</h2>
              <p style={{ color: "var(--pd-body)" }}>
                Los datos que nos proporcionas se usan exclusivamente para responder a tu consulta o enviarte las comunicaciones del newsletter al que te suscribiste. No vendemos, cedemos ni compartimos tus datos con terceros, salvo lo indicado en la sección anterior.
              </p>
            </div>

            <div className="flex flex-col gap-4">
              <h2 className="text-xl">5. Tus derechos</h2>
              <p style={{ color: "var(--pd-body)" }}>
                Si te encuentras en el Espacio Económico Europeo, tienes derecho a acceder, rectificar, suprimir, limitar el tratamiento y portabilidad de tus datos personales. Para ejercer cualquiera de estos derechos, escríbenos a{" "}
                <a href="mailto:contacto@proyectodisonante.org" className="text-rust hover:underline">
                  contacto@proyectodisonante.org
                </a>.
              </p>
            </div>

            <div className="flex flex-col gap-4">
              <h2 className="text-xl">6. Contacto</h2>
              <p style={{ color: "var(--pd-body)" }}>
                Para cualquier consulta relacionada con esta política, puedes escribirnos a{" "}
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
