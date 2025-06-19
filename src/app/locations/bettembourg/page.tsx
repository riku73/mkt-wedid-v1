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

const BettembourgPage = () => {
  const stats = [
    { number: '450+', label: 'Entreprises logistiques', icon: '📦' },
    { number: '10,000', label: 'Habitants', icon: '👥' },
    { number: '€2.2B', label: 'PIB logistique', icon: '💰' },
    { number: '80%', label: 'Secteur logistique', icon: '🚛' }
  ];

  const logisticsSectors = [
    {
      name: 'Hub Logistique Européen',
      description: 'Centre névralgique de distribution pour l\'Europe centrale, connectivité optimale',
      opportunities: 'Supply chain marketing, logistics tech, process optimization, digital transformation',
      connections: ['France', 'Allemagne', 'Belgique', 'Pays-Bas', 'Europe Centrale'],
      capabilities: ['Distribution EU', 'Cross-docking', 'Fulfillment', 'Last-mile'],
      icon: '🌍'
    },
    {
      name: 'E-commerce & Fulfillment',
      description: 'Centres de fulfillment e-commerce, gestion commandes, expédition rapide',
      opportunities: 'E-commerce enablement, automation showcasing, performance analytics',
      connections: ['Amazon', 'E-commerce Platforms', 'Retailers', 'Marketplace'],
      capabilities: ['Order Processing', 'Inventory Management', 'Rapid Shipping', 'Returns Processing'],
      icon: '📱'
    },
    {
      name: 'Transport Multimodal',
      description: 'Rail, route, transport combiné, optimisation des flux',
      opportunities: 'Transport tech, route optimization, sustainability communication',
      connections: ['Rail Network', 'Highway System', 'Intermodal', 'Air Cargo'],
      capabilities: ['Multimodal Transport', 'Route Planning', 'Cargo Handling', 'Time-sensitive'],
      icon: '🚛'
    },
    {
      name: 'Tech & Innovation Logistique',
      description: 'Solutions technologiques, automatisation, IoT, intelligence artificielle',
      opportunities: 'Innovation marketing, tech showcasing, thought leadership, future vision',
      connections: ['Tech Vendors', 'Automation', 'IoT Providers', 'Software'],
      capabilities: ['WMS Systems', 'Robotics', 'AI/ML', 'Predictive Analytics'],
      icon: '🤖'
    }
  ];

  const successStories = [
    {
      client: 'Hub Distribution Européen',
      challenge: 'Optimisation processus et communication performance aux clients',
      solution: 'Dashboard temps réel, KPI tracking, customer portal, process communication',
      results: '+40% efficacité opérationnelle, 99.8% satisfaction client, 15+ nouveaux contrats',
      category: 'Distribution',
      scale: 'European Hub'
    },
    {
      client: 'Centre E-commerce Fulfillment',
      challenge: 'Scaling operations et attraction nouveaux marchands',
      solution: 'Marketing automation, showcase technology, merchant onboarding digital',
      results: '300% augmentation capacity, 50+ nouveaux merchants, expansion 2 sites',
      category: 'E-commerce',
      scale: 'Multi-Country'
    },
    {
      client: 'Logistics Tech Startup',
      challenge: 'Product launch et acquisition clients enterprise',
      solution: 'Go-to-market strategy, thought leadership, demo platform, sales enablement',
      results: '€3M levée série A, 25+ clients enterprise, expansion EU',
      category: 'Tech Innovation',
      scale: 'International'
    }
  ];

  const logisticsAdvantages = [
    {
      title: 'Position Géographique Stratégique',
      description: 'Centre de l\'Europe occidentale avec accès optimal aux marchés européens majeurs.',
      benefit: 'Connectivité européenne optimale et efficacité logistique'
    },
    {
      title: 'Infrastructure Transport Avancée',
      description: 'Réseaux rail, route et multimodal de classe mondiale pour tous types de flux.',
      benefit: 'Flexibilité transport et optimisation coûts'
    },
    {
      title: 'Écosystème Logistique Complet',
      description: 'Concentration de tous les acteurs logistiques : transport, stockage, tech, services.',
      benefit: 'Synergies business et innovation collaborative'
    },
    {
      title: 'Innovation Logistique Active',
      description: 'Adoption rapide des nouvelles technologies et processus d\'automatisation.',
      benefit: 'Avantage compétitif technologique et efficacité'
    }
  ];

  const logisticsServices = [
    {
      title: 'Supply Chain Marketing',
      description: 'Communication et optimisation des chaînes d\'approvisionnement',
      features: ['Process Visualization', 'Performance Dashboards', 'Stakeholder Communication', 'Efficiency Metrics'],
      focus: 'Distribution & Supply Chain'
    },
    {
      title: 'E-commerce Enablement',
      description: 'Solutions marketing pour acteurs e-commerce et fulfillment',
      features: ['Merchant Acquisition', 'Platform Marketing', 'Technology Showcasing', 'Performance Analytics'],
      focus: 'E-commerce & Fulfillment'
    },
    {
      title: 'Logistics Technology Marketing',
      description: 'Promotion solutions tech et innovation logistique',
      features: ['Product Marketing', 'Tech Demonstrations', 'Thought Leadership', 'Innovation Showcasing'],
      focus: 'Technology & Innovation'
    },
    {
      title: 'Transport & Connectivity',
      description: 'Marketing services transport et connectivité européenne',
      features: ['Route Optimization', 'Network Visualization', 'Connectivity Mapping', 'Service Promotion'],
      focus: 'Transport & Connectivity'
    }
  ];

  const logisticsEcosystem = [
    {
      name: 'Luxembourg Logistics',
      focus: 'Promotion secteur logistique',
      benefits: ['Networking sectoriel', 'Promotion internationale', 'Support développement'],
      opportunities: 'Visibilité internationale et développement business'
    },
    {
      name: 'Cluster for Logistics',
      focus: 'Innovation et collaboration',
      benefits: ['Projets collaboratifs', 'Innovation partagée', 'Best practices'],
      opportunities: 'Innovation collaborative et optimisation processus'
    },
    {
      name: 'European Logistics Association',
      focus: 'Standards et réglementation',
      benefits: ['Standards européens', 'Veille réglementaire', 'Certification'],
      opportunities: 'Influence standards et conformité européenne'
    }
  ];

  const connectivityMap = [
    {
      destination: 'Paris',
      distance: '372 km',
      time: '3h30',
      modes: ['Route', 'Rail']
    },
    {
      destination: 'Frankfurt',
      distance: '187 km', 
      time: '2h00',
      modes: ['Route', 'Rail', 'Air']
    },
    {
      destination: 'Amsterdam',
      distance: '378 km',
      time: '3h45',
      modes: ['Route', 'Rail']
    },
    {
      destination: 'Brussels',
      distance: '219 km',
      time: '2h15',
      modes: ['Route', 'Rail']
    }
  ];

  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="relative min-h-[90vh] flex items-center justify-center overflow-hidden pt-20">
        <div 
          className="absolute inset-0 bg-cover bg-center bg-no-repeat"
          style={{
            backgroundImage: `url('https://images.unsplash.com/photo-1494412651409-8963ce7935a7?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80')`
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
                📦 BETTEMBOURG • HUB LOGISTIQUE EUROPÉEN
              </span>
            </motion.div>
            
            <motion.h1 variants={fadeInUp} className="text-5xl md:text-7xl font-bold mb-8 max-w-6xl mx-auto leading-tight">
              Marketing Digital{' '}
              <span className="text-brand">
                Logistique
              </span>{' '}
              Bettembourg
            </motion.h1>
            
            <motion.p variants={fadeInUp} className="text-xl md:text-2xl mb-12 max-w-4xl mx-auto text-gray-200 leading-relaxed">
              Spécialistes du marketing logistique pour le hub européen de Bettembourg. Distribution, e-commerce, 
              transport multimodal et innovation logistique. Votre partenaire pour la communication supply chain.
            </motion.p>
            
            <motion.div variants={fadeInUp} className="flex flex-col md:flex-row gap-6 justify-center items-center">
              <motion.a 
                href="/consultation-gratuite"
                whileHover={{ scale: 1.05, y: -2 }}
                whileTap={{ scale: 0.95 }}
                className="bg-brand text-gray-900 px-10 py-4 rounded-lg font-bold text-lg shadow-xl hover:shadow-2xl transition-all duration-300 inline-flex items-center"
              >
                Stratégie Supply Chain
                <span className="ml-2">📦</span>
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

      {/* Logistics Sectors */}
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
                SECTEURS LOGISTIQUES
              </span>
            </motion.div>
            <motion.h2 variants={fadeInUp} className="text-4xl md:text-5xl font-bold mb-6 text-gray-900">
              Écosystème Logistique Bettembourg
            </motion.h2>
            <motion.p variants={fadeInUp} className="text-xl max-w-4xl mx-auto text-gray-600 leading-relaxed">
              Le hub logistique stratégique du Luxembourg, porte d'entrée de l'Europe centrale 
              pour la distribution, l'e-commerce et les nouvelles technologies logistiques.
            </motion.p>
          </motion.div>

          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={staggerChildren}
            className="grid lg:grid-cols-2 gap-8"
          >
            {logisticsSectors.map((sector, index) => (
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
                    <h4 className="font-semibold text-gray-900 mb-2">🔗 Connexions :</h4>
                    <div className="flex flex-wrap gap-2">
                      {sector.connections.map((connection, idx) => (
                        <span key={idx} className="bg-gray-100 text-gray-700 px-3 py-1 rounded-full text-xs font-medium">
                          {connection}
                        </span>
                      ))}
                    </div>
                  </div>
                  
                  <div>
                    <h4 className="font-semibold text-gray-900 mb-2">⚡ Capacités :</h4>
                    <div className="flex flex-wrap gap-2">
                      {sector.capabilities.map((capability, idx) => (
                        <span key={idx} className="bg-brand/20 text-gray-800 px-3 py-1 rounded-full text-xs font-medium">
                          {capability}
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

      {/* Connectivity Map */}
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
                CONNECTIVITÉ EUROPÉENNE
              </span>
            </motion.div>
            <motion.h2 variants={fadeInUp} className="text-4xl md:text-5xl font-bold mb-6 text-gray-900">
              Hub Central de l'Europe
            </motion.h2>
            <motion.p variants={fadeInUp} className="text-xl max-w-4xl mx-auto text-gray-600 leading-relaxed">
              Position géographique exceptionnelle au cœur de l'Europe offrant 
              un accès optimal aux principales métropoles européennes.
            </motion.p>
          </motion.div>

          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={staggerChildren}
            className="grid md:grid-cols-2 lg:grid-cols-4 gap-6"
          >
            {connectivityMap.map((route, index) => (
              <motion.div
                key={index}
                variants={fadeInUp}
                className="bg-gray-50 p-6 rounded-2xl text-center hover:shadow-lg transition-all duration-300"
              >
                <h3 className="text-xl font-bold text-gray-900 mb-3">{route.destination}</h3>
                <div className="space-y-2 mb-4">
                  <div className="text-2xl font-bold text-brand">{route.distance}</div>
                  <div className="text-gray-600">{route.time}</div>
                </div>
                <div className="flex flex-wrap gap-1 justify-center">
                  {route.modes.map((mode, idx) => (
                    <span key={idx} className="bg-gray-200 text-gray-700 px-2 py-1 rounded text-xs">
                      {mode}
                    </span>
                  ))}
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Success Stories */}
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
                SUCCÈS LOGISTIQUES
              </span>
            </motion.div>
            <motion.h2 variants={fadeInUp} className="text-4xl md:text-5xl font-bold mb-6 text-gray-900">
              Optimisations Supply Chain Réussies
            </motion.h2>
            <motion.p variants={fadeInUp} className="text-xl max-w-4xl mx-auto text-gray-600 leading-relaxed">
              Comment nous avons accompagné des acteurs logistiques de Bettembourg 
              dans leur croissance et optimisation opérationnelle.
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
                className="bg-white rounded-2xl p-8 lg:p-10 shadow-lg"
              >
                <div className="grid lg:grid-cols-3 gap-8">
                  <div>
                    <div className="flex items-center gap-2 mb-4">
                      <span className="inline-block bg-brand text-gray-900 px-3 py-1 rounded-full text-xs font-bold">
                        {story.category}
                      </span>
                      <span className="inline-block bg-gray-200 text-gray-800 px-3 py-1 rounded-full text-xs font-bold">
                        {story.scale}
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
                    <h4 className="font-semibold text-gray-900 mb-4">📈 Résultats Logistiques :</h4>
                    <div className="bg-gray-50 rounded-xl p-6">
                      <p className="text-gray-800 text-lg font-medium leading-relaxed">{story.results}</p>
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Logistics Advantages */}
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
                AVANTAGES BETTEMBOURG
              </span>
            </motion.div>
            <motion.h2 variants={fadeInUp} className="text-4xl md:text-5xl font-bold mb-6 text-gray-900">
              Pourquoi Bettembourg pour la Logistique ?
            </motion.h2>
            <motion.p variants={fadeInUp} className="text-xl max-w-4xl mx-auto text-gray-600 leading-relaxed">
              Un écosystème logistique unique offrant connectivité, infrastructure 
              et innovation pour l'excellence opérationnelle.
            </motion.p>
          </motion.div>

          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={staggerChildren}
            className="grid md:grid-cols-2 gap-8"
          >
            {logisticsAdvantages.map((advantage, index) => (
              <motion.div
                key={index}
                variants={fadeInUp}
                className="bg-gray-50 p-8 rounded-2xl hover:shadow-lg transition-all duration-300"
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

      {/* Logistics Services */}
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
                SERVICES LOGISTIQUES
              </span>
            </motion.div>
            <motion.h2 variants={fadeInUp} className="text-4xl md:text-5xl font-bold mb-6 text-gray-900">
              Marketing Supply Chain Bettembourg
            </motion.h2>
            <motion.p variants={fadeInUp} className="text-xl max-w-4xl mx-auto text-gray-600 leading-relaxed">
              Services marketing spécialisés pour l'écosystème logistique 
              et supply chain de Bettembourg.
            </motion.p>
          </motion.div>

          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={staggerChildren}
            className="grid md:grid-cols-2 gap-8"
          >
            {logisticsServices.map((service, index) => (
              <motion.div
                key={index}
                variants={fadeInUp}
                className="bg-white p-8 rounded-2xl hover:shadow-lg transition-all duration-300"
              >
                <div className="flex justify-between items-start mb-4">
                  <h3 className="text-2xl font-bold text-gray-900">{service.title}</h3>
                  <span className="bg-brand text-gray-900 px-3 py-1 rounded-full text-xs font-bold">
                    Logistics
                  </span>
                </div>
                <p className="text-gray-600 mb-6 leading-relaxed">{service.description}</p>
                
                <div className="space-y-4">
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
                  
                  <div className="pt-3 border-t border-gray-200">
                    <span className="inline-block bg-gray-100 text-gray-800 px-2 py-1 rounded text-xs font-medium">
                      🎯 {service.focus}
                    </span>
                  </div>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Logistics Ecosystem */}
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
                ÉCOSYSTÈME LOGISTIQUE
              </span>
            </motion.div>
            <motion.h2 variants={fadeInUp} className="text-4xl md:text-5xl font-bold mb-6 text-gray-900">
              Réseau Supply Chain Bettembourg
            </motion.h2>
            <motion.p variants={fadeInUp} className="text-xl max-w-4xl mx-auto text-gray-600 leading-relaxed">
              Connectez-vous avec les acteurs clés de l'innovation 
              et du développement logistique européen.
            </motion.p>
          </motion.div>

          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={staggerChildren}
            className="grid lg:grid-cols-3 gap-8"
          >
            {logisticsEcosystem.map((ecosystem, index) => (
              <motion.div
                key={index}
                variants={fadeInUp}
                className="bg-gray-50 p-6 rounded-2xl hover:shadow-lg transition-all duration-300"
              >
                <h3 className="text-xl font-bold text-gray-900 mb-2">{ecosystem.name}</h3>
                <p className="text-brand font-semibold mb-3">{ecosystem.focus}</p>
                
                <div className="space-y-3">
                  <div>
                    <h4 className="font-semibold text-gray-900 mb-2">Bénéfices :</h4>
                    <ul className="space-y-1">
                      {ecosystem.benefits.map((benefit, idx) => (
                        <li key={idx} className="text-gray-700 text-sm flex items-center">
                          <div className="w-1.5 h-1.5 rounded-full bg-brand mr-2 flex-shrink-0"></div>
                          {benefit}
                        </li>
                      ))}
                    </ul>
                  </div>
                  
                  <div className="pt-3 border-t border-gray-200">
                    <span className="inline-block bg-brand/20 text-gray-800 px-2 py-1 rounded text-xs font-medium">
                      📦 {ecosystem.opportunities}
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
            backgroundImage: `url('https://images.unsplash.com/photo-1566576912321-d58ddd7a6088?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80')`
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
              Optimisez Votre Supply Chain à{' '}
              <span className="text-brand">
                Bettembourg
              </span>
            </motion.h2>
            <motion.p variants={fadeInUp} className="text-xl mb-10 max-w-4xl mx-auto text-gray-200 leading-relaxed">
              Profitez du hub logistique européen de Bettembourg pour optimiser votre supply chain 
              et accélérer votre croissance. Consultation logistique gratuite.
            </motion.p>
            
            <motion.div variants={fadeInUp} className="grid md:grid-cols-2 gap-8 mb-12">
              <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-6">
                <h3 className="text-xl font-bold text-white mb-4">📦 Spécialiste Supply Chain</h3>
                <div className="space-y-2 text-gray-200">
                  <p>✅ Marketing Logistique</p>
                  <p>✅ E-commerce Enablement</p>
                  <p>✅ Innovation Logistique</p>
                  <p>✅ Connectivité Européenne</p>
                </div>
              </div>
              
              <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-6">
                <h3 className="text-xl font-bold text-white mb-4">📍 Contact Bettembourg</h3>
                <div className="space-y-2 text-gray-200">
                  <p>📧 bettembourg@wedid.lu</p>
                  <p>📞 +352 12 34 56 789</p>
                  <p>🕒 Lun-Ven: 6h00-20h00</p>
                  <p>🚛 Hub Logistique 24/7</p>
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
                Stratégie Supply Chain
                <span className="ml-2">📦</span>
              </motion.a>
              <motion.a 
                whileHover={{ scale: 1.05, y: -2 }}
                href="/services" 
                className="inline-flex items-center justify-center text-white border-2 border-white px-12 py-4 rounded-lg hover:bg-white hover:text-gray-900 transition-all duration-300 font-bold"
              >
                Services Logistiques
              </motion.a>
            </motion.div>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default BettembourgPage;