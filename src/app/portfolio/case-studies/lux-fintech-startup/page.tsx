'use client';

import { motion, Variants } from 'framer-motion';
import Link from 'next/link';
import { ArrowLeft, ExternalLink, Target, TrendingUp, Users, Clock } from 'lucide-react';

interface Metric {
  label: string;
  before: string;
  after: string;
  improvement: string;
  description: string;
}

interface Testimonial {
  quote: string;
  author: string;
  position: string;
  company: string;
  avatar: string;
}

interface Timeline {
  phase: string;
  duration: string;
  tasks: string[];
  deliverables: string[];
}

const caseStudyData = {
  title: "Transformation Digitale Complète d'une Fintech Luxembourgeoise",
  client: "LuxFintech Solutions",
  industry: "Finance & Fintech",
  projectType: "Branding Complet + Développement Web + Marketing Digital",
  duration: "8 mois",
  budget: "€85,000 - €120,000",
  year: "2023",
  heroImage: "https://images.unsplash.com/photo-1563986768609-322da13575f3?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80",
  challenge: {
    title: "Le Défi",
    description: "LuxFintech Solutions, une startup prometteuse spécialisée dans les solutions de paiement crypto pour les institutions financières, avait besoin d'une transformation digitale complète pour se positionner comme leader sur le marché luxembourgeois et européen.",
    problems: [
      "Identité de marque inexistante et peu professionnelle",
      "Site web obsolète ne reflétant pas l'innovation technologique",
      "Absence totale de stratégie marketing digital",
      "Difficulté à générer des leads qualifiés B2B",
      "Manque de crédibilité face aux grands groupes financiers",
      "Communication technique peu accessible aux décideurs"
    ]
  },
  solution: {
    title: "Notre Approche Stratégique",
    description: "Nous avons développé une stratégie 360° combinant rebranding premium, développement d'une plateforme web innovante, et mise en place d'un écosystème marketing digital complet.",
    strategies: [
      {
        title: "Rebranding Premium",
        description: "Création d'une identité visuelle moderne et trustworthy pour le secteur financier",
        icon: "🎨"
      },
      {
        title: "Plateforme Web Innovante",
        description: "Développement d'un site institutionnel avec démonstrations interactives",
        icon: "💻"
      },
      {
        title: "Stratégie Content Marketing",
        description: "Positionnement thought leadership avec contenu éducatif spécialisé",
        icon: "📚"
      },
      {
        title: "Lead Generation B2B",
        description: "Mise en place de funnels de conversion ciblant les CFO et CTO",
        icon: "🎯"
      }
    ]
  },
  metrics: [
    {
      label: "Trafic Web Qualifié",
      before: "850 visiteurs/mois",
      after: "3,740 visiteurs/mois",
      improvement: "+340%",
      description: "Croissance organique grâce au SEO et content marketing"
    },
    {
      label: "Leads B2B Qualifiés",
      before: "3 demandes/mois",
      after: "11 demandes/mois",
      improvement: "+250%",
      description: "Prospects C-level des institutions financières"
    },
    {
      label: "Temps de Session",
      before: "1m 20s",
      after: "3m 45s",
      improvement: "+180%",
      description: "Engagement accru grâce à l'UX optimisée"
    },
    {
      label: "Taux de Conversion",
      before: "0.8%",
      after: "2.9%",
      improvement: "+262%",
      description: "Optimisation du funnel de conversion"
    },
    {
      label: "Valeur Moyenne Lead",
      before: "€15,000",
      after: "€45,000",
      improvement: "+200%",
      description: "Meilleure qualification et ciblage premium"
    },
    {
      label: "Cycle de Vente",
      before: "9 mois",
      after: "5.5 mois",
      improvement: "-39%",
      description: "Réduction grâce au trust et à la démonstration"
    }
  ],
  testimonial: {
    quote: "Wedid a transformé notre startup en une marque crédible et reconnue dans le secteur fintech luxembourgeois. Leur approche stratégique nous a permis de lever 8.5M€ en série A, avec un site web qui impressionne vraiment nos investisseurs et prospects institutional.",
    author: "Marc Dubois",
    position: "CEO & Co-Founder",
    company: "LuxFintech Solutions",
    avatar: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80"
  },
  timeline: [
    {
      phase: "Phase 1: Audit & Stratégie",
      duration: "3 semaines",
      tasks: [
        "Audit complet de l'existant",
        "Analyse concurrentielle fintech Luxembourg",
        "Interviews stakeholders internes",
        "Définition persona cible (CFO, CTO institutions)",
        "Stratégie de positionnement premium"
      ],
      deliverables: [
        "Audit rapport complet",
        "Stratégie brand & marketing",
        "Architecture information site",
        "Roadmap projet détaillée"
      ]
    },
    {
      phase: "Phase 2: Branding & Design",
      duration: "4 semaines",
      tasks: [
        "Création identité visuelle complète",
        "Développement charte graphique",
        "Design système complet",
        "Concepts direction créative",
        "Validation iterations avec équipe"
      ],
      deliverables: [
        "Brand guide complet 60 pages",
        "Logo variations et déclinaisons",
        "Typographie et couleurs",
        "Templates documents corporate"
      ]
    },
    {
      phase: "Phase 3: Développement Web",
      duration: "8 semaines",
      tasks: [
        "Architecture technique moderne",
        "Développement frontend React/Next.js",
        "Intégrations API démonstrations",
        "Optimisation performance et SEO",
        "Tests cross-browser et responsive"
      ],
      deliverables: [
        "Site web complet responsive",
        "CMS admin interface",
        "Démos produits interactives",
        "Dashboard analytics"
      ]
    },
    {
      phase: "Phase 4: Marketing Launch",
      duration: "4 semaines",
      tasks: [
        "Setup écosystème marketing digital",
        "Création contenu launch campaign",
        "Configuration tracking et analytics",
        "Formation équipe interne",
        "Lancement et monitoring initial"
      ],
      deliverables: [
        "Campagne de lancement",
        "Content marketing strategy",
        "Formation équipe 2 jours",
        "Reporting dashboard setup"
      ]
    }
  ],
  technologies: [
    "Next.js 14", "TypeScript", "Tailwind CSS", "Framer Motion", 
    "Strapi CMS", "Google Analytics 4", "HubSpot", "Figma", "Adobe Creative Suite"
  ],
  services: [
    "Audit & Stratégie Digitale",
    "Rebranding Complet",
    "Développement Web Premium",
    "Content Marketing Strategy",
    "Lead Generation B2B",
    "Formation Équipe Interne"
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

const FinTechCaseStudy = () => {
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
              <span className="inline-block bg-brand text-gray-900 px-4 py-2 rounded-full text-sm font-bold mb-6">
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
                <div className="text-sm text-gray-300 mb-1">Année</div>
                <div className="font-semibold">{caseStudyData.year}</div>
              </div>
            </motion.div>

            <motion.div variants={fadeInUp} className="flex flex-col md:flex-row gap-4 justify-center">
              <a 
                href="#results"
                className="bg-brand text-gray-900 px-8 py-4 rounded-lg font-bold text-lg shadow-xl hover:shadow-2xl transition-all duration-300"
              >
                Voir les Résultats →
              </a>
              <a 
                href="/contact"
                className="text-white border-2 border-white px-8 py-4 rounded-lg hover:bg-white hover:text-gray-900 transition-all duration-300 font-semibold"
              >
                Projet Similaire ?
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
                🚨 LE DÉFI
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
                ✅ NOTRE SOLUTION
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
                📈 RÉSULTATS OBTENUS
              </span>
              <h2 className="text-4xl md:text-5xl font-bold mb-8 text-gray-900">
                Des Résultats qui Parlent d'Eux-Mêmes
              </h2>
              <p className="text-xl text-gray-600 leading-relaxed max-w-4xl mx-auto">
                8 mois après le lancement, LuxFintech Solutions a non seulement atteint ses objectifs, 
                mais les a largement dépassés, devenant une référence dans le secteur fintech luxembourgeois.
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
                    <div className="text-3xl font-bold text-brand mb-2">{metric.improvement}</div>
                    <p className="text-sm text-gray-600 leading-relaxed">{metric.description}</p>
                  </div>
                </div>
              ))}
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Testimonial Section */}
      <section className="py-24 bg-gray-900">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={staggerChildren}
          >
            <motion.div variants={fadeInUp} className="mb-12">
              <span className="inline-block bg-brand text-gray-900 px-4 py-2 rounded-full text-sm font-bold mb-8">
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
                <div className="text-gray-300">{caseStudyData.testimonial.position}</div>
                <div className="text-brand font-semibold">{caseStudyData.testimonial.company}</div>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Timeline Section */}
      <section className="py-24 bg-white">
        <div className="max-w-6xl mx-auto px-6">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={staggerChildren}
          >
            <motion.div variants={fadeInUp} className="text-center mb-16">
              <span className="inline-block bg-blue-100 text-blue-800 px-4 py-2 rounded-full text-sm font-bold mb-6">
                ⏱️ TIMELINE PROJET
              </span>
              <h2 className="text-4xl md:text-5xl font-bold mb-8 text-gray-900">
                8 Mois de Transformation
              </h2>
              <p className="text-xl text-gray-600 leading-relaxed max-w-4xl mx-auto">
                Découvrez comment nous avons structuré ce projet d'envergure en 4 phases distinctes, 
                chacune avec ses objectifs spécifiques et ses livrables concrets.
              </p>
            </motion.div>

            <motion.div variants={fadeInUp} className="space-y-8">
              {caseStudyData.timeline.map((phase, index) => (
                <div key={index} className="bg-gray-50 rounded-2xl p-8 border border-gray-200">
                  <div className="flex flex-col lg:flex-row gap-8">
                    <div className="lg:w-1/3">
                      <div className="flex items-center gap-3 mb-4">
                        <div className="w-8 h-8 rounded-full bg-brand flex items-center justify-center text-gray-900 font-bold">
                          {index + 1}
                        </div>
                        <h3 className="text-xl font-bold text-gray-900">{phase.phase}</h3>
                      </div>
                      <div className="flex items-center gap-2 text-gray-600 mb-4">
                        <Clock size={16} />
                        <span className="font-semibold">{phase.duration}</span>
                      </div>
                    </div>
                    
                    <div className="lg:w-2/3 grid md:grid-cols-2 gap-6">
                      <div>
                        <h4 className="font-bold text-gray-900 mb-3">Tâches Principales</h4>
                        <ul className="space-y-2">
                          {phase.tasks.map((task, taskIndex) => (
                            <li key={taskIndex} className="flex items-start gap-2 text-gray-600">
                              <div className="w-1.5 h-1.5 rounded-full bg-gray-400 mt-2 flex-shrink-0"></div>
                              <span className="text-sm">{task}</span>
                            </li>
                          ))}
                        </ul>
                      </div>
                      
                      <div>
                        <h4 className="font-bold text-gray-900 mb-3">Livrables</h4>
                        <ul className="space-y-2">
                          {phase.deliverables.map((deliverable, delIndex) => (
                            <li key={delIndex} className="flex items-start gap-2 text-gray-600">
                              <div className="w-1.5 h-1.5 rounded-full bg-brand mt-2 flex-shrink-0"></div>
                              <span className="text-sm font-medium">{deliverable}</span>
                            </li>
                          ))}
                        </ul>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Tech Stack & Services */}
      <section className="py-24 bg-gray-50">
        <div className="max-w-6xl mx-auto px-6">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={staggerChildren}
            className="grid lg:grid-cols-2 gap-12"
          >
            {/* Technologies */}
            <motion.div variants={fadeInUp}>
              <h3 className="text-2xl font-bold mb-6 text-gray-900">Technologies Utilisées</h3>
              <div className="flex flex-wrap gap-3">
                {caseStudyData.technologies.map((tech, index) => (
                  <span key={index} className="px-4 py-2 bg-white border border-gray-200 rounded-lg text-gray-700 font-medium">
                    {tech}
                  </span>
                ))}
              </div>
            </motion.div>

            {/* Services */}
            <motion.div variants={fadeInUp}>
              <h3 className="text-2xl font-bold mb-6 text-gray-900">Services Fournis</h3>
              <div className="space-y-3">
                {caseStudyData.services.map((service, index) => (
                  <div key={index} className="flex items-center gap-3">
                    <div className="w-2 h-2 rounded-full bg-brand flex-shrink-0"></div>
                    <span className="font-medium text-gray-700">{service}</span>
                  </div>
                ))}
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
              Votre Fintech a Besoin d'une{' '}
              <span className="text-brand">
                Transformation Similaire
              </span> ?
            </motion.h2>
            <motion.p variants={fadeInUp} className="text-xl mb-10 text-gray-200 leading-relaxed">
              Discutons de votre projet et voyons comment nous pouvons reproduire ce succès 
              pour votre entreprise luxembourgeoise.
            </motion.p>
            <motion.div variants={fadeInUp} className="flex flex-col md:flex-row gap-4 justify-center">
              <Link 
                href="/contact"
                className="bg-brand text-gray-900 px-10 py-4 rounded-lg font-bold text-lg shadow-xl hover:shadow-2xl transition-all duration-300"
              >
                Discuter de Mon Projet →
              </Link>
              <Link 
                href="/portfolio"
                className="text-white border-2 border-white px-10 py-4 rounded-lg hover:bg-white hover:text-gray-900 transition-all duration-300 font-bold"
              >
                Voir d'Autres Projets
              </Link>
            </motion.div>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default FinTechCaseStudy;