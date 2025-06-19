'use client';

import React, { useState, useMemo } from 'react';
import { motion, Variants } from 'framer-motion';
import Link from 'next/link';

interface BlogPost {
  id: string;
  title: string;
  excerpt: string;
  image: string;
  href: string;
  author: {
    name: string;
    avatar: string;
    role: string;
  };
  publishedAt: string;
  readTime: string;
  category: string;
  tags: string[];
  featured?: boolean;
}

const blogPosts: BlogPost[] = [
  {
    id: '1',
    title: 'Guide Complet du SEO Local au Luxembourg',
    excerpt: 'Découvrez comment optimiser votre référencement pour dominer les recherches locales luxembourgeoises et attirer plus de clients dans votre zone géographique.',
    image: 'https://images.unsplash.com/photo-1560472354-b33ff0c44a43?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2026&q=80',
    href: '/resources/blog/seo-local-luxembourg-guide-complet',
    author: {
      name: 'Marie Dubois',
      avatar: 'https://images.unsplash.com/photo-1494790108755-2616b612b820?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=387&q=80',
      role: 'SEO Manager'
    },
    publishedAt: '15 Mars 2024',
    readTime: '12 min',
    category: 'SEO',
    tags: ['SEO Local', 'Luxembourg', 'Google My Business'],
    featured: true
  },
  {
    id: '2',
    title: 'Social Media B2B : Réussir sur LinkedIn au Luxembourg',
    excerpt: 'Stratégies avancées pour développer votre présence LinkedIn et générer des leads B2B qualifiés dans l\'écosystème d\'affaires luxembourgeois.',
    image: 'https://images.unsplash.com/photo-1611224923853-80b023f02d71?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2039&q=80',
    href: '/resources/blog/linkedin-b2b-luxembourg-strategies',
    author: {
      name: 'Jean-Claude Weber',
      avatar: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80',
      role: 'Social Media Strategist'
    },
    publishedAt: '12 Mars 2024',
    readTime: '10 min',
    category: 'Social Media',
    tags: ['LinkedIn', 'B2B', 'Lead Generation'],
    featured: true
  },
  {
    id: '3',
    title: 'E-commerce au Luxembourg : Tendances 2024',
    excerpt: 'Analyse complète des tendances e-commerce qui transforment le marché luxembourgeois et comment votre boutique peut en tirer parti.',
    image: 'https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2040&q=80',
    href: '/resources/blog/ecommerce-luxembourg-tendances-2024',
    author: {
      name: 'Sophie Müller',
      avatar: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80',
      role: 'E-commerce Specialist'
    },
    publishedAt: '8 Mars 2024',
    readTime: '15 min',
    category: 'E-commerce',
    tags: ['E-commerce', 'Tendances', 'Luxembourg'],
    featured: true
  },
  {
    id: '4',
    title: 'Marketing d\'Automatisation pour PME Luxembourgeoises',
    excerpt: 'Comment implémenter des workflows d\'automatisation marketing adaptés aux petites et moyennes entreprises du Luxembourg.',
    image: 'https://images.unsplash.com/photo-1677442136019-21780ecad995?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2032&q=80',
    href: '/resources/blog/marketing-automatisation-pme-luxembourg',
    author: {
      name: 'Marc Schmidt',
      avatar: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=387&q=80',
      role: 'Marketing Automation Expert'
    },
    publishedAt: '5 Mars 2024',
    readTime: '8 min',
    category: 'B2B Marketing',
    tags: ['Automatisation', 'PME', 'Workflows']
  },
  {
    id: '5',
    title: 'Publicité Facebook : Cibler le Marché Luxembourgeois',
    excerpt: 'Stratégies avancées pour optimiser vos campagnes Facebook Ads et toucher efficacement votre audience luxembourgeoise.',
    image: 'https://images.unsplash.com/photo-1611262588024-d12430b98920?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2074&q=80',
    href: '/resources/blog/facebook-ads-luxembourg-strategies',
    author: {
      name: 'Lisa Hoffmann',
      avatar: 'https://images.unsplash.com/photo-1494790108755-2616b612b820?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=387&q=80',
      role: 'Paid Media Specialist'
    },
    publishedAt: '1 Mars 2024',
    readTime: '11 min',
    category: 'Social Media',
    tags: ['Facebook Ads', 'Publicité', 'Ciblage']
  },
  {
    id: '6',
    title: 'Content Marketing B2B : Stratégies Gagnantes',
    excerpt: 'Comment créer du contenu qui engage et convertit vos prospects B2B dans l\'environnement concurrentiel luxembourgeois.',
    image: 'https://images.unsplash.com/photo-1552664730-d307ca884978?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2069&q=80',
    href: '/resources/blog/content-marketing-b2b-luxembourg',
    author: {
      name: 'Paul Reuter',
      avatar: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=387&q=80',
      role: 'Content Strategist'
    },
    publishedAt: '26 Février 2024',
    readTime: '9 min',
    category: 'B2B Marketing',
    tags: ['Content Marketing', 'B2B', 'Stratégie']
  },
  {
    id: '7',
    title: 'Google Ads pour Services Locaux au Luxembourg',
    excerpt: 'Optimisez vos campagnes Google Ads pour les services locaux et dominez les résultats de recherche luxembourgeois.',
    image: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2415&q=80',
    href: '/resources/blog/google-ads-services-locaux-luxembourg',
    author: {
      name: 'Emma Peeters',
      avatar: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80',
      role: 'PPC Manager'
    },
    publishedAt: '22 Février 2024',
    readTime: '13 min',
    category: 'SEO',
    tags: ['Google Ads', 'Services Locaux', 'PPC']
  },
  {
    id: '8',
    title: 'Marketing Local : Dominer votre Zone à Luxembourg',
    excerpt: 'Techniques avancées de marketing local pour les entreprises luxembourgeoises qui veulent dominer leur marché géographique.',
    image: 'https://images.unsplash.com/photo-1486312338219-ce68d2c6f44d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2072&q=80',
    href: '/resources/blog/marketing-local-luxembourg-strategies',
    author: {
      name: 'Nicolas Garcia',
      avatar: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80',
      role: 'Local Marketing Expert'
    },
    publishedAt: '18 Février 2024',
    readTime: '10 min',
    category: 'Local Marketing',
    tags: ['Marketing Local', 'Géolocalisation', 'Proximité']
  },
  {
    id: '9',
    title: 'Analyse de la Concurrence Digitale au Luxembourg',
    excerpt: 'Méthodologie complète pour analyser et surpasser vos concurrents dans l\'espace digital luxembourgeois.',
    image: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80',
    href: '/resources/blog/analyse-concurrence-digitale-luxembourg',
    author: {
      name: 'Sarah Chen',
      avatar: 'https://images.unsplash.com/photo-1494790108755-2616b612b820?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=387&q=80',
      role: 'Market Research Analyst'
    },
    publishedAt: '14 Février 2024',
    readTime: '14 min',
    category: 'B2B Marketing',
    tags: ['Analyse Concurrentielle', 'Recherche', 'Stratégie']
  },
  {
    id: '10',
    title: 'Conversion Rate Optimization pour E-commerce Luxembourg',
    excerpt: 'Techniques avancées pour optimiser le taux de conversion de votre boutique en ligne et maximiser vos ventes au Luxembourg.',
    image: 'https://images.unsplash.com/photo-1556761175-b413da4baf72?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2074&q=80',
    href: '/resources/blog/cro-ecommerce-luxembourg',
    author: {
      name: 'David Laurent',
      avatar: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=387&q=80',
      role: 'CRO Specialist'
    },
    publishedAt: '10 Février 2024',
    readTime: '12 min',
    category: 'E-commerce',
    tags: ['CRO', 'Conversion', 'Optimisation']
  }
];

