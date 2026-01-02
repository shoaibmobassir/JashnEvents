import type { Metadata } from 'next'
import { Playfair_Display, Poppins } from 'next/font/google'
import './globals.css'
import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'
import WhatsAppButton from '@/components/WhatsAppButton'
import StructuredData from '@/components/StructuredData'

const playfair = Playfair_Display({ 
  subsets: ['latin'],
  variable: '--font-heading',
  display: 'swap',
})

const poppins = Poppins({ 
  subsets: ['latin'],
  weight: ['300', '400', '500', '600'],
  variable: '--font-body',
  display: 'swap',
})

export const metadata: Metadata = {
  metadataBase: new URL('https://www.jashnevents.net'),
  title: {
    default: 'JASHN Events & Hospitality | Premium Event Management in Ara, Patna, Bihar',
    template: '%s | JASHN Events & Hospitality',
  },
  description: 'JASHN Events & Hospitality - Leading event management company in Ara, Bhojpur, and Patna, Bihar. Professional corporate events, weddings, government ceremonies, institutional events, and hospitality services. Thoughtfully planned, beautifully executed.',
  keywords: [
    'event management',
    'event planning',
    'corporate events',
    'wedding planning',
    'event management Ara',
    'event management Patna',
    'event management Bihar',
    'hospitality services',
    'government events',
    'institutional events',
    'event coordination',
    'JASHN Events',
    'event management company Bihar',
    'corporate event planning',
    'wedding planners Ara',
    'event organizers Patna',
  ],
  authors: [{ name: 'JASHN Events & Hospitality' }],
  creator: 'JASHN Events & Hospitality Pvt. Ltd.',
  publisher: 'JASHN Events & Hospitality Pvt. Ltd.',
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  openGraph: {
    type: 'website',
    locale: 'en_IN',
    url: 'https://www.jashnevents.net',
    siteName: 'JASHN Events & Hospitality',
    title: 'JASHN Events & Hospitality | Premium Event Management in Ara, Patna, Bihar',
    description: 'Leading event management company in Ara, Bhojpur, and Patna, Bihar. Professional corporate events, weddings, government ceremonies, and hospitality services.',
    images: [
      {
        url: '/logo.png',
        width: 1200,
        height: 630,
        alt: 'JASHN Events & Hospitality Logo',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'JASHN Events & Hospitality | Premium Event Management',
    description: 'Leading event management company in Ara, Bhojpur, and Patna, Bihar. Professional event planning and hospitality services.',
    images: ['/logo.png'],
    creator: '@Jashn_Events_',
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  verification: {
    // Add Google Search Console verification code here when available
    // google: 'your-verification-code',
  },
  alternates: {
    canonical: 'https://www.jashnevents.net',
  },
  icons: {
    icon: [
      { url: '/favicon.ico', sizes: 'any' },
      { url: '/favicon.svg', type: 'image/svg+xml' },
      { url: '/favicon-32.png', type: 'image/png', sizes: '32x32' },
      { url: '/favicon-192.png', type: 'image/png', sizes: '192x192' },
      { url: '/logo.png', type: 'image/png', sizes: '512x512' },
    ],
    apple: [
      { url: '/favicon-180.png', sizes: '180x180', type: 'image/png' },
    ],
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className={`${playfair.variable} ${poppins.variable}`}>
      <head>
        <meta name="viewport" content="width=device-width, initial-scale=1.0, maximum-scale=5.0, user-scalable=yes" />
        <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.5.1/css/all.min.css" />
        <link rel="icon" href="/favicon.ico" sizes="any" />
        <link rel="icon" href="/favicon.svg" type="image/svg+xml" />
        <link rel="icon" href="/favicon-32.png" type="image/png" sizes="32x32" />
        <link rel="icon" href="/favicon-192.png" type="image/png" sizes="192x192" />
        <link rel="apple-touch-icon" href="/favicon-180.png" />
      </head>
      <body className="font-body bg-ivory text-charcoal antialiased">
        <StructuredData />
        <Navbar />
        <main className="min-h-screen">
          {children}
        </main>
        <Footer />
        <WhatsAppButton />
      </body>
    </html>
  )
}
