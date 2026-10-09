import type { Metadata } from "next";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import PageHero from "@/components/PageHero";
import BlogList from "@/components/BlogList";
import { articles } from "@/lib/articles";
import { enAlternates } from "@/lib/seo";

export const metadata: Metadata = {
  title: "News",
  description: "Updates, publications and activities from Proyecto Disonante.",
  alternates: enAlternates("/blog"),
};

export default function BlogEnPage() {
  return (
    <>
      <Navbar lang="en" />
      <main>
        <PageHero
          label="Latest"
          title="News"
          description="Publications, activities and updates from Proyecto Disonante."
        />
        <section className="py-24 px-6 bg-[#EBD7BE]">
          <BlogList articles={articles} lang="en" />
        </section>
      </main>
      <Footer lang="en" />
    </>
  );
}
