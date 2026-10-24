import Link from "next/link";
import { cases } from "@/lib/cases";
import { articles, articlePath } from "@/lib/articles";

// Each case points at its article, in whichever section it lives.
function casePath(slug: string, lang: "es" | "en") {
  const article = articles.find((a) => a.slug === slug);
  return article ? articlePath(article, lang) : lang === "en" ? "/en/actividades" : "/actividades";
}

export default function CaseCards({ lang = "es", limit }: { lang?: "es" | "en"; limit?: number }) {
  
  const list = limit ? cases.slice(0, limit) : cases;

  return (
    <ul className="grid grid-cols-1 md:grid-cols-2 gap-px bg-line border border-line">
      {list.map((c) => {
        const t = c[lang];
        return (
          <li key={c.slug} className="bg-cream md:[&:last-child:nth-child(odd)]:col-span-2">
            <Link
              href={casePath(c.slug, lang)}
              className="group h-full flex flex-col gap-3 p-7 md:p-8 hover:bg-sand transition-colors duration-200"
            >
              <div className="flex items-center justify-between gap-4 flex-wrap">
                <span className="label text-rust">{t.format}</span>
                <span className="text-xs text-muted" style={{ fontFamily: "var(--font-jakarta)" }}>{t.when}</span>
              </div>
              <h3 className="text-lg leading-snug group-hover:text-rust transition-colors duration-200">{c.client}</h3>
              {t.highlight && (
                <p className="text-sm font-semibold text-navy" style={{ fontFamily: "var(--font-jakarta)" }}>
                  {t.highlight}
                </p>
              )}
              <p className="text-[0.9375rem] leading-relaxed">{t.summary}</p>
              <span
                className="mt-auto pt-2 text-sm font-semibold text-rust group-hover:underline"
                style={{ fontFamily: "var(--font-jakarta)" }}
              >
                {lang === "en" ? "Read the case" : "Leer el caso"} <span aria-hidden>→</span>
              </span>
            </Link>
          </li>
        );
      })}
    </ul>
  );
}
