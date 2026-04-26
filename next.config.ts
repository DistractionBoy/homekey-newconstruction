import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    formats: ["image/avif", "image/webp"],
    qualities: [75, 90],
    remotePatterns: [
      new URL("https://images.unsplash.com/**"),
    ],
  },
};

export default nextConfig;
