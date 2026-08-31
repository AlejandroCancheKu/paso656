import type { NextConfig } from "next";

const nextConfig: NextConfig = {
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