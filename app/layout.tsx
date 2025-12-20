import type { Metadata } from 'next'
import { Playfair_Display, Poppins } from 'next/font/google'
import './globals.css'
import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'
import WhatsAppButton from '@/components/WhatsAppButton'

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
  title: 'JASHN Events & Hospitality | Premium Event Management',
  description: 'JASHN Events & Hospitality - Crafting thoughtful and timeless events in Ara, Bhojpur, and Patna. Corporate events, weddings, government events, and hospitality services.',
  icons: {
    icon: [
      { url: '/favicon.ico', sizes: 'any' },
      { url: '/logo.png', type: 'image/png' },
      { url: '/logo-192.png', type: 'image/png', sizes: '192x192' },
      { url: '/logo-32.png', type: 'image/png', sizes: '32x32' },
    ],
    apple: [
      { url: '/logo-180.png', sizes: '180x180', type: 'image/png' },
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
        <link rel="icon" href="/logo.png" type="image/png" sizes="512x512" />
        <link rel="apple-touch-icon" href="/logo-180.png" />
      </head>
      <body className="font-body bg-ivory text-charcoal antialiased">
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
