'use client';

import { Metadata } from 'next';
import { motion, Variants } from 'framer-motion';
import Link from 'next/link';

interface PricingTier {
  name: string;
  price: string;
  description: string;
  features: string[];
  highlighted: boolean;
  ctaText: string;
}

interface ProcessStep {
  step: number;
  title: string;
  description: string;
  icon: string;
}

interface Testimonial {
  name: string;
  company: string;
  role: string;
  content: string;
  avatar: string;
}

const pricingTiers: PricingTier[] = [
  {
    name: 'Starter',
    price: '1,500€',
    description: 'Parfait pour les petites entreprises luxembourgeoises qui débutent leur présence digitale',
    features: [
      'Audit SEO initial',
      'Optimisation 10 pages',
      'Configuration Google My Business',
      'Reporting mensuel',
      'Support email'
    ],
    highlighted: false,
    ctaText: 'Commencer'
  },
  {
    name: 'Professional',
    price: '3,500€',
    description: 'Solution complète pour les entreprises en croissance au Luxembourg',
    features: [
      'Stratégie SEO complète',
      'Campagnes Google Ads',
      'Gestion réseaux sociaux',
      'Content marketing',
      'Reporting détaillé',
      'Support prioritaire'
    ],
    highlighted: true,
    ctaText: 'Choisir Pro'
  },
  {
    name: 'Enterprise',
    price: 'Sur mesure',
    description: 'Solution sur-mesure pour les grandes entreprises et groupes internationaux',
    features: [
      'Stratégie digitale globale',
      'Marketing automation',
      'Account manager dédié',
      'Formation équipes',
      'Intégrations CRM',
      'Support 24/7'
    ],
    highlighted: false,
    ctaText: 'Nous contacter'
  }
];

const processSteps: ProcessStep[] = [
  {
    step: 1,
    title: 'Audit & Analyse',
    description: 'Analyse complète de votre présence digitale actuelle et identification des opportunités spécifiques au marché luxembourgeois.',
    icon: '🔍'
  },
  {
    step: 2,
    title: 'Stratégie Personnalisée',
    description: 'Création d\'une roadmap marketing adaptée à vos objectifs business et au contexte concurrentiel local.',
    icon: '🎯'
  },
  {
    step: 3,
    title: 'Mise en Œuvre',
    description: 'Déploiement des campagnes SEO/SEA, création de contenu et gestion des réseaux sociaux par nos experts.',
    icon: '⚡'
  },
  {
    step: 4,
    title: 'Optimisation Continue',
    description: 'Monitoring des performances, ajustements stratégiques et reporting mensuel avec KPIs business.',
    icon: '📈'
  }
];

const testimonials: Testimonial[] = [
  {
    name: 'Marie Schneider',
    company: 'LuxTech Solutions',
    role: 'Directrice Marketing',
    content: 'Grâce à Wedid, notre visibilité en ligne a augmenté de 300% en 6 mois. Leur connaissance du marché luxembourgeois est exceptionnelle.',
    avatar: 'https://images.unsplash.com/photo-1494790108755-2616b612b820?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=387&q=80'
  },
  {
    name: 'Jean-Paul Weber',
    company: 'Banque Privée Luxembourg',
    role: 'Responsable Digital',
    content: 'L\'expertise de Wedid en SEO nous a permis de doubler notre trafic organique tout en respectant les réglementations financières.',
    avatar: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80'
  }
];

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

