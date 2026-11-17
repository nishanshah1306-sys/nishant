import { site } from '../data/site.js'

const abs = (path = '/') => site.url + (path === '/' ? '/' : `${path.replace(/\/$/, '')}/`)
const ORG = `${site.url}/#organization`

export const orgSchema = () => ({
  '@context': 'https://schema.org',
  '@type': 'ProfessionalService',
  '@id': ORG,
  name: site.name,
  description: 'WordPress website development, SEO, paid ads and website maintenance from a senior developer and a digital marketer.',
  url: abs('/'),
  logo: `${site.url}/favicon.svg`,
  image: `${site.url}/og-image.png`,
  email: site.email,
  ...(site.phone && !site.phone.includes('00000') ? { telephone: site.phone } : {}),
  address: { '@type': 'PostalAddress', addressLocality: site.locality, addressRegion: site.region, addressCountry: site.country },
  areaServed: site.areaServed.map((name) => ({ '@type': name === 'India' ? 'Country' : 'City', name })),
  openingHoursSpecification: [{
    '@type': 'OpeningHoursSpecification',
    dayOfWeek: ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'],
    opens: '10:00', closes: '19:00',
  }],
  ...(site.social.length ? { sameAs: site.social } : {}),
})

export const websiteSchema = () => ({
  '@context': 'https://schema.org', '@type': 'WebSite', '@id': `${site.url}/#website`,
  url: abs('/'), name: site.name, publisher: { '@id': ORG }, inLanguage: 'en-IN',
})

export const breadcrumbSchema = (crumbs) => ({
  '@context': 'https://schema.org', '@type': 'BreadcrumbList',
  // The last crumb is the current page and may have no link, which Google accepts.
  itemListElement: [{ label: 'Home', to: '/' }, ...crumbs].map((c, i) => ({
    '@type': 'ListItem', position: i + 1, name: c.label, ...(c.to ? { item: abs(c.to) } : {}),
  })),
})

export const faqSchema = (items) => ({
  '@context': 'https://schema.org', '@type': 'FAQPage',
  mainEntity: items.map(([q, a]) => ({ '@type': 'Question', name: q, acceptedAnswer: { '@type': 'Answer', text: a } })),
})

export const serviceSchema = (s, g) => ({
  '@context': 'https://schema.org', '@type': 'Service',
  name: s.title, description: s.sum, serviceType: g.name, url: abs(`/services/${s.slug}`),
  provider: { '@id': ORG },
  areaServed: site.areaServed.map((name) => ({ '@type': name === 'India' ? 'Country' : 'City', name })),
  hasOfferCatalog: { '@type': 'OfferCatalog', name: `${s.title}: what is included`,
    itemListElement: s.inc.map((x) => ({ '@type': 'Offer', itemOffered: { '@type': 'Service', name: x } })) },
})

export const articleSchema = (a) => ({
  '@context': 'https://schema.org', '@type': 'Article',
  headline: a.title, description: a.desc, url: abs(`/guides/${a.slug}`),
  datePublished: a.date, dateModified: a.updated || a.date,
  author: { '@type': 'Organization', name: site.name, url: abs('/') },
  publisher: { '@id': ORG }, image: `${site.url}/og-image.png`,
  mainEntityOfPage: abs(`/guides/${a.slug}`), inLanguage: 'en-IN',
})

export const itemListSchema = (name, items) => ({
  '@context': 'https://schema.org', '@type': 'ItemList', name,
  itemListElement: items.map((x, i) => ({ '@type': 'ListItem', position: i + 1, name: x.name, url: abs(x.to) })),
})
