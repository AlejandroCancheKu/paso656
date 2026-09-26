import type { Metadata } from "next";
import NewsFilters from "@/app/components/NewsFilters";
import ArticleCard from "@/app/components/ArticleCard";
import { getPosts } from "@/app/lib/wordpress";

export const metadata: Metadata = {
  title: "Noticias de Deportes",
  description:
    "Información y noticias deportivas de Ciudad Juárez, Chihuahua, México y el mundo desde paso656.",
  alternates: {
    canonical: "https://paso656.com/noticias/deportes",
  },
};

export default async function DeportesNewsPage() {
  const articles = await getPosts();

  const deportesNews = articles
    .filter(
      (article) =>
        article.category.toLowerCase() === "deportes"
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

          <h1>Deportes</h1>

          <p>
            Información y actualidad deportiva de Ciudad Juárez,
            Chihuahua, México y el mundo.
          </p>
        </header>

        <NewsFilters />

        <div className="news-grid">
          {deportesNews.map((article) => (
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

        {deportesNews.length === 0 && (
          <p className="no-articles">
            No hay noticias de Deportes disponibles.
          </p>
        )}

      </div>
    </main>
  );
}