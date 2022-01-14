/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  productionBrowserSourceMaps: true,
  devIndicators: {
    buildActivityPosition: 'bottom-right',
  },
  swcMinify: true,
  trailingSlash: true,
  experimental: {
    removeConsole: process.env.NODE_ENV !== 'development',
  },
  webpack5: true,
  // Can be turned on when https://github.com/vercel/next.js/issues/24640 is fixed
  optimizeFonts: false,
}

module.exports = nextConfig
