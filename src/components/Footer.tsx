import Image from "next/image";
import Link from "next/link";
import { navLinks, localHref } from "@/lib/nav";
import { site } from "@/lib/site";

const socialLabels = { linkedin: "LinkedIn", instagram: "Instagram", youtube: "YouTube" } as const;

export default function Footer({ lang = "es" }: { lang?: "es" | "en" }) {
  const en = lang === "en";
  const socials = (Object.keys(socialLabels) as (keyof typeof socialLabels)[]).filter((k) => site.social[k]);

  return (
    <footer className="bg-navy text-white mt-auto">
      <div className="max-w-6xl mx-auto px-6 py-12 grid grid-cols-1 md:grid-cols-3 gap-10">
        <div className="flex flex-col gap-4">
          <Image src="/logo.png" alt="Proyecto Disonante" width={150} height={46} className="brightness-0 invert" />
          <p className="text-sm text-blue-100 leading-relaxed">
            {en
              ? "Strengthening public space through rational deliberation, evidence, and pluralism."
              : "Fortalecemos el espacio público a través de la deliberación racional, el uso de evidencia y el pluralismo."}
          </p>
        </div>

        <div>
          <p className="text-xs font-semibold uppercase tracking-widest text-blue-200 mb-4">
            {en ? "Navigation" : "Navegación"}
          </p>
          <ul className="flex flex-col gap-2">
            {navLinks.map((link) => (
              <li key={link.href}>
                <Link href={localHref(lang, link.href)} className="text-sm text-blue-100 hover:text-white hover:underline">
                  {link[lang]}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        <div className="flex flex-col gap-3">
          <p className="text-xs font-semibold uppercase tracking-widest text-blue-200 mb-1">
            {en ? "Contact" : "Contacto"}
          </p>
          {site.email && (
            <a href={`mailto:${site.email}`} className="text-sm text-white hover:underline break-all">
              {site.email}
            </a>
          )}
          <Link href={localHref(lang, "/contacto")} className="text-sm text-blue-100 hover:text-white hover:underline">
            {en ? "Contact us →" : "Contáctanos →"}
          </Link>
          {socials.length > 0 && (
            <ul className="flex flex-wrap gap-x-5 gap-y-2 mt-2">
              {socials.map((k) => (
                <li key={k}>
                  <a
                    href={site.social[k]}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-sm text-blue-100 hover:text-white hover:underline"
                  >
                    {socialLabels[k]}
                  </a>
                </li>
              ))}
            </ul>
          )}
        </div>
      </div>

      <div className="border-t border-white/15">
        <div className="max-w-6xl mx-auto px-6 py-4 flex flex-col sm:flex-row items-start sm:items-center gap-2 sm:gap-6">
          <p className="text-xs text-blue-200">
            © {new Date().getFullYear()} Proyecto Disonante. {en ? "All rights reserved." : "Todos los derechos reservados."}
          </p>
          <div className="flex gap-4">
            <Link href={localHref(lang, "/privacy")} className="text-xs text-blue-200 hover:text-white hover:underline">
              {en ? "Privacy Policy" : "Política de privacidad"}
            </Link>
            <Link href={localHref(lang, "/terms")} className="text-xs text-blue-200 hover:text-white hover:underline">
              {en ? "Terms of Use" : "Términos de uso"}
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
