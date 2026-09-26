import type { Metadata } from "next";
import NewsFilters from "@/app/components/NewsFilters";
import ArticleCard from "@/app/components/ArticleCard";
import { getPosts } from "@/app/lib/wordpress";

export const metadata: Metadata = {
  title: "Noticias de Obras Públicas",
  description:
    "Información y noticias sobre obras públicas, infraestructura y proyectos urbanos desde paso656.",
  alternates: {
    canonical: "https://paso656.com/noticias/obras-publicas",
  },
};

export default async function ObrasPublicasNewsPage() {
  const articles = await getPosts();

  const obrasPublicasNews = articles
    .filter(
      (article) =>
        article.category.toLowerCase() === "obras públicas"
    )
    .sort(
      (a, b) =>
        new Date(b.dateRaw).getTime() -
        new Date(a.dateRaw).getTime()
    );

  return (
    <main className="news-page">
      <div className="news-page-inner">

        <header className="news-header">
          <span>NOTICIAS</span>

          <h1>Obras Públicas</h1>

          <p>
            Información y actualidad sobre obras públicas,
            infraestructura y proyectos urbanos.
          </p>
        </header>

        <NewsFilters />

        <div className="news-grid">
          {obrasPublicasNews.map((article) => (
            <ArticleCard
              key={article.id}
              slug={article.slug}
              section={article.section}
              category={article.category.toUpperCase()}
              title={article.title}
              excerpt={article.excerpt}
              author={article.author}
              date={article.date}
              image={article.image}
            />
          ))}
        </div>

        {obrasPublicasNews.length === 0 && (
          <p className="no-articles">
            No hay noticias de Obras Públicas disponibles.
          </p>
        )}

      </div>
    </main>
  );
}