import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "darkgreen-mole-905123.hostingersite.com",
      },
    ],
  },
};

export default nextConfig;