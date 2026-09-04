import type { Metadata } from "next";
import ShareButtons from "@/app/components/ShareButtons";
import RelatedArticles from "@/app/components/RelatedArticles";
import ArticleSchema from "@/app/components/ArticleSchema";
import {
  getPosts,
  getReadingTime,
} from "@/app/lib/wordpress";

type NewsPageProps = {
  params: Promise<{
    slug: string;
  }>;
};

async function getNewsArticle(slug: string) {
  const articles = await getPosts();

  return articles.find(
    (article) =>
      article.slug === slug &&
      article.section === "Noticias"
  );
}

export async function generateMetadata({
  params,
}: NewsPageProps): Promise<Metadata> {
  const { slug } = await params;

  const article = await getNewsArticle(slug);

  if (!article) {
    return {
      title: "Noticia no encontrada",
    };
  }

  return {
    title: article.title,
    description: article.excerpt,

    alternates: {
      canonical: `https://paso656.com/noticias/${article.slug}`,
    },

    openGraph: {
      title: article.title,
      description: article.excerpt,
      type: "article",
      url: `https://paso656.com/noticias/${article.slug}`,
      siteName: "paso656",
      locale: "es_MX",
      images: [
        {
          url: article.image,
          alt: article.title,
        },
      ],
    },

    twitter: {
      card: "summary_large_image",
      title: article.title,
      description: article.excerpt,
      images: [article.image],
    },
  };
}

export default async function NewsPage({
  params,
}: NewsPageProps) {
  const { slug } = await params;

  const article = await getNewsArticle(slug);

  if (!article) {
    return <h1>Noticia no encontrada</h1>;
  }

  const allNews = await getPosts();

  const relatedArticles = allNews
    .filter(
      (item) =>
        item.id !== article.id &&
        item.section === "Noticias"
    )
    .slice(0, 2);

  const readingTime = getReadingTime(article.content);

  return (
    <main className="article-page">
      <ArticleSchema article={article} />

      <header className="article-header">
        <span className="article-category">
          {article.category.toUpperCase()}
        </span>

        <h1>{article.title}</h1>

        <div className="article-meta">
          <span>
            {article.author} · {article.date}
          </span>

          <span>
            {readingTime} min de lectura
          </span>
        </div>

        <ShareButtons
          title={article.title}
          url={`https://paso656.com/noticias/${article.slug}`}
        />
      </header>

      <div className="article-hero">
        <img
          src={article.image}
          alt={article.title}
        />
      </div>

      <div
        className="article-content"
        dangerouslySetInnerHTML={{
          __html: article.content,
        }}
      />

      <RelatedArticles articles={relatedArticles} />
    </main>
  );
}