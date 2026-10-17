
import type { Metadata } from "next";
import NewsFilters from "@/app/components/NewsFilters";
import CategoryNewsGrid from "@/app/components/CategoryNewsGrid";

export const metadata: Metadata = {
  title: "Noticias Nacionales",
  description:
    "Las noticias más importantes de México. Información nacional desde paso656.",
  alternates: {
    canonical: "https://paso656.com/noticias/nacional",
  },
};

export default function NacionalNewsPage() {
  return (
    <main className="news-page">
      <div className="news-page-inner">
        <header className="news-header">
          <span>NOTICIAS</span>

          <h1>Nacional</h1>

          <p>
            Las noticias más importantes de México.
          </p>
        </header>

        <NewsFilters />

        <CategoryNewsGrid category="Nacional" />
      </div>
    </main>
  );
}
