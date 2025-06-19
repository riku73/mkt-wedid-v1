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
  image: string;
}

interface TestimonialData {
  id: string;
  name: string;
  company: string;
  role: string;
  content: string;
  rating: number;
  avatar: string;
}

interface ProcessStep {
  id: string;
  step: number;
  title: string;
  description: string;
  icon: string;
}

// Service data with professional images
const services: ServiceCard[] = [
  {
    id: 'marketing-digital',
    title: 'Marketing Digital',
    description: 'Stratégies SEO/SEA, social media et content marketing pour maximiser votre visibilité en ligne au Luxembourg.',
    icon: '🚀',
    features: ['SEO/SEA', 'Social Media', 'Content Marketing', 'Analytics'],
    gradient: 'from-blue-500 to-purple-600',
    image: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2415&q=80'
  },
  {
    id: 'creation-sites',
    title: 'Création de Sites Web',
    description: 'Sites vitrine, e-commerce et applications web modernes, optimisés pour la performance et la conversion.',
    icon: '💻',
    features: ['Sites Vitrine', 'E-commerce', 'Applications Web', 'Responsive Design'],
    gradient: 'from-green-500 to-teal-600',
    image: 'https://images.unsplash.com/photo-1498050108023-c5249f4df085?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2072&q=80'
  },
  {
    id: 'branding-design',
    title: 'Branding & Design',
    description: 'Identité visuelle distinctive et supports marketing créatifs pour renforcer votre image de marque.',
    icon: '🎨',
    features: ['Identité Visuelle', 'Design Graphique', 'Supports Marketing', 'Brand Strategy'],
    gradient: 'from-pink-500 to-rose-600',
    image: 'https://images.unsplash.com/photo-1561070791-2526d30994b5?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2064&q=80'
  },
  {
    id: 'consulting-formation',
    title: 'Consulting & Formation',
    description: 'Audits marketing, stratégie digitale et formation d\'équipes pour développer votre expertise interne.',
    icon: '📊',
    features: ['Audit Marketing', 'Stratégie Digitale', 'Formation', 'Consulting'],
    gradient: 'from-orange-500 to-red-600',
    image: 'https://images.unsplash.com/photo-1552664730-d307ca884978?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2069&q=80'
  }
];

