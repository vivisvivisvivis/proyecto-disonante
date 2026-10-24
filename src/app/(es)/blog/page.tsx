import type { Metadata } from "next";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import PageHero from "@/components/PageHero";
import BlogList from "@/components/BlogList";
import { blogPosts } from "@/lib/articles";
import { esAlternates } from "@/lib/seo";

export const metadata: Metadata = {
  title: "Blog",
  description: "Textos de reflexión de Proyecto Disonante.",
  alternates: esAlternates("/blog"),
};

export default function BlogPage() {
  return (
    <>
      <Navbar lang="es" />
      <main id="main">
        <PageHero
          label="Análisis"
          title="Blog"
          description="Textos de reflexión de Proyecto Disonante."
        />
        <section className="py-24 px-6 bg-cream">
          <BlogList articles={blogPosts} lang="es" />
        </section>
      </main>
      <Footer lang="es" />
    </>
  );
}
