
import type { Metadata } from "next";
import NewsFilters from "@/app/components/NewsFilters";
import CategoryNewsGrid from "@/app/components/CategoryNewsGrid";

export const metadata: Metadata = {
  title: "Noticias Internacionales",
  description:
    "Las noticias más relevantes del mundo. Información internacional desde paso656.",
  alternates: {
    canonical: "https://paso656.com/noticias/internacional",
  },
};

export default function InternacionalNewsPage() {
  return (
    <main className="news-page">
      <div className="news-page-inner">
        <header className="news-header">
          <span>NOTICIAS</span>

          <h1>Internacional</h1>

          <p>Las noticias más relevantes del mundo.</p>
        </header>

        <NewsFilters />

        <CategoryNewsGrid category="Internacional" />
      </div>
    </main>
  );
}
