'use client';

import React, { useState } from 'react';
import { motion, Variants } from 'framer-motion';
import Link from 'next/link';

interface Guide {
  id: string;
  title: string;
  description: string;
  image: string;
  downloadUrl: string;
  category: string;
  pages: number;
  readTime: string;
  difficulty: 'Débutant' | 'Intermédiaire' | 'Avancé';
  featured?: boolean;
  preview: string[];
  author: {
    name: string;
    role: string;
    avatar: string;
  };
}

const guides: Guide[] = [
  {
    id: '1',
    title: 'Guide Complet du SEO au Luxembourg 2024',
    description: 'Manuel de 45 pages couvrant toutes les stratégies SEO adaptées au marché luxembourgeois. De l\'audit technique à l\'optimisation locale.',
    image: 'https://images.unsplash.com/photo-1560472354-b33ff0c44a43?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2026&q=80',
    downloadUrl: '/downloads/seo-luxembourg-guide-2024.pdf',
    category: 'SEO',
    pages: 45,
    readTime: '2h',
    difficulty: 'Intermédiaire',
    featured: true,
    preview: [
      'Audit technique SEO complet',
      'Stratégies de mots-clés Luxembourg',
      'Optimisation Google My Business',
      'Link building local',
      'Mesures et KPIs'
    ],
    author: {
      name: 'Marie Dubois',
      role: 'SEO Manager',
      avatar: 'https://images.unsplash.com/photo-1494790108755-2616b612b820?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=387&q=80'
    }
  },
  {
    id: '2',
    title: 'Marketing B2B au Luxembourg : Stratégies 2024',
    description: 'Guide stratégique de 38 pages pour les entreprises B2B luxembourgeoises. Génération de leads, nurturing et conversion.',
    image: 'https://images.unsplash.com/photo-1553484771-cc0d9b8c2b33?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80',
    downloadUrl: '/downloads/marketing-b2b-luxembourg-2024.pdf',
    category: 'B2B Marketing',
    pages: 38,
    readTime: '1h30',
    difficulty: 'Avancé',
    featured: true,
    preview: [
      'Persona B2B luxembourgeois',
      'Stratégies LinkedIn avancées',
      'Email marketing automation',
      'Lead scoring et nurturing',
      'ROI et attribution'
    ],
    author: {
      name: 'Jean-Claude Weber',
      role: 'Marketing Strategist',
      avatar: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80'
    }
  },
  {
    id: '3',
    title: 'E-commerce au Luxembourg : Guide de Lancement',
    description: 'Ressource complète de 52 pages pour lancer et développer votre boutique en ligne au Luxembourg avec succès.',
    image: 'https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2040&q=80',
    downloadUrl: '/downloads/ecommerce-luxembourg-guide.pdf',
    category: 'E-commerce',
    pages: 52,
    readTime: '2h30',
    difficulty: 'Intermédiaire',
    featured: true,
    preview: [
      'Étude de marché e-commerce LU',
      'Plateformes et technologies',
      'Logistique et livraison',
      'Moyens de paiement locaux',
      'Marketing et acquisition'
    ],
    author: {
      name: 'Sophie Müller',
      role: 'E-commerce Specialist',
      avatar: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80'
    }
  },
  {
    id: '4',
    title: 'Social Media Marketing : Guide Complet Luxembourg',
    description: 'Manuel de 35 pages couvrant toutes les plateformes sociales et leurs spécificités pour le marché luxembourgeois.',
    image: 'https://images.unsplash.com/photo-1611224923853-80b023f02d71?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2039&q=80',
    downloadUrl: '/downloads/social-media-luxembourg-guide.pdf',
    category: 'Social Media',
    pages: 35,
    readTime: '1h45',
    difficulty: 'Débutant',
    preview: [
      'Stratégies par plateforme',
      'Content planning et calendrier',
      'Community management',
      'Publicité sociale payante',
      'Analytics et optimisation'
    ],
    author: {
      name: 'Lisa Hoffmann',
      role: 'Social Media Manager',
      avatar: 'https://images.unsplash.com/photo-1494790108755-2616b612b820?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=387&q=80'
    }
  },
  {
    id: '5',
    title: 'Google Ads pour PME Luxembourgeoises',
    description: 'Guide pratique de 28 pages pour maîtriser Google Ads avec un budget limité et cibler efficacement le marché local.',
    image: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2415&q=80',
    downloadUrl: '/downloads/google-ads-pme-luxembourg.pdf',
    category: 'Publicité',
    pages: 28,
    readTime: '1h15',
    difficulty: 'Débutant',
    preview: [
      'Configuration compte Google Ads',
      'Recherche de mots-clés locaux',
      'Création de campagnes optimisées',
      'Gestion des budgets',
      'Optimisation et amélioration'
    ],
    author: {
      name: 'Paul Reuter',
      role: 'PPC Specialist',
      avatar: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=387&q=80'
    }
  },
  {
    id: '6',
    title: 'Content Marketing : Créer du Contenu qui Convertit',
    description: 'Méthodologie complète de 42 pages pour développer une stratégie de contenu efficace adaptée au public luxembourgeois.',
    image: 'https://images.unsplash.com/photo-1552664730-d307ca884978?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2069&q=80',
    downloadUrl: '/downloads/content-marketing-luxembourg.pdf',
    category: 'Content Marketing',
    pages: 42,
    readTime: '2h',
    difficulty: 'Intermédiaire',
    preview: [
      'Stratégie de contenu 360°',
      'Persona et audience research',
      'Calendrier éditorial',
      'Distribution multicanal',
      'Mesure de performance'
    ],
    author: {
      name: 'Emma Peeters',
      role: 'Content Strategist',
      avatar: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80'
    }
  },
  {
    id: '7',
    title: 'Marketing Automation : Guide Pratique',
    description: 'Ressource de 33 pages pour implémenter l\'automatisation marketing dans votre entreprise luxembourgeoise.',
    image: 'https://images.unsplash.com/photo-1677442136019-21780ecad995?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2032&q=80',
    downloadUrl: '/downloads/marketing-automation-guide.pdf',
    category: 'Automation',
    pages: 33,
    readTime: '1h30',
    difficulty: 'Avancé',
    preview: [
      'Choix des outils automation',
      'Workflows de nurturing',
      'Lead scoring avancé',
      'Intégrations CRM',
      'Optimisation continue'
    ],
    author: {
      name: 'Nicolas Garcia',
      role: 'Marketing Technologist',
      avatar: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80'
    }
  },
  {
    id: '8',
    title: 'Analyse Concurrentielle : Méthodologie Luxembourg',
    description: 'Guide de 25 pages pour analyser efficacement vos concurrents sur le marché luxembourgeois et identifier les opportunités.',
    image: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80',
    downloadUrl: '/downloads/analyse-concurrentielle-luxembourg.pdf',
    category: 'Stratégie',
    pages: 25,
    readTime: '1h',
    difficulty: 'Intermédiaire',
    preview: [
      'Cartographie concurrentielle',
      'Analyse des stratégies digitales',
      'Benchmarking performance',
      'Identification des gaps',
      'Plan d\'action compétitif'
    ],
    author: {
      name: 'Sarah Chen',
      role: 'Market Research Analyst',
      avatar: 'https://images.unsplash.com/photo-1494790108755-2616b612b820?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=387&q=80'
    }
  }
];

