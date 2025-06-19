'use client';

import React, { useState, useEffect } from 'react';
import { motion, useInView } from 'framer-motion';
import { useRef } from 'react';

// TypeScript interfaces
interface ServiceCard {
  id: string;
  title: string;
  description: string;
  icon: string;
  features: string[];
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

// Service data
const services: ServiceCard[] = [
  {
    id: 'marketing-digital',
    title: 'Marketing Digital',
    description: 'Stratégies SEO/SEA, social media et content marketing pour maximiser votre visibilité en ligne au Luxembourg.',
    icon: '🚀',
    features: ['SEO/SEA', 'Social Media', 'Content Marketing', 'Analytics']
  },
  {
    id: 'creation-sites',
    title: 'Création de Sites Web',
    description: 'Sites vitrine, e-commerce et applications web modernes, optimisés pour la performance et la conversion.',
    icon: '💻',
    features: ['Sites Vitrine', 'E-commerce', 'Applications Web', 'Responsive Design']
  },
  {
    id: 'branding-design',
    title: 'Branding & Design',
    description: 'Identité visuelle distinctive et supports marketing créatifs pour renforcer votre image de marque.',
    icon: '🎨',
    features: ['Identité Visuelle', 'Design Graphique', 'Supports Marketing', 'Brand Strategy']
  },
  {
    id: 'consulting-formation',
    title: 'Consulting & Formation',
    description: 'Audits marketing, stratégie digitale et formation d\'équipes pour développer votre expertise interne.',
    icon: '📊',
    features: ['Audit Marketing', 'Stratégie Digitale', 'Formation', 'Consulting']
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

// Animation variants
const fadeInUp = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6 } }
};

