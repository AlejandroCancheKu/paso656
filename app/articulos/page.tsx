import type { Metadata } from "next";
import ArticleCard from "@/app/components/ArticleCard";
import { getArticles } from "@/app/lib/wordpress";

export const metadata: Metadata = {
  title: "Artículos",
  description:
    "Artículos y análisis desde Ciudad Juárez, Chihuahua. Ideas, contexto y perspectiva desde la frontera.",
  alternates: {
    canonical: "https://paso656.com/articulos",
  },
};

export default async function ArticlesPage() {
  const articles = await getArticles();

  const sortedArticles = articles.sort(
    (a, b) =>
      new Date(b.dateRaw).getTime() -
      new Date(a.dateRaw).getTime()
  );

  return (
    <main className="latest-articles">
      <div className="latest-header">
        <div>
          <span>ARCHIVO</span>
          <h1>Publicaciones</h1>
        </div>
      </div>

      <div className="articles-grid">
        {sortedArticles.map((article) => (
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

      {sortedArticles.length === 0 && (
        <p className="no-articles">
          No hay publicaciones disponibles.
        </p>
      )}
    </main>
  );
}