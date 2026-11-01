import type { Metadata } from "next";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import PageHero from "@/components/PageHero";
import LegalContact from "@/components/LegalContact";
import { enAlternates } from "@/lib/seo";

export const metadata: Metadata = {
  title: "Privacy Policy",
  description: "Privacy policy of Proyecto Disonante.",
  alternates: enAlternates("/privacy"),
};

const body = { color: "var(--pd-body)" };

export default function PrivacyEnPage() {
  return (
    <>
      <Navbar lang="en" />
      <main id="main">
        <PageHero
          label="Legal"
          title="Privacy Policy"
          description="Last updated: November 2026"
        />

        <section className="py-24 px-6 bg-sand">
          <div className="max-w-3xl mx-auto flex flex-col gap-10">

            <div className="flex flex-col gap-4">
              <h2 className="text-xl">1. Data we collect</h2>
              <p style={body}>
                This site has no forms or sign-ups: we do not collect personal data through it.
              </p>
              <p style={body}>
                If you email us, we receive whatever information you choose to include in your message (for example, your name and email address).
              </p>
            </div>

            <div className="flex flex-col gap-4">
              <h2 className="text-xl">2. Cookies</h2>
              <p style={body}>
                This site does not use its own or third-party cookies: no analytics, tracking or advertising cookies. That is why we do not ask for cookie consent when you arrive.
              </p>
            </div>

            <div className="flex flex-col gap-4">
              <h2 className="text-xl">3. Hosting</h2>
              <p style={body}>
                The site is hosted by <strong>Vercel</strong> (Vercel Inc., USA). Like any web server, Vercel logs technical visit data, such as IP addresses, to deliver pages and protect the site from abuse. We do not use this data to identify you or to analyse your browsing.
              </p>
            </div>

            <div className="flex flex-col gap-4">
              <h2 className="text-xl">4. How we use data</h2>
              <p style={body}>
                Information you send us by email is used only to reply to you and is kept only as long as needed for that. We do not sell, transfer or share it with third parties.
              </p>
            </div>

            <div className="flex flex-col gap-4">
              <h2 className="text-xl">5. Your rights</h2>
              <p style={body}>
                You have the right to access, rectify, erase, restrict the processing of and request the portability of your personal data, and to object to its processing. To exercise these rights, contact us through <LegalContact lang="en" />.
              </p>
              <p style={body}>
                If you believe we have not handled your data properly, you can file a complaint with the Spanish Data Protection Agency (aepd.es).
              </p>
            </div>

            <div className="flex flex-col gap-4">
              <h2 className="text-xl">6. Contact</h2>
              <p style={body}>
                For any questions about this policy, contact us through <LegalContact lang="en" />.
              </p>
            </div>

          </div>
        </section>
      </main>
      <Footer lang="en" />
    </>
  );
}
