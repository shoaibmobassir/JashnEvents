/** @type {import('next').NextConfig} */
const isGitHubPages = process.env.GITHUB_PAGES === 'true'

const nextConfig = {
  reactStrictMode: true,
  // Only use static export for GitHub Pages
  // Vercel will use Next.js normally (no output: 'export')
  ...(isGitHubPages && { 
    output: 'export',
    basePath: '/JashnEvents',
  }),
  images: {
    domains: ['images.unsplash.com'],
    // Only unoptimize for static export (GitHub Pages)
    ...(isGitHubPages && { unoptimized: true }),
  },
  trailingSlash: true,
}

module.exports = nextConfig
