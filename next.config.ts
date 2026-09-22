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
  // Fix HTTP 416 "Range Not Satisfiable" for video files served from /public
  // Next.js dev server needs explicit Accept-Ranges header for WebM/MP4 range requests
  async headers() {
    return [
      {
        source: '/videos/:file*',
        headers: [
          { key: 'Accept-Ranges', value: 'bytes' },
          { key: 'Cache-Control', value: 'public, max-age=31536000, immutable' },
        ],
      },
    ];
  },
};

export default nextConfig;
