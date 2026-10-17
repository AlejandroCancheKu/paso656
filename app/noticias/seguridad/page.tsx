
import type { Metadata } from "next";
import NewsFilters from "@/app/components/NewsFilters";
import CategoryNewsGrid from "@/app/components/CategoryNewsGrid";

export const metadata: Metadata = {
  title: "Noticias de Seguridad",
  description:
    "Información y noticias de seguridad en Ciudad Juárez, Chihuahua y México desde paso656.",
  alternates: {
    canonical: "https://paso656.com/noticias/seguridad",
  },
};

export default function SeguridadNewsPage() {
  return (
    <main className="news-page">
      <div className="news-page-inner">
        <header className="news-header">
          <span>NOTICIAS</span>

          <h1>Seguridad</h1>

          <p>
            Información y actualidad sobre seguridad en Ciudad Juárez,
            Chihuahua y México.
          </p>
        </header>

        <NewsFilters />

        <CategoryNewsGrid category="Seguridad" />
      </div>
    </main>
  );
}
