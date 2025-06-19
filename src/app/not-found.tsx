'use client';

import { motion } from 'framer-motion';
import Link from 'next/link';
import Head from 'next/head';

const NotFoundPage = () => {
  const fadeInUp = {
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

  const staggerChildren = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.1
      }
    }
  };

  // Popular pages for Luxembourg market
  const popularPages = [
    {
      title: 'Services Marketing Digital',
      description: 'Découvrez nos services SEO, création de sites web et branding au Luxembourg',
      href: '/services',
      icon: '🚀'
    },
    {
      title: 'À Propos de Wedid',
      description: 'Apprenez-en plus sur notre agence marketing digital luxembourgeoise',
      href: '/about',
      icon: '👥'
    },
    {
      title: 'Nos Zones d\'Intervention',
      description: 'Luxembourg-Ville, Esch-sur-Alzette, Kirchberg et Grande Région',
      href: '/locations',
      icon: '🇱🇺'
    },
    {
      title: 'Portfolio & Cas d\'Études',
      description: 'Découvrez nos réalisations pour des entreprises luxembourgeoises',
      href: '/portfolio',
      icon: '📊'
    },
    {
      title: 'Blog Marketing Digital',
      description: 'Articles et conseils marketing pour le marché luxembourgeois',
      href: '/resources/blog',
      icon: '📝'
    },
    {
      title: 'FAQ',
      description: 'Questions fréquentes sur nos services au Luxembourg',
      href: '/resources/faq',
      icon: '❓'
    }
  ];

  return (
    <>
      <Head>
        <title>Page Introuvable (404) | Wedid - Agence Marketing Digital Luxembourg</title>
        <meta name="description" content="Page non trouvée. Découvrez nos services marketing digital au Luxembourg : SEO, création de sites web, branding pour entreprises luxembourgeoises." />
        <meta name="robots" content="noindex, follow" />
        <link rel="canonical" href="https://wedid.lu/404" />
        
        {/* Open Graph */}
        <meta property="og:title" content="Page Introuvable | Wedid Luxembourg" />
        <meta property="og:description" content="Cette page n'existe pas. Découvrez nos services marketing digital au Luxembourg." />
        <meta property="og:url" content="https://wedid.lu/404" />
        <meta property="og:type" content="website" />
        
        {/* Structured Data for 404 */}
        <script 
          type="application/ld+json"
          dangerouslySetInnerHTML={{ 
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "WebPage",
              "name": "Page Introuvable",
              "url": "https://wedid.lu/404",
              "publisher": {
                "@type": "Organization",
                "name": "Wedid",
                "url": "https://wedid.lu"
              },
              "mainEntity": {
                "@type": "Thing",
                "name": "Erreur 404 - Page Introuvable"
              }
            })
          }}
        />
      </Head>

      <div className="min-h-screen bg-white flex items-center justify-center">
        <div className="max-w-6xl mx-auto px-6 py-20">
          <motion.div
            initial="hidden"
            animate="visible"
            variants={staggerChildren}
            className="text-center"
          >
            {/* Error Animation */}
            <motion.div
              variants={fadeInUp}
              className="mb-8"
            >
              <div className="text-9xl md:text-[12rem] font-bold text-brand opacity-20 leading-none">
                404
              </div>
            </motion.div>

            {/* Main Content */}
            <motion.div variants={fadeInUp} className="mb-8">
              <span className="inline-block bg-brand text-gray-900 px-4 py-2 rounded-full text-sm font-semibold mb-8">
                🔍 PAGE INTROUVABLE
              </span>
            </motion.div>
            
            <motion.h1 variants={fadeInUp} className="text-4xl md:text-6xl font-bold mb-6 text-gray-900">
              Oups ! Cette page{' '}
              <span className="text-brand">
                n'existe pas
              </span>
            </motion.h1>
            
            <motion.p variants={fadeInUp} className="text-xl mb-12 max-w-3xl mx-auto text-gray-600 leading-relaxed">
              La page que vous recherchez a peut-être été déplacée, supprimée ou n'a jamais existé. 
              Découvrez nos services marketing digital au Luxembourg ci-dessous.
            </motion.p>

            {/* Quick Actions */}
            <motion.div variants={fadeInUp} className="flex flex-col md:flex-row gap-4 justify-center mb-16">
              <Link
                href="/"
                className="bg-brand text-gray-900 px-8 py-4 rounded-lg font-bold text-lg shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105"
              >
                🏠 Retour à l'Accueil
              </Link>
              <Link
                href="/contact"
                className="border-2 border-gray-900 text-gray-900 px-8 py-4 rounded-lg font-bold hover:bg-gray-900 hover:text-white transition-all duration-300"
              >
                💬 Nous Contacter
              </Link>
            </motion.div>

            {/* Popular Pages */}
            <motion.div variants={fadeInUp} className="mb-12">
              <h2 className="text-3xl font-bold text-gray-900 mb-8">
                Pages Populaires
              </h2>
              <p className="text-gray-600 mb-8 max-w-2xl mx-auto">
                Voici quelques pages qui pourraient vous intéresser pour découvrir 
                notre expertise marketing digital au Luxembourg.
              </p>
            </motion.div>

            <motion.div
              variants={staggerChildren}
              className="grid md:grid-cols-2 lg:grid-cols-3 gap-6"
            >
              {popularPages.map((page, index) => (
                <motion.div
                  key={index}
                  variants={fadeInUp}
                  whileHover={{ scale: 1.05 }}
                  className="group"
                >
                  <Link
                    href={page.href}
                    className="block p-6 bg-gray-50 rounded-2xl hover:bg-gray-100 transition-all duration-300 border border-gray-200 hover:border-brand hover:shadow-lg"
                  >
                    <div className="text-4xl mb-4">{page.icon}</div>
                    <h3 className="text-xl font-bold text-gray-900 mb-3 group-hover:text-brand transition-colors">
                      {page.title}
                    </h3>
                    <p className="text-gray-600 text-sm leading-relaxed">
                      {page.description}
                    </p>
                    <div className="mt-4 inline-flex items-center text-brand font-semibold text-sm group-hover:translate-x-1 transition-transform">
                      Découvrir →
                    </div>
                  </Link>
                </motion.div>
              ))}
            </motion.div>

            {/* Search Box */}
            <motion.div variants={fadeInUp} className="mt-16">
              <div className="max-w-md mx-auto">
                <h3 className="text-xl font-bold text-gray-900 mb-4">
                  Rechercher sur notre site
                </h3>
                <div className="relative">
                  <input
                    type="text"
                    placeholder="Rechercher services, articles..."
                    className="w-full pl-12 pr-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-brand focus:border-transparent transition-all"
                    onKeyPress={(e) => {
                      if (e.key === 'Enter') {
                        const query = (e.target as HTMLInputElement).value;
                        window.location.href = `https://www.google.com/search?q=${encodeURIComponent(query + ' site:wedid.lu')}`;
                      }
                    }}
                  />
                  <div className="absolute left-4 top-1/2 transform -translate-y-1/2">
                    <svg className="h-5 w-5 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                    </svg>
                  </div>
                </div>
                <p className="text-sm text-gray-500 mt-2">
                  Appuyez sur Entrée pour rechercher
                </p>
              </div>
            </motion.div>

            {/* SEO-friendly content */}
            <motion.div variants={fadeInUp} className="mt-16 text-left bg-gray-50 rounded-2xl p-8">
              <h2 className="text-2xl font-bold text-gray-900 mb-4">
                À propos de Wedid - Agence Marketing Digital Luxembourg
              </h2>
              <div className="text-gray-600 space-y-4">
                <p>
                  Wedid est l'agence marketing digital de référence au Luxembourg. Nous accompagnons 
                  les entreprises luxembourgeoises dans leur transformation digitale depuis 2018.
                </p>
                <p>
                  <strong>Nos services principaux :</strong>
                </p>
                <ul className="list-disc list-inside space-y-2 ml-4">
                  <li>Référencement naturel (SEO) et payant (SEA) au Luxembourg</li>
                  <li>Création de sites web professionnels et e-commerce</li>
                  <li>Branding et identité visuelle pour entreprises luxembourgeoises</li>
                  <li>Formation marketing digital et consulting stratégique</li>
                  <li>Gestion des réseaux sociaux et content marketing</li>
                </ul>
                <p>
                  <strong>Zones d'intervention :</strong> Luxembourg-Ville, Esch-sur-Alzette, 
                  Kirchberg, Differdange, Dudelange et toute la Grande Région.
                </p>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </>
  );
};

export default NotFoundPage;