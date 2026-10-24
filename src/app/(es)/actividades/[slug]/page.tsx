import { notFound } from "next/navigation";
import ArticleView, { articleMetadata, articleParams, findArticle } from "@/components/ArticleView";

type Props = { params: Promise<{ slug: string }> };

export function generateStaticParams() {
  return articleParams("actividades");
}

export async function generateMetadata({ params }: Props) {
  const { slug } = await params;
  return articleMetadata(findArticle("actividades", slug), "es");
}

export default async function Page({ params }: Props) {
  const { slug } = await params;
  const article = findArticle("actividades", slug);
  if (!article) notFound();
  return <ArticleView article={article} lang="es" />;
}
