
import type { Metadata } from "next";
import NewsFilters from "@/app/components/NewsFilters";
import CategoryNewsGrid from "@/app/components/CategoryNewsGrid";

export const metadata: Metadata = {
  title: "Noticias de Ecología",
  description:
    "Información y noticias sobre ecología, medio ambiente y cuidado del entorno desde paso656.",
  alternates: {
    canonical: "https://paso656.com/noticias/ecologia",
  },
};

export default function EcologiaNewsPage() {
  return (
    <main className="news-page">
      <div className="news-page-inner">
        <header className="news-header">
          <span>NOTICIAS</span>

          <h1>Ecología</h1>

          <p>
            Información y actualidad sobre ecología, medio ambiente
            y cuidado del entorno.
          </p>
        </header>

        <NewsFilters />

        <CategoryNewsGrid category="Ecología" />
      </div>
    </main>
  );
}
