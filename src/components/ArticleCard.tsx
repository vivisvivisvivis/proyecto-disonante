import Link from "next/link";
import type { Article } from "@/lib/articles";

interface Props {
  article: Article;
  lang: "es" | "en";
}

export default function ArticleCard({ article, lang }: Props) {
  const t = article[lang];
  const basePath = lang === "en" ? "/en/blog" : "/blog";

  return (
    <Link href={`${basePath}/${article.slug}`} className="block group h-full">
      <div className="bg-[#EBD7BE] border border-[#D8C9B3] rounded-lg p-7 flex flex-col gap-3 h-full hover:border-[#1B3A5C] transition-all duration-300">
        <div className="flex items-center gap-2 flex-wrap">
          <span className="label text-[#C0442C]">{t.tag}</span>
          {t.date && (
            <>
              <span className="w-1 h-1 rounded-full bg-[#D8C9B3] flex-shrink-0" />
              <span className="text-xs text-[#9CA3AF]" style={{ fontFamily: "var(--font-jakarta)" }}>
                {t.date}
              </span>
            </>
          )}
        </div>
        <h3 className="text-base leading-snug group-hover:text-[#C0442C] transition-colors duration-200">
          {t.title}
        </h3>
        {t.excerpt && (
          <p className="text-xs leading-relaxed mt-auto" style={{ color: "#7A8A9A" }}>
            {t.excerpt}
          </p>
        )}
        {t.author && (
          <p className="text-xs font-semibold text-[#1B3A5C] mt-auto" style={{ fontFamily: "var(--font-jakarta)" }}>
            {t.author}
          </p>
        )}
      </div>
    </Link>
  );
}
