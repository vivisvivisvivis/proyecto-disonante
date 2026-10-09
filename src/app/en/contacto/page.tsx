import type { Metadata } from "next";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import Reveal from "@/components/Reveal";
import ContactForm from "@/components/ContactForm";
import NewsletterForm from "@/components/NewsletterForm";
import PageHero from "@/components/PageHero";

import { enAlternates } from "@/lib/seo";

export const metadata: Metadata = {
  title: "Contact",
  description: "We are interested in exchanging ideas with you. Contact us by filling out the form.",
  alternates: enAlternates("/contacto"),
};

export default function ContactoEnPage() {
  return (
    <>
      <Navbar lang="en" />
      <main>
        <PageHero
          label="Dialogue"
          title="Contact"
          description="We are interested in exchanging ideas with you. Contact us by filling out the form."
        />

        <section className="py-24 px-6 bg-[#E2CDB4] relative overflow-hidden">
          <div className="max-w-5xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-16 items-start">
            {/* Left: context */}
            <Reveal direction="left">
              <div className="flex flex-col gap-8">
                <div className="flex flex-col gap-3">
                  <span className="label text-[#C0442C]">Why write to us?</span>
                  <p style={{ color: "#5A6A7A" }}>
                    We are interested in learning about your concerns and proposals. Whether you are part of a government, a civil society organization, an educational institution or a business, we can explore together how to strengthen civic space through deliberation.
                  </p>
                </div>

                <div className="flex flex-col gap-4">
                  {[
                    { title: "Diagnosis and solutions", desc: "Situations of blocked dialogue" },
                    { title: "Training", desc: "Deliberative practices and rational dialogue" },
                    { title: "Implementation", desc: "Decisions that generate conflict" },
                    { title: "Evidence-based argumentation", desc: "Development of rational arguments" },
                  ].map((item) => (
                    <div key={item.title} className="flex items-start gap-3 p-4 rounded border border-[#D8C9B3] hover:border-[#C0442C] transition-colors duration-200">
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
              <ContactForm lang="en" />
            </Reveal>
          </div>
        </section>

        {/* Newsletter */}
        <section className="py-20 px-6 bg-[#EBD7BE] border-t border-[#D8C9B3] relative overflow-hidden">
          <Reveal className="max-w-xl mx-auto text-center flex flex-col gap-6">
            <span className="label text-[#C0442C]">Newsletter</span>
            <h2>Subscribe</h2>
            <p style={{ color: "#5A6A7A" }}>Enter your email to receive updates.</p>
            <NewsletterForm />
          </Reveal>
        </section>
      </main>
      <Footer lang="en" />
    </>
  );
}
