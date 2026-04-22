import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    /** Allow higher Next/Image quality values for brand photography */
    qualities: [75, 80, 85, 90, 92, 95],
    deviceSizes: [640, 750, 828, 1080, 1200, 1440, 1920, 2048],
    imageSizes: [16, 32, 48, 64, 96, 128, 256, 384],
  },
};

export default nextConfig;
