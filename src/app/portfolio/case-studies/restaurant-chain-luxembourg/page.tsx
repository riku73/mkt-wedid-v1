'use client';

import { motion, Variants } from 'framer-motion';
import Link from 'next/link';
import { ArrowLeft, MapPin, ShoppingCart, Smartphone, TrendingUp } from 'lucide-react';

const caseStudyData = {
  title: "E-commerce & Marketing Local pour Chaîne de Restaurants",
  client: "Les Saveurs du Luxembourg",
  industry: "Restauration & Food Service",
  projectType: "E-commerce + SEO Local + Social Media Marketing",
  duration: "6 mois",
  budget: "€45,000 - €65,000",
  year: "2023",
  heroImage: "https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80",
  challenge: {
    title: "Réinventer l'Expérience Client Post-COVID",
    description: "Les Saveurs du Luxembourg, chaîne de 4 restaurants traditionnels, a dû rapidement s'adapter aux nouvelles habitudes de consommation post-COVID avec la montée en puissance de la livraison et du click & collect.",
    problems: [
      "Aucune présence e-commerce pour les commandes en ligne",
      "Dépendance totale aux plateformes tierces (Deliveroo, Uber Eats)",
      "Perte de marge importante (30%) sur les commissions",
      "Visibilité locale insuffisante sur Google Maps",
      "Communication incohérente entre les 4 établissements",
      "Clientèle vieillissante, difficulté à attirer les millennials"
    ]
  },
  solution: {
    title: "Écosystème Digital Omnicanal",
    description: "Nous avons développé une stratégie 360° combinant e-commerce propriétaire, optimisation SEO local, et activation social media pour créer une expérience client fluide online et offline.",
    strategies: [
      {
        title: "Plateforme E-commerce Native",
        description: "Développement d'un système de commande en ligne intégré avec gestion de stock temps réel",
        icon: "🛒"
      },
      {
        title: "SEO Local Multi-Établissements",
        description: "Optimisation Google My Business et stratégie de visibilité locale pour chaque restaurant",
        icon: "📍"
      },
      {
        title: "Social Media Branding",
        description: "Création de contenu engageant et campagnes ciblées pour rajeunir l'audience",
        icon: "📱"
      },
      {
        title: "Programme Fidélité Digital",
        description: "Mise en place d'un système de points et récompenses pour augmenter la rétention",
        icon: "⭐"
      }
    ]
  },
  metrics: [
    {
      label: "Commandes Online Mensuelles",
      before: "45 commandes",
      after: "250 commandes",
      improvement: "+450%",
      description: "Croissance explosive des ventes directes"
    },
    {
      label: "Chiffre d'Affaires Digital",
      before: "€3,200/mois",
      after: "€125,000/mois",
      improvement: "+3,800%",
      description: "Revenus e-commerce propriétaire"
    },
    {
      label: "Visibilité Google Maps",
      before: "2,800 recherches",
      after: "11,200 recherches",
      improvement: "+300%",
      description: "Impressions sur recherches locales"
    },
    {
      label: "Audience Social Media",
      before: "850 followers",
      after: "4,200 followers",
      improvement: "+395%",
      description: "Croissance organique Instagram/Facebook"
    },
    {
      label: "Panier Moyen Online",
      before: "€18",
      after: "€32",
      improvement: "+78%",
      description: "Optimisation upselling et recommandations"
    },
    {
      label: "Taux de Fidélisation",
      before: "12%",
      after: "38%",
      improvement: "+217%",
      description: "Clients effectuant plus de 3 commandes"
    }
  ],
  testimonial: {
    quote: "Wedid nous a littéralement sauvés pendant la crise COVID. Leur plateforme e-commerce nous a permis de maintenir notre activité et même de la développer. Aujourd'hui, 40% de notre chiffre d'affaires vient du digital, et nous ne dépendons plus des plateformes externes qui grignotaient nos marges.",
    author: "Sophie Laurent",
    position: "Directrice Générale",
    company: "Les Saveurs du Luxembourg",
    avatar: "https://images.unsplash.com/photo-1494790108755-2616b612b1e8?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1974&q=80"
  },
  timeline: [
    {
      phase: "Phase 1: Audit & Architecture",
      duration: "2 semaines",
      tasks: [
        "Audit des 4 établissements existants",
        "Analyse concurrentielle locale food service",
        "Étude UX/UI commande en ligne optimale",
        "Architecture technique e-commerce",
        "Définition stratégie omnicanale"
      ],
      deliverables: [
        "Audit complet multi-sites",
        "Architecture e-commerce",
        "Wireframes UX optimisées",
        "Stratégie marketing local"
      ]
    },
    {
      phase: "Phase 2: Développement Platform",
      duration: "8 semaines",
      tasks: [
        "Développement interface e-commerce responsive",
        "Intégration systèmes de paiement sécurisés",
        "Connexion POS existants",
        "Système de gestion commandes temps réel",
        "App mobile optimisée"
      ],
      deliverables: [
        "Plateforme e-commerce complète",
        "Interface administration",
        "Intégrations POS/Kitchen",
        "App mobile iOS/Android"
      ]
    },
    {
      phase: "Phase 3: SEO Local & Content",
      duration: "4 semaines",
      tasks: [
        "Optimisation 4 fiches Google My Business",
        "Création contenu local SEO-friendly",
        "Setup tracking et analytics",
        "Stratégie social media content",
        "Photographie produits professionnelle"
      ],
      deliverables: [
        "4 profils GMB optimisés",
        "Content strategy 6 mois",
        "Reportings analytics setup",
        "Banque d'images professionnelles"
      ]
    },
    {
      phase: "Phase 4: Launch & Optimisation",
      duration: "4 semaines",
      tasks: [
        "Campagne de lancement multi-canal",
        "Formation équipes utilisation plateforme",
        "Tests A/B parcours utilisateur",
        "Optimisation continue conversions",
        "Mise en place programme fidélité"
      ],
      deliverables: [
        "Campagne lancement 360°",
        "Formation équipes 4 restaurants",
        "Programme fidélité actif",
        "Dashboard performance en temps réel"
      ]
    }
  ],
  technologies: [
    "Shopify Plus", "React Native", "Node.js", "Stripe", "Google Maps API", 
    "Firebase", "Instagram API", "Mailchimp", "Google Analytics 4", "Hotjar"
  ],
  services: [
    "Développement E-commerce",
    "Application Mobile",
    "SEO Local Multi-Sites",
    "Social Media Marketing",
    "Photographie Produits",
    "Formation Équipes"
  ],
  locations: [
    { name: "Luxembourg-Ville Centre", address: "Rue du Fossé", revenue: "€45K/mois" },
    { name: "Kirchberg Business", address: "Avenue J.F. Kennedy", revenue: "€38K/mois" },
    { name: "Esch-sur-Alzette", address: "Place de l'Hôtel de Ville", revenue: "€28K/mois" },
    { name: "Differdange", address: "Avenue de la Liberté", revenue: "€22K/mois" }
  ]
};

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
      staggerChildren: 0.15,
      delayChildren: 0.1
    }
  }
};

