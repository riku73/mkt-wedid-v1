'use client';

import { Metadata } from 'next';
import { motion, Variants } from 'framer-motion';
import Link from 'next/link';

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

const scaleOnHover: Variants = {
  rest: { scale: 1 },
  hover: { 
    scale: 1.05,
    transition: { 
      duration: 0.3,
      ease: "easeOut"
    }
  }
};

// Certifications data
const certifications = [
  {
    category: 'Google',
    logo: 'https://images.unsplash.com/photo-1573804633927-bfcbcd909acd?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2127&q=80',
    color: 'from-blue-500 to-green-500',
    certs: [
      {
        title: 'Google Ads Certified',
        description: 'Certification officielle Google pour la maîtrise des campagnes publicitaires Google Ads',
        level: 'Expert',
        date: '2023',
        badge: '🏆'
      },
      {
        title: 'Google Analytics Certified',
        description: 'Expertise en analyse de données et tracking des performances web',
        level: 'Advanced',
        date: '2023',
        badge: '📊'
      },
      {
        title: 'Google Marketing Platform',
        description: 'Maîtrise complète de la suite marketing Google pour les entreprises',
        level: 'Professional',
        date: '2022',
        badge: '🎯'
      }
    ]
  },
  {
    category: 'Meta Business',
    logo: 'https://images.unsplash.com/photo-1611162617474-5b21e879e113?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2074&q=80',
    color: 'from-blue-600 to-purple-600',
    certs: [
      {
        title: 'Meta Certified Marketing Science Professional',
        description: 'Expertise avancée en marketing science et measurement solutions Meta',
        level: 'Expert',
        date: '2023',
        badge: '🔬'
      },
      {
        title: 'Facebook Ads Manager Certified',
        description: 'Maîtrise complète de la création et optimisation de campagnes Facebook et Instagram',
        level: 'Advanced',
        date: '2022',
        badge: '📱'
      }
    ]
  },
  {
    category: 'HubSpot',
    logo: 'https://images.unsplash.com/photo-1560472355-536de3962603?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2126&q=80',
    color: 'from-orange-500 to-red-500',
    certs: [
      {
        title: 'HubSpot Inbound Marketing Certified',
        description: 'Stratégie inbound complète : attraction, conversion, closing et fidélisation',
        level: 'Professional',
        date: '2023',
        badge: '🧲'
      },
      {
        title: 'HubSpot Content Marketing Certified',
        description: 'Création et optimisation de contenus pour le marketing digital',
        level: 'Advanced',
        date: '2022',
        badge: '📝'
      },
      {
        title: 'HubSpot Sales Software Certified',
        description: 'Optimisation des processus de vente et CRM automation',
        level: 'Professional',
        date: '2022',
        badge: '💼'
      }
    ]
  },
  {
    category: 'Design & Development',
    logo: 'https://images.unsplash.com/photo-1581291518857-4e27b48ff24e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80',
    color: 'from-purple-500 to-pink-500',
    certs: [
      {
        title: 'Adobe Certified Expert (ACE)',
        description: 'Maîtrise avancée de la Creative Suite Adobe : Photoshop, Illustrator, InDesign',
        level: 'Expert',
        date: '2023',
        badge: '🎨'
      },
      {
        title: 'Google UX Design Certificate',
        description: 'Design d\'expérience utilisateur centré sur les besoins et la conversion',
        level: 'Professional',
        date: '2022',
        badge: '✨'
      },
      {
        title: 'AWS Certified Solutions Architect',
        description: 'Architecture et déploiement d\'applications web dans le cloud Amazon',
        level: 'Professional',
        date: '2023',
        badge: '☁️'
      }
    ]
  }
];

// Partners data
const partners = [
  {
    name: 'Google Premier Partner',
    logo: 'https://images.unsplash.com/photo-1573804633927-bfcbcd909acd?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2127&q=80',
    description: 'Statut Premier Partner officiel Google, reconnaissant notre expertise et nos performances exceptionnelles.',
    benefits: ['Accès privilégié aux bêta', 'Support technique prioritaire', 'Formation avancée continue']
  },
  {
    name: 'Meta Business Partner',
    logo: 'https://images.unsplash.com/photo-1611162617474-5b21e879e113?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2074&q=80',
    description: 'Partenaire officiel Meta pour accompagner les entreprises dans leur stratégie social media.',
    benefits: ['Accès aux nouvelles fonctionnalités', 'Support dédié Meta', 'Insights exclusifs']
  },
  {
    name: 'HubSpot Solutions Partner',
    logo: 'https://images.unsplash.com/photo-1560472355-536de3962603?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2126&q=80',
    description: 'Partenaire solutions HubSpot pour l\'implémentation et l\'optimisation de stratégies inbound.',
    benefits: ['Formations exclusives', 'Outils avancés', 'Support technique spécialisé']
  },
  {
    name: 'Vercel Partner',
    logo: 'https://images.unsplash.com/photo-1581291518857-4e27b48ff24e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80',
    description: 'Partenaire Vercel pour le déploiement de sites web ultra-performants et scalables.',
    benefits: ['Infrastructure premium', 'Support prioritaire', 'Analytics avancées']
  }
];

