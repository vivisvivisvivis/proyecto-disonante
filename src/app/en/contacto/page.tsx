import type { Metadata } from "next";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import Reveal from "@/components/Reveal";
import ContactForm from "@/components/ContactForm";
import NewsletterForm from "@/components/NewsletterForm";
import PageHero from "@/components/PageHero";
import { site } from "@/lib/site";

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
      <main id="main">
        <PageHero
          label="Dialogue"
          title="Contact"
          description="We are interested in exchanging ideas with you. Contact us by filling out the form."
        />

        <section className="py-24 px-6 bg-sand relative overflow-hidden">
          <div className="max-w-[72rem] mx-auto grid grid-cols-1 md:grid-cols-2 gap-16 items-start">
            {/* Left: context */}
            <Reveal direction="left">
              <div className="flex flex-col gap-8">
                <div className="flex flex-col gap-3">
                  <span className="label text-rust">Why write to us?</span>
                  <p style={{ color: "var(--pd-body)" }}>
                    We are interested in learning about your concerns and proposals. Whether you are part of a government, a civil society organization, an educational institution or a business, we can explore together how to strengthen civic space through deliberation.
                  </p>
                </div>

                <div className="flex flex-col border-t border-navy/20">
                  {[
                    { title: "Diagnosis and solutions", desc: "Situations of blocked dialogue" },
                    { title: "Training", desc: "Deliberative practices and rational dialogue" },
                    { title: "Implementation", desc: "Decisions that generate conflict" },
                    { title: "Evidence-based argumentation", desc: "Development of rational arguments" },
                  ].map((item) => (
                    <div key={item.title} className="border-b border-navy/20 py-4">
                      <div>
                        <p className="font-ui text-lg font-semibold text-navy">{item.title}</p>
                        <p className="font-ui text-sm mt-0.5 text-muted">{item.desc}</p>
                      </div>
                    </div>
                  ))}
                </div>
                {site.email && (
                  <p className="text-sm">
                    You can also write to us at{" "}
                    <a href={`mailto:${site.email}`} className="font-semibold text-navy underline underline-offset-2 break-all">
                      {site.email}
                    </a>
                  </p>
                )}
              </div>
            </Reveal>

            {/* Right: form */}
            <Reveal direction="right">
              <ContactForm lang="en" />
            </Reveal>
          </div>
        </section>

        {/* Newsletter */}
        <section className="py-20 px-6 bg-cream border-t border-line relative overflow-hidden">
          <Reveal className="max-w-xl mx-auto text-center flex flex-col gap-6">
            <h2 className="section-title">Subscribe</h2>
            <p style={{ color: "var(--pd-body)" }}>Enter your email to receive updates.</p>
            <NewsletterForm lang="en" source="contact-en" />
          </Reveal>
        </section>
      </main>
      <Footer lang="en" />
    </>
  );
}
