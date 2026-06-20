import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  turbopack: {
    root: process.cwd(),
  },
  images: {
    // Next 16 requires non-default quality values to be whitelisted.
    // 100 is used by the hero image in hero-scroll.tsx.
    qualities: [75, 100],
  },
};

export default nextConfig;
