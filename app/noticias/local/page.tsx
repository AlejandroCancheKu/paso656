import type { Metadata } from "next";
import NewsFilters from "@/app/components/NewsFilters";
import ArticleCard from "@/app/components/ArticleCard";
import { getPosts } from "@/app/lib/wordpress";

export const metadata: Metadata = {
  title: "Noticias Locales",
  description:
    "Noticias de Ciudad Juárez y su entorno. Información local desde la frontera.",
  alternates: {
    canonical: "https://paso656.com/noticias/local",
  },
};

export default async function LocalNewsPage() {
  const articles = await getPosts();

  const localNews = articles
    .filter((article) => article.category.toLowerCase() === "local")
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

          <h1>Local</h1>

          <p>
            Las noticias de Ciudad Juárez y su entorno.
          </p>
        </header>

        <NewsFilters />

        <div className="news-grid">
          {localNews.map((article) => (
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

        {localNews.length === 0 && (
          <p className="no-articles">
            No hay noticias locales disponibles.
          </p>
        )}

      </div>
    </main>
  );
}