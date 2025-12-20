/** @type {import('next').NextConfig} */
const isGitHubPages = process.env.GITHUB_PAGES === 'true'

const nextConfig = {
  reactStrictMode: true,
  output: 'export',
  // Only use basePath for GitHub Pages, not for Vercel
  ...(isGitHubPages && { basePath: '/JashnEvents' }),
  images: {
    domains: ['images.unsplash.com'],
    unoptimized: true, // Required for static export
  },
  trailingSlash: true,
}

module.exports = nextConfig
