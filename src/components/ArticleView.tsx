import type { Metadata } from "next";
import Link from "next/link";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import ArticleCard from "@/components/ArticleCard";
import { articles, articlePath, sectionLabels, sectionPath, type Article, type Section } from "@/lib/articles";
import { esBodies, enBodies } from "@/lib/articleContent";
import { esAlternates, enAlternates } from "@/lib/seo";

const SITE = "https://proyectodisonante.org";
const ui = { fontFamily: "var(--font-jakarta)" };

const copy = {
  es: {
    share: "Compartir",
    related: "También te puede interesar",
    backTo: { actividades: "← Volver a Actividades realizadas", blog: "← Volver al Blog" },
  },
  en: {
    share: "Share",
    related: "You may also like",
    backTo: { actividades: "← Back to Past activities", blog: "← Back to the Blog" },
  },
};

export function findArticle(section: Section, slug: string) {
  return articles.find((a) => a.slug === slug && a.section === section);
}

export function articleParams(section: Section) {
  return articles.filter((a) => a.section === section).map((a) => ({ slug: a.slug }));
}

export function articleMetadata(article: Article | undefined, lang: "es" | "en"): Metadata {
  if (!article) return {};
  const t = article[lang];
  const esPath = articlePath(article, "es");
  return {
    title: t.title,
    description: t.excerpt || t.title,
    alternates: lang === "es" ? esAlternates(esPath) : enAlternates(esPath),
  };
}

export default function ArticleView({ article, lang }: { article: Article; lang: "es" | "en" }) {
  const c = copy[lang];
  const { title, author, date, excerpt, tag } = article[lang];
  const Body = (lang === "es" ? esBodies : enBodies)[article.slug] ?? null;
  const url = `${SITE}${articlePath(article, lang)}`;
  const sectionHref = sectionPath(article.section, lang);
  const sectionName = sectionLabels[article.section][lang];
  const related = articles
    .filter((a) => a.slug !== article.slug && a.section === article.section)
    .slice(0, 2);

  const shareUrl = encodeURIComponent(url);
  const shareTitle = encodeURIComponent(title);
  const shareLink =
    "text-xs font-semibold text-navy hover:text-rust transition-colors border border-line hover:border-terracotta px-4 py-1.5 rounded";

  return (
    <>
      <Navbar lang={lang} />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Article",
            headline: title,
            ...(article.isoDate ? { datePublished: article.isoDate } : {}),
            ...(author ? { author: { "@type": "Person", name: author } } : {}),
            publisher: { "@type": "Organization", name: "Proyecto Disonante" },
            inLanguage: lang,
            url,
          }),
        }}
      />
      <main id="main" className="bg-cream min-h-screen">
        {/* Header */}
        <section className="pt-20 pb-16 px-6 bg-sand border-b border-line">
          <div className="max-w-3xl mx-auto flex flex-col gap-6">
            <Link href={sectionHref} className="text-sm text-muted hover:text-rust transition-colors self-start" style={ui}>
              ← {sectionName}
            </Link>

            <div className="flex items-center gap-3 flex-wrap">
              <span className="label text-rust">{tag}</span>
              {date && (
                <>
                  <span aria-hidden className="w-1 h-1 rounded bg-muted" />
                  <time dateTime={article.isoDate} className="text-xs text-muted" style={ui}>
                    {date}
                  </time>
                </>
              )}
              {author && (
                <>
                  <span aria-hidden className="w-1 h-1 rounded bg-muted" />
                  <span className="text-xs font-semibold text-navy" style={ui}>
                    {author}
                  </span>
                </>
              )}
            </div>

            <h1 className="heading-sentence">{title}</h1>
            <div className="h-px bg-line" />
          </div>
        </section>

        {/* Body */}
        <section className="py-16 px-6">
          <div className="max-w-3xl mx-auto flex flex-col gap-10">
            {excerpt && !Body && (
              <p className="text-xl leading-relaxed" style={{ color: "var(--pd-body)", fontFamily: "var(--font-source)" }}>
                {excerpt}
              </p>
            )}

            {lang === "en" && !Body && (
              <div className="border border-line rounded p-5 flex flex-col gap-2 bg-sand">
                <p className="font-semibold text-ink" style={ui}>
                  This article is available in Spanish only.
                </p>
                <Link
                  href={articlePath(article, "es")}
                  hrefLang="es"
                  className="text-rust font-semibold hover:underline self-start"
                  style={ui}
                >
                  Read it in Spanish →
                </Link>
              </div>
            )}

            {Body && (
              <div className="article-body">
                <Body />
              </div>
            )}

            {/* Share: the label sits on its own line, apart from the buttons */}
            <div className="flex flex-col gap-3 pt-6 border-t border-line">
              <p className="text-xs font-semibold text-muted uppercase tracking-widest" style={ui}>
                {c.share}
              </p>
              <div className="flex flex-wrap items-center gap-3">
                <a
                  href={`https://twitter.com/intent/tweet?url=${shareUrl}&text=${shareTitle}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={shareLink}
                  style={ui}
                >
                  X / Twitter
                </a>
                <a
                  href={`https://www.linkedin.com/sharing/share-offsite/?url=${shareUrl}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={shareLink}
                  style={ui}
                >
                  LinkedIn
                </a>
              </div>
            </div>

            <div className="pt-4">
              <Link href={sectionHref} className="text-sm font-semibold text-rust hover:underline" style={ui}>
                {c.backTo[article.section]}
              </Link>
            </div>
          </div>
        </section>

        {related.length > 0 && (
          <section className="py-16 px-6 bg-sand border-t border-line">
            <div className="max-w-5xl mx-auto">
              <p className="label text-muted mb-8" style={ui}>
                {c.related}
              </p>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                {related.map((a) => (
                  <ArticleCard key={a.slug} article={a} lang={lang} />
                ))}
              </div>
            </div>
          </section>
        )}
      </main>
      <Footer lang={lang} />
    </>
  );
}
