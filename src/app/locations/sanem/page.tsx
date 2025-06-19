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

const SanemPage = () => {
  const stats = [
    { number: '650+', label: 'Entreprises', icon: '🏭' },
    { number: '16,000', label: 'Habitants', icon: '👥' },
    { number: '€1.6B', label: 'PIB industriel', icon: '💰' },
    { number: '60%', label: 'Secteur industriel', icon: '⚙️' }
  ];

  const industrialSectors = [
    {
      name: 'Industrie Lourde & Manufacturing',
      description: 'Production industrielle, métallurgie, sidérurgie, transformation',
      opportunities: 'Industrial marketing, process showcasing, safety communication, sustainability',
      specialties: ['Métallurgie', 'Sidérurgie', 'Production', 'Transformation'],
      innovations: ['Automatisation', 'Robotique', 'IoT Industriel', 'Predictive Maintenance'],
      icon: '🏭'
    },
    {
      name: 'Logistique & Supply Chain',
      description: 'Centres logistiques, gestion de flux, distribution industrielle',
      opportunities: 'Supply chain optimization, logistics tech, warehouse automation',
      specialties: ['Centres Logistiques', 'Gestion Stocks', 'Distribution', 'Transport'],
      innovations: ['WMS Systems', 'Tracking IoT', 'Automation', 'Analytics'],
      icon: '📦'
    },
    {
      name: 'Services Industriels',
      description: 'Maintenance industrielle, ingénierie, services techniques spécialisés',
      opportunities: 'Technical marketing, expertise showcasing, B2B lead generation',
      specialties: ['Maintenance', 'Ingénierie', 'Services Techniques', 'Consulting'],
      innovations: ['Maintenance 4.0', 'Digital Twins', 'Remote Monitoring', 'AR/VR'],
      icon: '🔧'
    },
    {
      name: 'Innovation & Technologie',
      description: 'R&D industriel, nouvelles technologies, solutions innovantes',
      opportunities: 'Innovation marketing, tech communication, thought leadership',
      specialties: ['R&D', 'Innovation', 'Technologies', 'Solutions'],
      innovations: ['Industry 4.0', 'AI/ML', 'Green Tech', 'Digital Solutions'],
      icon: '💡'
    }
  ];

  const successStories = [
    {
      client: 'Groupe Industriel Sanem',
      challenge: 'Modernisation image et attraction talents techniques',
      solution: 'Rebranding industriel, employee advocacy, content technique, digital workplace',
      results: '+300% candidatures techniques, certification Top Employer, prix innovation',
      category: 'Industrie Lourde',
      focus: 'Employer Branding'
    },
    {
      client: 'Centre Logistique Européen',
      challenge: 'Optimisation processus et communication performance',
      solution: 'Dashboard analytics, process visualization, performance communication',
      results: '+25% efficacité opérationnelle, nouveaux contrats EU, expansion 2 sites',
      category: 'Logistique',
      focus: 'Process Optimization'
    },
    {
      client: 'PME Services Industriels',
      challenge: 'Expansion européenne et diversification clientèle',
      solution: 'Marketing technique multilingue, lead generation B2B, digital showcasing',
      results: 'Expansion 5 pays EU, +400% leads qualifiés, contrats majeurs',
      category: 'Services B2B',
      focus: 'International Expansion'
    }
  ];

  const industrialAdvantages = [
    {
      title: 'Écosystème Industriel Intégré',
      description: 'Concentration d\'industries lourdes et services associés créant synergies et expertise.',
      benefit: 'Networking B2B naturel et opportunités de partenariats'
    },
    {
      title: 'Infrastructure Logistique Avancée',
      description: 'Connexions transport optimales et centres logistiques modernes.',
      benefit: 'Efficacité opérationnelle et avantages compétitifs'
    },
    {
      title: 'Expertise Technique Reconnue',
      description: 'Savoir-faire industriel établi et main-d\'œuvre hautement qualifiée.',
      benefit: 'Crédibilité technique et capacités d\'innovation'
    },
    {
      title: 'Transformation Digitale Active',
      description: 'Adoption progressive des technologies Industry 4.0 et digitalisation.',
      benefit: 'Opportunités d\'innovation et modernisation'
    }
  ];

  const industrialServices = [
    {
      title: 'Industrial Marketing B2B',
      description: 'Marketing spécialisé pour l\'industrie lourde et manufacturing',
      features: ['Content Technique', 'Process Showcasing', 'Safety Communication', 'Trade Marketing'],
      industries: 'Manufacturing, Sidérurgie, Production'
    },
    {
      title: 'Supply Chain Communication',
      description: 'Optimisation et communication des chaînes logistiques',
      features: ['Process Mapping', 'Performance Dashboards', 'Stakeholder Communication', 'Efficiency Reporting'],
      industries: 'Logistique, Distribution, Transport'
    },
    {
      title: 'Technical Thought Leadership',
      description: 'Positionnement expertise et leadership technique',
      features: ['Expert Content', 'Technical Webinars', 'Innovation Showcasing', 'Industry Speaking'],
      industries: 'Services Techniques, Ingénierie'
    },
    {
      title: 'Industrial Innovation Marketing',
      description: 'Communication et marketing de l\'innovation industrielle',
      features: ['Innovation Storytelling', 'Tech Demos', 'R&D Communication', 'Future Vision'],
      industries: 'R&D, Innovation, Nouvelles Technologies'
    }
  ];

  const industrialEcosystem = [
    {
      name: 'Cluster Industrie 4.0 Luxembourg',
      focus: 'Transformation digitale industrielle',
      benefits: ['Innovation collaborative', 'Projets R&D', 'Networking tech'],
      opportunities: 'Participation projets innovation et accès financements'
    },
    {
      name: 'Association Logistique Luxembourg',
      focus: 'Optimisation supply chain',
      benefits: ['Best practices', 'Formation spécialisée', 'Certification'],
      opportunities: 'Optimisation processus et reconnaissance expertise'
    },
    {
      name: 'Fedil - Industries Luxembourgeoises',
      focus: 'Représentation industrie',
      benefits: ['Advocacy sectorielle', 'Réseautage industriel', 'Veille réglementaire'],
      opportunities: 'Influence politique et développement secteur'
    }
  ];

  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="relative h-screen min-h-[600px] max-h-[800px] flex items-center justify-center overflow-hidden">
        <div 
          className="absolute inset-0 bg-cover bg-center bg-no-repeat"
          style={{
            backgroundImage: `url('https://images.unsplash.com/photo-1553355616-6884e9aef8f1?ixlib=rb-4.0.3&auto=format&fit=crop&w=2073&q=80')`
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
                🏭 SANEM • PÔLE INDUSTRIEL & LOGISTIQUE
              </span>
            </motion.div>
            
            <motion.h1 variants={fadeInUp} className="text-5xl md:text-7xl font-bold mb-8 max-w-6xl mx-auto leading-tight">
              Marketing Digital{' '}
              <span className="text-brand">
                Industriel
              </span>{' '}
              Sanem
            </motion.h1>
            
            <motion.p variants={fadeInUp} className="text-xl md:text-2xl mb-12 max-w-4xl mx-auto text-gray-200 leading-relaxed">
              Spécialistes du marketing B2B industriel pour les entreprises de Sanem. Industrie lourde, logistique avancée 
              et services techniques. Votre partenaire pour la communication industrielle et l'innovation.
            </motion.p>
            
            <motion.div variants={fadeInUp} className="flex flex-col md:flex-row gap-6 justify-center items-center">
              <motion.a 
                href="/consultation-gratuite"
                whileHover={{ scale: 1.05, y: -2 }}
                whileTap={{ scale: 0.95 }}
                className="bg-brand text-gray-900 px-10 py-4 rounded-lg font-bold text-lg shadow-xl hover:shadow-2xl transition-all duration-300 inline-flex items-center"
              >
                Audit Marketing Industriel
                <span className="ml-2">🏭</span>
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

      {/* Industrial Sectors */}
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
                SECTEURS INDUSTRIELS
              </span>
            </motion.div>
            <motion.h2 variants={fadeInUp} className="text-4xl md:text-5xl font-bold mb-6 text-gray-900">
              Écosystème Industriel Sanem
            </motion.h2>
            <motion.p variants={fadeInUp} className="text-xl max-w-4xl mx-auto text-gray-600 leading-relaxed">
              Centre industriel majeur du Luxembourg alliant tradition manufacturière 
              et innovation technologique pour une industrie 4.0 moderne.
            </motion.p>
          </motion.div>

          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={staggerChildren}
            className="grid lg:grid-cols-2 gap-8"
          >
            {industrialSectors.map((sector, index) => (
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
                    <h4 className="font-semibold text-gray-900 mb-2">🏭 Spécialités :</h4>
                    <div className="flex flex-wrap gap-2">
                      {sector.specialties.map((specialty, idx) => (
                        <span key={idx} className="bg-gray-100 text-gray-700 px-3 py-1 rounded-full text-xs font-medium">
                          {specialty}
                        </span>
                      ))}
                    </div>
                  </div>
                  
                  <div>
                    <h4 className="font-semibold text-gray-900 mb-2">🚀 Innovations :</h4>
                    <div className="flex flex-wrap gap-2">
                      {sector.innovations.map((innovation, idx) => (
                        <span key={idx} className="bg-brand/20 text-gray-800 px-3 py-1 rounded-full text-xs font-medium">
                          {innovation}
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
                SUCCÈS INDUSTRIELS
              </span>
            </motion.div>
            <motion.h2 variants={fadeInUp} className="text-4xl md:text-5xl font-bold mb-6 text-gray-900">
              Transformations Industrielles Digitales
            </motion.h2>
            <motion.p variants={fadeInUp} className="text-xl max-w-4xl mx-auto text-gray-600 leading-relaxed">
              Comment nous avons accompagné des entreprises industrielles de Sanem 
              dans leur modernisation et communication technique.
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
                        {story.focus}
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
                    <h4 className="font-semibold text-gray-900 mb-4">📈 Résultats Industriels :</h4>
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

      {/* Industrial Advantages */}
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
                AVANTAGES SANEM
              </span>
            </motion.div>
            <motion.h2 variants={fadeInUp} className="text-4xl md:text-5xl font-bold mb-6 text-gray-900">
              Pourquoi Sanem pour l'Industrie ?
            </motion.h2>
            <motion.p variants={fadeInUp} className="text-xl max-w-4xl mx-auto text-gray-600 leading-relaxed">
              Un écosystème industriel mature offrant infrastructure, expertise 
              et opportunités d'innovation uniques au Luxembourg.
            </motion.p>
          </motion.div>

          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={staggerChildren}
            className="grid md:grid-cols-2 gap-8"
          >
            {industrialAdvantages.map((advantage, index) => (
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

      {/* Industrial Services */}
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
                SERVICES INDUSTRIELS
              </span>
            </motion.div>
            <motion.h2 variants={fadeInUp} className="text-4xl md:text-5xl font-bold mb-6 text-gray-900">
              Marketing B2B Industriel Sanem
            </motion.h2>
            <motion.p variants={fadeInUp} className="text-xl max-w-4xl mx-auto text-gray-600 leading-relaxed">
              Services marketing spécialisés pour l'écosystème industriel 
              et logistique de Sanem.
            </motion.p>
          </motion.div>

          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={staggerChildren}
            className="grid md:grid-cols-2 gap-8"
          >
            {industrialServices.map((service, index) => (
              <motion.div
                key={index}
                variants={fadeInUp}
                className="bg-gray-50 p-8 rounded-2xl hover:shadow-lg transition-all duration-300"
              >
                <div className="flex justify-between items-start mb-4">
                  <h3 className="text-2xl font-bold text-gray-900">{service.title}</h3>
                  <span className="bg-brand text-gray-900 px-3 py-1 rounded-full text-xs font-bold">
                    B2B
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
                      🎯 {service.industries}
                    </span>
                  </div>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Industrial Ecosystem */}
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
                ÉCOSYSTÈME INDUSTRIEL
              </span>
            </motion.div>
            <motion.h2 variants={fadeInUp} className="text-4xl md:text-5xl font-bold mb-6 text-gray-900">
              Réseau Industriel Sanem
            </motion.h2>
            <motion.p variants={fadeInUp} className="text-xl max-w-4xl mx-auto text-gray-600 leading-relaxed">
              Connectez-vous avec les acteurs clés de l'innovation 
              et du développement industriel luxembourgeois.
            </motion.p>
          </motion.div>

          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={staggerChildren}
            className="grid lg:grid-cols-3 gap-8"
          >
            {industrialEcosystem.map((ecosystem, index) => (
              <motion.div
                key={index}
                variants={fadeInUp}
                className="bg-white p-6 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300"
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
                      🏭 {ecosystem.opportunities}
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
            backgroundImage: `url('https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80')`
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
              Modernisez Votre Industrie à{' '}
              <span className="text-brand">
                Sanem
              </span>
            </motion.h2>
            <motion.p variants={fadeInUp} className="text-xl mb-10 max-w-4xl mx-auto text-gray-200 leading-relaxed">
              Profitez de l'écosystème industriel de Sanem pour transformer votre communication B2B 
              et accelerer votre croissance. Audit marketing industriel gratuit.
            </motion.p>
            
            <motion.div variants={fadeInUp} className="grid md:grid-cols-2 gap-8 mb-12">
              <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-6">
                <h3 className="text-xl font-bold text-white mb-4">🏭 Spécialiste Industrie B2B</h3>
                <div className="space-y-2 text-gray-200">
                  <p>✅ Marketing Industriel</p>
                  <p>✅ Communication Technique</p>
                  <p>✅ Process Optimization</p>
                  <p>✅ Innovation Showcasing</p>
                </div>
              </div>
              
              <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-6">
                <h3 className="text-xl font-bold text-white mb-4">📍 Contact Sanem</h3>
                <div className="space-y-2 text-gray-200">
                  <p>📧 sanem@wedid.lu</p>
                  <p>📞 +352 12 34 56 789</p>
                  <p>🕒 Lun-Ven: 7h30-18h00</p>
                  <p>🚗 Zone Industrielle</p>
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
                Audit Marketing Industriel
                <span className="ml-2">🏭</span>
              </motion.a>
              <motion.a 
                whileHover={{ scale: 1.05, y: -2 }}
                href="/services" 
                className="inline-flex items-center justify-center text-white border-2 border-white px-12 py-4 rounded-lg hover:bg-white hover:text-gray-900 transition-all duration-300 font-bold"
              >
                Services Industriels B2B
              </motion.a>
            </motion.div>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default SanemPage;