
import ArticleCard from "@/app/components/ArticleCard";
import { getPosts, getPostViews } from "@/app/lib/wordpress";

type CategoryNewsGridProps = {
  category: string;
};

export default async function CategoryNewsGrid({
  category,
}: CategoryNewsGridProps) {
  const [articles, views] = await Promise.all([
    getPosts(),
    getPostViews(),
  ]);

  const categoryNews = articles
    .filter(
      (article) =>
        article.category.toLocaleLowerCase("es-MX") ===
        category.toLocaleLowerCase("es-MX")
    )
    .sort(
      (a, b) =>
        new Date(b.dateRaw).getTime() -
        new Date(a.dateRaw).getTime()
    );

  return (
    <>
      <div className="news-grid">
        {categoryNews.map((article) => (
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
            views={views[article.id] ?? 0}
          />
        ))}
      </div>

      {categoryNews.length === 0 && (
        <p className="no-articles">
          No hay noticias de {category} disponibles.
        </p>
      )}
    </>
  );
}
