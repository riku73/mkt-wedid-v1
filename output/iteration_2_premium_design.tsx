'use client';

import React, { useState, useEffect } from 'react';
import { motion, useInView, Variants } from 'framer-motion';
import { useRef } from 'react';

// TypeScript interfaces
interface ServiceCard {
  id: string;
  title: string;
  description: string;
  icon: string;
  features: string[];
  gradient: string;
}

interface TestimonialData {
  id: string;
  name: string;
  company: string;
  role: string;
  content: string;
  rating: number;
}

interface ProcessStep {
  id: string;
  step: number;
  title: string;
  description: string;
  icon: string;
}

// Service data with premium styling
const services: ServiceCard[] = [
  {
    id: 'marketing-digital',
    title: 'Marketing Digital',
    description: 'Stratégies SEO/SEA, social media et content marketing pour maximiser votre visibilité en ligne au Luxembourg.',
    icon: '🚀',
    features: ['SEO/SEA', 'Social Media', 'Content Marketing', 'Analytics'],
    gradient: 'from-blue-500 to-purple-600'
  },
  {
    id: 'creation-sites',
    title: 'Création de Sites Web',
    description: 'Sites vitrine, e-commerce et applications web modernes, optimisés pour la performance et la conversion.',
    icon: '💻',
    features: ['Sites Vitrine', 'E-commerce', 'Applications Web', 'Responsive Design'],
    gradient: 'from-green-500 to-teal-600'
  },
  {
    id: 'branding-design',
    title: 'Branding & Design',
    description: 'Identité visuelle distinctive et supports marketing créatifs pour renforcer votre image de marque.',
    icon: '🎨',
    features: ['Identité Visuelle', 'Design Graphique', 'Supports Marketing', 'Brand Strategy'],
    gradient: 'from-pink-500 to-rose-600'
  },
  {
    id: 'consulting-formation',
    title: 'Consulting & Formation',
    description: 'Audits marketing, stratégie digitale et formation d\'équipes pour développer votre expertise interne.',
    icon: '📊',
    features: ['Audit Marketing', 'Stratégie Digitale', 'Formation', 'Consulting'],
    gradient: 'from-orange-500 to-red-600'
  }
];

// Testimonial data
const testimonials: TestimonialData[] = [
  {
    id: '1',
    name: 'Marie Dubois',
    company: 'FinTech Luxembourg',
    role: 'CEO',
    content: 'Wedid a transformé notre présence digitale. Leur expertise du marché luxembourgeois et leur approche data-driven ont généré un ROI exceptionnel.',
    rating: 5
  },
  {
    id: '2',
    name: 'Jean-Claude Weber',
    company: 'Weber Consulting',
    role: 'Directeur Marketing',
    content: 'Une équipe professionnelle qui comprend les enjeux du business au Luxembourg. Résultats visibles dès les premiers mois.',
    rating: 5
  },
  {
    id: '3',
    name: 'Sarah Mitchell',
    company: 'Tech Innovation SA',
    role: 'CMO',
    content: 'Service client exceptionnel et stratégies marketing innovantes. Wedid est devenu notre partenaire de confiance.',
    rating: 5
  }
];

// Process steps
const processSteps: ProcessStep[] = [
  {
    id: '1',
    step: 1,
    title: 'Consultation Gratuite',
    description: 'Analyse de vos enjeux marketing et définition des objectifs business ensemble.',
    icon: '💬'
  },
  {
    id: '2',
    step: 2,
    title: 'Audit & Stratégie',
    description: 'Audit complet de votre présence digitale et création d\'une stratégie sur-mesure.',
    icon: '🔍'
  },
  {
    id: '3',
    step: 3,
    title: 'Mise en Œuvre',
    description: 'Déploiement de la stratégie avec notre équipe d\'experts et suivi en temps réel.',
    icon: '⚡'
  },
  {
    id: '4',
    step: 4,
    title: 'Optimisation Continue',
    description: 'Analyse des performances, optimisations et reporting mensuel détaillé.',
    icon: '📈'
  }
];

