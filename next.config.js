/** @type {import('next').NextConfig} */
const isGitHubPages = process.env.GITHUB_PAGES === 'true'
const isVercel = process.env.VERCEL === '1'

const nextConfig = {
  reactStrictMode: true,
  // Only use static export for GitHub Pages, Vercel can use SSR
  ...(isGitHubPages && { output: 'export' }),
  // Only use basePath for GitHub Pages, not for Vercel
  ...(isGitHubPages && { basePath: '/JashnEvents' }),
  images: {
    domains: ['images.unsplash.com'],
    // Only unoptimize for static export (GitHub Pages)
    ...(isGitHubPages && { unoptimized: true }),
  },
  trailingSlash: true,
}

module.exports = nextConfig
