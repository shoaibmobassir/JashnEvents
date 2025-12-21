import { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Our Services - Corporate Events, Weddings, Government Events | JASHN Events',
  description: 'JASHN Events offers comprehensive event management services: Corporate & Business Events, Government & Public Events, Weddings & Social Events, Educational & Institutional Events, and Hospitality & Logistics in Ara, Patna, Bihar.',
  keywords: ['event management services', 'corporate event planning', 'wedding planning Ara', 'government event management', 'institutional events', 'hospitality services Bihar'],
  openGraph: {
    title: 'Event Management Services | JASHN Events & Hospitality',
    description: 'Comprehensive event management services including corporate events, weddings, government ceremonies, institutional events, and hospitality services in Ara, Patna, Bihar.',
    url: 'https://www.jashnevents.net/services',
  },
  alternates: {
    canonical: 'https://www.jashnevents.net/services',
  },
}

export default function ServicesLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return <>{children}</>
}

