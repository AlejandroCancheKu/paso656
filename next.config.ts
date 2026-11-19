import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  // Slugs viejos que cambiaron en WordPress → URL actual (301)
  async redirects() {
    return [
      {
        source:
          "/articulos/cuando-la-muerte-tambien-se-abandona-el-horror-de-ciudad-juarez",
        destination: "/articulos/no-basta-con-darles-sepultura",
        permanent: true,
      },
    ];
  },
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "paso656.com",
      },
      {
        protocol: "https",
        hostname: "cms.paso656.com",
      },
    ],
  },
};

export default nextConfig;