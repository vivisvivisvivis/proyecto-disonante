import Link from "next/link";
import { site } from "@/lib/site";
import { localHref } from "@/lib/nav";

// Contact for the legal pages: the public email (lib/site.ts) plus the
// contact page. Callers write "escríbenos a <LegalContact/>" / "write to us at".
export default function LegalContact({ lang }: { lang: "es" | "en" }) {
  const es = lang === "es";
  const page = (
    <Link href={localHref(lang, "/contacto")} className="text-rust hover:underline">
      {es ? "nuestra página de contacto" : "our contact page"}
    </Link>
  );
  if (!site.email) {
    return <>{es ? "través de " : "through "}{page}</>;
  }
  return (
    <>
      <a href={`mailto:${site.email}`} className="text-rust hover:underline">
        {site.email}
      </a>
      {es ? " o a través de " : " or through "}
      {page}
    </>
  );
}
