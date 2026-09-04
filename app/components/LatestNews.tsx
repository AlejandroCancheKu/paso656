import Image from "next/image";
import Link from "next/link";
import { getPosts } from "@/app/lib/wordpress";

export default async function LatestNews() {
  const articles = await getPosts();

  const latestNews = articles
    .filter((article) => article.section === "Noticias")
    .sort(
      (a, b) =>
        new Date(b.dateRaw).getTime() -
        new Date(a.dateRaw).getTime()
    )
    .slice(0, 4);

  if (latestNews.length === 0) {
    return null;
  }

  return (
    <section className="latest-news">
      <div className="latest-news-header">
        <div>
          <span>ACTUALIDAD</span>
          <h2>Últimas noticias.</h2>
        </div>

        <Link href="/noticias">
          Ver todas las noticias →
        </Link>
      </div>

      <div className="latest-news-grid">
        {latestNews.map((article) => (
          <article className="latest-news-card" key={article.id}>
            <Link
              href={`/noticias/${article.slug}`}
              className="latest-news-card-image"
            >
              <Image
                src={article.image}
                alt={article.title}
                width={1200}
                height={800}
              />
            </Link>

            <div className="latest-news-card-content">
              <span>{article.category}</span>

              <h3>
                <Link href={`/noticias/${article.slug}`}>
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