// Enhanced animation variants
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

const scaleOnHover: Variants = {
  rest: { scale: 1 },
  hover: { 
    scale: 1.05,
    transition: { 
      duration: 0.3,
      ease: "easeOut"
    }
  }
};

// Animated Counter Component
const AnimatedCounter: React.FC<{ value: number; suffix?: string; duration?: number }> = ({ 
  value, 
  suffix = '', 
  duration = 2 
}) => {
  const [count, setCount] = useState(0);
  const ref = useRef(null);
  const isInView = useInView(ref);

  useEffect(() => {
    if (isInView) {
      let startTime: number;
      const animate = (timestamp: number) => {
        if (!startTime) startTime = timestamp;
        const progress = (timestamp - startTime) / (duration * 1000);
        
        if (progress < 1) {
          setCount(Math.floor(value * progress));
          requestAnimationFrame(animate);
        } else {
          setCount(value);
        }
      };
      requestAnimationFrame(animate);
    }
  }, [isInView, value, duration]);

  return <span ref={ref}>{count}{suffix}</span>;
};

// Main Homepage Component
const WedidHomepage: React.FC = () => {
  const [currentTestimonial, setCurrentTestimonial] = useState(0);

  // Auto-rotate testimonials
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentTestimonial((prev: number) => (prev + 1) % testimonials.length);
    }, 5000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Navigation */}
      <nav className="fixed w-full top-0 z-50 bg-white/90 backdrop-blur-md border-b border-gray-100">
        <div className="max-w-7xl mx-auto px-6">
          <div className="flex justify-between items-center h-20">
            <div className="logo">
              <h3 className="text-midnight-purple font-bold text-3xl font-heading">Wedid</h3>
            </div>
            <div className="hidden lg:flex space-x-12">
              <a href="#accueil" className="text-gray-700 hover:text-midnight-purple transition-colors font-medium">Accueil</a>
              <a href="#services" className="text-gray-700 hover:text-midnight-purple transition-colors font-medium">Services</a>
              <a href="#a-propos" className="text-gray-700 hover:text-midnight-purple transition-colors font-medium">À Propos</a>
              <a href="#contact" className="text-gray-700 hover:text-midnight-purple transition-colors font-medium">Contact</a>
            </div>
            <motion.button 
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="bg-gradient-to-r from-brand to-green-400 text-midnight-purple px-8 py-3 rounded-full font-heading font-semibold shadow-lg hover:shadow-xl transition-all duration-300"
            >
              Consultation Gratuite
            </motion.button>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section id="accueil" className="relative min-h-screen flex items-center justify-center overflow-hidden">
        {/* Background with animated gradient */}
        <div className="absolute inset-0 bg-gradient-to-br from-midnight-purple via-purple-800 to-indigo-900"></div>
        <div className="absolute inset-0 bg-gradient-to-t from-black/20 via-transparent to-transparent"></div>
        
        {/* Animated background elements */}
        <div className="absolute inset-0 overflow-hidden">
          <motion.div
            animate={{ 
              scale: [1, 1.2, 1],
              rotate: [0, 180, 360],
              opacity: [0.1, 0.2, 0.1]
            }}
            transition={{ duration: 20, repeat: Infinity, ease: [0.25, 0.25, 0.75, 0.75] }}
            className="absolute top-1/4 right-1/4 w-96 h-96 bg-brand/10 rounded-full blur-3xl"
          />
          <motion.div
            animate={{ 
              scale: [1.2, 1, 1.2],
              rotate: [360, 180, 0],
              opacity: [0.1, 0.15, 0.1]
            }}
            transition={{ duration: 25, repeat: Infinity, ease: [0.25, 0.25, 0.75, 0.75] }}
            className="absolute bottom-1/4 left-1/4 w-80 h-80 bg-pink-400/10 rounded-full blur-3xl"
          />
        </div>
        
        {/* Content */}
        <div className="max-w-7xl mx-auto px-6 relative z-10 text-center text-white">
          <motion.div
            initial="hidden"
            animate="visible"
            variants={staggerChildren}
          >
            <motion.div 
              variants={fadeInUp}
              className="mb-8"
            >
              <span className="inline-block bg-white/10 backdrop-blur-sm px-6 py-2 rounded-full text-sm font-medium mb-8 border border-white/20">
                🇱🇺 Agence #1 au Luxembourg
              </span>
            </motion.div>
            
            <motion.h1 
              variants={fadeInUp}
              className="text-6xl md:text-8xl font-heading font-bold mb-8 max-w-5xl mx-auto leading-tight"
            >
              L'Agence Marketing Digital de{' '}
              <span className="bg-gradient-to-r from-brand to-green-400 bg-clip-text text-transparent">
                Référence
              </span>{' '}
              au Luxembourg
            </motion.h1>
            
            <motion.p 
              variants={fadeInUp}
              className="text-xl md:text-2xl mb-12 max-w-3xl mx-auto opacity-90 font-body leading-relaxed"
            >
              Nous transformons votre présence digitale avec des stratégies data-driven 
              et une expertise locale du marché luxembourgeois pour générer des résultats mesurables.
            </motion.p>
            
            <motion.div 
              variants={fadeInUp}
              className="flex flex-col md:flex-row gap-6 justify-center items-center"
            >
              <motion.button 
                whileHover={{ scale: 1.05, y: -2 }}
                whileTap={{ scale: 0.95 }}
                className="bg-gradient-to-r from-brand to-green-400 text-midnight-purple px-10 py-5 rounded-full font-heading font-bold text-lg shadow-2xl hover:shadow-brand/25 transition-all duration-300"
              >
                Démarrer Maintenant →
              </motion.button>
              
              <motion.a 
                whileHover={{ scale: 1.05, y: -2 }}
                href="#services" 
                className="text-white border-2 border-white/30 backdrop-blur-sm px-10 py-5 rounded-full hover:bg-white/10 transition-all duration-300 font-medium"
              >
                Découvrir nos Services
              </motion.a>
            </motion.div>
          </motion.div>
        </div>

        {/* Scroll Indicator */}
        <motion.div 
          animate={{ y: [0, 10, 0] }}
          transition={{ repeat: Infinity, duration: 2 }}
          className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
        >
          <div className="w-8 h-12 border-2 border-white/50 rounded-full flex justify-center">
            <div className="w-1 h-3 bg-white rounded-full mt-2"></div>
          </div>
        </motion.div>
      </section>

      {/* Stats Section */}
      <section className="py-24 bg-white relative">
        <div className="absolute inset-0 bg-gradient-to-r from-gray-50 to-white"></div>
        <div className="max-w-7xl mx-auto px-6 relative">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={staggerChildren}
            className="grid grid-cols-2 lg:grid-cols-4 gap-8"
          >
            {[
              { value: 150, suffix: '+', label: 'Clients Satisfaits' },
              { value: 5, suffix: '', label: 'Années d\'Expérience' },
              { value: 95, suffix: '%', label: 'Taux de Satisfaction' },
              { value: 24, suffix: '/7', label: 'Support Client' }
            ].map((stat, index) => (
              <motion.div
                key={index}
                variants={fadeInUp}
                className="text-center p-8 rounded-2xl bg-white shadow-lg border border-gray-100 hover:shadow-xl transition-all duration-300"
              >
                <span className="block text-5xl md:text-6xl font-heading font-bold text-midnight-purple mb-2">
                  <AnimatedCounter value={stat.value} suffix={stat.suffix} />
                </span>
                <p className="font-medium text-gray-600 text-lg">{stat.label}</p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Services Section */}
      <section id="services" className="py-32 bg-gradient-to-b from-white to-gray-50">
        <div className="max-w-7xl mx-auto px-6">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={staggerChildren}
            className="text-center mb-20"
          >
            <motion.div variants={fadeInUp} className="mb-6">
              <span className="inline-block bg-gradient-to-r from-brand to-green-400 text-midnight-purple px-6 py-2 rounded-full text-sm font-bold mb-8">
                NOS SERVICES
              </span>
            </motion.div>
            <motion.h2 variants={fadeInUp} className="text-5xl md:text-6xl font-heading font-bold mb-8 text-midnight-purple">
              Services Marketing Digital
            </motion.h2>
            <motion.p variants={fadeInUp} className="text-xl max-w-4xl mx-auto text-gray-600 leading-relaxed">
              Nous offrons une gamme complète de services marketing digital adaptés 
              aux spécificités du marché luxembourgeois et de la Grande Région.
            </motion.p>
          </motion.div>

          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={staggerChildren}
            className="grid md:grid-cols-2 gap-8"
          >
            {services.map((service, index) => (
              <motion.div
                key={service.id}
                variants={fadeInUp}
                initial="rest"
                whileHover="hover"
                className="group relative"
              >
                <motion.div
                  variants={scaleOnHover}
                  className="relative p-10 rounded-3xl bg-white shadow-lg border border-gray-100 hover:shadow-2xl transition-all duration-500 overflow-hidden h-full"
                >
                  {/* Gradient background on hover */}
                  <div className={`absolute inset-0 bg-gradient-to-br ${service.gradient} opacity-0 group-hover:opacity-5 transition-opacity duration-300`}></div>
                  
                  <div className="relative z-10">
                    <div className={`inline-flex items-center justify-center w-20 h-20 rounded-2xl bg-gradient-to-br ${service.gradient} mb-8 text-3xl shadow-lg`}>
                      {service.icon}
                    </div>
                    <h3 className="text-3xl font-heading font-bold mb-6 text-midnight-purple group-hover:text-gray-800 transition-colors">
                      {service.title}
                    </h3>
                    <p className="text-gray-600 text-lg mb-8 leading-relaxed">
                      {service.description}
                    </p>
                    <ul className="space-y-4">
                      {service.features.map((feature, idx) => (
                        <li key={idx} className="flex items-center text-gray-700">
                          <div className={`w-2 h-2 rounded-full bg-gradient-to-r ${service.gradient} mr-4 flex-shrink-0`}></div>
                          <span className="font-medium">{feature}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                  
                  {/* Animated border */}
                  <div className="absolute inset-0 rounded-3xl bg-gradient-to-r from-brand/20 to-purple-500/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300" style={{ padding: '2px' }}>
                    <div className="w-full h-full bg-white rounded-3xl"></div>
                  </div>
                </motion.div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Process Section */}
      <section className="py-32 bg-midnight-purple relative overflow-hidden">
        {/* Background elements */}
        <div className="absolute inset-0">
          <div className="absolute top-0 left-0 w-1/2 h-full bg-gradient-to-r from-purple-800/50 to-transparent"></div>
          <div className="absolute bottom-0 right-0 w-1/2 h-full bg-gradient-to-l from-indigo-800/50 to-transparent"></div>
        </div>
        
        <div className="max-w-7xl mx-auto px-6 relative z-10">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={staggerChildren}
            className="text-center mb-20"
          >
            <motion.div variants={fadeInUp} className="mb-6">
              <span className="inline-block bg-brand text-midnight-purple px-6 py-2 rounded-full text-sm font-bold mb-8">
                NOTRE PROCESSUS
              </span>
            </motion.div>
            <motion.h2 variants={fadeInUp} className="text-5xl md:text-6xl font-heading font-bold mb-8 text-white">
              Processus en 4 Étapes
            </motion.h2>
            <motion.p variants={fadeInUp} className="text-xl max-w-4xl mx-auto text-white/80 leading-relaxed">
              Une méthodologie éprouvée pour garantir le succès de vos projets marketing digital.
            </motion.p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {processSteps.map((step, index) => (
              <motion.div
                key={step.id}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                variants={fadeInUp}
                transition={{ delay: index * 0.2 }}
                className="relative"
              >
                <div className="text-center p-8 rounded-3xl bg-white/10 backdrop-blur-sm border border-white/20 hover:bg-white/20 transition-all duration-300">
                  <div className="relative mb-8">
                    <div className="w-20 h-20 bg-gradient-to-r from-brand to-green-400 rounded-full flex items-center justify-center mx-auto shadow-2xl">
                      <span className="text-2xl font-heading font-bold text-midnight-purple">{step.step}</span>
                    </div>
                    {index < processSteps.length - 1 && (
                      <div className="hidden lg:block absolute top-10 left-full w-full h-0.5 bg-gradient-to-r from-brand/50 to-transparent"></div>
                    )}
                  </div>
                  <div className="text-3xl mb-6">{step.icon}</div>
                  <h4 className="text-2xl font-heading font-bold mb-6 text-white">{step.title}</h4>
                  <p className="text-white/80 leading-relaxed">
                    {step.description}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-32 bg-gray-50">
        <div className="max-w-7xl mx-auto px-6">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={staggerChildren}
            className="text-center mb-20"
          >
            <motion.div variants={fadeInUp} className="mb-6">
              <span className="inline-block bg-gradient-to-r from-brand to-green-400 text-midnight-purple px-6 py-2 rounded-full text-sm font-bold mb-8">
                TÉMOIGNAGES
              </span>
            </motion.div>
            <motion.h2 variants={fadeInUp} className="text-5xl md:text-6xl font-heading font-bold mb-8 text-midnight-purple">
              Ce que Disent nos Clients
            </motion.h2>
            <motion.p variants={fadeInUp} className="text-xl max-w-4xl mx-auto text-gray-600 leading-relaxed">
              Découvrez pourquoi les entreprises luxembourgeoises font confiance à Wedid 
              pour leur croissance digitale.
            </motion.p>
          </motion.div>

          <div className="max-w-5xl mx-auto">
            <motion.div
              key={currentTestimonial}
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -30 }}
              transition={{ duration: 0.6 }}
              className="relative"
            >
              <div className="bg-white rounded-3xl shadow-2xl p-12 border border-gray-100 relative overflow-hidden">
                {/* Decorative elements */}
                <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-br from-brand/10 to-purple-500/10 rounded-bl-3xl"></div>
                <div className="absolute bottom-0 left-0 w-24 h-24 bg-gradient-to-tr from-pink-500/10 to-brand/10 rounded-tr-3xl"></div>
                
                <div className="relative z-10 text-center">
                  <div className="flex justify-center mb-8">
                    {[...Array(testimonials[currentTestimonial].rating)].map((_, i) => (
                      <span key={i} className="text-3xl text-yellow-400 mx-1">★</span>
                    ))}
                  </div>
                  <blockquote className="text-2xl md:text-3xl font-medium mb-10 leading-relaxed text-gray-800 italic">
                    "{testimonials[currentTestimonial].content}"
                  </blockquote>
                  <div className="flex items-center justify-center space-x-4">
                    <div className="w-16 h-16 bg-gradient-to-br from-brand to-green-400 rounded-full flex items-center justify-center">
                      <span className="text-midnight-purple font-bold text-xl">
                        {testimonials[currentTestimonial].name.charAt(0)}
                      </span>
                    </div>
                    <div className="text-left">
                      <h5 className="font-bold text-xl text-midnight-purple">{testimonials[currentTestimonial].name}</h5>
                      <p className="text-gray-600">
                        {testimonials[currentTestimonial].role} - {testimonials[currentTestimonial].company}
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>

            {/* Testimonial Navigation */}
            <div className="flex justify-center mt-12 space-x-3">
              {testimonials.map((_, index) => (
                <button
                  key={index}
                  onClick={() => setCurrentTestimonial(index)}
                  className={`w-4 h-4 rounded-full transition-all duration-300 ${
                    index === currentTestimonial 
                      ? 'bg-brand scale-125' 
                      : 'bg-gray-300 hover:bg-gray-400'
                  }`}
                />
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-32 bg-gradient-to-br from-midnight-purple via-purple-800 to-indigo-900 relative overflow-hidden">
        {/* Background elements */}
        <motion.div
          animate={{ 
            scale: [1, 1.2, 1],
            rotate: [0, 180, 360],
            opacity: [0.1, 0.2, 0.1]
          }}
          transition={{ duration: 20, repeat: Infinity, ease: [0.25, 0.25, 0.75, 0.75] }}
          className="absolute top-1/4 right-1/4 w-96 h-96 bg-brand/10 rounded-full blur-3xl"
        />
        
        <div className="max-w-7xl mx-auto px-6 text-center relative z-10">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={staggerChildren}
          >
            <motion.h2 variants={fadeInUp} className="text-5xl md:text-7xl font-heading font-bold mb-8 text-white">
              Prêt à Transformer Votre{' '}
              <span className="bg-gradient-to-r from-brand to-green-400 bg-clip-text text-transparent">
                Présence Digitale
              </span> ?
            </motion.h2>
            <motion.p variants={fadeInUp} className="text-xl md:text-2xl mb-12 max-w-4xl mx-auto text-white/90 leading-relaxed">
              Profitez d'une consultation gratuite avec nos experts marketing digital. 
              Analysons ensemble vos enjeux et définissons une stratégie sur-mesure pour votre entreprise.
            </motion.p>
            <motion.div variants={fadeInUp} className="flex flex-col md:flex-row gap-6 justify-center">
              <motion.button 
                whileHover={{ scale: 1.05, y: -2 }}
                whileTap={{ scale: 0.95 }}
                className="bg-gradient-to-r from-brand to-green-400 text-midnight-purple px-12 py-6 rounded-full font-heading font-bold text-xl shadow-2xl hover:shadow-brand/25 transition-all duration-300"
              >
                Consultation Gratuite →
              </motion.button>
              <motion.a 
                whileHover={{ scale: 1.05, y: -2 }}
                href="tel:+352123456789" 
                className="inline-flex items-center text-white border-2 border-brand px-12 py-6 rounded-full hover:bg-brand/10 transition-all duration-300 font-bold text-xl"
              >
                📞 +352 12 34 56 789
              </motion.a>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-20">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid md:grid-cols-4 gap-12 mb-16">
            <div className="md:col-span-2">
              <h4 className="text-brand mb-8 font-heading text-3xl font-bold">Wedid</h4>
              <p className="text-xl leading-relaxed text-gray-300 mb-8 max-w-md">
                L'agence marketing digital de référence au Luxembourg. 
                Expertise locale, résultats internationaux.
              </p>
              <div className="space-y-3 text-lg">
                <p className="flex items-center"><span className="mr-3">📍</span> Luxembourg-Ville</p>
                <p className="flex items-center"><span className="mr-3">📞</span> +352 12 34 56 789</p>
                <p className="flex items-center"><span className="mr-3">✉️</span> contact@wedid.lu</p>
              </div>
            </div>
            <div>
              <h5 className="text-white mb-6 font-heading text-xl font-bold">Services</h5>
              <ul className="space-y-4 text-gray-300">
                <li><a href="#" className="hover:text-brand transition-colors">Marketing Digital</a></li>
                <li><a href="#" className="hover:text-brand transition-colors">Création Sites Web</a></li>
                <li><a href="#" className="hover:text-brand transition-colors">Branding & Design</a></li>
                <li><a href="#" className="hover:text-brand transition-colors">Consulting</a></li>
              </ul>
            </div>
            <div>
              <h5 className="text-white mb-6 font-heading text-xl font-bold">Entreprise</h5>
              <ul className="space-y-4 text-gray-300">
                <li><a href="#" className="hover:text-brand transition-colors">À Propos</a></li>
                <li><a href="#" className="hover:text-brand transition-colors">Équipe</a></li>
                <li><a href="#" className="hover:text-brand transition-colors">Projets</a></li>
                <li><a href="#" className="hover:text-brand transition-colors">Blog</a></li>
              </ul>
            </div>
          </div>
          <div className="border-t border-gray-800 pt-8 text-center text-gray-400">
            <p>&copy; 2024 Wedid. Tous droits réservés. | Agence Marketing Digital Luxembourg</p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default WedidHomepage;