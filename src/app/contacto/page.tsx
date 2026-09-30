import type { Metadata } from "next";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import Reveal from "@/components/Reveal";
import GeometricAccent from "@/components/GeometricAccent";
import ContactForm from "@/components/ContactForm";
import NewsletterForm from "@/components/NewsletterForm";
import PageHero from "@/components/PageHero";

export const metadata: Metadata = {
  title: "Contacto — Proyecto Disonante",
  description: "Nos interesa intercambiar ideas contigo. Contáctanos completando el formulario.",
};

export default function ContactoPage() {
  return (
    <>
      <Navbar lang="es" />
      <main>
        <PageHero
          label="Diálogo"
          title="Contacto"
          description="Nos interesa intercambiar ideas contigo. Contáctanos completando el formulario."
        />

        <section className="py-24 px-6 bg-white relative overflow-hidden">
          <div className="absolute -right-16 top-0 pointer-events-none">
            <GeometricAccent size={380} opacity={0.04} color="#1B3A5C" />
          </div>
          <div className="max-w-5xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-16 items-start">
            {/* Left: context */}
            <Reveal direction="left">
              <div className="flex flex-col gap-8">
                <div className="flex flex-col gap-3">
                  <span className="label text-[#C0442C]">¿Por qué escribirnos?</span>
                  <p style={{ color: "#5A6A7A" }}>
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
                    <div key={item.title} className="flex items-start gap-3 p-4 rounded-2xl border border-[#E8E2D9] hover:border-[#C0442C] transition-colors duration-200">
                      <span className="w-1.5 h-1.5 rounded-full bg-[#C0442C] flex-shrink-0 mt-2" />
                      <div>
                        <p className="text-sm font-semibold text-[#1B3A5C]" style={{ fontFamily: "var(--font-jakarta)" }}>{item.title}</p>
                        <p className="text-xs mt-0.5" style={{ color: "#6B7280", fontFamily: "var(--font-jakarta)" }}>{item.desc}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </Reveal>

            {/* Right: form */}
            <Reveal direction="right">
              <ContactForm />
            </Reveal>
          </div>
        </section>

        {/* Newsletter */}
        <section className="py-20 px-6 bg-[#FAF7F2] border-t border-[#E8E2D9] relative overflow-hidden">
          <div className="absolute right-0 top-0 pointer-events-none">
            <GeometricAccent size={280} opacity={0.05} color="#1B3A5C" />
          </div>
          <Reveal className="max-w-xl mx-auto text-center flex flex-col gap-6 relative z-10">
            <span className="label text-[#C0442C]">Newsletter</span>
            <h2>Suscribite</h2>
            <p style={{ color: "#5A6A7A" }}>Ingresá tu correo para recibir novedades.</p>
            <NewsletterForm />
          </Reveal>
        </section>
      </main>
      <Footer lang="es" />
    </>
  );
}
