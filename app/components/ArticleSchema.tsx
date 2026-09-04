import type { Article } from "@/app/lib/wordpress";

type ArticleSchemaProps = {
  article: Article;
};

export default function ArticleSchema({
  article,
}: ArticleSchemaProps) {
  const isNews = article.section === "Noticias";

  const basePath = isNews
    ? "/noticias"
    : "/articulos";

  const articleUrl = `https://paso656.com${basePath}/${article.slug}`;

  const schema = {
    "@context": "https://schema.org",
    "@type": isNews ? "NewsArticle" : "Article",

    headline: article.title,

    description: article.excerpt,

    image: [article.image],

    datePublished: article.dateRaw,

    dateModified: article.dateRaw,

    author: {
      "@type": "Person",
      name: article.author,
    },

    publisher: {
      "@type": "Organization",
      name: "paso656",
      url: "https://paso656.com",
    },

    mainEntityOfPage: {
      "@type": "WebPage",
      "@id": articleUrl,
    },
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{
        __html: JSON.stringify(schema),
      }}
    />
  );
}