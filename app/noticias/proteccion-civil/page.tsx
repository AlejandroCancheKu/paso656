
import type { Metadata } from "next";
import NewsFilters from "@/app/components/NewsFilters";
import CategoryNewsGrid from "@/app/components/CategoryNewsGrid";

export const metadata: Metadata = {
  title: "Protección Civil",
  description:
    "Información, alertas y recomendaciones de Protección Civil en Ciudad Juárez y la región.",
  alternates: {
    canonical: "https://paso656.com/noticias/proteccion-civil",
  },
};

export default function ProteccionCivilNewsPage() {
  return (
    <main className="news-page">
      <div className="news-page-inner">
        <header className="news-header">
          <span>NOTICIAS</span>

          <h1>Protección Civil</h1>

          <p>
            Información, alertas y recomendaciones para la comunidad
            de Ciudad Juárez y la región.
          </p>
        </header>

        <NewsFilters />

        <CategoryNewsGrid category="Protección Civil" />
      </div>
    </main>
  );
}
