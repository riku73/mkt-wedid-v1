'use client';

import { Metadata } from 'next';
import { motion, Variants } from 'framer-motion';
import Link from 'next/link';
import { useState } from 'react';

interface CaseStudy {
  id: string;
  title: string;
  client: string;
  industry: string;
  category: string;
  description: string;
  image: string;
  tags: string[];
  results: {
    metric: string;
    value: string;
    description: string;
  }[];
  href: string;
  featured: boolean;
  color: string;
}

const caseStudies: CaseStudy[] = [
  {
    id: 'lux-fintech-startup',
    title: 'Transformation Digitale Complète d\'une Fintech',
    client: 'LuxFintech Solutions',
    industry: 'Finance',
    category: 'all',
    description: 'Création d\'une identité de marque moderne et développement d\'une plateforme web innovante pour une startup fintech luxembourgeoise spécialisée dans les crypto-monnaies.',
    image: 'https://images.unsplash.com/photo-1563986768609-322da13575f3?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80',
    tags: ['Branding', 'Développement Web', 'Marketing Digital'],
    results: [
      { metric: 'Trafic Web', value: '+340%', description: 'Augmentation en 6 mois' },
      { metric: 'Leads Qualifiés', value: '+250%', description: 'Demandes de contact' },
      { metric: 'Temps de Session', value: '+180%', description: 'Engagement utilisateur' }
    ],
    href: '/portfolio/case-studies/lux-fintech-startup',
    featured: true,
    color: 'from-blue-500 to-purple-600'
  },
  {
    id: 'restaurant-chain-luxembourg',
    title: 'Stratégie E-commerce pour Chaîne de Restaurants',
    client: 'Les Saveurs du Luxembourg',
    industry: 'Restauration',
    category: 'ecommerce',
    description: 'Développement d\'une plateforme de commande en ligne et stratégie marketing digital pour une chaîne de restaurants luxembourgeoise.',
    image: 'https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80',
    tags: ['E-commerce', 'SEO Local', 'Social Media'],
    results: [
      { metric: 'Commandes Online', value: '+450%', description: 'Croissance mensuelle' },
      { metric: 'Revenus Digitaux', value: '€125K', description: 'Chiffre d\'affaires en ligne' },
      { metric: 'Visibilité Locale', value: '+300%', description: 'Recherches Google Maps' }
    ],
    href: '/portfolio/case-studies/restaurant-chain-luxembourg',
    featured: true,
    color: 'from-orange-500 to-red-600'
  },
  {
    id: 'b2b-saas-platform',
    title: 'Lancement SaaS B2B dans le Secteur Financier',
    client: 'ComplianceMax',
    industry: 'SaaS',
    category: 'saas',
    description: 'Stratégie de lancement complète pour une plateforme SaaS de conformité réglementaire destinée aux institutions financières luxembourgeoises.',
    image: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80',
    tags: ['SaaS Marketing', 'Lead Generation', 'Content Strategy'],
    results: [
      { metric: 'MRR', value: '€85K', description: 'Revenus récurrents mensuels' },
      { metric: 'Taux de Conversion', value: '12.5%', description: 'Visiteurs vers essai gratuit' },
      { metric: 'Customer LTV', value: '€24K', description: 'Valeur vie client moyenne' }
    ],
    href: '/portfolio/case-studies/b2b-saas-platform',
    featured: true,
    color: 'from-green-500 to-teal-600'
  },
  {
    id: 'luxury-real-estate',
    title: 'Site Immobilier Haut de Gamme Luxembourg',
    client: 'Prestige Properties Luxembourg',
    industry: 'Immobilier',
    category: 'local',
    description: 'Création d\'un site web premium et stratégie marketing pour une agence immobilière spécialisée dans le luxe au Luxembourg.',
    image: 'https://images.unsplash.com/photo-1560518883-ce09059eeffa?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2073&q=80',
    tags: ['Web Design', 'SEO Premium', 'Lead Generation'],
    results: [
      { metric: 'Valeur Moyenne', value: '€2.1M', description: 'Transaction par lead' },
      { metric: 'Leads Qualifiés', value: '+180%', description: 'Demandes de visite' },
      { metric: 'Temps de Vente', value: '-35%', description: 'Réduction cycle de vente' }
    ],
    href: '/portfolio/case-studies/luxury-real-estate',
    featured: false,
    color: 'from-purple-500 to-pink-600'
  },
  {
    id: 'consulting-firm-rebranding',
    title: 'Rebranding Complet Cabinet de Conseil',
    client: 'Luxembourg Business Advisory',
    industry: 'Conseil',
    category: 'branding',
    description: 'Refonte complète de l\'identité visuelle et stratégie de communication pour un cabinet de conseil en stratégie d\'entreprise.',
    image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80',
    tags: ['Rebranding', 'Stratégie', 'Communication'],
    results: [
      { metric: 'Nouveaux Clients', value: '+65%', description: 'Croissance clientèle' },
      { metric: 'Valeur Contrats', value: '+120%', description: 'Augmentation moyenne' },
      { metric: 'Notoriété', value: '+200%', description: 'Reconnaissance marché' }
    ],
    href: '/portfolio/case-studies/consulting-firm-rebranding',
    featured: false,
    color: 'from-gray-600 to-gray-800'
  },
  {
    id: 'ecommerce-fashion-luxembourg',
    title: 'E-commerce Mode Haut de Gamme',
    client: 'Élégance Luxembourg',
    industry: 'Mode',
    category: 'ecommerce',
    description: 'Développement d\'une boutique en ligne premium et stratégie omnicanale pour une marque de mode luxembourgeoise.',
    image: 'https://images.unsplash.com/photo-1441986300917-64674bd600d8?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80',
    tags: ['E-commerce', 'UX/UI', 'Marketing Automation'],
    results: [
      { metric: 'Chiffre d\'Affaires', value: '€450K', description: 'Premier année en ligne' },
      { metric: 'Panier Moyen', value: '€185', description: 'Valeur moyenne commande' },
      { metric: 'Taux de Retour', value: '34%', description: 'Clients fidèles' }
    ],
    href: '/portfolio/case-studies/ecommerce-fashion-luxembourg',
    featured: false,
    color: 'from-pink-500 to-rose-600'
  },
  {
    id: 'tech-startup-series-a',
    title: 'Accompagnement Startup Tech Série A',
    client: 'InnovateLux',
    industry: 'Technologie',
    category: 'startup',
    description: 'Stratégie marketing complète pour accompagner une startup tech luxembourgeoise dans sa levée de fonds Série A.',
    image: 'https://images.unsplash.com/photo-1559136555-9303baea8ebd?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80',
    tags: ['Startup Marketing', 'PR', 'Investor Relations'],
    results: [
      { metric: 'Levée de Fonds', value: '€8.5M', description: 'Série A réussie' },
      { metric: 'Media Coverage', value: '45', description: 'Articles presse tech' },
      { metric: 'Valorisation', value: '€35M', description: 'Post-money valuation' }
    ],
    href: '/portfolio/case-studies/tech-startup-series-a',
    featured: false,
    color: 'from-indigo-500 to-purple-600'
  },
  {
    id: 'manufacturing-digital-transformation',
    title: 'Transformation Digitale Industrie',
    client: 'LuxManufacturing Group',
    industry: 'Industrie',
    category: 'b2b',
    description: 'Accompagnement digital d\'un groupe industriel luxembourgeois vers l\'Industrie 4.0 et marketing B2B international.',
    image: 'https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80',
    tags: ['B2B Marketing', 'Digital Transformation', 'International'],
    results: [
      { metric: 'Leads Internationaux', value: '+280%', description: 'Prospects qualifiés' },
      { metric: 'Cycle de Vente', value: '-40%', description: 'Réduction durée' },
      { metric: 'Export CA', value: '+150%', description: 'Croissance internationale' }
    ],
    href: '/portfolio/case-studies/manufacturing-digital-transformation',
    featured: false,
    color: 'from-blue-600 to-cyan-600'
  }
];

