'use client';

import { Metadata } from 'next';
import { motion, Variants } from 'framer-motion';
import Link from 'next/link';

interface ServiceCategory {
  id: string;
  title: string;
  description: string;
  icon: string;
  image: string;
  features: string[];
  href: string;
  gradient: string;
  subservices: {
    title: string;
    description: string;
    href: string;
  }[];
}

const serviceCategories: ServiceCategory[] = [
  {
    id: 'marketing-digital',
    title: 'Marketing Digital',
    description: 'Maximisez votre visibilité en ligne avec nos stratégies SEO/SEA, social media et content marketing adaptées au marché luxembourgeois.',
    icon: '🚀',
    image: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2415&q=80',
    features: ['Référencement SEO/SEA', 'Gestion réseaux sociaux', 'Création de contenu', 'Analytics & reporting'],
    href: '/services/marketing-digital',
    gradient: 'from-blue-500 to-purple-600',
    subservices: [
      { title: 'SEO & SEA', description: 'Référencement naturel et payant', href: '/services/marketing-digital/seo-sea' },
      { title: 'Social Media', description: 'Gestion réseaux sociaux', href: '/services/marketing-digital/social-media' },
      { title: 'Content Marketing', description: 'Création de contenu engageant', href: '/services/marketing-digital/content-marketing' }
    ]
  },
  {
    id: 'creation-sites-web',
    title: 'Création de Sites Web',
    description: 'Sites vitrine, e-commerce et applications web modernes, optimisés pour la performance et adaptés aux entreprises luxembourgeoises.',
    icon: '💻',
    image: 'https://images.unsplash.com/photo-1498050108023-c5249f4df085?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2072&q=80',
    features: ['Sites vitrine professionnels', 'Boutiques e-commerce', 'Applications web sur-mesure', 'Design responsive'],
    href: '/services/creation-sites-web',
    gradient: 'from-green-500 to-teal-600',
    subservices: [
      { title: 'Sites Vitrine', description: 'Sites corporatifs professionnels', href: '/services/creation-sites-web/sites-vitrine' },
      { title: 'E-commerce', description: 'Boutiques en ligne performantes', href: '/services/creation-sites-web/e-commerce' },
      { title: 'Applications Web', description: 'Solutions web sur-mesure', href: '/services/creation-sites-web/applications-web' }
    ]
  },
  {
    id: 'branding-design',
    title: 'Branding & Design',
    description: 'Identité visuelle distinctive et supports marketing créatifs pour renforcer votre image de marque sur le marché luxembourgeois.',
    icon: '🎨',
    image: 'https://images.unsplash.com/photo-1561070791-2526d30994b5?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2064&q=80',
    features: ['Identité visuelle complète', 'Design graphique créatif', 'Supports print & digital', 'Stratégie de marque'],
    href: '/services/branding-design',
    gradient: 'from-pink-500 to-rose-600',
    subservices: [
      { title: 'Identité Visuelle', description: 'Logo, charte graphique, brand guide', href: '/services/branding-design/identite-visuelle' },
      { title: 'Design Graphique', description: 'Créations visuelles sur-mesure', href: '/services/branding-design/design-graphique' },
      { title: 'Supports Marketing', description: 'Brochures, flyers, présentations', href: '/services/branding-design/supports-marketing' }
    ]
  },
  {
    id: 'consulting-formation',
    title: 'Consulting & Formation',
    description: 'Audits marketing, stratégie digitale et formation d\'équipes pour développer l\'expertise interne de votre entreprise luxembourgeoise.',
    icon: '📊',
    image: 'https://images.unsplash.com/photo-1552664730-d307ca884978?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2069&q=80',
    features: ['Audit marketing complet', 'Stratégie digitale personnalisée', 'Formation des équipes', 'Accompagnement continu'],
    href: '/services/consulting-formation',
    gradient: 'from-orange-500 to-red-600',
    subservices: [
      { title: 'Audit Marketing', description: 'Analyse complète de votre présence', href: '/services/consulting-formation/audit-marketing' },
      { title: 'Stratégie Digitale', description: 'Roadmap digitale personnalisée', href: '/services/consulting-formation/strategie-digitale' },
      { title: 'Formation Équipes', description: 'Montée en compétence de vos équipes', href: '/services/consulting-formation/formation-equipes' }
    ]
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

const ServicesPage = () => {
  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="relative min-h-[80vh] flex items-center justify-center overflow-hidden pt-20 pb-12">
        <div 
          className="absolute inset-0 bg-cover bg-center bg-no-repeat"
          style={{
            backgroundImage: `url('https://images.unsplash.com/photo-1557804506-669a67965ba0?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2074&q=80')`
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
                🇱🇺 NOS SERVICES AU LUXEMBOURG
              </span>
            </motion.div>
            
            <motion.h1 variants={fadeInUp} className="text-5xl md:text-7xl font-bold mb-8 max-w-5xl mx-auto leading-tight">
              Services Marketing Digital{' '}
              <span className="text-brand">
                Complets
              </span>
            </motion.h1>
            
            <motion.p variants={fadeInUp} className="text-xl md:text-2xl mb-12 max-w-4xl mx-auto text-gray-200 leading-relaxed font-normal">
              De la stratégie digitale à la création de sites web, en passant par le branding et la formation, 
              nous accompagnons les entreprises luxembourgeoises dans leur transformation digitale.
            </motion.p>
            
            <motion.div variants={fadeInUp} className="flex flex-col md:flex-row gap-4 justify-center items-center">
              <motion.button 
                whileHover={{ scale: 1.05, y: -2 }}
                whileTap={{ scale: 0.95 }}
                className="bg-brand text-gray-900 px-8 py-4 rounded-lg font-bold text-lg shadow-xl hover:shadow-2xl transition-all duration-300"
              >
                Découvrir nos Services →
              </motion.button>
              
              <motion.a 
                whileHover={{ scale: 1.05, y: -2 }}
                href="#contact" 
                className="text-white border-2 border-white px-8 py-4 rounded-lg hover:bg-white hover:text-gray-900 transition-all duration-300 font-semibold"
              >
                Consultation Gratuite
              </motion.a>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Services Grid */}
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
              4 Domaines d'Excellence
            </motion.h2>
            <motion.p variants={fadeInUp} className="text-xl max-w-4xl mx-auto text-gray-600 leading-relaxed">
              Chaque service est conçu pour répondre aux besoins spécifiques des entreprises luxembourgeoises, 
              alliant expertise internationale et connaissance du marché local.
            </motion.p>
          </motion.div>

          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={staggerChildren}
            className="grid lg:grid-cols-2 gap-8 mb-16"
          >
            {serviceCategories.map((service, index) => (
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
                  <div className="relative h-64 overflow-hidden">
                    <img 
                      src={service.image} 
                      alt={service.title}
                      className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                    />
                    <div className="absolute inset-0 bg-gray-900/40"></div>
                    
                    {/* Icon overlay */}
                    <div className="absolute top-6 left-6">
                      <div className="inline-flex items-center justify-center w-14 h-14 rounded-xl bg-white/90 text-2xl shadow-lg">
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
                    
                    {/* Features */}
                    <ul className="space-y-3 mb-8">
                      {service.features.map((feature, idx) => (
                        <li key={idx} className="flex items-center text-gray-700">
                          <div className="w-2 h-2 rounded-full bg-brand mr-3 flex-shrink-0"></div>
                          <span className="font-medium">{feature}</span>
                        </li>
                      ))}
                    </ul>

                    {/* Subservices */}
                    <div className="mb-6">
                      <h4 className="font-semibold text-gray-900 mb-3">Services inclus :</h4>
                      <div className="grid gap-2">
                        {service.subservices.map((sub, idx) => (
                          <Link
                            key={idx}
                            href={sub.href}
                            className="flex items-center justify-between p-3 rounded-lg bg-gray-50 hover:bg-gray-100 transition-colors group/sub"
                          >
                            <div>
                              <span className="font-medium text-gray-900 group-hover/sub:text-gray-700">{sub.title}</span>
                              <p className="text-sm text-gray-600">{sub.description}</p>
                            </div>
                            <span className="text-gray-400 group-hover/sub:text-brand transition-colors">→</span>
                          </Link>
                        ))}
                      </div>
                    </div>

                    {/* CTA Button */}
                    <Link
                      href={service.href}
                      className="inline-flex items-center justify-center w-full bg-gray-900 text-white px-6 py-3 rounded-lg font-semibold hover:bg-gray-800 transition-colors group"
                    >
                      Découvrir {service.title}
                      <span className="ml-2 transition-transform group-hover:translate-x-1">→</span>
                    </Link>
                  </div>
                </motion.div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Luxembourg Advantages */}
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
                LUXEMBOURG FOCUS
              </span>
            </motion.div>
            <motion.h2 variants={fadeInUp} className="text-4xl md:text-5xl font-bold mb-6 text-gray-900">
              Pourquoi Choisir Wedid au Luxembourg ?
            </motion.h2>
            <motion.p variants={fadeInUp} className="text-xl max-w-4xl mx-auto text-gray-600 leading-relaxed">
              Notre expertise du marché luxembourgeois nous permet de créer des stratégies parfaitement adaptées 
              aux spécificités locales et aux ambitions internationales de votre entreprise.
            </motion.p>
          </motion.div>

          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={staggerChildren}
            className="grid md:grid-cols-2 lg:grid-cols-3 gap-8"
          >
            {[
              {
                icon: '🇱🇺',
                title: 'Expertise Locale',
                description: 'Connaissance approfondie du marché luxembourgeois, des réglementations et des habitudes de consommation locales.'
              },
              {
                icon: '🌍',
                title: 'Vision Internationale',
                description: 'Stratégies adaptées pour rayonner dans la Grande Région et au-delà, en tirant parti de la position stratégique du Luxembourg.'
              },
              {
                icon: '💼',
                title: 'Secteurs Spécialisés',
                description: 'Expertise particulière dans la finance, la technologie, les services aux entreprises et les secteurs clés de Luxembourg.'
              },
              {
                icon: '🚀',
                title: 'Innovation Continue',
                description: 'Veille technologique permanente et adoption des dernières tendances digitales pour garder une longueur d\'avance.'
              },
              {
                icon: '📊',
                title: 'Résultats Mesurables',
                description: 'Approche data-driven avec reporting détaillé et KPIs adaptés aux objectifs business de chaque client.'
              },
              {
                icon: '🤝',
                title: 'Partenaire de Confiance',
                description: 'Accompagnement personnalisé et relation de proximité pour devenir le partenaire digital de votre croissance.'
              }
            ].map((advantage, index) => (
              <motion.div
                key={index}
                variants={fadeInUp}
                className="bg-white p-8 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300"
              >
                <div className="text-4xl mb-4">{advantage.icon}</div>
                <h4 className="text-xl font-bold mb-4 text-gray-900">{advantage.title}</h4>
                <p className="text-gray-600 leading-relaxed">{advantage.description}</p>
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
                Présence Digitale
              </span> ?
            </motion.h2>
            <motion.p variants={fadeInUp} className="text-xl mb-10 max-w-4xl mx-auto text-gray-200 leading-relaxed">
              Bénéficiez d'une consultation gratuite avec nos experts. Analysons ensemble vos besoins 
              et définissons la stratégie parfaite pour votre entreprise luxembourgeoise.
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

    </div>
  );
};

export default ServicesPage;