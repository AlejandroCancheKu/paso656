import type { Metadata } from "next";
import NewsFilters from "@/app/components/NewsFilters";
import ArticleCard from "@/app/components/ArticleCard";
import { getPosts } from "@/app/lib/wordpress";

export const metadata: Metadata = {
  title: "Noticias de Vialidad",
  description:
    "Información y noticias sobre vialidad, tránsito y movilidad en Ciudad Juárez desde paso656.",
  alternates: {
    canonical: "https://paso656.com/noticias/vialidad",
  },
};

export default async function VialidadNewsPage() {
  const articles = await getPosts();

  const vialidadNews = articles
    .filter(
      (article) =>
        article.category.toLowerCase() === "vialidad"
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

          <h1>Vialidad</h1>

          <p>
            Información y actualidad sobre vialidad, tránsito y
            movilidad en Ciudad Juárez.
          </p>
        </header>

        <NewsFilters />

        <div className="news-grid">
          {vialidadNews.map((article) => (
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

        {vialidadNews.length === 0 && (
          <p className="no-articles">
            No hay noticias de Vialidad disponibles.
          </p>
        )}

      </div>
    </main>
  );
}