// Awards data
const awards = [
  {
    year: '2023',
    title: 'Agence Marketing Digital de l\'Année',
    organization: 'Luxembourg Digital Awards',
    description: 'Reconnaissance de notre excellence dans l\'accompagnement digital des entreprises luxembourgeoises.',
    icon: '🏆'
  },
  {
    year: '2023',
    title: 'Innovation Prize - Fintech Marketing',
    organization: 'Silicon Luxembourg',
    description: 'Prix de l\'innovation pour nos campagnes marketing dédiées au secteur fintech luxembourgeois.',
    icon: '🚀'
  },
  {
    year: '2022',
    title: 'Best Social Media Campaign',
    organization: 'European Marketing Awards',
    description: 'Campagne social media primée pour un client du secteur bancaire luxembourgeois.',
    icon: '📱'
  },
  {
    year: '2022',
    title: 'Excellence in SEO',
    organization: 'SEO Awards Europe',
    description: 'Reconnaissance pour nos performances exceptionnelles en référencement naturel.',
    icon: '🔍'
  }
];

const CertificationsPage = () => {
  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="relative pt-28 pb-20 px-4 sm:pt-32 sm:pb-24 sm:px-6 lg:pt-32 lg:pb-32 overflow-hidden">
        <div 
          className="absolute inset-0 bg-cover bg-center bg-no-repeat"
          style={{
            backgroundImage: `url('https://images.unsplash.com/photo-1553729459-efe14ef6055d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80')`
          }}
        />
        <div className="absolute inset-0 bg-gray-900/70"></div>
        
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center text-white">
          <motion.div
            initial="hidden"
            animate="visible"
            variants={staggerChildren}
          >
            <motion.div variants={fadeInUp} className="mb-8">
              <span className="inline-block bg-brand text-gray-900 px-4 py-2 rounded-full text-sm font-semibold mb-8">
                🏆 CERTIFICATIONS & PARTENARIATS
              </span>
            </motion.div>
            
            <motion.h1 variants={fadeInUp} className="text-5xl md:text-6xl font-bold mb-8 max-w-4xl mx-auto leading-tight">
              L'Excellence Reconnue par les{' '}
              <span className="text-brand">
                Leaders du Digital
              </span>
            </motion.h1>
            
            <motion.p variants={fadeInUp} className="text-xl md:text-2xl mb-12 max-w-4xl mx-auto text-gray-200 leading-relaxed font-normal">
              Nos certifications et partenariats avec les plus grandes plateformes digitales 
              garantissent la qualité et l'efficacité de nos services.
            </motion.p>
            
            <motion.div variants={fadeInUp} className="flex flex-col md:flex-row gap-4 justify-center items-center">
              <motion.a 
                href="#certifications"
                whileHover={{ scale: 1.05, y: -2 }}
                whileTap={{ scale: 0.95 }}
                className="bg-brand text-gray-900 px-8 py-4 rounded-lg font-bold text-lg shadow-xl hover:shadow-2xl transition-all duration-300"
              >
                Voir nos Certifications →
              </motion.a>
              
              <motion.a 
                href="/contact"
                whileHover={{ scale: 1.05, y: -2 }}
                className="text-white border-2 border-white px-8 py-4 rounded-lg hover:bg-white hover:text-gray-900 transition-all duration-300 font-semibold"
              >
                Nous Contacter
              </motion.a>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Breadcrumb */}
      <section className="py-8 bg-gray-50">
        <div className="max-w-7xl mx-auto px-6">
          <nav className="flex text-sm text-gray-600">
            <Link href="/" className="hover:text-brand transition-colors">Accueil</Link>
            <span className="mx-2">•</span>
            <Link href="/about" className="hover:text-brand transition-colors">À Propos</Link>
            <span className="mx-2">•</span>
            <span className="text-gray-900 font-medium">Certifications</span>
          </nav>
        </div>
      </section>

      {/* Certifications Section */}
      <section id="certifications" className="py-24 bg-white">
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
                NOS CERTIFICATIONS
              </span>
            </motion.div>
            <motion.h2 variants={fadeInUp} className="text-4xl md:text-5xl font-bold mb-6 text-gray-900">
              15+ Certifications d'Excellence
            </motion.h2>
            <motion.p variants={fadeInUp} className="text-xl max-w-4xl mx-auto text-gray-600 leading-relaxed">
              Notre équipe maintient un niveau d'expertise constant grâce à une formation continue 
              et des certifications régulièrement renouvelées sur toutes les plateformes majeures.
            </motion.p>
          </motion.div>

          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={staggerChildren}
            className="space-y-12"
          >
            {certifications.map((category, index) => (
              <motion.div
                key={index}
                variants={fadeInUp}
                className="bg-white rounded-2xl shadow-lg border border-gray-100 overflow-hidden"
              >
                <div className={`h-32 bg-gradient-to-r ${category.color} relative`}>
                  <div className="absolute inset-0 bg-black/20"></div>
                  <div className="relative z-10 flex items-center justify-center h-full">
                    <h3 className="text-3xl font-bold text-white">{category.category}</h3>
                  </div>
                </div>
                
                <div className="p-8">
                  <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                    {category.certs.map((cert, idx) => (
                      <motion.div
                        key={idx}
                        initial="rest"
                        whileHover="hover"
                        variants={scaleOnHover}
                        className="bg-gray-50 p-6 rounded-xl"
                      >
                        <div className="flex items-start gap-4 mb-4">
                          <span className="text-3xl">{cert.badge}</span>
                          <div className="flex-1">
                            <h4 className="font-bold text-lg text-gray-900 mb-2">{cert.title}</h4>
                            <div className="flex items-center gap-2 mb-3">
                              <span className={`px-3 py-1 rounded-full text-sm font-medium ${
                                cert.level === 'Expert' ? 'bg-red-100 text-red-800' :
                                cert.level === 'Advanced' ? 'bg-blue-100 text-blue-800' :
                                'bg-green-100 text-green-800'
                              }`}>
                                {cert.level}
                              </span>
                              <span className="text-gray-500 text-sm">{cert.date}</span>
                            </div>
                          </div>
                        </div>
                        <p className="text-gray-600 text-sm leading-relaxed">{cert.description}</p>
                      </motion.div>
                    ))}
                  </div>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Partners Section */}
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
                PARTENAIRES OFFICIELS
              </span>
            </motion.div>
            <motion.h2 variants={fadeInUp} className="text-4xl md:text-5xl font-bold mb-6 text-gray-900">
              Partenaires Stratégiques de Premier Plan
            </motion.h2>
            <motion.p variants={fadeInUp} className="text-xl max-w-4xl mx-auto text-gray-600 leading-relaxed">
              Nos partenariats officiels nous donnent accès aux dernières innovations, 
              aux formations exclusives et aux supports techniques avancés.
            </motion.p>
          </motion.div>

          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={staggerChildren}
            className="grid md:grid-cols-2 gap-8"
          >
            {partners.map((partner, index) => (
              <motion.div
                key={index}
                variants={fadeInUp}
                initial="rest"
                whileHover="hover"
                className="group"
              >
                <motion.div
                  variants={scaleOnHover}
                  className="bg-white p-8 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300"
                >
                  <div className="flex items-center gap-4 mb-6">
                    <div className="w-16 h-16 rounded-xl overflow-hidden">
                      <img 
                        src={partner.logo} 
                        alt={partner.name}
                        className="w-full h-full object-cover"
                      />
                    </div>
                    <h3 className="text-xl font-bold text-gray-900">{partner.name}</h3>
                  </div>
                  
                  <p className="text-gray-600 mb-6 leading-relaxed">{partner.description}</p>
                  
                  <div>
                    <h4 className="font-semibold text-gray-900 mb-3">Avantages :</h4>
                    <ul className="space-y-2">
                      {partner.benefits.map((benefit, idx) => (
                        <li key={idx} className="flex items-center text-gray-700">
                          <div className="w-2 h-2 rounded-full bg-brand mr-3 flex-shrink-0"></div>
                          <span>{benefit}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </motion.div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Awards Section */}
      <section className="py-24 bg-white">
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
                PRIX & RECONNAISSANCES
              </span>
            </motion.div>
            <motion.h2 variants={fadeInUp} className="text-4xl md:text-5xl font-bold mb-6 text-gray-900">
              Excellence Reconnue par l'Industrie
            </motion.h2>
            <motion.p variants={fadeInUp} className="text-xl max-w-4xl mx-auto text-gray-600 leading-relaxed">
              Nos innovations et nos résultats exceptionnels ont été récompensés 
              par les plus prestigieuses institutions du marketing digital.
            </motion.p>
          </motion.div>

          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={staggerChildren}
            className="grid md:grid-cols-2 gap-8"
          >
            {awards.map((award, index) => (
              <motion.div
                key={index}
                variants={fadeInUp}
                initial="rest"
                whileHover="hover"
                className="group"
              >
                <motion.div
                  variants={scaleOnHover}
                  className="bg-gray-50 p-8 rounded-2xl hover:bg-gray-100 transition-all duration-300"
                >
                  <div className="flex items-start gap-4">
                    <div className="text-4xl">{award.icon}</div>
                    <div className="flex-1">
                      <div className="flex items-center gap-3 mb-3">
                        <span className="bg-brand text-gray-900 px-3 py-1 rounded-full text-sm font-bold">
                          {award.year}
                        </span>
                      </div>
                      <h3 className="text-xl font-bold text-gray-900 mb-2">{award.title}</h3>
                      <p className="text-brand font-semibold mb-3">{award.organization}</p>
                      <p className="text-gray-600 leading-relaxed">{award.description}</p>
                    </div>
                  </div>
                </motion.div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Trust & Quality */}
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
                ENGAGEMENT QUALITÉ
              </span>
            </motion.div>
            <motion.h2 variants={fadeInUp} className="text-4xl md:text-5xl font-bold mb-6 text-gray-900">
              Votre Garantie d'Excellence
            </motion.h2>
            <motion.p variants={fadeInUp} className="text-xl max-w-4xl mx-auto text-gray-600 leading-relaxed">
              Nos certifications et partenariats ne sont pas seulement des badges : 
              ils représentent notre engagement constant envers l'excellence et votre réussite.
            </motion.p>
          </motion.div>

          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={staggerChildren}
            className="grid md:grid-cols-3 gap-8"
          >
            {[
              {
                icon: '🔄',
                title: 'Formation Continue',
                description: 'Mise à jour constante de nos compétences pour rester à la pointe des dernières innovations digitales.'
              },
              {
                icon: '✅',
                title: 'Standards Élevés',
                description: 'Respect des meilleures pratiques industrie et des standards de qualité les plus exigeants.'
              },
              {
                icon: '🎯',
                title: 'Résultats Prouvés',
                description: 'Méthodologies certifiées et éprouvées pour maximiser le ROI de vos investissements marketing.'
              }
            ].map((item, index) => (
              <motion.div
                key={index}
                variants={fadeInUp}
                className="bg-white p-8 rounded-2xl shadow-lg text-center"
              >
                <div className="text-4xl mb-4">{item.icon}</div>
                <h4 className="text-xl font-bold mb-4 text-gray-900">{item.title}</h4>
                <p className="text-gray-600 leading-relaxed">{item.description}</p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 bg-gray-900 relative overflow-hidden">
        <div 
          className="absolute inset-0 bg-cover bg-center bg-no-repeat"
          style={{
            backgroundImage: `url('https://images.unsplash.com/photo-1521737604893-d14cc237f11d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2084&q=80')`
          }}
        />
        <div className="absolute inset-0 bg-gray-900/80"></div>
        
        <div className="max-w-6xl mx-auto px-6 text-center relative z-10">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={staggerChildren}
          >
            <motion.h2 variants={fadeInUp} className="text-4xl md:text-6xl font-bold mb-6 text-white">
              Bénéficiez de Notre{' '}
              <span className="text-brand">
                Expertise Certifiée
              </span>
            </motion.h2>
            <motion.p variants={fadeInUp} className="text-xl mb-10 max-w-4xl mx-auto text-gray-200 leading-relaxed">
              Faites confiance à une équipe d'experts certifiés et reconnue par les leaders du digital. 
              Votre succès est notre priorité.
            </motion.p>
            <motion.div variants={fadeInUp} className="flex flex-col md:flex-row gap-4 justify-center">
              <motion.a 
                href="/consultation"
                whileHover={{ scale: 1.05, y: -2 }}
                whileTap={{ scale: 0.95 }}
                className="bg-brand text-gray-900 px-10 py-4 rounded-lg font-bold text-lg shadow-xl hover:shadow-2xl transition-all duration-300"
              >
                Consultation Gratuite →
              </motion.a>
              <motion.a 
                href="/about/team"
                whileHover={{ scale: 1.05, y: -2 }}
                className="text-white border-2 border-white px-10 py-4 rounded-lg hover:bg-white hover:text-gray-900 transition-all duration-300 font-bold"
              >
                Rencontrer l'Équipe
              </motion.a>
            </motion.div>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default CertificationsPage;