const MarketingDigitalPage = () => {
  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="relative pt-32 pb-32 overflow-hidden">
        <div 
          className="absolute inset-0 bg-cover bg-center bg-no-repeat"
          style={{
            backgroundImage: `url('https://images.unsplash.com/photo-1460925895917-afdab827c52f?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2415&q=80')`
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
              <span className="inline-block bg-brand text-gray-900 px-4 py-2 rounded-full text-sm font-semibold mb-8">
                🚀 MARKETING DIGITAL LUXEMBOURG
              </span>
            </motion.div>
            
            <motion.h1 variants={fadeInUp} className="text-5xl md:text-7xl font-bold mb-8 max-w-5xl mx-auto leading-tight">
              Boostez Votre{' '}
              <span className="text-brand">
                Visibilité Digitale
              </span>{' '}
              au Luxembourg
            </motion.h1>
            
            <motion.p variants={fadeInUp} className="text-xl md:text-2xl mb-12 max-w-4xl mx-auto text-gray-200 leading-relaxed font-normal">
              Stratégies SEO/SEA, social media et content marketing sur-mesure pour maximiser 
              votre présence en ligne et générer des leads qualifiés sur le marché luxembourgeois.
            </motion.p>
            
            <motion.div variants={fadeInUp} className="flex flex-col md:flex-row gap-4 justify-center items-center">
              <motion.button 
                whileHover={{ scale: 1.05, y: -2 }}
                whileTap={{ scale: 0.95 }}
                className="bg-brand text-gray-900 px-8 py-4 rounded-lg font-bold text-lg shadow-xl hover:shadow-2xl transition-all duration-300"
              >
                Audit SEO Gratuit →
              </motion.button>
              
              <motion.a 
                whileHover={{ scale: 1.05, y: -2 }}
                href="#pricing" 
                className="text-white border-2 border-white px-8 py-4 rounded-lg hover:bg-white hover:text-gray-900 transition-all duration-300 font-semibold"
              >
                Voir nos Tarifs
              </motion.a>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Services Overview */}
      <section className="py-24 bg-white">
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
                NOS EXPERTISES
              </span>
            </motion.div>
            <motion.h2 variants={fadeInUp} className="text-4xl md:text-5xl font-bold mb-6 text-gray-900">
              3 Piliers du Marketing Digital
            </motion.h2>
            <motion.p variants={fadeInUp} className="text-xl max-w-4xl mx-auto text-gray-600 leading-relaxed">
              Chaque service est optimisé pour les spécificités du marché luxembourgeois, 
              combinant expertise technique et connaissance locale.
            </motion.p>
          </motion.div>

          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={staggerChildren}
            className="grid lg:grid-cols-3 gap-8 mb-16"
          >
            {[
              {
                title: 'SEO & SEA',
                description: 'Référencement naturel et payant optimisé pour les recherches luxembourgeoises et internationales.',
                icon: '🎯',
                image: 'https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80',
                features: ['Audit SEO complet', 'Optimisation technique', 'Campagnes Google Ads', 'Suivi des positions'],
                href: '/services/marketing-digital/seo-sea',
                stats: '+150% de trafic organique en moyenne'
              },
              {
                title: 'Social Media Marketing',
                description: 'Gestion professionnelle de vos réseaux sociaux avec contenu adapté à votre audience luxembourgeoise.',
                icon: '📱',
                image: 'https://images.unsplash.com/photo-1611162617474-5b21e879e113?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2074&q=80',
                features: ['Stratégie social media', 'Création de contenu', 'Community management', 'Publicités sociales'],
                href: '/services/marketing-digital/social-media',
                stats: '+200% d\'engagement moyen'
              },
              {
                title: 'Content Marketing',
                description: 'Création de contenu engageant et optimisé pour attirer et convertir votre audience cible.',
                icon: '✍️',
                image: 'https://images.unsplash.com/photo-1552664730-d307ca884978?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2069&q=80',
                features: ['Stratégie éditoriale', 'Rédaction web SEO', 'Blog et articles', 'Email marketing'],
                href: '/services/marketing-digital/content-marketing',
                stats: '+120% de conversions'
              }
            ].map((service, index) => (
              <motion.div
                key={index}
                variants={fadeInUp}
                className="group bg-white rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 overflow-hidden"
              >
                <div className="relative h-48 overflow-hidden">
                  <img 
                    src={service.image} 
                    alt={service.title}
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gray-900/40"></div>
                  <div className="absolute top-4 right-4">
                    <div className="inline-flex items-center justify-center w-12 h-12 rounded-lg bg-white/90 text-xl shadow-lg">
                      {service.icon}
                    </div>
                  </div>
                  <div className="absolute bottom-4 left-4">
                    <span className="inline-block bg-brand text-gray-900 px-3 py-1 rounded-full text-sm font-semibold">
                      {service.stats}
                    </span>
                  </div>
                </div>
                
                <div className="p-8">
                  <h3 className="text-2xl font-bold mb-4 text-gray-900">{service.title}</h3>
                  <p className="text-gray-600 text-base mb-6 leading-relaxed">{service.description}</p>
                  
                  <ul className="space-y-3 mb-8">
                    {service.features.map((feature, idx) => (
                      <li key={idx} className="flex items-center text-gray-700">
                        <div className="w-2 h-2 rounded-full bg-brand mr-3 flex-shrink-0"></div>
                        <span className="font-medium">{feature}</span>
                      </li>
                    ))}
                  </ul>

                  <Link
                    href={service.href}
                    className="inline-flex items-center justify-center w-full bg-gray-900 text-white px-6 py-3 rounded-lg font-semibold hover:bg-gray-800 transition-colors group"
                  >
                    En savoir plus
                    <span className="ml-2 transition-transform group-hover:translate-x-1">→</span>
                  </Link>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Process Section */}
      <section className="py-24 bg-gray-900 relative overflow-hidden">
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
                NOTRE MÉTHODE
              </span>
            </motion.div>
            <motion.h2 variants={fadeInUp} className="text-4xl md:text-5xl font-bold mb-6 text-white">
              Processus Marketing en 4 Étapes
            </motion.h2>
            <motion.p variants={fadeInUp} className="text-xl max-w-4xl mx-auto text-gray-300 leading-relaxed">
              Une approche structurée et mesurable pour maximiser votre ROI marketing.
            </motion.p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {processSteps.map((step, index) => (
              <motion.div
                key={step.step}
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
                  <p className="text-gray-300 leading-relaxed">{step.description}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Pricing Section */}
      <section id="pricing" className="py-24 bg-gray-50">
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
                NOS TARIFS
              </span>
            </motion.div>
            <motion.h2 variants={fadeInUp} className="text-4xl md:text-5xl font-bold mb-6 text-gray-900">
              Packages Marketing Digital
            </motion.h2>
            <motion.p variants={fadeInUp} className="text-xl max-w-4xl mx-auto text-gray-600 leading-relaxed">
              Des solutions adaptées à toutes les tailles d'entreprises luxembourgeoises, 
              du startup à la multinationale.
            </motion.p>
          </motion.div>

          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={staggerChildren}
            className="grid lg:grid-cols-3 gap-8"
          >
            {pricingTiers.map((tier, index) => (
              <motion.div
                key={index}
                variants={fadeInUp}
                className={`relative rounded-2xl p-8 ${
                  tier.highlighted 
                    ? 'bg-gray-900 text-white shadow-2xl scale-105' 
                    : 'bg-white shadow-lg hover:shadow-xl'
                } transition-all duration-300`}
              >
                {tier.highlighted && (
                  <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                    <span className="bg-brand text-gray-900 px-4 py-2 rounded-full text-sm font-bold">
                      ⭐ POPULAIRE
                    </span>
                  </div>
                )}
                
                <div className="text-center mb-8">
                  <h3 className={`text-2xl font-bold mb-2 ${tier.highlighted ? 'text-white' : 'text-gray-900'}`}>
                    {tier.name}
                  </h3>
                  <div className="mb-4">
                    <span className={`text-4xl font-bold ${tier.highlighted ? 'text-brand' : 'text-gray-900'}`}>
                      {tier.price}
                    </span>
                    {tier.price !== 'Sur mesure' && <span className="text-gray-500">/mois</span>}
                  </div>
                  <p className={`${tier.highlighted ? 'text-gray-300' : 'text-gray-600'} leading-relaxed`}>
                    {tier.description}
                  </p>
                </div>

                <ul className="space-y-4 mb-8">
                  {tier.features.map((feature, idx) => (
                    <li key={idx} className="flex items-start">
                      <div className="w-5 h-5 rounded-full bg-brand flex items-center justify-center mr-3 mt-0.5 flex-shrink-0">
                        <span className="text-gray-900 text-xs font-bold">✓</span>
                      </div>
                      <span className={`${tier.highlighted ? 'text-gray-300' : 'text-gray-700'} leading-relaxed`}>
                        {feature}
                      </span>
                    </li>
                  ))}
                </ul>

                <button className={`w-full py-4 px-6 rounded-lg font-bold text-lg transition-all duration-300 ${
                  tier.highlighted
                    ? 'bg-brand text-gray-900 hover:bg-brand/90 shadow-lg hover:shadow-xl'
                    : 'bg-gray-900 text-white hover:bg-gray-800'
                }`}>
                  {tier.ctaText}
                </button>
              </motion.div>
            ))}
          </motion.div>

          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeInUp}
            className="text-center mt-12"
          >
            <p className="text-gray-600 mb-4">
              Tous nos packages incluent un support client dédié et des rapports de performance mensuels.
            </p>
            <p className="text-sm text-gray-500">
              TVA luxembourgeoise applicable. Conditions générales disponibles sur demande.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-24 bg-white">
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
                TÉMOIGNAGES CLIENTS
              </span>
            </motion.div>
            <motion.h2 variants={fadeInUp} className="text-4xl md:text-5xl font-bold mb-6 text-gray-900">
              Ils Nous Font Confiance
            </motion.h2>
            <motion.p variants={fadeInUp} className="text-xl max-w-4xl mx-auto text-gray-600 leading-relaxed">
              Découvrez comment nos clients luxembourgeois ont transformé leur présence digitale.
            </motion.p>
          </motion.div>

          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={staggerChildren}
            className="grid lg:grid-cols-2 gap-8"
          >
            {testimonials.map((testimonial, index) => (
              <motion.div
                key={index}
                variants={fadeInUp}
                className="bg-gray-50 rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all duration-300"
              >
                <div className="flex items-center mb-6">
                  <img 
                    src={testimonial.avatar} 
                    alt={testimonial.name}
                    className="w-16 h-16 rounded-full object-cover mr-4"
                  />
                  <div>
                    <h4 className="font-bold text-gray-900">{testimonial.name}</h4>
                    <p className="text-gray-600">{testimonial.role}</p>
                    <p className="text-brand font-semibold">{testimonial.company}</p>
                  </div>
                </div>
                <blockquote className="text-gray-700 leading-relaxed italic">
                  "{testimonial.content}"
                </blockquote>
                <div className="flex mt-4">
                  {[...Array(5)].map((_, i) => (
                    <span key={i} className="text-yellow-400 text-lg">★</span>
                  ))}
                </div>
              </motion.div>
            ))}
          </motion.div>
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
            variants={staggerChildren}
          >
            <motion.h2 variants={fadeInUp} className="text-4xl md:text-6xl font-bold mb-6 text-white">
              Prêt à Booster Votre{' '}
              <span className="text-brand">
                Marketing Digital
              </span> ?
            </motion.h2>
            <motion.p variants={fadeInUp} className="text-xl mb-10 max-w-4xl mx-auto text-gray-200 leading-relaxed">
              Obtenez un audit SEO gratuit et découvrez comment nous pouvons améliorer 
              votre visibilité digitale au Luxembourg.
            </motion.p>
            <motion.div variants={fadeInUp} className="flex flex-col md:flex-row gap-4 justify-center">
              <motion.button 
                whileHover={{ scale: 1.05, y: -2 }}
                whileTap={{ scale: 0.95 }}
                className="bg-brand text-gray-900 px-10 py-4 rounded-lg font-bold text-lg shadow-xl hover:shadow-2xl transition-all duration-300"
              >
                Audit SEO Gratuit →
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

    </div>
  );
};

export default MarketingDigitalPage;