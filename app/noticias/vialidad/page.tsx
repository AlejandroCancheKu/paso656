
import type { Metadata } from "next";
import NewsFilters from "@/app/components/NewsFilters";
import CategoryNewsGrid from "@/app/components/CategoryNewsGrid";

export const metadata: Metadata = {
  title: "Noticias de Vialidad",
  description:
    "Información y noticias sobre vialidad, tránsito y movilidad en Ciudad Juárez desde paso656.",
  alternates: {
    canonical: "https://paso656.com/noticias/vialidad",
  },
};

export default function VialidadNewsPage() {
  return (
    <main className="news-page">
      <div className="news-page-inner">
        <header className="news-header">
          <span>NOTICIAS</span>

          <h1>Vialidad</h1>

          <p>
            Información y actualidad sobre vialidad, tránsito y
            movilidad en Ciudad Juárez.
          </p>
        </header>

        <NewsFilters />

        <CategoryNewsGrid category="Vialidad" />
      </div>
    </main>
  );
}
