import Header from "@/app/components/Header";
import FeaturedArticle from "@/app/components/FeaturedArticle";
import LatestArticles from "@/app/components/LatestArticles";

export default function Home() {
  return (
    <>
      <Header />

      <main>
        <FeaturedArticle />
        <LatestArticles />
      </main>
    </>
  );
}