import type { Metadata } from "next";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import PageHero from "@/components/PageHero";
import { enAlternates } from "@/lib/seo";

export const metadata: Metadata = {
  title: "Terms of Use",
  description: "Terms of use for the Proyecto Disonante website.",
  alternates: enAlternates("/terms"),
};

export default function TermsEnPage() {
  return (
    <>
      <Navbar lang="en" />
      <main>
        <PageHero
          label="Legal"
          title="Terms of Use"
          description="Last updated: October 2026"
        />

        <section className="py-24 px-6 bg-[#E2CDB4]">
          <div className="max-w-3xl mx-auto flex flex-col gap-10">

            <div className="flex flex-col gap-4">
              <h2 className="text-xl">1. Acceptable use</h2>
              <p style={{ color: "#5A6A7A" }}>
                By accessing and using this website, you agree to use it only for lawful purposes and in accordance with these terms. You may not use this site to distribute illegal, misleading, or rights-infringing content.
              </p>
            </div>

            <div className="flex flex-col gap-4">
              <h2 className="text-xl">2. Intellectual property</h2>
              <p style={{ color: "#5A6A7A" }}>
                All content on this site (text, images, design) is the property of Proyecto Disonante or its authors, and is protected by applicable intellectual property laws. Reproduction, in whole or in part, without express authorization is prohibited.
              </p>
            </div>

            <div className="flex flex-col gap-4">
              <h2 className="text-xl">3. Limitation of liability</h2>
              <p style={{ color: "#5A6A7A" }}>
                Proyecto Disonante shall not be liable for direct, indirect, incidental, or consequential damages arising from the use or inability to use this site. Content is provided for informational purposes only and does not constitute legal advice.
              </p>
            </div>

            <div className="flex flex-col gap-4">
              <h2 className="text-xl">4. Modifications</h2>
              <p style={{ color: "#5A6A7A" }}>
                We reserve the right to modify these terms at any time. Changes take effect upon publication on this page. Continued use of the site after any modification implies acceptance of the updated terms.
              </p>
            </div>

            <div className="flex flex-col gap-4">
              <h2 className="text-xl">5. Governing law</h2>
              <p style={{ color: "#5A6A7A" }}>
                These terms are governed by Spanish law. Any dispute arising from their interpretation or application shall be submitted to the competent courts of Spain.
              </p>
            </div>

            <div className="flex flex-col gap-4">
              <h2 className="text-xl">6. Contact</h2>
              <p style={{ color: "#5A6A7A" }}>
                For any queries about these terms, write to us at{" "}
                <a href="mailto:contacto@proyectodisonante.org" className="text-[#C0442C] hover:underline">
                  contacto@proyectodisonante.org
                </a>.
              </p>
            </div>

          </div>
        </section>
      </main>
      <Footer lang="en" />
    </>
  );
}
