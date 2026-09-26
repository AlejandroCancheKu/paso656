import type { Metadata } from "next";
import NewsFilters from "@/app/components/NewsFilters";
import ArticleCard from "@/app/components/ArticleCard";
import { getPosts } from "@/app/lib/wordpress";

export const metadata: Metadata = {
  title: "Noticias Internacionales",
  description:
    "Las noticias más relevantes del mundo. Información internacional desde paso656.",
  alternates: {
    canonical: "https://paso656.com/noticias/internacional",
  },
};

export default async function InternacionalNewsPage() {
  const articles = await getPosts();

  const internacionalNews = articles
    .filter(
      (article) =>
        article.category.toLowerCase() === "internacional"
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

          <h1>Internacional</h1>

          <p>
            Las noticias más relevantes del mundo.
          </p>
        </header>

        <NewsFilters />

        <div className="news-grid">
          {internacionalNews.map((article) => (
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

        {internacionalNews.length === 0 && (
          <p className="no-articles">
            No hay noticias internacionales disponibles.
          </p>
        )}

      </div>
    </main>
  );
}