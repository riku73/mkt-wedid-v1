'use client';

import { motion, Variants } from 'framer-motion';
import Link from 'next/link';
import { ArrowLeft, TrendingUp, Users, Award, Building } from 'lucide-react';

const caseStudyData = {
  title: "Rebranding Complet d'un Cabinet de Conseil Stratégique",
  client: "Luxembourg Business Advisory",
  industry: "Conseil & Services B2B",
  projectType: "Rebranding + Stratégie Communication + Digital Marketing",
  duration: "5 mois",
  budget: "€65,000 - €85,000",
  year: "2023",
  heroImage: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80",
  challenge: {
    title: "Moderniser une Image Corporate Vieillissante",
    description: "Luxembourg Business Advisory, cabinet de conseil établi depuis 15 ans, souffrait d'une image vieillissante qui ne reflétait plus son expertise ni n'attirait les jeunes talents et clients innovants.",
    problems: [
      "Identité visuelle obsolète et peu différenciante",
      "Communication incohérente across touchpoints",
      "Difficultés à attirer les talents millennials",
      "Positionnement flou face à la concurrence",
      "Manque de présence digitale crédible",
      "Valeur des contrats en stagnation"
    ]
  },
  testimonial: {
    quote: "Le rebranding réalisé par Wedid a complètement transformé notre cabinet. Nous attirons désormais des clients plus importants et nos contrats ont augmenté de 120% en valeur. Notre équipe est fière de notre nouvelle identité, et le recrutement est devenu bien plus facile.",
    author: "Catherine Muller",
    position: "Managing Partner",
    company: "Luxembourg Business Advisory",
    avatar: "https://images.unsplash.com/photo-1494790108755-2616b612b1e8?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1974&q=80"
  }
};

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

