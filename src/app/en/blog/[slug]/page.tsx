import { notFound } from "next/navigation";
import ArticleView, { articleMetadata, articleParams, findArticle } from "@/components/ArticleView";

type Props = { params: Promise<{ slug: string }> };

export function generateStaticParams() {
  return articleParams("blog");
}

export async function generateMetadata({ params }: Props) {
  const { slug } = await params;
  return articleMetadata(findArticle("blog", slug), "en");
}

export default async function Page({ params }: Props) {
  const { slug } = await params;
  const article = findArticle("blog", slug);
  if (!article) notFound();
  return <ArticleView article={article} lang="en" />;
}
