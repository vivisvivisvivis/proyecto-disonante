import Link from "next/link";
import { cases } from "@/lib/cases";

export default function CaseCards({ lang = "es", limit }: { lang?: "es" | "en"; limit?: number }) {
  const base = lang === "en" ? "/en/blog" : "/blog";
  const list = limit ? cases.slice(0, limit) : cases;

  return (
    <ul className="grid grid-cols-1 md:grid-cols-2 gap-5">
      {list.map((c) => {
        const t = c[lang];
        return (
          <li key={c.slug}>
            <Link
              href={`${base}/${c.slug}`}
              className="group h-full flex flex-col gap-4 p-8 md:p-10 bg-sand border border-line rounded hover:border-navy transition-colors duration-300"
            >
              <div className="flex items-center justify-between gap-4 flex-wrap">
                <span className="font-ui text-xs font-semibold text-rust">{t.format}</span>
                <span className="text-xs text-muted" style={{ fontFamily: "var(--font-jakarta)" }}>{t.when}</span>
              </div>
              <h3 className="case-rail-title">{c.client}</h3>
              {t.highlight && (
                <p className="text-sm font-semibold text-navy" style={{ fontFamily: "var(--font-jakarta)" }}>
                  {t.highlight}
                </p>
              )}
              <p className="text-[0.9375rem] leading-relaxed">{t.summary}</p>
              <span
                className="mt-auto pt-2 text-sm font-semibold text-rust link-underline self-start"
                style={{ fontFamily: "var(--font-jakarta)" }}
              >
                {lang === "en" ? "Read the case" : "Leer el caso"}
              </span>
            </Link>
          </li>
        );
      })}
    </ul>
  );
}