const categories = ['Tous', 'SEO', 'Social Media', 'E-commerce', 'B2B Marketing', 'Local Marketing'];

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

const BlogPage = () => {
  const [selectedCategory, setSelectedCategory] = useState('Tous');
  const [searchQuery, setSearchQuery] = useState('');
  const [email, setEmail] = useState('');

  const filteredPosts = useMemo(() => {
    let filtered = blogPosts;

    if (selectedCategory !== 'Tous') {
      filtered = filtered.filter(post => post.category === selectedCategory);
    }

    if (searchQuery) {
      filtered = filtered.filter(post => 
        post.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
        post.excerpt.toLowerCase().includes(searchQuery.toLowerCase()) ||
        post.tags.some(tag => tag.toLowerCase().includes(searchQuery.toLowerCase()))
      );
    }

    return filtered;
  }, [selectedCategory, searchQuery]);

  const featuredPosts = blogPosts.filter(post => post.featured);

  const handleNewsletterSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log('Newsletter signup:', email);
    setEmail('');
  };

  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="relative pt-32 pb-32 overflow-hidden">
        <div 
          className="absolute inset-0 bg-cover bg-center bg-no-repeat"
          style={{
            backgroundImage: `url('https://images.unsplash.com/photo-1486312338219-ce68d2c6f44d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2072&q=80')`
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
                📝 BLOG MARKETING LUXEMBOURG
              </span>
            </motion.div>
            
            <motion.h1 variants={fadeInUp} className="text-5xl md:text-6xl font-bold mb-8 max-w-4xl mx-auto leading-tight">
              Insights &{' '}
              <span className="text-brand">
                Stratégies
              </span>{' '}
              Marketing
            </motion.h1>
            
            <motion.p variants={fadeInUp} className="text-xl mb-12 max-w-3xl mx-auto text-gray-200 leading-relaxed">
              Découvrez les dernières tendances, stratégies et conseils d'experts pour exceller 
              dans le marketing digital au Luxembourg.
            </motion.p>
          </motion.div>
        </div>
      </section>

      {/* Search & Filter */}
      <section className="py-12 bg-gray-50 border-b border-gray-200">
        <div className="max-w-7xl mx-auto px-6">
          <div className="flex flex-col lg:flex-row gap-6 items-center justify-between">
            {/* Search */}
            <div className="w-full lg:w-96">
              <div className="relative">
                <input
                  type="text"
                  placeholder="Rechercher des articles..."
                  className="w-full pl-12 pr-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-brand focus:border-transparent transition-all"
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                />
                <div className="absolute left-4 top-1/2 transform -translate-y-1/2">
                  <svg className="h-5 w-5 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                  </svg>
                </div>
              </div>
            </div>

            {/* Categories */}
            <div className="flex flex-wrap gap-2">
              {categories.map((category) => (
                <button
                  key={category}
                  onClick={() => setSelectedCategory(category)}
                  className={`px-4 py-2 rounded-full font-medium transition-all ${
                    selectedCategory === category
                      ? 'bg-brand text-gray-900'
                      : 'bg-white text-gray-600 hover:bg-gray-100'
                  }`}
                >
                  {category}
                </button>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Featured Posts */}
      {selectedCategory === 'Tous' && !searchQuery && (
        <section className="py-24 bg-white">
          <div className="max-w-7xl mx-auto px-6">
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={staggerChildren}
              className="mb-16"
            >
              <motion.div variants={fadeInUp} className="text-center mb-12">
                <span className="inline-block bg-brand text-gray-900 px-4 py-2 rounded-full text-sm font-bold mb-6">
                  ARTICLES POPULAIRES
                </span>
                <h2 className="text-4xl md:text-5xl font-bold text-gray-900">
                  Les Plus Lus Cette Semaine
                </h2>
              </motion.div>

              <motion.div
                variants={staggerChildren}
                className="grid lg:grid-cols-3 gap-8"
              >
                {featuredPosts.map((post, index) => (
                  <motion.div
                    key={post.id}
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
                          src={post.image} 
                          alt={post.title}
                          className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                        />
                        <div className="absolute top-4 left-4">
                          <span className="bg-brand text-gray-900 px-3 py-1 rounded-full text-sm font-semibold">
                            {post.category}
                          </span>
                        </div>
                        <div className="absolute top-4 right-4">
                          <span className="bg-white/90 text-gray-800 px-3 py-1 rounded-full text-sm font-medium">
                            {post.readTime}
                          </span>
                        </div>
                      </div>
                      
                      <div className="p-6">
                        <h3 className="text-xl font-bold mb-3 text-gray-900 group-hover:text-gray-700 transition-colors line-clamp-2">
                          {post.title}
                        </h3>
                        <p className="text-gray-600 mb-4 line-clamp-3">
                          {post.excerpt}
                        </p>
                        
                        <div className="flex items-center justify-between">
                          <div className="flex items-center space-x-3">
                            <img 
                              src={post.author.avatar} 
                              alt={post.author.name}
                              className="w-8 h-8 rounded-full object-cover"
                            />
                            <div>
                              <p className="text-sm font-medium text-gray-900">{post.author.name}</p>
                              <p className="text-xs text-gray-500">{post.publishedAt}</p>
                            </div>
                          </div>
                          <Link
                            href={post.href}
                            className="inline-flex items-center font-semibold text-gray-900 hover:text-brand transition-colors"
                          >
                            Lire
                            <span className="ml-1 transition-transform group-hover:translate-x-1">→</span>
                          </Link>
                        </div>
                      </div>
                    </motion.div>
                  </motion.div>
                ))}
              </motion.div>
            </motion.div>
          </div>
        </section>
      )}

      {/* All Posts */}
      <section className="py-24 bg-gray-50">
        <div className="max-w-7xl mx-auto px-6">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={staggerChildren}
          >
            <motion.div variants={fadeInUp} className="mb-12">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
                {selectedCategory === 'Tous' ? 'Tous les Articles' : `Articles : ${selectedCategory}`}
                {searchQuery && ` (${filteredPosts.length} résultats pour "${searchQuery}")`}
              </h2>
              <p className="text-gray-600">
                {filteredPosts.length} article{filteredPosts.length > 1 ? 's' : ''} {selectedCategory !== 'Tous' && `dans ${selectedCategory}`}
              </p>
            </motion.div>

            <motion.div
              variants={staggerChildren}
              className="grid md:grid-cols-2 lg:grid-cols-3 gap-8"
            >
              {filteredPosts.map((post, index) => (
                <motion.div
                  key={post.id}
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
                        src={post.image} 
                        alt={post.title}
                        className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                      />
                      <div className="absolute top-4 left-4">
                        <span className="bg-brand text-gray-900 px-3 py-1 rounded-full text-sm font-semibold">
                          {post.category}
                        </span>
                      </div>
                      <div className="absolute top-4 right-4">
                        <span className="bg-white/90 text-gray-800 px-3 py-1 rounded-full text-sm font-medium">
                          {post.readTime}
                        </span>
                      </div>
                    </div>
                    
                    <div className="p-6 flex flex-col h-full">
                      <div className="flex-1">
                        <h3 className="text-xl font-bold mb-3 text-gray-900 group-hover:text-gray-700 transition-colors line-clamp-2">
                          {post.title}
                        </h3>
                        <p className="text-gray-600 mb-4 line-clamp-3">
                          {post.excerpt}
                        </p>
                        
                        <div className="flex flex-wrap gap-2 mb-4">
                          {post.tags.slice(0, 2).map((tag, tagIndex) => (
                            <span key={tagIndex} className="text-xs bg-gray-100 text-gray-600 px-2 py-1 rounded-full">
                              {tag}
                            </span>
                          ))}
                        </div>
                      </div>
                      
                      <div className="flex items-center justify-between pt-4 border-t border-gray-100">
                        <div className="flex items-center space-x-3">
                          <img 
                            src={post.author.avatar} 
                            alt={post.author.name}
                            className="w-8 h-8 rounded-full object-cover"
                          />
                          <div>
                            <p className="text-sm font-medium text-gray-900">{post.author.name}</p>
                            <p className="text-xs text-gray-500">{post.publishedAt}</p>
                          </div>
                        </div>
                        <Link
                          href={post.href}
                          className="inline-flex items-center font-semibold text-gray-900 hover:text-brand transition-colors"
                        >
                          Lire
                          <span className="ml-1 transition-transform group-hover:translate-x-1">→</span>
                        </Link>
                      </div>
                    </div>
                  </motion.div>
                </motion.div>
              ))}
            </motion.div>

            {filteredPosts.length === 0 && (
              <motion.div
                variants={fadeInUp}
                className="text-center py-16"
              >
                <div className="text-6xl mb-4">📝</div>
                <h3 className="text-2xl font-bold text-gray-900 mb-2">Aucun article trouvé</h3>
                <p className="text-gray-600 mb-6">
                  Essayez de modifier vos critères de recherche ou de sélectionner une autre catégorie.
                </p>
                <button
                  onClick={() => {
                    setSearchQuery('');
                    setSelectedCategory('Tous');
                  }}
                  className="bg-brand text-gray-900 px-6 py-3 rounded-lg font-semibold hover:bg-brand/90 transition-colors"
                >
                  Voir tous les articles
                </button>
              </motion.div>
            )}
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
                NEWSLETTER EXCLUSIVE
              </span>
            </motion.div>
            <motion.h2 variants={fadeInUp} className="text-4xl md:text-5xl font-bold mb-6 text-white">
              Ne Ratez Aucun{' '}
              <span className="text-brand">
                Insight Marketing
              </span>
            </motion.h2>
            <motion.p variants={fadeInUp} className="text-xl mb-10 text-gray-200 leading-relaxed">
              Recevez nos meilleurs articles, études de cas exclusives et tendances du marketing digital 
              luxembourgeois directement dans votre boîte mail.
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
              Un article par semaine, désabonnement facile à tout moment.
            </motion.p>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default BlogPage;