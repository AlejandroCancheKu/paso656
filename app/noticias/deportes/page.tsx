
import type { Metadata } from "next";
import NewsFilters from "@/app/components/NewsFilters";
import CategoryNewsGrid from "@/app/components/CategoryNewsGrid";

export const metadata: Metadata = {
  title: "Noticias de Deportes",
  description:
    "Información y noticias deportivas de Ciudad Juárez, Chihuahua, México y el mundo desde paso656.",
  alternates: {
    canonical: "https://paso656.com/noticias/deportes",
  },
};

export default function DeportesNewsPage() {
  return (
    <main className="news-page">
      <div className="news-page-inner">
        <header className="news-header">
          <span>NOTICIAS</span>

          <h1>Deportes</h1>

          <p>
            Información y actualidad deportiva de Ciudad Juárez,
            Chihuahua, México y el mundo.
          </p>
        </header>

        <NewsFilters />

        <CategoryNewsGrid category="Deportes" />
      </div>
    </main>
  );
}
