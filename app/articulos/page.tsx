import Header from "@/app/components/Header";
import ArticleCard from "@/app/components/ArticleCard";
import { getPosts } from "@/app/lib/wordpress";

export default async function ArticlesPage() {
  const articles = await getPosts();

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
      </main>
    </>
  );
}