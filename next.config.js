/** @type {import('next').NextConfig} */

// Import the generated cache headers configuration
const { cacheHeaders } = require('./cache-config');

const nextConfig = {
  reactStrictMode: true,
  // CDN Configuration
  assetPrefix: process.env.NODE_ENV === 'production' ? 'https://cdn.eightsixgames.com' : '',
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'images.unsplash.com',
      },
      {
        protocol: 'https',
        hostname: 'cdn.eightsixgames.com',
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
    // CDN loader for production
    loader: process.env.NODE_ENV === 'production' ? 'custom' : 'default',
    loaderFile: process.env.NODE_ENV === 'production' ? './image-loader.js' : undefined,
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
    optimizePackageImports: ['framer-motion', 'gsap', '@heroicons/react', 'react-intersection-observer'],
    // Updated turbo config using rules instead of loaders
    turbo: {
      rules: {
        '*.svg': ['@svgr/webpack'],
      },
    },
    // Add modern features
    optimizeServerReact: true,
    serverComponentsExternalPackages: ['sharp'],
  },
  // Webpack optimizations
  webpack: (config, { dev, isServer }) => {
    // Optimize bundle splitting for production
    if (!dev && !isServer) {
      config.optimization.splitChunks = {
        chunks: 'all',
        maxInitialRequests: 10,
        maxAsyncRequests: 10,
        cacheGroups: {
          vendor: {
            test: /[\\/]node_modules[\\/]/,
            name: 'vendors',
            chunks: 'all',
            priority: 10,
            reuseExistingChunk: true,
          },
          common: {
            name: 'common',
            minChunks: 2,
            chunks: 'all',
            priority: 5,
            reuseExistingChunk: true,
          },
          // Separate framer-motion for better caching
          framerMotion: {
            test: /[\\/]node_modules[\\/]framer-motion[\\/]/,
            name: 'framer-motion',
            chunks: 'all',
            priority: 20,
          },
          // Separate GSAP for better caching
          gsap: {
            test: /[\\/]node_modules[\\/]gsap[\\/]/,
            name: 'gsap',
            chunks: 'all',
            priority: 20,
          },
          // Separate React for better caching
          react: {
            test: /[\\/]node_modules[\\/](react|react-dom)[\\/]/,
            name: 'react',
            chunks: 'all',
            priority: 30,
          },
          // Separate Next.js for better caching
          next: {
            test: /[\\/]node_modules[\\/]next[\\/]/,
            name: 'next',
            chunks: 'all',
            priority: 25,
          },
        },
      }
      
      // Optimize CSS extraction
      config.optimization.minimize = true;
    }

    // Add bundle analyzer
    if (process.env.ANALYZE === 'true') {
      const { BundleAnalyzerPlugin } = require('webpack-bundle-analyzer')
      config.plugins.push(
        new BundleAnalyzerPlugin({
          analyzerMode: 'static',
          openAnalyzer: false,
        })
      )
    }

    return config
  },
  // Add redirects for better SEO
  async redirects() {
    return [
      {
        source: '/home',
        destination: '/',
        permanent: true,
      },
    ]
  },
  // Add rewrites for better routing
  async rewrites() {
    return [
      {
        source: '/sitemap.xml',
        destination: '/api/sitemap',
      },
    ]
  },
  // Optimize output
  output: 'export',
  // Add trailing slash for better SEO
  trailingSlash: false,
  // Optimize for static generation
  generateEtags: false,
}

// Enable bundle analyzer when ANALYZE is set to true
const withBundleAnalyzer = process.env.ANALYZE === 'true' 
  ? require('@next/bundle-analyzer')({
      enabled: true,
    }) 
  : (config) => config;

module.exports = withBundleAnalyzer(nextConfig) 