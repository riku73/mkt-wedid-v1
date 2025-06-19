'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import Head from 'next/head';

interface BreadcrumbItem {
  name: string;
  href: string;
  current?: boolean;
}

interface BreadcrumbsProps {
  items?: BreadcrumbItem[];
  customClass?: string;
}

const Breadcrumbs: React.FC<BreadcrumbsProps> = ({ items, customClass = '' }) => {
  const pathname = usePathname();
  
  // Generate breadcrumbs from pathname if items not provided
  const generateBreadcrumbs = (): BreadcrumbItem[] => {
    const pathSegments = pathname.split('/').filter(segment => segment !== '');
    const breadcrumbs: BreadcrumbItem[] = [
      { name: 'Accueil', href: '/' }
    ];

    // Map of path segments to French names
    const pathNameMap: { [key: string]: string } = {
      'services': 'Services',
      'marketing-digital': 'Marketing Digital',
      'creation-sites-web': 'Création de Sites Web',
      'branding-design': 'Branding & Design',
      'consulting-formation': 'Consulting & Formation',
      'seo-sea': 'SEO & SEA',
      'social-media': 'Social Media',
      'content-marketing': 'Content Marketing',
      'sites-vitrine': 'Sites Vitrine',
      'e-commerce': 'E-commerce',
      'applications-web': 'Applications Web',
      'identite-visuelle': 'Identité Visuelle',
      'design-graphique': 'Design Graphique',
      'supports-marketing': 'Supports Marketing',
      'audit-marketing': 'Audit Marketing',
      'strategie-digitale': 'Stratégie Digitale',
      'formation-equipes': 'Formation Équipes',
      'about': 'À Propos',
      'team': 'Équipe',
      'certifications': 'Certifications',
      'contact': 'Contact',
      'devis': 'Demander un Devis',
      'consultation-gratuite': 'Consultation Gratuite',
      'locations': 'Zones d\'Intervention',
      'luxembourg-ville': 'Luxembourg-Ville',
      'esch-sur-alzette': 'Esch-sur-Alzette',
      'kirchberg': 'Kirchberg',
      'differdange': 'Differdange',
      'dudelange': 'Dudelange',
      'bettembourg': 'Bettembourg',
      'petange': 'Pétange',
      'sanem': 'Sanem',
      'portfolio': 'Portfolio',
      'case-studies': 'Études de Cas',
      'resources': 'Ressources',
      'blog': 'Blog',
      'faq': 'FAQ',
      'guides': 'Guides',
      'tools': 'Outils',
      'success': 'Merci'
    };

    let currentPath = '';
    pathSegments.forEach((segment, index) => {
      currentPath += `/${segment}`;
      const name = pathNameMap[segment] || segment.charAt(0).toUpperCase() + segment.slice(1);
      const isLast = index === pathSegments.length - 1;
      
      breadcrumbs.push({
        name,
        href: currentPath,
        current: isLast
      });
    });

    return breadcrumbs;
  };

  const breadcrumbItems = items || generateBreadcrumbs();
  
  // Generate structured data for breadcrumbs
  const breadcrumbSchema = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    "itemListElement": breadcrumbItems.map((item, index) => ({
      "@type": "ListItem",
      "position": index + 1,
      "name": item.name,
      "item": `https://wedid.lu${item.href}`
    }))
  };

  // Don't show breadcrumbs on homepage
  if (pathname === '/') {
    return null;
  }

  return (
    <>
      <Head>
        <script 
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }}
        />
      </Head>
      
      <nav 
        className={`bg-gray-50 border-b border-gray-200 ${customClass}`}
        aria-label="Breadcrumb"
      >
        <div className="max-w-7xl mx-auto px-6 py-4">
          <ol className="flex items-center space-x-2 text-sm">
            {breadcrumbItems.map((item, index) => (
              <li key={item.href} className="flex items-center">
                {index > 0 && (
                  <svg
                    className="h-4 w-4 text-gray-400 mx-2"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M9 5l7 7-7 7"
                    />
                  </svg>
                )}
                
                {item.current ? (
                  <span 
                    className="text-brand font-medium"
                    aria-current="page"
                  >
                    {item.name}
                  </span>
                ) : (
                  <Link
                    href={item.href}
                    className="text-gray-600 hover:text-brand transition-colors duration-200 hover:underline"
                  >
                    {item.name}
                  </Link>
                )}
              </li>
            ))}
          </ol>
        </div>
      </nav>
    </>
  );
};

// Specialized breadcrumb variants for different page types
export const ServiceBreadcrumbs: React.FC<{ serviceName: string; serviceCategory?: string }> = ({ 
  serviceName, 
  serviceCategory 
}) => {
  const items: BreadcrumbItem[] = [
    { name: 'Accueil', href: '/' },
    { name: 'Services', href: '/services' }
  ];

  if (serviceCategory) {
    items.push({
      name: serviceCategory,
      href: `/services/${serviceCategory.toLowerCase().replace(/\s+/g, '-').replace(/&/g, '')}`
    });
  }

  items.push({
    name: serviceName,
    href: '',
    current: true
  });

  return <Breadcrumbs items={items} />;
};

export const LocationBreadcrumbs: React.FC<{ locationName: string }> = ({ locationName }) => {
  const items: BreadcrumbItem[] = [
    { name: 'Accueil', href: '/' },
    { name: 'Zones d\'Intervention', href: '/locations' },
    { name: locationName, href: '', current: true }
  ];

  return <Breadcrumbs items={items} />;
};

export const BlogBreadcrumbs: React.FC<{ articleTitle?: string }> = ({ articleTitle }) => {
  const items: BreadcrumbItem[] = [
    { name: 'Accueil', href: '/' },
    { name: 'Ressources', href: '/resources' },
    { name: 'Blog', href: '/resources/blog' }
  ];

  if (articleTitle) {
    items.push({
      name: articleTitle,
      href: '',
      current: true
    });
  }

  return <Breadcrumbs items={items} />;
};

export const CaseStudyBreadcrumbs: React.FC<{ caseStudyTitle: string }> = ({ caseStudyTitle }) => {
  const items: BreadcrumbItem[] = [
    { name: 'Accueil', href: '/' },
    { name: 'Portfolio', href: '/portfolio' },
    { name: 'Études de Cas', href: '/portfolio/case-studies' },
    { name: caseStudyTitle, href: '', current: true }
  ];

  return <Breadcrumbs items={items} />;
};

export default Breadcrumbs;