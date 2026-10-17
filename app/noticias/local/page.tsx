
import type { Metadata } from "next";
import NewsFilters from "@/app/components/NewsFilters";
import CategoryNewsGrid from "@/app/components/CategoryNewsGrid";

export const metadata: Metadata = {
  title: "Noticias Locales",
  description:
    "Noticias de Ciudad Juárez y su entorno. Información local desde la frontera.",
  alternates: {
    canonical: "https://paso656.com/noticias/local",
  },
};

export default function LocalNewsPage() {
  return (
    <main className="news-page">
      <div className="news-page-inner">
        <header className="news-header">
          <span>NOTICIAS</span>

          <h1>Local</h1>

          <p>
            Las noticias de Ciudad Juárez y su entorno.
          </p>
        </header>

        <NewsFilters />

        <CategoryNewsGrid category="Local" />
      </div>
    </main>
  );
}
