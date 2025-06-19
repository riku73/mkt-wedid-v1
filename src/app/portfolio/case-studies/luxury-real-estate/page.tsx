'use client';

import { motion, Variants } from 'framer-motion';
import Link from 'next/link';
import { ArrowLeft, Home, Euro, Clock, MapPin } from 'lucide-react';

const caseStudyData = {
  title: "Site Web Premium pour Immobilier de Luxe",
  client: "Prestige Properties Luxembourg",
  industry: "Immobilier de Luxe",
  projectType: "Web Design Premium + SEO + Lead Generation",
  duration: "4 mois",
  budget: "€55,000 - €75,000",
  year: "2023",
  heroImage: "https://images.unsplash.com/photo-1560518883-ce09059eeffa?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2073&q=80",
  challenge: {
    title: "Digitaliser l'Immobilier de Prestige Luxembourgeois",
    description: "Prestige Properties Luxembourg, spécialisée dans l'immobilier haut de gamme (€1M+ par propriété), avait besoin d'une présence digitale à la hauteur de ses biens d'exception pour attirer une clientèle internationale exigeante.",
    problems: [
      "Site web obsolète ne reflétant pas le standing",
      "Aucune stratégie de lead generation qualifiée",
      "Visibilité limitée auprès des HNWI internationaux",
      "Processus de visite et contact peu professionnel",
      "Concurrence digitale des grandes enseignes",
      "Manque de trust signals pour rassurer l'international"
    ]
  },
  solution: {
    title: "Expérience Digitale Haut de Gamme",
    description: "Nous avons créé un écosystème digital premium combinant excellence du design, technologies de pointe, et stratégies marketing sophistiquées pour attirer et convertir une clientèle fortunée.",
    strategies: [
      {
        title: "Design Ultra-Premium",
        description: "Interface épurée et luxueuse avec photographies professionnelles et visites virtuelles 3D",
        icon: "✨"
      },
      {
        title: "Lead Scoring Avancé",
        description: "Qualification automatique des prospects selon leur capacité d'investissement",
        icon: "🎯"
      },
      {
        title: "SEO International",
        description: "Optimisation multilingue pour attirer les investisseurs européens et internationaux",
        icon: "🌍"
      },
      {
        title: "CRM Haut de Gamme",
        description: "Suivi personnalisé et nurturing sophistiqué pour chaque prospect qualifié",
        icon: "👔"
      }
    ]
  },
  metrics: [
    {
      label: "Valeur Moyenne Transaction",
      before: "€850,000",
      after: "€2,100,000",
      improvement: "+147%",
      description: "Attraction clientèle premium"
    },
    {
      label: "Leads Qualifiés",
      before: "8 demandes/mois",
      after: "23 demandes/mois",
      improvement: "+180%",
      description: "Prospects solvables et motivés"
    },
    {
      label: "Cycle de Vente",
      before: "14 mois",
      after: "9 mois",
      improvement: "-36%",
      description: "Réduction délai closing"
    },
    {
      label: "Taux de Conversion",
      before: "1.2%",
      after: "4.8%",
      improvement: "+300%",
      description: "Visiteurs vers demande d'info"
    },
    {
      label: "Trafic International",
      before: "15%",
      after: "52%",
      improvement: "+247%",
      description: "Visiteurs hors Luxembourg"
    },
    {
      label: "Commission Moyenne",
      before: "€25,500",
      after: "€63,000",
      improvement: "+147%",
      description: "Revenus par transaction"
    }
  ],
  testimonial: {
    quote: "Wedid a révolutionné notre approche commerciale. Notre nouveau site web attire une clientèle internationale de très haut niveau, et notre chiffre d'affaires a doublé en 8 mois. Les outils de qualification nous font gagner un temps précieux sur des prospects vraiment solvables.",
    author: "Alexander Von Habsburg",
    position: "Managing Director",
    company: "Prestige Properties Luxembourg",
    avatar: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80"
  },
  propertyTypes: [
    {
      type: "Penthouse Luxembourg-Ville",
      avgPrice: "€3.2M",
      leads: "8/mois",
      conversion: "25%"
    },
    {
      type: "Villa Kirchberg",
      avgPrice: "€2.8M",
      leads: "6/mois",
      conversion: "33%"
    },
    {
      type: "Château Campagne",
      avgPrice: "€4.5M",
      leads: "3/mois",
      conversion: "67%"
    },
    {
      type: "Loft Design Centre",
      avgPrice: "€1.9M",
      leads: "12/mois",
      conversion: "17%"
    }
  ],
  timeline: [
    {
      phase: "Phase 1: Audit & Design Strategy",
      duration: "3 semaines",
      tasks: [
        "Audit UX site existant et concurrence",
        "Interviews clients haut de gamme",
        "Benchmark luxe international (Londres, Monaco)",
        "Définition persona HNWI",
        "Direction artistique premium"
      ],
      deliverables: [
        "Audit UX complet",
        "Persona HNWI détaillé",
        "Moodboard et direction artistique",
        "Architecture information premium"
      ]
    },
    {
      phase: "Phase 2: Design & Development",
      duration: "8 semaines",
      tasks: [
        "Design UI haut de gamme",
        "Développement front-end custom",
        "Intégration CRM immobilier",
        "Système de gestion propriétés",
        "Module visites virtuelles 3D"
      ],
      deliverables: [
        "Site web premium responsive",
        "CRM immobilier intégré",
        "Visites virtuelles 3D",
        "Interface admin avancée"
      ]
    },
    {
      phase: "Phase 3: Content & SEO",
      duration: "3 semaines",
      tasks: [
        "Photographie professionnelle propriétés",
        "Copywriting immobilier luxury",
        "SEO technique et content",
        "Optimisation multilingue (FR/EN/DE)",
        "Setup tracking et analytics"
      ],
      deliverables: [
        "Banque images professionnelles",
        "Content strategy luxury",
        "SEO multilingue optimisé",
        "Analytics dashboard"
      ]
    },
    {
      phase: "Phase 4: Marketing & Launch",
      duration: "2 semaines",
      tasks: [
        "Campagne de lancement ciblée HNWI",
        "Formation équipe commerciale",
        "Setup lead scoring avancé",
        "Intégrations marketing automation",
        "Monitoring et optimisations"
      ],
      deliverables: [
        "Campagne lancement luxury",
        "Formation équipe commerciale",
        "Lead scoring actif",
        "Dashboard performance temps réel"
      ]
    }
  ],
  technologies: [
    "Next.js", "TypeScript", "Tailwind CSS", "Strapi CMS", "Matterport 3D", 
    "HubSpot CRM", "Google Analytics 4", "Hotjar", "Mailchimp", "Calendly Premium"
  ],
  services: [
    "Web Design Premium",
    "Développement Custom",
    "Photographie Immobilière",
    "SEO Multilingue",
    "Lead Generation HNWI",
    "Formation Équipe"
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

const RealEstateCaseStudy = () => {
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
        
        <div className="max-w-6xl mx-auto px-6 relative z-10 text-white">
          <motion.div
            initial="hidden"
            animate="visible"
            variants={staggerChildren}
            className="text-center"
          >
            <motion.div variants={fadeInUp} className="mb-6">
              <span className="inline-block bg-yellow-600 text-white px-4 py-2 rounded-full text-sm font-bold mb-6">
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
                <div className="text-sm text-gray-300 mb-1">Prix Moyen</div>
                <div className="font-semibold">€2.1M</div>
              </div>
            </motion.div>

            <motion.div variants={fadeInUp} className="flex flex-col md:flex-row gap-4 justify-center">
              <a 
                href="#results"
                className="bg-yellow-600 text-white px-8 py-4 rounded-lg font-bold text-lg shadow-xl hover:shadow-2xl transition-all duration-300"
              >
                Voir l'Impact Business →
              </a>
              <a 
                href="/contact"
                className="text-white border-2 border-white px-8 py-4 rounded-lg hover:bg-white hover:text-gray-900 transition-all duration-300 font-semibold"
              >
                Projet Immobilier ?
              </a>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Property Types Performance */}
      <section className="py-24 bg-gray-50">
        <div className="max-w-6xl mx-auto px-6">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={staggerChildren}
          >
            <motion.div variants={fadeInUp} className="text-center mb-16">
              <span className="inline-block bg-yellow-100 text-yellow-800 px-4 py-2 rounded-full text-sm font-bold mb-6">
                🏠 PERFORMANCE PAR SEGMENT
              </span>
              <h2 className="text-4xl md:text-5xl font-bold mb-8 text-gray-900">
                Portfolio Haut de Gamme
              </h2>
              <p className="text-xl text-gray-600 leading-relaxed max-w-4xl mx-auto">
                Analyse des performances de lead generation par type de propriété, 
                avec des résultats exceptionnels sur tous les segments premium.
              </p>
            </motion.div>

            <motion.div variants={fadeInUp} className="grid md:grid-cols-2 gap-8">
              {caseStudyData.propertyTypes.map((property, index) => (
                <div key={index} className="bg-white rounded-2xl p-8 shadow-lg border border-gray-100">
                  <div className="flex items-start justify-between mb-6">
                    <div>
                      <h3 className="text-xl font-bold text-gray-900 mb-2">{property.type}</h3>
                      <div className="flex items-center gap-2 text-gray-600">
                        <Euro size={16} />
                        <span className="text-2xl font-bold text-yellow-600">{property.avgPrice}</span>
                      </div>
                    </div>
                    <div className="text-right">
                      <div className="text-lg font-bold text-gray-900">{property.leads}</div>
                      <div className="text-sm text-gray-600">Leads/mois</div>
                    </div>
                  </div>
                  
                  <div className="bg-yellow-50 rounded-lg p-4">
                    <div className="flex items-center justify-between">
                      <span className="text-yellow-800 font-medium">Taux de Conversion</span>
                      <span className="text-2xl font-bold text-yellow-600">{property.conversion}</span>
                    </div>
                  </div>
                </div>
              ))}
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
                🚨 DÉFIS IMMOBILIER LUXURY
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

      {/* Solution Section */}
      <section className="py-24 bg-gray-50">
        <div className="max-w-6xl mx-auto px-6">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={staggerChildren}
          >
            <motion.div variants={fadeInUp} className="mb-16 text-center">
              <span className="inline-block bg-green-100 text-green-800 px-4 py-2 rounded-full text-sm font-bold mb-6">
                ✅ APPROCHE LUXURY
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
      <section id="results" className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={staggerChildren}
          >
            <motion.div variants={fadeInUp} className="text-center mb-16">
              <span className="inline-block bg-brand text-gray-900 px-4 py-2 rounded-full text-sm font-bold mb-6">
                📈 RÉSULTATS EXCEPTIONNELS
              </span>
              <h2 className="text-4xl md:text-5xl font-bold mb-8 text-gray-900">
                Un ROI Spectaculaire en 4 Mois
              </h2>
              <p className="text-xl text-gray-600 leading-relaxed max-w-4xl mx-auto">
                Prestige Properties Luxembourg a multiplié par 2 son chiffre d'affaires et attire désormais 
                une clientèle internationale fortunée grâce à son nouveau positionnement digital premium.
              </p>
            </motion.div>

            <motion.div variants={fadeInUp} className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {caseStudyData.metrics.map((metric, index) => (
                <div key={index} className="bg-gray-50 rounded-2xl p-8 border border-gray-200">
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
                    <div className="text-3xl font-bold text-yellow-600 mb-2">{metric.improvement}</div>
                    <p className="text-sm text-gray-600 leading-relaxed">{metric.description}</p>
                  </div>
                </div>
              ))}
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Testimonial Section */}
      <section className="py-24 bg-yellow-600">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={staggerChildren}
          >
            <motion.div variants={fadeInUp} className="mb-12">
              <span className="inline-block bg-white text-yellow-600 px-4 py-2 rounded-full text-sm font-bold mb-8">
                💬 TÉMOIGNAGE DIRIGEANT
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
                <div className="text-yellow-100">{caseStudyData.testimonial.position}</div>
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
              Votre Agence Immobilière Mérite une{' '}
              <span className="text-brand">
                Présence Premium
              </span>
            </motion.h2>
            <motion.p variants={fadeInUp} className="text-xl mb-10 text-gray-200 leading-relaxed">
              Attirez une clientèle fortunée et internationale avec une stratégie digitale 
              à la hauteur de vos propriétés d'exception.
            </motion.p>
            <motion.div variants={fadeInUp} className="flex flex-col md:flex-row gap-4 justify-center">
              <Link 
                href="/contact"
                className="bg-brand text-gray-900 px-10 py-4 rounded-lg font-bold text-lg shadow-xl hover:shadow-2xl transition-all duration-300"
              >
                Digitaliser Mon Immobilier →
              </Link>
              <Link 
                href="/portfolio"
                className="text-white border-2 border-white px-10 py-4 rounded-lg hover:bg-white hover:text-gray-900 transition-all duration-300 font-bold"
              >
                Autres Projets Luxury
              </Link>
            </motion.div>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default RealEstateCaseStudy;