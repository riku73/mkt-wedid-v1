'use client';

import { motion, Variants } from 'framer-motion';
import Link from 'next/link';

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
      staggerChildren: 0.15,
      delayChildren: 0.1
    }
  }
};

const LuxembourgVillePage = () => {
  const stats = [
    { number: '15,000+', label: 'Entreprises actives', icon: '🏢' },
    { number: '125,000', label: 'Habitants', icon: '👥' },
    { number: '€45B', label: 'PIB généré', icon: '💰' },
    { number: '160+', label: 'Nationalités', icon: '🌍' }
  ];

  const keyIndustries = [
    {
      name: 'Services Financiers',
      description: 'Banques, assurances, fonds d\'investissement',
      opportunities: 'Digitalisation des services, compliance digitale, fintech',
      companies: ['BGL BNP Paribas', 'Banque de Luxembourg', 'POST Luxembourg'],
      marketSize: '€25B+',
      icon: '🏦'
    },
    {
      name: 'Sièges Sociaux Européens',
      description: 'Centres de décision des multinationales',
      opportunities: 'Corporate communication, B2B marketing, événementiel',
      companies: ['Amazon Europe', 'PayPal', 'Skype'],
      marketSize: '€15B+',
      icon: '🏛️'
    },
    {
      name: 'Institutions Gouvernementales',
      description: 'Administration, services publics',
      opportunities: 'Communication institutionnelle, transformation digitale',
      companies: ['Gouvernement', 'Chambre de Commerce', 'STATEC'],
      marketSize: '€3B+',
      icon: '🏛️'
    },
    {
      name: 'Tech & Innovation',
      description: 'Startups, scale-ups, centres R&D',
      opportunities: 'Growth marketing, product marketing, lead generation',
      companies: ['Telindus', 'Docler Holding', 'Fondation IDEA'],
      marketSize: '€8B+',
      icon: '💻'
    }
  ];

  const successStories = [
    {
      client: 'Banque Privée Luxembourg',
      challenge: 'Moderniser l\'image de marque et attirer une clientèle plus jeune',
      solution: 'Refonte complète de l\'identité digitale et stratégie content marketing',
      results: '+150% trafic web, +85% leads qualifiés, +40% nouveaux clients <35 ans',
      industry: 'Finance'
    },
    {
      client: 'Cabinet d\'Avocats International',
      challenge: 'Développer la visibilité en ligne pour les services corporate',
      solution: 'SEO technique, content marketing spécialisé, LinkedIn Ads',
      results: 'Position #1 sur "avocat corporate Luxembourg", +200% demandes',
      industry: 'Services Juridiques'
    },
    {
      client: 'Startup Fintech',
      challenge: 'Lancement produit et acquisition clients B2B',
      solution: 'Growth marketing, automation, événementiel digital',
      results: '500+ prospects qualifiés, 50 clients en 6 mois, €2M levée de fonds',
      industry: 'Fintech'
    }
  ];

  const localInsights = [
    {
      title: 'Marché B2B Ultra-Concurrentiel',
      description: 'La concentration d\'entreprises internationales crée un environnement très compétitif nécessitant une différenciation forte.',
      impact: 'Stratégies de niche et thought leadership essentielles'
    },
    {
      title: 'Multilinguisme Obligatoire',
      description: 'Communications en français, anglais, allemand selon les secteurs. Public international exigeant.',
      impact: 'Content marketing multilingue et culturellement adapté'
    },
    {
      title: 'Réseau Décisionnel Dense',
      description: 'Petit écosystème où la réputation se construit rapidement. Importance du networking et des références.',
      impact: 'Marketing relationnel et social proof cruciaux'
    },
    {
      title: 'Réglementation Stricte',
      description: 'Secteurs hautement régulés (finance, data) avec contraintes de compliance fortes.',
      impact: 'Marketing conforme RGPD, communication encadree'
    }
  ];

  const localServices = [
    {
      title: 'SEO Local Luxembourg-Ville',
      description: 'Positionnement sur les requêtes géolocalisées Luxembourg-Ville, Limpertsberg, Belair',
      features: ['Google My Business optimisé', 'Citations locales', 'Avis clients gérés', 'Local pack positioning']
    },
    {
      title: 'LinkedIn Marketing B2B',
      description: 'Stratégies spécialisées pour atteindre les décideurs du secteur financier et corporate',
      features: ['Profils optimisés', 'Content B2B', 'LinkedIn Ads', 'Social selling']
    },
    {
      title: 'Sites Web Corporate',
      description: 'Développement de sites institutionnels conformes aux standards luxembourgeois',
      features: ['Design premium', 'Multilingue', 'Conforme RGPD', 'Performance optimisée']
    },
    {
      title: 'Communication de Crise',
      description: 'Gestion de la réputation online dans un environnement médiatique concentré',
      features: ['Monitoring 24/7', 'Stratégie réactive', 'Relations presse', 'Crisis management']
    }
  ];

  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="relative pt-28 pb-20 px-4 sm:pt-32 sm:pb-24 sm:px-6 lg:pt-32 lg:pb-32 overflow-hidden">
        <div 
          className="absolute inset-0 bg-cover bg-center bg-no-repeat"
          style={{
            backgroundImage: `url('https://images.unsplash.com/photo-1578662996442-48f60103fc96?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80')`
          }}
        />
        <div className="absolute inset-0 bg-gray-900/75"></div>
        
        <div className="max-w-7xl mx-auto px-6 relative z-10 text-center text-white">
          <motion.div
            initial="hidden"
            animate="visible"
            variants={staggerChildren}
          >
            <motion.div variants={fadeInUp} className="mb-8">
              <span className="inline-block bg-brand text-gray-900 px-6 py-3 rounded-full text-sm font-bold mb-8">
                🏛️ LUXEMBOURG-VILLE • CENTRE FINANCIER EUROPÉEN
              </span>
            </motion.div>
            
            <motion.h1 variants={fadeInUp} className="text-5xl md:text-7xl font-bold mb-8 max-w-6xl mx-auto leading-tight">
              Marketing Digital pour{' '}
              <span className="text-brand">
                Luxembourg-Ville
              </span>
            </motion.h1>
            
            <motion.p variants={fadeInUp} className="text-xl md:text-2xl mb-12 max-w-4xl mx-auto text-gray-200 leading-relaxed">
              Spécialistes du marketing digital pour les entreprises financières, sièges sociaux européens et institutions 
              basées dans la capitale du Grand-Duché. Expertise corporate et B2B haut de gamme.
            </motion.p>
            
            <motion.div variants={fadeInUp} className="flex flex-col md:flex-row gap-6 justify-center items-center">
              <motion.a 
                href="/consultation-gratuite"
                whileHover={{ scale: 1.05, y: -2 }}
                whileTap={{ scale: 0.95 }}
                className="bg-brand text-gray-900 px-10 py-4 rounded-lg font-bold text-lg shadow-xl hover:shadow-2xl transition-all duration-300 inline-flex items-center"
              >
                Audit Marketing Gratuit
                <span className="ml-2">→</span>
              </motion.a>
              
              <motion.a 
                whileHover={{ scale: 1.05, y: -2 }}
                href="tel:+352123456789" 
                className="text-white border-2 border-white px-10 py-4 rounded-lg hover:bg-white hover:text-gray-900 transition-all duration-300 font-bold inline-flex items-center"
              >
                <span className="mr-2">📞</span>
                +352 12 34 56 789
              </motion.a>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-16 bg-white border-b border-gray-200">
        <div className="max-w-7xl mx-auto px-6">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={staggerChildren}
            className="grid md:grid-cols-2 lg:grid-cols-4 gap-8"
          >
            {stats.map((stat, index) => (
              <motion.div
                key={index}
                variants={fadeInUp}
                className="text-center"
              >
                <div className="text-4xl mb-4">{stat.icon}</div>
                <div className="text-3xl md:text-4xl font-bold text-gray-900 mb-2">{stat.number}</div>
                <div className="text-gray-600 font-medium">{stat.label}</div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Key Industries */}
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
                SECTEURS D'ACTIVITÉ
              </span>
            </motion.div>
            <motion.h2 variants={fadeInUp} className="text-4xl md:text-5xl font-bold mb-6 text-gray-900">
              Écosystème Business Luxembourg-Ville
            </motion.h2>
            <motion.p variants={fadeInUp} className="text-xl max-w-4xl mx-auto text-gray-600 leading-relaxed">
              Nous maîtrisons les spécificités de chaque secteur clé de la capitale : 
              codes de communication, réglementations et opportunités digitales.
            </motion.p>
          </motion.div>

          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={staggerChildren}
            className="grid lg:grid-cols-2 gap-8"
          >
            {keyIndustries.map((industry, index) => (
              <motion.div
                key={index}
                variants={fadeInUp}
                className="bg-white p-8 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300"
              >
                <div className="flex items-start mb-6">
                  <div className="text-4xl mr-4">{industry.icon}</div>
                  <div>
                    <h3 className="text-2xl font-bold text-gray-900 mb-2">{industry.name}</h3>
                    <p className="text-gray-600">{industry.description}</p>
                  </div>
                </div>
                
                <div className="space-y-4">
                  <div>
                    <h4 className="font-semibold text-gray-900 mb-2">💡 Opportunités Marketing :</h4>
                    <p className="text-gray-700 text-sm">{industry.opportunities}</p>
                  </div>
                  
                  <div>
                    <h4 className="font-semibold text-gray-900 mb-2">🏢 Entreprises Phares :</h4>
                    <div className="flex flex-wrap gap-2">
                      {industry.companies.map((company, idx) => (
                        <span key={idx} className="bg-gray-100 text-gray-700 px-3 py-1 rounded-full text-xs font-medium">
                          {company}
                        </span>
                      ))}
                    </div>
                  </div>
                  
                  <div className="flex justify-between items-center pt-4 border-t border-gray-200">
                    <span className="text-sm text-gray-600">Taille du marché</span>
                    <span className="font-bold text-lg text-brand">{industry.marketSize}</span>
                  </div>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Success Stories */}
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
                CAS D'ÉTUDE LUXEMBOURG-VILLE
              </span>
            </motion.div>
            <motion.h2 variants={fadeInUp} className="text-4xl md:text-5xl font-bold mb-6 text-gray-900">
              Succès Clients dans la Capitale
            </motion.h2>
            <motion.p variants={fadeInUp} className="text-xl max-w-4xl mx-auto text-gray-600 leading-relaxed">
              Découvrez comment nous avons aidé des entreprises luxembourgeoises à transformer 
              leur présence digitale et booster leur croissance.
            </motion.p>
          </motion.div>

          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={staggerChildren}
            className="space-y-8"
          >
            {successStories.map((story, index) => (
              <motion.div
                key={index}
                variants={fadeInUp}
                className="bg-gray-50 rounded-2xl p-8 lg:p-10"
              >
                <div className="grid lg:grid-cols-3 gap-8">
                  <div>
                    <div className="inline-block bg-brand text-gray-900 px-3 py-1 rounded-full text-xs font-bold mb-4">
                      {story.industry}
                    </div>
                    <h3 className="text-2xl font-bold text-gray-900 mb-4">{story.client}</h3>
                    <div className="space-y-4">
                      <div>
                        <h4 className="font-semibold text-gray-900 mb-2">🎯 Défi :</h4>
                        <p className="text-gray-700 text-sm">{story.challenge}</p>
                      </div>
                      <div>
                        <h4 className="font-semibold text-gray-900 mb-2">💡 Solution :</h4>
                        <p className="text-gray-700 text-sm">{story.solution}</p>
                      </div>
                    </div>
                  </div>
                  
                  <div className="lg:col-span-2">
                    <h4 className="font-semibold text-gray-900 mb-4">📈 Résultats Obtenus :</h4>
                    <div className="bg-white rounded-xl p-6">
                      <p className="text-gray-800 text-lg font-medium leading-relaxed">{story.results}</p>
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Local Market Insights */}
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
                ANALYSE DE MARCHÉ
              </span>
            </motion.div>
            <motion.h2 variants={fadeInUp} className="text-4xl md:text-5xl font-bold mb-6 text-gray-900">
              Spécificités du Marché Luxembourgeois
            </motion.h2>
            <motion.p variants={fadeInUp} className="text-xl max-w-4xl mx-auto text-gray-600 leading-relaxed">
              Notre expertise locale nous permet de naviguer les particularités uniques 
              du marché business luxembourgeois.
            </motion.p>
          </motion.div>

          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={staggerChildren}
            className="grid md:grid-cols-2 gap-8"
          >
            {localInsights.map((insight, index) => (
              <motion.div
                key={index}
                variants={fadeInUp}
                className="bg-white p-8 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300"
              >
                <h3 className="text-xl font-bold text-gray-900 mb-4">{insight.title}</h3>
                <p className="text-gray-600 mb-4 leading-relaxed">{insight.description}</p>
                <div className="pt-4 border-t border-gray-200">
                  <span className="inline-block bg-brand/20 text-gray-800 px-3 py-1 rounded-full text-sm font-medium">
                    💡 {insight.impact}
                  </span>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Local Services */}
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
                SERVICES SPÉCIALISÉS
              </span>
            </motion.div>
            <motion.h2 variants={fadeInUp} className="text-4xl md:text-5xl font-bold mb-6 text-gray-900">
              Marketing Digital Luxembourg-Ville
            </motion.h2>
            <motion.p variants={fadeInUp} className="text-xl max-w-4xl mx-auto text-gray-600 leading-relaxed">
              Services sur-mesure pour les entreprises de la capitale, adaptés aux enjeux 
              du centre financier européen.
            </motion.p>
          </motion.div>

          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={staggerChildren}
            className="grid md:grid-cols-2 gap-8"
          >
            {localServices.map((service, index) => (
              <motion.div
                key={index}
                variants={fadeInUp}
                className="bg-gray-50 p-8 rounded-2xl hover:shadow-lg transition-all duration-300"
              >
                <h3 className="text-2xl font-bold text-gray-900 mb-4">{service.title}</h3>
                <p className="text-gray-600 mb-6 leading-relaxed">{service.description}</p>
                
                <div>
                  <h4 className="font-semibold text-gray-900 mb-3">Incluant :</h4>
                  <ul className="space-y-2">
                    {service.features.map((feature, idx) => (
                      <li key={idx} className="flex items-center text-gray-700">
                        <div className="w-2 h-2 rounded-full bg-brand mr-3 flex-shrink-0"></div>
                        <span>{feature}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="py-24 bg-gray-900 relative overflow-hidden">
        <div 
          className="absolute inset-0 bg-cover bg-center bg-no-repeat"
          style={{
            backgroundImage: `url('https://images.unsplash.com/photo-1605379399843-5870eea9b74e?ixlib=rb-4.0.3&auto=format&fit=crop&w=2126&q=80')`
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
              Développez Votre Business à{' '}
              <span className="text-brand">
                Luxembourg-Ville
              </span>
            </motion.h2>
            <motion.p variants={fadeInUp} className="text-xl mb-10 max-w-4xl mx-auto text-gray-200 leading-relaxed">
              Profitez de notre expertise du marché luxembourgeois pour booster votre présence digitale 
              dans la capitale financière européenne.
            </motion.p>
            
            <motion.div variants={fadeInUp} className="grid md:grid-cols-2 gap-8 mb-12">
              <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-6">
                <h3 className="text-xl font-bold text-white mb-4">🏢 Bureau Luxembourg-Ville</h3>
                <div className="space-y-2 text-gray-200">
                  <p>📍 Avenue de la Liberté, Luxembourg-Ville</p>
                  <p>📞 +352 12 34 56 789</p>
                  <p>✉️ luxembourg@wedid.lu</p>
                  <p>🕒 Lun-Ven: 8h30-18h00</p>
                </div>
              </div>
              
              <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-6">
                <h3 className="text-xl font-bold text-white mb-4">🚇 Accessibilité</h3>
                <div className="space-y-2 text-gray-200">
                  <p>🚌 Arrêt: Place d'Armes</p>
                  <p>🚗 Parking: Centre Ville</p>
                  <p>🚊 Tram: Arrêt Gare Centrale</p>
                  <p>✈️ Aéroport: 15 min en voiture</p>
                </div>
              </div>
            </motion.div>
            
            <motion.div variants={fadeInUp} className="flex flex-col md:flex-row gap-6 justify-center">
              <motion.a 
                href="/consultation-gratuite"
                whileHover={{ scale: 1.05, y: -2 }}
                whileTap={{ scale: 0.95 }}
                className="bg-brand text-gray-900 px-12 py-4 rounded-lg font-bold text-lg shadow-xl hover:shadow-2xl transition-all duration-300 inline-flex items-center justify-center"
              >
                Consultation Gratuite Luxembourg-Ville
                <span className="ml-2">→</span>
              </motion.a>
              <motion.a 
                whileHover={{ scale: 1.05, y: -2 }}
                href="/services" 
                className="inline-flex items-center justify-center text-white border-2 border-white px-12 py-4 rounded-lg hover:bg-white hover:text-gray-900 transition-all duration-300 font-bold"
              >
                Découvrir Nos Services
              </motion.a>
            </motion.div>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default LuxembourgVillePage;