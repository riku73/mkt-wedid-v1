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
    <div className="wedid-homepage">
      {/* CSS Variables and Global Styles */}
      <style jsx global>{`
        :root {
          --color--midnight-purple: #211056;
          --color--brand: #d1f383;
          --color--heading-color: #111;
          --color--body-color: #474747;
          --color--white: white;
          --color--body-text-light: #d9d9d9;
          --color--light-peach: #ffedcd;
          --color--pink: #ebe6fd;
          --color--border: #b3b3b3;
          --color--light-border: #dedede;
          
          --fonts--heading-font: "Bdogrotesk Bf 648 A 656 Fd 543 A", "Times New Roman", sans-serif;
          --fonts--body-font: Inter, sans-serif;
          
          --size--h1: 70px;
          --size--h2: 45px;
          --size--h3: 35px;
          --size--h4: 23px;
          --size--h5: 20px;
          --size--body: 16px;
          --size--menu: 17px;
          --size--sub-menu: 14px;
        }

        @media (max-width: 991px) {
          :root {
            --size--h1: 50px;
            --size--h2: 36px;
            --size--h3: 28px;
            --size--h4: 22px;
            --size--h5: 18px;
          }
        }

        @media (max-width: 767px) {
          :root {
            --size--h1: 28px;
            --size--h2: 24px;
            --size--h3: 20px;
            --size--h4: 18px;
            --size--h5: 15px;
            --size--body: 14px;
            --size--sub-menu: 13px;
          }
        }

        * {
          margin: 0;
          padding: 0;
          box-sizing: border-box;
        }

        body {
          font-family: var(--fonts--body-font);
          color: var(--color--body-color);
          font-size: var(--size--body);
          letter-spacing: -0.32px;
          font-weight: 400;
          line-height: 1.625;
        }

        h1, h2, h3, h4, h5 {
          font-family: var(--fonts--heading-font);
          color: var(--color--heading-color);
          font-weight: 500;
          text-transform: capitalize;
          line-height: 1.2;
        }

        h1 {
          font-size: var(--size--h1);
          letter-spacing: -2px;
          line-height: 1.07;
        }

        h2 {
          font-size: var(--size--h2);
          letter-spacing: -2px;
          line-height: 1.15;
        }

        h3 {
          font-size: var(--size--h3);
          letter-spacing: -2px;
          line-height: 1.25;
        }

        h4 {
          font-size: var(--size--h4);
          letter-spacing: -1px;
          line-height: 1.4;
        }

        h5 {
          font-size: var(--size--h5);
          letter-spacing: -1px;
          line-height: 1.5;
        }

        .container-large {
          max-width: 1630px;
          margin: 0 auto;
          padding: 0 15px;
        }

        .container {
          max-width: 1320px;
          margin: 0 auto;
          padding: 0 15px;
        }

        .container-medium {
          max-width: 1300px;
          margin: 0 auto;
          padding: 0 15px;
        }

        .container-small {
          max-width: 598px;
          margin: 0 auto;
          padding: 0 15px;
        }

        .section-padding {
          padding: 120px 0;
        }

        @media (max-width: 991px) {
          .section-padding {
            padding: 60px 0;
          }
        }

        @media (max-width: 767px) {
          .section-padding {
            padding: 50px 0;
          }
        }

        .button {
          background-color: var(--color--brand);
          border-radius: 8px;
          padding: 4px;
          position: relative;
          transition: all 0.3s ease;
          display: inline-block;
          text-decoration: none;
          cursor: pointer;
          border: none;
          overflow: hidden;
        }

        .button-inner-wrap {
          font-family: var(--fonts--heading-font);
          color: var(--color--heading-color);
          text-transform: capitalize;
          border-radius: 5px;
          width: 100%;
          padding: 16px 24px;
          font-weight: 500;
          background-color: var(--color--white);
          position: relative;
          z-index: 2;
          transition: all 0.3s ease;
        }

        .button-background {
          position: absolute;
          top: 0;
          left: -100%;
          width: 100%;
          height: 100%;
          background-color: var(--color--midnight-purple);
          transition: transform 0.3s ease;
          z-index: 1;
        }

        .button:hover .button-background {
          transform: translateX(100%);
        }

        .button:hover .button-inner-wrap {
          color: var(--color--white);
        }

        .service-card {
          border-right: 1px solid var(--color--border);
          padding: 80px 40px;
          transition: background-color 0.3s ease;
          height: 100%;
        }

        .service-card:hover {
          background-color: var(--color--pink);
        }

        .service-card:last-child {
          border-right: none;
        }

        @media (max-width: 991px) {
          .service-card {
            border-right: none;
            border-bottom: 1px solid var(--color--border);
            padding: 60px 30px;
          }
          
          .service-card:last-child {
            border-bottom: none;
          }
        }

        @media (max-width: 767px) {
          .service-card {
            padding: 40px 20px;
          }
        }

        .hero-overlay {
          background-image: 
            linear-gradient(180deg, var(--color--heading-color), transparent 23%),
            linear-gradient(112deg, rgba(0,0,0,0.8), rgba(0,0,0,0.7) 37%, transparent 54%);
        }

        .testimonial-card {
          background-color: var(--color--white);
          box-shadow: 0 8px 90px rgba(0,0,0,0.08);
          padding: 40px;
          border-radius: 8px;
          text-align: center;
        }

        .process-card {
          text-align: center;
          padding: 40px 20px;
        }

        .process-number {
          width: 80px;
          height: 80px;
          border-radius: 50%;
          background-color: var(--color--brand);
          display: flex;
          align-items: center;
          justify-content: center;
          margin: 0 auto 20px;
          font-family: var(--fonts--heading-font);
          font-size: 24px;
          font-weight: 600;
          color: var(--color--heading-color);
        }

        .stats-counter {
          text-align: center;
          padding: 20px;
        }

        .stats-number {
          font-family: var(--fonts--heading-font);
          font-size: 48px;
          font-weight: 600;
          color: var(--color--brand);
          display: block;
        }

        @media (max-width: 767px) {
          .stats-number {
            font-size: 36px;
          }
        }
      `}</style>

      {/* Navigation */}
      <nav className="navbar fixed w-full top-0 z-50 bg-transparent">
        <div className="container">
          <div className="flex justify-between items-center py-4">
            <div className="logo">
              <h3 className="text-white font-bold">Wedid</h3>
            </div>
            <div className="hidden md:flex space-x-8">
              <a href="#accueil" className="text-white hover:text-[var(--color--brand)] transition-colors">Accueil</a>
              <a href="#services" className="text-white hover:text-[var(--color--brand)] transition-colors">Services</a>
              <a href="#a-propos" className="text-white hover:text-[var(--color--brand)] transition-colors">À Propos</a>
              <a href="#contact" className="text-white hover:text-[var(--color--brand)] transition-colors">Contact</a>
            </div>
            <button className="button">
              <div className="button-background"></div>
              <span className="button-inner-wrap">Consultation Gratuite</span>
            </button>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section id="accueil" className="relative min-h-screen flex items-center justify-center">
        {/* Background */}
        <div className="absolute inset-0 bg-gradient-to-br from-[var(--color--midnight-purple)] to-purple-900"></div>
        <div className="hero-overlay absolute inset-0"></div>
        
        {/* Content */}
        <div className="container relative z-10 text-center text-white">
          <motion.div
            initial="hidden"
            animate="visible"
            variants={staggerChildren}
          >
            <motion.h1 
              variants={fadeInUp}
              className="mb-6 max-w-4xl mx-auto"
            >
              L'Agence Marketing Digital de Référence au Luxembourg
            </motion.h1>
            
            <motion.p 
              variants={fadeInUp}
              className="text-xl mb-8 max-w-2xl mx-auto opacity-90"
            >
              Nous transformons votre présence digitale avec des stratégies data-driven 
              et une expertise locale du marché luxembourgeois pour générer des résultats mesurables.
            </motion.p>
            
            <motion.div 
              variants={fadeInUp}
              className="flex flex-col sm:flex-row gap-4 justify-center items-center"
            >
              <button className="button text-lg">
                <div className="button-background"></div>
                <span className="button-inner-wrap">Consultation Gratuite</span>
              </button>
              
              <a 
                href="#services" 
                className="text-white border-2 border-white px-8 py-4 rounded-lg hover:bg-white hover:text-[var(--color--midnight-purple)] transition-all duration-300"
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
      <section className="py-20 bg-[var(--color--light-peach)]">
        <div className="container">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            <div className="stats-counter">
              <span className="stats-number">
                <AnimatedCounter value={150} suffix="+" />
              </span>
              <p className="mt-2 font-medium">Clients Satisfaits</p>
            </div>
            <div className="stats-counter">
              <span className="stats-number">
                <AnimatedCounter value={5} />
              </span>
              <p className="mt-2 font-medium">Années d'Expérience</p>
            </div>
            <div className="stats-counter">
              <span className="stats-number">
                <AnimatedCounter value={95} suffix="%" />
              </span>
              <p className="mt-2 font-medium">Taux de Satisfaction</p>
            </div>
            <div className="stats-counter">
              <span className="stats-number">
                <AnimatedCounter value={24} suffix="/7" />
              </span>
              <p className="mt-2 font-medium">Support Client</p>
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section id="services" className="section-padding">
        <div className="container">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={staggerChildren}
            className="text-center mb-16"
          >
            <motion.h2 variants={fadeInUp} className="mb-6">
              Nos Services Marketing Digital
            </motion.h2>
            <motion.p variants={fadeInUp} className="text-lg max-w-3xl mx-auto">
              Nous offrons une gamme complète de services marketing digital adaptés 
              aux spécificités du marché luxembourgeois et de la Grande Région.
            </motion.p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 border border-[var(--color--border)]">
            {services.map((service, index) => (
              <motion.div
                key={service.id}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                variants={fadeInUp}
                transition={{ delay: index * 0.1 }}
                className="service-card group"
              >
                <div className="text-4xl mb-6">{service.icon}</div>
                <h4 className="mb-4 group-hover:text-[var(--color--midnight-purple)] transition-colors">
                  {service.title}
                </h4>
                <p className="mb-6 text-sm leading-relaxed">
                  {service.description}
                </p>
                <ul className="space-y-2">
                  {service.features.map((feature, idx) => (
                    <li key={idx} className="text-sm flex items-center">
                      <span className="w-2 h-2 bg-[var(--color--brand)] rounded-full mr-3"></span>
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
      <section className="section-padding bg-[var(--color--pink)]">
        <div className="container">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={staggerChildren}
            className="text-center mb-16"
          >
            <motion.h2 variants={fadeInUp} className="mb-6">
              Notre Processus en 4 Étapes
            </motion.h2>
            <motion.p variants={fadeInUp} className="text-lg max-w-3xl mx-auto">
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
                className="process-card"
              >
                <div className="process-number">
                  {step.step}
                </div>
                <div className="text-3xl mb-4">{step.icon}</div>
                <h4 className="mb-4">{step.title}</h4>
                <p className="text-sm leading-relaxed">
                  {step.description}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="section-padding">
        <div className="container">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={staggerChildren}
            className="text-center mb-16"
          >
            <motion.h2 variants={fadeInUp} className="mb-6">
              Ce que Disent nos Clients
            </motion.h2>
            <motion.p variants={fadeInUp} className="text-lg max-w-3xl mx-auto">
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
              className="testimonial-card"
            >
              <div className="flex justify-center mb-4">
                {[...Array(testimonials[currentTestimonial].rating)].map((_, i) => (
                  <span key={i} className="text-[var(--color--brand)] text-2xl">★</span>
                ))}
              </div>
              <blockquote className="text-lg italic mb-6 leading-relaxed">
                "{testimonials[currentTestimonial].content}"
              </blockquote>
              <div>
                <h5 className="font-semibold">{testimonials[currentTestimonial].name}</h5>
                <p className="text-sm text-[var(--color--body-color)]">
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
                      ? 'bg-[var(--color--brand)]' 
                      : 'bg-[var(--color--border)]'
                  }`}
                />
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="section-padding bg-[var(--color--midnight-purple)] text-white">
        <div className="container text-center">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={staggerChildren}
          >
            <motion.h2 variants={fadeInUp} className="mb-6 text-white">
              Prêt à Transformer Votre Présence Digitale ?
            </motion.h2>
            <motion.p variants={fadeInUp} className="text-lg mb-8 max-w-3xl mx-auto opacity-90">
              Profitez d'une consultation gratuite avec nos experts marketing digital. 
              Analysons ensemble vos enjeux et définissons une stratégie sur-mesure pour votre entreprise.
            </motion.p>
            <motion.div variants={fadeInUp}>
              <button className="button text-lg mr-4 mb-4">
                <div className="button-background"></div>
                <span className="button-inner-wrap">Consultation Gratuite</span>
              </button>
              <a 
                href="tel:+352123456789" 
                className="inline-block text-white border-2 border-[var(--color--brand)] px-8 py-4 rounded-lg hover:bg-[var(--color--brand)] hover:text-[var(--color--heading-color)] transition-all duration-300"
              >
                +352 12 34 56 789
              </a>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-[var(--color--heading-color)] text-white py-16">
        <div className="container">
          <div className="grid md:grid-cols-4 gap-8">
            <div>
              <h4 className="text-[var(--color--brand)] mb-6">Wedid</h4>
              <p className="text-sm leading-relaxed opacity-80 mb-4">
                L'agence marketing digital de référence au Luxembourg. 
                Expertise locale, résultats internationaux.
              </p>
              <div className="text-sm">
                <p>Luxembourg-Ville</p>
                <p>+352 12 34 56 789</p>
                <p>contact@wedid.lu</p>
              </div>
            </div>
            <div>
              <h5 className="text-white mb-4">Services</h5>
              <ul className="text-sm space-y-2 opacity-80">
                <li><a href="#" className="hover:text-[var(--color--brand)] transition-colors">Marketing Digital</a></li>
                <li><a href="#" className="hover:text-[var(--color--brand)] transition-colors">Création Sites Web</a></li>
                <li><a href="#" className="hover:text-[var(--color--brand)] transition-colors">Branding & Design</a></li>
                <li><a href="#" className="hover:text-[var(--color--brand)] transition-colors">Consulting</a></li>
              </ul>
            </div>
            <div>
              <h5 className="text-white mb-4">Entreprise</h5>
              <ul className="text-sm space-y-2 opacity-80">
                <li><a href="#" className="hover:text-[var(--color--brand)] transition-colors">À Propos</a></li>
                <li><a href="#" className="hover:text-[var(--color--brand)] transition-colors">Équipe</a></li>
                <li><a href="#" className="hover:text-[var(--color--brand)] transition-colors">Projets</a></li>
                <li><a href="#" className="hover:text-[var(--color--brand)] transition-colors">Blog</a></li>
              </ul>
            </div>
            <div>
              <h5 className="text-white mb-4">Contact</h5>
              <div className="text-sm space-y-2 opacity-80">
                <p>Luxembourg-Ville</p>
                <p>Esch-sur-Alzette</p>
                <p>Grande Région</p>
                <p className="text-[var(--color--brand)]">Services à Distance</p>
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