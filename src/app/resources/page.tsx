'use client';

import React, { useState } from 'react';
import { motion, Variants } from 'framer-motion';
import Link from 'next/link';

interface ResourceCategory {
  id: string;
  title: string;
  description: string;
  icon: string;
  image: string;
  href: string;
  stats: {
    label: string;
    value: string;
  };
  preview: string[];
}

const resourceCategories: ResourceCategory[] = [
  {
    id: 'blog',
    title: 'Blog Marketing',
    description: 'Articles et insights sur le marketing digital au Luxembourg, tendances du marché et conseils d\'experts pour booster votre présence en ligne.',
    icon: '📝',
    image: 'https://images.unsplash.com/photo-1486312338219-ce68d2c6f44d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2072&q=80',
    href: '/resources/blog',
    stats: { label: 'Articles', value: '50+' },
    preview: ['SEO pour PME luxembourgeoises', 'Social Media B2B au Luxembourg', 'E-commerce post-COVID']
  },
  {
    id: 'guides',
    title: 'Guides & Whitepapers',
    description: 'Guides complets et ressources téléchargeables pour maîtriser le marketing digital adapté au marché luxembourgeois.',
    icon: '📚',
    image: 'https://images.unsplash.com/photo-1456324504439-367cee3b3c32?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80',
    href: '/resources/guides',
    stats: { label: 'Guides', value: '15+' },
    preview: ['Guide SEO Luxembourg 2024', 'Stratégie Social Media B2B', 'E-commerce au Luxembourg']
  },
  {
    id: 'tools',
    title: 'Outils Gratuits',
    description: 'Calculateurs, outils d\'audit et ressources pratiques pour optimiser vos campagnes marketing et mesurer vos performances.',
    icon: '🛠️',
    image: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80',
    href: '/resources/tools',
    stats: { label: 'Outils', value: '10+' },
    preview: ['Calculateur ROI SEO', 'Audit Site Web Gratuit', 'Générateur Meta Tags']
  },
  {
    id: 'faq',
    title: 'FAQ',
    description: 'Réponses aux questions fréquentes sur nos services, le marketing digital au Luxembourg et les spécificités du marché local.',
    icon: '❓',
    image: 'https://images.unsplash.com/photo-1434626881859-194d67b2b86f?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2074&q=80',
    href: '/resources/faq',
    stats: { label: 'Questions', value: '30+' },
    preview: ['Tarifs marketing digital', 'Délais de réalisation', 'Spécificités Luxembourg']
  }
];

