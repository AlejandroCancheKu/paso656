
import type { Metadata } from "next";
import NewsFilters from "@/app/components/NewsFilters";
import CategoryNewsGrid from "@/app/components/CategoryNewsGrid";

export const metadata: Metadata = {
  title: "Noticias de Obras Públicas",
  description:
    "Información y noticias sobre obras públicas, infraestructura y proyectos urbanos desde paso656.",
  alternates: {
    canonical: "https://paso656.com/noticias/obras-publicas",
  },
};

export default function ObrasPublicasNewsPage() {
  return (
    <main className="news-page">
      <div className="news-page-inner">
        <header className="news-header">
          <span>NOTICIAS</span>

          <h1>Obras Públicas</h1>

          <p>
            Información y actualidad sobre obras públicas,
            infraestructura y proyectos urbanos.
          </p>
        </header>

        <NewsFilters />

        <CategoryNewsGrid category="Obras Públicas" />
      </div>
    </main>
  );
}
