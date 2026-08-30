import ArticleCard from "./ArticleCard";
import { getPosts } from "@/app/lib/wordpress";

export default async function LatestArticles() {
  const articles = await getPosts();

  return (
    <section className="latest-articles">
      <div className="latest-header">
        <div>
          <span>ACTUALIDAD</span>
          <h2>Últimas publicaciones</h2>
        </div>

        <a href="/articulos">Ver todas →</a>
      </div>

      <div className="articles-grid">
        {articles.map((article) => (
          <ArticleCard
            key={article.id}
            slug={article.slug}
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