const featuredContent = [
  {
    type: 'Blog',
    title: 'Guide Complet du SEO Local au Luxembourg',
    excerpt: 'Découvrez comment optimiser votre référencement pour dominer les recherches locales luxembourgeoises.',
    image: 'https://images.unsplash.com/photo-1560472354-b33ff0c44a43?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2026&q=80',
    href: '/resources/blog/seo-local-luxembourg-guide-complet',
    readTime: '12 min',
    category: 'SEO'
  },
  {
    type: 'Guide',
    title: 'Marketing Digital B2B : Stratégies pour le Luxembourg',
    excerpt: 'Whitepaper complet sur les meilleures pratiques marketing B2B adaptées au marché luxembourgeois.',
    image: 'https://images.unsplash.com/photo-1553484771-cc0d9b8c2b33?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80',
    href: '/resources/guides/marketing-b2b-luxembourg',
    readTime: 'Guide PDF',
    category: 'B2B Marketing'
  },
  {
    type: 'Outil',
    title: 'Calculateur ROI Marketing Digital',
    excerpt: 'Évaluez le retour sur investissement de vos campagnes marketing digital avec notre calculateur gratuit.',
    image: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80',
    href: '/resources/tools/calculateur-roi-marketing',
    readTime: 'Outil interactif',
    category: 'Outils'
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

const ResourcesPage = () => {
  const [email, setEmail] = useState('');

  const handleNewsletterSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle newsletter signup
    console.log('Newsletter signup:', email);
    setEmail('');
  };

  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="relative overflow-hidden pt-32 pb-24">
        <div 
          className="absolute inset-0 bg-cover bg-center bg-no-repeat"
          style={{
            backgroundImage: `url('https://images.unsplash.com/photo-1481627834876-b7833e8f5570?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2086&q=80')`
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
                🇱🇺 RESSOURCES MARKETING LUXEMBOURG
              </span>
            </motion.div>
            
            <motion.h1 variants={fadeInUp} className="text-5xl md:text-7xl font-bold mb-8 max-w-5xl mx-auto leading-tight">
              Centre de{' '}
              <span className="text-brand">
                Ressources
              </span>{' '}
              Marketing
            </motion.h1>
            
            <motion.p variants={fadeInUp} className="text-xl md:text-2xl mb-12 max-w-4xl mx-auto text-gray-200 leading-relaxed font-normal">
              Découvrez nos guides, articles et outils gratuits pour maîtriser le marketing digital 
              au Luxembourg et développer votre entreprise.
            </motion.p>
            
            <motion.div variants={fadeInUp} className="flex flex-col md:flex-row gap-4 justify-center items-center">
              <motion.a
                href="#resources"
                whileHover={{ scale: 1.05, y: -2 }}
                whileTap={{ scale: 0.95 }}
                className="bg-brand text-gray-900 px-8 py-4 rounded-lg font-bold text-lg shadow-xl hover:shadow-2xl transition-all duration-300"
              >
                Explorer les Ressources →
              </motion.a>
              
              <motion.a 
                whileHover={{ scale: 1.05, y: -2 }}
                href="#newsletter" 
                className="text-white border-2 border-white px-8 py-4 rounded-lg hover:bg-white hover:text-gray-900 transition-all duration-300 font-semibold"
              >
                S'abonner à la Newsletter
              </motion.a>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Featured Content */}
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
                CONTENU POPULAIRE
              </span>
            </motion.div>
            <motion.h2 variants={fadeInUp} className="text-4xl md:text-5xl font-bold mb-6 text-gray-900">
              Ressources les Plus Consultées
            </motion.h2>
            <motion.p variants={fadeInUp} className="text-xl max-w-4xl mx-auto text-gray-600 leading-relaxed">
              Découvrez les contenus les plus appréciés par les entrepreneurs et marketeurs luxembourgeois.
            </motion.p>
          </motion.div>

          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={staggerChildren}
            className="grid md:grid-cols-3 gap-8"
          >
            {featuredContent.map((content, index) => (
              <motion.div
                key={index}
                variants={fadeInUp}
                initial="rest"
                whileHover="hover"
                className="group"
              >
                <motion.div
                  variants={scaleOnHover}
                  className="bg-white rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-500 overflow-hidden"
                >
                  <div className="relative h-48 overflow-hidden">
                    <img 
                      src={content.image} 
                      alt={content.title}
                      className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                    />
                    <div className="absolute top-4 left-4">
                      <span className="bg-brand text-gray-900 px-3 py-1 rounded-full text-sm font-semibold">
                        {content.type}
                      </span>
                    </div>
                    <div className="absolute top-4 right-4">
                      <span className="bg-white/90 text-gray-800 px-3 py-1 rounded-full text-sm font-medium">
                        {content.readTime}
                      </span>
                    </div>
                  </div>
                  
                  <div className="p-6">
                    <div className="flex items-center gap-2 mb-3">
                      <span className="text-xs bg-gray-100 text-gray-600 px-2 py-1 rounded-full font-medium">
                        {content.category}
                      </span>
                    </div>
                    <h3 className="text-xl font-bold mb-3 text-gray-900 group-hover:text-gray-700 transition-colors">
                      {content.title}
                    </h3>
                    <p className="text-gray-600 mb-4 leading-relaxed">
                      {content.excerpt}
                    </p>
                    <Link
                      href={content.href}
                      className="inline-flex items-center font-semibold text-gray-900 hover:text-brand transition-colors"
                    >
                      Lire la suite
                      <span className="ml-2 transition-transform group-hover:translate-x-1">→</span>
                    </Link>
                  </div>
                </motion.div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Resource Categories */}
      <section id="resources" className="py-24 bg-white">
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
                NOS RESSOURCES
              </span>
            </motion.div>
            <motion.h2 variants={fadeInUp} className="text-4xl md:text-5xl font-bold mb-6 text-gray-900">
              Tout pour Réussir Votre Marketing Digital
            </motion.h2>
            <motion.p variants={fadeInUp} className="text-xl max-w-4xl mx-auto text-gray-600 leading-relaxed">
              Des ressources complètes et spécialisées pour les entreprises luxembourgeoises qui veulent 
              exceller dans le marketing digital.
            </motion.p>
          </motion.div>

          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={staggerChildren}
            className="grid lg:grid-cols-2 gap-8"
          >
            {resourceCategories.map((category, index) => (
              <motion.div
                key={category.id}
                variants={fadeInUp}
                initial="rest"
                whileHover="hover"
                className="group"
              >
                <motion.div
                  variants={scaleOnHover}
                  className="bg-white rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-500 overflow-hidden border border-gray-100"
                >
                  <div className="relative h-64 overflow-hidden">
                    <img 
                      src={category.image} 
                      alt={category.title}
                      className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                    />
                    <div className="absolute inset-0 bg-gray-900/40"></div>
                    
                    <div className="absolute top-6 left-6">
                      <div className="inline-flex items-center justify-center w-14 h-14 rounded-xl bg-white/90 text-2xl shadow-lg">
                        {category.icon}
                      </div>
                    </div>

                    <div className="absolute top-6 right-6">
                      <div className="bg-brand text-gray-900 px-4 py-2 rounded-lg font-bold">
                        {category.stats.value} {category.stats.label}
                      </div>
                    </div>
                  </div>
                  
                  <div className="p-8">
                    <h3 className="text-2xl font-bold mb-4 text-gray-900">
                      {category.title}
                    </h3>
                    <p className="text-gray-600 mb-6 leading-relaxed">
                      {category.description}
                    </p>
                    
                    <div className="mb-6">
                      <h4 className="font-semibold text-gray-900 mb-3">Contenu disponible :</h4>
                      <ul className="space-y-2">
                        {category.preview.map((item, idx) => (
                          <li key={idx} className="flex items-center text-gray-700">
                            <div className="w-2 h-2 rounded-full bg-brand mr-3 flex-shrink-0"></div>
                            <span className="font-medium">{item}</span>
                          </li>
                        ))}
                      </ul>
                    </div>

                    <Link
                      href={category.href}
                      className="inline-flex items-center justify-center w-full bg-gray-900 text-white px-6 py-3 rounded-lg font-semibold hover:bg-gray-800 transition-colors group"
                    >
                      Voir {category.title}
                      <span className="ml-2 transition-transform group-hover:translate-x-1">→</span>
                    </Link>
                  </div>
                </motion.div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Newsletter Section */}
      <section id="newsletter" className="py-24 bg-gray-900 relative overflow-hidden">
        <div 
          className="absolute inset-0 bg-cover bg-center bg-no-repeat"
          style={{
            backgroundImage: `url('https://images.unsplash.com/photo-1596526131083-e8c633c948d2?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2074&q=80')`
          }}
        />
        <div className="absolute inset-0 bg-gray-900/80"></div>
        
        <div className="max-w-4xl mx-auto px-6 text-center relative z-10">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={staggerChildren}
          >
            <motion.div variants={fadeInUp} className="mb-6">
              <span className="inline-block bg-brand text-gray-900 px-4 py-2 rounded-full text-sm font-bold mb-8">
                NEWSLETTER MARKETING
              </span>
            </motion.div>
            <motion.h2 variants={fadeInUp} className="text-4xl md:text-5xl font-bold mb-6 text-white">
              Restez à la Pointe du{' '}
              <span className="text-brand">
                Marketing Digital
              </span>
            </motion.h2>
            <motion.p variants={fadeInUp} className="text-xl mb-10 text-gray-200 leading-relaxed">
              Recevez chaque semaine nos derniers articles, guides exclusifs et tendances du marketing digital 
              au Luxembourg directement dans votre boîte mail.
            </motion.p>
            
            <motion.form 
              variants={fadeInUp}
              onSubmit={handleNewsletterSubmit}
              className="flex flex-col md:flex-row gap-4 max-w-lg mx-auto"
            >
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="Votre adresse email"
                className="flex-1 px-6 py-4 rounded-lg text-gray-900 font-medium focus:outline-none focus:ring-2 focus:ring-brand"
                required
              />
              <motion.button
                type="submit"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="bg-brand text-gray-900 px-8 py-4 rounded-lg font-bold shadow-xl hover:shadow-2xl transition-all duration-300"
              >
                S'abonner
              </motion.button>
            </motion.form>
            
            <motion.p variants={fadeInUp} className="text-sm text-gray-300 mt-4">
              Pas de spam, désabonnement facile à tout moment. 
              <Link href="/privacy" className="text-brand hover:underline ml-1">
                Politique de confidentialité
              </Link>
            </motion.p>
          </motion.div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 bg-white">
        <div className="max-w-6xl mx-auto px-6 text-center">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={staggerChildren}
          >
            <motion.h2 variants={fadeInUp} className="text-4xl md:text-5xl font-bold mb-6 text-gray-900">
              Besoin d'Aide Personnalisée ?
            </motion.h2>
            <motion.p variants={fadeInUp} className="text-xl mb-10 max-w-4xl mx-auto text-gray-600 leading-relaxed">
              Nos ressources vous donnent les bases, mais chaque entreprise est unique. 
              Bénéficiez d'une consultation gratuite pour une stratégie sur-mesure.
            </motion.p>
            <motion.div variants={fadeInUp} className="flex flex-col md:flex-row gap-4 justify-center">
              <motion.a
                href="/consultation-gratuite"
                whileHover={{ scale: 1.05, y: -2 }}
                whileTap={{ scale: 0.95 }}
                className="bg-brand text-gray-900 px-10 py-4 rounded-lg font-bold text-lg shadow-xl hover:shadow-2xl transition-all duration-300"
              >
                Consultation Gratuite →
              </motion.a>
              <motion.a 
                href="/contact"
                whileHover={{ scale: 1.05, y: -2 }}
                className="inline-flex items-center text-gray-900 border-2 border-gray-900 px-10 py-4 rounded-lg hover:bg-gray-900 hover:text-white transition-all duration-300 font-bold"
              >
                Nous Contacter
              </motion.a>
            </motion.div>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default ResourcesPage;