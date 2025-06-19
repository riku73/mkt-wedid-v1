'use client';

import { motion, Variants } from 'framer-motion';
import Link from 'next/link';
import { ArrowLeft, ShoppingBag, Euro, TrendingUp } from 'lucide-react';

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

const FashionEcommerceCaseStudy = () => {
  return (
    <div className="min-h-screen bg-white">
      {/* Back Navigation */}
      <div className="fixed top-24 left-6 z-40">
        <Link 
          href="/portfolio"
          className="inline-flex items-center gap-2 bg-white/90 backdrop-blur-sm px-4 py-2 rounded-lg border border-gray-200 text-gray-700 hover:text-gray-900 hover:bg-white transition-all duration-300 shadow-md"
        >
          <ArrowLeft size={16} />
          Retour au Portfolio
        </Link>
      </div>

      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden pt-20">
        <div 
          className="absolute inset-0 bg-cover bg-center bg-no-repeat"
          style={{
            backgroundImage: `url('https://images.unsplash.com/photo-1441986300917-64674bd600d8?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80')`
          }}
        />
        <div className="absolute inset-0 bg-gray-900/70"></div>
        
        <div className="max-w-6xl mx-auto px-6 relative z-10 text-white">
          <motion.div
            initial="hidden"
            animate="visible"
            variants={staggerChildren}
            className="text-center"
          >
            <motion.div variants={fadeInUp} className="mb-6">
              <span className="inline-block bg-pink-600 text-white px-4 py-2 rounded-full text-sm font-bold mb-6">
                ÉTUDE DE CAS - MODE & E-COMMERCE
              </span>
            </motion.div>
            
            <motion.h1 variants={fadeInUp} className="text-4xl md:text-6xl font-bold mb-8 max-w-5xl mx-auto leading-tight">
              E-commerce Mode Haut de Gamme Luxembourg
            </motion.h1>
            
            <motion.div variants={fadeInUp} className="grid md:grid-cols-4 gap-6 max-w-4xl mx-auto mb-12">
              <div className="bg-white/10 backdrop-blur-sm rounded-lg p-4 border border-white/20">
                <div className="text-sm text-gray-300 mb-1">Client</div>
                <div className="font-semibold">Élégance Luxembourg</div>
              </div>
              <div className="bg-white/10 backdrop-blur-sm rounded-lg p-4 border border-white/20">
                <div className="text-sm text-gray-300 mb-1">CA An 1</div>
                <div className="font-semibold">€450K</div>
              </div>
              <div className="bg-white/10 backdrop-blur-sm rounded-lg p-4 border border-white/20">
                <div className="text-sm text-gray-300 mb-1">Panier Moyen</div>
                <div className="font-semibold">€185</div>
              </div>
              <div className="bg-white/10 backdrop-blur-sm rounded-lg p-4 border border-white/20">
                <div className="text-sm text-gray-300 mb-1">Fidélisation</div>
                <div className="font-semibold">34%</div>
              </div>
            </motion.div>

            <motion.div variants={fadeInUp} className="flex flex-col md:flex-row gap-4 justify-center">
              <a 
                href="#metrics"
                className="bg-pink-600 text-white px-8 py-4 rounded-lg font-bold text-lg shadow-xl hover:shadow-2xl transition-all duration-300"
              >
                Voir les Métriques →
              </a>
              <a 
                href="/contact"
                className="text-white border-2 border-white px-8 py-4 rounded-lg hover:bg-white hover:text-gray-900 transition-all duration-300 font-semibold"
              >
                Projet E-commerce ?
              </a>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Key Metrics */}
      <section id="metrics" className="py-24 bg-gray-50">
        <div className="max-w-6xl mx-auto px-6">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={staggerChildren}
            className="text-center"
          >
            <motion.h2 variants={fadeInUp} className="text-4xl md:text-5xl font-bold mb-16 text-gray-900">
              E-commerce Performant en 1 An
            </motion.h2>

            <motion.div variants={fadeInUp} className="grid md:grid-cols-3 gap-8">
              {[
                {
                  icon: <Euro className="w-8 h-8 text-pink-600" />,
                  value: "€450K",
                  label: "Chiffre d'Affaires An 1",
                  description: "Premier année e-commerce"
                },
                {
                  icon: <ShoppingBag className="w-8 h-8 text-pink-600" />,
                  value: "€185",
                  label: "Panier Moyen",
                  description: "Valeur commande moyenne"
                },
                {
                  icon: <TrendingUp className="w-8 h-8 text-pink-600" />,
                  value: "34%",
                  label: "Taux de Retour",
                  description: "Clients fidèles récurrents"
                }
              ].map((metric, index) => (
                <div key={index} className="bg-white rounded-2xl p-8 shadow-lg border border-gray-100 text-center">
                  <div className="flex justify-center mb-4">{metric.icon}</div>
                  <div className="text-3xl font-bold text-pink-600 mb-2">{metric.value}</div>
                  <div className="text-lg font-semibold text-gray-900 mb-1">{metric.label}</div>
                  <div className="text-sm text-gray-600">{metric.description}</div>
                </div>
              ))}
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Success Story */}
      <section className="py-24 bg-white">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={staggerChildren}
          >
            <motion.blockquote variants={fadeInUp} className="text-2xl md:text-3xl font-bold text-gray-900 leading-relaxed mb-8">
              "Wedid a créé bien plus qu'une boutique en ligne - ils ont construit notre succès digital. 
              450K€ la première année, c'est au-delà de nos espérances les plus folles."
            </motion.blockquote>

            <motion.div variants={fadeInUp} className="flex items-center justify-center gap-4">
              <img 
                src="https://images.unsplash.com/photo-1494790108755-2616b612b1e8?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1974&q=80"
                alt="Marie Dubois"
                className="w-16 h-16 rounded-full object-cover"
              />
              <div className="text-left">
                <div className="font-bold text-gray-900">Marie Dubois</div>
                <div className="text-gray-600">Fondatrice</div>
                <div className="text-pink-600 font-semibold">Élégance Luxembourg</div>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 bg-gray-900">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={staggerChildren}
          >
            <motion.h2 variants={fadeInUp} className="text-4xl md:text-5xl font-bold mb-6 text-white">
              Lancez Votre{' '}
              <span className="text-brand">
                E-commerce Performant
              </span>
            </motion.h2>
            <motion.p variants={fadeInUp} className="text-xl mb-10 text-gray-200 leading-relaxed">
              De l'idée au succès commercial, créons ensemble votre boutique en ligne qui convertit.
            </motion.p>
            <motion.div variants={fadeInUp} className="flex flex-col md:flex-row gap-4 justify-center">
              <Link 
                href="/contact"
                className="bg-brand text-gray-900 px-10 py-4 rounded-lg font-bold text-lg shadow-xl hover:shadow-2xl transition-all duration-300"
              >
                Lancer Mon E-commerce →
              </Link>
              <Link 
                href="/portfolio"
                className="text-white border-2 border-white px-10 py-4 rounded-lg hover:bg-white hover:text-gray-900 transition-all duration-300 font-bold"
              >
                Voir d'Autres Projets
              </Link>
            </motion.div>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default FashionEcommerceCaseStudy;