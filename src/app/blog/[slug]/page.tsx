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
    .filter((a) => a.slug !== slug && a.es.tag === tag)
    .slice(0, 3);

  const shareUrl = encodeURIComponent(`https://proyectodisonante.org/blog/${slug}`);
  const shareTitle = encodeURIComponent(title);
  const Body = esBodies[slug] ?? null;

  return (
    <>
      <Navbar lang="es" />
      <main className="bg-[#EBD7BE] min-h-screen">

        {/* Article header */}
        <section className="pt-20 pb-16 px-6 bg-[#E2CDB4] border-b border-[#D8C9B3]">
          <div className="max-w-3xl mx-auto flex flex-col gap-6">
            <Link
              href="/blog"
              className="text-sm text-[#6B7280] hover:text-[#C0442C] transition-colors self-start"
              style={{ fontFamily: "var(--font-jakarta)" }}
            >
              ← Noticias
            </Link>

            <div className="flex items-center gap-3 flex-wrap">
              <span
                className="label text-[#C0442C]"
              >
                {tag}
              </span>
              {date && (
                <>
                  <span className="w-1 h-1 rounded bg-[#D8C9B3]" />
                  <span className="text-xs text-[#9CA3AF]" style={{ fontFamily: "var(--font-jakarta)" }}>
                    {date}
                  </span>
                </>
              )}
              {author && (
                <>
                  <span className="w-1 h-1 rounded bg-[#D8C9B3]" />
                  <span className="text-xs font-semibold text-[#1B3A5C]" style={{ fontFamily: "var(--font-jakarta)" }}>
                    {author}
                  </span>
                </>
              )}
            </div>

            <h1 className="leading-tight">
              {title}
            </h1>

            <div className="h-px bg-[#D8C9B3]" />
          </div>
        </section>

        {/* Article body */}
        <section className="py-16 px-6">
          <div className="max-w-3xl mx-auto flex flex-col gap-10">

            {excerpt && !Body && (
              <p
                className="text-xl leading-relaxed"
                style={{ color: "#4A4A4A", fontFamily: "var(--font-source)" }}
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
            <div className="flex items-center gap-4 pt-4 border-t border-[#D8C9B3]">
              <span className="text-xs font-semibold text-[#6B7280] uppercase tracking-widest" style={{ fontFamily: "var(--font-jakarta)" }}>
                Compartir
              </span>
              <a
                href={`https://twitter.com/intent/tweet?url=${shareUrl}&text=${shareTitle}`}
                target="_blank"
                rel="noopener noreferrer"
                className="text-xs font-semibold text-[#1B3A5C] hover:text-[#C0442C] transition-colors border border-[#D8C9B3] hover:border-[#C0442C] px-4 py-1.5 rounded"
                style={{ fontFamily: "var(--font-jakarta)" }}
              >
                X / Twitter
              </a>
              <a
                href={`https://www.linkedin.com/sharing/share-offsite/?url=${shareUrl}`}
                target="_blank"
                rel="noopener noreferrer"
                className="text-xs font-semibold text-[#1B3A5C] hover:text-[#C0442C] transition-colors border border-[#D8C9B3] hover:border-[#C0442C] px-4 py-1.5 rounded"
                style={{ fontFamily: "var(--font-jakarta)" }}
              >
                LinkedIn
              </a>
            </div>

            {/* Back CTA */}
            <div className="pt-4">
              <Link
                href="/blog"
                className="text-sm font-semibold text-[#C0442C] hover:underline"
                style={{ fontFamily: "var(--font-jakarta)" }}
              >
                ← Ver todas las noticias
              </Link>
            </div>
          </div>
        </section>

        {/* Related articles */}
        {related.length > 0 && (
          <section className="py-16 px-6 bg-[#E2CDB4] border-t border-[#D8C9B3]">
            <div className="max-w-5xl mx-auto">
              <p
                className="label text-[#6B7280] mb-8"
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
