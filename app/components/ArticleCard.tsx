
import Image from "next/image";

type ArticleCardProps = {
  slug: string;
  section: string;
  category: string;
  title: string;
  excerpt: string;
  author: string;
  date: string;
  image: string;
  views?: number;
};

export default function ArticleCard({
  slug,
  section,
  category,
  title,
  excerpt,
  author,
  date,
  image,
  views = 0,
}: ArticleCardProps) {
  const basePath =
    section === "Noticias"
      ? "/noticias"
      : "/articulos";

  const articleUrl = `${basePath}/${slug}`;

  return (
    <article className="article-card">
      <a href={articleUrl} className="article-card-image">
        <Image
          src={image}
          alt={title}
          width={800}
          height={533}
        />
      </a>

      <div className="article-card-content">
        <span className="article-card-category">
          {category}
        </span>

        <h2>
          <a href={articleUrl}>{title}</a>
        </h2>

        <p>{excerpt}</p>

        <div className="article-card-meta">
          <span>{author}</span>
          <span>{date}</span>

          <span
            className="article-card-views"
            aria-label={`${views} lecturas`}
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

            {views}
          </span>
        </div>
      </div>
    </article>
  );
}
