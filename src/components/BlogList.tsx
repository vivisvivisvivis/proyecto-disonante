import Link from "next/link";
import { articlePath, type Article } from "@/lib/articles";

interface Props {
  articles: Article[];
  lang: "es" | "en";
  /** Slugs whose full text exists only in Spanish (EN list only). */
  spanishOnly?: string[];
}

const ui = { fontFamily: "var(--font-jakarta)" };

// Newest first: the first entry is featured, the rest go in a grid.
export default function BlogList({ articles, lang, spanishOnly = [] }: Props) {
  const [featured, ...rest] = articles;
  const spanishBadge = (slug: string) =>
    spanishOnly.includes(slug) ? (
      <span className="text-[0.6875rem] font-semibold uppercase tracking-wider border border-current rounded px-1.5 py-0.5" style={ui}>
        Spanish only
      </span>
    ) : null;

  return (
    <div className="max-w-5xl mx-auto">
      {featured && (
        <Link href={articlePath(featured, lang)} className="block group mb-8">
          <article className="rounded-lg bg-navy p-8 md:p-14 flex flex-col gap-4 group-hover:bg-navy-dark transition-colors duration-200">
            <div className="flex items-center gap-3 flex-wrap text-blue-200">
              <span className="label">{featured[lang].tag}</span>
              {featured[lang].date && (
                <>
                  <span aria-hidden>·</span>
                  <time dateTime={featured.isoDate} className="text-xs" style={ui}>{featured[lang].date}</time>
                </>
              )}
              {spanishBadge(featured.slug)}
            </div>
            <h2 className="heading-sentence text-white max-w-3xl">{featured[lang].title}</h2>
            {featured[lang].excerpt && <p className="text-blue-100 text-lg leading-relaxed max-w-3xl">{featured[lang].excerpt}</p>}
            {featured[lang].author && (
              <p className="text-sm font-semibold text-blue-200 mt-2" style={ui}>{featured[lang].author}</p>
            )}
          </article>
        </Link>
      )}

      {rest.length > 0 && (
        <ul className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {rest.map((article) => (
            <li key={article.slug}>
              <Link href={articlePath(article, lang)} className="block group h-full">
                <article className="bg-cream border border-line rounded-lg p-7 flex flex-col gap-3 h-full group-hover:border-navy transition-colors duration-200">
                  <div className="flex items-center gap-2 flex-wrap text-muted">
                    <span className="label text-rust">{article[lang].tag}</span>
                    {article[lang].date && (
                      <>
                        <span aria-hidden>·</span>
                        <time dateTime={article.isoDate} className="text-xs" style={ui}>{article[lang].date}</time>
                      </>
                    )}
                    {spanishBadge(article.slug)}
                  </div>
                  <h3 className="text-lg leading-snug group-hover:text-rust transition-colors duration-200">{article[lang].title}</h3>
                  {article[lang].excerpt && <p className="text-sm leading-relaxed">{article[lang].excerpt}</p>}
                  {article[lang].author && (
                    <p className="text-xs font-semibold text-navy mt-auto pt-2" style={ui}>{article[lang].author}</p>
                  )}
                </article>
              </Link>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}
