
import type { Metadata } from "next";
import NewsFilters from "@/app/components/NewsFilters";
import CategoryNewsGrid from "@/app/components/CategoryNewsGrid";

export const metadata: Metadata = {
  title: "Noticias de Política",
  description:
    "Información y noticias de política local, estatal y nacional desde paso656.",
  alternates: {
    canonical: "https://paso656.com/noticias/politica",
  },
};

export default function PoliticaNewsPage() {
  return (
    <main className="news-page">
      <div className="news-page-inner">
        <header className="news-header">
          <span>NOTICIAS</span>

          <h1>Política</h1>

          <p>
            Información y actualidad política desde Ciudad Juárez,
            Chihuahua y México.
          </p>
        </header>

        <NewsFilters />

        <CategoryNewsGrid category="Política" />
      </div>
    </main>
  );
}
