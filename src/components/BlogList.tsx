"use client";

import Link from "next/link";
import { useState } from "react";
import Reveal from "@/components/Reveal";
import type { Article } from "@/lib/articles";

interface Props {
  articles: Article[];
  lang: "es" | "en";
}

export default function BlogList({ articles, lang }: Props) {
  const [activeTag, setActiveTag] = useState<string | null>(null);

  const t = (a: Article) => a[lang];

  const allTags = Array.from(new Set(articles.map((a) => t(a).tag)));

  const filtered = activeTag
    ? articles.filter((a) => t(a).tag === activeTag)
    : articles;

  const [featured, ...rest] = filtered;
  const basePath = lang === "en" ? "/en/blog" : "/blog";

  return (
    <div className="max-w-5xl mx-auto">
      {/* Tag filter */}
      <Reveal className="mb-10 flex flex-wrap gap-2">
        <button
          onClick={() => setActiveTag(null)}
          className={`px-4 py-1.5 rounded text-xs font-semibold transition-all duration-150 ${
            activeTag === null
              ? "bg-[#1B3A5C] text-white"
              : "bg-[#EBD7BE] border border-[#D8C9B3] text-[#6B7280] hover:border-[#1B3A5C] hover:text-[#1B3A5C]"
          }`}
          style={{ fontFamily: "var(--font-jakarta)" }}
        >
          {lang === "en" ? "All" : "Todo"}
        </button>
        {allTags.map((tag) => (
          <button
            key={tag}
            onClick={() => setActiveTag(activeTag === tag ? null : tag)}
            className={`px-4 py-1.5 rounded text-xs font-semibold transition-all duration-150 ${
              activeTag === tag
                ? "bg-[#C0442C] text-white"
                : "bg-[#EBD7BE] border border-[#D8C9B3] text-[#6B7280] hover:border-[#C0442C] hover:text-[#C0442C]"
            }`}
            style={{ fontFamily: "var(--font-jakarta)" }}
          >
            {tag}
          </button>
        ))}
      </Reveal>

      {filtered.length === 0 && (
        <p className="text-center py-16" style={{ color: "#9CA3AF", fontFamily: "var(--font-jakarta)" }}>
          {lang === "en" ? "No articles for this tag." : "No hay artículos para esta etiqueta."}
        </p>
      )}

      {featured && (
        <Reveal className="mb-10">
          <Link href={`${basePath}/${featured.slug}`} className="block group">
            <div className="rounded-lg overflow-hidden bg-[#1B3A5C] transition-all duration-300 flex flex-col md:flex-row">
              <div className="flex-1 p-10 md:p-14 flex flex-col gap-4">
                <div className="flex items-center gap-3 flex-wrap">
                  <span className="label text-blue-300">{t(featured).tag}</span>
                  {t(featured).date && (
                    <>
                      <span className="w-1 h-1 rounded bg-[#C0442C]" />
                      <span className="text-xs text-blue-400" style={{ fontFamily: "var(--font-jakarta)" }}>
                        {t(featured).date}
                      </span>
                    </>
                  )}
                </div>
                <h2 className="text-white text-2xl md:text-3xl leading-snug group-hover:text-blue-100 transition-colors duration-200">
                  {t(featured).title}
                </h2>
                {t(featured).excerpt && (
                  <p className="text-blue-200 text-base leading-relaxed" style={{ fontFamily: "var(--font-source)" }}>
                    {t(featured).excerpt}
                  </p>
                )}
                {t(featured).author && (
                  <p className="text-sm font-semibold text-blue-300 mt-2" style={{ fontFamily: "var(--font-jakarta)" }}>
                    {t(featured).author}
                  </p>
                )}
              </div>
              <div className="hidden md:flex w-64 flex-shrink-0 bg-[#0f2238] items-center justify-center p-10">
                <span
                  className="text-[8rem] font-extrabold text-white leading-none select-none"
                  style={{ fontFamily: "var(--font-jakarta)", opacity: 0.06, letterSpacing: "-0.05em" }}
                  aria-hidden
                >
                  PD
                </span>
              </div>
            </div>
          </Link>
        </Reveal>
      )}

      {rest.length > 0 && (
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {rest.map((article, i) => (
            <Reveal key={article.slug} delay={i * 0.06}>
              <Link href={`${basePath}/${article.slug}`} className="block group h-full">
                <div className="bg-[#EBD7BE] border border-[#D8C9B3] rounded-lg p-7 flex flex-col gap-3 h-full hover:border-[#1B3A5C] transition-all duration-300">
                  <div className="flex items-center gap-2 flex-wrap">
                    <span className="label text-[#C0442C]">{t(article).tag}</span>
                    {t(article).date && (
                      <>
                        <span className="w-1 h-1 rounded bg-[#D8C9B3] flex-shrink-0" />
                        <span className="text-xs text-[#9CA3AF]" style={{ fontFamily: "var(--font-jakarta)" }}>
                          {t(article).date}
                        </span>
                      </>
                    )}
                  </div>
                  <h3 className="text-base leading-snug group-hover:text-[#C0442C] transition-colors duration-200">
                    {t(article).title}
                  </h3>
                  {t(article).excerpt && (
                    <p className="text-xs leading-relaxed mt-auto" style={{ color: "#7A8A9A" }}>
                      {t(article).excerpt}
                    </p>
                  )}
                  {t(article).author && (
                    <p className="text-xs font-semibold text-[#1B3A5C] mt-auto" style={{ fontFamily: "var(--font-jakarta)" }}>
                      {t(article).author}
                    </p>
                  )}
                </div>
              </Link>
            </Reveal>
          ))}
        </div>
      )}
    </div>
  );
}
