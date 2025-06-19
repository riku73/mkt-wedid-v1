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

const DevisSuccessPage = () => {
  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden pt-20">
        <div 
          className="absolute inset-0 bg-cover bg-center bg-no-repeat"
          style={{
            backgroundImage: `url('https://images.unsplash.com/photo-1560472354-b33ff0c44a43?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2126&q=80')`
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
                <span className="text-4xl">🎯</span>
              </div>
            </motion.div>
            
            <motion.h1 variants={fadeInUp} className="text-5xl md:text-7xl font-bold mb-8 max-w-5xl mx-auto leading-tight">
              Demande de Devis{' '}
              <span className="text-brand">
                Reçue !
              </span>
            </motion.h1>
            
            <motion.p variants={fadeInUp} className="text-xl md:text-2xl mb-12 max-w-4xl mx-auto text-gray-200 leading-relaxed font-normal">
              Merci pour ces informations détaillées. Notre équipe va analyser votre projet en profondeur 
              et vous faire parvenir un devis complet et personnalisé sous 3-5 jours ouvrés.
            </motion.p>
            
            <motion.div variants={fadeInUp} className="bg-white/10 backdrop-blur-sm rounded-2xl p-8 mb-12 max-w-5xl mx-auto">
              <h3 className="text-2xl font-bold mb-8 text-brand">Processus de Création du Devis</h3>
              <div className="grid md:grid-cols-5 gap-6 text-left">
                <div className="flex flex-col items-center text-center">
                  <div className="w-12 h-12 bg-brand rounded-full flex items-center justify-center mb-4">
                    <span className="text-lg font-bold text-gray-900">1</span>
                  </div>
                  <h4 className="font-bold mb-2">Analyse</h4>
                  <p className="text-sm text-gray-300">24-48h pour analyser votre demande complète</p>
                </div>
                <div className="flex flex-col items-center text-center">
                  <div className="w-12 h-12 bg-brand rounded-full flex items-center justify-center mb-4">
                    <span className="text-lg font-bold text-gray-900">2</span>
                  </div>
                  <h4 className="font-bold mb-2">Clarification</h4>
                  <p className="text-sm text-gray-300">Appel si questions supplémentaires</p>
                </div>
                <div className="flex flex-col items-center text-center">
                  <div className="w-12 h-12 bg-brand rounded-full flex items-center justify-center mb-4">
                    <span className="text-lg font-bold text-gray-900">3</span>
                  </div>
                  <h4 className="font-bold mb-2">Conception</h4>
                  <p className="text-sm text-gray-300">Création du devis détaillé</p>
                </div>
                <div className="flex flex-col items-center text-center">
                  <div className="w-12 h-12 bg-brand rounded-full flex items-center justify-center mb-4">
                    <span className="text-lg font-bold text-gray-900">4</span>
                  </div>
                  <h4 className="font-bold mb-2">Envoi</h4>
                  <p className="text-sm text-gray-300">Réception de votre devis complet</p>
                </div>
                <div className="flex flex-col items-center text-center">
                  <div className="w-12 h-12 bg-brand rounded-full flex items-center justify-center mb-4">
                    <span className="text-lg font-bold text-gray-900">5</span>
                  </div>
                  <h4 className="font-bold mb-2">Présentation</h4>
                  <p className="text-sm text-gray-300">RDV pour présenter le projet</p>
                </div>
              </div>
            </motion.div>
            
            <motion.div variants={fadeInUp} className="flex flex-col md:flex-row gap-4 justify-center items-center">
              <Link
                href="/consultation-gratuite"
                className="bg-brand text-gray-900 px-8 py-4 rounded-lg font-bold text-lg shadow-xl hover:shadow-2xl hover:bg-brand/90 transition-all duration-300"
              >
                Programmer une Consultation →
              </Link>
              
              <a
                href="tel:+35228372410"
                className="text-white border-2 border-white px-8 py-4 rounded-lg hover:bg-white hover:text-gray-900 transition-all duration-300 font-semibold"
              >
                📞 Questions Urgentes
              </a>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* What's Included */}
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
              Votre Devis Comprendra
            </motion.h2>
            <motion.p variants={fadeInUp} className="text-xl max-w-4xl mx-auto text-gray-600 leading-relaxed">
              Un document complet et détaillé pour vous permettre de prendre une décision éclairée.
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
              <div className="text-4xl mb-6">📋</div>
              <h3 className="text-xl font-bold mb-4 text-gray-900">Analyse Détaillée</h3>
              <p className="text-gray-600 leading-relaxed">
                Étude approfondie de vos besoins, analyse de la concurrence et recommandations 
                stratégiques adaptées à votre marché luxembourgeois.
              </p>
            </motion.div>

            <motion.div variants={fadeInUp} className="bg-white p-8 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300">
              <div className="text-4xl mb-6">🎯</div>
              <h3 className="text-xl font-bold mb-4 text-gray-900">Proposition Technique</h3>
              <p className="text-gray-600 leading-relaxed">
                Spécifications techniques détaillées, architecture solution, choix technologiques 
                et fonctionnalités recommandées pour votre projet.
              </p>
            </div>

            <motion.div variants={fadeInUp} className="bg-white p-8 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300">
              <div className="text-4xl mb-6">💰</div>
              <h3 className="text-xl font-bold mb-4 text-gray-900">Tarification Transparente</h3>
              <p className="text-gray-600 leading-relaxed">
                Breakdown complet des coûts par poste, options tarifaires et modalités de paiement 
                flexibles adaptées aux entreprises.
              </p>
            </motion.div>

            <motion.div variants={fadeInUp} className="bg-white p-8 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300">
              <div className="text-4xl mb-6">📅</div>
              <h3 className="text-xl font-bold mb-4 text-gray-900">Planning Détaillé</h3>
              <p className="text-gray-600 leading-relaxed">
                Chronologie précise avec jalons intermédiaires, dates de livraison et phases 
                de validation pour un suivi optimal du projet.
              </p>
            </motion.div>

            <motion.div variants={fadeInUp} className="bg-white p-8 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300">
              <div className="text-4xl mb-6">🚀</div>
              <h3 className="text-xl font-bold mb-4 text-gray-900">Stratégie de Lancement</h3>
              <p className="text-gray-600 leading-relaxed">
                Plan de mise en ligne, stratégie de communication et actions marketing 
                pour maximiser l'impact de votre nouveau projet digital.
              </p>
            </motion.div>

            <motion.div variants={fadeInUp} className="bg-white p-8 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300">
              <div className="text-4xl mb-6">📊</div>
              <h3 className="text-xl font-bold mb-4 text-gray-900">ROI Prévisionnel</h3>
              <p className="text-gray-600 leading-relaxed">
                Estimation du retour sur investissement, KPIs à suivre et objectifs chiffrés 
                pour mesurer le succès de votre projet.
              </p>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Next Steps */}
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
              En Attendant Votre Devis
            </motion.h2>
            <motion.p variants={fadeInUp} className="text-xl max-w-4xl mx-auto text-gray-600 leading-relaxed">
              Profitez de ce temps pour préparer votre projet et explorer nos réalisations.
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
              <h3 className="text-2xl font-bold mb-6 text-gray-900">Actions Recommandées :</h3>
              <ul className="space-y-4">
                <li className="flex items-start">
                  <div className="w-6 h-6 bg-brand rounded-full flex items-center justify-center mr-4 flex-shrink-0 mt-1">
                    <span className="text-xs font-bold text-gray-900">✓</span>
                  </div>
                  <div>
                    <strong>Rassemblez vos contenus :</strong> Textes, images, vidéos existants pour le projet
                  </div>
                </li>
                <li className="flex items-start">
                  <div className="w-6 h-6 bg-brand rounded-full flex items-center justify-center mr-4 flex-shrink-0 mt-1">
                    <span className="text-xs font-bold text-gray-900">✓</span>
                  </div>
                  <div>
                    <strong>Analysez la concurrence :</strong> Identifiez ce qui fonctionne chez vos concurrents
                  </div>
                </li>
                <li className="flex items-start">
                  <div className="w-6 h-6 bg-brand rounded-full flex items-center justify-center mr-4 flex-shrink-0 mt-1">
                    <span className="text-xs font-bold text-gray-900">✓</span>
                  </div>
                  <div>
                    <strong>Définissez vos priorités :</strong> Classez les fonctionnalités par ordre d'importance
                  </div>
                </li>
                <li className="flex items-start">
                  <div className="w-6 h-6 bg-brand rounded-full flex items-center justify-center mr-4 flex-shrink-0 mt-1">
                    <span className="text-xs font-bold text-gray-900">✓</span>
                  </div>
                  <div>
                    <strong>Préparez vos questions :</strong> Listez tous les points à clarifier
                  </div>
                </li>
              </ul>
            </motion.div>

            <motion.div variants={fadeInUp}>
              <h3 className="text-2xl font-bold mb-6 text-gray-900">Ressources Utiles :</h3>
              <div className="space-y-4">
                <Link
                  href="/portfolio"
                  className="block p-4 border border-gray-200 rounded-lg hover:border-brand hover:bg-gray-50 transition-colors"
                >
                  <h4 className="font-bold text-gray-900 mb-2">📁 Notre Portfolio</h4>
                  <p className="text-gray-600 text-sm">Découvrez nos réalisations similaires à votre projet</p>
                </Link>
                <Link
                  href="/services"
                  className="block p-4 border border-gray-200 rounded-lg hover:border-brand hover:bg-gray-50 transition-colors"
                >
                  <h4 className="font-bold text-gray-900 mb-2">🔧 Nos Services</h4>
                  <p className="text-gray-600 text-sm">Explorez toute notre gamme de services digitaux</p>
                </Link>
                <Link
                  href="/about/team"
                  className="block p-4 border border-gray-200 rounded-lg hover:border-brand hover:bg-gray-50 transition-colors"
                >
                  <h4 className="font-bold text-gray-900 mb-2">👥 Notre Équipe</h4>
                  <p className="text-gray-600 text-sm">Rencontrez les experts qui travailleront sur votre projet</p>
                </Link>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Timeline Reminder */}
      <section className="py-24 bg-blue-50">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={staggerChildren}
          >
            <motion.h2 variants={fadeInUp} className="text-3xl md:text-4xl font-bold mb-6 text-gray-900">
              Timeline de Votre Devis
            </motion.h2>
            
            <motion.div variants={fadeInUp} className="bg-white p-8 rounded-2xl shadow-lg">
              <div className="grid md:grid-cols-3 gap-8">
                <div className="text-center">
                  <div className="w-16 h-16 bg-blue-500 rounded-full flex items-center justify-center mx-auto mb-4">
                    <span className="text-white font-bold text-lg">24h</span>
                  </div>
                  <h3 className="font-bold text-gray-900 mb-2">Accusé de Réception</h3>
                  <p className="text-gray-600 text-sm">Confirmation que nous avons bien reçu votre demande</p>
                </div>
                
                <div className="text-center">
                  <div className="w-16 h-16 bg-yellow-500 rounded-full flex items-center justify-center mx-auto mb-4">
                    <span className="text-white font-bold text-lg">2-3j</span>
                  </div>
                  <h3 className="font-bold text-gray-900 mb-2">Analyse & Préparation</h3>
                  <p className="text-gray-600 text-sm">Étude approfondie et création de votre devis personnalisé</p>
                </div>
                
                <div className="text-center">
                  <div className="w-16 h-16 bg-green-500 rounded-full flex items-center justify-center mx-auto mb-4">
                    <span className="text-white font-bold text-lg">5j</span>
                  </div>
                  <h3 className="font-bold text-gray-900 mb-2">Envoi du Devis</h3>
                  <p className="text-gray-600 text-sm">Réception de votre proposition complète et détaillée</p>
                </div>
              </div>
              
              <div className="mt-8 p-6 bg-green-50 rounded-lg">
                <p className="text-green-700 font-medium">
                  💡 <strong>Notre engagement :</strong> Si vous n'avez pas reçu votre devis sous 5 jours ouvrés, 
                  contactez-nous immédiatement au +352 28 37 24 10
                </p>
              </div>
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
              Questions ou Modifications ?
            </motion.h2>
            <motion.p variants={fadeInUp} className="text-xl max-w-4xl mx-auto text-gray-600 leading-relaxed">
              Notre équipe reste à votre disposition pour toute question ou ajustement de votre demande.
            </motion.p>
          </motion.div>

          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={staggerChildren}
            className="grid md:grid-cols-3 gap-8"
          >
            <motion.div variants={fadeInUp} className="bg-white p-8 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 text-center">
              <div className="text-4xl mb-6">📞</div>
              <h3 className="text-xl font-bold mb-4 text-gray-900">Appel Direct</h3>
              <p className="text-gray-600 mb-6 leading-relaxed">
                Contactez directement notre équipe commerciale pour toute question urgente 
                ou modification de votre demande.
              </p>
              <a
                href="tel:+35228372410"
                className="inline-flex items-center justify-center w-full bg-brand text-gray-900 px-6 py-3 rounded-lg font-bold hover:bg-brand/90 transition-colors"
              >
                +352 28 37 24 10
              </a>
            </motion.div>

            <motion.div variants={fadeInUp} className="bg-white p-8 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 text-center">
              <div className="text-4xl mb-6">📧</div>
              <h3 className="text-xl font-bold mb-4 text-gray-900">Email Devis</h3>
              <p className="text-gray-600 mb-6 leading-relaxed">
                Envoyez-nous un email pour modifier votre demande ou ajouter 
                des informations complémentaires à votre projet.
              </p>
              <a
                href="mailto:devis@wedid.lu"
                className="inline-flex items-center justify-center w-full bg-gray-900 text-white px-6 py-3 rounded-lg font-bold hover:bg-gray-800 transition-colors"
              >
                devis@wedid.lu
              </a>
            </motion.div>

            <motion.div variants={fadeInUp} className="bg-white p-8 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 text-center">
              <div className="text-4xl mb-6">💬</div>
              <h3 className="text-xl font-bold mb-4 text-gray-900">Chat Direct</h3>
              <p className="text-gray-600 mb-6 leading-relaxed">
                Démarrez une conversation instantanée avec notre équipe 
                via WhatsApp pour un échange rapide et pratique.
              </p>
              <a
                href="https://wa.me/35228372410"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center w-full bg-green-600 text-white px-6 py-3 rounded-lg font-bold hover:bg-green-700 transition-colors"
              >
                WhatsApp
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
              Merci pour Votre{' '}
              <span className="text-brand">
                Confiance
              </span>
            </motion.h2>
            <motion.p variants={fadeInUp} className="text-xl mb-10 max-w-4xl mx-auto text-gray-200 leading-relaxed">
              Nous sommes impatients de travailler avec vous sur ce projet passionnant et de contribuer au succès de votre entreprise.
            </motion.p>
            <motion.div variants={fadeInUp} className="flex flex-col md:flex-row gap-4 justify-center">
              <Link
                href="/portfolio"
                className="bg-brand text-gray-900 px-10 py-4 rounded-lg font-bold text-lg shadow-xl hover:shadow-2xl hover:bg-brand/90 transition-all duration-300"
              >
                Explorer notre Portfolio →
              </Link>
              <Link
                href="/about"
                className="text-white border-2 border-white px-10 py-4 rounded-lg hover:bg-white hover:text-gray-900 transition-all duration-300 font-bold"
              >
                En savoir plus sur Wedid
              </Link>
            </motion.div>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default DevisSuccessPage;