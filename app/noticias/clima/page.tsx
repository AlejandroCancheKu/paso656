import type { Metadata } from "next";
import NewsFilters from "@/app/components/NewsFilters";
import ArticleCard from "@/app/components/ArticleCard";
import { getPosts } from "@/app/lib/wordpress";

export const metadata: Metadata = {
  title: "Noticias del Clima",
  description:
    "Información sobre el clima y las condiciones meteorológicas en Ciudad Juárez y la región.",
  alternates: {
    canonical: "https://paso656.com/noticias/clima",
  },
};

export default async function ClimaNewsPage() {
  const articles = await getPosts();

  const climaNews = articles
    .filter((article) => article.category.toLowerCase() === "clima")
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

          <h1>Clima</h1>

          <p>
            Información sobre el clima y las condiciones meteorológicas
            en Ciudad Juárez y la región.
          </p>
        </header>

        <NewsFilters />

        <div className="news-grid">
          {climaNews.map((article) => (
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

        {climaNews.length === 0 && (
          <p className="no-articles">
            No hay noticias del clima disponibles.
          </p>
        )}

      </div>
    </main>
  );
}