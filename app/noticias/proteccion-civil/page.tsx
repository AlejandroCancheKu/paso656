import type { Metadata } from "next";
import NewsFilters from "@/app/components/NewsFilters";
import ArticleCard from "@/app/components/ArticleCard";
import { getPosts } from "@/app/lib/wordpress";

export const metadata: Metadata = {
  title: "Protección Civil",
  description:
    "Información, alertas y recomendaciones de Protección Civil en Ciudad Juárez y la región.",
  alternates: {
    canonical: "https://paso656.com/noticias/proteccion-civil",
  },
};

export default async function ProteccionCivilNewsPage() {
  const articles = await getPosts();

  const proteccionCivilNews = articles
    .filter(
      (article) =>
        article.category.toLowerCase() === "protección civil"
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

          <h1>Protección Civil</h1>

          <p>
            Información, alertas y recomendaciones para la comunidad
            de Ciudad Juárez y la región.
          </p>
        </header>

        <NewsFilters />

        <div className="news-grid">
          {proteccionCivilNews.map((article) => (
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

        {proteccionCivilNews.length === 0 && (
          <p className="no-articles">
            No hay noticias de Protección Civil disponibles.
          </p>
        )}

      </div>
    </main>
  );
}