const industries = [
  { id: 'all', name: 'Tous les Projets', count: caseStudies.length },
  { id: 'finance', name: 'Finance & Fintech', count: caseStudies.filter(cs => cs.industry === 'Finance').length },
  { id: 'ecommerce', name: 'E-commerce', count: caseStudies.filter(cs => cs.category === 'ecommerce').length },
  { id: 'saas', name: 'SaaS & Tech', count: caseStudies.filter(cs => cs.category === 'saas' || cs.industry === 'Technologie').length },
  { id: 'local', name: 'Business Local', count: caseStudies.filter(cs => cs.category === 'local' || ['Restauration', 'Immobilier', 'Conseil'].includes(cs.industry)).length },
  { id: 'b2b', name: 'B2B & Industrie', count: caseStudies.filter(cs => cs.category === 'b2b' || cs.industry === 'Industrie').length }
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

const scaleOnHover: Variants = {
  rest: { scale: 1 },
  hover: { 
    scale: 1.02,
    transition: { 
      duration: 0.3,
      ease: "easeOut"
    }
  }
};

const PortfolioPage = () => {
  const [activeFilter, setActiveFilter] = useState('all');
  const [filteredCaseStudies, setFilteredCaseStudies] = useState(caseStudies);

  const handleFilterChange = (filterId: string) => {
    setActiveFilter(filterId);
    
    if (filterId === 'all') {
      setFilteredCaseStudies(caseStudies);
    } else {
      const filtered = caseStudies.filter(cs => {
        switch (filterId) {
          case 'finance':
            return cs.industry === 'Finance';
          case 'ecommerce':
            return cs.category === 'ecommerce';
          case 'saas':
            return cs.category === 'saas' || cs.industry === 'Technologie';
          case 'local':
            return cs.category === 'local' || ['Restauration', 'Immobilier', 'Conseil'].includes(cs.industry);
          case 'b2b':
            return cs.category === 'b2b' || cs.industry === 'Industrie';
          default:
            return true;
        }
      });
      setFilteredCaseStudies(filtered);
    }
  };

  const featuredCaseStudies = caseStudies.filter(cs => cs.featured);

  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="relative pt-32 pb-32 overflow-hidden">
        <div 
          className="absolute inset-0 bg-cover bg-center bg-no-repeat"
          style={{
            backgroundImage: `url('https://images.unsplash.com/photo-1460925895917-afdab827c52f?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2415&q=80')`
          }}
        />
        <div className="absolute inset-0 bg-gray-900/80"></div>
        
        <div className="max-w-6xl mx-auto px-6 relative z-10 text-center text-white">
          <motion.div
            initial="hidden"
            animate="visible"
            variants={staggerChildren}
          >
            <motion.div variants={fadeInUp} className="mb-8">
              <span className="inline-block bg-brand text-gray-900 px-4 py-2 rounded-full text-sm font-semibold mb-8">
                🇱🇺 PORTFOLIO & RÉALISATIONS
              </span>
            </motion.div>
            
            <motion.h1 variants={fadeInUp} className="text-5xl md:text-7xl font-bold mb-8 max-w-5xl mx-auto leading-tight">
              Nos{' '}
              <span className="text-brand">
                Succès Clients
              </span>{' '}
              au Luxembourg
            </motion.h1>
            
            <motion.p variants={fadeInUp} className="text-xl md:text-2xl mb-12 max-w-4xl mx-auto text-gray-200 leading-relaxed font-normal">
              Découvrez comment nous avons transformé la présence digitale de nos clients luxembourgeois 
              et généré des résultats mesurables pour leur croissance.
            </motion.p>
            
            <motion.div variants={fadeInUp} className="flex flex-col md:flex-row gap-4 justify-center items-center">
              <motion.a 
                whileHover={{ scale: 1.05, y: -2 }}
                whileTap={{ scale: 0.95 }}
                href="#portfolio-grid"
                className="bg-brand text-gray-900 px-8 py-4 rounded-lg font-bold text-lg shadow-xl hover:shadow-2xl transition-all duration-300"
              >
                Voir Nos Projets →
              </motion.a>
              
              <motion.a 
                whileHover={{ scale: 1.05, y: -2 }}
                href="/contact" 
                className="text-white border-2 border-white px-8 py-4 rounded-lg hover:bg-white hover:text-gray-900 transition-all duration-300 font-semibold"
              >
                Discuter de Votre Projet
              </motion.a>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Featured Case Studies */}
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
                PROJETS PHARES
              </span>
            </motion.div>
            <motion.h2 variants={fadeInUp} className="text-4xl md:text-5xl font-bold mb-6 text-gray-900">
              Nos Réalisations les Plus Remarquables
            </motion.h2>
            <motion.p variants={fadeInUp} className="text-xl max-w-4xl mx-auto text-gray-600 leading-relaxed">
              Ces projets illustrent notre expertise dans la transformation digitale des entreprises luxembourgeoises, 
              avec des résultats concrets et mesurables.
            </motion.p>
          </motion.div>

          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={staggerChildren}
            className="grid lg:grid-cols-3 gap-8 mb-16"
          >
            {featuredCaseStudies.map((caseStudy, index) => (
              <motion.div
                key={caseStudy.id}
                variants={fadeInUp}
                initial="rest"
                whileHover="hover"
                className="group relative"
              >
                <motion.div
                  variants={scaleOnHover}
                  className="relative rounded-2xl bg-white shadow-lg border border-gray-100 hover:shadow-2xl transition-all duration-500 overflow-hidden h-full"
                >
                  {/* Case Study Image */}
                  <div className="relative h-64 overflow-hidden">
                    <img 
                      src={caseStudy.image} 
                      alt={caseStudy.title}
                      className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                    />
                    <div className="absolute inset-0 bg-gray-900/40"></div>
                    
                    {/* Industry tag */}
                    <div className="absolute top-4 left-4">
                      <span className="inline-block bg-white/90 text-gray-900 px-3 py-1 rounded-full text-sm font-semibold">
                        {caseStudy.industry}
                      </span>
                    </div>

                    {/* Featured badge */}
                    <div className="absolute top-4 right-4">
                      <span className="inline-block bg-brand text-gray-900 px-3 py-1 rounded-full text-sm font-bold">
                        ⭐ FEATURED
                      </span>
                    </div>
                  </div>
                  
                  <div className="p-8">
                    <div className="mb-4">
                      <h4 className="text-sm font-semibold text-gray-500 mb-1">{caseStudy.client}</h4>
                      <h3 className="text-xl font-bold mb-3 text-gray-900 line-clamp-2">
                        {caseStudy.title}
                      </h3>
                    </div>
                    
                    <p className="text-gray-600 text-sm mb-6 leading-relaxed line-clamp-3">
                      {caseStudy.description}
                    </p>
                    
                    {/* Tags */}
                    <div className="flex flex-wrap gap-2 mb-6">
                      {caseStudy.tags.slice(0, 3).map((tag, idx) => (
                        <span key={idx} className="px-2 py-1 bg-gray-100 text-gray-700 rounded-md text-xs font-medium">
                          {tag}
                        </span>
                      ))}
                    </div>

                    {/* Results Preview */}
                    <div className="grid grid-cols-3 gap-4 mb-6">
                      {caseStudy.results.slice(0, 3).map((result, idx) => (
                        <div key={idx} className="text-center">
                          <div className="text-lg font-bold text-gray-900">{result.value}</div>
                          <div className="text-xs text-gray-600">{result.metric}</div>
                        </div>
                      ))}
                    </div>

                    {/* CTA Button */}
                    <Link
                      href={caseStudy.href}
                      className="inline-flex items-center justify-center w-full bg-gray-900 text-white px-6 py-3 rounded-lg font-semibold hover:bg-gray-800 transition-colors group"
                    >
                      Voir l'Étude Complète
                      <span className="ml-2 transition-transform group-hover:translate-x-1">→</span>
                    </Link>
                  </div>
                </motion.div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Filter Section */}
      <section id="portfolio-grid" className="py-24 bg-gray-50">
        <div className="max-w-7xl mx-auto px-6">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={staggerChildren}
            className="text-center mb-16"
          >
            <motion.h2 variants={fadeInUp} className="text-4xl md:text-5xl font-bold mb-6 text-gray-900">
              Tous Nos Projets
            </motion.h2>
            <motion.p variants={fadeInUp} className="text-xl max-w-3xl mx-auto text-gray-600 leading-relaxed mb-12">
              Explorez notre portfolio complet par secteur d'activité et découvrez comment nous accompagnons 
              les entreprises luxembourgeoises dans leur transformation digitale.
            </motion.p>

            {/* Filter Buttons */}
            <motion.div variants={fadeInUp} className="flex flex-wrap justify-center gap-4 mb-12">
              {industries.map((industry) => (
                <button
                  key={industry.id}
                  onClick={() => handleFilterChange(industry.id)}
                  className={`px-6 py-3 rounded-full font-semibold transition-all duration-300 ${
                    activeFilter === industry.id
                      ? 'bg-brand text-gray-900 shadow-md'
                      : 'bg-white text-gray-700 hover:bg-gray-100 border border-gray-200'
                  }`}
                >
                  {industry.name} ({industry.count})
                </button>
              ))}
            </motion.div>
          </motion.div>

          {/* Portfolio Grid */}
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={staggerChildren}
            className="grid md:grid-cols-2 lg:grid-cols-3 gap-8"
          >
            {filteredCaseStudies.map((caseStudy, index) => (
              <motion.div
                key={`${caseStudy.id}-${activeFilter}`}
                variants={fadeInUp}
                initial="rest"
                whileHover="hover"
                className="group relative"
              >
                <motion.div
                  variants={scaleOnHover}
                  className="relative rounded-2xl bg-white shadow-lg border border-gray-100 hover:shadow-2xl transition-all duration-500 overflow-hidden h-full"
                >
                  {/* Case Study Image */}
                  <div className="relative h-48 overflow-hidden">
                    <img 
                      src={caseStudy.image} 
                      alt={caseStudy.title}
                      className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                    />
                    <div className="absolute inset-0 bg-gray-900/30"></div>
                    
                    {/* Industry tag */}
                    <div className="absolute top-3 left-3">
                      <span className="inline-block bg-white/90 text-gray-900 px-2 py-1 rounded-full text-xs font-semibold">
                        {caseStudy.industry}
                      </span>
                    </div>

                    {/* Featured badge */}
                    {caseStudy.featured && (
                      <div className="absolute top-3 right-3">
                        <span className="inline-block bg-brand text-gray-900 px-2 py-1 rounded-full text-xs font-bold">
                          ⭐
                        </span>
                      </div>
                    )}
                  </div>
                  
                  <div className="p-6">
                    <div className="mb-4">
                      <h4 className="text-sm font-semibold text-gray-500 mb-1">{caseStudy.client}</h4>
                      <h3 className="text-lg font-bold mb-2 text-gray-900 line-clamp-2">
                        {caseStudy.title}
                      </h3>
                    </div>
                    
                    <p className="text-gray-600 text-sm mb-4 leading-relaxed line-clamp-2">
                      {caseStudy.description}
                    </p>
                    
                    {/* Tags */}
                    <div className="flex flex-wrap gap-2 mb-4">
                      {caseStudy.tags.slice(0, 2).map((tag, idx) => (
                        <span key={idx} className="px-2 py-1 bg-gray-100 text-gray-700 rounded-md text-xs font-medium">
                          {tag}
                        </span>
                      ))}
                    </div>

                    {/* Key Result */}
                    <div className="mb-4 p-3 bg-gray-50 rounded-lg">
                      <div className="text-center">
                        <div className="text-xl font-bold text-gray-900">{caseStudy.results[0].value}</div>
                        <div className="text-sm text-gray-600">{caseStudy.results[0].description}</div>
                      </div>
                    </div>

                    {/* CTA Button */}
                    <Link
                      href={caseStudy.href}
                      className="inline-flex items-center justify-center w-full bg-gray-900 text-white px-4 py-2 rounded-lg font-semibold hover:bg-gray-800 transition-colors group text-sm"
                    >
                      Voir les Détails
                      <span className="ml-2 transition-transform group-hover:translate-x-1">→</span>
                    </Link>
                  </div>
                </motion.div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={staggerChildren}
            className="text-center mb-16"
          >
            <motion.h2 variants={fadeInUp} className="text-4xl md:text-5xl font-bold mb-6 text-gray-900">
              Nos Résultats en Chiffres
            </motion.h2>
            <motion.p variants={fadeInUp} className="text-xl max-w-4xl mx-auto text-gray-600 leading-relaxed">
              Les performances moyennes obtenues pour nos clients luxembourgeois témoignent de l'efficacité 
              de nos stratégies marketing digital sur mesure.
            </motion.p>
          </motion.div>

          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={staggerChildren}
            className="grid md:grid-cols-2 lg:grid-cols-4 gap-8"
          >
            {[
              {
                number: '+240%',
                label: 'Croissance Trafic Web',
                description: 'Augmentation moyenne'
              },
              {
                number: '€2.8M',
                label: 'Revenus Générés',
                description: 'Pour nos clients'
              },
              {
                number: '89%',
                label: 'Taux de Satisfaction',
                description: 'Clients recommandent'
              },
              {
                number: '45+',
                label: 'Projets Réalisés',
                description: 'Depuis 2020'
              }
            ].map((stat, index) => (
              <motion.div
                key={index}
                variants={fadeInUp}
                className="text-center p-8 bg-gray-50 rounded-2xl"
              >
                <div className="text-4xl md:text-5xl font-bold text-gray-900 mb-2">{stat.number}</div>
                <div className="text-lg font-semibold text-gray-700 mb-1">{stat.label}</div>
                <div className="text-sm text-gray-600">{stat.description}</div>
              </motion.div>
            ))}
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
        <div className="absolute inset-0 bg-gray-900/85"></div>
        
        <div className="max-w-6xl mx-auto px-6 text-center relative z-10">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={staggerChildren}
          >
            <motion.h2 variants={fadeInUp} className="text-4xl md:text-6xl font-bold mb-6 text-white">
              Votre Projet est le{' '}
              <span className="text-brand">
                Prochain Succès
              </span>
            </motion.h2>
            <motion.p variants={fadeInUp} className="text-xl mb-10 max-w-4xl mx-auto text-gray-200 leading-relaxed">
              Rejoignez nos clients satisfaits et transformez votre présence digitale. 
              Discutons de votre projet et définissons ensemble la stratégie qui vous mènera au succès.
            </motion.p>
            <motion.div variants={fadeInUp} className="flex flex-col md:flex-row gap-4 justify-center">
              <motion.a 
                whileHover={{ scale: 1.05, y: -2 }}
                whileTap={{ scale: 0.95 }}
                href="/contact"
                className="bg-brand text-gray-900 px-10 py-4 rounded-lg font-bold text-lg shadow-xl hover:shadow-2xl transition-all duration-300"
              >
                Démarrer Mon Projet →
              </motion.a>
              <motion.a 
                whileHover={{ scale: 1.05, y: -2 }}
                href="/consultation"
                className="inline-flex items-center text-white border-2 border-white px-10 py-4 rounded-lg hover:bg-white hover:text-gray-900 transition-all duration-300 font-bold"
              >
                Consultation Gratuite
              </motion.a>
            </motion.div>
          </motion.div>
        </div>
      </section>

    </div>
  );
};

export default PortfolioPage;