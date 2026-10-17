
import type { Metadata } from "next";
import NewsFilters from "@/app/components/NewsFilters";
import CategoryNewsGrid from "@/app/components/CategoryNewsGrid";

export const metadata: Metadata = {
  title: "Noticias de Cultura",
  description:
    "Información y noticias sobre cultura, arte y actividades culturales desde paso656.",
  alternates: {
    canonical: "https://paso656.com/noticias/cultura",
  },
};

export default function CulturaNewsPage() {
  return (
    <main className="news-page">
      <div className="news-page-inner">
        <header className="news-header">
          <span>NOTICIAS</span>

          <h1>Cultura</h1>

          <p>
            Información y actualidad sobre cultura, arte y actividades
            culturales.
          </p>
        </header>

        <NewsFilters />

        <CategoryNewsGrid category="Cultura" />
      </div>
    </main>
  );
}
