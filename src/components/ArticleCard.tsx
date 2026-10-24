import Link from "next/link";
import { articlePath, type Article } from "@/lib/articles";

interface Props {
  article: Article;
  lang: "es" | "en";
}

export default function ArticleCard({ article, lang }: Props) {
  const t = article[lang];
  const href = articlePath(article, lang);

  return (
    <Link href={href} className="block group h-full">
      <div className="bg-cream border border-line rounded-lg p-7 flex flex-col gap-3 h-full hover:border-navy transition-all duration-300">
        <div className="flex items-center gap-2 flex-wrap">
          <span className="label text-rust">{t.tag}</span>
          {t.date && (
            <>
              <span className="w-1 h-1 rounded-full bg-line flex-shrink-0" />
              <span className="text-xs text-muted" style={{ fontFamily: "var(--font-jakarta)" }}>
                {t.date}
              </span>
            </>
          )}
        </div>
        <h3 className="text-base leading-snug group-hover:text-rust transition-colors duration-200">
          {t.title}
        </h3>
        {t.excerpt && (
          <p className="text-xs leading-relaxed mt-auto" style={{ color: "var(--pd-muted)" }}>
            {t.excerpt}
          </p>
        )}
        {t.author && (
          <p className="text-xs font-semibold text-navy mt-auto" style={{ fontFamily: "var(--font-jakarta)" }}>
            {t.author}
          </p>
        )}
      </div>
    </Link>
  );
}
