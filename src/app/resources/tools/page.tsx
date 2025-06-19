'use client';

import React, { useState } from 'react';
import { motion, Variants } from 'framer-motion';
import Link from 'next/link';

interface Tool {
  id: string;
  title: string;
  description: string;
  icon: string;
  category: string;
  featured?: boolean;
  comingSoon?: boolean;
  href: string;
  benefits: string[];
  difficulty: 'Facile' | 'Intermédiaire' | 'Avancé';
}

const tools: Tool[] = [
  {
    id: '1',
    title: 'Calculateur ROI Marketing Digital',
    description: 'Calculez le retour sur investissement de vos campagnes marketing digital avec des métriques spécifiques au marché luxembourgeois.',
    icon: '📊',
    category: 'Calculateurs',
    featured: true,
    href: '/resources/tools/calculateur-roi-marketing',
    benefits: [
      'ROI par canal marketing',
      'Projections Luxembourg',
      'Comparaison secteurs',
      'Rapport détaillé'
    ],
    difficulty: 'Facile'
  },
  {
    id: '2',
    title: 'Audit SEO Gratuit',
    description: 'Analysez gratuitement la performance SEO de votre site web avec des recommandations adaptées au marché luxembourgeois.',
    icon: '🔍',
    category: 'Audit',
    featured: true,
    href: '/resources/tools/audit-seo-gratuit',
    benefits: [
      'Analyse technique complète',
      'Mots-clés Luxembourg',
      'Recommandations prioritaires',
      'Score de performance'
    ],
    difficulty: 'Facile'
  },
  {
    id: '3',
    title: 'Générateur de Meta Tags',
    description: 'Créez des meta titles et descriptions optimisés pour le SEO avec des suggestions de mots-clés luxembourgeois.',
    icon: '🏷️',
    category: 'SEO',
    featured: true,
    href: '/resources/tools/generateur-meta-tags',
    benefits: [
      'Templates optimisés',
      'Aperçu Google',
      'Mots-clés locaux',
      'Multi-langues'
    ],
    difficulty: 'Facile'
  },
  {
    id: '4',
    title: 'Calculateur Budget Google Ads',
    description: 'Estimez le budget nécessaire pour vos campagnes Google Ads au Luxembourg selon vos objectifs et votre secteur.',
    icon: '💰',
    category: 'Calculateurs',
    href: '/resources/tools/calculateur-budget-google-ads',
    benefits: [
      'Budget par secteur LU',
      'CPC moyens Luxembourg',
      'Prévisions clics/conversions',
      'Stratégies enchères'
    ],
    difficulty: 'Intermédiaire'
  },
  {
    id: '5',
    title: 'Analyseur de Concurrence',
    description: 'Analysez la stratégie digitale de vos concurrents luxembourgeois : SEO, publicités, réseaux sociaux.',
    icon: '🕵️',
    category: 'Audit',
    href: '/resources/tools/analyseur-concurrence',
    benefits: [
      'Gaps concurrentiels',
      'Stratégies publicitaires',
      'Mots-clés concurrents',
      'Benchmark performance'
    ],
    difficulty: 'Avancé'
  },
  {
    id: '6',
    title: 'Calculateur Taux de Conversion',
    description: 'Analysez et optimisez vos taux de conversion avec des benchmarks spécifiques aux entreprises luxembourgeoises.',
    icon: '📈',
    category: 'Calculateurs',
    href: '/resources/tools/calculateur-taux-conversion',
    benefits: [
      'Benchmarks sectoriels LU',
      'Analyse entonnoir',
      'Recommandations CRO',
      'Impact revenus'
    ],
    difficulty: 'Intermédiaire'
  },
  {
    id: '7',
    title: 'Générateur de Personas B2B',
    description: 'Créez des personas détaillés pour vos campagnes B2B avec des insights spécifiques au marché luxembourgeois.',
    icon: '👥',
    category: 'Stratégie',
    href: '/resources/tools/generateur-personas-b2b',
    benefits: [
      'Templates B2B Luxembourg',
      'Données démographiques',
      'Comportements sectoriels',
      'Export PDF'
    ],
    difficulty: 'Intermédiaire'
  },
  {
    id: '8',
    title: 'Planificateur de Contenu Social',
    description: 'Planifiez votre contenu social media avec un calendrier optimisé pour l\'audience luxembourgeoise.',
    icon: '📅',
    category: 'Social Media',
    href: '/resources/tools/planificateur-contenu-social',
    benefits: [
      'Calendrier éditorial',
      'Meilleurs horaires LU',
      'Templates posts',
      'Suivi performance'
    ],
    difficulty: 'Facile'
  },
  {
    id: '9',
    title: 'Calculateur Lifetime Value (LTV)',
    description: 'Calculez la valeur vie client adaptée aux cycles de vente et habitudes de consommation luxembourgeoises.',
    icon: '💎',
    category: 'Calculateurs',
    href: '/resources/tools/calculateur-ltv',
    benefits: [
      'LTV par secteur',
      'Prédictions churn',
      'Stratégies rétention',
      'ROI acquisition'
    ],
    difficulty: 'Avancé'
  },
  {
    id: '10',
    title: 'Test de Vitesse Site Web',
    description: 'Testez la vitesse de votre site avec des serveurs luxembourgeois et obtenez des recommandations d\'optimisation.',
    icon: '⚡',
    category: 'Audit',
    href: '/resources/tools/test-vitesse-site',
    benefits: [
      'Serveurs Luxembourg',
      'Core Web Vitals',
      'Optimisations techniques',
      'Score mobile/desktop'
    ],
    difficulty: 'Intermédiaire'
  },
  {
    id: '11',
    title: 'Générateur Email Marketing',
    description: 'Créez des templates d\'emails marketing optimisés avec des CTA adaptés au marché luxembourgeois.',
    icon: '📧',
    category: 'Email Marketing',
    href: '/resources/tools/generateur-email-marketing',
    benefits: [
      'Templates responsives',
      'A/B testing setup',
      'Conformité RGPD',
      'Personnalisation locale'
    ],
    difficulty: 'Facile'
  },
  {
    id: '12',
    title: 'Dashboard Analytics Luxembourg',
    description: 'Tableau de bord personnalisé avec les KPIs essentiels pour les entreprises luxembourgeoises.',
    icon: '📱',
    category: 'Analytics',
    comingSoon: true,
    href: '/resources/tools/dashboard-analytics-luxembourg',
    benefits: [
      'KPIs sectoriels',
      'Benchmarks locaux',
      'Alertes automatiques',
      'Rapports exécutifs'
    ],
    difficulty: 'Avancé'
  }
];

