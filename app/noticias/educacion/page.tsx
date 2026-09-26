import type { Metadata } from "next";
import NewsFilters from "@/app/components/NewsFilters";
import ArticleCard from "@/app/components/ArticleCard";
import { getPosts } from "@/app/lib/wordpress";

export const metadata: Metadata = {
  title: "Noticias de Educación",
  description:
    "Información y noticias sobre educación, escuelas y comunidad educativa desde paso656.",
  alternates: {
    canonical: "https://paso656.com/noticias/educacion",
  },
};

export default async function EducacionNewsPage() {
  const articles = await getPosts();

  const educacionNews = articles
    .filter(
      (article) =>
        article.category.toLowerCase() === "educación"
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

          <h1>Educación</h1>

          <p>
            Información y actualidad sobre educación, escuelas y
            comunidad educativa.
          </p>
        </header>

        <NewsFilters />

        <div className="news-grid">
          {educacionNews.map((article) => (
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

        {educacionNews.length === 0 && (
          <p className="no-articles">
            No hay noticias de Educación disponibles.
          </p>
        )}

      </div>
    </main>
  );
}