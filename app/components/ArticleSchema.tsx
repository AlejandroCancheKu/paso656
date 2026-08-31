import type { Article } from "@/app/lib/wordpress";

type ArticleSchemaProps = {
  article: Article;
};

export default function ArticleSchema({
  article,
}: ArticleSchemaProps) {
  const schema = {
    "@context": "https://schema.org",
    "@type": "Article",
    headline: article.title,
    description: article.excerpt,
    image: [article.image],
    datePublished: article.dateRaw,
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
      "@id": `https://paso656.com/articulos/${article.slug}`,
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