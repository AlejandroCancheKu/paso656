
import type { Metadata } from "next";
import NewsFilters from "@/app/components/NewsFilters";
import CategoryNewsGrid from "@/app/components/CategoryNewsGrid";

export const metadata: Metadata = {
  title: "Noticias de Educación",
  description:
    "Información y noticias sobre educación, escuelas y comunidad educativa desde paso656.",
  alternates: {
    canonical: "https://paso656.com/noticias/educacion",
  },
};

export default function EducacionNewsPage() {
  return (
    <main className="news-page">
      <div className="news-page-inner">
        <header className="news-header">
          <span>NOTICIAS</span>

          <h1>Educación</h1>

          <p>
            Información y actualidad sobre educación, escuelas y
            comunidad educativa.
          </p>
        </header>

        <NewsFilters />

        <CategoryNewsGrid category="Educación" />
      </div>
    </main>
  );
}
