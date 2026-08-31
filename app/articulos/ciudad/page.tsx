import Header from "@/app/components/Header";
import ArticleCard from "@/app/components/ArticleCard";
import { getPosts } from "@/app/lib/wordpress";

export default async function CiudadPage() {
  const articles = await getPosts();

  const ciudadArticles = articles.filter(
    (article) => article.category.toUpperCase() === "CIUDAD"
  );

  return (
    <>
      <Header />

      <main className="latest-articles">
        <div className="latest-header">
          <div>
            <span>CATEGORÍA</span>
            <h1>Ciudad</h1>
          </div>
        </div>

        {ciudadArticles.length > 0 ? (
          <div className="articles-grid">
            {ciudadArticles.map((article) => (
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
        ) : (
          <div className="category-empty">
            <h2>Aún no hay artículos</h2>
            <p>
              Estamos preparando nuevo contenido para esta sección.
            </p>
          </div>
        )}
      </main>
    </>
  );
}