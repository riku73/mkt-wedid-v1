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

const DudelangePage = () => {
  const stats = [
    { number: '900+', label: 'Entreprises locales', icon: '🏪' },
    { number: '21,000', label: 'Habitants', icon: '👥' },
    { number: '€1.4B', label: 'PIB local', icon: '💰' },
    { number: '35%', label: 'Commerce de proximité', icon: '🛍️' }
  ];

  const businessSectors = [
    {
      name: 'Commerce de Proximité',
      description: 'Magasins locaux, services aux particuliers, commerces de quartier',
      opportunities: 'E-commerce local, marketing géolocalisé, fidélisation client',
      examples: ['Commerces Centre-Ville', 'Restaurants Locaux', 'Services Personnels'],
      strategies: ['Local SEO', 'Social Commerce', 'Loyalty Programs', 'Community Building'],
      icon: '🛍️'
    },
    {
      name: 'Services Municipaux',
      description: 'Administration locale, services publics, équipements communautaires',
      opportunities: 'Communication citoyenne, services digitaux, engagement communautaire',
      examples: ['Mairie Dudelange', 'Services Publics', 'Centre Culturel'],
      strategies: ['Civic Tech', 'Digital Services', 'Community Engagement', 'Public Communication'],
      icon: '🏛️'
    },
    {
      name: 'PME Régionales',
      description: 'Entreprises familiales, artisanat, services B2B locaux',
      opportunities: 'Digitalisation, expansion régionale, marketing B2B',
      examples: ['Artisans Locaux', 'PME Familiales', 'Services B2B'],
      strategies: ['Digital Transformation', 'B2B Marketing', 'Regional Expansion', 'Online Presence'],
      icon: '🔧'
    },
    {
      name: 'Industrie Diversifiée',
      description: 'Manufacturing local, production, industrie légère',
      opportunities: 'Modernisation, automatisation, marketing industriel',
      examples: ['Producteurs Locaux', 'Manufacturing', 'Industrie Légère'],
      strategies: ['Industry 4.0', 'Process Optimization', 'Industrial Marketing', 'Supply Chain'],
      icon: '⚙️'
    }
  ];

  const successStories = [
    {
      client: 'Commerce Multi-Générationnel Dudelange',
      challenge: 'Adaptation au digital et concurrence e-commerce',
      solution: 'Boutique en ligne, stratégie omnicanal, programme fidélité digital',
      results: '+150% ventes online, +30% trafic magasin, 1500+ clients fidèles',
      category: 'Commerce Local',
      impact: 'Transformation Digitale'
    },
    {
      client: 'PME Services Régionale',
      challenge: 'Expansion géographique et acquisition nouveaux marchés',
      solution: 'Site web professionnel, SEO régional, content marketing B2B',
      results: 'Expansion 3 nouvelles régions, +200% leads qualifiés, +80% CA',
      category: 'Services B2B',
      impact: 'Croissance Régionale'
    },
    {
      client: 'Artisan Local Traditionnel',
      challenge: 'Modernisation image et attraction jeune clientèle',
      solution: 'Rebranding, présence digitale, storytelling artisanal',
      results: 'Rajeunissement clientèle, +250% visibilité, prix artisan année',
      category: 'Artisanat',
      impact: 'Modernisation'
    }
  ];

  const dudelangeStrengths = [
    {
      title: 'Équilibre Résidentiel-Commercial',
      description: 'Parfait équilibre entre zone résidentielle et commerciale créant un marché local dynamique.',
      advantage: 'Clientèle locale fidèle et marché de proximité stable'
    },
    {
      title: 'Identité Communautaire Forte',
      description: 'Forte cohésion sociale et identité locale favorisant les commerces et services de proximité.',
      advantage: 'Marketing communautaire efficace et bouche-à-oreille naturel'
    },
    {
      title: 'Position Stratégique Sud',
      description: 'Hub régional connectant plusieurs communes et favorisant les échanges commerciaux.',
      advantage: 'Marché élargi et opportunités de développement régional'
    },
    {
      title: 'Diversification Économique',
      description: 'Économie diversifiée résistante aux fluctuations sectorielles.',
      advantage: 'Stabilité business et opportunités multi-sectorielles'
    }
  ];

  const localServices = [
    {
      title: 'Marketing Commerce Local',
      description: 'Solutions complètes pour commerces de proximité et services locaux',
      features: ['E-commerce Local', 'Click & Collect', 'Programme Fidélité', 'Marketing Géolocalisé'],
      targets: 'Commerces, Restaurants, Services'
    },
    {
      title: 'Services Publics Digitaux',
      description: 'Communication et services numériques pour administrations locales',
      features: ['Sites Institutionnels', 'Services en Ligne', 'Communication Citoyenne', 'Engagement Communautaire'],
      targets: 'Administrations, Associations'
    },
    {
      title: 'PME Expansion Régionale',
      description: 'Accompagnement croissance pour PME vers marchés régionaux',
      features: ['Stratégie Expansion', 'Marketing Multi-Local', 'Lead Generation', 'Brand Building'],
      targets: 'PME, Artisans, Services B2B'
    },
    {
      title: 'Transformation Digitale',
      description: 'Modernisation complète des processus et présence digitale',
      features: ['Audit Digital', 'Process Optimization', 'Formation Équipes', 'Support Continue'],
      targets: 'Toutes Entreprises'
    }
  ];

  const communityInitiatives = [
    {
      name: 'Association Commerçants Dudelange',
      focus: 'Promotion commerce local',
      activities: ['Événements saisonniers', 'Campagnes collectives', 'Networking local'],
      benefits: 'Visibilité partagée et actions marketing communes'
    },
    {
      name: 'Centre Culturel et Social',
      focus: 'Animation communautaire',
      activities: ['Événements culturels', 'Formations', 'Rencontres citoyennes'],
      benefits: 'Engagement communautaire et communication locale'
    },
    {
      name: 'Chambre des Métiers Région',
      focus: 'Support artisans et PME',
      activities: ['Formation continue', 'Certification qualité', 'Réseautage professionnel'],
      benefits: 'Développement compétences et networking B2B'
    }
  ];

  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="relative overflow-hidden pt-32 pb-24">
        <div 
          className="absolute inset-0 bg-cover bg-center bg-no-repeat"
          style={{
            backgroundImage: `url('https://images.unsplash.com/photo-1486755019813-b4c3035b33c0?ixlib=rb-4.0.3&auto=format&fit=crop&w=2025&q=80')`
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
                🏘️ DUDELANGE • HUB RÉGIONAL DYNAMIQUE
              </span>
            </motion.div>
            
            <motion.h1 variants={fadeInUp} className="text-5xl md:text-7xl font-bold mb-8 max-w-6xl mx-auto leading-tight">
              Marketing Digital{' '}
              <span className="text-brand">
                Commerce Local
              </span>{' '}
              Dudelange
            </motion.h1>
            
            <motion.p variants={fadeInUp} className="text-xl md:text-2xl mb-12 max-w-4xl mx-auto text-gray-200 leading-relaxed">
              Spécialistes du marketing de proximité pour commerces locaux, PME régionales et services municipaux 
              de Dudelange. Votre partenaire pour développer votre business dans la communauté locale.
            </motion.p>
            
            <motion.div variants={fadeInUp} className="flex flex-col md:flex-row gap-6 justify-center items-center">
              <motion.a 
                href="/consultation-gratuite"
                whileHover={{ scale: 1.05, y: -2 }}
                whileTap={{ scale: 0.95 }}
                className="bg-brand text-gray-900 px-10 py-4 rounded-lg font-bold text-lg shadow-xl hover:shadow-2xl transition-all duration-300 inline-flex items-center"
              >
                Consultation Commerce Local
                <span className="ml-2">🛍️</span>
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

      {/* Business Sectors */}
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
                ÉCONOMIE LOCALE
              </span>
            </motion.div>
            <motion.h2 variants={fadeInUp} className="text-4xl md:text-5xl font-bold mb-6 text-gray-900">
              Secteurs d'Activité Dudelange
            </motion.h2>
            <motion.p variants={fadeInUp} className="text-xl max-w-4xl mx-auto text-gray-600 leading-relaxed">
              Une économie diversifiée centrée sur le commerce de proximité, les services municipaux 
              et les PME régionales avec une forte identité communautaire.
            </motion.p>
          </motion.div>

          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={staggerChildren}
            className="grid lg:grid-cols-2 gap-8"
          >
            {businessSectors.map((sector, index) => (
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
                    <h4 className="font-semibold text-gray-900 mb-2">🏢 Exemples Locaux :</h4>
                    <div className="flex flex-wrap gap-2">
                      {sector.examples.map((example, idx) => (
                        <span key={idx} className="bg-gray-100 text-gray-700 px-3 py-1 rounded-full text-xs font-medium">
                          {example}
                        </span>
                      ))}
                    </div>
                  </div>
                  
                  <div>
                    <h4 className="font-semibold text-gray-900 mb-2">📈 Stratégies :</h4>
                    <div className="flex flex-wrap gap-2">
                      {sector.strategies.map((strategy, idx) => (
                        <span key={idx} className="bg-brand/20 text-gray-800 px-3 py-1 rounded-full text-xs font-medium">
                          {strategy}
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
                SUCCÈS DUDELANGE
              </span>
            </motion.div>
            <motion.h2 variants={fadeInUp} className="text-4xl md:text-5xl font-bold mb-6 text-gray-900">
              Réussites Commerce Local
            </motion.h2>
            <motion.p variants={fadeInUp} className="text-xl max-w-4xl mx-auto text-gray-600 leading-relaxed">
              Comment nous avons accompagné des entreprises locales de Dudelange 
              dans leur développement et modernisation.
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
                        {story.impact}
                      </span>
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
                    <h4 className="font-semibold text-gray-900 mb-4">📈 Résultats & Impact :</h4>
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

      {/* Dudelange Strengths */}
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
                ATOUTS DUDELANGE
              </span>
            </motion.div>
            <motion.h2 variants={fadeInUp} className="text-4xl md:text-5xl font-bold mb-6 text-gray-900">
              Pourquoi Dudelange pour votre Business ?
            </motion.h2>
            <motion.p variants={fadeInUp} className="text-xl max-w-4xl mx-auto text-gray-600 leading-relaxed">
              Un environnement business équilibré offrant stabilité et opportunités 
              de croissance dans un cadre communautaire fort.
            </motion.p>
          </motion.div>

          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={staggerChildren}
            className="grid md:grid-cols-2 gap-8"
          >
            {dudelangeStrengths.map((strength, index) => (
              <motion.div
                key={index}
                variants={fadeInUp}
                className="bg-white p-8 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300"
              >
                <h3 className="text-xl font-bold text-gray-900 mb-4">{strength.title}</h3>
                <p className="text-gray-600 mb-4 leading-relaxed">{strength.description}</p>
                <div className="pt-4 border-t border-gray-200">
                  <span className="inline-block bg-brand/20 text-gray-800 px-3 py-1 rounded-full text-sm font-medium">
                    ✅ {strength.advantage}
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
                SERVICES LOCAUX
              </span>
            </motion.div>
            <motion.h2 variants={fadeInUp} className="text-4xl md:text-5xl font-bold mb-6 text-gray-900">
              Marketing Adapté à Dudelange
            </motion.h2>
            <motion.p variants={fadeInUp} className="text-xl max-w-4xl mx-auto text-gray-600 leading-relaxed">
              Solutions marketing personnalisées pour l'écosystème business local 
              et les spécificités communautaires de Dudelange.
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
                <div className="flex justify-between items-start mb-4">
                  <h3 className="text-2xl font-bold text-gray-900">{service.title}</h3>
                  <span className="bg-brand text-gray-900 px-3 py-1 rounded-full text-xs font-bold">
                    {service.targets}
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

      {/* Community Initiatives */}
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
                COMMUNAUTÉ LOCALE
              </span>
            </motion.div>
            <motion.h2 variants={fadeInUp} className="text-4xl md:text-5xl font-bold mb-6 text-gray-900">
              Écosystème Communautaire Dudelange
            </motion.h2>
            <motion.p variants={fadeInUp} className="text-xl max-w-4xl mx-auto text-gray-600 leading-relaxed">
              Connectez-vous avec les initiatives locales qui renforcent 
              l'économie et la cohésion sociale de Dudelange.
            </motion.p>
          </motion.div>

          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={staggerChildren}
            className="grid lg:grid-cols-3 gap-8"
          >
            {communityInitiatives.map((initiative, index) => (
              <motion.div
                key={index}
                variants={fadeInUp}
                className="bg-white p-6 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300"
              >
                <h3 className="text-xl font-bold text-gray-900 mb-2">{initiative.name}</h3>
                <p className="text-brand font-semibold mb-3">{initiative.focus}</p>
                
                <div className="space-y-3">
                  <div>
                    <h4 className="font-semibold text-gray-900 mb-2">Activités :</h4>
                    <ul className="space-y-1">
                      {initiative.activities.map((activity, idx) => (
                        <li key={idx} className="text-gray-700 text-sm flex items-center">
                          <div className="w-1.5 h-1.5 rounded-full bg-brand mr-2 flex-shrink-0"></div>
                          {activity}
                        </li>
                      ))}
                    </ul>
                  </div>
                  
                  <div className="pt-3 border-t border-gray-200">
                    <span className="inline-block bg-brand/20 text-gray-800 px-2 py-1 rounded text-xs font-medium">
                      💡 {initiative.benefits}
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
            backgroundImage: `url('https://images.unsplash.com/photo-1573164713988-8665fc963095?ixlib=rb-4.0.3&auto=format&fit=crop&w=2069&q=80')`
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
              Développez Votre Commerce à{' '}
              <span className="text-brand">
                Dudelange
              </span>
            </motion.h2>
            <motion.p variants={fadeInUp} className="text-xl mb-10 max-w-4xl mx-auto text-gray-200 leading-relaxed">
              Profitez de l'écosystème communautaire de Dudelange pour faire croître votre business local. 
              Consultation gratuite pour analyser vos opportunités dans la région.
            </motion.p>
            
            <motion.div variants={fadeInUp} className="grid md:grid-cols-2 gap-8 mb-12">
              <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-6">
                <h3 className="text-xl font-bold text-white mb-4">🛍️ Spécialiste Commerce Local</h3>
                <div className="space-y-2 text-gray-200">
                  <p>✅ E-commerce Proximité</p>
                  <p>✅ Marketing Géolocalisé</p>
                  <p>✅ Services Publics Digitaux</p>
                  <p>✅ Expansion Régionale</p>
                </div>
              </div>
              
              <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-6">
                <h3 className="text-xl font-bold text-white mb-4">📍 Contact Dudelange</h3>
                <div className="space-y-2 text-gray-200">
                  <p>📧 dudelange@wedid.lu</p>
                  <p>📞 +352 12 34 56 789</p>
                  <p>🕒 Lun-Ven: 8h30-18h00</p>
                  <p>🚗 Parking Centre-Ville</p>
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
                Consultation Commerce Local
                <span className="ml-2">🛍️</span>
              </motion.a>
              <motion.a 
                whileHover={{ scale: 1.05, y: -2 }}
                href="/services" 
                className="inline-flex items-center justify-center text-white border-2 border-white px-12 py-4 rounded-lg hover:bg-white hover:text-gray-900 transition-all duration-300 font-bold"
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

export default DudelangePage;