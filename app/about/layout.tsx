import { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'About Us - JASHN Events & Hospitality | Event Management Company in Ara, Patna',
  description: 'Learn about JASHN Events & Hospitality - a professionally managed event management company in Ara, Bhojpur, and Patna, Bihar. Built on principles of planning excellence, transparent operations, and dependable execution.',
  keywords: ['about JASHN Events', 'event management company Ara', 'event planners Patna', 'about event management Bihar'],
  openGraph: {
    title: 'About JASHN Events & Hospitality | Event Management Company',
    description: 'Learn about JASHN Events & Hospitality - professional event management in Ara, Bhojpur, and Patna, Bihar.',
    url: 'https://www.jashnevents.net/about',
  },
  alternates: {
    canonical: 'https://www.jashnevents.net/about',
  },
}

export default function AboutLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return <>{children}</>
}

