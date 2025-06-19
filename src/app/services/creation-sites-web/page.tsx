'use client';

import { Metadata } from 'next';
import { motion, Variants } from 'framer-motion';
import Link from 'next/link';

interface Technology {
  name: string;
  icon: string;
  description: string;
}

interface PortfolioItem {
  title: string;
  category: string;
  description: string;
  image: string;
  tags: string[];
}

interface PricingTier {
  name: string;
  price: string;
  description: string;
  features: string[];
  highlighted: boolean;
  ctaText: string;
}

const technologies: Technology[] = [
  { name: 'Next.js', icon: '⚛️', description: 'Framework React pour des sites ultra-rapides' },
  { name: 'TypeScript', icon: '📘', description: 'JavaScript typé pour plus de robustesse' },
  { name: 'Tailwind CSS', icon: '🎨', description: 'Framework CSS moderne et responsive' },
  { name: 'Node.js', icon: '🟢', description: 'Backend performant et scalable' },
  { name: 'MongoDB', icon: '🍃', description: 'Base de données NoSQL flexible' },
  { name: 'Stripe', icon: '💳', description: 'Paiements sécurisés et conformes' }
];

const portfolioItems: PortfolioItem[] = [
  {
    title: 'LuxBank Corporate',
    category: 'Site Vitrine',
    description: 'Site corporatif pour une banque privée luxembourgeoise avec intégration CRM.',
    image: 'https://images.unsplash.com/photo-1554224155-6726b3ff858f?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80',
    tags: ['Next.js', 'CRM', 'Multilingue']
  },
  {
    title: 'LuxShop E-commerce',
    category: 'E-commerce',
    description: 'Boutique en ligne premium avec paiements multi-devises et livraison en Europe.',
    image: 'https://images.unsplash.com/photo-1563013544-824ae1b704d3?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80',
    tags: ['E-commerce', 'Stripe', 'Multi-devises']
  },
  {
    title: 'FinTech Dashboard',
    category: 'Application Web',
    description: 'Application de gestion financière pour professionnels avec tableaux de bord temps réel.',
    image: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80',
    tags: ['React', 'Dashboard', 'API REST']
  }
];

const pricingTiers: PricingTier[] = [
  {
    name: 'Site Vitrine',
    price: '2,500€',
    description: 'Site corporatif professionnel pour présenter votre entreprise luxembourgeoise',
    features: [
      'Design responsive sur-mesure',
      'Jusqu\'à 10 pages',
      'Optimisation SEO incluse',
      'Formulaires de contact',
      'Google Analytics',
      'Hébergement 1 an inclus'
    ],
    highlighted: false,
    ctaText: 'Commencer'
  },
  {
    name: 'E-commerce',
    price: '5,500€',
    description: 'Boutique en ligne complète avec gestion des commandes et paiements sécurisés',
    features: [
      'Design e-commerce professionnel',
      'Catalogue produits illimité',
      'Paiements Stripe/PayPal',
      'Gestion des stocks',
      'Multi-devises (EUR/USD)',
      'Tableau de bord admin',
      'Formation incluse'
    ],
    highlighted: true,
    ctaText: 'Choisir E-commerce'
  },
  {
    name: 'Application Web',
    price: 'Sur mesure',
    description: 'Solution web sur-mesure pour vos besoins métier spécifiques',
    features: [
      'Architecture personnalisée',
      'Intégrations API complexes',
      'Dashboard administrateur',
      'Authentification avancée',
      'Base de données optimisée',
      'Support technique continu',
      'Évolutivité garantie'
    ],
    highlighted: false,
    ctaText: 'Nous consulter'
  }
];

const fadeInUp: Variants = {
  hidden: { opacity: 0, y: 60 },
  visible: { 
    opacity: 1, 
    y: 0, 
    transition: { 
      duration: 0.8,
      ease: "easeOut"
    } 
  }
};

const staggerChildren: Variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.2,
      delayChildren: 0.1
    }
  }
};

