import Banners from "@/app/components/Banners";
import FeaturedArticle from "@/app/components/FeaturedArticle";
import LatestArticles from "@/app/components/LatestArticles";
import LatestNews from "@/app/components/LatestNews";

export default function Home() {
  return (
    <main>
      <Banners />
      <FeaturedArticle />
      <LatestNews />
      <LatestArticles />
    </main>
  );
}