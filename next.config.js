/** @type {import('next').NextConfig} */

// Import the generated cache headers configuration
const { cacheHeaders } = require('./cache-config');

const nextConfig = {
  reactStrictMode: true,
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'images.unsplash.com',
      }
    ],
    deviceSizes: [320, 420, 640, 750, 828, 1080, 1200, 1920, 2048],
    imageSizes: [16, 32, 48, 64, 96, 128, 256],
    minimumCacheTTL: 60,
    formats: ['image/webp', 'image/avif'],
    // Set unoptimized to true to work with static export
    unoptimized: true,
    // Add additional image optimization settings
    dangerouslyAllowSVG: true,
    contentDispositionType: 'attachment',
    contentSecurityPolicy: "default-src 'self'; script-src 'none'; sandbox;",
  },
  compiler: {
    removeConsole: process.env.NODE_ENV === 'production',
  },
  // Performance optimizations
  poweredByHeader: false,
  compress: true,
  productionBrowserSourceMaps: false,
  // Cache optimization
  async headers() {
    return cacheHeaders;
  },
  // Simplified experimental features
  experimental: {
    // Keep only the most stable experimental features
    optimizeCss: true,
    scrollRestoration: true,
    optimizePackageImports: ['framer-motion', 'gsap', '@heroicons/react', 'lodash'],
    // Updated turbo config using rules instead of loaders
    turbo: {
      rules: {
        '*.svg': ['@svgr/webpack'],
      },
    },
  },
}

// Enable bundle analyzer when ANALYZE is set to true
const withBundleAnalyzer = process.env.ANALYZE === 'true' 
  ? require('@next/bundle-analyzer')({
      enabled: true,
    }) 
  : (config) => config;

module.exports = withBundleAnalyzer(nextConfig) 