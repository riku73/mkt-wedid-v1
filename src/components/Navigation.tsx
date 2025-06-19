'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import { motion, AnimatePresence, Variants } from 'framer-motion';

// Navigation data structure
const navigationData = {
  services: {
    title: 'Services',
    href: '/services',
    submenu: [
      {
        title: 'Marketing Digital',
        href: '/services/marketing-digital',
        description: 'SEO, SEA, Social Media & Content Marketing',
        submenu: [
          { title: 'SEO & SEA', href: '/services/marketing-digital/seo-sea' },
          { title: 'Social Media', href: '/services/marketing-digital/social-media' },
          { title: 'Content Marketing', href: '/services/marketing-digital/content-marketing' },
        ]
      },
      {
        title: 'Création de Sites Web',
        href: '/services/creation-sites-web',
        description: 'Sites vitrine, e-commerce & applications',
        submenu: [
          { title: 'Sites Vitrine', href: '/services/creation-sites-web/sites-vitrine' },
          { title: 'E-commerce', href: '/services/creation-sites-web/e-commerce' },
          { title: 'Applications Web', href: '/services/creation-sites-web/applications-web' },
        ]
      },
      {
        title: 'Branding & Design',
        href: '/services/branding-design',
        description: 'Identité visuelle & supports marketing',
        submenu: [
          { title: 'Identité Visuelle', href: '/services/branding-design/identite-visuelle' },
          { title: 'Design Graphique', href: '/services/branding-design/design-graphique' },
          { title: 'Supports Marketing', href: '/services/branding-design/supports-marketing' },
        ]
      },
      {
        title: 'Consulting & Formation',
        href: '/services/consulting-formation',
        description: 'Audit, stratégie & formation équipes',
        submenu: [
          { title: 'Audit Marketing', href: '/services/consulting-formation/audit-marketing' },
          { title: 'Stratégie Digitale', href: '/services/consulting-formation/strategie-digitale' },
          { title: 'Formation Équipes', href: '/services/consulting-formation/formation-equipes' },
        ]
      },
    ]
  },
  about: {
    title: 'À Propos',
    href: '/about',
    submenu: [
      {
        title: 'Notre Histoire',
        href: '/about',
        description: 'Mission, vision et valeurs de Wedid'
      },
      {
        title: 'Notre Équipe',
        href: '/about/team',
        description: 'Les experts qui donnent vie à vos projets'
      },
      {
        title: 'Certifications',
        href: '/about/certifications',
        description: 'Nos accréditations et partenariats'
      }
    ]
  },
  resources: {
    title: 'Ressources',
    href: '/resources',
    submenu: [
      {
        title: 'Blog Marketing',
        href: '/resources/blog',
        description: 'Articles et insights Luxembourg'
      },
      {
        title: 'Guides & Whitepapers',
        href: '/resources/guides',
        description: 'Ressources téléchargeables gratuites'
      },
      {
        title: 'Outils Gratuits',
        href: '/resources/tools',
        description: 'Calculateurs et audits'
      },
      {
        title: 'FAQ',
        href: '/resources/faq',
        description: 'Questions fréquentes'
      }
    ]
  },
  locations: {
    title: 'Zones d\'Intervention',
    href: '/locations',
    submenu: [
      {
        title: 'Luxembourg-Ville',
        href: '/locations/luxembourg-ville',
        description: 'Centre financier européen'
      },
      {
        title: 'Kirchberg',
        href: '/locations/kirchberg',
        description: 'Hub tech & innovation'
      },
      {
        title: 'Esch-sur-Alzette',
        href: '/locations/esch-sur-alzette',
        description: 'Ville en transformation'
      },
      {
        title: 'Differdange',
        href: '/locations/differdange',
        description: 'Centre industriel'
      },
      {
        title: 'Dudelange',
        href: '/locations/dudelange',
        description: 'Hub régional dynamique'
      },
      {
        title: 'Pétange',
        href: '/locations/petange',
        description: 'Porte internationale'
      },
      {
        title: 'Sanem',
        href: '/locations/sanem',
        description: 'Pôle industriel'
      },
      {
        title: 'Bettembourg',
        href: '/locations/bettembourg',
        description: 'Hub logistique européen'
      }
    ]
  },
  contact: {
    title: 'Contact',
    href: '/contact',
    submenu: [
      {
        title: 'Contact',
        href: '/contact',
        description: 'Formulaire de contact général'
      },
      {
        title: 'Consultation Gratuite',
        href: '/consultation-gratuite',
        description: 'Réserver votre consultation de 45 minutes'
      },
      {
        title: 'Demander un Devis',
        href: '/devis',
        description: 'Formulaire détaillé pour votre projet'
      }
    ]
  }
};