const ConsultingCaseStudy = () => {
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
            backgroundImage: `url('${caseStudyData.heroImage}')`
          }}
        />
        <div className="absolute inset-0 bg-gray-900/75"></div>
        
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-white">
          <motion.div
            initial="hidden"
            animate="visible"
            variants={staggerChildren}
            className="text-center"
          >
            <motion.div variants={fadeInUp} className="mb-6">
              <span className="inline-block bg-purple-600 text-white px-4 py-2 rounded-full text-sm font-bold mb-6">
                ÉTUDE DE CAS - {caseStudyData.industry.toUpperCase()}
              </span>
            </motion.div>
            
            <motion.h1 variants={fadeInUp} className="text-4xl md:text-6xl font-bold mb-8 max-w-5xl mx-auto leading-tight">
              {caseStudyData.title}
            </motion.h1>
            
            <motion.div variants={fadeInUp} className="grid md:grid-cols-4 gap-6 max-w-4xl mx-auto mb-12">
              <div className="bg-white/10 backdrop-blur-sm rounded-lg p-4 border border-white/20">
                <div className="text-sm text-gray-300 mb-1">Client</div>
                <div className="font-semibold">{caseStudyData.client}</div>
              </div>
              <div className="bg-white/10 backdrop-blur-sm rounded-lg p-4 border border-white/20">
                <div className="text-sm text-gray-300 mb-1">Durée</div>
                <div className="font-semibold">{caseStudyData.duration}</div>
              </div>
              <div className="bg-white/10 backdrop-blur-sm rounded-lg p-4 border border-white/20">
                <div className="text-sm text-gray-300 mb-1">Budget</div>
                <div className="font-semibold">{caseStudyData.budget}</div>
              </div>
              <div className="bg-white/10 backdrop-blur-sm rounded-lg p-4 border border-white/20">
                <div className="text-sm text-gray-300 mb-1">ROI</div>
                <div className="font-semibold">+120%</div>
              </div>
            </motion.div>

            <motion.div variants={fadeInUp} className="flex flex-col md:flex-row gap-4 justify-center">
              <a 
                href="#results"
                className="bg-purple-600 text-white px-8 py-4 rounded-lg font-bold text-lg shadow-xl hover:shadow-2xl transition-all duration-300"
              >
                Voir la Transformation →
              </a>
              <a 
                href="/contact"
                className="text-white border-2 border-white px-8 py-4 rounded-lg hover:bg-white hover:text-gray-900 transition-all duration-300 font-semibold"
              >
                Cabinet de Conseil ?
              </a>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Challenge Section */}
      <section className="py-24 bg-white">
        <div className="max-w-6xl mx-auto px-6">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={staggerChildren}
          >
            <motion.div variants={fadeInUp} className="mb-16">
              <span className="inline-block bg-red-100 text-red-800 px-4 py-2 rounded-full text-sm font-bold mb-6">
                🚨 DÉFIS REBRANDING B2B
              </span>
              <h2 className="text-4xl md:text-5xl font-bold mb-8 text-gray-900">
                {caseStudyData.challenge.title}
              </h2>
              <p className="text-xl text-gray-600 leading-relaxed max-w-4xl">
                {caseStudyData.challenge.description}
              </p>
            </motion.div>

            <motion.div variants={fadeInUp} className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {caseStudyData.challenge.problems.map((problem, index) => (
                <div key={index} className="bg-red-50 border border-red-200 rounded-xl p-6">
                  <div className="flex items-start gap-3">
                    <div className="w-6 h-6 rounded-full bg-red-200 flex items-center justify-center flex-shrink-0 mt-1">
                      <div className="w-2 h-2 rounded-full bg-red-600"></div>
                    </div>
                    <p className="text-gray-800 font-medium leading-relaxed">{problem}</p>
                  </div>
                </div>
              ))}
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Results Showcase */}
      <section id="results" className="py-24 bg-gray-50">
        <div className="max-w-7xl mx-auto px-6">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={staggerChildren}
          >
            <motion.div variants={fadeInUp} className="text-center mb-16">
              <span className="inline-block bg-brand text-gray-900 px-4 py-2 rounded-full text-sm font-bold mb-6">
                📈 IMPACT MESURABLE
              </span>
              <h2 className="text-4xl md:text-5xl font-bold mb-8 text-gray-900">
                Une Transformation Complète en 5 Mois
              </h2>
              <p className="text-xl text-gray-600 leading-relaxed max-w-4xl mx-auto">
                Le nouveau positionnement de Luxembourg Business Advisory a radicalement transformé 
                sa perception marché et ses performances commerciales.
              </p>
            </motion.div>

            <motion.div variants={fadeInUp} className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
              {[
                {
                  icon: <TrendingUp className="w-8 h-8 text-purple-600" />,
                  value: "+65%",
                  label: "Nouveaux Clients",
                  description: "Croissance clientèle annuelle"
                },
                {
                  icon: <Building className="w-8 h-8 text-purple-600" />,
                  value: "+120%",
                  label: "Valeur Contrats",
                  description: "Augmentation prix moyen"
                },
                {
                  icon: <Award className="w-8 h-8 text-purple-600" />,
                  value: "+200%",
                  label: "Notoriété Marché",
                  description: "Reconnaissance secteur"
                },
                {
                  icon: <Users className="w-8 h-8 text-purple-600" />,
                  value: "+85%",
                  label: "Candidatures",
                  description: "Attraction talents"
                }
              ].map((metric, index) => (
                <div key={index} className="bg-white rounded-2xl p-8 border border-gray-200 text-center">
                  <div className="flex justify-center mb-4">{metric.icon}</div>
                  <div className="text-3xl font-bold text-purple-600 mb-2">{metric.value}</div>
                  <div className="text-lg font-semibold text-gray-900 mb-1">{metric.label}</div>
                  <div className="text-sm text-gray-600">{metric.description}</div>
                </div>
              ))}
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Testimonial Section */}
      <section className="py-24 bg-purple-600">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={staggerChildren}
          >
            <motion.div variants={fadeInUp} className="mb-12">
              <span className="inline-block bg-white text-purple-600 px-4 py-2 rounded-full text-sm font-bold mb-8">
                💬 TÉMOIGNAGE DIRIGEANTE
              </span>
              <blockquote className="text-2xl md:text-3xl font-bold text-white leading-relaxed mb-8">
                "{caseStudyData.testimonial.quote}"
              </blockquote>
            </motion.div>

            <motion.div variants={fadeInUp} className="flex items-center justify-center gap-4">
              <img 
                src={caseStudyData.testimonial.avatar}
                alt={caseStudyData.testimonial.author}
                className="w-16 h-16 rounded-full object-cover"
              />
              <div className="text-left">
                <div className="font-bold text-white">{caseStudyData.testimonial.author}</div>
                <div className="text-purple-100">{caseStudyData.testimonial.position}</div>
                <div className="text-white font-semibold">{caseStudyData.testimonial.company}</div>
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
              Votre Cabinet Mérite un{' '}
              <span className="text-brand">
                Rebranding Professionnel
              </span>
            </motion.h2>
            <motion.p variants={fadeInUp} className="text-xl mb-10 text-gray-200 leading-relaxed">
              Modernisez votre image et attirez une clientèle premium avec une identité 
              qui reflète vraiment votre expertise et vos valeurs.
            </motion.p>
            <motion.div variants={fadeInUp} className="flex flex-col md:flex-row gap-4 justify-center">
              <Link 
                href="/contact"
                className="bg-brand text-gray-900 px-10 py-4 rounded-lg font-bold text-lg shadow-xl hover:shadow-2xl transition-all duration-300"
              >
                Moderniser Mon Cabinet →
              </Link>
              <Link 
                href="/portfolio"
                className="text-white border-2 border-white px-10 py-4 rounded-lg hover:bg-white hover:text-gray-900 transition-all duration-300 font-bold"
              >
                Autres Projets B2B
              </Link>
            </motion.div>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default ConsultingCaseStudy;