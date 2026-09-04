import Link from "next/link";
import Image from "next/image";
import type { Article } from "@/app/lib/wordpress";

type RelatedArticlesProps = {
  articles: Article[];
};

export default function RelatedArticles({
  articles,
}: RelatedArticlesProps) {
  if (articles.length === 0) {
    return null;
  }

  return (
    <section className="related-articles">
      <div className="related-header">
        <span>TAMBIÉN TE PUEDE INTERESAR</span>
        <h2>Más publicaciones</h2>
      </div>

      <div className="related-grid">
        {articles.map((article) => {
          const basePath =
            article.section === "Noticias"
              ? "/noticias"
              : "/articulos";

          const articleUrl = `${basePath}/${article.slug}`;

          return (
            <Link
              key={article.id}
              href={articleUrl}
              className="related-card"
            >
              <div className="related-image">
                <Image
                  src={article.image}
                  alt={article.title}
                  fill
                  sizes="(max-width: 768px) 100vw, 50vw"
                />
              </div>

              <div className="related-info">
                <span>{article.category.toUpperCase()}</span>

                <h3>{article.title}</h3>

                <p>{article.excerpt}</p>
              </div>
            </Link>
          );
        })}
      </div>
    </section>
  );
}