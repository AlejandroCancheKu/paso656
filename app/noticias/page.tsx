import type { Metadata } from "next";
import NewsFilters from "@/app/components/NewsFilters";
import ArticleCard from "@/app/components/ArticleCard";
import { getPosts } from "@/app/lib/wordpress";

export const metadata: Metadata = {
  title: "Noticias",
  description:
    "Noticias locales, estatales y nacionales desde Ciudad Juárez, Chihuahua.",
  alternates: {
    canonical: "https://paso656.com/noticias",
  },
};

export default async function NoticiasPage() {
  const articles = await getPosts();

  const newsArticles = articles
    .filter(
      (article) =>
        article.section === "Noticias"
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
          <span>ACTUALIDAD</span>

          <h1>Noticias</h1>

          <p>
            Información local, estatal y nacional desde la frontera.
          </p>
        </header>

        <NewsFilters />

        <div className="news-grid">
          {newsArticles.map((article) => (
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

        {newsArticles.length === 0 && (
          <p className="no-articles">
            No hay noticias disponibles.
          </p>
        )}

      </div>
    </main>
  );
}