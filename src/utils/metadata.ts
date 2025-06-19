import { Metadata } from 'next';

interface ServiceMetadataParams {
  title: string;
  description: string;
  keywords?: string[];
  serviceName: string;
  serviceCategory?: string;
  location?: string;
  url: string;
  ogImage?: string;
}

interface LocationMetadataParams {
  locationName: string;
  description: string;
  url: string;
  keywords?: string[];
  ogImage?: string;
}

interface BlogMetadataParams {
  title: string;
  description: string;
  url: string;
  keywords?: string[];
  author?: string;
  publishedTime?: string;
  modifiedTime?: string;
  ogImage?: string;
}

// Base Luxembourg keywords for all pages
const baseKeywords = [
  'agence marketing digital Luxembourg',
  'marketing digital Luxembourg',
  'SEO Luxembourg',
  'Wedid agence',
  'Luxembourg marketing',
  'Grande Région marketing'
];

// Generate service page metadata
export function generateServiceMetadata({
  title,
  description,
  keywords = [],
  serviceName,
  serviceCategory,
  location = 'Luxembourg',
  url,
  ogImage
}: ServiceMetadataParams): Metadata {
  
  const seoTitle = `${title} ${location} | Wedid - Agence Marketing Digital`;
  const seoDescription = `${description} Expertise ${serviceName.toLowerCase()} au ${location} avec Wedid, agence marketing digital de référence.`;
  
  const serviceKeywords = [
    ...baseKeywords,
    `${serviceName.toLowerCase()} ${location}`,
    `agence ${serviceName.toLowerCase()} ${location}`,
    `services ${serviceName.toLowerCase()}`,
    ...keywords
  ];

  return {
    title: seoTitle,
    description: seoDescription,
    keywords: serviceKeywords,
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
      url: `https://wedid.lu${url}`,
      siteName: 'Wedid',
      title: seoTitle,
      description: seoDescription,
      images: [
        {
          url: ogImage || `/images/services/${serviceName.toLowerCase().replace(/\s+/g, '-')}-og.jpg`,
          width: 1200,
          height: 630,
          alt: `${serviceName} ${location} - Wedid`,
        },
      ],
    },
    twitter: {
      card: 'summary_large_image',
      title: seoTitle,
      description: seoDescription,
      images: [ogImage || `/images/services/${serviceName.toLowerCase().replace(/\s+/g, '-')}-og.jpg`],
      creator: '@WedidLuxembourg',
    },
    alternates: {
      canonical: `https://wedid.lu${url}`,
      languages: {
        'fr-LU': `https://wedid.lu${url}`,
        'en-LU': `https://wedid.lu/en${url}`,
        'de-LU': `https://wedid.lu/de${url}`,
      },
    },
    other: {
      'geo.region': 'LU',
      'geo.placename': location,
      'geo.position': '49.6116;6.1319',
      'ICBM': '49.6116, 6.1319',
    },
  };
}

// Generate location page metadata
export function generateLocationMetadata({
  locationName,
  description,
  url,
  keywords = [],
  ogImage
}: LocationMetadataParams): Metadata {
  
  const seoTitle = `Marketing Digital ${locationName} | Services SEO & Création Web | Wedid`;
  const seoDescription = `${description} Agence marketing digital à ${locationName}. Services SEO, création de sites web et branding pour entreprises de ${locationName}.`;
  
  const locationKeywords = [
    ...baseKeywords,
    `marketing digital ${locationName}`,
    `agence marketing ${locationName}`,
    `SEO ${locationName}`,
    `création site web ${locationName}`,
    `référencement ${locationName}`,
    `branding ${locationName}`,
    ...keywords
  ];

  return {
    title: seoTitle,
    description: seoDescription,
    keywords: locationKeywords,
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
      url: `https://wedid.lu${url}`,
      siteName: 'Wedid',
      title: seoTitle,
      description: seoDescription,
      images: [
        {
          url: ogImage || `/images/locations/${locationName.toLowerCase().replace(/\s+/g, '-')}-og.jpg`,
          width: 1200,
          height: 630,
          alt: `Marketing Digital ${locationName} - Wedid`,
        },
      ],
    },
    twitter: {
      card: 'summary_large_image',
      title: seoTitle,
      description: seoDescription,
      images: [ogImage || `/images/locations/${locationName.toLowerCase().replace(/\s+/g, '-')}-og.jpg`],
      creator: '@WedidLuxembourg',
    },
    alternates: {
      canonical: `https://wedid.lu${url}`,
    },
    other: {
      'geo.region': 'LU',
      'geo.placename': locationName,
    },
  };
}