// Animation variants
const dropdownVariants: Variants = {
  hidden: { 
    opacity: 0, 
    y: -10,
    transition: { duration: 0.2 }
  },
  visible: { 
    opacity: 1, 
    y: 0,
    transition: { duration: 0.3, ease: "easeOut" }
  }
};

const submenuVariants: Variants = {
  hidden: { opacity: 0, x: -10 },
  visible: { 
    opacity: 1, 
    x: 0,
    transition: { duration: 0.2, ease: "easeOut" }
  }
};

const Navigation: React.FC = () => {
  const [isServicesOpen, setIsServicesOpen] = useState(false);
  const [isAboutOpen, setIsAboutOpen] = useState(false);
  const [isContactOpen, setIsContactOpen] = useState(false);
  const [hoveredService, setHoveredService] = useState<string | null>(null);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const handleServicesEnter = () => {
    setIsServicesOpen(true);
    setIsAboutOpen(false);
    setIsContactOpen(false);
  };

  const handleServicesLeave = () => {
    setIsServicesOpen(false);
    setHoveredService(null);
  };

  const handleAboutEnter = () => {
    setIsAboutOpen(true);
    setIsServicesOpen(false);
    setIsContactOpen(false);
  };

  const handleAboutLeave = () => {
    setIsAboutOpen(false);
  };

  const handleContactEnter = () => {
    setIsContactOpen(true);
    setIsServicesOpen(false);
    setIsAboutOpen(false);
  };

  const handleContactLeave = () => {
    setIsContactOpen(false);
  };

  const handleServiceItemEnter = (serviceTitle: string) => {
    setHoveredService(serviceTitle);
  };

  return (
    <nav className="fixed w-full top-0 z-50 bg-white/95 backdrop-blur-sm border-b border-gray-200 shadow-sm">
      <div className="max-w-7xl mx-auto px-6">
        <div className="flex justify-between items-center h-20">
          {/* Logo */}
          <div className="logo">
            <Link href="/" className="text-gray-900 font-bold text-2xl hover:text-brand transition-colors">
              Wedid
            </Link>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center space-x-10">
            <Link href="/" className="text-gray-700 hover:text-gray-900 transition-colors font-medium">
              Accueil
            </Link>
            
            {/* Services Dropdown */}
            <div 
              className="relative"
              onMouseEnter={handleServicesEnter}
              onMouseLeave={handleServicesLeave}
            >
              <Link 
                href="/services" 
                className="text-gray-700 hover:text-gray-900 transition-colors font-medium flex items-center"
              >
                Services
                <svg className="ml-1 h-4 w-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                </svg>
              </Link>

              {/* Services Mega Menu */}
              <AnimatePresence>
                {isServicesOpen && (
                  <motion.div
                    variants={dropdownVariants}
                    initial="hidden"
                    animate="visible"
                    exit="hidden"
                    className="absolute left-0 top-full mt-2 w-screen max-w-4xl bg-white border border-gray-200 rounded-lg shadow-lg"
                    style={{ left: '-200px' }}
                  >
                    <div className="p-6">
                      <div className="grid grid-cols-2 lg:grid-cols-4 gap-6">
                        {navigationData.services.submenu.map((service, index) => (
                          <div
                            key={service.title}
                            className="relative"
                            onMouseEnter={() => handleServiceItemEnter(service.title)}
                          >
                            <Link
                              href={service.href}
                              className="block p-3 rounded-lg hover:bg-gray-50 transition-colors"
                            >
                              <h3 className="text-xs text-gray-900 mb-1">
                                {service.title}
                              </h3>
                              <p className="text-sm text-gray-600 mb-3">
                                {service.description}
                              </p>
                              
                              {/* Subservices */}
                              <div className="space-y-1">
                                {service.submenu.map((subservice) => (
                                  <Link
                                    key={subservice.title}
                                    href={subservice.href}
                                    className="block text-sm text-gray-500 hover:text-brand transition-colors"
                                  >
                                    {subservice.title}
                                  </Link>
                                ))}
                              </div>
                            </Link>
                          </div>
                        ))}
                      </div>
                      
                      {/* View All Services Button */}
                      <div className="mt-6 pt-6 border-t border-gray-200 text-center">
                        <Link
                          href="/services"
                          className="inline-flex items-center px-4 py-2 bg-brand text-gray-900 rounded-lg font-semibold hover:bg-brand/90 transition-colors"
                        >
                          Voir tous nos services
                          <svg className="ml-2 h-4 w-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                          </svg>
                        </Link>
                      </div>
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>

            {/* About Dropdown */}
            <div 
              className="relative"
              onMouseEnter={handleAboutEnter}
              onMouseLeave={handleAboutLeave}
            >
              <Link 
                href="/about" 
                className="text-gray-700 hover:text-gray-900 transition-colors font-medium flex items-center"
              >
                À Propos
                <svg className="ml-1 h-4 w-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                </svg>
              </Link>

              {/* About Dropdown Menu */}
              <AnimatePresence>
                {isAboutOpen && (
                  <motion.div
                    variants={dropdownVariants}
                    initial="hidden"
                    animate="visible"
                    exit="hidden"
                    className="absolute left-0 top-full mt-2 w-80 bg-white border border-gray-200 rounded-lg shadow-lg"
                    style={{ left: '-100px' }}
                  >
                    <div className="p-4">
                      <div className="space-y-2">
                        {navigationData.about.submenu.map((item, index) => (
                          <Link
                            key={item.title}
                            href={item.href}
                            className="block p-3 rounded-lg hover:bg-gray-50 transition-colors"
                          >
                            <h3 className="text-xs text-gray-900 mb-1">
                              {item.title}
                            </h3>
                            <p className="text-sm text-gray-600">
                              {item.description}
                            </p>
                          </Link>
                        ))}
                      </div>
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
            <Link href="/portfolio" className="text-gray-700 hover:text-gray-900 transition-colors font-medium">
              Projets
            </Link>
            
            {/* Contact Dropdown */}
            <div 
              className="relative"
              onMouseEnter={handleContactEnter}
              onMouseLeave={handleContactLeave}
            >
              <Link 
                href="/contact" 
                className="text-gray-700 hover:text-gray-900 transition-colors font-medium flex items-center"
              >
                Contact
                <svg className="ml-1 h-4 w-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                </svg>
              </Link>

              {/* Contact Dropdown Menu */}
              <AnimatePresence>
                {isContactOpen && (
                  <motion.div
                    variants={dropdownVariants}
                    initial="hidden"
                    animate="visible"
                    exit="hidden"
                    className="absolute left-0 top-full mt-2 w-80 bg-white border border-gray-200 rounded-lg shadow-lg"
                    style={{ left: '-100px' }}
                  >
                    <div className="p-4">
                      <div className="space-y-2">
                        {navigationData.contact.submenu.map((item, index) => (
                          <Link
                            key={item.title}
                            href={item.href}
                            className="block p-3 rounded-lg hover:bg-gray-50 transition-colors"
                          >
                            <h3 className="text-xs text-gray-900 mb-1">
                              {item.title}
                            </h3>
                            <p className="text-sm text-gray-600">
                              {item.description}
                            </p>
                          </Link>
                        ))}
                      </div>
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          </div>

          {/* CTA Button */}
          <div className="flex items-center space-x-4">
            <Link
              href="/consultation-gratuite"
              className="hidden lg:inline-flex items-center bg-brand text-gray-900 px-6 py-3 rounded-lg font-semibold shadow-md hover:shadow-lg hover:bg-brand/90 transition-all duration-300"
            >
              Consultation Gratuite
            </Link>

            {/* Mobile Menu Button */}
            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="lg:hidden p-2 rounded-md text-gray-600 hover:text-gray-900 hover:bg-gray-100 transition-colors"
            >
              <svg className="h-6 w-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                {isMobileMenuOpen ? (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                ) : (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                )}
              </svg>
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        <AnimatePresence>
          {isMobileMenuOpen && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: 'auto' }}
              exit={{ opacity: 0, height: 0 }}
              className="lg:hidden border-t border-gray-200 py-4"
            >
              <div className="space-y-4">
                <Link
                  href="/"
                  className="block px-4 py-2 text-gray-700 hover:text-gray-900 hover:bg-gray-50 rounded transition-colors"
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  Accueil
                </Link>
                
                <div className="px-4">
                  <div className="text-gray-900 font-medium mb-2">Services</div>
                  <div className="ml-4 space-y-2">
                    {navigationData.services.submenu.map((service) => (
                      <div key={service.title}>
                        <Link
                          href={service.href}
                          className="block py-1 text-gray-700 hover:text-gray-900 transition-colors"
                          onClick={() => setIsMobileMenuOpen(false)}
                        >
                          {service.title}
                        </Link>
                        <div className="ml-4 space-y-1">
                          {service.submenu.map((subservice) => (
                            <Link
                              key={subservice.title}
                              href={subservice.href}
                              className="block py-1 text-sm text-gray-500 hover:text-brand transition-colors"
                              onClick={() => setIsMobileMenuOpen(false)}
                            >
                              {subservice.title}
                            </Link>
                          ))}
                        </div>
                      </div>
                    ))}
                  </div>
                </div>

                <div className="px-4">
                  <div className="text-gray-900 font-medium mb-2">À Propos</div>
                  <div className="ml-4 space-y-2">
                    {navigationData.about.submenu.map((item) => (
                      <Link
                        key={item.title}
                        href={item.href}
                        className="block py-1 text-gray-700 hover:text-gray-900 transition-colors"
                        onClick={() => setIsMobileMenuOpen(false)}
                      >
                        {item.title}
                      </Link>
                    ))}
                  </div>
                </div>
                <Link
                  href="/portfolio"
                  className="block px-4 py-2 text-gray-700 hover:text-gray-900 hover:bg-gray-50 rounded transition-colors"
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  Projets
                </Link>
                
                <div className="px-4">
                  <div className="text-gray-900 font-medium mb-2">Contact</div>
                  <div className="ml-4 space-y-2">
                    {navigationData.contact.submenu.map((item) => (
                      <Link
                        key={item.title}
                        href={item.href}
                        className="block py-1 text-gray-700 hover:text-gray-900 transition-colors"
                        onClick={() => setIsMobileMenuOpen(false)}
                      >
                        {item.title}
                      </Link>
                    ))}
                  </div>
                </div>
                
                <div className="px-4 pt-4">
                  <Link
                    href="/consultation-gratuite"
                    className="block w-full text-center bg-brand text-gray-900 px-6 py-3 rounded-lg font-semibold"
                    onClick={() => setIsMobileMenuOpen(false)}
                  >
                    Consultation Gratuite
                  </Link>
                </div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </nav>
  );
};

export default Navigation;