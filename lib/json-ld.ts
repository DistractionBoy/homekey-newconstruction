const ORG_NAME = 'HomeKey Inspections'
const ORG_URL = 'https://homekeyinspections.com'
const ORG_PHONE = '+15712813846'
const ORG_EMAIL = 'info@homekeyinspections.com'
const ORG_LOGO = `${ORG_URL}/Main-logo-Registered.jpg`

const ADDRESS = {
  '@type': 'PostalAddress',
  streetAddress: '21430 Cedar Drive Suite 120',
  addressLocality: 'Sterling',
  addressRegion: 'VA',
  postalCode: '20164',
  addressCountry: 'US',
}

const GEO = {
  '@type': 'GeoCoordinates',
  latitude: 39.0037,
  longitude: -77.4088,
}

export function localBusinessSchema() {
  return {
    '@context': 'https://schema.org',
    '@type': 'HomeAndConstructionBusiness',
    name: ORG_NAME,
    url: ORG_URL,
    logo: ORG_LOGO,
    image: `${ORG_URL}/images/unfinished-home-dusk.jpg`,
    telephone: ORG_PHONE,
    email: ORG_EMAIL,
    address: ADDRESS,
    geo: GEO,
    priceRange: '$$',
    openingHoursSpecification: [
      {
        '@type': 'OpeningHoursSpecification',
        dayOfWeek: ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'],
        opens: '08:00',
        closes: '19:00',
      },
    ],
    areaServed: [
      { '@type': 'State', name: 'Virginia' },
      { '@type': 'State', name: 'Maryland' },
      { '@type': 'City', name: 'Washington DC' },
      { '@type': 'State', name: 'Texas' },
    ],
    aggregateRating: {
      '@type': 'AggregateRating',
      ratingValue: '4.9',
      reviewCount: '500',
      bestRating: '5',
    },
    sameAs: [
      'https://www.facebook.com/homekeyinspections',
      'https://www.instagram.com/homekeyinspections',
    ],
  }
}

export function serviceSchema({
  name,
  description,
  url,
}: {
  name: string
  description: string
  url: string
}) {
  return {
    '@context': 'https://schema.org',
    '@type': 'Service',
    name,
    description,
    url: `${ORG_URL}${url}`,
    provider: {
      '@type': 'LocalBusiness',
      name: ORG_NAME,
      url: ORG_URL,
      telephone: ORG_PHONE,
      address: ADDRESS,
    },
    areaServed: {
      '@type': 'State',
      name: 'Virginia',
    },
  }
}

export function faqSchema(faqs: { question: string; answer: string }[]) {
  return {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: faqs.map((faq) => ({
      '@type': 'Question',
      name: faq.question,
      acceptedAnswer: {
        '@type': 'Answer',
        text: faq.answer,
      },
    })),
  }
}

export function personSchema({
  name,
  jobTitle,
  description,
  image,
  url,
  sameAs,
}: {
  name: string
  jobTitle: string
  description?: string
  image: string
  url: string
  sameAs?: string[]
}) {
  return {
    '@context': 'https://schema.org',
    '@type': 'Person',
    name,
    jobTitle,
    description,
    image: `${ORG_URL}${image}`,
    url: `${ORG_URL}${url}`,
    worksFor: {
      '@type': 'Organization',
      name: ORG_NAME,
      url: ORG_URL,
    },
    ...(sameAs ? { sameAs } : {}),
  }
}
