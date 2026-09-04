import Image from "next/image";
import Link from "next/link";
import { getArticles } from "@/app/lib/wordpress";

export default async function FeaturedArticle() {
  const articles = await getArticles();

  const sortedArticles = articles.sort(
    (a, b) =>
      new Date(b.dateRaw).getTime() -
      new Date(a.dateRaw).getTime()
  );

  const article = sortedArticles[0];

  if (!article) {
    return null;
  }

  return (
    <section className="featured-article">
      <div className="featured-content">
        <span className="featured-category">
          {article.category.toUpperCase()}
        </span>

        <h1>{article.title}</h1>

        <p>{article.excerpt}</p>

        <Link
          href={`/articulos/${article.slug}`}
          className="featured-link"
        >
          Leer artículo →
        </Link>
      </div>

      <div className="featured-image">
        <Image
          src={article.image}
          alt={article.title}
          width={1200}
          height={800}
          priority
          loading="eager"
        />
      </div>
    </section>
  );
}