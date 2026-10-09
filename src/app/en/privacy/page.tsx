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
      <main id="main">
        <PageHero
          label="Legal"
          title="Privacy Policy"
          description="Last updated: October 2026"
        />

        <section className="py-24 px-6 bg-sand">
          <div className="max-w-3xl mx-auto flex flex-col gap-10">

            <div className="flex flex-col gap-4">
              <h2 className="text-xl">1. Data we collect</h2>
              <p style={{ color: "var(--pd-body)" }}>
                We only collect data you voluntarily provide: your name, email address, and message when you submit the contact form, or your email when you subscribe to our newsletter.
              </p>
              <p style={{ color: "var(--pd-body)" }}>
                We do not collect browsing data and do not use third-party analytics tools that track your behavior.
              </p>
            </div>

            <div className="flex flex-col gap-4">
              <h2 className="text-xl">2. Cookies</h2>
              <p style={{ color: "var(--pd-body)" }}>
                This site does not use first-party or third-party cookies: no analytics, tracking or advertising cookies. That is why we do not ask for cookie consent when you visit.
              </p>
            </div>

            <div className="flex flex-col gap-4">
              <h2 className="text-xl">3. Third-party services</h2>
              <p style={{ color: "var(--pd-body)" }}>
                We use the following third-party services to operate this site:
              </p>
              <ul className="flex flex-col gap-2 pl-4" style={{ color: "var(--pd-body)" }}>
                <li><strong>Vercel</strong> — website hosting and delivery. Access data may be processed by Vercel Inc. (USA).</li>
                <li><strong>Resend</strong> — email delivery of contact form messages and newsletter signups. The data you send is transmitted through their servers (Resend Inc., USA).</li>
              </ul>
            </div>

            <div className="flex flex-col gap-4">
              <h2 className="text-xl">4. Use of data</h2>
              <p style={{ color: "var(--pd-body)" }}>
                Data you provide is used solely to respond to your inquiry or send you the newsletter communications you subscribed to. We do not sell, transfer, or share your data with third parties, except as described above.
              </p>
            </div>

            <div className="flex flex-col gap-4">
              <h2 className="text-xl">5. Your rights</h2>
              <p style={{ color: "var(--pd-body)" }}>
                If you are in the European Economic Area, you have the right to access, rectify, erase, restrict processing, and port your personal data. To exercise any of these rights, write to us at{" "}
                <a href="mailto:contacto@proyectodisonante.org" className="text-rust hover:underline">
                  contacto@proyectodisonante.org
                </a>.
              </p>
            </div>

            <div className="flex flex-col gap-4">
              <h2 className="text-xl">6. Contact</h2>
              <p style={{ color: "var(--pd-body)" }}>
                For any queries related to this policy, write to us at{" "}
                <a href="mailto:contacto@proyectodisonante.org" className="text-rust hover:underline">
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