const RestaurantCaseStudy = () => {
  return (
    <div className="min-h-screen bg-white">
      {/* Back Navigation */}
      <div className="fixed top-24 left-6 z-40">
        <Link 
          href="/portfolio"
          className="inline-flex items-center gap-2 bg-white/90 backdrop-blur-sm px-4 py-2 rounded-lg border border-gray-200 text-gray-700 hover:text-gray-900 hover:bg-white transition-all duration-300 shadow-md"
        >
          <ArrowLeft size={16} />
          Retour au Portfolio
        </Link>
      </div>

      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden pt-20">
        <div 
          className="absolute inset-0 bg-cover bg-center bg-no-repeat"
          style={{
            backgroundImage: `url('${caseStudyData.heroImage}')`
          }}
        />
        <div className="absolute inset-0 bg-gray-900/70"></div>
        
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-white">
          <motion.div
            initial="hidden"
            animate="visible"
            variants={staggerChildren}
            className="text-center"
          >
            <motion.div variants={fadeInUp} className="mb-6">
              <span className="inline-block bg-orange-500 text-white px-4 py-2 rounded-full text-sm font-bold mb-6">
                ÉTUDE DE CAS - {caseStudyData.industry.toUpperCase()}
              </span>
            </motion.div>
            
            <motion.h1 variants={fadeInUp} className="text-4xl md:text-6xl font-bold mb-8 max-w-5xl mx-auto leading-tight">
              {caseStudyData.title}
            </motion.h1>
            
            <motion.div variants={fadeInUp} className="grid md:grid-cols-4 gap-6 max-w-4xl mx-auto mb-12">
              <div className="bg-white/10 backdrop-blur-sm rounded-lg p-4 border border-white/20">
                <div className="text-sm text-gray-300 mb-1">Client</div>
                <div className="font-semibold">{caseStudyData.client}</div>
              </div>
              <div className="bg-white/10 backdrop-blur-sm rounded-lg p-4 border border-white/20">
                <div className="text-sm text-gray-300 mb-1">Durée</div>
                <div className="font-semibold">{caseStudyData.duration}</div>
              </div>
              <div className="bg-white/10 backdrop-blur-sm rounded-lg p-4 border border-white/20">
                <div className="text-sm text-gray-300 mb-1">Budget</div>
                <div className="font-semibold">{caseStudyData.budget}</div>
              </div>
              <div className="bg-white/10 backdrop-blur-sm rounded-lg p-4 border border-white/20">
                <div className="text-sm text-gray-300 mb-1">Établissements</div>
                <div className="font-semibold">4 Restaurants</div>
              </div>
            </motion.div>

            <motion.div variants={fadeInUp} className="flex flex-col md:flex-row gap-4 justify-center">
              <a 
                href="#results"
                className="bg-orange-500 text-white px-8 py-4 rounded-lg font-bold text-lg shadow-xl hover:shadow-2xl transition-all duration-300"
              >
                Voir les Résultats →
              </a>
              <a 
                href="/contact"
                className="text-white border-2 border-white px-8 py-4 rounded-lg hover:bg-white hover:text-gray-900 transition-all duration-300 font-semibold"
              >
                Restaurant ou Food Service ?
              </a>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Challenge Section */}
      <section className="py-24 bg-white">
        <div className="max-w-6xl mx-auto px-6">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={staggerChildren}
          >
            <motion.div variants={fadeInUp} className="mb-16">
              <span className="inline-block bg-red-100 text-red-800 px-4 py-2 rounded-full text-sm font-bold mb-6">
                🚨 CONTEXTE & DÉFIS
              </span>
              <h2 className="text-4xl md:text-5xl font-bold mb-8 text-gray-900">
                {caseStudyData.challenge.title}
              </h2>
              <p className="text-xl text-gray-600 leading-relaxed max-w-4xl">
                {caseStudyData.challenge.description}
              </p>
            </motion.div>

            <motion.div variants={fadeInUp} className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {caseStudyData.challenge.problems.map((problem, index) => (
                <div key={index} className="bg-red-50 border border-red-200 rounded-xl p-6">
                  <div className="flex items-start gap-3">
                    <div className="w-6 h-6 rounded-full bg-red-200 flex items-center justify-center flex-shrink-0 mt-1">
                      <div className="w-2 h-2 rounded-full bg-red-600"></div>
                    </div>
                    <p className="text-gray-800 font-medium leading-relaxed">{problem}</p>
                  </div>
                </div>
              ))}
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Locations Overview */}
      <section className="py-24 bg-gray-50">
        <div className="max-w-6xl mx-auto px-6">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={staggerChildren}
          >
            <motion.div variants={fadeInUp} className="text-center mb-16">
              <span className="inline-block bg-blue-100 text-blue-800 px-4 py-2 rounded-full text-sm font-bold mb-6">
                📍 IMPLANTATIONS LUXEMBOURG
              </span>
              <h2 className="text-4xl md:text-5xl font-bold mb-8 text-gray-900">
                4 Restaurants, 1 Stratégie Unifiée
              </h2>
              <p className="text-xl text-gray-600 leading-relaxed max-w-4xl mx-auto">
                Chaque établissement a ses spécificités locales, mais tous bénéficient d'une stratégie digitale cohérente 
                et d'une plateforme e-commerce centralisée.
              </p>
            </motion.div>

            <motion.div variants={fadeInUp} className="grid md:grid-cols-2 gap-8">
              {caseStudyData.locations.map((location, index) => (
                <div key={index} className="bg-white rounded-2xl p-8 shadow-lg border border-gray-100">
                  <div className="flex items-start justify-between mb-4">
                    <div>
                      <h3 className="text-xl font-bold text-gray-900 mb-2">{location.name}</h3>
                      <div className="flex items-center gap-2 text-gray-600">
                        <MapPin size={16} />
                        <span>{location.address}</span>
                      </div>
                    </div>
                    <div className="text-right">
                      <div className="text-2xl font-bold text-orange-600">{location.revenue}</div>
                      <div className="text-sm text-gray-600">Revenus/mois</div>
                    </div>
                  </div>
                  <div className="bg-orange-50 rounded-lg p-4">
                    <div className="text-sm text-orange-800 font-medium">Performance Post-Lancement</div>
                    <div className="text-xs text-orange-600 mt-1">
                      Intégration e-commerce + optimisation SEO local + social media ciblé
                    </div>
                  </div>
                </div>
              ))}
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Solution Section */}
      <section className="py-24 bg-white">
        <div className="max-w-6xl mx-auto px-6">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={staggerChildren}
          >
            <motion.div variants={fadeInUp} className="mb-16 text-center">
              <span className="inline-block bg-green-100 text-green-800 px-4 py-2 rounded-full text-sm font-bold mb-6">
                ✅ NOTRE APPROCHE
              </span>
              <h2 className="text-4xl md:text-5xl font-bold mb-8 text-gray-900">
                {caseStudyData.solution.title}
              </h2>
              <p className="text-xl text-gray-600 leading-relaxed max-w-4xl mx-auto">
                {caseStudyData.solution.description}
              </p>
            </motion.div>

            <motion.div variants={fadeInUp} className="grid md:grid-cols-2 gap-8">
              {caseStudyData.solution.strategies.map((strategy, index) => (
                <div key={index} className="bg-white rounded-2xl p-8 shadow-lg border border-gray-100">
                  <div className="text-4xl mb-4">{strategy.icon}</div>
                  <h3 className="text-2xl font-bold mb-4 text-gray-900">{strategy.title}</h3>
                  <p className="text-gray-600 leading-relaxed">{strategy.description}</p>
                </div>
              ))}
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Results Section */}
      <section id="results" className="py-24 bg-gray-50">
        <div className="max-w-7xl mx-auto px-6">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={staggerChildren}
          >
            <motion.div variants={fadeInUp} className="text-center mb-16">
              <span className="inline-block bg-brand text-gray-900 px-4 py-2 rounded-full text-sm font-bold mb-6">
                📈 RÉSULTATS OBTENUS
              </span>
              <h2 className="text-4xl md:text-5xl font-bold mb-8 text-gray-900">
                Une Croissance Spectaculaire
              </h2>
              <p className="text-xl text-gray-600 leading-relaxed max-w-4xl mx-auto">
                En 6 mois, Les Saveurs du Luxembourg est devenue une référence en matière de digitalisation 
                dans le secteur de la restauration luxembourgeoise, avec des résultats qui dépassent toutes les attentes.
              </p>
            </motion.div>

            <motion.div variants={fadeInUp} className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {caseStudyData.metrics.map((metric, index) => (
                <div key={index} className="bg-white rounded-2xl p-8 border border-gray-200">
                  <div className="mb-6">
                    <h4 className="text-lg font-bold text-gray-900 mb-2">{metric.label}</h4>
                    <div className="flex items-center gap-4 mb-2">
                      <div className="text-sm text-gray-600">
                        Avant: <span className="font-semibold text-gray-800">{metric.before}</span>
                      </div>
                      <div className="text-2xl">→</div>
                      <div className="text-sm text-gray-600">
                        Après: <span className="font-semibold text-gray-800">{metric.after}</span>
                      </div>
                    </div>
                    <div className="text-3xl font-bold text-orange-600 mb-2">{metric.improvement}</div>
                    <p className="text-sm text-gray-600 leading-relaxed">{metric.description}</p>
                  </div>
                </div>
              ))}
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Testimonial Section */}
      <section className="py-24 bg-orange-600">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={staggerChildren}
          >
            <motion.div variants={fadeInUp} className="mb-12">
              <span className="inline-block bg-white text-orange-600 px-4 py-2 rounded-full text-sm font-bold mb-8">
                💬 TÉMOIGNAGE CLIENT
              </span>
              <blockquote className="text-2xl md:text-3xl font-bold text-white leading-relaxed mb-8">
                "{caseStudyData.testimonial.quote}"
              </blockquote>
            </motion.div>

            <motion.div variants={fadeInUp} className="flex items-center justify-center gap-4">
              <img 
                src={caseStudyData.testimonial.avatar}
                alt={caseStudyData.testimonial.author}
                className="w-16 h-16 rounded-full object-cover"
              />
              <div className="text-left">
                <div className="font-bold text-white">{caseStudyData.testimonial.author}</div>
                <div className="text-orange-100">{caseStudyData.testimonial.position}</div>
                <div className="text-white font-semibold">{caseStudyData.testimonial.company}</div>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 bg-gray-900">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={staggerChildren}
          >
            <motion.h2 variants={fadeInUp} className="text-4xl md:text-5xl font-bold mb-6 text-white">
              Votre Restaurant Mérite une{' '}
              <span className="text-brand">
                Transformation Digitale
              </span>
            </motion.h2>
            <motion.p variants={fadeInUp} className="text-xl mb-10 text-gray-200 leading-relaxed">
              Ne laissez plus les plateformes tierces grignoter vos marges. 
              Créons ensemble votre propre écosystème e-commerce rentable.
            </motion.p>
            <motion.div variants={fadeInUp} className="flex flex-col md:flex-row gap-4 justify-center">
              <Link 
                href="/contact"
                className="bg-brand text-gray-900 px-10 py-4 rounded-lg font-bold text-lg shadow-xl hover:shadow-2xl transition-all duration-300"
              >
                Digitaliser Mon Restaurant →
              </Link>
              <Link 
                href="/portfolio"
                className="text-white border-2 border-white px-10 py-4 rounded-lg hover:bg-white hover:text-gray-900 transition-all duration-300 font-bold"
              >
                Autres Projets Food Service
              </Link>
            </motion.div>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default RestaurantCaseStudy;