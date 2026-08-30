import ArticleCard from "./ArticleCard";

const articles = [
  {
    category: "CIUDAD",
    title: "Juárez frente a los cambios que vienen",
    excerpt:
      "Una ciudad que crece, cambia y enfrenta nuevos desafíos todos los días.",
    author: "Redacción paso656",
    date: "30 AGO 2026",
    image: "/images/article-city.png",
  },
  {
    category: "OPINIÓN",
    title: "Lo que la frontera todavía tiene que decir",
    excerpt:
      "Más allá de las noticias del día existe una conversación que merece ser escuchada.",
    author: "Redacción paso656",
    date: "29 AGO 2026",
    image: "/images/article-opinion.png",
  },
  {
    category: "POLÍTICA",
    title: "Las decisiones que están cambiando la ciudad",
    excerpt:
      "Una mirada a los temas que definirán el futuro inmediato de Juárez.",
    author: "Redacción paso656",
    date: "28 AGO 2026",
    image: "/images/article-politica.png",
  },
];

export default function LatestArticles() {
  return (
    <section className="latest-articles">
      <div className="latest-header">
        <div>
          <span>ACTUALIDAD</span>
          <h2>Últimas publicaciones</h2>
        </div>

        <a href="/articulos">Ver todas →</a>
      </div>

      <div className="articles-grid">
        {articles.map((article) => (
          <ArticleCard key={article.title} {...article} />
        ))}
      </div>
    </section>
  );
}