
import Image from "next/image";
import Link from "next/link";
import { getPosts, getPostViews } from "@/app/lib/wordpress";

export default async function LatestNews() {
  const articles = await getPosts();
  const views = await getPostViews();

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

              <div className="latest-news-card-meta">
                <time>{article.date}</time>

                <span
                  className="latest-news-card-views"
                  aria-label={`${views[article.id] ?? 0} lecturas`}
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="15"
                    height="15"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="1.8"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    aria-hidden="true"
                  >
                    <path d="M2 12s3.5-7 10-7 10 7 10 7-3.5 7-10 7S2 12 2 12Z" />
                    <circle cx="12" cy="12" r="3" />
                  </svg>

                  {views[article.id] ?? 0}
                </span>
              </div>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}
