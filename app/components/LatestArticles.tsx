import ArticleCard from "./ArticleCard";
import { getArticles } from "@/app/lib/wordpress";

export default async function LatestArticles() {
  const articles = await getArticles();

  const sortedArticles = articles
    .sort(
      (a, b) =>
        new Date(b.dateRaw).getTime() -
        new Date(a.dateRaw).getTime()
    )
    .slice(1, 4);

  if (sortedArticles.length === 0) {
    return null;
  }

  return (
    <section className="latest-articles">
      <div className="latest-header">
        <div>
          <span>ARTICULOS</span>
          <h2>Últimas publicaciones</h2>
        </div>

        <a href="/articulos">Ver todas</a>
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
    </section>
  );
}