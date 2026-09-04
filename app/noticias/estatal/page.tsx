import type { Metadata } from "next";
import NewsFilters from "@/app/components/NewsFilters";
import ArticleCard from "@/app/components/ArticleCard";
import { getPosts } from "@/app/lib/wordpress";

export const metadata: Metadata = {
  title: "Noticias Estatales",
  description:
    "La información más relevante del estado de Chihuahua. Noticias estatales desde paso656.",
  alternates: {
    canonical: "https://paso656.com/noticias/estatal",
  },
};

export default async function EstatalNewsPage() {
  const articles = await getPosts();

  const estatalNews = articles
    .filter((article) => article.category.toLowerCase() === "estatal")
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

          <h1>Estatal</h1>

          <p>
            La información más relevante del estado de Chihuahua.
          </p>
        </header>

        <NewsFilters />

        <div className="news-grid">
          {estatalNews.map((article) => (
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

        {estatalNews.length === 0 && (
          <p className="no-articles">
            No hay noticias estatales disponibles.
          </p>
        )}

      </div>
    </main>
  );
}