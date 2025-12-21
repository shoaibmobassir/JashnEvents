export default function StructuredData() {
  const organizationSchema = {
    '@context': 'https://schema.org',
    '@type': 'LocalBusiness',
    '@id': 'https://www.jashnevents.net/#organization',
    name: 'JASHN Events & Hospitality Pvt. Ltd.',
    alternateName: 'JASHN Events',
    url: 'https://www.jashnevents.net',
    logo: 'https://www.jashnevents.net/logo.png',
    image: 'https://www.jashnevents.net/logo.png',
    description: 'JASHN Events & Hospitality is a professionally managed event management and hospitality company delivering structured, reliable, and elegant event solutions for clients across Bihar. We specialize in corporate events, weddings, government events, institutional events, and hospitality services.',
    address: {
      '@type': 'PostalAddress',
      streetAddress: 'Doodh Katora Colony',
      addressLocality: 'Arrah',
      addressRegion: 'Bihar',
      postalCode: '802301',
      addressCountry: 'IN',
    },
    geo: {
      '@type': 'GeoCoordinates',
      latitude: '25.5627655',
      longitude: '84.6812538',
    },
    telephone: '+91-7320877403',
    email: 'jashneventsinfo@gmail.com',
    priceRange: '$$',
    areaServed: [
      {
        '@type': 'City',
        name: 'Ara',
      },
      {
        '@type': 'City',
        name: 'Bhojpur',
      },
      {
        '@type': 'City',
        name: 'Patna',
      },
      {
        '@type': 'State',
        name: 'Bihar',
      },
    ],
    hasOfferCatalog: {
      '@type': 'OfferCatalog',
      name: 'Event Management Services',
      itemListElement: [
        {
          '@type': 'Offer',
          itemOffered: {
            '@type': 'Service',
            name: 'Corporate & Business Events',
            description: 'Conferences, seminars, annual meets, product launches, dealer meets, and corporate gatherings',
          },
        },
        {
          '@type': 'Offer',
          itemOffered: {
            '@type': 'Service',
            name: 'Government & Public Events',
            description: 'Official ceremonies, inaugurations, exhibitions, awareness programs, and institutional events',
          },
        },
        {
          '@type': 'Offer',
          itemOffered: {
            '@type': 'Service',
            name: 'Weddings & Social Events',
            description: 'Complete planning and coordination for weddings, engagements, receptions, and private family celebrations',
          },
        },
        {
          '@type': 'Offer',
          itemOffered: {
            '@type': 'Service',
            name: 'Educational & Institutional Events',
            description: 'School and college functions, convocations, workshops, academic seminars, and formal gatherings',
          },
        },
        {
          '@type': 'Offer',
          itemOffered: {
            '@type': 'Service',
            name: 'Hospitality & Logistics',
            description: 'Guest accommodation, travel arrangements, VIP handling, catering coordination, transport, and manpower management',
          },
        },
      ],
    },
    sameAs: [
      'https://www.facebook.com/people/Jashn-Events/61585186093901/',
      'https://www.instagram.com/jashn_events_/',
      'https://www.linkedin.com/company/jashn-events',
      'https://x.com/Jashn_Events_',
    ],
  }

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(organizationSchema) }}
    />
  )
}

