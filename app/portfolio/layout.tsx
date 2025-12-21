import { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Our Portfolio - Event Management Gallery | JASHN Events & Hospitality',
  description: 'View JASHN Events portfolio showcasing our successful corporate events, weddings, government ceremonies, institutional events, and hospitality services in Ara, Patna, Bihar.',
  keywords: ['JASHN Events portfolio', 'event management gallery', 'corporate events Ara', 'wedding events Patna', 'event photos Bihar'],
  openGraph: {
    title: 'Event Management Portfolio | JASHN Events & Hospitality',
    description: 'View our portfolio of successful events including corporate gatherings, weddings, government ceremonies, and institutional events.',
    url: 'https://www.jashnevents.net/portfolio',
  },
  alternates: {
    canonical: 'https://www.jashnevents.net/portfolio',
  },
}

export default function PortfolioLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return <>{children}</>
}

