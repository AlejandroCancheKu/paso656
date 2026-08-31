import Header from "@/app/components/Header";
import ArticleCard from "@/app/components/ArticleCard";
import ArticleFilters from "@/app/components/ArticleFilters";
import { getPosts } from "@/app/lib/wordpress";

type ArticlesPageProps = {
  searchParams: Promise<{
    categoria?: string;
  }>;
};

export default async function ArticlesPage({
  searchParams,
}: ArticlesPageProps) {
  const { categoria } = await searchParams;

  const articles = await getPosts();

  const normalizeCategory = (value: string) =>
    value
      .toLowerCase()
      .normalize("NFD")
      .replace(/[\u0300-\u036f]/g, "");

  const filteredArticles = categoria
    ? articles.filter(
        (article) =>
          normalizeCategory(article.category) ===
          normalizeCategory(categoria)
      )
    : articles;
  return (
    <>
      <Header />

      <main className="latest-articles">
        <div className="latest-header">
          <div>
            <span>ARCHIVO</span>
            <h1>Publicaciones</h1>
          </div>
        </div>

        <ArticleFilters />

        <div className="articles-grid">
          {filteredArticles.map((article) => (
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

        {filteredArticles.length === 0 && (
          <p className="no-articles">
            No hay publicaciones en esta categoría.
          </p>
        )}
      </main>
    </>
  );
}