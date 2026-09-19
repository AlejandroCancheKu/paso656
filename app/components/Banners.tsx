import { getBanners } from "@/app/lib/wordpress";
import BannersCarousel from "./BannersCarousel";

export default async function Banners() {
  const banners = await getBanners();

  if (banners.length === 0) {
    return null;
  }

  return (
    <section className="banners-section" aria-label="Publicidad">
      <div className="banners-container">
        <BannersCarousel banners={banners} />
      </div>
    </section>
  );
}