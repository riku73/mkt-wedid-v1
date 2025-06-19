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

const ApplicationsWebPage = () => {
  return (
    <div className="min-h-screen bg-white">

      {/* Hero Section */}
      <section className="relative pt-20 pb-20 px-4 sm:pt-24 sm:pb-24 sm:px-6 lg:pt-32 lg:pb-32 overflow-hidden">
        <div 
          className="absolute inset-0 bg-cover bg-center bg-no-repeat"
          style={{
            backgroundImage: `url('https://images.unsplash.com/photo-1551288049-bebda4e38f71?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2340&q=80')`
          }}
        />
        <div className="absolute inset-0 bg-gray-900/75"></div>
        
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center text-white">
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
                💻 APPLICATIONS WEB LUXEMBOURG
              </span>
            </motion.div>
            
            <motion.h1 variants={fadeInUp} className="text-5xl md:text-7xl font-bold mb-8 max-w-5xl mx-auto leading-tight">
              Applications{' '}
              <span className="text-brand">
                Web Custom
              </span>{' '}
              au Luxembourg
            </motion.h1>
            
            <motion.p variants={fadeInUp} className="text-xl md:text-2xl mb-12 max-w-4xl mx-auto text-gray-200 leading-relaxed font-normal">
              Développement d'applications web sur mesure pour entreprises luxembourgeoises : 
              CRM, ERP, plateformes SaaS et outils métier.
            </motion.p>
            
            <motion.div variants={fadeInUp} className="flex flex-col md:flex-row gap-4 justify-center items-center">
              <motion.button 
                whileHover={{ scale: 1.05, y: -2 }}
                whileTap={{ scale: 0.95 }}
                className="bg-brand text-gray-900 px-8 py-4 rounded-lg font-bold text-lg shadow-xl hover:shadow-2xl transition-all duration-300"
              >
                Consultation Technique →
              </motion.button>
              
              <motion.a 
                whileHover={{ scale: 1.05, y: -2 }}
                href="#solutions" 
                className="text-white border-2 border-white px-8 py-4 rounded-lg hover:bg-white hover:text-gray-900 transition-all duration-300 font-semibold"
              >
                Nos Solutions
              </motion.a>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Solutions Section */}
      <section id="solutions" className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeInUp}
            className="text-center mb-16"
          >
            <span className="inline-block bg-brand text-gray-900 px-4 py-2 rounded-full text-sm font-bold mb-8">
              APPLICATIONS MÉTIER
            </span>
            <h2 className="text-4xl md:text-5xl font-bold mb-6 text-gray-900">
              Solutions Applicatives Complètes
            </h2>
            <p className="text-xl max-w-4xl mx-auto text-gray-600 leading-relaxed">
              Développement d'applications web robustes et évolutives, conçues pour 
              répondre aux besoins spécifiques des entreprises luxembourgeoises.
            </p>
          </motion.div>

          <div className="grid lg:grid-cols-3 gap-8">
            {/* Business Applications */}
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={fadeInUp}
              className="bg-white rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 p-8 border border-gray-100"
            >
              <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mb-6">
                <span className="text-2xl">🏢</span>
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-4">Applications Métier</h3>
              <p className="text-gray-700 mb-6 leading-relaxed">
                Outils sur mesure pour optimiser vos processus internes et 
                améliorer la productivité de vos équipes luxembourgeoises.
              </p>
              <ul className="space-y-3">
                {[
                  'CRM personnalisés',
                  'ERP sectoriels',
                  'Outils de reporting',
                  'Gestion de projets',
                  'Workflow automation'
                ].map((feature, idx) => (
                  <li key={idx} className="flex items-center text-gray-700">
                    <div className="w-2 h-2 rounded-full bg-blue-500 mr-3 flex-shrink-0"></div>
                    <span className="font-medium">{feature}</span>
                  </li>
                ))}
              </ul>
            </motion.div>

            {/* SaaS Platforms */}
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={fadeInUp}
              transition={{ delay: 0.2 }}
              className="bg-white rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 p-8 border border-gray-100"
            >
              <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mb-6">
                <span className="text-2xl">☁️</span>
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-4">Plateformes SaaS</h3>
              <p className="text-gray-700 mb-6 leading-relaxed">
                Développement de solutions SaaS multi-tenant pour 
                servir le marché luxembourgeois et européen.
              </p>
              <ul className="space-y-3">
                {[
                  'Architecture multi-tenant',
                  'APIs REST/GraphQL',
                  'Facturation automatisée',
                  'Dashboard analytics',
                  'Intégrations tierces'
                ].map((feature, idx) => (
                  <li key={idx} className="flex items-center text-gray-700">
                    <div className="w-2 h-2 rounded-full bg-green-500 mr-3 flex-shrink-0"></div>
                    <span className="font-medium">{feature}</span>
                  </li>
                ))}
              </ul>
            </motion.div>

            {/* Enterprise Systems */}
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={fadeInUp}
              transition={{ delay: 0.4 }}
              className="bg-white rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 p-8 border border-gray-100"
            >
              <div className="w-16 h-16 bg-purple-100 rounded-full flex items-center justify-center mb-6">
                <span className="text-2xl">🔧</span>
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-4">Systèmes Intégrés</h3>
              <p className="text-gray-700 mb-6 leading-relaxed">
                Intégration de systèmes complexes avec conformité bancaire 
                et réglementaire luxembourgeoise.
              </p>
              <ul className="space-y-3">
                {[
                  'Intégrations bancaires',
                  'Conformité CSSF',
                  'Sécurité renforcée',
                  'Audit trails',
                  'Haute disponibilité'
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
              Développement en 6 Phases
            </h2>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                step: '01',
                title: 'Découverte',
                description: 'Analyse des besoins métier et définition des spécifications techniques',
                icon: '🔍'
              },
              {
                step: '02',
                title: 'Architecture',
                description: 'Conception de l\'architecture technique et choix des technologies',
                icon: '🏗️'
              },
              {
                step: '03',
                title: 'Développement',
                description: 'Développement agile avec livraisons itératives et tests continus',
                icon: '💻'
              },
              {
                step: '04',
                title: 'Tests',
                description: 'Tests automatisés, sécurité et performance sur environnements dédiés',
                icon: '🧪'
              },
              {
                step: '05',
                title: 'Déploiement',
                description: 'Mise en production avec migration des données et formation utilisateurs',
                icon: '🚀'
              },
              {
                step: '06',
                title: 'Maintenance',
                description: 'Support technique, évolutions et optimisations continues',
                icon: '🔧'
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
              TECHNOLOGIES AVANCÉES
            </span>
            <h2 className="text-4xl md:text-5xl font-bold mb-6 text-gray-900">
              Stack Technique Enterprise
            </h2>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              {
                icon: '⚡',
                title: 'Performance',
                description: 'Applications ultra-rapides avec cache Redis et CDN'
              },
              {
                icon: '🔐',
                title: 'Sécurité',
                description: 'Chiffrement bout-en-bout et conformité RGPD'
              },
              {
                icon: '📊',
                title: 'Scalabilité',
                description: 'Architecture cloud native et auto-scaling'
              },
              {
                icon: '🔄',
                title: 'Intégrations',
                description: 'APIs modernes et connecteurs métier'
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
              TARIFICATION
            </span>
            <h2 className="text-4xl md:text-5xl font-bold mb-6 text-gray-900">
              Projets sur Mesure
            </h2>
            <p className="text-xl max-w-4xl mx-auto text-gray-600 leading-relaxed">
              Développement personnalisé selon la complexité et les besoins spécifiques
            </p>
          </motion.div>

          <div className="grid lg:grid-cols-3 gap-8">
            {[
              {
                name: 'Application Simple',
                price: '15.000€',
                period: '',
                description: 'Outil métier basique',
                features: [
                  'Interface utilisateur moderne',
                  'Base de données intégrée',
                  'Authentification sécurisée',
                  'Responsive design',
                  'Hébergement inclus (1 an)',
                  'Formation utilisateurs'
                ],
                popular: false
              },
              {
                name: 'Plateforme Avancée',
                price: '35.000€',
                period: '',
                description: 'Solution complète avec intégrations',
                features: [
                  'Architecture multi-modules',
                  'APIs et intégrations',
                  'Dashboard analytics',
                  'Gestion des rôles',
                  'Sauvegarde automatique',
                  'Support prioritaire',
                  'Évolutions incluses (6 mois)'
                ],
                popular: true
              },
              {
                name: 'Système Enterprise',
                price: '50.000€+',
                period: '',
                description: 'Solution entreprise complexe',
                features: [
                  'Architecture distribuée',
                  'Haute disponibilité',
                  'Conformité réglementaire',
                  'Intégrations complexes',
                  'Audit et monitoring',
                  'Support dédié 24/7',
                  'Maintenance premium'
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
                  Demander un devis
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
              Expertise Locale Reconnue
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
                    title: 'Conformité Réglementaire',
                    description: 'Expertise des réglementations luxembourgeoises et européennes pour le secteur financier et les entreprises.'
                  },
                  {
                    icon: '🔒',
                    title: 'Sécurité Bancaire',
                    description: 'Standards de sécurité élevés adaptés aux exigences du secteur financier luxembourgeois.'
                  },
                  {
                    icon: '🌐',
                    title: 'Environnement Multilingue',
                    description: 'Applications développées pour supporter le français, l\'allemand, l\'anglais et le luxembourgeois.'
                  },
                  {
                    icon: '📈',
                    title: 'Évolutivité Européenne',
                    description: 'Architecture conçue pour s\'adapter à l\'expansion européenne depuis le Luxembourg.'
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
                  backgroundImage: `url('https://images.unsplash.com/photo-1460925895917-afdab827c52f?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2426&q=80')`
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
              Prêt à Digitaliser Votre{' '}
              <span className="text-brand">
                Métier
              </span> ?
            </h2>
            <p className="text-xl mb-10 max-w-4xl mx-auto text-gray-200 leading-relaxed">
              Obtenez une consultation technique gratuite et découvrez comment une 
              application sur mesure peut transformer votre entreprise.
            </p>
            <div className="flex flex-col md:flex-row gap-4 justify-center">
              <motion.button 
                whileHover={{ scale: 1.05, y: -2 }}
                whileTap={{ scale: 0.95 }}
                className="bg-brand text-gray-900 px-10 py-4 rounded-lg font-bold text-lg shadow-xl hover:shadow-2xl transition-all duration-300"
              >
                Consultation Technique →
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

export default ApplicationsWebPage;