const categories = ['Tous', 'SEO', 'B2B Marketing', 'E-commerce', 'Social Media', 'Publicité', 'Content Marketing', 'Automation', 'Stratégie'];

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
      staggerChildren: 0.1,
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

const GuidesPage = () => {
  const [selectedCategory, setSelectedCategory] = useState('Tous');
  const [email, setEmail] = useState('');
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    company: '',
    position: ''
  });

  const filteredGuides = selectedCategory === 'Tous' 
    ? guides 
    : guides.filter(guide => guide.category === selectedCategory);

  const featuredGuides = guides.filter(guide => guide.featured);

  const handleNewsletterSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log('Newsletter signup:', email);
    setEmail('');
  };

  const handleDownload = (guide: Guide) => {
    // In a real application, this would trigger a download after form submission
    console.log('Download request for:', guide.title);
    // You can implement lead capture here
  };

  const getDifficultyColor = (difficulty: string) => {
    switch (difficulty) {
      case 'Débutant': return 'bg-green-100 text-green-800';
      case 'Intermédiaire': return 'bg-yellow-100 text-yellow-800';
      case 'Avancé': return 'bg-red-100 text-red-800';
      default: return 'bg-gray-100 text-gray-800';
    }
  };

  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="relative overflow-hidden pt-32 pb-24">
        <div 
          className="absolute inset-0 bg-cover bg-center bg-no-repeat"
          style={{
            backgroundImage: `url('https://images.unsplash.com/photo-1456324504439-367cee3b3c32?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80')`
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
                📚 GUIDES & RESSOURCES TÉLÉCHARGEABLES
              </span>
            </motion.div>
            
            <motion.h1 variants={fadeInUp} className="text-5xl md:text-6xl font-bold mb-8 max-w-4xl mx-auto leading-tight">
              Guides Marketing{' '}
              <span className="text-brand">
                Gratuits
              </span>
            </motion.h1>
            
            <motion.p variants={fadeInUp} className="text-xl mb-12 max-w-3xl mx-auto text-gray-200 leading-relaxed">
              Des ressources complètes et actionables pour maîtriser le marketing digital 
              au Luxembourg. Téléchargement gratuit, contenu premium.
            </motion.p>
            
            <motion.div variants={fadeInUp} className="flex flex-col md:flex-row gap-4 justify-center items-center">
              <motion.a
                href="#guides"
                whileHover={{ scale: 1.05, y: -2 }}
                whileTap={{ scale: 0.95 }}
                className="bg-brand text-gray-900 px-8 py-4 rounded-lg font-bold text-lg shadow-xl hover:shadow-2xl transition-all duration-300"
              >
                Explorer les Guides →
              </motion.a>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Featured Guides */}
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
                GUIDES LES PLUS TÉLÉCHARGÉS
              </span>
            </motion.div>
            <motion.h2 variants={fadeInUp} className="text-4xl md:text-5xl font-bold mb-6 text-gray-900">
              Nos Ressources Incontournables
            </motion.h2>
            <motion.p variants={fadeInUp} className="text-xl max-w-4xl mx-auto text-gray-600 leading-relaxed">
              Ces guides sont plébiscités par les entrepreneurs et marketeurs luxembourgeois 
              pour leur qualité et leur aspect pratique.
            </motion.p>
          </motion.div>

          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={staggerChildren}
            className="grid lg:grid-cols-3 gap-8"
          >
            {featuredGuides.map((guide, index) => (
              <motion.div
                key={guide.id}
                variants={fadeInUp}
                initial="rest"
                whileHover="hover"
                className="group"
              >
                <motion.div
                  variants={scaleOnHover}
                  className="bg-white rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-500 overflow-hidden h-full"
                >
                  <div className="relative h-48 overflow-hidden">
                    <img 
                      src={guide.image} 
                      alt={guide.title}
                      className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                    />
                    <div className="absolute top-4 left-4">
                      <span className="bg-brand text-gray-900 px-3 py-1 rounded-full text-sm font-semibold">
                        {guide.category}
                      </span>
                    </div>
                    <div className="absolute top-4 right-4">
                      <span className={`px-3 py-1 rounded-full text-sm font-medium ${getDifficultyColor(guide.difficulty)}`}>
                        {guide.difficulty}
                      </span>
                    </div>
                    <div className="absolute bottom-4 left-4">
                      <div className="flex items-center space-x-2 text-white text-sm">
                        <span className="bg-black/50 px-2 py-1 rounded">{guide.pages} pages</span>
                        <span className="bg-black/50 px-2 py-1 rounded">{guide.readTime}</span>
                      </div>
                    </div>
                  </div>
                  
                  <div className="p-6 flex flex-col h-full">
                    <div className="flex-1">
                      <h3 className="text-xl font-bold mb-3 text-gray-900 line-clamp-2">
                        {guide.title}
                      </h3>
                      <p className="text-gray-600 mb-4 line-clamp-3">
                        {guide.description}
                      </p>
                      
                      <div className="mb-4">
                        <h4 className="font-semibold text-gray-900 mb-2">Ce que vous apprendrez :</h4>
                        <ul className="space-y-1">
                          {guide.preview.slice(0, 3).map((item, idx) => (
                            <li key={idx} className="flex items-center text-sm text-gray-700">
                              <div className="w-1.5 h-1.5 rounded-full bg-brand mr-2 flex-shrink-0"></div>
                              <span>{item}</span>
                            </li>
                          ))}
                        </ul>
                      </div>
                    </div>
                    
                    <div className="pt-4 border-t border-gray-100">
                      <div className="flex items-center space-x-3 mb-4">
                        <img 
                          src={guide.author.avatar} 
                          alt={guide.author.name}
                          className="w-8 h-8 rounded-full object-cover"
                        />
                        <div>
                          <p className="text-sm font-medium text-gray-900">{guide.author.name}</p>
                          <p className="text-xs text-gray-500">{guide.author.role}</p>
                        </div>
                      </div>
                      
                      <button
                        onClick={() => handleDownload(guide)}
                        className="w-full bg-brand text-gray-900 px-6 py-3 rounded-lg font-bold hover:bg-brand/90 transition-colors group"
                      >
                        Télécharger Gratuitement
                        <span className="ml-2 transition-transform group-hover:translate-x-1">↓</span>
                      </button>
                    </div>
                  </div>
                </motion.div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Category Filter */}
      <section className="py-12 bg-white border-b border-gray-200">
        <div className="max-w-7xl mx-auto px-6">
          <div className="flex flex-wrap gap-3 justify-center">
            {categories.map((category) => (
              <button
                key={category}
                onClick={() => setSelectedCategory(category)}
                className={`px-6 py-3 rounded-full font-medium transition-all ${
                  selectedCategory === category
                    ? 'bg-brand text-gray-900 shadow-lg'
                    : 'bg-gray-100 text-gray-600 hover:bg-gray-200'
                }`}
              >
                {category}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* All Guides */}
      <section id="guides" className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={staggerChildren}
          >
            <motion.div variants={fadeInUp} className="mb-12">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
                {selectedCategory === 'Tous' ? 'Tous les Guides' : `Guides : ${selectedCategory}`}
              </h2>
              <p className="text-gray-600">
                {filteredGuides.length} guide{filteredGuides.length > 1 ? 's' : ''} disponible{filteredGuides.length > 1 ? 's' : ''}
              </p>
            </motion.div>

            <motion.div
              variants={staggerChildren}
              className="grid md:grid-cols-2 lg:grid-cols-3 gap-8"
            >
              {filteredGuides.map((guide, index) => (
                <motion.div
                  key={guide.id}
                  variants={fadeInUp}
                  initial="rest"
                  whileHover="hover"
                  className="group"
                >
                  <motion.div
                    variants={scaleOnHover}
                    className="bg-white rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-500 overflow-hidden border border-gray-100 h-full"
                  >
                    <div className="relative h-48 overflow-hidden">
                      <img 
                        src={guide.image} 
                        alt={guide.title}
                        className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                      />
                      <div className="absolute top-4 left-4">
                        <span className="bg-brand text-gray-900 px-3 py-1 rounded-full text-sm font-semibold">
                          {guide.category}
                        </span>
                      </div>
                      <div className="absolute top-4 right-4">
                        <span className={`px-3 py-1 rounded-full text-sm font-medium ${getDifficultyColor(guide.difficulty)}`}>
                          {guide.difficulty}
                        </span>
                      </div>
                      <div className="absolute bottom-4 left-4">
                        <div className="flex items-center space-x-2 text-white text-sm">
                          <span className="bg-black/50 px-2 py-1 rounded">{guide.pages} pages</span>
                          <span className="bg-black/50 px-2 py-1 rounded">{guide.readTime}</span>
                        </div>
                      </div>
                    </div>
                    
                    <div className="p-6 flex flex-col h-full">
                      <div className="flex-1">
                        <h3 className="text-xl font-bold mb-3 text-gray-900 line-clamp-2">
                          {guide.title}
                        </h3>
                        <p className="text-gray-600 mb-4 line-clamp-3">
                          {guide.description}
                        </p>
                        
                        <div className="mb-4">
                          <h4 className="font-semibold text-gray-900 mb-2">Contenu inclus :</h4>
                          <ul className="space-y-1">
                            {guide.preview.slice(0, 3).map((item, idx) => (
                              <li key={idx} className="flex items-center text-sm text-gray-700">
                                <div className="w-1.5 h-1.5 rounded-full bg-brand mr-2 flex-shrink-0"></div>
                                <span>{item}</span>
                              </li>
                            ))}
                          </ul>
                        </div>
                      </div>
                      
                      <div className="pt-4 border-t border-gray-100">
                        <div className="flex items-center space-x-3 mb-4">
                          <img 
                            src={guide.author.avatar} 
                            alt={guide.author.name}
                            className="w-8 h-8 rounded-full object-cover"
                          />
                          <div>
                            <p className="text-sm font-medium text-gray-900">{guide.author.name}</p>
                            <p className="text-xs text-gray-500">{guide.author.role}</p>
                          </div>
                        </div>
                        
                        <button
                          onClick={() => handleDownload(guide)}
                          className="w-full bg-gray-900 text-white px-6 py-3 rounded-lg font-bold hover:bg-gray-800 transition-colors group"
                        >
                          Télécharger
                          <span className="ml-2 transition-transform group-hover:translate-y-1">↓</span>
                        </button>
                      </div>
                    </div>
                  </motion.div>
                </motion.div>
              ))}
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Lead Capture CTA */}
      <section className="py-24 bg-gray-50">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={staggerChildren}
          >
            <motion.div variants={fadeInUp} className="mb-8">
              <span className="inline-block bg-brand text-gray-900 px-4 py-2 rounded-full text-sm font-bold mb-8">
                ACCÈS PREMIUM
              </span>
            </motion.div>
            <motion.h3 variants={fadeInUp} className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
              Accédez à Notre Bibliothèque{' '}
              <span className="text-brand">Complète</span>
            </motion.h3>
            <motion.p variants={fadeInUp} className="text-lg text-gray-600 mb-8">
              Recevez tous nos guides, templates exclusifs et mises à jour gratuitement. 
              Plus de 200 pages de contenu premium pour développer votre marketing au Luxembourg.
            </motion.p>
            
            <motion.div variants={fadeInUp} className="bg-white p-8 rounded-2xl shadow-lg max-w-md mx-auto">
              <h4 className="text-xl font-bold text-gray-900 mb-4">Téléchargement Gratuit</h4>
              <form className="space-y-4">
                <input
                  type="text"
                  placeholder="Votre nom"
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-brand focus:border-transparent"
                  value={formData.name}
                  onChange={(e) => setFormData({...formData, name: e.target.value})}
                />
                <input
                  type="email"
                  placeholder="Votre email"
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-brand focus:border-transparent"
                  value={formData.email}
                  onChange={(e) => setFormData({...formData, email: e.target.value})}
                />
                <input
                  type="text"
                  placeholder="Votre entreprise"
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-brand focus:border-transparent"
                  value={formData.company}
                  onChange={(e) => setFormData({...formData, company: e.target.value})}
                />
                <button
                  type="submit"
                  className="w-full bg-brand text-gray-900 px-6 py-3 rounded-lg font-bold shadow-lg hover:shadow-xl transition-all duration-300"
                >
                  Télécharger Tous les Guides →
                </button>
              </form>
              <p className="text-xs text-gray-500 mt-4">
                Pas de spam. Vos données sont protégées selon le RGPD.
              </p>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Newsletter */}
      <section className="py-24 bg-gray-900 relative overflow-hidden">
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
                NOUVEAUX GUIDES
              </span>
            </motion.div>
            <motion.h2 variants={fadeInUp} className="text-4xl md:text-5xl font-bold mb-6 text-white">
              Soyez les Premiers{' '}
              <span className="text-brand">
                Informés
              </span>
            </motion.h2>
            <motion.p variants={fadeInUp} className="text-xl mb-10 text-gray-200 leading-relaxed">
              Recevez nos nouveaux guides et ressources exclusives dès leur publication. 
              Restez à la pointe du marketing digital luxembourgeois.
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
              Besoin d'Accompagnement Personnalisé ?
            </motion.h2>
            <motion.p variants={fadeInUp} className="text-xl mb-10 max-w-4xl mx-auto text-gray-600 leading-relaxed">
              Nos guides vous donnent les bases, mais chaque projet est unique. 
              Bénéficiez de l'expertise de nos consultants pour une stratégie sur-mesure.
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
                href="/services"
                whileHover={{ scale: 1.05, y: -2 }}
                className="inline-flex items-center text-gray-900 border-2 border-gray-900 px-10 py-4 rounded-lg hover:bg-gray-900 hover:text-white transition-all duration-300 font-bold"
              >
                Découvrir nos Services
              </motion.a>
            </motion.div>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default GuidesPage;