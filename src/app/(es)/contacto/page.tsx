import type { Metadata } from "next";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import Reveal from "@/components/Reveal";
import ContactForm from "@/components/ContactForm";
import NewsletterForm from "@/components/NewsletterForm";
import PageHero from "@/components/PageHero";
import { site } from "@/lib/site";

import { esAlternates } from "@/lib/seo";

export const metadata: Metadata = {
  title: "Contacto",
  description: "Nos interesa intercambiar ideas contigo. Contáctanos completando el formulario.",
  alternates: esAlternates("/contacto"),
};

export default function ContactoPage() {
  return (
    <>
      <Navbar lang="es" />
      <main id="main">
        <PageHero
          label="Diálogo"
          title="Contacto"
          description="Nos interesa intercambiar ideas contigo. Contáctanos completando el formulario."
        />

        <section className="py-24 px-6 bg-sand relative overflow-hidden">
          <div className="max-w-5xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-16 items-start">
            {/* Left: context */}
            <Reveal direction="left">
              <div className="flex flex-col gap-8">
                <div className="flex flex-col gap-3">
                  <span className="label text-rust">¿Por qué escribirnos?</span>
                  <p style={{ color: "var(--pd-body)" }}>
                    Nos interesa conocer tus inquietudes y propuestas. Tanto si eres parte de un gobierno, una organización de la sociedad civil, una institución educativa o una empresa, podemos explorar juntos cómo fortalecer el espacio cívico a través de la deliberación.
                  </p>
                </div>

                <div className="flex flex-col gap-4">
                  {[
                    { title: "Diagnóstico y soluciones", desc: "Situaciones de diálogo bloqueado" },
                    { title: "Formación", desc: "Prácticas deliberativas y diálogo racional" },
                    { title: "Implementación", desc: "Decisiones que generan conflictividad" },
                    { title: "Argumentación basada en evidencia", desc: "Elaboración de argumentos racionales" },
                  ].map((item) => (
                    <div key={item.title} className="flex items-start gap-3 p-4 rounded border border-line">
                      <span aria-hidden className="w-1.5 h-1.5 rounded-full bg-terracotta flex-shrink-0 mt-2" />
                      <div>
                        <p className="text-sm font-semibold text-navy" style={{ fontFamily: "var(--font-jakarta)" }}>{item.title}</p>
                        <p className="text-xs mt-0.5" style={{ color: "var(--pd-muted)", fontFamily: "var(--font-jakarta)" }}>{item.desc}</p>
                      </div>
                    </div>
                  ))}
                </div>
                {site.email && (
                  <p className="text-sm">
                    También puedes escribirnos a{" "}
                    <a href={`mailto:${site.email}`} className="font-semibold text-navy underline underline-offset-2 break-all">
                      {site.email}
                    </a>
                  </p>
                )}
              </div>
            </Reveal>

            {/* Right: form */}
            <Reveal direction="right">
              <ContactForm lang="es" />
            </Reveal>
          </div>
        </section>

        {/* Newsletter */}
        <section className="py-20 px-6 bg-cream border-t border-line relative overflow-hidden">
          <Reveal className="max-w-xl mx-auto text-center flex flex-col gap-6">
            <span className="label text-rust">Newsletter</span>
            <h2>Suscríbete</h2>
            <p style={{ color: "var(--pd-body)" }}>Ingresa tu correo para recibir novedades.</p>
            <NewsletterForm lang="es" source="contact-es" />
          </Reveal>
        </section>
      </main>
      <Footer lang="es" />
    </>
  );
}
