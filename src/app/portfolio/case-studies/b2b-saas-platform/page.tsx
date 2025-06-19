'use client';

import { motion, Variants } from 'framer-motion';
import Link from 'next/link';
import { ArrowLeft, DollarSign, Users, Target, BarChart3, Zap } from 'lucide-react';

const caseStudyData = {
  title: "Lancement et Croissance d'une Plateforme SaaS B2B",
  client: "ComplianceMax",
  industry: "SaaS & RegTech",
  projectType: "SaaS Marketing + Lead Generation + Content Strategy",
  duration: "12 mois",
  budget: "€95,000 - €140,000",
  year: "2022-2023",
  heroImage: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80",
  challenge: {
    title: "Lancer un SaaS dans un Marché Ultra-Spécialisé",
    description: "ComplianceMax développait une solution SaaS de gestion de conformité réglementaire pour les institutions financières luxembourgeoises. Le défi : pénétrer un marché B2B très fermé avec des cycles de vente longs et des décideurs difficiles à atteindre.",
    problems: [
      "Marché niche avec peu de prospects identifiés",
      "Cycle de vente très long (12-18 mois)",
      "Décideurs (CCO, CRO) difficiles à atteindre",
      "Concurrence établie avec solutions legacy",
      "Besoin de démontrer ROI et compliance",
      "Pas de notoriété de marque existante"
    ]
  },
  solution: {
    title: "Stratégie de Growth Hacking B2B Méthodique",
    description: "Nous avons développé une approche data-driven combinant thought leadership, lead nurturing sophistiqué, et démonstrations de valeur concrètes pour convertir un marché difficile.",
    strategies: [
      {
        title: "Content Marketing Expert",
        description: "Production de contenu ultra-spécialisé positioning ComplianceMax comme thought leader",
        icon: "📚"
      },
      {
        title: "Account-Based Marketing",
        description: "Ciblage précis des top 50 institutions financières avec messages personnalisés",
        icon: "🎯"
      },
      {
        title: "Freemium Strategy",
        description: "Offre d'audit gratuit et version freemium pour réduire les frictions d'adoption",
        icon: "🆓"
      },
      {
        title: "Social Selling LinkedIn",
        description: "Activation du CEO et CTO sur LinkedIn pour network et credibilité",
        icon: "💼"
      }
    ]
  },
  metrics: [
    {
      label: "MRR (Revenus Récurrents)",
      before: "€0",
      after: "€85,000",
      improvement: "∞",
      description: "Croissance MRR depuis le lancement"
    },
    {
      label: "Taux de Conversion Trial→Paid",
      before: "0%",
      after: "12.5%",
      improvement: "+1,250%",
      description: "Conversion freemium vers abonnement"
    },
    {
      label: "Customer LTV",
      before: "€0",
      after: "€24,000",
      improvement: "∞",
      description: "Valeur vie client moyenne"
    },
    {
      label: "CAC (Coût d'Acquisition)",
      before: "∞",
      after: "€1,850",
      improvement: "Optimisé",
      description: "Coût d'acquisition client optimisé"
    },
    {
      label: "Pipeline Qualifié",
      before: "0 prospects",
      after: "€2.4M",
      improvement: "∞",
      description: "Valeur du pipeline sales actif"
    },
    {
      label: "Taille Équipe",
      before: "3 fondateurs",
      after: "18 employés",
      improvement: "+500%",
      description: "Croissance équipe grâce aux revenus"
    }
  ],
  testimonial: {
    quote: "Wedid a transformé notre startup tech en une scale-up reconnue. Leur expertise du marketing B2B nous a permis d'atteindre 85K€ de MRR en 12 mois, avec une pipeline de 2.4M€. Ils comprennent vraiment les enjeux SaaS et RegTech.",
    author: "Dr. Thomas Weber",
    position: "CEO & Co-Founder",
    company: "ComplianceMax",
    avatar: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80"
  },
  saasMetrics: {
    title: "Métriques SaaS en Temps Réel",
    metrics: [
      { label: "ARR", value: "€1,020,000", trend: "+340%" },
      { label: "Churn Rate", value: "2.1%", trend: "Excellent" },
      { label: "NPS Score", value: "67", trend: "+45pts" },
      { label: "CAC Payback", value: "8 mois", trend: "Optimisé" }
    ]
  },
  timeline: [
    {
      phase: "Phase 1: Market Research & Strategy",
      duration: "4 semaines",
      tasks: [
        "Analyse approfondie marché RegTech Luxembourg",
        "Mapping des 200 institutions financières cibles",
        "Interviews 25 compliance officers",
        "Définition ICP (Ideal Customer Profile)",
        "Competitive intelligence et positioning"
      ],
      deliverables: [
        "Market research complet 80 pages",
        "ICP détaillé avec personas",
        "Stratégie go-to-market",
        "Competitive analysis"
      ]
    },
    {
      phase: "Phase 2: Content & Thought Leadership",
      duration: "8 semaines",
      tasks: [
        "Production contenu expert (whitepapers, études)",
        "Setup blog et SEO strategy",
        "Webinaires et événements virtuels",
        "LinkedIn thought leadership campaign",
        "PR et relations médias spécialisés"
      ],
      deliverables: [
        "15 articles techniques expert",
        "3 whitepapers téléchargeables",
        "Série webinaires mensuels",
        "Strategic LinkedIn presence"
      ]
    },
    {
      phase: "Phase 3: Lead Generation Engine",
      duration: "6 semaines",
      tasks: [
        "Setup marketing automation HubSpot",
        "Création funnels de conversion multi-touch",
        "Account-based marketing campaigns",
        "Integration CRM et sales enablement",
        "A/B testing landing pages et emails"
      ],
      deliverables: [
        "Marketing automation complet",
        "5 funnels de conversion actifs",
        "ABM campaigns pour top 50 accounts",
        "Sales enablement materials"
      ]
    },
    {
      phase: "Phase 4: Scale & Optimization",
      duration: "Ongoing",
      tasks: [
        "Optimisation continue taux de conversion",
        "Expansion content marketing",
        "Partner channel development",
        "Customer success & retention",
        "International expansion preparation"
      ],
      deliverables: [
        "Optimisations ROI continues",
        "Partner program actif",
        "Customer success playbook",
        "International expansion strategy"
      ]
    }
  ],
  technologies: [
    "HubSpot Marketing", "Salesforce", "Intercom", "Mixpanel", "LinkedIn Sales Navigator", 
    "Typeform", "Calendly", "Webflow", "Google Analytics 4", "Hotjar", "Zapier"
  ],
  services: [
    "SaaS Marketing Strategy",
    "Account-Based Marketing",
    "Content Marketing B2B",
    "Lead Generation",
    "Marketing Automation",
    "Sales Enablement"
  ],
  customerBreakdown: [
    { segment: "Banques Privées", count: 12, arpu: "€8,500" },
    { segment: "Fonds d'Investissement", count: 8, arpu: "€12,000" },
    { segment: "Family Offices", count: 15, arpu: "€4,200" },
    { segment: "Asset Managers", count: 6, arpu: "€15,800" }
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

const SaaSCaseStudy = () => {
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
        <div className="absolute inset-0 bg-gray-900/75"></div>
        
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-white">
          <motion.div
            initial="hidden"
            animate="visible"
            variants={staggerChildren}
            className="text-center"
          >
            <motion.div variants={fadeInUp} className="mb-6">
              <span className="inline-block bg-green-500 text-white px-4 py-2 rounded-full text-sm font-bold mb-6">
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
                <div className="text-sm text-gray-300 mb-1">MRR Atteint</div>
                <div className="font-semibold">€85,000</div>
              </div>
            </motion.div>

            <motion.div variants={fadeInUp} className="flex flex-col md:flex-row gap-4 justify-center">
              <a 
                href="#saas-metrics"
                className="bg-green-500 text-white px-8 py-4 rounded-lg font-bold text-lg shadow-xl hover:shadow-2xl transition-all duration-300"
              >
                Voir les Métriques SaaS →
              </a>
              <a 
                href="/contact"
                className="text-white border-2 border-white px-8 py-4 rounded-lg hover:bg-white hover:text-gray-900 transition-all duration-300 font-semibold"
              >
                Lancer Mon SaaS ?
              </a>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* SaaS Metrics Dashboard */}
      <section id="saas-metrics" className="py-24 bg-gray-50">
        <div className="max-w-6xl mx-auto px-6">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={staggerChildren}
          >
            <motion.div variants={fadeInUp} className="text-center mb-16">
              <span className="inline-block bg-green-100 text-green-800 px-4 py-2 rounded-full text-sm font-bold mb-6">
                📊 DASHBOARD SAAS
              </span>
              <h2 className="text-4xl md:text-5xl font-bold mb-8 text-gray-900">
                {caseStudyData.saasMetrics.title}
              </h2>
              <p className="text-xl text-gray-600 leading-relaxed max-w-4xl mx-auto">
                Les métriques SaaS qui comptent vraiment : de 0 à 1M€ d'ARR en 12 mois avec une stratégie marketing 
                data-driven et focus sur la qualité des leads B2B.
              </p>
            </motion.div>

            <motion.div variants={fadeInUp} className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
              {caseStudyData.saasMetrics.metrics.map((metric, index) => (
                <div key={index} className="bg-white rounded-2xl p-6 shadow-lg border border-gray-100">
                  <div className="text-3xl font-bold text-green-600 mb-2">{metric.value}</div>
                  <div className="text-lg font-semibold text-gray-900 mb-1">{metric.label}</div>
                  <div className="text-sm text-green-600 font-medium">{metric.trend}</div>
                </div>
              ))}
            </motion.div>

            {/* Customer Breakdown */}
            <motion.div variants={fadeInUp} className="bg-white rounded-2xl p-8 shadow-lg border border-gray-100">
              <h3 className="text-2xl font-bold mb-6 text-gray-900">Répartition Clientèle par Segment</h3>
              <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
                {caseStudyData.customerBreakdown.map((segment, index) => (
                  <div key={index} className="text-center p-4 bg-gray-50 rounded-lg">
                    <div className="text-2xl font-bold text-gray-900 mb-1">{segment.count}</div>
                    <div className="text-sm font-medium text-gray-700 mb-2">{segment.segment}</div>
                    <div className="text-green-600 font-semibold">{segment.arpu}/mois</div>
                  </div>
                ))}
              </div>
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
                🚨 DÉFIS SAAS B2B
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
                ✅ STRATÉGIE GROWTH HACKING
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
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={staggerChildren}
          >
            <motion.div variants={fadeInUp} className="text-center mb-16">
              <span className="inline-block bg-brand text-gray-900 px-4 py-2 rounded-full text-sm font-bold mb-6">
                📈 CROISSANCE EXPLOSIVE
              </span>
              <h2 className="text-4xl md:text-5xl font-bold mb-8 text-gray-900">
                De 0 à 1M€ d'ARR en 12 Mois
              </h2>
              <p className="text-xl text-gray-600 leading-relaxed max-w-4xl mx-auto">
                ComplianceMax est aujourd'hui la solution de référence pour la conformité réglementaire 
                au Luxembourg, avec une croissance qui dépasse toutes les projections initiales.
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
                    <div className="text-3xl font-bold text-green-600 mb-2">{metric.improvement}</div>
                    <p className="text-sm text-gray-600 leading-relaxed">{metric.description}</p>
                  </div>
                </div>
              ))}
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Testimonial Section */}
      <section className="py-24 bg-green-600">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={staggerChildren}
          >
            <motion.div variants={fadeInUp} className="mb-12">
              <span className="inline-block bg-white text-green-600 px-4 py-2 rounded-full text-sm font-bold mb-8">
                💬 TÉMOIGNAGE CEO
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
                <div className="text-green-100">{caseStudyData.testimonial.position}</div>
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
              Votre SaaS B2B Mérite une{' '}
              <span className="text-brand">
                Stratégie de Croissance
              </span>
            </motion.h2>
            <motion.p variants={fadeInUp} className="text-xl mb-10 text-gray-200 leading-relaxed">
              Ne laissez pas votre innovation technologique stagner faute de marketing. 
              Créons ensemble la machine de croissance qui transformera votre SaaS en success story.
            </motion.p>
            <motion.div variants={fadeInUp} className="flex flex-col md:flex-row gap-4 justify-center">
              <Link 
                href="/contact"
                className="bg-brand text-gray-900 px-10 py-4 rounded-lg font-bold text-lg shadow-xl hover:shadow-2xl transition-all duration-300"
              >
                Accélérer Mon SaaS →
              </Link>
              <Link 
                href="/portfolio"
                className="text-white border-2 border-white px-10 py-4 rounded-lg hover:bg-white hover:text-gray-900 transition-all duration-300 font-bold"
              >
                Autres Projets Tech
              </Link>
            </motion.div>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default SaaSCaseStudy;