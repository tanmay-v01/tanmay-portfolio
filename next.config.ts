import type { NextConfig } from 'next';

const nextConfig: NextConfig = {
  images: {
    // Allow local images served from the public folder
    // No external domains needed — all images are local
    unoptimized: false,
  },
  // Ensure TypeScript paths resolve properly
  experimental: {
    // Empty — no experimental flags needed
  },
};

export default nextConfig;
