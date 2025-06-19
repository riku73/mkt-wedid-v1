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

const StrategieDigitalePage = () => {
  return (
    <div className="min-h-screen bg-white">

      {/* Hero Section */}
      <section className="relative min-h-[85vh] flex items-center justify-center overflow-hidden pt-20 pb-16 md:pb-20">
        <div 
          className="absolute inset-0 bg-cover bg-center bg-no-repeat"
          style={{
            backgroundImage: `url('https://images.unsplash.com/photo-1557804506-669a67965ba0?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2340&q=80')`
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
                🚀 STRATÉGIE DIGITALE LUXEMBOURG
              </span>
            </motion.div>
            
            <motion.h1 variants={fadeInUp} className="text-5xl md:text-7xl font-bold mb-8 max-w-5xl mx-auto leading-tight">
              Stratégie{' '}
              <span className="text-brand">
                Digitale
              </span>{' '}
              au Luxembourg
            </motion.h1>
            
            <motion.p variants={fadeInUp} className="text-xl md:text-2xl mb-12 max-w-4xl mx-auto text-gray-200 leading-relaxed font-normal">
              Transformation digitale pour entreprises luxembourgeoises : roadmap technologique, 
              optimisation processus et accélération de croissance.
            </motion.p>
            
            <motion.div variants={fadeInUp} className="flex flex-col md:flex-row gap-4 justify-center items-center">
              <motion.button 
                whileHover={{ scale: 1.05, y: -2 }}
                whileTap={{ scale: 0.95 }}
                className="bg-brand text-gray-900 px-8 py-4 rounded-lg font-bold text-lg shadow-xl hover:shadow-2xl transition-all duration-300"
              >
                Session Stratégique →
              </motion.button>
              
              <motion.a 
                whileHover={{ scale: 1.05, y: -2 }}
                href="#services" 
                className="text-white border-2 border-white px-8 py-4 rounded-lg hover:bg-white hover:text-gray-900 transition-all duration-300 font-semibold"
              >
                Notre Approche
              </motion.a>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Services Section */}
      <section id="services" className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeInUp}
            className="text-center mb-16"
          >
            <span className="inline-block bg-brand text-gray-900 px-4 py-2 rounded-full text-sm font-bold mb-8">
              TRANSFORMATION DIGITALE
            </span>
            <h2 className="text-4xl md:text-5xl font-bold mb-6 text-gray-900">
              Stratégie Digitale Complète
            </h2>
            <p className="text-xl max-w-4xl mx-auto text-gray-600 leading-relaxed">
              Accompagnement stratégique pour accélérer votre transformation digitale 
              et optimiser votre positionnement concurrentiel au Luxembourg.
            </p>
          </motion.div>

          <div className="grid lg:grid-cols-3 gap-8">
            {/* Digital Audit */}
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={fadeInUp}
              className="bg-white rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 p-8 border border-gray-100"
            >
              <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mb-6">
                <span className="text-2xl">🔍</span>
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-4">Audit Digital</h3>
              <p className="text-gray-700 mb-6 leading-relaxed">
                Évaluation complète de votre maturité digitale et 
                identification des opportunités de transformation.
              </p>
              <ul className="space-y-3">
                {[
                  'Maturité digitale actuelle',
                  'Analyse des processus',
                  'Évaluation technologique',
                  'Gaps et opportunités',
                  'Benchmark concurrentiel'
                ].map((feature, idx) => (
                  <li key={idx} className="flex items-center text-gray-700">
                    <div className="w-2 h-2 rounded-full bg-blue-500 mr-3 flex-shrink-0"></div>
                    <span className="font-medium">{feature}</span>
                  </li>
                ))}
              </ul>
            </motion.div>

            {/* Technology Roadmap */}
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={fadeInUp}
              transition={{ delay: 0.2 }}
              className="bg-white rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 p-8 border border-gray-100"
            >
              <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mb-6">
                <span className="text-2xl">🗺️</span>
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-4">Roadmap Technologique</h3>
              <p className="text-gray-700 mb-6 leading-relaxed">
                Plan de transformation personnalisé avec priorisation 
                des initiatives et calendrier de mise en œuvre.
              </p>
              <ul className="space-y-3">
                {[
                  'Feuille de route 2-3 ans',
                  'Priorisation des projets',
                  'Estimation budgétaire',
                  'Planification ressources',
                  'Jalons et KPIs'
                ].map((feature, idx) => (
                  <li key={idx} className="flex items-center text-gray-700">
                    <div className="w-2 h-2 rounded-full bg-green-500 mr-3 flex-shrink-0"></div>
                    <span className="font-medium">{feature}</span>
                  </li>
                ))}
              </ul>
            </motion.div>

            {/* Change Management */}
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={fadeInUp}
              transition={{ delay: 0.4 }}
              className="bg-white rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 p-8 border border-gray-100"
            >
              <div className="w-16 h-16 bg-purple-100 rounded-full flex items-center justify-center mb-6">
                <span className="text-2xl">🤝</span>
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-4">Conduite du Changement</h3>
              <p className="text-gray-700 mb-6 leading-relaxed">
                Accompagnement des équipes dans l'adoption des nouvelles 
                technologies et optimisation des processus.
              </p>
              <ul className="space-y-3">
                {[
                  'Plan de conduite du changement',
                  'Formation des équipes',
                  'Communication interne',
                  'Gestion des résistances',
                  'Suivi adoption'
                ].map((feature, idx) => (
                  <li key={idx} className="flex items-center text-gray-700">
                    <div className="w-2 h-2 rounded-full bg-purple-500 mr-3 flex-shrink-0"></div>
                    <span className="font-medium">{feature}</span>
                  </li>
                ))}
              </ul>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Process Section */}
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
              NOTRE PROCESSUS
            </span>
            <h2 className="text-4xl md:text-5xl font-bold mb-6 text-gray-900">
              Transformation en 4 Phases
            </h2>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              {
                step: '01',
                title: 'Audit',
                description: 'Évaluation de la maturité digitale et des processus actuels',
                icon: '📊'
              },
              {
                step: '02',
                title: 'Stratégie',
                description: 'Définition de la vision et roadmap de transformation',
                icon: '🎯'
              },
              {
                step: '03',
                title: 'Roadmap',
                description: 'Planification détaillée des initiatives et ressources',
                icon: '🗺️'
              },
              {
                step: '04',
                title: 'Optimisation',
                description: 'Suivi de la mise en œuvre et ajustements continus',
                icon: '⚡'
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
                <p className="text-gray-600 leading-relaxed">{item.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Features Section */}
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
              DOMAINES D'EXPERTISE
            </span>
            <h2 className="text-4xl md:text-5xl font-bold mb-6 text-gray-900">
              Technologies & Processus
            </h2>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              {
                icon: '☁️',
                title: 'Cloud Strategy',
                description: 'Migration cloud et optimisation infrastructure'
              },
              {
                icon: '🤖',
                title: 'Automation',
                description: 'Automatisation des processus métier'
              },
              {
                icon: '📊',
                title: 'Data Strategy',
                description: 'Stratégie données et business intelligence'
              },
              {
                icon: '🔒',
                title: 'Cybersécurité',
                description: 'Sécurisation de la transformation digitale'
              }
            ].map((item, idx) => (
              <motion.div
                key={idx}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                variants={fadeInUp}
                transition={{ delay: idx * 0.1 }}
                className="text-center bg-gray-50 p-6 rounded-2xl hover:shadow-lg transition-all duration-300"
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
              PACKAGES STRATÉGIE
            </span>
            <h2 className="text-4xl md:text-5xl font-bold mb-6 text-gray-900">
              Accompagnement Stratégique
            </h2>
            <p className="text-xl max-w-4xl mx-auto text-gray-600 leading-relaxed">
              Formules personnalisées selon la complexité de votre transformation
            </p>
          </motion.div>

          <div className="grid lg:grid-cols-3 gap-8">
            {[
              {
                name: 'Stratégie Focus',
                price: '4.990€',
                period: '',
                description: 'PME en croissance',
                features: [
                  'Audit digital complet',
                  'Roadmap 12 mois',
                  'Priorisation initiatives',
                  'Plan de financement',
                  'Présentation exécutive',
                  'Support 30 jours'
                ],
                popular: false
              },
              {
                name: 'Transformation 360°',
                price: '12.990€',
                period: '',
                description: 'Entreprises établies',
                features: [
                  'Stratégie digitale complète',
                  'Roadmap 24 mois détaillée',
                  'Architecture technologique',
                  'Plan conduite changement',
                  'Business case ROI',
                  'Workshops équipe direction',
                  'Accompagnement 90 jours'
                ],
                popular: true
              },
              {
                name: 'Retainer Stratégique',
                price: '2.490€ - 7.990€',
                period: '/mois',
                description: 'Accompagnement continu',
                features: [
                  'Comité stratégique mensuel',
                  'Suivi roadmap continue',
                  'Optimisation en temps réel',
                  'Support décisionnel',
                  'Veille technologique',
                  'Reporting mensuel',
                  'Accès prioritaire consultant'
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
                className={`relative bg-white rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 p-8 border ${
                  plan.popular ? 'border-brand ring-2 ring-brand' : 'border-gray-100'
                }`}
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
                  {plan.price.includes('-') ? 'Devis personnalisé' : 'Démarrer la stratégie'}
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
              Expertise Transformation Locale
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
                    icon: '🏛️',
                    title: 'Écosystème Digital Luxembourg',
                    description: 'Connaissance approfondie de l\'écosystème technologique et des acteurs clés du Luxembourg.'
                  },
                  {
                    icon: '💼',
                    title: 'Secteurs Spécialisés',
                    description: 'Expertise sectorielle : finance, services aux entreprises, industrie et institutions européennes.'
                  },
                  {
                    icon: '🌐',
                    title: 'Expansion Européenne',
                    description: 'Stratégies digitales conçues pour faciliter l\'expansion européenne depuis le Luxembourg.'
                  },
                  {
                    icon: '🔒',
                    title: 'Compliance & Sécurité',
                    description: 'Intégration des exigences réglementaires luxembourgeoises et européennes dans la stratégie.'
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
                  backgroundImage: `url('https://images.unsplash.com/photo-1451187580459-43490279c0fa?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2072&q=80')`
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
              Prêt à Accélérer Votre{' '}
              <span className="text-brand">
                Transformation Digitale
              </span> ?
            </h2>
            <p className="text-xl mb-10 max-w-4xl mx-auto text-gray-200 leading-relaxed">
              Obtenez une session stratégique gratuite et découvrez comment 
              optimiser votre roadmap de transformation digitale.
            </p>
            <div className="flex flex-col md:flex-row gap-4 justify-center">
              <motion.button 
                whileHover={{ scale: 1.05, y: -2 }}
                whileTap={{ scale: 0.95 }}
                className="bg-brand text-gray-900 px-10 py-4 rounded-lg font-bold text-lg shadow-xl hover:shadow-2xl transition-all duration-300"
              >
                Session Stratégique Gratuite →
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

export default StrategieDigitalePage;