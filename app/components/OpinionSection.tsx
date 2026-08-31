import Image from "next/image";
import Link from "next/link";
import { getPosts } from "@/app/lib/wordpress";

export default async function OpinionSection() {
  const articles = await getPosts();

  const opinionArticles = articles
    .filter(
      (article) =>
        article.category
          .toLowerCase()
          .normalize("NFD")
          .replace(/[\u0300-\u036f]/g, "") === "opinion"
    )
    .slice(0, 2);

  if (opinionArticles.length === 0) {
    return null;
  }

  return (
    <section className="opinion-section">
      <div className="opinion-header">
        <div>
          <span>OPINIÓN</span>
          <h2>La ciudad también se piensa.</h2>
        </div>

        <Link href="/articulos?categoria=opinion">
          Ver toda la opinión →
        </Link>
      </div>

      <div className="opinion-grid">
        {opinionArticles.map((article) => (
          <article className="opinion-card" key={article.id}>
            <Link
              href={`/articulos/${article.slug}`}
              className="opinion-card-image"
            >
              <Image
                src={article.image}
                alt={article.title}
                width={1200}
                height={800}
              />
            </Link>

            <div className="opinion-card-content">
              <span>{article.author}</span>

              <h3>
                <Link href={`/articulos/${article.slug}`}>
                  {article.title}
                </Link>
              </h3>

              <p>{article.excerpt}</p>

              <time>{article.date}</time>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}