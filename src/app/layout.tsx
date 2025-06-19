import type { Metadata } from 'next'
import './globals.css'
import Navigation from '../components/Navigation'
import Footer from '../components/Footer'

export const metadata: Metadata = {
  title: 'Wedid - Agence Marketing Digital de Référence au Luxembourg',
  description: 'Wedid, l\'agence marketing digital de référence au Luxembourg. Services SEO, création de sites web, branding et formation pour entreprises luxembourgeoises. Expertise locale, résultats internationaux.',
  keywords: ['agence marketing digital Luxembourg', 'SEO Luxembourg', 'création site web Luxembourg', 'branding Luxembourg', 'Wedid agence', 'marketing Luxembourg-Ville', 'référencement naturel Luxembourg', 'Grande Région marketing', 'agence SEO Luxembourg', 'marketing digital entreprise Luxembourg'],
  authors: [{ name: 'Wedid Luxembourg' }],
  creator: 'Wedid',
  publisher: 'Wedid',
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
  openGraph: {
    type: 'website',
    locale: 'fr_LU',
    url: 'https://wedid.lu',
    siteName: 'Wedid',
    title: 'Wedid - Agence Marketing Digital de Référence au Luxembourg',
    description: 'Wedid, l\'agence marketing digital de référence au Luxembourg. Services SEO, création de sites web, branding et formation pour entreprises luxembourgeoises.',
    images: [
      {
        url: '/images/wedid-og-image.jpg',
        width: 1200,
        height: 630,
        alt: 'Wedid - Agence Marketing Digital Luxembourg',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Wedid - Agence Marketing Digital Luxembourg',
    description: 'L\'agence marketing digital de référence au Luxembourg. Expertise locale, résultats internationaux.',
    images: ['/images/wedid-og-image.jpg'],
    creator: '@WedidLuxembourg',
  },
  alternates: {
    canonical: 'https://wedid.lu',
    languages: {
      'fr-LU': 'https://wedid.lu',
      'en-LU': 'https://wedid.lu/en',
      'de-LU': 'https://wedid.lu/de',
    },
  },
  other: {
    'geo.region': 'LU',
    'geo.placename': 'Luxembourg',
    'geo.position': '49.6116;6.1319',
    'ICBM': '49.6116, 6.1319',
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  // Organization Schema for global use
  const organizationSchema = {
    "@context": "https://schema.org",
    "@type": "Organization",
    "name": "Wedid",
    "alternateName": "Wedid Agence Marketing Digital",
    "url": "https://wedid.lu",
    "logo": "https://wedid.lu/images/wedid-logo.png",
    "contactPoint": {
      "@type": "ContactPoint",
      "telephone": "+352-123-456-789",
      "contactType": "customer service",
      "areaServed": ["LU", "BE", "FR", "DE"],
      "availableLanguage": ["French", "English", "German"]
    },
    "address": {
      "@type": "PostalAddress",
      "streetAddress": "1 Place Guillaume II",
      "addressLocality": "Luxembourg",
      "postalCode": "1648",
      "addressCountry": "LU"
    },
    "sameAs": [
      "https://www.linkedin.com/company/wedid-luxembourg",
      "https://www.facebook.com/wedidluxembourg",
      "https://www.instagram.com/wedidluxembourg"
    ],
    "founder": {
      "@type": "Person",
      "name": "Équipe Wedid"
    },
    "foundingDate": "2018",
    "description": "Wedid, l'agence marketing digital de référence au Luxembourg. Services SEO, création de sites web, branding et formation pour entreprises luxembourgeoises.",
    "knowsAbout": [
      "Marketing Digital",
      "SEO",
      "Création de Sites Web", 
      "Branding",
      "Formation Marketing",
      "Luxembourg Business"
    ],
    "serviceArea": {
      "@type": "GeoCircle",
      "geoMidpoint": {
        "@type": "GeoCoordinates",
        "latitude": 49.6116,
        "longitude": 6.1319
      },
      "geoRadius": 50000
    }
  };

  // Website Schema
  const websiteSchema = {
    "@context": "https://schema.org",
    "@type": "WebSite",
    "name": "Wedid",
    "url": "https://wedid.lu",
    "description": "Wedid, l'agence marketing digital de référence au Luxembourg",
    "publisher": {
      "@id": "https://wedid.lu#organization"
    },
    "potentialAction": {
      "@type": "SearchAction",
      "target": "https://wedid.lu/search?q={search_term_string}",
      "query-input": "required name=search_term_string"
    }
  };

  return (
    <html lang="fr">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link href="https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700&display=swap" rel="stylesheet" />
        
        {/* Structured Data */}
        <script 
          type="application/ld+json"
          dangerouslySetInnerHTML={{ 
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@graph": [organizationSchema, websiteSchema]
            })
          }}
        />
        
        {/* Additional Meta Tags */}
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta name="theme-color" content="#d1f383" />
        <link rel="icon" href="/favicon.ico" />
      </head>
      <body>
        <Navigation />
        <main>
          {children}
        </main>
        <Footer />
      </body>
    </html>
  )
}