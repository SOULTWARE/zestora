import { NextConfig } from 'next';

const nextConfig: NextConfig = {
  // Enable static HTML export for Cloudflare Pages
  output: 'export',

  // Image configuration for static export
  images: {
    unoptimized: true,
    deviceSizes: [640, 750, 828, 1080, 1200, 1920, 2048],
    imageSizes: [16, 32, 48, 64, 96, 128, 256, 384],
    formats: ['image/webp'],
    qualities: [75, 85],
    minimumCacheTTL: 60,
  },

  // Performance optimizations
  poweredByHeader: false,
  compress: true,
  reactStrictMode: true,
};

export default nextConfig;
