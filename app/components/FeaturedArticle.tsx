import Image from "next/image";

export default function FeaturedArticle() {
  return (
    <section className="featured-article">
      <div className="featured-content">
        <span className="featured-category">OPINIÓN</span>

        <h1>
          Ciudad Juárez no necesita más ruido.
          Necesita nuevas ideas.
        </h1>

        <p>
          Una mirada distinta a lo que ocurre en la frontera,
          desde quienes la viven, la cuestionan y la construyen.
        </p>

        <a href="/opinion" className="featured-link">
          Leer artículo →
        </a>
      </div>

      <div className="featured-image">
        <Image
          src="/images/hero-juarez.png"
          alt="Vista urbana de Ciudad Juárez"
          width={1200}
          height={800}
          priority
        />
      </div>
    </section>
  );
}