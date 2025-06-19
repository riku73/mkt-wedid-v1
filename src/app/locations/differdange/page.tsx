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

const DifferdangePage = () => {
  const stats = [
    { number: '1,200+', label: 'Entreprises', icon: '🏭' },
    { number: '27,000', label: 'Habitants', icon: '👥' },
    { number: '€1.8B', label: 'PIB local', icon: '💰' },
    { number: '22%', label: 'PME familiales', icon: '👨‍👩‍👧‍👦' }
  ];

  const industrialSectors = [
    {
      name: 'Industrie 4.0 & Manufacturing',
      description: 'Transformation digitale de l\'industrie traditionnelle, automatisation, IoT',
      opportunities: 'Communication B2B technique, showcasing innovation, lead generation industriel',
      companies: ['ArcelorMittal', 'Industrie locale', 'PME manufacturières'],
      technologies: ['IoT', 'Automation', 'Digital Twins', 'Smart Manufacturing'],
      icon: '⚙️'
    },
    {
      name: 'PME Familiales & Artisanat',
      description: 'Entreprises familiales traditionnelles, artisanat local, savoir-faire transmis',
      opportunities: 'Digitalisation commerce, e-commerce B2B, storytelling familial',
      companies: ['Entreprises Familiales', 'Artisans Locaux', 'Commerces Traditionnels'],
      technologies: ['E-commerce', 'Digital Presence', 'Local SEO', 'Social Media'],
      icon: '👨‍💼'
    },
    {
      name: 'Services B2B & Consulting',
      description: 'Services aux entreprises, consulting industriel, maintenance spécialisée',
      opportunities: 'Lead generation B2B, thought leadership, content marketing technique',
      companies: ['Cabinets Conseil', 'Services Industriels', 'Maintenance Spécialisée'],
      technologies: ['CRM', 'Marketing Automation', 'Content Marketing', 'LinkedIn'],
      icon: '🤝'
    },
    {
      name: 'Innovation & Durabilité',
      description: 'Projets durables, économie circulaire, technologies vertes',
      opportunities: 'Communication environnementale, green marketing, innovation showcasing',
      companies: ['Projets Verts', 'Économie Circulaire', 'Technologies Propres'],
      technologies: ['Green Tech', 'Sustainability', 'Innovation', 'CSR Communication'],
      icon: '🌱'
    }
  ];

  const successStories = [
    {
      client: 'PME Industrielle Differdange',
      challenge: 'Modernisation image de marque et acquisition clients internationaux',
      solution: 'Refonte identité visuelle, site web multilingue, stratégie LinkedIn B2B',
      results: '40+ nouveaux clients EU, +250% visibilité online, certification ISO mise en avant',
      industry: 'Manufacturing',
      focus: 'B2B International'
    },
    {
      client: 'Entreprise Familiale 3ème Génération',
      challenge: 'Passage au digital et attraction jeunes talents',
      solution: 'Storytelling familial, digitalisation processes, employer branding',
      results: 'Doublement candidatures, +180% ventes online, prix entreprise familiale',
      industry: 'Artisanat',
      focus: 'Digital Transformation'
    },
    {
      client: 'Cabinet Conseil Industriel',
      challenge: 'Développement notoriété et positioning expertise',
      solution: 'Content marketing technique, thought leadership, SEO spécialisé',
      results: '300% augmentation leads qualifiés, speaker conférences internationales',
      industry: 'Consulting',
      focus: 'Thought Leadership'
    }
  ];

  const differdangeAdvantages = [
    {
      title: 'Heritage Industriel Fort',
      description: 'Tradition industrielle centenaire créant un écosystème B2B dense et spécialisé.',
      benefit: 'Réseau professionnel établi et expertise technique reconnue'
    },
    {
      title: 'Transition Économique',
      description: 'Évolution vers industrie 4.0 et services à haute valeur ajoutée.',
      benefit: 'Opportunités de modernisation et d\'innovation'
    },
    {
      title: 'Position Frontalière',
      description: 'Proximité France-Belgique favorisant les échanges commerciaux transfrontaliers.',
      benefit: 'Marché élargi et opportunités internationales'
    },
    {
      title: 'Ecosystem PME',
      description: 'Concentration d\'entreprises familiales avec besoins de modernisation digitale.',
      benefit: 'Marché local avec fort potentiel de croissance'
    }
  ];

  const industrialServices = [
    {
      title: 'Marketing Industriel B2B',
      description: 'Stratégies spécialisées pour l\'industrie manufacturière et services B2B',
      features: ['Lead Generation', 'Content Technique', 'Trade Shows', 'Account-Based Marketing'],
      sectors: ['Manufacturing', 'Industrial Services', 'B2B Consulting']
    },
    {
      title: 'Transformation Digitale PME',
      description: 'Accompagnement complet des PME familiales dans leur digitalisation',
      features: ['Audit Digital', 'Site Web Professionnel', 'E-commerce B2B', 'Formation Équipes'],
      sectors: ['PME Familiales', 'Artisanat', 'Commerce Local']
    },
    {
      title: 'Communication Industrielle',
      description: 'Mise en valeur de l\'innovation et du savoir-faire technique',
      features: ['Storytelling Industriel', 'Vidéos Process', 'Documentation Technique', 'Showcasing Innovation'],
      sectors: ['Industry 4.0', 'Innovation', 'Technologies']
    },
    {
      title: 'Green Marketing',
      description: 'Communication environnementale et développement durable',
      features: ['CSR Communication', 'Sustainability Reports', 'Green Branding', 'Environmental Marketing'],
      sectors: ['Sustainability', 'Clean Tech', 'Circular Economy']
    }
  ];

  const businessNetwork = [
    {
      name: 'Chambre de Commerce Région Sud',
      type: 'Organisation Patronale',
      focus: 'PME et industrie locale',
      benefits: ['Networking industriel', 'Support développement', 'Formation continue']
    },
    {
      name: 'Cluster Industriel',
      type: 'Association Sectorielle',
      focus: 'Innovation industrielle',
      benefits: ['Projets collaboratifs', 'Veille technologique', 'Mise en réseau']
    },
    {
      name: 'Association Entreprises Familiales',
      type: 'Réseau Professionnel',
      focus: 'Transmission et modernisation',
      benefits: ['Échange d\'expériences', 'Mentorat', 'Best practices']
    }
  ];

  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="relative pt-28 pb-20 px-4 sm:pt-32 sm:pb-24 sm:px-6 lg:pt-32 lg:pb-32 overflow-hidden">
        <div 
          className="absolute inset-0 bg-cover bg-center bg-no-repeat"
          style={{
            backgroundImage: `url('https://images.unsplash.com/photo-1518709268805-4e9042af2a8c?ixlib=rb-4.0.3&auto=format&fit=crop&w=2025&q=80')`
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
                🏭 DIFFERDANGE • CENTRE INDUSTRIEL EN TRANSFORMATION
              </span>
            </motion.div>
            
            <motion.h1 variants={fadeInUp} className="text-5xl md:text-7xl font-bold mb-8 max-w-6xl mx-auto leading-tight">
              Marketing Digital{' '}
              <span className="text-brand">
                Industrie 4.0
              </span>{' '}
              Differdange
            </motion.h1>
            
            <motion.p variants={fadeInUp} className="text-xl md:text-2xl mb-12 max-w-4xl mx-auto text-gray-200 leading-relaxed">
              Spécialistes du marketing B2B industriel pour les entreprises manufacturières, PME familiales 
              et services spécialisés de Differdange. Votre partenaire dans la transformation digitale industrielle.
            </motion.p>
            
            <motion.div variants={fadeInUp} className="flex flex-col md:flex-row gap-6 justify-center items-center">
              <motion.a 
                href="/consultation-gratuite"
                whileHover={{ scale: 1.05, y: -2 }}
                whileTap={{ scale: 0.95 }}
                className="bg-brand text-gray-900 px-10 py-4 rounded-lg font-bold text-lg shadow-xl hover:shadow-2xl transition-all duration-300 inline-flex items-center"
              >
                Audit Digital Industriel
                <span className="ml-2">⚙️</span>
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
              Écosystème Industriel Differdange
            </motion.h2>
            <motion.p variants={fadeInUp} className="text-xl max-w-4xl mx-auto text-gray-600 leading-relaxed">
              Du manufacturing traditionnel aux nouvelles technologies, Differdange opère sa transformation 
              vers l'industrie 4.0 et les services à haute valeur ajoutée.
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
                    <h4 className="font-semibold text-gray-900 mb-2">🚀 Technologies :</h4>
                    <div className="flex flex-wrap gap-2">
                      {sector.technologies.map((tech, idx) => (
                        <span key={idx} className="bg-brand/20 text-gray-800 px-3 py-1 rounded-full text-xs font-medium">
                          {tech}
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
                SUCCÈS DIFFERDANGE
              </span>
            </motion.div>
            <motion.h2 variants={fadeInUp} className="text-4xl md:text-5xl font-bold mb-6 text-gray-900">
              Transformations Industrielles Digitales
            </motion.h2>
            <motion.p variants={fadeInUp} className="text-xl max-w-4xl mx-auto text-gray-600 leading-relaxed">
              Comment nous avons accompagné des entreprises industrielles de Differdange 
              dans leur modernisation et croissance digitale.
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

      {/* Differdange Advantages */}
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
                AVANTAGES DIFFERDANGE
              </span>
            </motion.div>
            <motion.h2 variants={fadeInUp} className="text-4xl md:text-5xl font-bold mb-6 text-gray-900">
              Pourquoi Differdange pour l'Industrie ?
            </motion.h2>
            <motion.p variants={fadeInUp} className="text-xl max-w-4xl mx-auto text-gray-600 leading-relaxed">
              Un écosystème industriel unique offrant de nombreux avantages 
              pour les entreprises en transformation.
            </motion.p>
          </motion.div>

          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={staggerChildren}
            className="grid md:grid-cols-2 gap-8"
          >
            {differdangeAdvantages.map((advantage, index) => (
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
              Marketing B2B Industriel Differdange
            </motion.h2>
            <motion.p variants={fadeInUp} className="text-xl max-w-4xl mx-auto text-gray-600 leading-relaxed">
              Solutions marketing spécialisées pour l'écosystème industriel et les PME 
              en transformation de Differdange.
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
                <h3 className="text-2xl font-bold text-gray-900 mb-4">{service.title}</h3>
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
                  
                  <div>
                    <h4 className="font-semibold text-gray-900 mb-2">Secteurs ciblés :</h4>
                    <div className="flex flex-wrap gap-2">
                      {service.sectors.map((sector, idx) => (
                        <span key={idx} className="bg-brand/20 text-gray-800 px-2 py-1 rounded text-xs font-medium">
                          {sector}
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

      {/* Business Network */}
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
                RÉSEAU INDUSTRIEL
              </span>
            </motion.div>
            <motion.h2 variants={fadeInUp} className="text-4xl md:text-5xl font-bold mb-6 text-gray-900">
              Écosystème Business Differdange
            </motion.h2>
            <motion.p variants={fadeInUp} className="text-xl max-w-4xl mx-auto text-gray-600 leading-relaxed">
              Connectez-vous avec les acteurs clés du développement industriel local.
            </motion.p>
          </motion.div>

          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={staggerChildren}
            className="grid lg:grid-cols-3 gap-8"
          >
            {businessNetwork.map((network, index) => (
              <motion.div
                key={index}
                variants={fadeInUp}
                className="bg-white p-6 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300"
              >
                <h3 className="text-xl font-bold text-gray-900 mb-2">{network.name}</h3>
                <p className="text-brand font-semibold mb-2">{network.type}</p>
                <p className="text-gray-600 text-sm mb-4">Focus: {network.focus}</p>
                
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
            backgroundImage: `url('https://images.unsplash.com/photo-1565022194996-75dc22165b75?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80')`
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
                Differdange
              </span>
            </motion.h2>
            <motion.p variants={fadeInUp} className="text-xl mb-10 max-w-4xl mx-auto text-gray-200 leading-relaxed">
              Accompagnement spécialisé pour la transformation digitale de votre entreprise industrielle. 
              Consultation gratuite pour analyser vos besoins de modernisation.
            </motion.p>
            
            <motion.div variants={fadeInUp} className="grid md:grid-cols-2 gap-8 mb-12">
              <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-6">
                <h3 className="text-xl font-bold text-white mb-4">🏭 Spécialiste Industrie B2B</h3>
                <div className="space-y-2 text-gray-200">
                  <p>✅ Marketing Industriel</p>
                  <p>✅ Transformation Digitale</p>
                  <p>✅ Communication Technique</p>
                  <p>✅ Green Marketing</p>
                </div>
              </div>
              
              <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-6">
                <h3 className="text-xl font-bold text-white mb-4">📍 Contact Differdange</h3>
                <div className="space-y-2 text-gray-200">
                  <p>📧 differdange@wedid.lu</p>
                  <p>📞 +352 12 34 56 789</p>
                  <p>🕒 Lun-Ven: 8h00-18h00</p>
                  <p>🚗 Parking: Zone Industrielle</p>
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
                Audit Digital Industriel
                <span className="ml-2">⚙️</span>
              </motion.a>
              <motion.a 
                whileHover={{ scale: 1.05, y: -2 }}
                href="/services" 
                className="inline-flex items-center justify-center text-white border-2 border-white px-12 py-4 rounded-lg hover:bg-white hover:text-gray-900 transition-all duration-300 font-bold"
              >
                Découvrir nos Services B2B
              </motion.a>
            </motion.div>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default DifferdangePage;