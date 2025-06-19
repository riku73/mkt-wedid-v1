'use client';

import { motion } from 'framer-motion';
import Link from 'next/link';
import Head from 'next/head';
import { useEffect } from 'react';

interface ErrorPageProps {
  error: Error & { digest?: string };
  reset: () => void;
}

const ErrorPage = ({ error, reset }: ErrorPageProps) => {
  useEffect(() => {
    // Log the error to monitoring service
    console.error('Application error:', error);
  }, [error]);

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

  // Quick recovery actions
  const recoveryActions = [
    {
      title: 'Actualiser la page',
      description: 'Essayez de recharger la page pour résoudre le problème temporaire',
      action: () => reset(),
      icon: '🔄',
      primary: true
    },
    {
      title: 'Retour à l\'accueil',
      description: 'Retournez à notre page d\'accueil pour continuer votre navigation',
      href: '/',
      icon: '🏠'
    },
    {
      title: 'Consulter nos services',
      description: 'Découvrez nos services marketing digital au Luxembourg',
      href: '/services',
      icon: '🚀'
    },
    {
      title: 'Nous contacter',
      description: 'Signaler le problème à notre équipe technique',
      href: '/contact',
      icon: '💬'
    }
  ];

  return (
    <>
      <Head>
        <title>Erreur Technique (500) | Wedid - Agence Marketing Digital Luxembourg</title>
        <meta name="description" content="Une erreur technique s'est produite. Notre équipe travaille à résoudre le problème. Découvrez nos services marketing digital au Luxembourg." />
        <meta name="robots" content="noindex, follow" />
        <link rel="canonical" href="https://wedid.lu/error" />
        
        {/* Open Graph */}
        <meta property="og:title" content="Erreur Technique | Wedid Luxembourg" />
        <meta property="og:description" content="Une erreur technique s'est produite. Nous travaillons à résoudre le problème rapidement." />
        <meta property="og:url" content="https://wedid.lu/error" />
        <meta property="og:type" content="website" />
        
        {/* Structured Data for Error */}
        <script 
          type="application/ld+json"
          dangerouslySetInnerHTML={{ 
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "WebPage",
              "name": "Erreur Technique",
              "url": "https://wedid.lu/error",
              "publisher": {
                "@type": "Organization",
                "name": "Wedid",
                "url": "https://wedid.lu"
              },
              "mainEntity": {
                "@type": "Thing",
                "name": "Erreur 500 - Erreur Technique"
              }
            })
          }}
        />
      </Head>

      <div className="min-h-screen bg-white flex items-center justify-center">
        <div className="max-w-5xl mx-auto px-6 py-20">
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
              <div className="text-9xl md:text-[12rem] font-bold text-red-500 opacity-20 leading-none">
                500
              </div>
            </motion.div>

            {/* Main Content */}
            <motion.div variants={fadeInUp} className="mb-8">
              <span className="inline-block bg-red-100 text-red-800 px-4 py-2 rounded-full text-sm font-semibold mb-8">
                ⚠️ ERREUR TECHNIQUE
              </span>
            </motion.div>
            
            <motion.h1 variants={fadeInUp} className="text-4xl md:text-6xl font-bold mb-6 text-gray-900">
              Oups ! Un problème{' '}
              <span className="text-red-500">
                technique
              </span>{' '}
              est survenu
            </motion.h1>
            
            <motion.p variants={fadeInUp} className="text-xl mb-12 max-w-3xl mx-auto text-gray-600 leading-relaxed">
              Nous rencontrons actuellement un problème technique temporaire. 
              Notre équipe a été automatiquement notifiée et travaille à résoudre le problème rapidement.
            </motion.p>

            {/* Recovery Actions */}
            <motion.div
              variants={staggerChildren}
              className="grid md:grid-cols-2 lg:grid-cols-4 gap-4 mb-16"
            >
              {recoveryActions.map((action, index) => (
                <motion.div
                  key={index}
                  variants={fadeInUp}
                  whileHover={{ scale: 1.05 }}
                  className="group"
                >
                  {action.action ? (
                    <button
                      onClick={action.action}
                      className={`w-full p-6 rounded-2xl transition-all duration-300 border hover:shadow-lg ${
                        action.primary 
                          ? 'bg-brand text-gray-900 border-brand hover:bg-brand/90' 
                          : 'bg-gray-50 hover:bg-gray-100 border-gray-200 hover:border-brand'
                      }`}
                    >
                      <div className="text-4xl mb-4">{action.icon}</div>
                      <h3 className="text-lg font-bold mb-3 group-hover:text-brand transition-colors">
                        {action.title}
                      </h3>
                      <p className="text-sm leading-relaxed opacity-80">
                        {action.description}
                      </p>
                    </button>
                  ) : (
                    <Link
                      href={action.href!}
                      className="block w-full p-6 bg-gray-50 rounded-2xl hover:bg-gray-100 transition-all duration-300 border border-gray-200 hover:border-brand hover:shadow-lg"
                    >
                      <div className="text-4xl mb-4">{action.icon}</div>
                      <h3 className="text-lg font-bold text-gray-900 mb-3 group-hover:text-brand transition-colors">
                        {action.title}
                      </h3>
                      <p className="text-gray-600 text-sm leading-relaxed">
                        {action.description}
                      </p>
                    </Link>
                  )}
                </motion.div>
              ))}
            </motion.div>

            {/* Error Details (for development) */}
            {process.env.NODE_ENV === 'development' && error && (
              <motion.div variants={fadeInUp} className="mt-16">
                <details className="text-left bg-gray-100 rounded-lg p-6">
                  <summary className="font-bold text-gray-900 cursor-pointer mb-4">
                    Détails de l'erreur (développement)
                  </summary>
                  <div className="text-sm text-gray-700 font-mono bg-white p-4 rounded border overflow-auto">
                    <div className="mb-2">
                      <strong>Message:</strong> {error.message}
                    </div>
                    {error.stack && (
                      <div>
                        <strong>Stack:</strong>
                        <pre className="mt-2 text-xs">{error.stack}</pre>
                      </div>
                    )}
                    {error.digest && (
                      <div className="mt-2">
                        <strong>Digest:</strong> {error.digest}
                      </div>
                    )}
                  </div>
                </details>
              </motion.div>
            )}

            {/* Support Information */}
            <motion.div variants={fadeInUp} className="mt-16 text-left bg-gray-50 rounded-2xl p-8">
              <h2 className="text-2xl font-bold text-gray-900 mb-4">
                Besoin d'aide immédiate ?
              </h2>
              <div className="grid md:grid-cols-3 gap-6">
                <div className="text-center">
                  <div className="w-12 h-12 bg-brand rounded-full flex items-center justify-center mx-auto mb-3">
                    <svg className="h-6 w-6 text-gray-900" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                    </svg>
                  </div>
                  <h3 className="font-bold text-gray-900 mb-1">Téléphone</h3>
                  <p className="text-gray-600 text-sm">+352 12 34 56 789</p>
                  <p className="text-gray-500 text-xs">Lun-Ven 9h-18h</p>
                </div>
                
                <div className="text-center">
                  <div className="w-12 h-12 bg-brand rounded-full flex items-center justify-center mx-auto mb-3">
                    <svg className="h-6 w-6 text-gray-900" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 4.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                    </svg>
                  </div>
                  <h3 className="font-bold text-gray-900 mb-1">Email</h3>
                  <p className="text-gray-600 text-sm">support@wedid.lu</p>
                  <p className="text-gray-500 text-xs">Réponse sous 2h</p>
                </div>
                
                <div className="text-center">
                  <div className="w-12 h-12 bg-brand rounded-full flex items-center justify-center mx-auto mb-3">
                    <svg className="h-6 w-6 text-gray-900" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z" />
                    </svg>
                  </div>
                  <h3 className="font-bold text-gray-900 mb-1">Chat Live</h3>
                  <p className="text-gray-600 text-sm">Support immédiat</p>
                  <p className="text-gray-500 text-xs">9h-18h en semaine</p>
                </div>
              </div>
              
              <div className="mt-6 pt-6 border-t border-gray-200">
                <p className="text-gray-600 text-sm">
                  <strong>Wedid - Agence Marketing Digital Luxembourg</strong><br/>
                  Nous accompagnons les entreprises luxembourgeoises dans leur transformation digitale 
                  avec des services SEO, création de sites web, branding et formation marketing.
                </p>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </>
  );
};

export default ErrorPage;