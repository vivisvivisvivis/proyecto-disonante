import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { articles } from "@/lib/articles";
import { esAlternates } from "@/lib/seo";
import ArticleCard from "@/components/ArticleCard";
import { esBodies } from "@/lib/articleContent";

export function generateStaticParams() {
  return articles.map((a) => ({ slug: a.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const article = articles.find((a) => a.slug === slug);
  if (!article) return {};
  return {
    title: article.es.title,
    description: article.es.excerpt || article.es.title,
    alternates: esAlternates(`/blog/${slug}`),
  };
}

export default async function ArticlePage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const article = articles.find((a) => a.slug === slug);
  if (!article) notFound();

  const { title, author, date, excerpt, tag } = article.es;
  const related = articles
    .filter((a) => a.slug !== slug && a.category === article.category)
    .slice(0, 2);

  const shareUrl = encodeURIComponent(`https://proyectodisonante.org/blog/${slug}`);
  const shareTitle = encodeURIComponent(title);
  const Body = esBodies[slug] ?? null;

  return (
    <>
      <Navbar lang="es" />
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
            inLanguage: "es",
            url: `https://proyectodisonante.org/blog/${slug}`,
          }),
        }}
      />
      <main id="main" className="bg-cream min-h-screen">

        {/* Article header */}
        <section className="pt-20 pb-16 px-6 bg-sand border-b border-line">
          <div className="max-w-3xl mx-auto flex flex-col gap-6">
            <Link
              href="/blog"
              className="text-sm text-muted hover:text-rust transition-colors self-start"
              style={{ fontFamily: "var(--font-jakarta)" }}
            >
              ← Blog
            </Link>

            <div className="flex items-center gap-3 flex-wrap">
              <span
                className="label text-rust"
              >
                {tag}
              </span>
              {date && (
                <>
                  <span aria-hidden className="w-1 h-1 rounded bg-muted" />
                  <time dateTime={article.isoDate} className="text-xs text-muted" style={{ fontFamily: "var(--font-jakarta)" }}>
                    {date}
                  </time>
                </>
              )}
              {author && (
                <>
                  <span aria-hidden className="w-1 h-1 rounded bg-muted" />
                  <span className="text-xs font-semibold text-navy" style={{ fontFamily: "var(--font-jakarta)" }}>
                    {author}
                  </span>
                </>
              )}
            </div>

            <h1 className="heading-sentence">
              {title}
            </h1>

            <div className="h-px bg-line" />
          </div>
        </section>

        {/* Article body */}
        <section className="py-16 px-6">
          <div className="max-w-3xl mx-auto flex flex-col gap-10">

            {excerpt && !Body && (
              <p
                className="text-xl leading-relaxed"
                style={{ color: "var(--pd-body)", fontFamily: "var(--font-source)" }}
              >
                {excerpt}
              </p>
            )}

            {Body && (
              <div className="article-body">
                <Body />
              </div>
            )}

            {/* Share */}
            <div className="flex items-center gap-4 pt-4 border-t border-line">
              <span className="text-xs font-semibold text-muted uppercase tracking-widest" style={{ fontFamily: "var(--font-jakarta)" }}>
                Compartir
              </span>
              <a
                href={`https://twitter.com/intent/tweet?url=${shareUrl}&text=${shareTitle}`}
                target="_blank"
                rel="noopener noreferrer"
                className="text-xs font-semibold text-navy hover:text-rust transition-colors border border-line hover:border-terracotta px-4 py-1.5 rounded"
                style={{ fontFamily: "var(--font-jakarta)" }}
              >
                X / Twitter
              </a>
              <a
                href={`https://www.linkedin.com/sharing/share-offsite/?url=${shareUrl}`}
                target="_blank"
                rel="noopener noreferrer"
                className="text-xs font-semibold text-navy hover:text-rust transition-colors border border-line hover:border-terracotta px-4 py-1.5 rounded"
                style={{ fontFamily: "var(--font-jakarta)" }}
              >
                LinkedIn
              </a>
            </div>

            {/* Back CTA */}
            <div className="pt-4">
              <Link
                href="/blog"
                className="text-sm font-semibold text-rust hover:underline"
                style={{ fontFamily: "var(--font-jakarta)" }}
              >
                ← Ver todas las publicaciones
              </Link>
            </div>
          </div>
        </section>

        {/* Related articles */}
        {related.length > 0 && (
          <section className="py-16 px-6 bg-sand border-t border-line">
            <div className="max-w-5xl mx-auto">
              <p
                className="label text-muted mb-8"
                style={{ fontFamily: "var(--font-jakarta)" }}
              >
                También te puede interesar
              </p>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                {related.map((a) => (
                  <ArticleCard key={a.slug} article={a} lang="es" />
                ))}
              </div>
            </div>
          </section>
        )}
      </main>
      <Footer lang="es" />
    </>
  );
}
