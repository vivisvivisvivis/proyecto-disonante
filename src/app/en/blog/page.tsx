import type { Metadata } from "next";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import PageHero from "@/components/PageHero";
import BlogList from "@/components/BlogList";
import { articles } from "@/lib/articles";
import { enBodies } from "@/lib/articleContent";

const spanishOnly = articles.filter((a) => !enBodies[a.slug]).map((a) => a.slug);
import { enAlternates } from "@/lib/seo";

export const metadata: Metadata = {
  title: "Blog",
  description: "Analysis, activities and news from Proyecto Disonante.",
  alternates: enAlternates("/blog"),
};

export default function BlogEnPage() {
  return (
    <>
      <Navbar lang="en" />
      <main id="main">
        <PageHero
          label="Analysis and news"
          title="Blog"
          description="Analysis, activities and news from Proyecto Disonante. Some articles are available in Spanish only."
        />
        <section className="py-24 px-6 bg-cream">
          <BlogList articles={articles} lang="en" spanishOnly={spanishOnly} />
        </section>
      </main>
      <Footer lang="en" />
    </>
  );
}
