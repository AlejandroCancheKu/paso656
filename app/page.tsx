
import FrontierInfo from "@/app/components/FrontierInfo";
import Banners from "@/app/components/Banners";
import FeaturedArticle from "@/app/components/FeaturedArticle";
import LatestArticles from "@/app/components/LatestArticles";
import LatestNews from "@/app/components/LatestNews";
import Newsletter from "@/app/components/Newsletter";

export default function Home() {
  return (
    <main>
      <Banners />
      <FrontierInfo />
      <FeaturedArticle />
      <LatestNews />
      <LatestArticles />
      <Newsletter />
    </main>
  );
}