// Generate blog article metadata
export function generateBlogMetadata({
  title,
  description,
  url,
  keywords = [],
  author = 'Équipe Wedid',
  publishedTime,
  modifiedTime,
  ogImage
}: BlogMetadataParams): Metadata {
  
  const seoTitle = `${title} | Blog Marketing Digital Luxembourg | Wedid`;
  const seoDescription = `${description} Conseils et stratégies marketing digital pour entreprises luxembourgeoises par Wedid.`;
  
  const blogKeywords = [
    ...baseKeywords,
    'blog marketing digital',
    'conseils marketing Luxembourg',
    'stratégies digitales Luxembourg',
    ...keywords
  ];

  return {
    title: seoTitle,
    description: seoDescription,
    keywords: blogKeywords,
    authors: [{ name: author }],
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
      type: 'article',
      locale: 'fr_LU',
      url: `https://wedid.lu${url}`,
      siteName: 'Wedid',
      title: seoTitle,
      description: seoDescription,
      images: [
        {
          url: ogImage || `/images/blog/${url.split('/').pop()}-og.jpg`,
          width: 1200,
          height: 630,
          alt: title,
        },
      ],
      ...(publishedTime && { publishedTime }),
      ...(modifiedTime && { modifiedTime }),
      authors: [author],
      section: 'Marketing Digital',
      tags: keywords,
    },
    twitter: {
      card: 'summary_large_image',
      title: seoTitle,
      description: seoDescription,
      images: [ogImage || `/images/blog/${url.split('/').pop()}-og.jpg`],
      creator: '@WedidLuxembourg',
    },
    alternates: {
      canonical: `https://wedid.lu${url}`,
    },
    other: {
      'geo.region': 'LU',
      'geo.placename': 'Luxembourg',
    },
  };
}

// Generate FAQ metadata
export function generateFAQMetadata(): Metadata {
  return {
    title: 'FAQ - Questions Fréquentes Marketing Digital Luxembourg | Wedid',
    description: 'Trouvez les réponses à vos questions sur le marketing digital au Luxembourg. Tarifs, services SEO, délais, spécificités du marché luxembourgeois et plus.',
    keywords: [
      ...baseKeywords,
      'FAQ marketing digital Luxembourg',
      'questions agence marketing Luxembourg',
      'tarifs SEO Luxembourg',
      'services marketing digital Luxembourg',
      'Wedid FAQ'
    ],
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
      url: 'https://wedid.lu/resources/faq',
      siteName: 'Wedid',
      title: 'FAQ - Questions Fréquentes Marketing Digital Luxembourg | Wedid',
      description: 'Trouvez les réponses à vos questions sur le marketing digital au Luxembourg. Tarifs, services SEO, délais et spécificités du marché luxembourgeois.',
      images: [
        {
          url: '/images/faq-og-image.jpg',
          width: 1200,
          height: 630,
          alt: 'FAQ Marketing Digital Luxembourg - Wedid',
        },
      ],
    },
    twitter: {
      card: 'summary_large_image',
      title: 'FAQ Marketing Digital Luxembourg | Wedid',
      description: 'Questions fréquentes sur le marketing digital au Luxembourg. Trouvez rapidement vos réponses.',
      images: ['/images/faq-og-image.jpg'],
      creator: '@WedidLuxembourg',
    },
    alternates: {
      canonical: 'https://wedid.lu/resources/faq',
    },
    other: {
      'geo.region': 'LU',
      'geo.placename': 'Luxembourg',
    },
  };
}