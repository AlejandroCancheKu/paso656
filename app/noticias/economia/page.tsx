import type { Metadata } from "next";
import NewsFilters from "@/app/components/NewsFilters";
import ArticleCard from "@/app/components/ArticleCard";
import { getPosts } from "@/app/lib/wordpress";

export const metadata: Metadata = {
  title: "Noticias de Economía",
  description:
    "Información y noticias de economía, finanzas y actividad económica desde paso656.",
  alternates: {
    canonical: "https://paso656.com/noticias/economia",
  },
};

export default async function EconomiaNewsPage() {
  const articles = await getPosts();

  const economiaNews = articles
    .filter(
      (article) =>
        article.category.toLowerCase() === "economía"
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

          <h1>Economía</h1>

          <p>
            Información sobre economía, finanzas y actividad económica
            en Ciudad Juárez, Chihuahua y México.
          </p>
        </header>

        <NewsFilters />

        <div className="news-grid">
          {economiaNews.map((article) => (
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

        {economiaNews.length === 0 && (
          <p className="no-articles">
            No hay noticias de Economía disponibles.
          </p>
        )}

      </div>
    </main>
  );
}