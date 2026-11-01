import Link from "next/link";
import { site } from "@/lib/site";
import { localHref } from "@/lib/nav";

// Contact link for the legal pages: the public email once it is set in
// lib/site.ts, otherwise the contact page.
export default function LegalContact({ lang }: { lang: "es" | "en" }) {
  if (site.email) {
    return (
      <a href={`mailto:${site.email}`} className="text-rust hover:underline">
        {site.email}
      </a>
    );
  }
  return (
    <Link href={localHref(lang, "/contacto")} className="text-rust hover:underline">
      {lang === "es" ? "nuestra página de contacto" : "our contact page"}
    </Link>
  );
}
