import Image from "next/image";

type ArticleCardProps = {
  category: string;
  title: string;
  excerpt: string;
  author: string;
  date: string;
  image: string;
};

export default function ArticleCard({
  category,
  title,
  excerpt,
  author,
  date,
  image,
}: ArticleCardProps) {
  return (
    <article className="article-card">
      <a href="#" className="article-card-image">
        <Image
          src={image}
          alt={title}
          width={800}
          height={533}
        />
      </a>

      <div className="article-card-content">
        <span className="article-card-category">{category}</span>

        <h2>
          <a href="#">{title}</a>
        </h2>

        <p>{excerpt}</p>

        <div className="article-card-meta">
          <span>{author}</span>
          <span>{date}</span>
        </div>
      </div>
    </article>
  );
}