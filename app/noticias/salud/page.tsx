
import type { Metadata } from "next";
import NewsFilters from "@/app/components/NewsFilters";
import CategoryNewsGrid from "@/app/components/CategoryNewsGrid";

export const metadata: Metadata = {
  title: "Noticias de Salud",
  description:
    "Noticias e información sobre salud, medicina, prevención y bienestar en Ciudad Juárez, Chihuahua y México.",
  alternates: {
    canonical: "https://paso656.com/noticias/salud",
  },
};

export default function SaludNewsPage() {
  return (
    <main className="news-page">
      <div className="news-page-inner">
        <header className="news-header">
          <span>NOTICIAS</span>

          <h1>Salud</h1>

          <p>
            Información sobre salud, medicina, prevención
            y bienestar en Ciudad Juárez y México.
          </p>
        </header>

        <NewsFilters />

        <CategoryNewsGrid category="Salud" />
      </div>
    </main>
  );
}
