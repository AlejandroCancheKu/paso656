import Header from "@/app/components/Header";
import { getPosts } from "@/app/lib/wordpress";

type ArticlePageProps = {
  params: Promise<{
    slug: string;
  }>;
};

export default async function ArticlePage({
  params,
}: ArticlePageProps) {
  const { slug } = await params;

  const articles = await getPosts();

  const article = articles.find((item) => item.slug === slug);

  if (!article) {
    return <h1>Artículo no encontrado</h1>;
  }

  return (
    <>
      <Header />

      <main className="article-page">
        <header className="article-header">
          <span className="article-category">
            {article.category.toUpperCase()}
          </span>

          <h1>{article.title}</h1>

          <div className="article-meta">
            {article.author} · {article.date}
          </div>
        </header>

        <div className="article-hero">
          <img src={article.image} alt={article.title} />
        </div>

        <div
          className="article-content"
          dangerouslySetInnerHTML={{
            __html: article.content,
          }}
        />
      </main>
    </>
  );
}