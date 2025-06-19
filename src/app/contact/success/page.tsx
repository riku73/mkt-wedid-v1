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
      staggerChildren: 0.2,
      delayChildren: 0.1
    }
  }
};

const ContactSuccessPage = () => {
  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden pt-20">
        <div 
          className="absolute inset-0 bg-cover bg-center bg-no-repeat"
          style={{
            backgroundImage: `url('https://images.unsplash.com/photo-1556761175-4b46a572b786?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2074&q=80')`
          }}
        />
        <div className="absolute inset-0 bg-gray-900/75"></div>
        
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center text-white">
          <motion.div
            initial="hidden"
            animate="visible"
            variants={staggerChildren}
          >
            <motion.div variants={fadeInUp} className="mb-8">
              <div className="inline-flex items-center justify-center w-24 h-24 bg-brand rounded-full mb-8">
                <span className="text-4xl">✅</span>
              </div>
            </motion.div>
            
            <motion.h1 variants={fadeInUp} className="text-5xl md:text-7xl font-bold mb-8 max-w-5xl mx-auto leading-tight">
              Message{' '}
              <span className="text-brand">
                Reçu !
              </span>
            </motion.h1>
            
            <motion.p variants={fadeInUp} className="text-xl md:text-2xl mb-12 max-w-4xl mx-auto text-gray-200 leading-relaxed font-normal">
              Merci pour votre message. Notre équipe vous contactera dans les 24 heures 
              pour discuter de votre projet et répondre à vos questions.
            </motion.p>
            
            <motion.div variants={fadeInUp} className="bg-white/10 backdrop-blur-sm rounded-2xl p-8 mb-12 max-w-3xl mx-auto">
              <h3 className="text-2xl font-bold mb-6 text-brand">Prochaines Étapes</h3>
              <div className="grid md:grid-cols-3 gap-6 text-left">
                <div className="flex items-start">
                  <div className="w-8 h-8 bg-brand rounded-full flex items-center justify-center mr-4 flex-shrink-0">
                    <span className="text-sm font-bold text-gray-900">1</span>
                  </div>
                  <div>
                    <h4 className="font-bold mb-2">Analyse</h4>
                    <p className="text-sm text-gray-300">Nous analysons votre demande et préparons une réponse personnalisée</p>
                  </div>
                </div>
                <div className="flex items-start">
                  <div className="w-8 h-8 bg-brand rounded-full flex items-center justify-center mr-4 flex-shrink-0">
                    <span className="text-sm font-bold text-gray-900">2</span>
                  </div>
                  <div>
                    <h4 className="font-bold mb-2">Contact</h4>
                    <p className="text-sm text-gray-300">Un membre de notre équipe vous contacte sous 24h</p>
                  </div>
                </div>
                <div className="flex items-start">
                  <div className="w-8 h-8 bg-brand rounded-full flex items-center justify-center mr-4 flex-shrink-0">
                    <span className="text-sm font-bold text-gray-900">3</span>
                  </div>
                  <div>
                    <h4 className="font-bold mb-2">Discussion</h4>
                    <p className="text-sm text-gray-300">Nous discutons de votre projet et de nos recommandations</p>
                  </div>
                </div>
              </div>
            </motion.div>
            
            <motion.div variants={fadeInUp} className="flex flex-col md:flex-row gap-4 justify-center items-center">
              <Link
                href="/consultation-gratuite"
                className="bg-brand text-gray-900 px-8 py-4 rounded-lg font-bold text-lg shadow-xl hover:shadow-2xl hover:bg-brand/90 transition-all duration-300"
              >
                Réserver une Consultation Gratuite →
              </Link>
              
              <Link
                href="/portfolio"
                className="text-white border-2 border-white px-8 py-4 rounded-lg hover:bg-white hover:text-gray-900 transition-all duration-300 font-semibold"
              >
                Découvrir notre Portfolio
              </Link>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Additional Information */}
      <section className="py-24 bg-gray-50">
        <div className="max-w-7xl mx-auto px-6">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={staggerChildren}
            className="text-center mb-16"
          >
            <motion.h2 variants={fadeInUp} className="text-4xl md:text-5xl font-bold mb-6 text-gray-900">
              En Attendant Notre Réponse
            </motion.h2>
            <motion.p variants={fadeInUp} className="text-xl max-w-4xl mx-auto text-gray-600 leading-relaxed">
              Découvrez nos services et réalisations pour mieux comprendre comment nous pouvons vous aider.
            </motion.p>
          </motion.div>

          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={staggerChildren}
            className="grid md:grid-cols-3 gap-8"
          >
            <motion.div variants={fadeInUp} className="bg-white p-8 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300">
              <div className="text-4xl mb-6">📱</div>
              <h3 className="text-xl font-bold mb-4 text-gray-900">Urgence ?</h3>
              <p className="text-gray-600 mb-6 leading-relaxed">
                Pour les demandes urgentes, n'hésitez pas à nous appeler directement. 
                Notre équipe est disponible du lundi au vendredi.
              </p>
              <a
                href="tel:+35228372410"
                className="inline-flex items-center justify-center w-full bg-gray-900 text-white px-6 py-3 rounded-lg font-medium hover:bg-gray-800 transition-colors"
              >
                📞 +352 28 37 24 10
              </a>
            </motion.div>

            <motion.div variants={fadeInUp} className="bg-white p-8 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300">
              <div className="text-4xl mb-6">💼</div>
              <h3 className="text-xl font-bold mb-4 text-gray-900">Notre Portfolio</h3>
              <p className="text-gray-600 mb-6 leading-relaxed">
                Explorez nos réalisations pour découvrir comment nous avons aidé 
                d'autres entreprises luxembourgeoises.
              </p>
              <Link
                href="/portfolio"
                className="inline-flex items-center justify-center w-full bg-brand text-gray-900 px-6 py-3 rounded-lg font-medium hover:bg-brand/90 transition-colors"
              >
                Voir nos Projets →
              </Link>
            </motion.div>

            <motion.div variants={fadeInUp} className="bg-white p-8 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300">
              <div className="text-4xl mb-6">📧</div>
              <h3 className="text-xl font-bold mb-4 text-gray-900">Email Direct</h3>
              <p className="text-gray-600 mb-6 leading-relaxed">
                Vous pouvez également nous écrire directement pour toute question 
                ou information complémentaire.
              </p>
              <a
                href="mailto:contact@wedid.lu"
                className="inline-flex items-center justify-center w-full bg-gray-900 text-white px-6 py-3 rounded-lg font-medium hover:bg-gray-800 transition-colors"
              >
                contact@wedid.lu
              </a>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Trust Signals */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={staggerChildren}
            className="text-center mb-16"
          >
            <motion.h2 variants={fadeInUp} className="text-4xl md:text-5xl font-bold mb-6 text-gray-900">
              Pourquoi Nous Faire Confiance ?
            </motion.h2>
          </motion.div>

          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={staggerChildren}
            className="grid md:grid-cols-2 lg:grid-cols-4 gap-8"
          >
            {[
              {
                icon: '🇱🇺',
                title: 'Expertise Locale',
                description: 'Connaissance approfondie du marché luxembourgeois'
              },
              {
                icon: '⚡',
                title: 'Réponse Rapide',
                description: 'Engagement de réponse sous 24h maximum'
              },
              {
                icon: '🏆',
                title: '100+ Projets',
                description: 'Plus de 100 entreprises nous font confiance'
              },
              {
                icon: '🎯',
                title: 'ROI Mesurable',
                description: 'Résultats concrets et mesurables pour nos clients'
              }
            ].map((feature, index) => (
              <motion.div
                key={index}
                variants={fadeInUp}
                className="text-center"
              >
                <div className="text-4xl mb-4">{feature.icon}</div>
                <h3 className="text-lg font-bold mb-2 text-gray-900">{feature.title}</h3>
                <p className="text-gray-600">{feature.description}</p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 bg-gray-900">
        <div className="max-w-6xl mx-auto px-6 text-center">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={staggerChildren}
          >
            <motion.h2 variants={fadeInUp} className="text-4xl md:text-6xl font-bold mb-6 text-white">
              Suivez-nous sur{' '}
              <span className="text-brand">
                LinkedIn
              </span>
            </motion.h2>
            <motion.p variants={fadeInUp} className="text-xl mb-10 max-w-4xl mx-auto text-gray-200 leading-relaxed">
              Restez informé de nos dernières actualités, conseils marketing et témoignages clients.
            </motion.p>
            <motion.div variants={fadeInUp} className="flex flex-col md:flex-row gap-4 justify-center">
              <a
                href="https://linkedin.com/company/wedid-luxembourg"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-brand text-gray-900 px-10 py-4 rounded-lg font-bold text-lg shadow-xl hover:shadow-2xl hover:bg-brand/90 transition-all duration-300"
              >
                Suivre sur LinkedIn →
              </a>
              <Link
                href="/services"
                className="text-white border-2 border-white px-10 py-4 rounded-lg hover:bg-white hover:text-gray-900 transition-all duration-300 font-bold"
              >
                Découvrir nos Services
              </Link>
            </motion.div>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default ContactSuccessPage;