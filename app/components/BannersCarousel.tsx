"use client";

import Image from "next/image";
import { useEffect, useState } from "react";
import type { Banner } from "@/app/lib/wordpress";

type BannersCarouselProps = {
  banners: Banner[];
};

export default function BannersCarousel({
  banners,
}: BannersCarouselProps) {
  const [current, setCurrent] = useState(0);

  useEffect(() => {
    if (banners.length <= 1) {
      return;
    }

    const interval = setInterval(() => {
      setCurrent((prev) => (prev + 1) % banners.length);
    }, 5000);

    return () => clearInterval(interval);
  }, [banners.length]);

  return (
    <div className="banners-carousel">
      {banners.map((banner, index) => (
        <div
          key={banner.id}
          className={`banner-slide ${
            index === current ? "active" : ""
          }`}
          aria-hidden={index !== current}
        >
          <Image
            src={banner.image}
            alt={banner.title || "Publicidad"}
            width={1200}
            height={400}
            sizes="(max-width: 768px) 100vw, 1200px"
          />
        </div>
      ))}

      {banners.length > 1 && (
        <div className="banner-dots">
          {banners.map((banner, index) => (
            <button
              key={banner.id}
              type="button"
              className={index === current ? "active" : ""}
              onClick={() => setCurrent(index)}
              aria-label={`Mostrar banner ${index + 1}`}
              aria-current={index === current ? "true" : undefined}
            />
          ))}
        </div>
      )}
    </div>
  );
}