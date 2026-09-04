import type { Metadata } from "next";
import NewsFilters from "@/app/components/NewsFilters";
import ArticleCard from "@/app/components/ArticleCard";
import { getPosts } from "@/app/lib/wordpress";

export const metadata: Metadata = {
  title: "Noticias Nacionales",
  description:
    "Las noticias más importantes de México. Información nacional desde paso656.",
  alternates: {
    canonical: "https://paso656.com/noticias/nacional",
  },
};

export default async function NacionalNewsPage() {
  const articles = await getPosts();

  const nacionalNews = articles
    .filter((article) => article.category.toLowerCase() === "nacional")
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

          <h1>Nacional</h1>

          <p>
            Las noticias más importantes de México.
          </p>
        </header>

        <NewsFilters />

        <div className="news-grid">
          {nacionalNews.map((article) => (
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

        {nacionalNews.length === 0 && (
          <p className="no-articles">
            No hay noticias nacionales disponibles.
          </p>
        )}

      </div>
    </main>
  );
}