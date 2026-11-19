import type { Metadata } from "next";

import FrontierInfo from "@/app/components/FrontierInfo";
import Banners from "@/app/components/Banners";
import FeaturedArticle from "@/app/components/FeaturedArticle";
import LatestArticles from "@/app/components/LatestArticles";
import LatestNews from "@/app/components/LatestNews";
import Newsletter from "@/app/components/Newsletter";

export const metadata: Metadata = {
  alternates: {
    canonical: "https://paso656.com",
  },
};

export default function Home() {
  return (
    <main>
      <FrontierInfo />
      <Banners />
      <FeaturedArticle />
      <LatestNews />
      <LatestArticles />
      <Newsletter />
    </main>
  );
}