const CreationSitesWebPage = () => {
  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="relative pt-20 pb-20 px-4 sm:pt-24 sm:pb-24 sm:px-6 lg:pt-32 lg:pb-32 overflow-hidden">
        <div 
          className="absolute inset-0 bg-cover bg-center bg-no-repeat"
          style={{
            backgroundImage: `url('https://images.unsplash.com/photo-1498050108023-c5249f4df085?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2072&q=80')`
          }}
        />
        <div className="absolute inset-0 bg-gray-900/75"></div>
        
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center text-white">
          <motion.div
            initial="hidden"
            animate="visible"
            variants={staggerChildren}
          >
            <motion.div variants={fadeInUp} className="mb-8">
              <span className="inline-block bg-brand text-gray-900 px-4 py-2 rounded-full text-sm font-semibold mb-8">
                💻 CRÉATION SITES WEB LUXEMBOURG
              </span>
            </motion.div>
            
            <motion.h1 variants={fadeInUp} className="text-5xl md:text-7xl font-bold mb-8 max-w-5xl mx-auto leading-tight">
              Sites Web{' '}
              <span className="text-brand">
                Modernes
              </span>{' '}
              & Performants
            </motion.h1>
            
            <motion.p variants={fadeInUp} className="text-xl md:text-2xl mb-12 max-w-4xl mx-auto text-gray-200 leading-relaxed font-normal">
              Sites vitrine, e-commerce et applications web sur-mesure, optimisés pour la performance 
              et adaptés aux besoins des entreprises luxembourgeoises.
            </motion.p>
            
            <motion.div variants={fadeInUp} className="flex flex-col md:flex-row gap-4 justify-center items-center">
              <motion.button 
                whileHover={{ scale: 1.05, y: -2 }}
                whileTap={{ scale: 0.95 }}
                className="bg-brand text-gray-900 px-8 py-4 rounded-lg font-bold text-lg shadow-xl hover:shadow-2xl transition-all duration-300"
              >
                Devis Gratuit →
              </motion.button>
              
              <motion.a 
                whileHover={{ scale: 1.05, y: -2 }}
                href="#portfolio" 
                className="text-white border-2 border-white px-8 py-4 rounded-lg hover:bg-white hover:text-gray-900 transition-all duration-300 font-semibold"
              >
                Voir nos Réalisations
              </motion.a>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Services Overview */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={staggerChildren}
            className="text-center mb-16"
          >
            <motion.div variants={fadeInUp} className="mb-6">
              <span className="inline-block bg-brand text-gray-900 px-4 py-2 rounded-full text-sm font-bold mb-8">
                NOS SPÉCIALITÉS
              </span>
            </motion.div>
            <motion.h2 variants={fadeInUp} className="text-4xl md:text-5xl font-bold mb-6 text-gray-900">
              3 Types de Sites Web
            </motion.h2>
            <motion.p variants={fadeInUp} className="text-xl max-w-4xl mx-auto text-gray-600 leading-relaxed">
              Chaque solution est conçue pour répondre aux exigences spécifiques du marché luxembourgeois 
              et aux standards internationaux de performance.
            </motion.p>
          </motion.div>

          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={staggerChildren}
            className="grid lg:grid-cols-3 gap-8 mb-16"
          >
            {[
              {
                title: 'Sites Vitrine',
                description: 'Sites corporatifs élégants pour présenter votre entreprise avec impact et professionnalisme.',
                icon: '🏢',
                image: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2415&q=80',
                features: ['Design responsive', 'Optimisation SEO', 'Multilingue', 'Formulaires contact'],
                href: '/services/creation-sites-web/sites-vitrine',
                stats: '95% de satisfaction client'
              },
              {
                title: 'E-commerce',
                description: 'Boutiques en ligne performantes avec gestion complète des ventes et paiements sécurisés.',
                icon: '🛍️',
                image: 'https://images.unsplash.com/photo-1563013544-824ae1b704d3?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80',
                features: ['Catalogue produits', 'Paiements sécurisés', 'Gestion stocks', 'Analytics ventes'],
                href: '/services/creation-sites-web/e-commerce',
                stats: '+150% de conversions moyennes'
              },
              {
                title: 'Applications Web',
                description: 'Solutions web sur-mesure pour automatiser vos processus métier et optimiser votre productivité.',
                icon: '⚙️',
                image: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80',
                features: ['Architecture modulaire', 'API intégrations', 'Dashboard admin', 'Évolutivité'],
                href: '/services/creation-sites-web/applications-web',
                stats: '100% de projets livrés'
              }
            ].map((service, index) => (
              <motion.div
                key={index}
                variants={fadeInUp}
                className="group bg-white rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 overflow-hidden"
              >
                <div className="relative h-48 overflow-hidden">
                  <img 
                    src={service.image} 
                    alt={service.title}
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gray-900/40"></div>
                  <div className="absolute top-4 right-4">
                    <div className="inline-flex items-center justify-center w-12 h-12 rounded-lg bg-white/90 text-xl shadow-lg">
                      {service.icon}
                    </div>
                  </div>
                  <div className="absolute bottom-4 left-4">
                    <span className="inline-block bg-brand text-gray-900 px-3 py-1 rounded-full text-sm font-semibold">
                      {service.stats}
                    </span>
                  </div>
                </div>
                
                <div className="p-8">
                  <h3 className="text-2xl font-bold mb-4 text-gray-900">{service.title}</h3>
                  <p className="text-gray-600 text-base mb-6 leading-relaxed">{service.description}</p>
                  
                  <ul className="space-y-3 mb-8">
                    {service.features.map((feature, idx) => (
                      <li key={idx} className="flex items-center text-gray-700">
                        <div className="w-2 h-2 rounded-full bg-brand mr-3 flex-shrink-0"></div>
                        <span className="font-medium">{feature}</span>
                      </li>
                    ))}
                  </ul>

                  <Link
                    href={service.href}
                    className="inline-flex items-center justify-center w-full bg-gray-900 text-white px-6 py-3 rounded-lg font-semibold hover:bg-gray-800 transition-colors group"
                  >
                    En savoir plus
                    <span className="ml-2 transition-transform group-hover:translate-x-1">→</span>
                  </Link>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Technology Stack */}
      <section className="py-24 bg-gray-50">
        <div className="max-w-7xl mx-auto px-6">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={staggerChildren}
            className="text-center mb-16"
          >
            <motion.div variants={fadeInUp} className="mb-6">
              <span className="inline-block bg-brand text-gray-900 px-4 py-2 rounded-full text-sm font-bold mb-8">
                TECHNOLOGIES MODERNES
              </span>
            </motion.div>
            <motion.h2 variants={fadeInUp} className="text-4xl md:text-5xl font-bold mb-6 text-gray-900">
              Stack Technologique Avancé
            </motion.h2>
            <motion.p variants={fadeInUp} className="text-xl max-w-4xl mx-auto text-gray-600 leading-relaxed">
              Nous utilisons les dernières technologies pour garantir performance, sécurité et évolutivité.
            </motion.p>
          </motion.div>

          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={staggerChildren}
            className="grid md:grid-cols-2 lg:grid-cols-3 gap-8"
          >
            {technologies.map((tech, index) => (
              <motion.div
                key={index}
                variants={fadeInUp}
                className="bg-white p-8 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 text-center"
              >
                <div className="text-4xl mb-4">{tech.icon}</div>
                <h4 className="text-xl font-bold mb-3 text-gray-900">{tech.name}</h4>
                <p className="text-gray-600 leading-relaxed">{tech.description}</p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Portfolio Section */}
      <section id="portfolio" className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={staggerChildren}
            className="text-center mb-16"
          >
            <motion.div variants={fadeInUp} className="mb-6">
              <span className="inline-block bg-brand text-gray-900 px-4 py-2 rounded-full text-sm font-bold mb-8">
                NOS RÉALISATIONS
              </span>
            </motion.div>
            <motion.h2 variants={fadeInUp} className="text-4xl md:text-5xl font-bold mb-6 text-gray-900">
              Portfolio de Projets
            </motion.h2>
            <motion.p variants={fadeInUp} className="text-xl max-w-4xl mx-auto text-gray-600 leading-relaxed">
              Découvrez quelques-uns de nos projets réalisés pour des entreprises luxembourgeoises.
            </motion.p>
          </motion.div>

          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={staggerChildren}
            className="grid lg:grid-cols-3 gap-8"
          >
            {portfolioItems.map((item, index) => (
              <motion.div
                key={index}
                variants={fadeInUp}
                className="group bg-white rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 overflow-hidden"
              >
                <div className="relative h-48 overflow-hidden">
                  <img 
                    src={item.image} 
                    alt={item.title}
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gray-900/40"></div>
                  <div className="absolute top-4 left-4">
                    <span className="inline-block bg-brand text-gray-900 px-3 py-1 rounded-full text-sm font-semibold">
                      {item.category}
                    </span>
                  </div>
                </div>
                
                <div className="p-8">
                  <h3 className="text-xl font-bold mb-3 text-gray-900">{item.title}</h3>
                  <p className="text-gray-600 text-sm mb-6 leading-relaxed">{item.description}</p>
                  
                  <div className="flex flex-wrap gap-2">
                    {item.tags.map((tag, idx) => (
                      <span key={idx} className="inline-block bg-gray-100 text-gray-700 px-3 py-1 rounded-full text-xs font-medium">
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Pricing Section */}
      <section className="py-24 bg-gray-50">
        <div className="max-w-7xl mx-auto px-6">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={staggerChildren}
            className="text-center mb-16"
          >
            <motion.div variants={fadeInUp} className="mb-6">
              <span className="inline-block bg-brand text-gray-900 px-4 py-2 rounded-full text-sm font-bold mb-8">
                NOS TARIFS
              </span>
            </motion.div>
            <motion.h2 variants={fadeInUp} className="text-4xl md:text-5xl font-bold mb-6 text-gray-900">
              Packages Création Web
            </motion.h2>
            <motion.p variants={fadeInUp} className="text-xl max-w-4xl mx-auto text-gray-600 leading-relaxed">
              Des solutions adaptées à tous les budgets, du site vitrine à l'application complexe.
            </motion.p>
          </motion.div>

          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={staggerChildren}
            className="grid lg:grid-cols-3 gap-8"
          >
            {pricingTiers.map((tier, index) => (
              <motion.div
                key={index}
                variants={fadeInUp}
                className={`relative rounded-2xl p-8 ${
                  tier.highlighted 
                    ? 'bg-gray-900 text-white shadow-2xl scale-105' 
                    : 'bg-white shadow-lg hover:shadow-xl'
                } transition-all duration-300`}
              >
                {tier.highlighted && (
                  <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                    <span className="bg-brand text-gray-900 px-4 py-2 rounded-full text-sm font-bold">
                      ⭐ POPULAIRE
                    </span>
                  </div>
                )}
                
                <div className="text-center mb-8">
                  <h3 className={`text-2xl font-bold mb-2 ${tier.highlighted ? 'text-white' : 'text-gray-900'}`}>
                    {tier.name}
                  </h3>
                  <div className="mb-4">
                    <span className={`text-4xl font-bold ${tier.highlighted ? 'text-brand' : 'text-gray-900'}`}>
                      {tier.price}
                    </span>
                    {tier.price !== 'Sur mesure' && <span className="text-gray-500"> HT</span>}
                  </div>
                  <p className={`${tier.highlighted ? 'text-gray-300' : 'text-gray-600'} leading-relaxed`}>
                    {tier.description}
                  </p>
                </div>

                <ul className="space-y-4 mb-8">
                  {tier.features.map((feature, idx) => (
                    <li key={idx} className="flex items-start">
                      <div className="w-5 h-5 rounded-full bg-brand flex items-center justify-center mr-3 mt-0.5 flex-shrink-0">
                        <span className="text-gray-900 text-xs font-bold">✓</span>
                      </div>
                      <span className={`${tier.highlighted ? 'text-gray-300' : 'text-gray-700'} leading-relaxed`}>
                        {feature}
                      </span>
                    </li>
                  ))}
                </ul>

                <button className={`w-full py-4 px-6 rounded-lg font-bold text-lg transition-all duration-300 ${
                  tier.highlighted
                    ? 'bg-brand text-gray-900 hover:bg-brand/90 shadow-lg hover:shadow-xl'
                    : 'bg-gray-900 text-white hover:bg-gray-800'
                }`}>
                  {tier.ctaText}
                </button>
              </motion.div>
            ))}
          </motion.div>

          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeInUp}
            className="text-center mt-12"
          >
            <p className="text-gray-600 mb-4">
              Tous nos packages incluent 1 an d'hébergement, maintenance et support technique.
            </p>
            <p className="text-sm text-gray-500">
              Prix HT. TVA luxembourgeoise applicable selon la localisation du client.
            </p>
          </motion.div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 bg-gray-900 relative overflow-hidden">
        <div 
          className="absolute inset-0 bg-cover bg-center bg-no-repeat"
          style={{
            backgroundImage: `url('https://images.unsplash.com/photo-1521737604893-d14cc237f11d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2084&q=80')`
          }}
        />
        <div className="absolute inset-0 bg-gray-900/80"></div>
        
        <div className="max-w-6xl mx-auto px-6 text-center relative z-10">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={staggerChildren}
          >
            <motion.h2 variants={fadeInUp} className="text-4xl md:text-6xl font-bold mb-6 text-white">
              Prêt à Lancer Votre{' '}
              <span className="text-brand">
                Projet Web
              </span> ?
            </motion.h2>
            <motion.p variants={fadeInUp} className="text-xl mb-10 max-w-4xl mx-auto text-gray-200 leading-relaxed">
              Obtenez un devis gratuit et découvrez comment nous pouvons créer le site web parfait 
              pour votre entreprise luxembourgeoise.
            </motion.p>
            <motion.div variants={fadeInUp} className="flex flex-col md:flex-row gap-4 justify-center">
              <motion.button 
                whileHover={{ scale: 1.05, y: -2 }}
                whileTap={{ scale: 0.95 }}
                className="bg-brand text-gray-900 px-10 py-4 rounded-lg font-bold text-lg shadow-xl hover:shadow-2xl transition-all duration-300"
              >
                Devis Gratuit →
              </motion.button>
              <motion.a 
                whileHover={{ scale: 1.05, y: -2 }}
                href="tel:+352123456789" 
                className="inline-flex items-center text-white border-2 border-white px-10 py-4 rounded-lg hover:bg-white hover:text-gray-900 transition-all duration-300 font-bold"
              >
                📞 +352 12 34 56 789
              </motion.a>
            </motion.div>
          </motion.div>
        </div>
      </section>

    </div>
  );
};

export default CreationSitesWebPage;