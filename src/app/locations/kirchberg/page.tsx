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

const KirchbergPage = () => {
  const stats = [
    { number: '3,000+', label: 'Entreprises Tech', icon: '💻' },
    { number: '8,000', label: 'Professionnels', icon: '👥' },
    { number: '€12B', label: 'PIB Tech', icon: '🚀' },
    { number: '85%', label: 'Startups Digitales', icon: '⚡' }
  ];

  const techEcosystem = [
    {
      name: 'Institutions Européennes',
      description: 'Parlement européen, institutions UE, organismes internationaux',
      opportunities: 'Communication institutionnelle, relations publiques, événementiel',
      companies: ['Parlement Européen', 'Cour de Justice UE', 'Eurostat'],
      focusAreas: ['Public Affairs', 'Institutional Communication', 'EU Relations'],
      icon: '🇪🇺'
    },
    {
      name: 'Fintech & Innovation',
      description: 'Startups fintech, centres d\'innovation, labs digitaux',
      opportunities: 'Growth marketing, product marketing, fundraising support',
      companies: ['Tokeny', 'Scorechain', 'Fundshop'],
      focusAreas: ['Growth Hacking', 'Product Marketing', 'Investor Relations'],
      icon: '🏦'
    },
    {
      name: 'Tech & Software',
      description: 'Développement logiciel, SaaS, solutions enterprise',
      opportunities: 'B2B marketing, lead generation, content marketing technique',
      companies: ['Docler Holding', 'Telindus', 'Proximus'],
      focusAreas: ['B2B Sales', 'Technical Content', 'SaaS Marketing'],
      icon: '⚙️'
    },
    {
      name: 'R&D & Innovation',
      description: 'Centres de recherche, universités, think tanks',
      opportunities: 'Thought leadership, academic partnerships, innovation showcasing',
      companies: ['Université du Luxembourg', 'LIST', 'LISER'],
      focusAreas: ['Research Marketing', 'Academic Outreach', 'Innovation'],
      icon: '🔬'
    }
  ];

  const successStories = [
    {
      client: 'Startup Fintech Kirchberg',
      challenge: 'Levée de fonds série A et acquisition clients entreprises',
      solution: 'Stratégie marketing 360°: pitch deck, site web, content marketing, PR',
      results: '€5M levés, 150+ prospects qualifiés, coverage TechCrunch et Paperjam',
      industry: 'Fintech',
      stage: 'Series A'
    },
    {
      client: 'Centre Innovation Européen',
      challenge: 'Visibilité des programmes d\'innovation et attraction startups',
      solution: 'Plateforme digitale, SEO multilingue, campagnes LinkedIn ciblées',
      results: '+300% candidatures, 50+ startups incubées, coverage média internationale',
      industry: 'Innovation Hub',
      stage: 'Growth'
    },
    {
      client: 'SaaS B2B Enterprise',
      challenge: 'Expansion marché européen depuis Luxembourg',
      solution: 'Marketing automation, content multilingue, account-based marketing',
      results: '200+ leads qualifiés/mois, €2M ARR, expansion 8 pays européens',
      industry: 'SaaS',
      stage: 'Scale-up'
    }
  ];

  const kirchbergAdvantages = [
    {
      title: 'Écosystème Innovation Dense',
      description: 'Concentration unique de startups, scale-ups et centres de R&D dans un périmètre réduit.',
      benefit: 'Networking facilité et synergies business naturelles'
    },
    {
      title: 'Proximité Institutions EU',
      description: 'Accès direct aux décideurs européens et aux programmes de financement innovation.',
      benefit: 'Opportunités de développement à l\'échelle européenne'
    },
    {
      title: 'Talent Tech International',
      description: 'Pool de talents tech multilingues et multiculturels unique en Europe.',
      benefit: 'Équipes diverses et capacités d\'expansion internationale'
    },
    {
      title: 'Infrastructure Digitale',
      description: 'Connectivité fiber, data centers, infrastructure cloud de pointe.',
      benefit: 'Performance technique optimale et scalabilité'
    }
  ];

  const kirchbergServices = [
    {
      title: 'Growth Marketing Startup',
      description: 'Stratégies de croissance rapide adaptées aux startups tech de Kirchberg',
      features: ['Product-Market Fit', 'Growth Hacking', 'Funnel Optimization', 'Metrics & Analytics'],
      pricing: 'À partir de €2,500/mois'
    },
    {
      title: 'Fundraising Support',
      description: 'Accompagnement marketing pour levées de fonds et présentation investisseurs',
      features: ['Pitch Deck Design', 'Investor Relations', 'PR & Media', 'Brand Positioning'],
      pricing: 'Forfait €8,000-15,000'
    },
    {
      title: 'B2B SaaS Marketing',
      description: 'Marketing spécialisé pour solutions logicielles et plateformes B2B',
      features: ['Content Marketing', 'SEO Technique', 'Account-Based Marketing', 'Sales Enablement'],
      pricing: 'À partir de €3,500/mois'
    },
    {
      title: 'Innovation Showcasing',
      description: 'Mise en valeur des innovations et technologies pour centres R&D',
      features: ['Thought Leadership', 'Technical Content', 'Conference Marketing', 'Awards Strategy'],
      pricing: 'Sur mesure'
    }
  ];

  const meetingSpots = [
    {
      name: 'Kirchberg Business Center',
      type: 'Espace de coworking',
      address: '2 Rue Alphonse Weicker, Kirchberg',
      features: ['Salles de réunion', 'Wifi haut débit', 'Parking', 'Café']
    },
    {
      name: 'Luxembourg Science Center',
      type: 'Centre d\'innovation',
      address: '5 Rue Eugène Ruppert, Kirchberg',
      features: ['Espaces événementiel', 'Tech demos', 'Networking', 'Innovation tours']
    },
    {
      name: 'Philharmonie Luxembourg',
      type: 'Lieu événementiel',
      address: '1 Place de l\'Europe, Kirchberg',
      features: ['Événements corporate', 'Conférences', 'Networking VIP', 'Prestige']
    }
  ];

  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="relative overflow-hidden pt-32 pb-24">
        <div 
          className="absolute inset-0 bg-cover bg-center bg-no-repeat"
          style={{
            backgroundImage: `url('https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80')`
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
                🚀 KIRCHBERG • HUB TECH & INNOVATION
              </span>
            </motion.div>
            
            <motion.h1 variants={fadeInUp} className="text-5xl md:text-7xl font-bold mb-8 max-w-6xl mx-auto leading-tight">
              Marketing Digital pour{' '}
              <span className="text-brand">
                Startups & Scale-ups
              </span>{' '}
              Kirchberg
            </motion.h1>
            
            <motion.p variants={fadeInUp} className="text-xl md:text-2xl mb-12 max-w-4xl mx-auto text-gray-200 leading-relaxed">
              Spécialistes du growth marketing pour l'écosystème innovation de Kirchberg. 
              De la startup au scale-up, nous accélérons votre croissance digitale dans le quartier tech de Luxembourg.
            </motion.p>
            
            <motion.div variants={fadeInUp} className="flex flex-col md:flex-row gap-6 justify-center items-center">
              <motion.a 
                href="/consultation-gratuite"
                whileHover={{ scale: 1.05, y: -2 }}
                whileTap={{ scale: 0.95 }}
                className="bg-brand text-gray-900 px-10 py-4 rounded-lg font-bold text-lg shadow-xl hover:shadow-2xl transition-all duration-300 inline-flex items-center"
              >
                Growth Audit Gratuit
                <span className="ml-2">🚀</span>
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

      {/* Tech Ecosystem */}
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
                ÉCOSYSTÈME TECH
              </span>
            </motion.div>
            <motion.h2 variants={fadeInUp} className="text-4xl md:text-5xl font-bold mb-6 text-gray-900">
              L'Innovation Hub Européen
            </motion.h2>
            <motion.p variants={fadeInUp} className="text-xl max-w-4xl mx-auto text-gray-600 leading-relaxed">
              Kirchberg concentre l'écosystème innovation luxembourgeois : startups, institutions européennes, 
              centres de recherche et scale-ups tech dans un environnement unique.
            </motion.p>
          </motion.div>

          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={staggerChildren}
            className="grid lg:grid-cols-2 gap-8"
          >
            {techEcosystem.map((sector, index) => (
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
                    <h4 className="font-semibold text-gray-900 mb-2">🏢 Acteurs Clés :</h4>
                    <div className="flex flex-wrap gap-2">
                      {sector.companies.map((company, idx) => (
                        <span key={idx} className="bg-gray-100 text-gray-700 px-3 py-1 rounded-full text-xs font-medium">
                          {company}
                        </span>
                      ))}
                    </div>
                  </div>
                  
                  <div>
                    <h4 className="font-semibold text-gray-900 mb-2">🎯 Focus Areas :</h4>
                    <div className="flex flex-wrap gap-2">
                      {sector.focusAreas.map((area, idx) => (
                        <span key={idx} className="bg-brand/20 text-gray-800 px-3 py-1 rounded-full text-xs font-medium">
                          {area}
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
                SUCCÈS KIRCHBERG
              </span>
            </motion.div>
            <motion.h2 variants={fadeInUp} className="text-4xl md:text-5xl font-bold mb-6 text-gray-900">
              Scale-ups qui Nous Font Confiance
            </motion.h2>
            <motion.p variants={fadeInUp} className="text-xl max-w-4xl mx-auto text-gray-600 leading-relaxed">
              Découvrez comment nous avons accompagné des startups et scale-ups de Kirchberg 
              dans leur croissance et leurs levées de fonds.
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
                        {story.stage}
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
                    <h4 className="font-semibold text-gray-900 mb-4">🚀 Impact & Résultats :</h4>
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

      {/* Kirchberg Advantages */}
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
                AVANTAGES KIRCHBERG
              </span>
            </motion.div>
            <motion.h2 variants={fadeInUp} className="text-4xl md:text-5xl font-bold mb-6 text-gray-900">
              Pourquoi Kirchberg pour votre Croissance ?
            </motion.h2>
            <motion.p variants={fadeInUp} className="text-xl max-w-4xl mx-auto text-gray-600 leading-relaxed">
              Le quartier d'affaires moderne de Luxembourg offre un écosystème unique 
              pour les entreprises tech et innovantes.
            </motion.p>
          </motion.div>

          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={staggerChildren}
            className="grid md:grid-cols-2 gap-8"
          >
            {kirchbergAdvantages.map((advantage, index) => (
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

      {/* Kirchberg Services */}
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
              Growth Marketing Kirchberg
            </motion.h2>
            <motion.p variants={fadeInUp} className="text-xl max-w-4xl mx-auto text-gray-600 leading-relaxed">
              Services marketing adaptés aux besoins spécifiques des startups, scale-ups 
              et entreprises tech de Kirchberg.
            </motion.p>
          </motion.div>

          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={staggerChildren}
            className="grid md:grid-cols-2 gap-8"
          >
            {kirchbergServices.map((service, index) => (
              <motion.div
                key={index}
                variants={fadeInUp}
                className="bg-gray-50 p-8 rounded-2xl hover:shadow-lg transition-all duration-300"
              >
                <div className="flex justify-between items-start mb-4">
                  <h3 className="text-2xl font-bold text-gray-900">{service.title}</h3>
                  <span className="bg-brand text-gray-900 px-3 py-1 rounded-full text-xs font-bold">
                    {service.pricing}
                  </span>
                </div>
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

      {/* Meeting Locations */}
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
                LIEUX DE RENCONTRE
              </span>
            </motion.div>
            <motion.h2 variants={fadeInUp} className="text-4xl md:text-5xl font-bold mb-6 text-gray-900">
              Rencontrons-nous à Kirchberg
            </motion.h2>
            <motion.p variants={fadeInUp} className="text-xl max-w-4xl mx-auto text-gray-600 leading-relaxed">
              Plusieurs options pour nos consultations et réunions dans l'écosystème Kirchberg.
            </motion.p>
          </motion.div>

          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={staggerChildren}
            className="grid lg:grid-cols-3 gap-8"
          >
            {meetingSpots.map((spot, index) => (
              <motion.div
                key={index}
                variants={fadeInUp}
                className="bg-white p-6 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300"
              >
                <h3 className="text-xl font-bold text-gray-900 mb-2">{spot.name}</h3>
                <p className="text-brand font-semibold mb-2">{spot.type}</p>
                <p className="text-gray-600 text-sm mb-4">{spot.address}</p>
                
                <div>
                  <h4 className="font-semibold text-gray-900 mb-2">Équipements :</h4>
                  <div className="flex flex-wrap gap-2">
                    {spot.features.map((feature, idx) => (
                      <span key={idx} className="bg-gray-100 text-gray-700 px-2 py-1 rounded text-xs">
                        {feature}
                      </span>
                    ))}
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
            backgroundImage: `url('https://images.unsplash.com/photo-1551434678-e076c223a692?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80')`
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
              Accélérez Votre Croissance à{' '}
              <span className="text-brand">
                Kirchberg
              </span>
            </motion.h2>
            <motion.p variants={fadeInUp} className="text-xl mb-10 max-w-4xl mx-auto text-gray-200 leading-relaxed">
              Rejoignez l'écosystème des startups à succès de Kirchberg. 
              Consultation gratuite pour analyser votre potentiel de croissance.
            </motion.p>
            
            <motion.div variants={fadeInUp} className="grid md:grid-cols-2 gap-8 mb-12">
              <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-6">
                <h3 className="text-xl font-bold text-white mb-4">🚀 Spécialiste Startups</h3>
                <div className="space-y-2 text-gray-200">
                  <p>✅ Growth Marketing</p>
                  <p>✅ Fundraising Support</p>
                  <p>✅ B2B SaaS Marketing</p>
                  <p>✅ Innovation Showcasing</p>
                </div>
              </div>
              
              <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-6">
                <h3 className="text-xl font-bold text-white mb-4">📍 Contact Kirchberg</h3>
                <div className="space-y-2 text-gray-200">
                  <p>📧 kirchberg@wedid.lu</p>
                  <p>📞 +352 12 34 56 789</p>
                  <p>🕒 Lun-Ven: 9h00-19h00</p>
                  <p>🚇 Accès: Tram Kirchberg</p>
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
                Growth Consultation Gratuite
                <span className="ml-2">🚀</span>
              </motion.a>
              <motion.a 
                whileHover={{ scale: 1.05, y: -2 }}
                href="/portfolio" 
                className="inline-flex items-center justify-center text-white border-2 border-white px-12 py-4 rounded-lg hover:bg-white hover:text-gray-900 transition-all duration-300 font-bold"
              >
                Voir nos Success Stories
              </motion.a>
            </motion.div>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default KirchbergPage;