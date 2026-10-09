"use client";

import Link from "next/link";
import { Suspense } from "react";
import { useRouter, useSearchParams, usePathname } from "next/navigation";
import { categoryLabels, type Article, type Category } from "@/lib/articles";

interface Props {
  articles: Article[];
  lang: "es" | "en";
  /** Slugs whose full text exists only in Spanish (EN list only). */
  spanishOnly?: string[];
}

const ui = { fontFamily: "var(--font-jakarta)" };
const categories = Object.keys(categoryLabels) as Category[];

// The category filter lives in the URL (?cat=analisis) so it can be shared and survives reloads.
// The static HTML renders the unfiltered list; the filter applies once the page hydrates.
export default function BlogList(props: Props) {
  return (
    <Suspense fallback={<BlogListView {...props} active={null} />}>
      <BlogListWithParams {...props} />
    </Suspense>
  );
}

function BlogListWithParams(props: Props) {
  const params = useSearchParams();
  const router = useRouter();
  const pathname = usePathname();
  const cat = params.get("cat");
  const active = cat && categories.includes(cat as Category) ? (cat as Category) : null;

  const onSelect = (next: Category | null) => {
    router.replace(next ? `${pathname}?cat=${next}` : pathname, { scroll: false });
  };

  return <BlogListView {...props} active={active} onSelect={onSelect} />;
}

function BlogListView({
  articles,
  lang,
  spanishOnly = [],
  active,
  onSelect,
}: Props & { active: Category | null; onSelect?: (cat: Category | null) => void }) {
  const en = lang === "en";
  const select = (cat: Category | null) => onSelect?.(cat);

  const filtered = active ? articles.filter((a) => a.category === active) : articles;
  const [featured, ...rest] = filtered;
  const basePath = en ? "/en/blog" : "/blog";
  const spanishBadge = (slug: string) =>
    spanishOnly.includes(slug) ? (
      <span className="text-xs font-semibold border border-current rounded px-1.5 py-0.5" style={ui}>
        Spanish only
      </span>
    ) : null;

  const pill = (selected: boolean) =>
    `px-4 py-2 rounded text-sm font-semibold transition-colors duration-150 ${
      selected ? "bg-navy text-white" : "bg-cream border border-line text-ink hover:border-navy hover:text-navy"
    }`;

  return (
    <div className="max-w-[72rem] mx-auto">
      <div role="group" aria-label={en ? "Filter by category" : "Filtrar por categoría"} className="mb-10 flex flex-wrap gap-2">
        <button onClick={() => select(null)} aria-pressed={active === null} className={pill(active === null)} style={ui}>
          {en ? "All" : "Todo"} <span className="font-normal">({articles.length})</span>
        </button>
        {categories.map((cat) => (
          <button key={cat} onClick={() => select(cat)} aria-pressed={active === cat} className={pill(active === cat)} style={ui}>
            {categoryLabels[cat][lang]}{" "}
            <span className="font-normal">({articles.filter((a) => a.category === cat).length})</span>
          </button>
        ))}
      </div>

      {featured && (
        <Link href={`${basePath}/${featured.slug}`} className="block group mb-8">
          <article className="rounded bg-navy p-8 md:p-16 flex flex-col gap-5 group-hover:bg-navy-dark transition-colors duration-300">
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
            <h2 className="heading-sentence featured-title text-white max-w-4xl">{featured[lang].title}</h2>
            {featured[lang].excerpt && <p className="text-blue-100 text-lg leading-relaxed max-w-3xl">{featured[lang].excerpt}</p>}
            {featured[lang].author && (
              <p className="text-sm font-semibold text-blue-200 mt-2" style={ui}>{featured[lang].author}</p>
            )}
          </article>
        </Link>
      )}

      {rest.length > 0 && (
        <ul className="border-t border-navy/20">
          {rest.map((article) => (
            <li key={article.slug} className="border-b border-navy/20">
              <Link href={`${basePath}/${article.slug}`} className="index-row group">
                <div className="flex md:flex-col gap-2 md:w-40 shrink-0 flex-wrap items-center md:items-start font-ui text-sm">
                  <span className="font-semibold text-rust">{article[lang].tag}</span>
                  {article[lang].date && (
                    <time dateTime={article.isoDate} className="text-muted">{article[lang].date}</time>
                  )}
                  {spanishBadge(article.slug)}
                </div>
                <div className="flex flex-col gap-2 flex-1">
                  <h3 className="index-row-title">{article[lang].title}</h3>
                  {article[lang].excerpt && <p className="text-[0.9375rem] leading-relaxed max-w-2xl">{article[lang].excerpt}</p>}
                </div>
                {article[lang].author && (
                  <span className="font-ui text-sm font-semibold text-navy md:w-48 md:text-right shrink-0">{article[lang].author}</span>
                )}
              </Link>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}
