import type { Metadata } from "next";
import ArticleCard from "@/app/components/ArticleCard";
import { searchPosts } from "@/app/lib/wordpress";

export const metadata: Metadata = {
  title: "Buscar",
  description: "Busca artículos y noticias en paso656.",
  robots: {
    index: false,
    follow: true,
  },
};

type SearchPageProps = {
  searchParams: Promise<{
    q?: string;
  }>;
};

export default async function SearchPage({
  searchParams,
}: SearchPageProps) {
  const params = await searchParams;
  const query = params.q?.trim() ?? "";

  const articles = query ? await searchPosts(query) : [];

  return (
    <main className="search-page">
      <div className="search-header">
        <span>BÚSQUEDA</span>

        <h1>Buscar en paso656</h1>

        <form className="search-form">
          <input
            type="search"
            name="q"
            placeholder="Buscar artículos..."
            defaultValue={query}
          />

          <button type="submit">
            Buscar
          </button>
        </form>
      </div>

      {query && (
        <div className="search-results">
          <p className="search-results-label">
            Resultados para: <strong>“{query}”</strong>
          </p>

          {articles.length > 0 ? (
            <div className="articles-grid">
              {articles.map((article) => (
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
          ) : (
            <p className="search-empty">
              No encontramos artículos para esta búsqueda.
            </p>
          )}
        </div>
      )}
    </main>
  );
}