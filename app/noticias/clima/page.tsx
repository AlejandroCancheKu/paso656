
import type { Metadata } from "next";
import NewsFilters from "@/app/components/NewsFilters";
import CategoryNewsGrid from "@/app/components/CategoryNewsGrid";

export const metadata: Metadata = {
  title: "Noticias del Clima",
  description:
    "Información sobre el clima y las condiciones meteorológicas en Ciudad Juárez y la región.",
  alternates: {
    canonical: "https://paso656.com/noticias/clima",
  },
};

export default function ClimaNewsPage() {
  return (
    <main className="news-page">
      <div className="news-page-inner">
        <header className="news-header">
          <span>NOTICIAS</span>

          <h1>Clima</h1>

          <p>
            Información sobre el clima y las condiciones meteorológicas
            en Ciudad Juárez y la región.
          </p>
        </header>

        <NewsFilters />

        <CategoryNewsGrid category="Clima" />
      </div>
    </main>
  );
}
