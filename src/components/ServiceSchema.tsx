'use client';

import Head from 'next/head';

interface ServiceSchemaProps {
  serviceName: string;
  description: string;
  serviceType: string;
  url: string;
  priceRange?: string;
  features?: string[];
  duration?: string;
  area?: string[];
}

const ServiceSchema: React.FC<ServiceSchemaProps> = ({
  serviceName,
  description,
  serviceType,
  url,
  priceRange = "€€€",
  features = [],
  duration,
  area = ["Luxembourg", "Esch-sur-Alzette", "Kirchberg", "Grande Région"]
}) => {
  
  const serviceSchema = {
    "@context": "https://schema.org",
    "@type": "Service",
    "name": serviceName,
    "description": description,
    "serviceType": serviceType,
    "provider": {
      "@type": "Organization",
      "@id": "https://wedid.lu#organization",
      "name": "Wedid",
      "url": "https://wedid.lu",
      "logo": "https://wedid.lu/images/wedid-logo.png",
      "address": {
        "@type": "PostalAddress",
        "streetAddress": "1 Place Guillaume II",
        "addressLocality": "Luxembourg",
        "postalCode": "1648",
        "addressCountry": "LU"
      },
      "contactPoint": {
        "@type": "ContactPoint",
        "telephone": "+352-123-456-789",
        "contactType": "customer service",
        "areaServed": area,
        "availableLanguage": ["French", "English", "German"]
      }
    },
    "url": url,
    "offers": {
      "@type": "Offer",
      "priceRange": priceRange,
      "priceCurrency": "EUR",
      "availability": "https://schema.org/InStock",
      "validFrom": new Date().toISOString().split('T')[0],
      "areaServed": area.map(location => ({
        "@type": "City",
        "name": location,
        "containedInPlace": {
          "@type": "Country",
          "name": "Luxembourg"
        }
      }))
    },
    "areaServed": area.map(location => ({
      "@type": "City", 
      "name": location,
      "containedInPlace": {
        "@type": "Country",
        "name": "Luxembourg"
      }
    })),
    "hasOfferCatalog": {
      "@type": "OfferCatalog",
      "name": `${serviceName} - Catalogue Services`,
      "itemListElement": features.map((feature, index) => ({
        "@type": "Offer",
        "itemOffered": {
          "@type": "Service",
          "name": feature
        },
        "position": index + 1
      }))
    }
  };

  // Add duration if provided
  if (duration) {
    serviceSchema["estimatedDuration"] = duration;
  }

  return (
    <Head>
      <script 
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(serviceSchema) }}
      />
    </Head>
  );
};

export default ServiceSchema;