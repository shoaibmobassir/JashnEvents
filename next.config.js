/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  output: 'export',
  basePath: '/JashnEvents',
  images: {
    domains: ['images.unsplash.com'],
    unoptimized: true, // Required for static export
  },
  trailingSlash: true,
}

module.exports = nextConfig
