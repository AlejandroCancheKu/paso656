
import type { Metadata } from "next";
import NewsFilters from "@/app/components/NewsFilters";
import CategoryNewsGrid from "@/app/components/CategoryNewsGrid";

export const metadata: Metadata = {
  title: "Noticias de Economía",
  description:
    "Información y noticias de economía, finanzas y actividad económica desde paso656.",
  alternates: {
    canonical: "https://paso656.com/noticias/economia",
  },
};

export default function EconomiaNewsPage() {
  return (
    <main className="news-page">
      <div className="news-page-inner">
        <header className="news-header">
          <span>NOTICIAS</span>

          <h1>Economía</h1>

          <p>
            Información sobre economía, finanzas y actividad económica
            en Ciudad Juárez, Chihuahua y México.
          </p>
        </header>

        <NewsFilters />

        <CategoryNewsGrid category="Economía" />
      </div>
    </main>
  );
}
