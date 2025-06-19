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

const ContentMarketingPage = () => {
  return (
    <div className="min-h-screen bg-white">

      {/* Hero Section */}
      <section className="relative min-h-[85vh] flex items-center justify-center overflow-hidden pt-20">
        <div 
          className="absolute inset-0 bg-cover bg-center bg-no-repeat"
          style={{
            backgroundImage: `url('https://images.unsplash.com/photo-1586278353195-4961f5a8a5a2?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2344&q=80')`
          }}
        />
        <div className="absolute inset-0 bg-gray-900/75"></div>
        
        <div className="max-w-6xl mx-auto px-6 relative z-10 text-center text-white">
          <motion.div
            initial="hidden"
            animate="visible"
            variants={{
              hidden: { opacity: 0 },
              visible: {
                opacity: 1,
                transition: { staggerChildren: 0.2, delayChildren: 0.1 }
              }
            }}
          >
            <motion.div variants={fadeInUp} className="mb-8">
              <span className="inline-block bg-brand text-gray-900 px-4 py-2 rounded-full text-sm font-semibold mb-8">
                ✍️ CONTENT MARKETING LUXEMBOURG
              </span>
            </motion.div>
            
            <motion.h1 variants={fadeInUp} className="text-5xl md:text-7xl font-bold mb-8 max-w-5xl mx-auto leading-tight">
              Stratégie{' '}
              <span className="text-brand">
                Content Marketing
              </span>{' '}
              au Luxembourg
            </motion.h1>
            
            <motion.p variants={fadeInUp} className="text-xl md:text-2xl mb-12 max-w-4xl mx-auto text-gray-200 leading-relaxed font-normal">
              Création de contenu engageant et stratégies éditoriales adaptées 
              au marché luxembourgeois et à la Grande Région.
            </motion.p>
            
            <motion.div variants={fadeInUp} className="flex flex-col md:flex-row gap-4 justify-center items-center">
              <motion.button 
                whileHover={{ scale: 1.05, y: -2 }}
                whileTap={{ scale: 0.95 }}
                className="bg-brand text-gray-900 px-8 py-4 rounded-lg font-bold text-lg shadow-xl hover:shadow-2xl transition-all duration-300"
              >
                Consultation Gratuite →
              </motion.button>
              
              <motion.a 
                whileHover={{ scale: 1.05, y: -2 }}
                href="#strategie" 
                className="text-white border-2 border-white px-8 py-4 rounded-lg hover:bg-white hover:text-gray-900 transition-all duration-300 font-semibold"
              >
                Notre Stratégie
              </motion.a>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Services Section */}
      <section id="strategie" className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeInUp}
            className="text-center mb-16"
          >
            <span className="inline-block bg-brand text-gray-900 px-4 py-2 rounded-full text-sm font-bold mb-8">
              NOS SERVICES
            </span>
            <h2 className="text-4xl md:text-5xl font-bold mb-6 text-gray-900">
              Content Marketing Complet
            </h2>
            <p className="text-xl max-w-4xl mx-auto text-gray-600 leading-relaxed">
              Stratégies de contenu multilingues pour engager votre audience B2B et B2C 
              au Luxembourg et dans la Grande Région.
            </p>
          </motion.div>

          <div className="grid lg:grid-cols-3 gap-8">
            {/* Blog Strategy */}
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={fadeInUp}
              className="bg-white rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 p-8 border border-gray-100"
            >
              <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mb-6">
                <span className="text-2xl">📝</span>
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-4">Stratégie Blog</h3>
              <p className="text-gray-700 mb-6 leading-relaxed">
                Développement de blogs d'entreprise avec calendrier éditorial optimisé 
                pour le référencement et l'engagement au Luxembourg.
              </p>
              <ul className="space-y-3">
                {[
                  'Audit éditorial complet',
                  'Calendrier de publication',
                  'Rédaction SEO-friendly',
                  'Articles multilingues',
                  'Performance tracking'
                ].map((feature, idx) => (
                  <li key={idx} className="flex items-center text-gray-700">
                    <div className="w-2 h-2 rounded-full bg-blue-500 mr-3 flex-shrink-0"></div>
                    <span className="font-medium">{feature}</span>
                  </li>
                ))}
              </ul>
            </motion.div>

            {/* Video Marketing */}
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={fadeInUp}
              transition={{ delay: 0.2 }}
              className="bg-white rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 p-8 border border-gray-100"
            >
              <div className="w-16 h-16 bg-red-100 rounded-full flex items-center justify-center mb-6">
                <span className="text-2xl">🎥</span>
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-4">Video Marketing</h3>
              <p className="text-gray-700 mb-6 leading-relaxed">
                Production de contenu vidéo engageant pour réseaux sociaux, 
                site web et campagnes marketing au Luxembourg.
              </p>
              <ul className="space-y-3">
                {[
                  'Scripts et scénarimages',
                  'Production vidéo professionnelle',
                  'Montage et post-production',
                  'Optimisation multi-plateformes',
                  'Sous-titrage multilingue'
                ].map((feature, idx) => (
                  <li key={idx} className="flex items-center text-gray-700">
                    <div className="w-2 h-2 rounded-full bg-red-500 mr-3 flex-shrink-0"></div>
                    <span className="font-medium">{feature}</span>
                  </li>
                ))}
              </ul>
            </motion.div>

            {/* Newsletter Campaigns */}
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={fadeInUp}
              transition={{ delay: 0.4 }}
              className="bg-white rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 p-8 border border-gray-100"
            >
              <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mb-6">
                <span className="text-2xl">📧</span>
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-4">Newsletter & Email</h3>
              <p className="text-gray-700 mb-6 leading-relaxed">
                Campagnes email marketing personnalisées et newsletters 
                engageantes conformes au RGPD européen.
              </p>
              <ul className="space-y-3">
                {[
                  'Segmentation audience',
                  'Templates personnalisés',
                  'Automatisation workflows',
                  'A/B testing campaigns',
                  'Conformité RGPD'
                ].map((feature, idx) => (
                  <li key={idx} className="flex items-center text-gray-700">
                    <div className="w-2 h-2 rounded-full bg-green-500 mr-3 flex-shrink-0"></div>
                    <span className="font-medium">{feature}</span>
                  </li>
                ))}
              </ul>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Content Types Section */}
      <section className="py-24 bg-gray-50">
        <div className="max-w-7xl mx-auto px-6">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeInUp}
            className="text-center mb-16"
          >
            <span className="inline-block bg-brand text-gray-900 px-4 py-2 rounded-full text-sm font-bold mb-8">
              TYPES DE CONTENU
            </span>
            <h2 className="text-4xl md:text-5xl font-bold mb-6 text-gray-900">
              Formats Adaptés à Vos Objectifs
            </h2>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              {
                icon: '📊',
                title: 'Études de Cas',
                description: 'Success stories et retours clients pour établir votre crédibilité'
              },
              {
                icon: '📋',
                title: 'Livres Blancs',
                description: 'Contenus techniques pour positionner votre expertise'
              },
              {
                icon: '📱',
                title: 'Infographies',
                description: 'Visualisations engageantes de vos données et concepts'
              },
              {
                icon: '🎙️',
                title: 'Podcasts',
                description: 'Format audio pour toucher une audience en mobilité'
              },
              {
                icon: '📈',
                title: 'Rapports',
                description: 'Analyses sectorielles et tendances du marché luxembourgeois'
              },
              {
                icon: '🎯',
                title: 'Landing Pages',
                description: 'Pages optimisées pour la conversion et lead generation'
              },
              {
                icon: '📚',
                title: 'Guides Pratiques',
                description: 'Contenus éducatifs pour accompagner vos prospects'
              },
              {
                icon: '🎨',
                title: 'Contenus Visuels',
                description: 'Designs et illustrations pour tous vos supports'
              }
            ].map((item, idx) => (
              <motion.div
                key={idx}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                variants={fadeInUp}
                transition={{ delay: idx * 0.1 }}
                className="text-center bg-white p-6 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300"
              >
                <div className="w-16 h-16 bg-brand rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-2xl">{item.icon}</span>
                </div>
                <h3 className="text-lg font-bold text-gray-900 mb-3">{item.title}</h3>
                <p className="text-gray-600 text-sm leading-relaxed">{item.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeInUp}
            className="text-center mb-16"
          >
            <span className="inline-block bg-brand text-gray-900 px-4 py-2 rounded-full text-sm font-bold mb-8">
              NOTRE PROCESSUS
            </span>
            <h2 className="text-4xl md:text-5xl font-bold mb-6 text-gray-900">
              Méthodologie Content Marketing
            </h2>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-5 gap-8">
            {[
              {
                step: '01',
                title: 'Audit',
                description: 'Analyse de votre contenu existant et concurrence',
                icon: '🔍'
              },
              {
                step: '02',
                title: 'Stratégie',
                description: 'Définition des objectifs et personas cibles',
                icon: '🎯'
              },
              {
                step: '03',
                title: 'Création',
                description: 'Production de contenu multilingue et multiformat',
                icon: '✍️'
              },
              {
                step: '04',
                title: 'Distribution',
                description: 'Diffusion optimisée sur tous les canaux',
                icon: '📢'
              },
              {
                step: '05',
                title: 'Mesure',
                description: 'Analyse performance et optimisation continue',
                icon: '📊'
              }
            ].map((item, idx) => (
              <motion.div
                key={idx}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                variants={fadeInUp}
                transition={{ delay: idx * 0.1 }}
                className="text-center"
              >
                <div className="w-20 h-20 bg-brand rounded-full flex items-center justify-center mx-auto mb-6">
                  <span className="text-3xl">{item.icon}</span>
                </div>
                <div className="text-brand text-lg font-bold mb-2">{item.step}</div>
                <h3 className="text-xl font-bold text-gray-900 mb-4">{item.title}</h3>
                <p className="text-gray-600 leading-relaxed text-sm">{item.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Pricing Section */}
      <section className="py-24 bg-gray-50">
        <div className="max-w-7xl mx-auto px-6">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeInUp}
            className="text-center mb-16"
          >
            <span className="inline-block bg-brand text-gray-900 px-4 py-2 rounded-full text-sm font-bold mb-8">
              PACKAGES CONTENT
            </span>
            <h2 className="text-4xl md:text-5xl font-bold mb-6 text-gray-900">
              Formules sur Mesure
            </h2>
            <p className="text-xl max-w-4xl mx-auto text-gray-600 leading-relaxed">
              Packages content marketing adaptés à votre volume de production
            </p>
          </motion.div>

          <div className="grid lg:grid-cols-3 gap-8">
            {[
              {
                name: 'Starter Content',
                price: '1.290€',
                period: '/mois',
                description: 'Pour débuter votre stratégie',
                features: [
                  '4 articles de blog/mois',
                  '2 newsletters/mois',
                  '8 posts réseaux sociaux',
                  'Calendrier éditorial',
                  'SEO basique',
                  'Reporting mensuel'
                ],
                popular: false
              },
              {
                name: 'Professional Content',
                price: '2.490€',
                period: '/mois',
                description: 'Stratégie complète B2B/B2C',
                features: [
                  '8 articles de blog/mois',
                  '4 newsletters/mois',
                  '16 posts réseaux sociaux',
                  '1 livre blanc/trimestre',
                  'SEO avancé',
                  '2 vidéos/mois',
                  'Reporting détaillé'
                ],
                popular: true
              },
              {
                name: 'Enterprise Content',
                price: '4.490€',
                period: '/mois',
                description: 'Production intensive',
                features: [
                  '16 articles de blog/mois',
                  'Newsletters illimitées',
                  '32 posts réseaux sociaux',
                  '2 livres blancs/trimestre',
                  'SEO technique',
                  '4 vidéos/mois',
                  'Podcast mensuel',
                  'Support dédié'
                ],
                popular: false
              }
            ].map((plan, idx) => (
              <motion.div
                key={idx}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                variants={fadeInUp}
                transition={{ delay: idx * 0.1 }}
                className={`relative bg-white rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 p-8 border ${plan.popular ? 'border-brand ring-2 ring-brand' : 'border-gray-100'}`}
              >
                {plan.popular && (
                  <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                    <span className="bg-brand text-gray-900 px-4 py-2 rounded-full text-sm font-bold">
                      ⭐ POPULAIRE
                    </span>
                  </div>
                )}
                
                <div className="text-center mb-8">
                  <h3 className="text-2xl font-bold text-gray-900 mb-2">{plan.name}</h3>
                  <p className="text-gray-600 mb-4">{plan.description}</p>
                  <div className="text-4xl font-bold text-gray-900 mb-2">
                    {plan.price}
                    <span className="text-lg font-normal text-gray-600">{plan.period}</span>
                  </div>
                </div>
                
                <ul className="space-y-4 mb-8">
                  {plan.features.map((feature, featureIdx) => (
                    <li key={featureIdx} className="flex items-center text-gray-700">
                      <div className="w-2 h-2 rounded-full bg-brand mr-3 flex-shrink-0"></div>
                      <span>{feature}</span>
                    </li>
                  ))}
                </ul>
                
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className={`w-full py-4 rounded-lg font-bold transition-all duration-300 ${
                    plan.popular 
                      ? 'bg-brand text-gray-900 shadow-lg hover:shadow-xl' 
                      : 'bg-gray-900 text-white hover:bg-gray-800'
                  }`}
                >
                  Choisir ce package
                </motion.button>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Luxembourg Benefits */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeInUp}
            className="text-center mb-16"
          >
            <span className="inline-block bg-brand text-gray-900 px-4 py-2 rounded-full text-sm font-bold mb-8">
              AVANTAGES LUXEMBOURG
            </span>
            <h2 className="text-4xl md:text-5xl font-bold mb-6 text-gray-900">
              Expertise du Marché Local
            </h2>
          </motion.div>

          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={fadeInUp}
            >
              <div className="space-y-8">
                {[
                  {
                    icon: '🌍',
                    title: 'Contenu Multilingue',
                    description: 'Rédaction native en français, allemand et anglais pour toucher tous vos marchés cibles.'
                  },
                  {
                    icon: '⚖️',
                    title: 'Conformité RGPD',
                    description: 'Respect strict des réglementations européennes pour tous vos contenus et campagnes email.'
                  },
                  {
                    icon: '🏢',
                    title: 'Secteurs Clés',
                    description: 'Expertise finance, immobilier, tech et services aux entreprises du marché luxembourgeois.'
                  },
                  {
                    icon: '📍',
                    title: 'Grande Région',
                    description: 'Stratégies transfrontalières pour maximiser votre portée en Belgique, France et Allemagne.'
                  }
                ].map((benefit, idx) => (
                  <motion.div
                    key={idx}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true }}
                    variants={fadeInUp}
                    transition={{ delay: idx * 0.1 }}
                    className="flex items-start space-x-4"
                  >
                    <div className="w-12 h-12 bg-brand rounded-full flex items-center justify-center flex-shrink-0">
                      <span className="text-xl">{benefit.icon}</span>
                    </div>
                    <div>
                      <h3 className="text-xl font-bold text-gray-900 mb-2">{benefit.title}</h3>
                      <p className="text-gray-600 leading-relaxed">{benefit.description}</p>
                    </div>
                  </motion.div>
                ))}
              </div>
            </motion.div>

            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={fadeInUp}
              transition={{ delay: 0.3 }}
              className="lg:pl-8"
            >
              <div 
                className="h-96 bg-cover bg-center bg-no-repeat rounded-2xl shadow-lg"
                style={{
                  backgroundImage: `url('https://images.unsplash.com/photo-1542744173-8e7e53415bb0?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2340&q=80')`
                }}
              />
            </motion.div>
          </div>
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
        <div className="absolute inset-0 bg-gray-900/80"></div>
        
        <div className="max-w-6xl mx-auto px-6 text-center relative z-10">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeInUp}
          >
            <h2 className="text-4xl md:text-6xl font-bold mb-6 text-white">
              Prêt à Créer du{' '}
              <span className="text-brand">
                Contenu Engageant
              </span> ?
            </h2>
            <p className="text-xl mb-10 max-w-4xl mx-auto text-gray-200 leading-relaxed">
              Obtenez une consultation gratuite et découvrez comment développer 
              votre stratégie content marketing au Luxembourg.
            </p>
            <div className="flex flex-col md:flex-row gap-4 justify-center">
              <motion.button 
                whileHover={{ scale: 1.05, y: -2 }}
                whileTap={{ scale: 0.95 }}
                className="bg-brand text-gray-900 px-10 py-4 rounded-lg font-bold text-lg shadow-xl hover:shadow-2xl transition-all duration-300"
              >
                Consultation Gratuite →
              </motion.button>
              <motion.a 
                whileHover={{ scale: 1.05, y: -2 }}
                href="tel:+352123456789" 
                className="inline-flex items-center text-white border-2 border-white px-10 py-4 rounded-lg hover:bg-white hover:text-gray-900 transition-all duration-300 font-bold"
              >
                📞 +352 12 34 56 789
              </motion.a>
            </div>
          </motion.div>
        </div>
      </section>

    </div>
  );
};

export default ContentMarketingPage;