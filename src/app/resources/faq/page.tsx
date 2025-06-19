'use client';

import React, { useState } from 'react';
import { motion, Variants, AnimatePresence } from 'framer-motion';
import Link from 'next/link';
import Head from 'next/head';

interface FAQ {
  id: string;
  question: string;
  answer: string;
  category: string;
  popular?: boolean;
}

const faqs: FAQ[] = [
  // Services & Pricing
  {
    id: '1',
    question: 'Quels sont vos tarifs pour le marketing digital au Luxembourg ?',
    answer: 'Nos tarifs varient selon vos besoins spécifiques. Pour le SEO, comptez entre 1 500-3 000€/mois selon la complexité. Les campagnes Google Ads démarrent à 800€/mois + budget publicitaire. Pour une consultation gratuite et un devis personnalisé, contactez-nous. Nous adaptons nos prix au marché luxembourgeois tout en garantissant un ROI mesurable.',
    category: 'Tarifs',
    popular: true
  },
  {
    id: '2',
    question: 'Combien de temps faut-il pour voir des résultats SEO au Luxembourg ?',
    answer: 'Au Luxembourg, les premiers résultats SEO apparaissent généralement après 3-4 mois pour un marché local aussi concurrentiel. Pour les mots-clés très compétitifs comme "banque Luxembourg" ou "services financiers", comptez 6-8 mois. Nous fournissons des rapports mensuels détaillés pour suivre les progrès et ajuster la stratégie.',
    category: 'SEO',
    popular: true
  },
  {
    id: '3',
    question: 'Proposez-vous des contrats sans engagement ?',
    answer: 'Oui, nous proposons des missions ponctuelles et des contrats flexibles. Cependant, pour des résultats optimaux en marketing digital, nous recommandons un engagement minimum de 6 mois. Cela nous permet de déployer une stratégie complète et de mesurer son efficacité sur le marché luxembourgeois.',
    category: 'Tarifs',
    popular: true
  },
  {
    id: '4',
    question: 'Travaillez-vous avec des petites entreprises luxembourgeoises ?',
    answer: 'Absolument ! Nous accompagnons des entreprises de toutes tailles, des startups aux grandes corporations. Nous avons des offres spécialement adaptées aux PME luxembourgeoises, avec des packages modulaires et des budgets maîtrisés. Notre connaissance du tissu économique local nous permet de proposer des solutions pertinentes.',
    category: 'Services',
  },
  
  // Luxembourg Specific
  {
    id: '5',
    question: 'Connaissez-vous les spécificités du marché luxembourgeois ?',
    answer: 'Oui, nous sommes spécialisés dans le marché luxembourgeois depuis 5 ans. Nous maîtrisons les particularités locales : multilinguisme (français, allemand, anglais, luxembourgeois), réglementations spécifiques, habitudes de consommation, et écosystème d\'affaires. Notre équipe comprend les enjeux des secteurs clés : finance, tech, services.',
    category: 'Luxembourg',
    popular: true
  },
  {
    id: '6',
    question: 'Gérez-vous le marketing multilingue au Luxembourg ?',
    answer: 'Oui, nous créons des stratégies multilingues adaptées au Luxembourg. Nous optimisons vos contenus en français, anglais, allemand et luxembourgeois selon votre audience cible. Notre équipe maîtrise les nuances culturelles et linguistiques pour toucher efficacement les différentes communautés luxembourgeoises.',
    category: 'Luxembourg',
  },
  {
    id: '7',
    question: 'Travaillez-vous avec des entreprises de la Grande Région ?',
    answer: 'Oui, nous accompagnons des entreprises dans toute la Grande Région (Luxembourg, Lorraine, Sarre, Rhénanie-Palatinat, Wallonie). Notre expertise du marché luxembourgeois s\'étend naturellement aux zones frontalières. Nous adaptons nos stratégies aux spécificités transfrontalières et aux flux de travailleurs.',
    category: 'Luxembourg',
  },
  
  // Technical Questions
  {
    id: '8',
    question: 'Utilisez-vous des outils marketing spécialisés ?',
    answer: 'Nous utilisons les meilleurs outils du marché : Google Analytics 4, Search Console, SEMrush, Ahrefs pour le SEO, HubSpot pour l\'automation, Facebook Business Manager, LinkedIn Campaign Manager. Nous investissons dans les dernières technologies pour vous garantir des analyses précises et des optimisations continues.',
    category: 'Technique',
  },
  {
    id: '9',
    question: 'Proposez-vous la formation de nos équipes internes ?',
    answer: 'Oui, nous proposons des formations sur-mesure pour vos équipes : SEO, Google Ads, réseaux sociaux, marketing automation. Les formations peuvent être en présentiel dans vos locaux au Luxembourg ou en ligne. Nous adaptons le contenu à votre secteur d\'activité et niveau de compétence.',
    category: 'Services',
  },
  {
    id: '10',
    question: 'Garantissez-vous les résultats de vos campagnes ?',
    answer: 'Nous nous engageons sur des KPIs précis définis ensemble : augmentation du trafic, amélioration des positions SEO, réduction du coût par lead, etc. Bien qu\'aucune agence sérieuse ne puisse garantir des résultats absolus, nous nous engageons à atteindre les objectifs fixés contractuellement avec transparence totale.',
    category: 'Services',
  },
  
  // Process & Methodology
  {
    id: '11',
    question: 'Comment se déroule la première consultation ?',
    answer: 'La consultation gratuite de 45 minutes comprend : audit rapide de votre présence digitale actuelle, analyse de vos objectifs business, présentation des opportunités identifiées, proposition de stratégie préliminaire. Cette rencontre (présentiel au Luxembourg ou visio) nous permet de définir ensemble un plan d\'action adapté.',
    category: 'Process',
    popular: true
  },
  {
    id: '12',
    question: 'À quelle fréquence recevons-nous des rapports ?',
    answer: 'Nous fournissons des rapports mensuels détaillés incluant : évolution des positions SEO, performance des campagnes publicitaires, analyse du trafic et conversions, recommandations d\'optimisation. Des points de suivi hebdomadaires peuvent être organisés selon vos besoins. Accès 24/7 à vos données via tableaux de bord personnalisés.',
    category: 'Process',
  },
  {
    id: '13',
    question: 'Qui sera notre interlocuteur principal ?',
    answer: 'Un chef de projet dédié sera votre interlocuteur unique, supporté par notre équipe d\'experts spécialisés (SEO, PPC, Social Media, Design). Vous aurez accès direct à votre chef de projet par email, téléphone et Slack. Des réunions régulières sont programmées pour faire le point sur l\'avancement.',
    category: 'Process',
  },
  
  // Compliance & Legal
  {
    id: '14',
    question: 'Respectez-vous le RGPD dans vos campagnes ?',
    answer: 'Absolument. Toutes nos campagnes et outils respectent scrupuleusement le RGPD. Nous configurons correctement Google Analytics 4, implémentons les cookies conformément, créons des formulaires RGPD-compliant, et veillons à la protection des données de vos prospects. Formation RGPD incluse pour vos équipes.',
    category: 'Légal',
  },
  {
    id: '15',
    question: 'Avez-vous des certifications officielles ?',
    answer: 'Oui, notre équipe détient les certifications : Google Ads (Search, Display, Shopping), Google Analytics 4, Facebook Blueprint, HubSpot, LinkedIn Marketing. Nous sommes également membres de la Chambre de Commerce du Luxembourg et respectons les standards professionnels locaux.',
    category: 'Technique',
  },
  
  // Sector Specific
  {
    id: '16',
    question: 'Avez-vous de l\'expérience dans le secteur financier luxembourgeois ?',
    answer: 'Oui, nous travaillons avec plusieurs acteurs du secteur financier au Luxembourg : banques privées, fonds d\'investissement, fintech, assurances. Nous maîtrisons les réglementations strictes du secteur, les contraintes de communication financière et les enjeux de compliance. Expertise en marketing B2B ultra-ciblé.',
    category: 'Secteurs',
  },
  {
    id: '17',
    question: 'Accompagnez-vous les entreprises tech et startups ?',
    answer: 'Oui, nous sommes spécialisés dans l\'accompagnement des startups et scale-ups luxembourgeoises. Nous comprenons les enjeux de croissance rapide, les budgets contraints et la nécessité de prouver le ROI rapidement. Packages adaptés aux phases de développement et aux levées de fonds.',
    category: 'Secteurs',
  },
  
  // Competition & Market
  {
    id: '18',
    question: 'Comment vous différenciez-vous de vos concurrents ?',
    answer: 'Notre différenciation : expertise exclusive du marché luxembourgeois, équipe multilingue locale, approche data-driven avec ROI mesurable, transparence totale sur nos méthodes, accompagnement personnalisé. Nous privilégions les relations long-terme et les résultats durables plutôt que les promesses irréalistes.',
    category: 'Concurrence',
  },
  {
    id: '19',
    question: 'Pouvez-vous reprendre des campagnes existantes ?',
    answer: 'Oui, nous réalisons d\'abord un audit complet de vos campagnes actuelles (SEO, Google Ads, Social Media). Nous identifions les points d\'amélioration, optimisons les éléments performants et restructurons ce qui ne fonctionne pas. Transition en douceur pour éviter toute perte de performance.',
    category: 'Services',
  },
  
  // Emergency & Support
  {
    id: '20',
    question: 'Proposez-vous un support d\'urgence ?',
    answer: 'Oui, nous proposons un support prioritaire pour les situations critiques : problème technique sur votre site, piratage de comptes publicitaires, chute soudaine de trafic, gestion de crise sur les réseaux sociaux. Réactivité garantie sous 2h en semaine, astreinte weekend pour nos clients premium.',
    category: 'Support',
  }
];