const staggerChildren = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.2
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
    <div className="min-h-screen bg-white">
      {/* Navigation */}
      <nav className="fixed w-full top-0 z-50 bg-transparent">
        <div className="max-w-[1320px] mx-auto px-4">
          <div className="flex justify-between items-center py-4">
            <div className="logo">
              <h3 className="text-white font-bold text-2xl font-heading">Wedid</h3>
            </div>
            <div className="hidden md:flex space-x-8">
              <a href="#accueil" className="text-white hover:text-brand transition-colors">Accueil</a>
              <a href="#services" className="text-white hover:text-brand transition-colors">Services</a>
              <a href="#a-propos" className="text-white hover:text-brand transition-colors">À Propos</a>
              <a href="#contact" className="text-white hover:text-brand transition-colors">Contact</a>
            </div>
            <button className="bg-brand rounded-lg p-1 relative overflow-hidden group">
              <span className="relative z-10 bg-white text-heading-color px-6 py-3 rounded-md font-heading font-medium transition-colors group-hover:text-white">
                Consultation Gratuite
              </span>
              <div className="absolute inset-0 bg-midnight-purple transform -translate-x-full group-hover:translate-x-0 transition-transform duration-300"></div>
            </button>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section id="accueil" className="relative min-h-screen flex items-center justify-center bg-gradient-to-br from-midnight-purple to-purple-900">
        <div className="absolute inset-0 bg-gradient-to-b from-black/30 via-transparent to-transparent"></div>
        
        {/* Content */}
        <div className="max-w-[1320px] mx-auto px-4 relative z-10 text-center text-white">
          <motion.div
            initial="hidden"
            animate="visible"
            variants={staggerChildren}
          >
            <motion.h1 
              variants={fadeInUp}
              className="text-5xl md:text-7xl font-heading font-medium mb-6 max-w-4xl mx-auto leading-tight"
            >
              L'Agence Marketing Digital de Référence au Luxembourg
            </motion.h1>
            
            <motion.p 
              variants={fadeInUp}
              className="text-xl mb-8 max-w-2xl mx-auto opacity-90 font-body"
            >
              Nous transformons votre présence digitale avec des stratégies data-driven 
              et une expertise locale du marché luxembourgeois pour générer des résultats mesurables.
            </motion.p>
            
            <motion.div 
              variants={fadeInUp}
              className="flex flex-col sm:flex-row gap-4 justify-center items-center"
            >
              <button className="bg-brand rounded-lg p-1 relative overflow-hidden group">
                <span className="relative z-10 bg-white text-heading-color px-8 py-4 rounded-md font-heading font-medium text-lg transition-colors group-hover:text-white">
                  Consultation Gratuite
                </span>
                <div className="absolute inset-0 bg-midnight-purple transform -translate-x-full group-hover:translate-x-0 transition-transform duration-300"></div>
              </button>
              
              <a 
                href="#services" 
                className="text-white border-2 border-white px-8 py-4 rounded-lg hover:bg-white hover:text-midnight-purple transition-all duration-300"
              >
                Découvrir nos Services
              </a>
            </motion.div>
          </motion.div>
        </div>

        {/* Scroll Indicator */}
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2">
          <motion.div
            animate={{ y: [0, 10, 0] }}
            transition={{ repeat: Infinity, duration: 2 }}
            className="w-6 h-10 border-2 border-white rounded-full flex justify-center"
          >
            <div className="w-1 h-3 bg-white rounded-full mt-2"></div>
          </motion.div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-20 bg-light-peach">
        <div className="max-w-[1320px] mx-auto px-4">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            <div className="text-center">
              <span className="block text-5xl font-heading font-semibold text-brand mb-2">
                <AnimatedCounter value={150} suffix="+" />
              </span>
              <p className="font-medium text-body-color">Clients Satisfaits</p>
            </div>
            <div className="text-center">
              <span className="block text-5xl font-heading font-semibold text-brand mb-2">
                <AnimatedCounter value={5} />
              </span>
              <p className="font-medium text-body-color">Années d'Expérience</p>
            </div>
            <div className="text-center">
              <span className="block text-5xl font-heading font-semibold text-brand mb-2">
                <AnimatedCounter value={95} suffix="%" />
              </span>
              <p className="font-medium text-body-color">Taux de Satisfaction</p>
            </div>
            <div className="text-center">
              <span className="block text-5xl font-heading font-semibold text-brand mb-2">
                <AnimatedCounter value={24} suffix="/7" />
              </span>
              <p className="font-medium text-body-color">Support Client</p>
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section id="services" className="py-32 md:py-16">
        <div className="max-w-[1320px] mx-auto px-4">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={staggerChildren}
            className="text-center mb-16"
          >
            <motion.h2 variants={fadeInUp} className="text-4xl md:text-5xl font-heading font-medium mb-6 text-heading-color">
              Nos Services Marketing Digital
            </motion.h2>
            <motion.p variants={fadeInUp} className="text-lg max-w-3xl mx-auto text-body-color">
              Nous offrons une gamme complète de services marketing digital adaptés 
              aux spécificités du marché luxembourgeois et de la Grande Région.
            </motion.p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 border border-border">
            {services.map((service, index) => (
              <motion.div
                key={service.id}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                variants={fadeInUp}
                transition={{ delay: index * 0.1 }}
                className="p-10 md:p-20 border-r border-border last:border-r-0 md:border-b lg:border-b-0 hover:bg-pink transition-colors duration-300 group"
              >
                <div className="text-4xl mb-6">{service.icon}</div>
                <h4 className="text-2xl font-heading font-medium mb-4 text-heading-color group-hover:text-midnight-purple transition-colors">
                  {service.title}
                </h4>
                <p className="mb-6 text-sm leading-relaxed text-body-color">
                  {service.description}
                </p>
                <ul className="space-y-2">
                  {service.features.map((feature, idx) => (
                    <li key={idx} className="text-sm flex items-center text-body-color">
                      <span className="w-2 h-2 bg-brand rounded-full mr-3"></span>
                      {feature}
                    </li>
                  ))}
                </ul>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section className="py-32 md:py-16 bg-pink">
        <div className="max-w-[1320px] mx-auto px-4">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={staggerChildren}
            className="text-center mb-16"
          >
            <motion.h2 variants={fadeInUp} className="text-4xl md:text-5xl font-heading font-medium mb-6 text-heading-color">
              Notre Processus en 4 Étapes
            </motion.h2>
            <motion.p variants={fadeInUp} className="text-lg max-w-3xl mx-auto text-body-color">
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
                className="text-center p-10"
              >
                <div className="w-20 h-20 bg-brand rounded-full flex items-center justify-center mx-auto mb-6">
                  <span className="text-2xl font-heading font-semibold text-heading-color">{step.step}</span>
                </div>
                <div className="text-3xl mb-4">{step.icon}</div>
                <h4 className="text-xl font-heading font-medium mb-4 text-heading-color">{step.title}</h4>
                <p className="text-sm leading-relaxed text-body-color">
                  {step.description}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-32 md:py-16">
        <div className="max-w-[1320px] mx-auto px-4">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={staggerChildren}
            className="text-center mb-16"
          >
            <motion.h2 variants={fadeInUp} className="text-4xl md:text-5xl font-heading font-medium mb-6 text-heading-color">
              Ce que Disent nos Clients
            </motion.h2>
            <motion.p variants={fadeInUp} className="text-lg max-w-3xl mx-auto text-body-color">
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
              transition={{ duration: 0.5 }}
              className="bg-white rounded-lg shadow-lg p-10 text-center"
            >
              <div className="flex justify-center mb-4">
                {[...Array(testimonials[currentTestimonial].rating)].map((_, i) => (
                  <span key={i} className="text-brand text-2xl">★</span>
                ))}
              </div>
              <blockquote className="text-lg italic mb-6 leading-relaxed text-body-color">
                "{testimonials[currentTestimonial].content}"
              </blockquote>
              <div>
                <h5 className="font-semibold text-heading-color font-heading">{testimonials[currentTestimonial].name}</h5>
                <p className="text-sm text-body-color">
                  {testimonials[currentTestimonial].role} - {testimonials[currentTestimonial].company}
                </p>
              </div>
            </motion.div>

            {/* Testimonial Navigation */}
            <div className="flex justify-center mt-8 space-x-2">
              {testimonials.map((_, index) => (
                <button
                  key={index}
                  onClick={() => setCurrentTestimonial(index)}
                  className={`w-3 h-3 rounded-full transition-colors ${
                    index === currentTestimonial 
                      ? 'bg-brand' 
                      : 'bg-border'
                  }`}
                />
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-32 md:py-16 bg-midnight-purple text-white">
        <div className="max-w-[1320px] mx-auto px-4 text-center">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={staggerChildren}
          >
            <motion.h2 variants={fadeInUp} className="text-4xl md:text-5xl font-heading font-medium mb-6">
              Prêt à Transformer Votre Présence Digitale ?
            </motion.h2>
            <motion.p variants={fadeInUp} className="text-lg mb-8 max-w-3xl mx-auto opacity-90">
              Profitez d'une consultation gratuite avec nos experts marketing digital. 
              Analysons ensemble vos enjeux et définissons une stratégie sur-mesure pour votre entreprise.
            </motion.p>
            <motion.div variants={fadeInUp} className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="bg-brand rounded-lg p-1 relative overflow-hidden group">
                <span className="relative z-10 bg-white text-heading-color px-8 py-4 rounded-md font-heading font-medium text-lg transition-colors group-hover:text-white">
                  Consultation Gratuite
                </span>
                <div className="absolute inset-0 bg-white transform -translate-x-full group-hover:translate-x-0 transition-transform duration-300"></div>
              </button>
              <a 
                href="tel:+352123456789" 
                className="inline-block text-white border-2 border-brand px-8 py-4 rounded-lg hover:bg-brand hover:text-heading-color transition-all duration-300"
              >
                +352 12 34 56 789
              </a>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-heading-color text-white py-16">
        <div className="max-w-[1320px] mx-auto px-4">
          <div className="grid md:grid-cols-4 gap-8">
            <div>
              <h4 className="text-brand mb-6 font-heading text-xl font-medium">Wedid</h4>
              <p className="text-sm leading-relaxed opacity-80 mb-4">
                L'agence marketing digital de référence au Luxembourg. 
                Expertise locale, résultats internationaux.
              </p>
              <div className="text-sm space-y-1">
                <p>Luxembourg-Ville</p>
                <p>+352 12 34 56 789</p>
                <p>contact@wedid.lu</p>
              </div>
            </div>
            <div>
              <h5 className="text-white mb-4 font-heading">Services</h5>
              <ul className="text-sm space-y-2 opacity-80">
                <li><a href="#" className="hover:text-brand transition-colors">Marketing Digital</a></li>
                <li><a href="#" className="hover:text-brand transition-colors">Création Sites Web</a></li>
                <li><a href="#" className="hover:text-brand transition-colors">Branding & Design</a></li>
                <li><a href="#" className="hover:text-brand transition-colors">Consulting</a></li>
              </ul>
            </div>
            <div>
              <h5 className="text-white mb-4 font-heading">Entreprise</h5>
              <ul className="text-sm space-y-2 opacity-80">
                <li><a href="#" className="hover:text-brand transition-colors">À Propos</a></li>
                <li><a href="#" className="hover:text-brand transition-colors">Équipe</a></li>
                <li><a href="#" className="hover:text-brand transition-colors">Projets</a></li>
                <li><a href="#" className="hover:text-brand transition-colors">Blog</a></li>
              </ul>
            </div>
            <div>
              <h5 className="text-white mb-4 font-heading">Contact</h5>
              <div className="text-sm space-y-2 opacity-80">
                <p>Luxembourg-Ville</p>
                <p>Esch-sur-Alzette</p>
                <p>Grande Région</p>
                <p className="text-brand">Services à Distance</p>
              </div>
            </div>
          </div>
          <div className="border-t border-gray-800 mt-12 pt-8 text-center text-sm opacity-60">
            <p>&copy; 2024 Wedid. Tous droits réservés. | Agence Marketing Digital Luxembourg</p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default WedidHomepage;