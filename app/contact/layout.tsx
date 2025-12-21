import { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Contact Us - JASHN Events & Hospitality | Event Planning in Ara, Patna',
  description: 'Contact JASHN Events & Hospitality for professional event management services in Ara, Bhojpur, and Patna, Bihar. Phone: +91 7544827491 | Email: jashneventsinfo@gmail.com',
  keywords: ['contact JASHN Events', 'event management contact', 'event planners Ara', 'event management Patna phone number'],
  openGraph: {
    title: 'Contact JASHN Events & Hospitality | Event Management Company',
    description: 'Get in touch with JASHN Events for professional event planning and management services in Ara, Patna, Bihar.',
    url: 'https://www.jashnevents.net/contact',
  },
  alternates: {
    canonical: 'https://www.jashnevents.net/contact',
  },
}

export default function ContactLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return <>{children}</>
}

