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

const EschSurAlzettePage = () => {
  const stats = [
    { number: '2,500+', label: 'Entreprises locales', icon: '🏪' },
    { number: '36,000', label: 'Habitants', icon: '👥' },
    { number: '€2.8B', label: 'PIB local', icon: '💰' },
    { number: '15%', label: 'Croissance annuelle', icon: '📈' }
  ];

  const keyBusinessSectors = [
    {
      name: 'Industries Créatives & Médias',
      description: 'Studios, agences créatives, production audiovisuelle, design',
      opportunities: 'Marketing créatif, personal branding, événementiel culturel',
      companies: ['Rockhal', 'Studios locaux', 'Agences créatives'],
      trends: ['Digital Art', 'Event Marketing', 'Creative Studios', 'Media Production'],
      icon: '🎨'
    },
    {
      name: 'Commerce & PME Locales',
      description: 'Commerces de proximité, services aux particuliers, PME familiales',
      opportunities: 'Marketing local, e-commerce, présence digitale, fidélisation',
      companies: ['Commerces Centre-Ville', 'PME Familiales', 'Services Locaux'],
      trends: ['Local SEO', 'E-commerce Local', 'Digital Transformation', 'Community Marketing'],
      icon: '🏪'
    },
    {
      name: 'Développement Urbain',
      description: 'Projets immobiliers, architecture, urbanisme, construction',
      opportunities: 'Marketing immobilier, communication projet, visualisation 3D',
      companies: ['Promoteurs Immobiliers', 'Cabinets Architecture', 'Constructeurs'],
      trends: ['PropTech', 'Virtual Tours', 'Project Marketing', 'Sustainable Building'],
      icon: '🏗️'
    },
    {
      name: 'Services Publics & Associatif',
      description: 'Administration communale, associations, services citoyens',
      opportunities: 'Communication publique, engagement citoyen, événementiel',
      companies: ['Commune Esch', 'Associations Locales', 'Services Publics'],
      trends: ['Civic Engagement', 'Public Communication', 'Community Building', 'Digital Services'],
      icon: '🏛️'
    }
  ];

  const successStories = [
    {
      client: 'PME Commerce Local Esch',
      challenge: 'Digitalisation et concurrence des grandes surfaces et e-commerce',
      solution: 'Site e-commerce local, SEO géolocalisé, stratégie réseaux sociaux communautaire',
      results: '+180% ventes online, +45% fréquentation magasin, 2000+ followers locaux',
      industry: 'Commerce Local',
      transformation: 'Digital'
    },
    {
      client: 'Studio Créatif Esch',
      challenge: 'Développement notoriété et acquisition clients régionaux',
      solution: 'Portfolio digital premium, content marketing visuel, networking digital',
      results: '50+ nouveaux clients, +300% visibilité, prix créativité régional',
      industry: 'Créatif',
      transformation: 'Brand Building'
    },
    {
      client: 'Promoteur Immobilier Sud',
      challenge: 'Commercialisation projet résidentiel innovant',
      solution: 'Virtual tours, marketing digital immobilier, campagnes géolocalisées',
      results: '85% pré-ventes, -40% temps commercialisation, coverage presse nationale',
      industry: 'Immobilier',
      transformation: 'PropTech'
    }
  ];

  const eschOpportunities = [
    {
      title: 'Transformation Économique',
      description: 'Passage d\'une économie industrielle à une économie créative et de services.',
      opportunity: 'Accompagner les entreprises dans leur mutation digitale et communication'
    },
    {
      title: 'Proximité Frontalière',
      description: 'Position stratégique près de la France, attractivité transfrontalière croissante.',
      opportunity: 'Marketing international et stratégies cross-border'
    },
    {
      title: 'Développement Culturel',
      description: 'Capitale Européenne de la Culture 2022, dynamisme artistique et événementiel.',
      opportunity: 'Marketing culturel, événementiel et tourisme créatif'
    },
    {
      title: 'Rénovation Urbaine',
      description: 'Grands projets de réaménagement et modernisation des infrastructures.',
      opportunity: 'Communication de projets et marketing immobilier innovant'
    }
  ];

  const localServices = [
    {
      title: 'SEO Local Esch-sur-Alzette',
      description: 'Positionnement local pour capter la clientèle d\'Esch et environs',
      features: ['Mots-clés géolocalisés', 'Google My Business', 'Avis clients', 'Citations locales'],
      target: 'Commerce & Services'
    },
    {
      title: 'E-commerce Local',
      description: 'Solutions de vente en ligne adaptées aux commerces de proximité',
      features: ['Click & Collect', 'Livraison locale', 'Catalogue produits', 'Paiements sécurisés'],
      target: 'PME & Commerces'
    },
    {
      title: 'Marketing Créatif',
      description: 'Stratégies visuelles et créatives pour les secteurs artistiques',
      features: ['Portfolio digital', 'Storytelling visuel', 'Social media créatif', 'Brand artistique'],
      target: 'Industries Créatives'
    },
    {
      title: 'Communication Publique',
      description: 'Solutions pour administrations et associations locales',
      features: ['Sites institutionnels', 'Newsletters', 'Engagement citoyen', 'Événementiel'],
      target: 'Secteur Public'
    }
  ];

  const eschNetworking = [
    {
      name: 'Chambre de Commerce Sud',
      type: 'Réseau Business',
      focus: 'PME et commerces locaux',
      opportunities: ['Networking B2B', 'Formation entreprises', 'Soutien développement']
    },
    {
      name: 'Hub Créatif Esch',
      type: 'Communauté Créative',
      focus: 'Artistes et créateurs',
      opportunities: ['Collaborations créatives', 'Projets culturels', 'Innovation artistique']
    },
    {
      name: 'Association Commerçants',
      type: 'Réseau Commercial',
      focus: 'Commerce de proximité',
      opportunities: ['Actions collectives', 'Événements commerciaux', 'Promotion locale']
    }
  ];

  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="relative pt-20 pb-20 px-4 sm:pt-24 sm:pb-24 sm:px-6 lg:pt-32 lg:pb-32 overflow-hidden">
        <div 
          className="absolute inset-0 bg-cover bg-center bg-no-repeat"
          style={{
            backgroundImage: `url('https://images.unsplash.com/photo-1449824913935-59a10b8d2000?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80')`
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
                🎨 ESCH-SUR-ALZETTE • VILLE EN TRANSFORMATION
              </span>
            </motion.div>
            
            <motion.h1 variants={fadeInUp} className="text-5xl md:text-7xl font-bold mb-8 max-w-6xl mx-auto leading-tight">
              Marketing Digital{' '}
              <span className="text-brand">
                Esch-sur-Alzette
              </span>
            </motion.h1>
            
            <motion.p variants={fadeInUp} className="text-xl md:text-2xl mb-12 max-w-4xl mx-auto text-gray-200 leading-relaxed">
              Accompagnement marketing spécialisé pour les PME, commerces locaux et industries créatives 
              d'Esch-sur-Alzette. Votre partenaire digital dans la deuxième ville du Luxembourg.
            </motion.p>
            
            <motion.div variants={fadeInUp} className="flex flex-col md:flex-row gap-6 justify-center items-center">
              <motion.a 
                href="/consultation-gratuite"
                whileHover={{ scale: 1.05, y: -2 }}
                whileTap={{ scale: 0.95 }}
                className="bg-brand text-gray-900 px-10 py-4 rounded-lg font-bold text-lg shadow-xl hover:shadow-2xl transition-all duration-300 inline-flex items-center"
              >
                Consultation Locale Gratuite
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
                ÉCOSYSTÈME BUSINESS
              </span>
            </motion.div>
            <motion.h2 variants={fadeInUp} className="text-4xl md:text-5xl font-bold mb-6 text-gray-900">
              Secteurs d'Activité à Esch-sur-Alzette
            </motion.h2>
            <motion.p variants={fadeInUp} className="text-xl max-w-4xl mx-auto text-gray-600 leading-relaxed">
              Une économie diversifiée en pleine transformation : du commerce local aux industries créatives, 
              en passant par l'immobilier et les services publics.
            </motion.p>
          </motion.div>

          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={staggerChildren}
            className="grid lg:grid-cols-2 gap-8"
          >
            {keyBusinessSectors.map((sector, index) => (
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
                    <h4 className="font-semibold text-gray-900 mb-2">🏢 Acteurs Locaux :</h4>
                    <div className="flex flex-wrap gap-2">
                      {sector.companies.map((company, idx) => (
                        <span key={idx} className="bg-gray-100 text-gray-700 px-3 py-1 rounded-full text-xs font-medium">
                          {company}
                        </span>
                      ))}
                    </div>
                  </div>
                  
                  <div>
                    <h4 className="font-semibold text-gray-900 mb-2">📈 Tendances :</h4>
                    <div className="flex flex-wrap gap-2">
                      {sector.trends.map((trend, idx) => (
                        <span key={idx} className="bg-brand/20 text-gray-800 px-3 py-1 rounded-full text-xs font-medium">
                          {trend}
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
                SUCCÈS ESCH-SUR-ALZETTE
              </span>
            </motion.div>
            <motion.h2 variants={fadeInUp} className="text-4xl md:text-5xl font-bold mb-6 text-gray-900">
              Transformations Digitales Locales
            </motion.h2>
            <motion.p variants={fadeInUp} className="text-xl max-w-4xl mx-auto text-gray-600 leading-relaxed">
              Découvrez comment nous avons accompagné des entreprises d'Esch-sur-Alzette 
              dans leur digitalisation et leur croissance.
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
                        {story.industry}
                      </span>
                      <span className="inline-block bg-gray-200 text-gray-800 px-3 py-1 rounded-full text-xs font-bold">
                        {story.transformation}
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

      {/* Esch Opportunities */}
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
                OPPORTUNITÉS LOCALES
              </span>
            </motion.div>
            <motion.h2 variants={fadeInUp} className="text-4xl md:text-5xl font-bold mb-6 text-gray-900">
              Pourquoi Esch-sur-Alzette Maintenant ?
            </motion.h2>
            <motion.p variants={fadeInUp} className="text-xl max-w-4xl mx-auto text-gray-600 leading-relaxed">
              Une ville en pleine renaissance offrant de nombreuses opportunités 
              pour les entreprises visionnaires.
            </motion.p>
          </motion.div>

          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={staggerChildren}
            className="grid md:grid-cols-2 gap-8"
          >
            {eschOpportunities.map((opp, index) => (
              <motion.div
                key={index}
                variants={fadeInUp}
                className="bg-white p-8 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300"
              >
                <h3 className="text-xl font-bold text-gray-900 mb-4">{opp.title}</h3>
                <p className="text-gray-600 mb-4 leading-relaxed">{opp.description}</p>
                <div className="pt-4 border-t border-gray-200">
                  <span className="inline-block bg-brand/20 text-gray-800 px-3 py-1 rounded-full text-sm font-medium">
                    💼 {opp.opportunity}
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
              Marketing Adapté à Esch-sur-Alzette
            </motion.h2>
            <motion.p variants={fadeInUp} className="text-xl max-w-4xl mx-auto text-gray-600 leading-relaxed">
              Solutions marketing personnalisées pour les spécificités de l'écosystème business d'Esch.
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
                    {service.target}
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

      {/* Local Networking */}
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
                RÉSEAU LOCAL
              </span>
            </motion.div>
            <motion.h2 variants={fadeInUp} className="text-4xl md:text-5xl font-bold mb-6 text-gray-900">
              Écosystème Business d'Esch
            </motion.h2>
            <motion.p variants={fadeInUp} className="text-xl max-w-4xl mx-auto text-gray-600 leading-relaxed">
              Connectez-vous avec les acteurs clés du développement économique local.
            </motion.p>
          </motion.div>

          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={staggerChildren}
            className="grid lg:grid-cols-3 gap-8"
          >
            {eschNetworking.map((network, index) => (
              <motion.div
                key={index}
                variants={fadeInUp}
                className="bg-white p-6 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300"
              >
                <h3 className="text-xl font-bold text-gray-900 mb-2">{network.name}</h3>
                <p className="text-brand font-semibold mb-2">{network.type}</p>
                <p className="text-gray-600 text-sm mb-4">Focus: {network.focus}</p>
                
                <div>
                  <h4 className="font-semibold text-gray-900 mb-2">Opportunités :</h4>
                  <ul className="space-y-1">
                    {network.opportunities.map((opp, idx) => (
                      <li key={idx} className="text-gray-700 text-sm flex items-center">
                        <div className="w-1.5 h-1.5 rounded-full bg-brand mr-2 flex-shrink-0"></div>
                        {opp}
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
            backgroundImage: `url('https://images.unsplash.com/photo-1486755019813-b4c3035b33c0?ixlib=rb-4.0.3&auto=format&fit=crop&w=2025&q=80')`
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
                Esch-sur-Alzette
              </span>
            </motion.h2>
            <motion.p variants={fadeInUp} className="text-xl mb-10 max-w-4xl mx-auto text-gray-200 leading-relaxed">
              Profitez de la transformation d'Esch pour positionner votre entreprise. 
              Consultation gratuite pour analyser vos opportunités locales.
            </motion.p>
            
            <motion.div variants={fadeInUp} className="grid md:grid-cols-2 gap-8 mb-12">
              <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-6">
                <h3 className="text-xl font-bold text-white mb-4">🎨 Spécialiste PME Locales</h3>
                <div className="space-y-2 text-gray-200">
                  <p>✅ Marketing Local</p>
                  <p>✅ E-commerce Proximité</p>
                  <p>✅ Branding Créatif</p>
                  <p>✅ Communication Publique</p>
                </div>
              </div>
              
              <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-6">
                <h3 className="text-xl font-bold text-white mb-4">📍 Contact Esch</h3>
                <div className="space-y-2 text-gray-200">
                  <p>📧 esch@wedid.lu</p>
                  <p>📞 +352 12 34 56 789</p>
                  <p>🕒 Lun-Ven: 8h30-18h00</p>
                  <p>🚌 Accès: Centre-Ville</p>
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
                Consultation Locale Gratuite
                <span className="ml-2">→</span>
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

export default EschSurAlzettePage;