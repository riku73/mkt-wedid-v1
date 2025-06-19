'use client';

import Head from 'next/head';
import { usePathname } from 'next/navigation';

interface SEOProps {
  title?: string;
  description?: string;
  keywords?: string[];
  image?: string;
  type?: 'website' | 'article' | 'service' | 'organization';
  author?: string;
  publishedTime?: string;
  modifiedTime?: string;
  canonicalUrl?: string;
  noindex?: boolean;
  nofollow?: boolean;
  schema?: object;
  hreflang?: { [key: string]: string };
}

const SEO: React.FC<SEOProps> = ({
  title,
  description,
  keywords = [],
  image,
  type = 'website',
  author,
  publishedTime,
  modifiedTime,
  canonicalUrl,
  noindex = false,
  nofollow = false,
  schema,
  hreflang = {}
}) => {
  const pathname = usePathname();
  const siteUrl = process.env.NEXT_PUBLIC_SITE_URL || 'https://wedid.lu';
  
  // Default values for Luxembourg-focused SEO
  const defaultKeywords = [
    'agence marketing digital Luxembourg',
    'marketing digital Luxembourg',
    'SEO Luxembourg',
    'création site web Luxembourg',
    'branding Luxembourg',
    'Wedid agence',
    'marketing Luxembourg-Ville',
    'référencement naturel Luxembourg',
    'Grande Région marketing',
    'agence SEO Luxembourg'
  ];

  const seoTitle = title 
    ? `${title} | Wedid - Agence Marketing Digital Luxembourg`
    : 'Wedid - Agence Marketing Digital de Référence au Luxembourg';

  const seoDescription = description || 
    'Wedid, l\'agence marketing digital de référence au Luxembourg. Expertise locale, résultats internationaux. SEO, création de sites web, branding et plus.';

  const seoKeywords = [...defaultKeywords, ...keywords].join(', ');
  
  const seoImage = image || `${siteUrl}/images/wedid-og-default.jpg`;
  const fullCanonicalUrl = canonicalUrl || `${siteUrl}${pathname}`;

  const robotsContent = [
    noindex ? 'noindex' : 'index',
    nofollow ? 'nofollow' : 'follow'
  ].join(', ');

  // Organization Schema for Wedid
  const organizationSchema = {
    "@context": "https://schema.org",
    "@type": "Organization",
    "name": "Wedid",
    "alternateName": "Wedid Agence Marketing Digital",
    "url": siteUrl,
    "logo": `${siteUrl}/images/wedid-logo.png`,
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
    "description": seoDescription,
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

  // Local Business Schema (for Luxembourg presence)
  const localBusinessSchema = {
    "@context": "https://schema.org",
    "@type": "LocalBusiness",
    "name": "Wedid",
    "image": seoImage,
    "@id": siteUrl,
    "url": siteUrl,
    "telephone": "+352-123-456-789",
    "address": {
      "@type": "PostalAddress",
      "streetAddress": "1 Place Guillaume II",
      "addressLocality": "Luxembourg",
      "postalCode": "1648",
      "addressCountry": "LU"
    },
    "geo": {
      "@type": "GeoCoordinates",
      "latitude": 49.6116,
      "longitude": 6.1319
    },
    "openingHoursSpecification": {
      "@type": "OpeningHoursSpecification",
      "dayOfWeek": [
        "Monday",
        "Tuesday", 
        "Wednesday",
        "Thursday",
        "Friday"
      ],
      "opens": "09:00",
      "closes": "18:00"
    },
    "priceRange": "€€€",
    "aggregateRating": {
      "@type": "AggregateRating",
      "ratingValue": "4.9",
      "reviewCount": "127"
    }
  };

  // Combine schemas
  const combinedSchema = {
    "@context": "https://schema.org",
    "@graph": [
      organizationSchema,
      localBusinessSchema,
      ...(schema ? [schema] : [])
    ]
  };

  return (
    <Head>
      {/* Basic Meta Tags */}
      <title>{seoTitle}</title>
      <meta name="description" content={seoDescription} />
      <meta name="keywords" content={seoKeywords} />
      <meta name="author" content={author || "Wedid Luxembourg"} />
      <meta name="robots" content={robotsContent} />
      
      {/* Canonical URL */}
      <link rel="canonical" href={fullCanonicalUrl} />
      
      {/* Hreflang */}
      {Object.entries(hreflang).map(([lang, url]) => (
        <link key={lang} rel="alternate" hrefLang={lang} href={url} />
      ))}
      
      {/* Open Graph / Facebook */}
      <meta property="og:type" content={type} />
      <meta property="og:url" content={fullCanonicalUrl} />
      <meta property="og:title" content={seoTitle} />
      <meta property="og:description" content={seoDescription} />
      <meta property="og:image" content={seoImage} />
      <meta property="og:image:alt" content={`${title || 'Wedid'} - Agence Marketing Digital Luxembourg`} />
      <meta property="og:site_name" content="Wedid" />
      <meta property="og:locale" content="fr_LU" />
      <meta property="og:locale:alternate" content="en_LU" />
      <meta property="og:locale:alternate" content="de_LU" />
      
      {/* Article specific Open Graph */}
      {type === 'article' && (
        <>
          {author && <meta property="article:author" content={author} />}
          {publishedTime && <meta property="article:published_time" content={publishedTime} />}
          {modifiedTime && <meta property="article:modified_time" content={modifiedTime} />}
          <meta property="article:section" content="Marketing Digital" />
          {keywords.map(tag => (
            <meta key={tag} property="article:tag" content={tag} />
          ))}
        </>
      )}
      
      {/* Twitter Card */}
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:url" content={fullCanonicalUrl} />
      <meta name="twitter:title" content={seoTitle} />
      <meta name="twitter:description" content={seoDescription} />
      <meta name="twitter:image" content={seoImage} />
      <meta name="twitter:image:alt" content={`${title || 'Wedid'} - Agence Marketing Digital Luxembourg`} />
      <meta name="twitter:creator" content="@WedidLuxembourg" />
      <meta name="twitter:site" content="@WedidLuxembourg" />
      
      {/* Favicon and Touch Icons */}
      <link rel="icon" type="image/x-icon" href="/favicon.ico" />
      <link rel="apple-touch-icon" sizes="180x180" href="/apple-touch-icon.png" />
      <link rel="icon" type="image/png" sizes="32x32" href="/favicon-32x32.png" />
      <link rel="icon" type="image/png" sizes="16x16" href="/favicon-16x16.png" />
      <link rel="manifest" href="/site.webmanifest" />
      
      {/* Luxembourg specific meta */}
      <meta name="geo.region" content="LU" />
      <meta name="geo.placename" content="Luxembourg" />
      <meta name="geo.position" content="49.6116;6.1319" />
      <meta name="ICBM" content="49.6116, 6.1319" />
      
      {/* Business Hours and Contact */}
      <meta name="business:contact_data:street_address" content="1 Place Guillaume II" />
      <meta name="business:contact_data:locality" content="Luxembourg" />
      <meta name="business:contact_data:postal_code" content="1648" />
      <meta name="business:contact_data:country_name" content="Luxembourg" />
      <meta name="business:contact_data:phone_number" content="+352-123-456-789" />
      
      {/* Structured Data - JSON-LD */}
      <script 
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(combinedSchema) }}
      />
    </Head>
  );
};

export default SEO;