// Testimonial data with professional avatars
const testimonials: TestimonialData[] = [
  {
    id: '1',
    name: 'Marie Dubois',
    company: 'FinTech Luxembourg',
    role: 'CEO',
    content: 'Wedid a transformé notre présence digitale. Leur expertise du marché luxembourgeois et leur approche data-driven ont généré un ROI exceptionnel.',
    rating: 5,
    avatar: 'https://images.unsplash.com/photo-1494790108755-2616b612b820?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=387&q=80'
  },
  {
    id: '2',
    name: 'Jean-Claude Weber',
    company: 'Weber Consulting',
    role: 'Directeur Marketing',
    content: 'Une équipe professionnelle qui comprend les enjeux du business au Luxembourg. Résultats visibles dès les premiers mois.',
    rating: 5,
    avatar: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80'
  },
  {
    id: '3',
    name: 'Sarah Mitchell',
    company: 'Tech Innovation SA',
    role: 'CMO',
    content: 'Service client exceptionnel et stratégies marketing innovantes. Wedid est devenu notre partenaire de confiance.',
    rating: 5,
    avatar: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80'
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
    scale: 1.02,
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
    <div className="min-h-screen bg-white font-sans">
      {/* Navigation */}
      <nav className="fixed w-full top-0 z-50 bg-white/95 backdrop-blur-sm border-b border-gray-200 shadow-sm">
        <div className="max-w-7xl mx-auto px-6">
          <div className="flex justify-between items-center h-20">
            <div className="logo">
              <h3 className="text-gray-900 font-bold text-2xl">Wedid</h3>
            </div>
            <div className="hidden lg:flex space-x-10">
              <a href="#accueil" className="text-gray-700 hover:text-gray-900 transition-colors font-medium">Accueil</a>
              <a href="#services" className="text-gray-700 hover:text-gray-900 transition-colors font-medium">Services</a>
              <a href="#a-propos" className="text-gray-700 hover:text-gray-900 transition-colors font-medium">À Propos</a>
              <a href="#contact" className="text-gray-700 hover:text-gray-900 transition-colors font-medium">Contact</a>
            </div>
            <motion.button 
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="bg-brand text-gray-900 px-6 py-3 rounded-lg font-semibold shadow-md hover:shadow-lg transition-all duration-300"
            >
              Consultation Gratuite
            </motion.button>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section id="accueil" className="relative min-h-screen flex items-center justify-center overflow-hidden">
        {/* Background Image */}
        <div 
          className="absolute inset-0 bg-cover bg-center bg-no-repeat"
          style={{
            backgroundImage: `url('https://images.unsplash.com/photo-1497366216548-37526070297c?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2069&q=80')`
          }}
        />
        
        {/* Strong overlay for better contrast */}
        <div className="absolute inset-0 bg-gray-900/80"></div>
        <div className="absolute inset-0 bg-black/20"></div>
        
        {/* Content */}
        <div className="max-w-6xl mx-auto px-6 relative z-10 text-center text-white">
          <motion.div
            initial="hidden"
            animate="visible"
            variants={staggerChildren}
          >
            <motion.div 
              variants={fadeInUp}
              className="mb-8"
            >
              <span className="inline-block bg-brand text-gray-900 px-4 py-2 rounded-full text-sm font-semibold mb-8">
                🇱🇺 Agence #1 au Luxembourg
              </span>
            </motion.div>
            
            <motion.h1 
              variants={fadeInUp}
              className="text-5xl md:text-7xl font-bold mb-8 max-w-5xl mx-auto leading-tight"
            >
              L'Agence Marketing Digital de{' '}
              <span className="text-brand">
                Référence
              </span>{' '}
              au Luxembourg
            </motion.h1>
            
            <motion.p 
              variants={fadeInUp}
              className="text-xl md:text-2xl mb-12 max-w-4xl mx-auto text-gray-200 leading-relaxed font-normal"
            >
              Nous transformons votre présence digitale avec des stratégies data-driven 
              et une expertise locale du marché luxembourgeois pour générer des résultats mesurables.
            </motion.p>
            
            <motion.div 
              variants={fadeInUp}
              className="flex flex-col md:flex-row gap-4 justify-center items-center"
            >
              <motion.button 
                whileHover={{ scale: 1.05, y: -2 }}
                whileTap={{ scale: 0.95 }}
                className="bg-brand text-gray-900 px-8 py-4 rounded-lg font-bold text-lg shadow-xl hover:shadow-2xl transition-all duration-300"
              >
                Démarrer Maintenant →
              </motion.button>
              
              <motion.a 
                whileHover={{ scale: 1.05, y: -2 }}
                href="#services" 
                className="text-white border-2 border-white px-8 py-4 rounded-lg hover:bg-white hover:text-gray-900 transition-all duration-300 font-semibold"
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
          <div className="w-6 h-10 border-2 border-white rounded-full flex justify-center">
            <div className="w-1 h-3 bg-white rounded-full mt-2"></div>
          </div>
        </motion.div>
      </section>

      {/* Stats Section */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-6">
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
                className="text-center p-8 rounded-xl bg-white shadow-lg hover:shadow-xl transition-all duration-300"
              >
                <span className="block text-4xl md:text-5xl font-bold text-gray-900 mb-2">
                  <AnimatedCounter value={stat.value} suffix={stat.suffix} />
                </span>
                <p className="font-medium text-gray-600">{stat.label}</p>
              </motion.div>
            ))}
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
            variants={staggerChildren}
            className="text-center mb-16"
          >
            <motion.div variants={fadeInUp} className="mb-6">
              <span className="inline-block bg-brand text-gray-900 px-4 py-2 rounded-full text-sm font-bold mb-8">
                NOS SERVICES
              </span>
            </motion.div>
            <motion.h2 variants={fadeInUp} className="text-4xl md:text-5xl font-bold mb-6 text-gray-900">
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
                  className="relative rounded-2xl bg-white shadow-lg border border-gray-100 hover:shadow-2xl transition-all duration-500 overflow-hidden h-full"
                >
                  {/* Service Image */}
                  <div className="relative h-48 overflow-hidden">
                    <img 
                      src={service.image} 
                      alt={service.title}
                      className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                    />
                    <div className="absolute inset-0 bg-gray-900/40"></div>
                    
                    {/* Icon overlay */}
                    <div className="absolute top-4 left-4">
                      <div className="inline-flex items-center justify-center w-12 h-12 rounded-lg bg-white/90 text-xl shadow-lg">
                        {service.icon}
                      </div>
                    </div>
                  </div>
                  
                  <div className="p-8">
                    <h3 className="text-2xl font-bold mb-4 text-gray-900">
                      {service.title}
                    </h3>
                    <p className="text-gray-600 text-base mb-6 leading-relaxed">
                      {service.description}
                    </p>
                    <ul className="space-y-3">
                      {service.features.map((feature, idx) => (
                        <li key={idx} className="flex items-center text-gray-700">
                          <div className="w-2 h-2 rounded-full bg-brand mr-3 flex-shrink-0"></div>
                          <span className="font-medium">{feature}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </motion.div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Process Section */}
      <section className="py-24 bg-gray-900 relative overflow-hidden">
        {/* Background Image */}
        <div 
          className="absolute inset-0 bg-cover bg-center bg-no-repeat"
          style={{
            backgroundImage: `url('https://images.unsplash.com/photo-1600880292203-757bb62b4baf?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80')`
          }}
        />
        <div className="absolute inset-0 bg-gray-900/85"></div>
        
        <div className="max-w-7xl mx-auto px-6 relative z-10">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={staggerChildren}
            className="text-center mb-16"
          >
            <motion.div variants={fadeInUp} className="mb-6">
              <span className="inline-block bg-brand text-gray-900 px-4 py-2 rounded-full text-sm font-bold mb-8">
                NOTRE PROCESSUS
              </span>
            </motion.div>
            <motion.h2 variants={fadeInUp} className="text-4xl md:text-5xl font-bold mb-6 text-white">
              Notre Processus en 4 Étapes
            </motion.h2>
            <motion.p variants={fadeInUp} className="text-xl max-w-4xl mx-auto text-gray-300 leading-relaxed">
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
                <div className="text-center p-6 rounded-2xl bg-white/10 backdrop-blur-sm border border-white/20 hover:bg-white/20 transition-all duration-300">
                  <div className="relative mb-6">
                    <div className="w-16 h-16 bg-brand rounded-full flex items-center justify-center mx-auto shadow-lg">
                      <span className="text-xl font-bold text-gray-900">{step.step}</span>
                    </div>
                    {index < processSteps.length - 1 && (
                      <div className="hidden lg:block absolute top-8 left-full w-full h-0.5 bg-brand/30"></div>
                    )}
                  </div>
                  <div className="text-2xl mb-4">{step.icon}</div>
                  <h4 className="text-xl font-bold mb-4 text-white">{step.title}</h4>
                  <p className="text-gray-300 leading-relaxed">
                    {step.description}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-24 bg-gray-50">
        <div className="max-w-7xl mx-auto px-6">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={staggerChildren}
            className="text-center mb-16"
          >
            <motion.div variants={fadeInUp} className="mb-6">
              <span className="inline-block bg-brand text-gray-900 px-4 py-2 rounded-full text-sm font-bold mb-8">
                TÉMOIGNAGES
              </span>
            </motion.div>
            <motion.h2 variants={fadeInUp} className="text-4xl md:text-5xl font-bold mb-6 text-gray-900">
              Ce que Disent nos Clients
            </motion.h2>
            <motion.p variants={fadeInUp} className="text-xl max-w-4xl mx-auto text-gray-600 leading-relaxed">
              Découvrez pourquoi les entreprises luxembourgeoises font confiance à Wedid 
              pour leur croissance digitale.
            </motion.p>
          </motion.div>

          <div className="max-w-4xl mx-auto">
            <motion.div
              key={currentTestimonial}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.6 }}
              className="relative"
            >
              <div className="bg-white rounded-2xl shadow-xl p-10 border border-gray-100 relative">
                <div className="text-center">
                  <div className="flex justify-center mb-6">
                    {[...Array(testimonials[currentTestimonial].rating)].map((_, i) => (
                      <span key={i} className="text-2xl text-yellow-400 mx-1">★</span>
                    ))}
                  </div>
                  <blockquote className="text-xl md:text-2xl font-medium mb-8 leading-relaxed text-gray-800">
                    "{testimonials[currentTestimonial].content}"
                  </blockquote>
                  <div className="flex items-center justify-center space-x-4">
                    <img 
                      src={testimonials[currentTestimonial].avatar} 
                      alt={testimonials[currentTestimonial].name}
                      className="w-16 h-16 rounded-full object-cover shadow-md"
                    />
                    <div className="text-left">
                      <h5 className="font-bold text-lg text-gray-900">{testimonials[currentTestimonial].name}</h5>
                      <p className="text-gray-600">
                        {testimonials[currentTestimonial].role} - {testimonials[currentTestimonial].company}
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>

            {/* Testimonial Navigation */}
            <div className="flex justify-center mt-8 space-x-2">
              {testimonials.map((_, index) => (
                <button
                  key={index}
                  onClick={() => setCurrentTestimonial(index)}
                  className={`w-3 h-3 rounded-full transition-all duration-300 ${
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
      <section className="py-24 bg-gray-900 relative overflow-hidden">
        {/* Background Image */}
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
            variants={staggerChildren}
          >
            <motion.h2 variants={fadeInUp} className="text-4xl md:text-6xl font-bold mb-6 text-white">
              Prêt à Transformer Votre{' '}
              <span className="text-brand">
                Présence Digitale
              </span> ?
            </motion.h2>
            <motion.p variants={fadeInUp} className="text-xl mb-10 max-w-4xl mx-auto text-gray-200 leading-relaxed">
              Profitez d'une consultation gratuite avec nos experts marketing digital. 
              Analysons ensemble vos enjeux et définissons une stratégie sur-mesure pour votre entreprise.
            </motion.p>
            <motion.div variants={fadeInUp} className="flex flex-col md:flex-row gap-4 justify-center">
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
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-16 border-t border-gray-800">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid md:grid-cols-4 gap-8 mb-12">
            <div className="md:col-span-2">
              <h4 className="text-brand mb-6 text-2xl font-bold">Wedid</h4>
              <p className="text-lg leading-relaxed text-gray-300 mb-6 max-w-md">
                L'agence marketing digital de référence au Luxembourg. 
                Expertise locale, résultats internationaux.
              </p>
              <div className="space-y-2">
                <p className="flex items-center text-gray-300"><span className="mr-2">📍</span> Luxembourg-Ville</p>
                <p className="flex items-center text-gray-300"><span className="mr-2">📞</span> +352 12 34 56 789</p>
                <p className="flex items-center text-gray-300"><span className="mr-2">✉️</span> contact@wedid.lu</p>
              </div>
            </div>
            <div>
              <h5 className="text-white mb-4 font-bold">Services</h5>
              <ul className="space-y-2 text-gray-300">
                <li><a href="#" className="hover:text-brand transition-colors">Marketing Digital</a></li>
                <li><a href="#" className="hover:text-brand transition-colors">Création Sites Web</a></li>
                <li><a href="#" className="hover:text-brand transition-colors">Branding & Design</a></li>
                <li><a href="#" className="hover:text-brand transition-colors">Consulting</a></li>
              </ul>
            </div>
            <div>
              <h5 className="text-white mb-4 font-bold">Entreprise</h5>
              <ul className="space-y-2 text-gray-300">
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