import type { Metadata } from "next";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import PageHero from "@/components/PageHero";
import { enAlternates } from "@/lib/seo";

export const metadata: Metadata = {
  title: "Privacy Policy",
  description: "Privacy policy of Proyecto Disonante.",
  alternates: enAlternates("/privacy"),
};

export default function PrivacyEnPage() {
  return (
    <>
      <Navbar lang="en" />
      <main>
        <PageHero
          label="Legal"
          title="Privacy Policy"
          description="Last updated: October 2026"
        />

        <section className="py-24 px-6 bg-[#E2CDB4]">
          <div className="max-w-3xl mx-auto flex flex-col gap-10">

            <div className="flex flex-col gap-4">
              <h2 className="text-xl">1. Data we collect</h2>
              <p style={{ color: "#5A6A7A" }}>
                We only collect data you voluntarily provide: your name, email address, and message when you submit the contact form, or your email when you subscribe to our newsletter.
              </p>
              <p style={{ color: "#5A6A7A" }}>
                We do not collect browsing data and do not use third-party analytics tools that track your behavior.
              </p>
            </div>

            <div className="flex flex-col gap-4">
              <h2 className="text-xl">2. Cookies</h2>
              <p style={{ color: "#5A6A7A" }}>
                This site uses a technical cookie to remember your cookie consent preference. We do not use tracking or third-party advertising cookies. You can accept or decline cookies via the banner shown on your first visit.
              </p>
            </div>

            <div className="flex flex-col gap-4">
              <h2 className="text-xl">3. Third-party services</h2>
              <p style={{ color: "#5A6A7A" }}>
                We use the following third-party services to operate this site:
              </p>
              <ul className="flex flex-col gap-2 pl-4" style={{ color: "#5A6A7A" }}>
                <li><strong>Vercel</strong> — website hosting and delivery. Access data may be processed by Vercel Inc. (USA).</li>
                <li><strong>Formspree</strong> — contact form processing. Messages you send are transmitted through their servers.</li>
              </ul>
            </div>

            <div className="flex flex-col gap-4">
              <h2 className="text-xl">4. Use of data</h2>
              <p style={{ color: "#5A6A7A" }}>
                Data you provide is used solely to respond to your inquiry or send you the newsletter communications you subscribed to. We do not sell, transfer, or share your data with third parties, except as described above.
              </p>
            </div>

            <div className="flex flex-col gap-4">
              <h2 className="text-xl">5. Your rights</h2>
              <p style={{ color: "#5A6A7A" }}>
                If you are in the European Economic Area, you have the right to access, rectify, erase, restrict processing, and port your personal data. To exercise any of these rights, write to us at{" "}
                <a href="mailto:contacto@proyectodisonante.org" className="text-[#C0442C] hover:underline">
                  contacto@proyectodisonante.org
                </a>.
              </p>
            </div>

            <div className="flex flex-col gap-4">
              <h2 className="text-xl">6. Contact</h2>
              <p style={{ color: "#5A6A7A" }}>
                For any queries related to this policy, write to us at{" "}
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
