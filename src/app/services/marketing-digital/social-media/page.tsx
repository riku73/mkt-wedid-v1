'use client';

import { motion, Variants } from 'framer-motion';
import Link from 'next/link';
import { Metadata } from 'next';

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

const SocialMediaPage = () => {
  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="relative min-h-[85vh] flex items-center justify-center overflow-hidden pt-20">
        <div 
          className="absolute inset-0 bg-cover bg-center bg-no-repeat"
          style={{
            backgroundImage: `url('https://images.unsplash.com/photo-1611224923853-80b023f02d71?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2339&q=80')`
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
                📱 SOCIAL MEDIA LUXEMBOURG
              </span>
            </motion.div>
            
            <motion.h1 variants={fadeInUp} className="text-5xl md:text-7xl font-bold mb-8 max-w-5xl mx-auto leading-tight">
              Marketing{' '}
              <span className="text-brand">
                Social Media
              </span>{' '}
              au Luxembourg
            </motion.h1>
            
            <motion.p variants={fadeInUp} className="text-xl md:text-2xl mb-12 max-w-4xl mx-auto text-gray-200 leading-relaxed font-normal">
              Stratégies social media multilingues pour engager votre audience luxembourgeoise 
              sur Facebook, LinkedIn et Instagram.
            </motion.p>
            
            <motion.div variants={fadeInUp} className="flex flex-col md:flex-row gap-4 justify-center items-center">
              <motion.button 
                whileHover={{ scale: 1.05, y: -2 }}
                whileTap={{ scale: 0.95 }}
                className="bg-brand text-gray-900 px-8 py-4 rounded-lg font-bold text-lg shadow-xl hover:shadow-2xl transition-all duration-300"
              >
                Audit Social Gratuit →
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
              Stratégie Social Media Complète
            </h2>
            <p className="text-xl max-w-4xl mx-auto text-gray-600 leading-relaxed">
              Gestion professionnelle de vos réseaux sociaux avec une approche 
              multilingue adaptée au marché luxembourgeois.
            </p>
          </motion.div>

          <div className="grid lg:grid-cols-3 gap-8">
            {/* Facebook Strategy */}
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={fadeInUp}
              className="bg-white rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 p-8 border border-gray-100"
            >
              <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mb-6">
                <span className="text-2xl">📘</span>
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-4">Facebook Marketing</h3>
              <p className="text-gray-700 mb-6 leading-relaxed">
                Stratégies Facebook optimisées pour les entreprises luxembourgeoises, 
                avec ciblage géographique et démographique précis.
              </p>
              <ul className="space-y-3">
                {[
                  'Gestion de pages professionnelles',
                  'Publicités Facebook Ads',
                  'Création de contenu engageant',
                  'Community management',
                  'Reporting mensuel détaillé'
                ].map((feature, idx) => (
                  <li key={idx} className="flex items-center text-gray-700">
                    <div className="w-2 h-2 rounded-full bg-blue-500 mr-3 flex-shrink-0"></div>
                    <span className="font-medium">{feature}</span>
                  </li>
                ))}
              </ul>
            </motion.div>

            {/* LinkedIn Strategy */}
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={fadeInUp}
              transition={{ delay: 0.2 }}
              className="bg-white rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 p-8 border border-gray-100"
            >
              <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mb-6">
                <span className="text-2xl">💼</span>
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-4">LinkedIn B2B</h3>
              <p className="text-gray-700 mb-6 leading-relaxed">
                Développement de votre présence professionnelle sur LinkedIn, 
                plateforme clé pour le networking au Luxembourg.
              </p>
              <ul className="space-y-3">
                {[
                  'Optimisation profils et pages',
                  'Stratégie de contenu B2B',
                  'LinkedIn Ads ciblées',
                  'Génération de leads qualifiés',
                  'Networking professionnel'
                ].map((feature, idx) => (
                  <li key={idx} className="flex items-center text-gray-700">
                    <div className="w-2 h-2 rounded-full bg-blue-600 mr-3 flex-shrink-0"></div>
                    <span className="font-medium">{feature}</span>
                  </li>
                ))}
              </ul>
            </motion.div>

            {/* Instagram Strategy */}
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={fadeInUp}
              transition={{ delay: 0.4 }}
              className="bg-white rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 p-8 border border-gray-100"
            >
              <div className="w-16 h-16 bg-pink-100 rounded-full flex items-center justify-center mb-6">
                <span className="text-2xl">📸</span>
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-4">Instagram Visual</h3>
              <p className="text-gray-700 mb-6 leading-relaxed">
                Création d'une identité visuelle forte sur Instagram pour 
                toucher les jeunes professionnels luxembourgeois.
              </p>
              <ul className="space-y-3">
                {[
                  'Stratégie de contenu visuel',
                  'Stories et Reels créatifs',
                  'Hashtags stratégiques',
                  'Collaborations influenceurs',
                  'Instagram Shopping'
                ].map((feature, idx) => (
                  <li key={idx} className="flex items-center text-gray-700">
                    <div className="w-2 h-2 rounded-full bg-pink-500 mr-3 flex-shrink-0"></div>
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
              Méthode Éprouvée en 4 Étapes
            </h2>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              {
                step: '01',
                title: 'Audit Social',
                description: 'Analyse complète de votre présence actuelle sur les réseaux sociaux',
                icon: '🔍'
              },
              {
                step: '02',
                title: 'Stratégie',
                description: 'Développement de la stratégie multilingue adaptée au Luxembourg',
                icon: '📋'
              },
              {
                step: '03',
                title: 'Création',
                description: 'Production de contenu engageant et campagnes ciblées',
                icon: '🎨'
              },
              {
                step: '04',
                title: 'Optimisation',
                description: 'Suivi des performances et optimisation continue',
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
                <p className="text-gray-600 leading-relaxed">{item.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Pricing Section */}
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
              TARIFS
            </span>
            <h2 className="text-4xl md:text-5xl font-bold mb-6 text-gray-900">
              Packages Social Media
            </h2>
            <p className="text-xl max-w-4xl mx-auto text-gray-600 leading-relaxed">
              Formules adaptées à tous types d'entreprises luxembourgeoises
            </p>
          </motion.div>

          <div className="grid lg:grid-cols-3 gap-8">
            {[
              {
                name: 'Starter',
                price: '890€',
                period: '/mois',
                description: 'Pour les petites entreprises',
                features: [
                  '2 plateformes sociales',
                  '8 publications/mois',
                  'Community management',
                  'Reporting mensuel',
                  'Support email'
                ],
                popular: false
              },
              {
                name: 'Professional',
                price: '1.490€',
                period: '/mois',
                description: 'Pour les entreprises en croissance',
                features: [
                  '3 plateformes sociales',
                  '16 publications/mois',
                  'Community management',
                  'Publicités sociales',
                  'Reporting détaillé',
                  'Support prioritaire'
                ],
                popular: true
              },
              {
                name: 'Enterprise',
                price: '2.490€',
                period: '/mois',
                description: 'Pour les grandes entreprises',
                features: [
                  'Toutes les plateformes',
                  '32 publications/mois',
                  'Community management',
                  'Campagnes publicitaires',
                  'Reporting en temps réel',
                  'Support dédié',
                  'Influencer marketing'
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
                  Choisir ce plan
                </motion.button>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Luxembourg Benefits */}
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
                    title: 'Approche Multilingue',
                    description: 'Contenu adapté en français, allemand et anglais pour toucher tous les segments de marché luxembourgeois.'
                  },
                  {
                    icon: '🤝',
                    title: 'Networking Professionnel',
                    description: 'Stratégies LinkedIn optimisées pour le networking dans l\'écosystème financier et entrepreneurial local.'
                  },
                  {
                    icon: '📊',
                    title: 'Conformité RGPD',
                    description: 'Gestion des données et publicités en parfaite conformité avec les réglementations européennes.'
                  },
                  {
                    icon: '🎯',
                    title: 'Ciblage Précis',
                    description: 'Connaissance approfondie des habitudes digitales et préférences des consommateurs luxembourgeois.'
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
                  backgroundImage: `url('https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2340&q=80')`
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
              Prêt à Booster Votre{' '}
              <span className="text-brand">
                Présence Sociale
              </span> ?
            </h2>
            <p className="text-xl mb-10 max-w-4xl mx-auto text-gray-200 leading-relaxed">
              Obtenez un audit gratuit de vos réseaux sociaux et découvrez comment 
              améliorer votre engagement au Luxembourg.
            </p>
            <div className="flex flex-col md:flex-row gap-4 justify-center">
              <motion.button 
                whileHover={{ scale: 1.05, y: -2 }}
                whileTap={{ scale: 0.95 }}
                className="bg-brand text-gray-900 px-10 py-4 rounded-lg font-bold text-lg shadow-xl hover:shadow-2xl transition-all duration-300"
              >
                Audit Social Gratuit →
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

export default SocialMediaPage;