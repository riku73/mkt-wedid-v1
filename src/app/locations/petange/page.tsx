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

const PetangePage = () => {
  const stats = [
    { number: '800+', label: 'Entreprises', icon: '🏢' },
    { number: '18,000', label: 'Habitants', icon: '👥' },
    { number: '€1.1B', label: 'PIB local', icon: '💰' },
    { number: '45%', label: 'Business transfrontalier', icon: '🌍' }
  ];

  const crossBorderSectors = [
    {
      name: 'Commerce Transfrontalier',
      description: 'Import-export, distribution internationale, commerce cross-border France-Belgique',
      opportunities: 'Marketing international, e-commerce multi-pays, logistique digitale',
      markets: ['France', 'Belgique', 'Luxembourg', 'Grande Région'],
      advantages: ['Position frontalière', 'Accès multi-marchés', 'Logistique optimisée', 'Diversification'],
      icon: '🌍'
    },
    {
      name: 'Logistique & Transport',
      description: 'Centres logistiques, transport routier, distribution régionale',
      opportunities: 'Optimisation supply chain, digitalisation logistique, tracking solutions',
      markets: ['Transport Routier', 'Logistique', 'Distribution', 'E-commerce'],
      advantages: ['Hub logistique', 'Connectivité européenne', 'Infrastructure', 'Efficacité'],
      icon: '🚛'
    },
    {
      name: 'Services de Proximité',
      description: 'Services locaux, commerces frontaliers, prestataires régionaux',
      opportunities: 'Marketing géolocalisé, services digitaux, clientèle internationale',
      markets: ['Services Locaux', 'Commerce Détail', 'Prestations', 'Proximité'],
      advantages: ['Clientèle diverse', 'Marché élargi', 'Besoins spécifiques', 'Fidélisation'],
      icon: '🛍️'
    },
    {
      name: 'PME Régionales',
      description: 'Entreprises familiales, artisanat, services B2B régionaux',
      opportunities: 'Expansion internationale, digitalisation, networking cross-border',
      markets: ['PME Familiales', 'Artisanat', 'Services B2B', 'Manufacturing'],
      advantages: ['Flexibilité', 'Spécialisation', 'Proximité client', 'Innovation'],
      icon: '🔧'
    }
  ];

  const successStories = [
    {
      client: 'Entreprise Logistique Pétange',
      challenge: 'Optimisation routes et acquisition clients internationaux',
      solution: 'Plateforme digitale, tracking temps réel, marketing B2B multi-pays',
      results: '+300% efficacité routing, 50+ nouveaux clients EU, -25% coûts logistiques',
      category: 'Logistique',
      scope: 'International'
    },
    {
      client: 'Commerce Transfrontalier',
      challenge: 'Expansion France-Belgique et gestion multi-devises',
      solution: 'E-commerce multi-pays, marketing géolocalisé, solutions paiement',
      results: 'Expansion 2 nouveaux pays, +200% CA international, automatisation complète',
      category: 'Commerce',
      scope: 'Cross-Border'
    },
    {
      client: 'PME Services Régionale',
      challenge: 'Modernisation et compétitivité face aux grands groupes',
      solution: 'Transformation digitale, branding professionnel, lead generation',
      results: 'Doublement CA, modernisation processus, prix PME innovation',
      category: 'Services B2B',
      scope: 'Régional'
    }
  ];

  const borderAdvantages = [
    {
      title: 'Position Stratégique Frontalière',
      description: 'Accès direct aux marchés français et belges créant des opportunités commerciales uniques.',
      benefit: 'Marché élargi et diversification des revenus'
    },
    {
      title: 'Hub Logistique Naturel',
      description: 'Infrastructure de transport optimale pour la distribution européenne.',
      benefit: 'Efficacité logistique et avantages compétitifs'
    },
    {
      title: 'Écosystème Business International',
      description: 'Communauté d\'entreprises habituées aux échanges transfrontaliers.',
      benefit: 'Networking international et expertise cross-border'
    },
    {
      title: 'Flexibilité Réglementaire',
      description: 'Connaissance des réglementations multiples et adaptation facilitée.',
      benefit: 'Compliance multi-pays et expansion simplifiée'
    }
  ];

  const crossBorderServices = [
    {
      title: 'Marketing Cross-Border',
      description: 'Stratégies marketing adaptées aux marchés multiples et cultures diverses',
      features: ['Marketing Multi-Pays', 'Localisation Contenu', 'Campagnes Géolocalisées', 'Cultural Adaptation'],
      markets: 'France, Belgique, Luxembourg'
    },
    {
      title: 'E-commerce International',
      description: 'Solutions de vente en ligne pour marchés transfrontaliers',
      features: ['Plateformes Multi-Devises', 'Logistique Cross-Border', 'Paiements Internationaux', 'Support Multilingue'],
      markets: 'Europe Occidentale'
    },
    {
      title: 'Logistique Digitale',
      description: 'Optimisation et digitalisation des chaînes logistiques',
      features: ['Tracking Temps Réel', 'Optimisation Routes', 'Gestion Stocks', 'Analytics Logistique'],
      markets: 'Transport & Distribution'
    },
    {
      title: 'Business Development',
      description: 'Accompagnement expansion et développement international',
      features: ['Études de Marché', 'Stratégie Expansion', 'Networking International', 'Support Réglementaire'],
      markets: 'PME en Croissance'
    }
  ];

  const crossBorderNetworking = [
    {
      name: 'Chambre Commerce Franco-Luxembourgeoise',
      focus: 'Relations commerciales France-Luxembourg',
      benefits: ['Networking binational', 'Support expansion', 'Veille réglementaire'],
      opportunities: 'Accès marchés français et conseils cross-border'
    },
    {
      name: 'Association Logistique Grande Région',
      focus: 'Secteur logistique et transport',
      benefits: ['Innovation logistique', 'Partenariats', 'Formation spécialisée'],
      opportunities: 'Optimisation supply chain et nouvelles technologies'
    },
    {
      name: 'Cluster Export Luxembourg',
      focus: 'Développement export et international',
      benefits: ['Accompagnement export', 'Missions commerciales', 'Financement'],
      opportunities: 'Expansion internationale et soutien public'
    }
  ];

  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="relative pt-20 pb-20 px-4 sm:pt-24 sm:pb-24 sm:px-6 lg:pt-32 lg:pb-32 overflow-hidden">
        <div 
          className="absolute inset-0 bg-cover bg-center bg-no-repeat"
          style={{
            backgroundImage: `url('https://images.unsplash.com/photo-1541873676-a18131494184?ixlib=rb-4.0.3&auto=format&fit=crop&w=2018&q=80')`
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
                🌍 PÉTANGE • PORTE D'ENTRÉE INTERNATIONALE
              </span>
            </motion.div>
            
            <motion.h1 variants={fadeInUp} className="text-5xl md:text-7xl font-bold mb-8 max-w-6xl mx-auto leading-tight">
              Marketing Digital{' '}
              <span className="text-brand">
                Cross-Border
              </span>{' '}
              Pétange
            </motion.h1>
            
            <motion.p variants={fadeInUp} className="text-xl md:text-2xl mb-12 max-w-4xl mx-auto text-gray-200 leading-relaxed">
              Spécialistes du marketing transfrontalier pour entreprises de Pétange. Logistique, commerce international 
              et services cross-border vers la France et la Belgique. Votre partenaire pour l'expansion européenne.
            </motion.p>
            
            <motion.div variants={fadeInUp} className="flex flex-col md:flex-row gap-6 justify-center items-center">
              <motion.a 
                href="/consultation-gratuite"
                whileHover={{ scale: 1.05, y: -2 }}
                whileTap={{ scale: 0.95 }}
                className="bg-brand text-gray-900 px-10 py-4 rounded-lg font-bold text-lg shadow-xl hover:shadow-2xl transition-all duration-300 inline-flex items-center"
              >
                Stratégie Cross-Border
                <span className="ml-2">🌍</span>
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

      {/* Cross-Border Sectors */}
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
                BUSINESS TRANSFRONTALIER
              </span>
            </motion.div>
            <motion.h2 variants={fadeInUp} className="text-4xl md:text-5xl font-bold mb-6 text-gray-900">
              Secteurs Cross-Border Pétange
            </motion.h2>
            <motion.p variants={fadeInUp} className="text-xl max-w-4xl mx-auto text-gray-600 leading-relaxed">
              Position stratégique unique à la frontière offrant un accès privilégié 
              aux marchés français, belges et de la Grande Région.
            </motion.p>
          </motion.div>

          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={staggerChildren}
            className="grid lg:grid-cols-2 gap-8"
          >
            {crossBorderSectors.map((sector, index) => (
              <motion.div
                key={index}
                variants={fadeInUp}
                className="bg-white p-8 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300"
              >
                <div className="flex items-start mb-6">
                  <div className="text-4xl mr-4">{sector.icon}</div>
                  <div>
                    <h3 className="text-2xl font-bold text-gray-900 mb-2">{sector.name}</h3>
                    <p className="text-gray-600">{sector.description}</p>
                  </div>
                </div>
                
                <div className="space-y-4">
                  <div>
                    <h4 className="font-semibold text-gray-900 mb-2">💡 Opportunités Marketing :</h4>
                    <p className="text-gray-700 text-sm">{sector.opportunities}</p>
                  </div>
                  
                  <div>
                    <h4 className="font-semibold text-gray-900 mb-2">🎯 Marchés Cibles :</h4>
                    <div className="flex flex-wrap gap-2">
                      {sector.markets.map((market, idx) => (
                        <span key={idx} className="bg-gray-100 text-gray-700 px-3 py-1 rounded-full text-xs font-medium">
                          {market}
                        </span>
                      ))}
                    </div>
                  </div>
                  
                  <div>
                    <h4 className="font-semibold text-gray-900 mb-2">✅ Avantages :</h4>
                    <div className="flex flex-wrap gap-2">
                      {sector.advantages.map((advantage, idx) => (
                        <span key={idx} className="bg-brand/20 text-gray-800 px-3 py-1 rounded-full text-xs font-medium">
                          {advantage}
                        </span>
                      ))}
                    </div>
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
                SUCCÈS CROSS-BORDER
              </span>
            </motion.div>
            <motion.h2 variants={fadeInUp} className="text-4xl md:text-5xl font-bold mb-6 text-gray-900">
              Expansions Internationales Réussies
            </motion.h2>
            <motion.p variants={fadeInUp} className="text-xl max-w-4xl mx-auto text-gray-600 leading-relaxed">
              Comment nous avons accompagné des entreprises de Pétange 
              dans leur développement transfrontalier et international.
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
                    <div className="flex items-center gap-2 mb-4">
                      <span className="inline-block bg-brand text-gray-900 px-3 py-1 rounded-full text-xs font-bold">
                        {story.category}
                      </span>
                      <span className="inline-block bg-gray-200 text-gray-800 px-3 py-1 rounded-full text-xs font-bold">
                        {story.scope}
                      </span>
                    </div>
                    <h3 className="text-2xl font-bold text-gray-900 mb-4">{story.client}</h3>
                    <div className="space-y-4">
                      <div>
                        <h4 className="font-semibold text-gray-900 mb-2">🎯 Challenge :</h4>
                        <p className="text-gray-700 text-sm">{story.challenge}</p>
                      </div>
                      <div>
                        <h4 className="font-semibold text-gray-900 mb-2">💡 Solution :</h4>
                        <p className="text-gray-700 text-sm">{story.solution}</p>
                      </div>
                    </div>
                  </div>
                  
                  <div className="lg:col-span-2">
                    <h4 className="font-semibold text-gray-900 mb-4">🚀 Résultats Cross-Border :</h4>
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

      {/* Border Advantages */}
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
                AVANTAGES FRONTALIERS
              </span>
            </motion.div>
            <motion.h2 variants={fadeInUp} className="text-4xl md:text-5xl font-bold mb-6 text-gray-900">
              Pourquoi Pétange pour l'International ?
            </motion.h2>
            <motion.p variants={fadeInUp} className="text-xl max-w-4xl mx-auto text-gray-600 leading-relaxed">
              Une position géographique exceptionnelle offrant des avantages uniques 
              pour les entreprises à vocation internationale.
            </motion.p>
          </motion.div>

          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={staggerChildren}
            className="grid md:grid-cols-2 gap-8"
          >
            {borderAdvantages.map((advantage, index) => (
              <motion.div
                key={index}
                variants={fadeInUp}
                className="bg-white p-8 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300"
              >
                <h3 className="text-xl font-bold text-gray-900 mb-4">{advantage.title}</h3>
                <p className="text-gray-600 mb-4 leading-relaxed">{advantage.description}</p>
                <div className="pt-4 border-t border-gray-200">
                  <span className="inline-block bg-brand/20 text-gray-800 px-3 py-1 rounded-full text-sm font-medium">
                    ✅ {advantage.benefit}
                  </span>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Cross-Border Services */}
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
                SERVICES INTERNATIONAUX
              </span>
            </motion.div>
            <motion.h2 variants={fadeInUp} className="text-4xl md:text-5xl font-bold mb-6 text-gray-900">
              Marketing Cross-Border Pétange
            </motion.h2>
            <motion.p variants={fadeInUp} className="text-xl max-w-4xl mx-auto text-gray-600 leading-relaxed">
              Services marketing spécialisés pour l'expansion transfrontalière 
              et le développement international depuis Pétange.
            </motion.p>
          </motion.div>

          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={staggerChildren}
            className="grid md:grid-cols-2 gap-8"
          >
            {crossBorderServices.map((service, index) => (
              <motion.div
                key={index}
                variants={fadeInUp}
                className="bg-gray-50 p-8 rounded-2xl hover:shadow-lg transition-all duration-300"
              >
                <div className="flex justify-between items-start mb-4">
                  <h3 className="text-2xl font-bold text-gray-900">{service.title}</h3>
                  <span className="bg-brand text-gray-900 px-3 py-1 rounded-full text-xs font-bold">
                    {service.markets}
                  </span>
                </div>
                <p className="text-gray-600 mb-6 leading-relaxed">{service.description}</p>
                
                <div>
                  <h4 className="font-semibold text-gray-900 mb-3">Services inclus :</h4>
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

      {/* Cross-Border Networking */}
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
                RÉSEAU INTERNATIONAL
              </span>
            </motion.div>
            <motion.h2 variants={fadeInUp} className="text-4xl md:text-5xl font-bold mb-6 text-gray-900">
              Écosystème Cross-Border Pétange
            </motion.h2>
            <motion.p variants={fadeInUp} className="text-xl max-w-4xl mx-auto text-gray-600 leading-relaxed">
              Connectez-vous avec les réseaux et organisations facilitant 
              le développement transfrontalier depuis Pétange.
            </motion.p>
          </motion.div>

          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={staggerChildren}
            className="grid lg:grid-cols-3 gap-8"
          >
            {crossBorderNetworking.map((network, index) => (
              <motion.div
                key={index}
                variants={fadeInUp}
                className="bg-white p-6 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300"
              >
                <h3 className="text-xl font-bold text-gray-900 mb-2">{network.name}</h3>
                <p className="text-brand font-semibold mb-3">{network.focus}</p>
                
                <div className="space-y-3">
                  <div>
                    <h4 className="font-semibold text-gray-900 mb-2">Bénéfices :</h4>
                    <ul className="space-y-1">
                      {network.benefits.map((benefit, idx) => (
                        <li key={idx} className="text-gray-700 text-sm flex items-center">
                          <div className="w-1.5 h-1.5 rounded-full bg-brand mr-2 flex-shrink-0"></div>
                          {benefit}
                        </li>
                      ))}
                    </ul>
                  </div>
                  
                  <div className="pt-3 border-t border-gray-200">
                    <span className="inline-block bg-brand/20 text-gray-800 px-2 py-1 rounded text-xs font-medium">
                      🌍 {network.opportunities}
                    </span>
                  </div>
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
            backgroundImage: `url('https://images.unsplash.com/photo-1578662996442-48f60103fc96?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80')`
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
              Expandez à l'International depuis{' '}
              <span className="text-brand">
                Pétange
              </span>
            </motion.h2>
            <motion.p variants={fadeInUp} className="text-xl mb-10 max-w-4xl mx-auto text-gray-200 leading-relaxed">
              Profitez de la position stratégique de Pétange pour développer votre business 
              en France, Belgique et dans toute l'Europe. Consultation cross-border gratuite.
            </motion.p>
            
            <motion.div variants={fadeInUp} className="grid md:grid-cols-2 gap-8 mb-12">
              <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-6">
                <h3 className="text-xl font-bold text-white mb-4">🌍 Spécialiste Cross-Border</h3>
                <div className="space-y-2 text-gray-200">
                  <p>✅ Marketing International</p>
                  <p>✅ E-commerce Multi-Pays</p>
                  <p>✅ Logistique Digitale</p>
                  <p>✅ Expansion Européenne</p>
                </div>
              </div>
              
              <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-6">
                <h3 className="text-xl font-bold text-white mb-4">📍 Contact Pétange</h3>
                <div className="space-y-2 text-gray-200">
                  <p>📧 petange@wedid.lu</p>
                  <p>📞 +352 12 34 56 789</p>
                  <p>🕒 Lun-Ven: 8h00-18h00</p>
                  <p>🚗 Frontière FR-BE-LU</p>
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
                Stratégie Cross-Border
                <span className="ml-2">🌍</span>
              </motion.a>
              <motion.a 
                whileHover={{ scale: 1.05, y: -2 }}
                href="/services" 
                className="inline-flex items-center justify-center text-white border-2 border-white px-12 py-4 rounded-lg hover:bg-white hover:text-gray-900 transition-all duration-300 font-bold"
              >
                Services Internationaux
              </motion.a>
            </motion.div>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default PetangePage;