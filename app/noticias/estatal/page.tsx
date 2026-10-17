
import type { Metadata } from "next";
import NewsFilters from "@/app/components/NewsFilters";
import CategoryNewsGrid from "@/app/components/CategoryNewsGrid";

export const metadata: Metadata = {
  title: "Noticias Estatales",
  description:
    "La información más relevante del estado de Chihuahua. Noticias estatales desde paso656.",
  alternates: {
    canonical: "https://paso656.com/noticias/estatal",
  },
};

export default function EstatalNewsPage() {
  return (
    <main className="news-page">
      <div className="news-page-inner">
        <header className="news-header">
          <span>NOTICIAS</span>

          <h1>Estatal</h1>

          <p>
            La información más relevante del estado de Chihuahua.
          </p>
        </header>

        <NewsFilters />

        <CategoryNewsGrid category="Estatal" />
      </div>
    </main>
  );
}
