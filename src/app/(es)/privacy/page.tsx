import type { Metadata } from "next";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import PageHero from "@/components/PageHero";
import LegalContact from "@/components/LegalContact";
import { esAlternates } from "@/lib/seo";

export const metadata: Metadata = {
  title: "Política de privacidad",
  description: "Política de privacidad de Proyecto Disonante.",
  alternates: esAlternates("/privacy"),
};

const body = { color: "var(--pd-body)" };

export default function PrivacyPage() {
  return (
    <>
      <Navbar lang="es" />
      <main id="main">
        <PageHero
          label="Legal"
          title="Política de privacidad"
          description="Última actualización: noviembre de 2026"
        />

        <section className="py-24 px-6 bg-sand">
          <div className="max-w-3xl mx-auto flex flex-col gap-10">

            <div className="flex flex-col gap-4">
              <h2 className="text-xl">1. Datos que recopilamos</h2>
              <p style={body}>
                Este sitio no tiene formularios ni registros: no recopilamos datos personales a través de él.
              </p>
              <p style={body}>
                Si nos escribes por correo electrónico, recibimos los datos que tú decidas incluir en tu mensaje (por ejemplo, tu nombre y tu dirección de correo).
              </p>
            </div>

            <div className="flex flex-col gap-4">
              <h2 className="text-xl">2. Cookies</h2>
              <p style={body}>
                Este sitio no utiliza cookies propias ni de terceros: ni de análisis, ni de seguimiento, ni de publicidad. Por eso no te pedimos consentimiento de cookies al entrar.
              </p>
            </div>

            <div className="flex flex-col gap-4">
              <h2 className="text-xl">3. Alojamiento del sitio</h2>
              <p style={body}>
                El sitio está alojado en <strong>Vercel</strong> (Vercel Inc., EE. UU.). Como cualquier servidor web, Vercel registra datos técnicos de las visitas, como la dirección IP, para entregar las páginas y proteger el sitio frente a abusos. No usamos esos datos para identificarte ni para analizar tu navegación.
              </p>
            </div>

            <div className="flex flex-col gap-4">
              <h2 className="text-xl">4. Uso de los datos</h2>
              <p style={body}>
                Los datos que nos envías por correo se usan únicamente para responder a tu consulta y se conservan solo el tiempo necesario para ello. No los vendemos, cedemos ni compartimos con terceros.
              </p>
            </div>

            <div className="flex flex-col gap-4">
              <h2 className="text-xl">5. Tus derechos</h2>
              <p style={body}>
                Tienes derecho a acceder, rectificar, suprimir, limitar el tratamiento y solicitar la portabilidad de tus datos personales, así como a oponerte a su tratamiento. Para ejercerlos, escríbenos a través de <LegalContact lang="es" />.
              </p>
              <p style={body}>
                Si consideras que no hemos tratado tus datos correctamente, puedes presentar una reclamación ante la Agencia Española de Protección de Datos (aepd.es).
              </p>
            </div>

            <div className="flex flex-col gap-4">
              <h2 className="text-xl">6. Contacto</h2>
              <p style={body}>
                Para cualquier consulta relacionada con esta política, escríbenos a través de <LegalContact lang="es" />.
              </p>
            </div>

          </div>
        </section>
      </main>
      <Footer lang="es" />
    </>
  );
}