const categories = ['Tous', 'Calculateurs', 'Audit', 'SEO', 'Social Media', 'Stratégie', 'Email Marketing', 'Analytics'];

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
      staggerChildren: 0.1,
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

const ToolsPage = () => {
  const [selectedCategory, setSelectedCategory] = useState('Tous');
  const [email, setEmail] = useState('');

  const filteredTools = selectedCategory === 'Tous' 
    ? tools 
    : tools.filter(tool => tool.category === selectedCategory);

  const featuredTools = tools.filter(tool => tool.featured);

  const handleNewsletterSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log('Newsletter signup:', email);
    setEmail('');
  };

  const getDifficultyColor = (difficulty: string) => {
    switch (difficulty) {
      case 'Facile': return 'bg-green-100 text-green-800';
      case 'Intermédiaire': return 'bg-yellow-100 text-yellow-800';
      case 'Avancé': return 'bg-red-100 text-red-800';
      default: return 'bg-gray-100 text-gray-800';
    }
  };

  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="relative overflow-hidden pt-32 pb-24">
        <div 
          className="absolute inset-0 bg-cover bg-center bg-no-repeat"
          style={{
            backgroundImage: `url('https://images.unsplash.com/photo-1551288049-bebda4e38f71?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80')`
          }}
        />
        <div className="absolute inset-0 bg-gray-900/75"></div>
        
        <div className="max-w-6xl mx-auto px-6 relative z-10 text-center text-white">
          <motion.div
            initial="hidden"
            animate="visible"
            variants={staggerChildren}
          >
            <motion.div variants={fadeInUp} className="mb-8">
              <span className="inline-block bg-brand text-gray-900 px-4 py-2 rounded-full text-sm font-semibold mb-8">
                🛠️ OUTILS MARKETING GRATUITS
              </span>
            </motion.div>
            
            <motion.h1 variants={fadeInUp} className="text-5xl md:text-6xl font-bold mb-8 max-w-4xl mx-auto leading-tight">
              Outils Marketing{' '}
              <span className="text-brand">
                Luxembourg
              </span>
            </motion.h1>
            
            <motion.p variants={fadeInUp} className="text-xl mb-12 max-w-3xl mx-auto text-gray-200 leading-relaxed">
              Calculateurs, audits et outils gratuits spécialement conçus pour les entreprises 
              luxembourgeoises. Optimisez vos performances marketing avec des données locales.
            </motion.p>
            
            <motion.div variants={fadeInUp} className="flex flex-col md:flex-row gap-4 justify-center items-center">
              <motion.a
                href="#tools"
                whileHover={{ scale: 1.05, y: -2 }}
                whileTap={{ scale: 0.95 }}
                className="bg-brand text-gray-900 px-8 py-4 rounded-lg font-bold text-lg shadow-xl hover:shadow-2xl transition-all duration-300"
              >
                Explorer les Outils →
              </motion.a>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Featured Tools */}
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
                OUTILS POPULAIRES
              </span>
            </motion.div>
            <motion.h2 variants={fadeInUp} className="text-4xl md:text-5xl font-bold mb-6 text-gray-900">
              Nos Outils les Plus Utilisés
            </motion.h2>
            <motion.p variants={fadeInUp} className="text-xl max-w-4xl mx-auto text-gray-600 leading-relaxed">
              Ces outils sont plébiscités par les entrepreneurs et marketeurs luxembourgeois 
              pour leur précision et leur adaptation au marché local.
            </motion.p>
          </motion.div>

          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={staggerChildren}
            className="grid lg:grid-cols-3 gap-8"
          >
            {featuredTools.map((tool, index) => (
              <motion.div
                key={tool.id}
                variants={fadeInUp}
                initial="rest"
                whileHover="hover"
                className="group"
              >
                <motion.div
                  variants={scaleOnHover}
                  className="bg-white rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-500 overflow-hidden h-full border border-gray-100"
                >
                  <div className="p-8">
                    <div className="flex items-start justify-between mb-4">
                      <div className="text-4xl">{tool.icon}</div>
                      <div className="flex items-center space-x-2">
                        <span className="bg-brand text-gray-900 px-3 py-1 rounded-full text-sm font-semibold">
                          {tool.category}
                        </span>
                        <span className={`px-3 py-1 rounded-full text-sm font-medium ${getDifficultyColor(tool.difficulty)}`}>
                          {tool.difficulty}
                        </span>
                      </div>
                    </div>
                    
                    <h3 className="text-xl font-bold mb-3 text-gray-900">
                      {tool.title}
                    </h3>
                    <p className="text-gray-600 mb-6 leading-relaxed">
                      {tool.description}
                    </p>
                    
                    <div className="mb-6">
                      <h4 className="font-semibold text-gray-900 mb-3">Fonctionnalités :</h4>
                      <ul className="space-y-2">
                        {tool.benefits.map((benefit, idx) => (
                          <li key={idx} className="flex items-center text-sm text-gray-700">
                            <div className="w-2 h-2 rounded-full bg-brand mr-3 flex-shrink-0"></div>
                            <span>{benefit}</span>
                          </li>
                        ))}
                      </ul>
                    </div>

                    {tool.comingSoon ? (
                      <div className="w-full bg-gray-200 text-gray-600 px-6 py-3 rounded-lg font-bold text-center">
                        Bientôt Disponible
                      </div>
                    ) : (
                      <Link
                        href={tool.href}
                        className="block w-full bg-brand text-gray-900 px-6 py-3 rounded-lg font-bold hover:bg-brand/90 transition-colors text-center group"
                      >
                        Utiliser l'Outil
                        <span className="ml-2 transition-transform group-hover:translate-x-1">→</span>
                      </Link>
                    )}
                  </div>
                </motion.div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Category Filter */}
      <section className="py-12 bg-white border-b border-gray-200">
        <div className="max-w-7xl mx-auto px-6">
          <div className="flex flex-wrap gap-3 justify-center">
            {categories.map((category) => (
              <button
                key={category}
                onClick={() => setSelectedCategory(category)}
                className={`px-6 py-3 rounded-full font-medium transition-all ${
                  selectedCategory === category
                    ? 'bg-brand text-gray-900 shadow-lg'
                    : 'bg-gray-100 text-gray-600 hover:bg-gray-200'
                }`}
              >
                {category}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* All Tools */}
      <section id="tools" className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={staggerChildren}
          >
            <motion.div variants={fadeInUp} className="mb-12">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
                {selectedCategory === 'Tous' ? 'Tous les Outils' : `Outils : ${selectedCategory}`}
              </h2>
              <p className="text-gray-600">
                {filteredTools.length} outil{filteredTools.length > 1 ? 's' : ''} disponible{filteredTools.length > 1 ? 's' : ''}
              </p>
            </motion.div>

            <motion.div
              variants={staggerChildren}
              className="grid md:grid-cols-2 lg:grid-cols-3 gap-8"
            >
              {filteredTools.map((tool, index) => (
                <motion.div
                  key={tool.id}
                  variants={fadeInUp}
                  initial="rest"
                  whileHover="hover"
                  className="group"
                >
                  <motion.div
                    variants={scaleOnHover}
                    className={`rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-500 overflow-hidden border h-full ${
                      tool.comingSoon 
                        ? 'bg-gray-50 border-gray-200' 
                        : 'bg-white border-gray-100'
                    }`}
                  >
                    <div className="p-6">
                      <div className="flex items-start justify-between mb-4">
                        <div className={`text-3xl ${tool.comingSoon ? 'grayscale' : ''}`}>
                          {tool.icon}
                        </div>
                        <div className="flex flex-col items-end space-y-2">
                          {tool.comingSoon && (
                            <span className="bg-gray-200 text-gray-600 px-2 py-1 rounded-full text-xs font-semibold">
                              Bientôt
                            </span>
                          )}
                          <span className="bg-brand text-gray-900 px-3 py-1 rounded-full text-sm font-semibold">
                            {tool.category}
                          </span>
                          <span className={`px-3 py-1 rounded-full text-sm font-medium ${getDifficultyColor(tool.difficulty)}`}>
                            {tool.difficulty}
                          </span>
                        </div>
                      </div>
                      
                      <h3 className={`text-xl font-bold mb-3 ${tool.comingSoon ? 'text-gray-600' : 'text-gray-900'}`}>
                        {tool.title}
                      </h3>
                      <p className={`mb-4 leading-relaxed ${tool.comingSoon ? 'text-gray-500' : 'text-gray-600'}`}>
                        {tool.description}
                      </p>
                      
                      <div className="mb-6">
                        <h4 className={`font-semibold mb-3 ${tool.comingSoon ? 'text-gray-600' : 'text-gray-900'}`}>
                          Fonctionnalités :
                        </h4>
                        <ul className="space-y-2">
                          {tool.benefits.map((benefit, idx) => (
                            <li key={idx} className={`flex items-center text-sm ${tool.comingSoon ? 'text-gray-500' : 'text-gray-700'}`}>
                              <div className={`w-2 h-2 rounded-full mr-3 flex-shrink-0 ${tool.comingSoon ? 'bg-gray-400' : 'bg-brand'}`}></div>
                              <span>{benefit}</span>
                            </li>
                          ))}
                        </ul>
                      </div>

                      {tool.comingSoon ? (
                        <div className="w-full bg-gray-200 text-gray-600 px-6 py-3 rounded-lg font-bold text-center">
                          Bientôt Disponible
                        </div>
                      ) : (
                        <Link
                          href={tool.href}
                          className="block w-full bg-gray-900 text-white px-6 py-3 rounded-lg font-bold hover:bg-gray-800 transition-colors text-center group"
                        >
                          Utiliser l'Outil
                          <span className="ml-2 transition-transform group-hover:translate-x-1">→</span>
                        </Link>
                      )}
                    </div>
                  </motion.div>
                </motion.div>
              ))}
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Luxembourg Insights */}
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
                INSIGHTS LUXEMBOURG
              </span>
            </motion.div>
            <motion.h2 variants={fadeInUp} className="text-4xl md:text-5xl font-bold mb-6 text-gray-900">
              Données Marketing Luxembourg
            </motion.h2>
            <motion.p variants={fadeInUp} className="text-xl max-w-4xl mx-auto text-gray-600 leading-relaxed">
              Benchmarks et statistiques clés pour optimiser vos campagnes marketing 
              avec des données spécifiques au marché luxembourgeois.
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
                metric: '€2.45',
                label: 'CPC Moyen Luxembourg',
                description: 'Coût par clic moyen sur Google Ads',
                trend: '+8% vs 2023'
              },
              {
                metric: '3.2%',
                label: 'Taux Conversion E-commerce',
                description: 'Taux de conversion moyen au Luxembourg',
                trend: '+0.4% vs 2023'
              },
              {
                metric: '€185',
                label: 'Panier Moyen',
                description: 'Valeur moyenne du panier en ligne',
                trend: '+12% vs 2023'
              },
              {
                metric: '68%',
                label: 'Trafic Mobile',
                description: 'Part du trafic mobile au Luxembourg',
                trend: '+5% vs 2023'
              }
            ].map((stat, index) => (
              <motion.div
                key={index}
                variants={fadeInUp}
                className="bg-white p-8 rounded-2xl shadow-lg text-center"
              >
                <div className="text-4xl font-bold text-brand mb-2">{stat.metric}</div>
                <h4 className="text-lg font-bold text-gray-900 mb-2">{stat.label}</h4>
                <p className="text-gray-600 text-sm mb-3">{stat.description}</p>
                <span className="text-green-600 text-sm font-semibold">{stat.trend}</span>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Newsletter */}
      <section className="py-24 bg-gray-900 relative overflow-hidden">
        <div 
          className="absolute inset-0 bg-cover bg-center bg-no-repeat"
          style={{
            backgroundImage: `url('https://images.unsplash.com/photo-1596526131083-e8c633c948d2?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2074&q=80')`
          }}
        />
        <div className="absolute inset-0 bg-gray-900/80"></div>
        
        <div className="max-w-4xl mx-auto px-6 text-center relative z-10">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={staggerChildren}
          >
            <motion.div variants={fadeInUp} className="mb-6">
              <span className="inline-block bg-brand text-gray-900 px-4 py-2 rounded-full text-sm font-bold mb-8">
                NOUVEAUX OUTILS
              </span>
            </motion.div>
            <motion.h2 variants={fadeInUp} className="text-4xl md:text-5xl font-bold mb-6 text-white">
              Soyez Alerté des{' '}
              <span className="text-brand">
                Nouveautés
              </span>
            </motion.h2>
            <motion.p variants={fadeInUp} className="text-xl mb-10 text-gray-200 leading-relaxed">
              Recevez une notification dès qu'un nouvel outil ou calculateur est disponible. 
              Restez à la pointe avec nos ressources exclusives Luxembourg.
            </motion.p>
            
            <motion.form 
              variants={fadeInUp}
              onSubmit={handleNewsletterSubmit}
              className="flex flex-col md:flex-row gap-4 max-w-lg mx-auto"
            >
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="Votre adresse email"
                className="flex-1 px-6 py-4 rounded-lg text-gray-900 font-medium focus:outline-none focus:ring-2 focus:ring-brand"
                required
              />
              <motion.button
                type="submit"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="bg-brand text-gray-900 px-8 py-4 rounded-lg font-bold shadow-xl hover:shadow-2xl transition-all duration-300"
              >
                S'abonner
              </motion.button>
            </motion.form>
          </motion.div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 bg-white">
        <div className="max-w-6xl mx-auto px-6 text-center">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={staggerChildren}
          >
            <motion.h2 variants={fadeInUp} className="text-4xl md:text-5xl font-bold mb-6 text-gray-900">
              Besoin d'Outils{' '}
              <span className="text-brand">Personnalisés</span> ?
            </motion.h2>
            <motion.p variants={fadeInUp} className="text-xl mb-10 max-w-4xl mx-auto text-gray-600 leading-relaxed">
              Nos outils gratuits vous donnent un aperçu de nos capacités. Pour des analyses 
              approfondies et des outils sur-mesure, découvrez nos services complets.
            </motion.p>
            <motion.div variants={fadeInUp} className="flex flex-col md:flex-row gap-4 justify-center">
              <motion.a
                href="/consultation-gratuite"
                whileHover={{ scale: 1.05, y: -2 }}
                whileTap={{ scale: 0.95 }}
                className="bg-brand text-gray-900 px-10 py-4 rounded-lg font-bold text-lg shadow-xl hover:shadow-2xl transition-all duration-300"
              >
                Consultation Gratuite →
              </motion.a>
              <motion.a 
                href="/services"
                whileHover={{ scale: 1.05, y: -2 }}
                className="inline-flex items-center text-gray-900 border-2 border-gray-900 px-10 py-4 rounded-lg hover:bg-gray-900 hover:text-white transition-all duration-300 font-bold"
              >
                Découvrir nos Services
              </motion.a>
            </motion.div>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default ToolsPage;