const categories = ['Tous', 'Tarifs', 'Services', 'SEO', 'Luxembourg', 'Process', 'Technique', 'Secteurs', 'Légal', 'Support', 'Concurrence'];

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

const FAQPage = () => {
  const [selectedCategory, setSelectedCategory] = useState('Tous');
  const [searchQuery, setSearchQuery] = useState('');
  const [openFAQ, setOpenFAQ] = useState<string | null>(null);

  const filteredFAQs = faqs.filter(faq => {
    const matchesCategory = selectedCategory === 'Tous' || faq.category === selectedCategory;
    const matchesSearch = searchQuery === '' || 
      faq.question.toLowerCase().includes(searchQuery.toLowerCase()) ||
      faq.answer.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesCategory && matchesSearch;
  });

  const popularFAQs = faqs.filter(faq => faq.popular);

  const toggleFAQ = (id: string) => {
    setOpenFAQ(openFAQ === id ? null : id);
  };

  // FAQ Schema for SEO
  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": faqs.map(faq => ({
      "@type": "Question",
      "name": faq.question,
      "acceptedAnswer": {
        "@type": "Answer",
        "text": faq.answer
      }
    }))
  };

  // Breadcrumb Schema
  const breadcrumbSchema = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    "itemListElement": [
      {
        "@type": "ListItem",
        "position": 1,
        "name": "Accueil",
        "item": "https://wedid.lu"
      },
      {
        "@type": "ListItem",
        "position": 2,
        "name": "Ressources",
        "item": "https://wedid.lu/resources"
      },
      {
        "@type": "ListItem",
        "position": 3,
        "name": "FAQ",
        "item": "https://wedid.lu/resources/faq"
      }
    ]
  };

  return (
    <>
      <Head>
        <title>FAQ - Questions Fréquentes Marketing Digital Luxembourg | Wedid</title>
        <meta name="description" content="Trouvez les réponses à vos questions sur le marketing digital au Luxembourg. Tarifs, services SEO, délais, spécificités du marché luxembourgeois et plus." />
        <meta name="keywords" content="FAQ marketing digital Luxembourg, questions agence marketing Luxembourg, tarifs SEO Luxembourg, services marketing digital Luxembourg, Wedid FAQ" />
        <link rel="canonical" href="https://wedid.lu/resources/faq" />
        
        {/* Open Graph */}
        <meta property="og:title" content="FAQ - Questions Fréquentes Marketing Digital Luxembourg | Wedid" />
        <meta property="og:description" content="Trouvez les réponses à vos questions sur le marketing digital au Luxembourg. Tarifs, services SEO, délais et spécificités du marché luxembourgeois." />
        <meta property="og:url" content="https://wedid.lu/resources/faq" />
        <meta property="og:type" content="website" />
        <meta property="og:image" content="https://wedid.lu/images/faq-og-image.jpg" />
        
        {/* Twitter */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="FAQ Marketing Digital Luxembourg | Wedid" />
        <meta name="twitter:description" content="Questions fréquentes sur le marketing digital au Luxembourg. Trouvez rapidement vos réponses." />
        <meta name="twitter:image" content="https://wedid.lu/images/faq-og-image.jpg" />
        
        {/* Structured Data */}
        <script 
          type="application/ld+json"
          dangerouslySetInnerHTML={{ 
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@graph": [faqSchema, breadcrumbSchema]
            })
          }}
        />
      </Head>
      
      <div className="min-h-screen bg-white">
        {/* Hero Section */}
      <section className="relative min-h-[60vh] flex items-center justify-center overflow-hidden pt-20">
        <div 
          className="absolute inset-0 bg-cover bg-center bg-no-repeat"
          style={{
            backgroundImage: `url('https://images.unsplash.com/photo-1434626881859-194d67b2b86f?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2074&q=80')`
          }}
        />
        <div className="absolute inset-0 bg-gray-900/75"></div>
        
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center text-white">
          <motion.div
            initial="hidden"
            animate="visible"
            variants={staggerChildren}
          >
            <motion.div variants={fadeInUp} className="mb-8">
              <span className="inline-block bg-brand text-gray-900 px-4 py-2 rounded-full text-sm font-semibold mb-8">
                ❓ FOIRE AUX QUESTIONS
              </span>
            </motion.div>
            
            <motion.h1 variants={fadeInUp} className="text-5xl md:text-6xl font-bold mb-8 max-w-4xl mx-auto leading-tight">
              Questions{' '}
              <span className="text-brand">
                Fréquentes
              </span>
            </motion.h1>
            
            <motion.p variants={fadeInUp} className="text-xl mb-12 max-w-3xl mx-auto text-gray-200 leading-relaxed">
              Trouvez rapidement les réponses à vos questions sur nos services marketing digital 
              et les spécificités du marché luxembourgeois.
            </motion.p>
          </motion.div>
        </div>
      </section>

      {/* Search */}
      <section className="py-12 bg-gray-50 border-b border-gray-200">
        <div className="max-w-4xl mx-auto px-6">
          <div className="relative">
            <input
              type="text"
              placeholder="Rechercher dans les questions fréquentes..."
              className="w-full pl-12 pr-4 py-4 border border-gray-300 rounded-lg focus:ring-2 focus:ring-brand focus:border-transparent transition-all text-lg"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
            />
            <div className="absolute left-4 top-1/2 transform -translate-y-1/2">
              <svg className="h-6 w-6 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
              </svg>
            </div>
          </div>
        </div>
      </section>

      {/* Popular FAQs */}
      {selectedCategory === 'Tous' && !searchQuery && (
        <section className="py-24 bg-white">
          <div className="max-w-4xl mx-auto px-6">
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={staggerChildren}
              className="text-center mb-16"
            >
              <motion.div variants={fadeInUp} className="mb-6">
                <span className="inline-block bg-brand text-gray-900 px-4 py-2 rounded-full text-sm font-bold mb-8">
                  QUESTIONS POPULAIRES
                </span>
              </motion.div>
              <motion.h2 variants={fadeInUp} className="text-4xl md:text-5xl font-bold mb-6 text-gray-900">
                Les Plus Consultées
              </motion.h2>
              <motion.p variants={fadeInUp} className="text-xl max-w-3xl mx-auto text-gray-600 leading-relaxed">
                Les questions les plus fréquemment posées par nos clients luxembourgeois.
              </motion.p>
            </motion.div>

            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={staggerChildren}
              className="space-y-4"
            >
              {popularFAQs.map((faq) => (
                <motion.div
                  key={faq.id}
                  variants={fadeInUp}
                  className="bg-gray-50 rounded-2xl border border-gray-200 overflow-hidden"
                >
                  <button
                    onClick={() => toggleFAQ(faq.id)}
                    className="w-full px-8 py-6 text-left hover:bg-gray-100 transition-colors focus:outline-none focus:bg-gray-100"
                  >
                    <div className="flex items-center justify-between">
                      <div className="flex items-center space-x-4">
                        <span className="bg-brand text-gray-900 px-3 py-1 rounded-full text-sm font-semibold">
                          {faq.category}
                        </span>
                        <h3 className="text-lg font-semibold text-gray-900 flex-1">
                          {faq.question}
                        </h3>
                      </div>
                      <motion.div
                        animate={{ rotate: openFAQ === faq.id ? 180 : 0 }}
                        transition={{ duration: 0.2 }}
                      >
                        <svg className="h-5 w-5 text-gray-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                        </svg>
                      </motion.div>
                    </div>
                  </button>
                  
                  <AnimatePresence>
                    {openFAQ === faq.id && (
                      <motion.div
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: 'auto', opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        transition={{ duration: 0.3, ease: "easeInOut" }}
                        className="overflow-hidden"
                      >
                        <div className="px-8 pb-6">
                          <p className="text-gray-700 leading-relaxed">
                            {faq.answer}
                          </p>
                        </div>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </motion.div>
              ))}
            </motion.div>
          </div>
        </section>
      )}

      {/* Category Filter */}
      <section className="py-12 bg-gray-50 border-b border-gray-200">
        <div className="max-w-6xl mx-auto px-6">
          <div className="flex flex-wrap gap-3 justify-center">
            {categories.map((category) => (
              <button
                key={category}
                onClick={() => setSelectedCategory(category)}
                className={`px-6 py-3 rounded-full font-medium transition-all ${
                  selectedCategory === category
                    ? 'bg-brand text-gray-900 shadow-lg'
                    : 'bg-white text-gray-600 hover:bg-gray-100'
                }`}
              >
                {category}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* All FAQs */}
      <section className="py-24 bg-white">
        <div className="max-w-4xl mx-auto px-6">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={staggerChildren}
          >
            <motion.div variants={fadeInUp} className="mb-12">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
                {selectedCategory === 'Tous' ? 'Toutes les Questions' : `Questions : ${selectedCategory}`}
                {searchQuery && ` (${filteredFAQs.length} résultats pour "${searchQuery}")`}
              </h2>
              <p className="text-gray-600">
                {filteredFAQs.length} question{filteredFAQs.length > 1 ? 's' : ''} {selectedCategory !== 'Tous' && `dans ${selectedCategory}`}
              </p>
            </motion.div>

            <motion.div variants={staggerChildren} className="space-y-4">
              {filteredFAQs.map((faq) => (
                <motion.div
                  key={faq.id}
                  variants={fadeInUp}
                  className="bg-white rounded-2xl border border-gray-200 shadow-sm hover:shadow-md transition-all duration-300 overflow-hidden"
                >
                  <button
                    onClick={() => toggleFAQ(faq.id)}
                    className="w-full px-8 py-6 text-left hover:bg-gray-50 transition-colors focus:outline-none focus:bg-gray-50"
                  >
                    <div className="flex items-center justify-between">
                      <div className="flex items-start space-x-4 flex-1">
                        <span className="bg-brand text-gray-900 px-3 py-1 rounded-full text-sm font-semibold flex-shrink-0">
                          {faq.category}
                        </span>
                        <h3 className="text-lg font-semibold text-gray-900 text-left">
                          {faq.question}
                        </h3>
                      </div>
                      <motion.div
                        animate={{ rotate: openFAQ === faq.id ? 180 : 0 }}
                        transition={{ duration: 0.2 }}
                        className="flex-shrink-0 ml-4"
                      >
                        <svg className="h-5 w-5 text-gray-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                        </svg>
                      </motion.div>
                    </div>
                  </button>
                  
                  <AnimatePresence>
                    {openFAQ === faq.id && (
                      <motion.div
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: 'auto', opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        transition={{ duration: 0.3, ease: "easeInOut" }}
                        className="overflow-hidden"
                      >
                        <div className="px-8 pb-6 border-t border-gray-100">
                          <p className="text-gray-700 leading-relaxed pt-6">
                            {faq.answer}
                          </p>
                        </div>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </motion.div>
              ))}
            </motion.div>

            {filteredFAQs.length === 0 && (
              <motion.div
                variants={fadeInUp}
                className="text-center py-16"
              >
                <div className="text-6xl mb-4">❓</div>
                <h3 className="text-2xl font-bold text-gray-900 mb-2">Aucune question trouvée</h3>
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
                  Voir toutes les questions
                </button>
              </motion.div>
            )}
          </motion.div>
        </div>
      </section>

      {/* Contact Section */}
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
                QUESTION SPÉCIFIQUE ?
              </span>
            </motion.div>
            <motion.h2 variants={fadeInUp} className="text-4xl md:text-5xl font-bold mb-6 text-gray-900">
              Vous n'avez pas trouvé{' '}
              <span className="text-brand">
                votre réponse
              </span> ?
            </motion.h2>
            <motion.p variants={fadeInUp} className="text-xl mb-10 text-gray-600 leading-relaxed">
              Notre équipe d'experts est là pour répondre à toutes vos questions spécifiques 
              sur le marketing digital au Luxembourg.
            </motion.p>
            
            <motion.div variants={fadeInUp} className="grid md:grid-cols-3 gap-8 mb-12">
              <div className="text-center">
                <div className="w-16 h-16 bg-brand rounded-full flex items-center justify-center mx-auto mb-4">
                  <svg className="h-8 w-8 text-gray-900" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                  </svg>
                </div>
                <h3 className="text-lg font-bold text-gray-900 mb-2">Téléphone</h3>
                <p className="text-gray-600">+352 12 34 56 789</p>
                <p className="text-sm text-gray-500">Lun-Ven 9h-18h</p>
              </div>
              
              <div className="text-center">
                <div className="w-16 h-16 bg-brand rounded-full flex items-center justify-center mx-auto mb-4">
                  <svg className="h-8 w-8 text-gray-900" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 4.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                  </svg>
                </div>
                <h3 className="text-lg font-bold text-gray-900 mb-2">Email</h3>
                <p className="text-gray-600">hello@wedid.lu</p>
                <p className="text-sm text-gray-500">Réponse sous 24h</p>
              </div>
              
              <div className="text-center">
                <div className="w-16 h-16 bg-brand rounded-full flex items-center justify-center mx-auto mb-4">
                  <svg className="h-8 w-8 text-gray-900" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z" />
                  </svg>
                </div>
                <h3 className="text-lg font-bold text-gray-900 mb-2">Live Chat</h3>
                <p className="text-gray-600">Chat en direct</p>
                <p className="text-sm text-gray-500">Disponible 9h-18h</p>
              </div>
            </motion.div>
            
            <motion.div variants={fadeInUp} className="flex flex-col md:flex-row gap-4 justify-center">
              <Link
                href="/consultation-gratuite"
                className="bg-brand text-gray-900 px-10 py-4 rounded-lg font-bold text-lg shadow-lg hover:shadow-xl transition-all duration-300"
              >
                Consultation Gratuite →
              </Link>
              <Link
                href="/contact"
                className="border-2 border-gray-900 text-gray-900 px-10 py-4 rounded-lg font-bold hover:bg-gray-900 hover:text-white transition-all duration-300"
              >
                Nous Contacter
              </Link>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Quick Actions */}
      <section className="py-16 bg-gray-900">
        <div className="max-w-6xl mx-auto px-6">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={staggerChildren}
            className="text-center"
          >
            <motion.h3 variants={fadeInUp} className="text-3xl font-bold text-white mb-8">
              Actions Rapides
            </motion.h3>
            
            <motion.div variants={staggerChildren} className="grid md:grid-cols-4 gap-6">
              <motion.div variants={fadeInUp}>
                <Link
                  href="/resources/guides"
                  className="block p-6 bg-gray-800 rounded-lg hover:bg-gray-700 transition-colors"
                >
                  <div className="text-3xl mb-3">📚</div>
                  <h4 className="font-bold text-white mb-2">Guides Gratuits</h4>
                  <p className="text-gray-300 text-sm">Télécharger nos ressources</p>
                </Link>
              </motion.div>
              
              <motion.div variants={fadeInUp}>
                <Link
                  href="/resources/tools"
                  className="block p-6 bg-gray-800 rounded-lg hover:bg-gray-700 transition-colors"
                >
                  <div className="text-3xl mb-3">🛠️</div>
                  <h4 className="font-bold text-white mb-2">Outils Gratuits</h4>
                  <p className="text-gray-300 text-sm">Calculateurs et audits</p>
                </Link>
              </motion.div>
              
              <motion.div variants={fadeInUp}>
                <Link
                  href="/resources/blog"
                  className="block p-6 bg-gray-800 rounded-lg hover:bg-gray-700 transition-colors"
                >
                  <div className="text-3xl mb-3">📝</div>
                  <h4 className="font-bold text-white mb-2">Blog</h4>
                  <p className="text-gray-300 text-sm">Articles et conseils</p>
                </Link>
              </motion.div>
              
              <motion.div variants={fadeInUp}>
                <Link
                  href="/services"
                  className="block p-6 bg-gray-800 rounded-lg hover:bg-gray-700 transition-colors"
                >
                  <div className="text-3xl mb-3">🚀</div>
                  <h4 className="font-bold text-white mb-2">Nos Services</h4>
                  <p className="text-gray-300 text-sm">Découvrir notre offre</p>
                </Link>
              </motion.div>
            </motion.div>
          </motion.div>
        </div>
      </section>
      </div>
    </>
  );
};

export default FAQPage;