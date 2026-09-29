import Image from "next/image";
import Link from "next/link";

export default function Footer({ lang = "es" }: { lang?: "es" | "en" }) {
  const t = {
    tagline: lang === "en"
      ? "Strengthening public space through rational deliberation, evidence, and pluralism."
      : "Fortalecemos el espacio público a través de la deliberación racional, el uso de evidencia y el pluralismo.",
    links: lang === "en"
      ? ["Activities", "What we offer", "Blog", "About us", "Contact"]
      : ["Actividades", "¿Qué ofrecemos?", "Blog", "Quiénes somos", "Contacto"],
    hrefs: ["/actividades", "/que-ofrecemos", "/blog", "/quienes-somos", "/contacto"],
    rights: lang === "en" ? "All rights reserved." : "Todos los derechos reservados.",
  };

  return (
    <footer className="bg-[#1B3A5C] text-white mt-auto">
      <div className="max-w-6xl mx-auto px-6 py-12 grid grid-cols-1 md:grid-cols-3 gap-10">
        <div className="flex flex-col gap-4">
          <Image src="/logo.png" alt="Proyecto Disonante" width={150} height={46} className="brightness-0 invert" />
          <p className="text-sm text-blue-200 leading-relaxed">{t.tagline}</p>
        </div>

        <div>
          <p className="text-xs font-semibold uppercase tracking-widest text-blue-300 mb-4">
            {lang === "en" ? "Navigation" : "Navegación"}
          </p>
          <ul className="flex flex-col gap-2">
            {t.links.map((label, i) => (
              <li key={i}>
                <Link
                  href={lang === "en" ? `/en${t.hrefs[i]}` : t.hrefs[i]}
                  className="text-sm text-blue-100 hover:text-white transition-colors"
                >
                  {label}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <p className="text-xs font-semibold uppercase tracking-widest text-blue-300 mb-4">
            {lang === "en" ? "Follow us" : "Síguenos"}
          </p>
          <div className="flex gap-4">
            <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" className="text-blue-100 hover:text-white text-sm transition-colors">LinkedIn</a>
            <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" className="text-blue-100 hover:text-white text-sm transition-colors">Twitter</a>
            <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" className="text-blue-100 hover:text-white text-sm transition-colors">Facebook</a>
          </div>
        </div>
      </div>

      <div className="border-t border-blue-800">
        <p className="max-w-6xl mx-auto px-6 py-4 text-xs text-blue-300">
          © {new Date().getFullYear()} Proyecto Disonante. {t.rights}
        </p>
      </div>
    </footer>
  );
}
