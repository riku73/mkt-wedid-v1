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

const ConsultationSuccessPage = () => {
  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden pt-20">
        <div 
          className="absolute inset-0 bg-cover bg-center bg-no-repeat"
          style={{
            backgroundImage: `url('https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2074&q=80')`
          }}
        />
        <div className="absolute inset-0 bg-gray-900/75"></div>
        
        <div className="max-w-6xl mx-auto px-6 relative z-10 text-center text-white">
          <motion.div
            initial="hidden"
            animate="visible"
            variants={staggerChildren}
          >
            <motion.div variants={fadeInUp} className="mb-8">
              <div className="inline-flex items-center justify-center w-24 h-24 bg-brand rounded-full mb-8">
                <span className="text-4xl">🎉</span>
              </div>
            </motion.div>
            
            <motion.h1 variants={fadeInUp} className="text-5xl md:text-7xl font-bold mb-8 max-w-5xl mx-auto leading-tight">
              Demande de Consultation{' '}
              <span className="text-brand">
                Confirmée !
              </span>
            </motion.h1>
            
            <motion.p variants={fadeInUp} className="text-xl md:text-2xl mb-12 max-w-4xl mx-auto text-gray-200 leading-relaxed font-normal">
              Merci pour ces informations détaillées. Notre équipe va analyser votre demande 
              et vous contacter dans les 24 heures pour planifier votre consultation gratuite de 45 minutes.
            </motion.p>
            
            <motion.div variants={fadeInUp} className="bg-white/10 backdrop-blur-sm rounded-2xl p-8 mb-12 max-w-4xl mx-auto">
              <h3 className="text-2xl font-bold mb-8 text-brand">Processus de Consultation</h3>
              <div className="grid md:grid-cols-4 gap-6 text-left">
                <div className="flex flex-col items-center text-center">
                  <div className="w-12 h-12 bg-brand rounded-full flex items-center justify-center mb-4">
                    <span className="text-lg font-bold text-gray-900">1</span>
                  </div>
                  <h4 className="font-bold mb-2">Analyse</h4>
                  <p className="text-sm text-gray-300">24h pour analyser votre demande en détail</p>
                </div>
                <div className="flex flex-col items-center text-center">
                  <div className="w-12 h-12 bg-brand rounded-full flex items-center justify-center mb-4">
                    <span className="text-lg font-bold text-gray-900">2</span>
                  </div>
                  <h4 className="font-bold mb-2">Planification</h4>
                  <p className="text-sm text-gray-300">Contact pour fixer le rendez-vous</p>
                </div>
                <div className="flex flex-col items-center text-center">
                  <div className="w-12 h-12 bg-brand rounded-full flex items-center justify-center mb-4">
                    <span className="text-lg font-bold text-gray-900">3</span>
                  </div>
                  <h4 className="font-bold mb-2">Consultation</h4>
                  <p className="text-sm text-gray-300">45 minutes d'expertise dédiée</p>
                </div>
                <div className="flex flex-col items-center text-center">
                  <div className="w-12 h-12 bg-brand rounded-full flex items-center justify-center mb-4">
                    <span className="text-lg font-bold text-gray-900">4</span>
                  </div>
                  <h4 className="font-bold mb-2">Recommandations</h4>
                  <p className="text-sm text-gray-300">Plan d'action personnalisé</p>
                </div>
              </div>
            </motion.div>
            
            <motion.div variants={fadeInUp} className="flex flex-col md:flex-row gap-4 justify-center items-center">
              <Link
                href="/devis"
                className="bg-brand text-gray-900 px-8 py-4 rounded-lg font-bold text-lg shadow-xl hover:shadow-2xl hover:bg-brand/90 transition-all duration-300"
              >
                Demander un Devis Détaillé →
              </Link>
              
              <a
                href="tel:+35228372410"
                className="text-white border-2 border-white px-8 py-4 rounded-lg hover:bg-white hover:text-gray-900 transition-all duration-300 font-semibold"
              >
                📞 Appel Direct
              </a>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* What to Expect */}
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
              Ce que Vous Obtiendrez Lors de Votre Consultation
            </motion.h2>
            <motion.p variants={fadeInUp} className="text-xl max-w-4xl mx-auto text-gray-600 leading-relaxed">
              Une session personnalisée de 45 minutes avec nos experts pour établir une stratégie sur-mesure.
            </motion.p>
          </motion.div>

          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={staggerChildren}
            className="grid md:grid-cols-2 lg:grid-cols-3 gap-8"
          >
            <motion.div variants={fadeInUp} className="bg-white p-8 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300">
              <div className="text-4xl mb-6">🔍</div>
              <h3 className="text-xl font-bold mb-4 text-gray-900">Audit Gratuit</h3>
              <p className="text-gray-600 leading-relaxed">
                Analyse complète de votre présence digitale actuelle, identification des points d'amélioration 
                et des opportunités manquées.
              </p>
            </motion.div>

            <motion.div variants={fadeInUp} className="bg-white p-8 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300">
              <div className="text-4xl mb-6">🎯</div>
              <h3 className="text-xl font-bold mb-4 text-gray-900">Stratégie Personnalisée</h3>
              <p className="text-gray-600 leading-relaxed">
                Recommandations spécifiques basées sur vos objectifs, votre marché et votre budget, 
                adaptées au contexte luxembourgeois.
              </p>
            </motion.div>

            <motion.div variants={fadeInUp} className="bg-white p-8 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300">
              <div className="text-4xl mb-6">📊</div>
              <h3 className="text-xl font-bold mb-4 text-gray-900">Plan d'Action Concret</h3>
              <p className="text-gray-600 leading-relaxed">
                Roadmap détaillée avec les étapes prioritaires, les outils recommandés 
                et les KPIs à suivre pour mesurer le succès.
              </p>
            </motion.div>

            <motion.div variants={fadeInUp} className="bg-white p-8 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300">
              <div className="text-4xl mb-6">💡</div>
              <h3 className="text-xl font-bold mb-4 text-gray-900">Conseils d'Expert</h3>
              <p className="text-gray-600 leading-relaxed">
                Insights et best practices basés sur notre expérience avec plus de 100 entreprises 
                luxembourgeoises et internationales.
              </p>
            </motion.div>

            <motion.div variants={fadeInUp} className="bg-white p-8 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300">
              <div className="text-4xl mb-6">🚀</div>
              <h3 className="text-xl font-bold mb-4 text-gray-900">Opportunités Identifiées</h3>
              <p className="text-gray-600 leading-relaxed">
                Découverte des leviers de croissance spécifiques à votre secteur et identification 
                des avantages concurrentiels potentiels.
              </p>
            </motion.div>

            <motion.div variants={fadeInUp} className="bg-white p-8 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300">
              <div className="text-4xl mb-6">📋</div>
              <h3 className="text-xl font-bold mb-4 text-gray-900">Proposition Commerciale</h3>
              <p className="text-gray-600 leading-relaxed">
                Si vous le souhaitez, nous vous fournirons une proposition commerciale détaillée 
                pour la mise en œuvre de votre stratégie digitale.
              </p>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Preparation Tips */}
      <section className="py-24 bg-white">
        <div className="max-w-6xl mx-auto px-6">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={staggerChildren}
            className="text-center mb-16"
          >
            <motion.h2 variants={fadeInUp} className="text-4xl md:text-5xl font-bold mb-6 text-gray-900">
              Comment Préparer Votre Consultation ?
            </motion.h2>
            <motion.p variants={fadeInUp} className="text-xl max-w-4xl mx-auto text-gray-600 leading-relaxed">
              Quelques conseils pour tirer le maximum de profit de votre session gratuite.
            </motion.p>
          </motion.div>

          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={staggerChildren}
            className="grid md:grid-cols-2 gap-12"
          >
            <motion.div variants={fadeInUp}>
              <h3 className="text-2xl font-bold mb-6 text-gray-900">À Préparer :</h3>
              <ul className="space-y-4">
                <li className="flex items-start">
                  <div className="w-6 h-6 bg-brand rounded-full flex items-center justify-center mr-4 flex-shrink-0 mt-1">
                    <span className="text-xs font-bold text-gray-900">✓</span>
                  </div>
                  <div>
                    <strong>Objectifs business :</strong> Définissez clairement vos objectifs à court et long terme
                  </div>
                </li>
                <li className="flex items-start">
                  <div className="w-6 h-6 bg-brand rounded-full flex items-center justify-center mr-4 flex-shrink-0 mt-1">
                    <span className="text-xs font-bold text-gray-900">✓</span>
                  </div>
                  <div>
                    <strong>Budget approximatif :</strong> Ayez une idée de votre enveloppe budgétaire
                  </div>
                </li>
                <li className="flex items-start">
                  <div className="w-6 h-6 bg-brand rounded-full flex items-center justify-center mr-4 flex-shrink-0 mt-1">
                    <span className="text-xs font-bold text-gray-900">✓</span>
                  </div>
                  <div>
                    <strong>Données actuelles :</strong> Analytics, réseaux sociaux, performances marketing
                  </div>
                </li>
                <li className="flex items-start">
                  <div className="w-6 h-6 bg-brand rounded-full flex items-center justify-center mr-4 flex-shrink-0 mt-1">
                    <span className="text-xs font-bold text-gray-900">✓</span>
                  </div>
                  <div>
                    <strong>Questions spécifiques :</strong> Listez vos interrogations principales
                  </div>
                </li>
              </ul>
            </motion.div>

            <motion.div variants={fadeInUp}>
              <h3 className="text-2xl font-bold mb-6 text-gray-900">Questions Types :</h3>
              <ul className="space-y-4">
                <li className="flex items-start">
                  <div className="w-6 h-6 bg-gray-900 rounded-full flex items-center justify-center mr-4 flex-shrink-0 mt-1">
                    <span className="text-xs font-bold text-white">?</span>
                  </div>
                  <div>
                    Comment améliorer ma visibilité sur Google au Luxembourg ?
                  </div>
                </li>
                <li className="flex items-start">
                  <div className="w-6 h-6 bg-gray-900 rounded-full flex items-center justify-center mr-4 flex-shrink-0 mt-1">
                    <span className="text-xs font-bold text-white">?</span>
                  </div>
                  <div>
                    Quelle stratégie réseaux sociaux pour mon secteur ?
                  </div>
                </li>
                <li className="flex items-start">
                  <div className="w-6 h-6 bg-gray-900 rounded-full flex items-center justify-center mr-4 flex-shrink-0 mt-1">
                    <span className="text-xs font-bold text-white">?</span>
                  </div>
                  <div>
                    Comment mesurer le ROI de mes actions marketing ?
                  </div>
                </li>
                <li className="flex items-start">
                  <div className="w-6 h-6 bg-gray-900 rounded-full flex items-center justify-center mr-4 flex-shrink-0 mt-1">
                    <span className="text-xs font-bold text-white">?</span>
                  </div>
                  <div>
                    Quel budget prévoir pour atteindre mes objectifs ?
                  </div>
                </li>
              </ul>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Contact Options */}
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
              Besoin d'Informations Complémentaires ?
            </motion.h2>
          </motion.div>

          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={ once: true }}
            variants={staggerChildren}
            className="grid md:grid-cols-3 gap-8"
          >
            <motion.div variants={fadeInUp} className="bg-white p-8 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 text-center">
              <div className="text-4xl mb-6">📞</div>
              <h3 className="text-xl font-bold mb-4 text-gray-900">Appel Direct</h3>
              <p className="text-gray-600 mb-6 leading-relaxed">
                Pour les questions urgentes, appelez-nous directement. 
                Notre équipe est disponible du lundi au vendredi de 9h à 18h.
              </p>
              <a
                href="tel:+35228372410"
                className="inline-flex items-center justify-center w-full bg-brand text-gray-900 px-6 py-3 rounded-lg font-bold hover:bg-brand/90 transition-colors"
              >
                +352 28 37 24 10
              </a>
            </motion.div>

            <motion.div variants={fadeInUp} className="bg-white p-8 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 text-center">
              <div className="text-4xl mb-6">💬</div>
              <h3 className="text-xl font-bold mb-4 text-gray-900">WhatsApp</h3>
              <p className="text-gray-600 mb-6 leading-relaxed">
                Contactez-nous via WhatsApp pour un échange rapide et pratique. 
                Nous répondons généralement en quelques minutes.
              </p>
              <a
                href="https://wa.me/35228372410"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center w-full bg-gray-900 text-white px-6 py-3 rounded-lg font-bold hover:bg-gray-800 transition-colors"
              >
                Écrire sur WhatsApp
              </a>
            </motion.div>

            <motion.div variants={fadeInUp} className="bg-white p-8 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 text-center">
              <div className="text-4xl mb-6">📧</div>
              <h3 className="text-xl font-bold mb-4 text-gray-900">Email</h3>
              <p className="text-gray-600 mb-6 leading-relaxed">
                Envoyez-nous un email pour toute question détaillée. 
                Nous nous engageons à répondre sous 24h maximum.
              </p>
              <a
                href="mailto:contact@wedid.lu"
                className="inline-flex items-center justify-center w-full bg-brand text-gray-900 px-6 py-3 rounded-lg font-bold hover:bg-brand/90 transition-colors"
              >
                contact@wedid.lu
              </a>
            </motion.div>
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
              Explorez Notre{' '}
              <span className="text-brand">
                Expertise
              </span>
            </motion.h2>
            <motion.p variants={fadeInUp} className="text-xl mb-10 max-w-4xl mx-auto text-gray-200 leading-relaxed">
              En attendant votre consultation, découvrez comment nous avons aidé d'autres entreprises luxembourgeoises.
            </motion.p>
            <motion.div variants={fadeInUp} className="flex flex-col md:flex-row gap-4 justify-center">
              <Link
                href="/portfolio"
                className="bg-brand text-gray-900 px-10 py-4 rounded-lg font-bold text-lg shadow-xl hover:shadow-2xl hover:bg-brand/90 transition-all duration-300"
              >
                Voir nos Réalisations →
              </Link>
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

export default ConsultationSuccessPage;