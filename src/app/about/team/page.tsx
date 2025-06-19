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

const imageHover: Variants = {
  rest: { scale: 1 },
  hover: { 
    scale: 1.1,
    transition: { 
      duration: 0.4,
      ease: "easeOut"
    }
  }
};

// Team members data
const teamMembers = [
  {
    name: 'Marc Dubois',
    role: 'CEO & Stratège Digital',
    image: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80',
    bio: 'Fort de 12 ans d\'expérience dans le marketing digital, Marc a fondé Wedid avec la vision de créer l\'agence de référence au Luxembourg. Spécialisé en stratégie omnicanale et transformation digitale.',
    expertise: ['Stratégie Digitale', 'Transformation Digitale', 'Leadership', 'Business Development'],
    linkedin: 'https://linkedin.com/in/marcdubois',
    certifications: ['Google Ads Expert', 'HubSpot Certified', 'Meta Business Certified']
  },
  {
    name: 'Sophie Laurent',
    role: 'Directrice Creative & Branding',
    image: 'https://images.unsplash.com/photo-1494790108755-2616b612b786?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2087&q=80',
    bio: 'Diplômée des Beaux-Arts de Paris, Sophie apporte une vision créative unique à chaque projet. Elle supervise l\'ensemble des productions visuelles et guide nos clients dans la construction d\'identités de marque mémorables.',
    expertise: ['Direction Artistique', 'Identité Visuelle', 'Design UX/UI', 'Photographie'],
    linkedin: 'https://linkedin.com/in/sophielaurent',
    certifications: ['Adobe Certified Expert', 'Google UX Design Certificate', 'Figma Professional']
  },
  {
    name: 'Thomas Weber',
    role: 'Lead Developer & Expert Technique',
    image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80',
    bio: 'Ingénieur informatique passionné par les dernières technologies web, Thomas développe des solutions techniques innovantes et performantes. Il garantit la qualité et la sécurité de tous nos projets digitaux.',
    expertise: ['Développement Web', 'React/Next.js', 'Node.js', 'Architecture Cloud'],
    linkedin: 'https://linkedin.com/in/thomasweber',
    certifications: ['AWS Certified', 'React Expert', 'Google Cloud Professional', 'Vercel Partner']
  },
  {
    name: 'Emma Schneider',
    role: 'Spécialiste SEO & Analytics',
    image: 'https://images.unsplash.com/photo-1580489944761-15a19d654956?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2061&q=80',
    bio: 'Experte en référencement naturel et analyse de données, Emma optimise la visibilité de nos clients sur les moteurs de recherche. Ses stratégies SEO ont permis d\'augmenter le trafic organique de +200% en moyenne.',
    expertise: ['SEO Technique', 'SEO Local', 'Google Analytics', 'Data Analysis'],
    linkedin: 'https://linkedin.com/in/emmaschneider',
    certifications: ['Google Analytics Certified', 'SEMrush Certified', 'Screaming Frog Certified']
  },
  {
    name: 'Julien Moreau',
    role: 'Social Media Manager & Content Creator',
    image: 'https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80',
    bio: 'Créatif et stratège des réseaux sociaux, Julien développe des contenus engageants qui connectent les marques à leur audience. Il maîtrise parfaitement les codes des plateformes sociales et les tendances digitales.',
    expertise: ['Social Media Strategy', 'Content Marketing', 'Community Management', 'Influencer Marketing'],
    linkedin: 'https://linkedin.com/in/julienmoreau',
    certifications: ['Facebook Blueprint Certified', 'LinkedIn Marketing Certified', 'TikTok for Business']
  },
  {
    name: 'Léa Hoffman',
    role: 'Account Manager & Relation Client',
    image: 'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2088&q=80',
    bio: 'Trilingue et experte en relation client, Léa assure le suivi personnalisé de chaque projet. Elle est le pont entre nos clients et nos équipes techniques, garantissant une communication fluide et des résultats alignés.',
    expertise: ['Account Management', 'Project Management', 'Client Relations', 'Multilingual Communication'],
    linkedin: 'https://linkedin.com/in/leahoffman',
    certifications: ['PMP Certified', 'Salesforce Certified', 'HubSpot Sales Certified']
  }
];

// Company culture points
const culturePoints = [
  {
    icon: '🚀',
    title: 'Innovation Continue',
    description: 'Nous investissons constamment dans la formation et les nouvelles technologies pour rester à la pointe du digital.'
  },
  {
    icon: '🤝',
    title: 'Collaboration',
    description: 'Nos équipes travaillent en synergie pour offrir des solutions complètes et cohérentes à nos clients.'
  },
  {
    icon: '🎯',
    title: 'Orientation Résultats',
    description: 'Chaque membre de l\'équipe est focalisé sur la performance et le succès de nos clients luxembourgeois.'
  },
  {
    icon: '🌱',
    title: 'Développement Personnel',
    description: 'Nous encourageons la croissance professionnelle et l\'épanouissement de chaque collaborateur.'
  }
];

const TeamPage = () => {
  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="relative pt-32 pb-32 overflow-hidden">
        <div 
          className="absolute inset-0 bg-cover bg-center bg-no-repeat"
          style={{
            backgroundImage: `url('https://images.unsplash.com/photo-1522202176988-66273c2fd55f?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2071&q=80')`
          }}
        />
        <div className="absolute inset-0 bg-gray-900/70"></div>
        
        <div className="max-w-6xl mx-auto px-6 relative z-10 text-center text-white">
          <motion.div
            initial="hidden"
            animate="visible"
            variants={staggerChildren}
          >
            <motion.div variants={fadeInUp} className="mb-8">
              <span className="inline-block bg-brand text-gray-900 px-4 py-2 rounded-full text-sm font-semibold mb-8">
                👥 NOTRE ÉQUIPE
              </span>
            </motion.div>
            
            <motion.h1 variants={fadeInUp} className="text-5xl md:text-6xl font-bold mb-8 max-w-4xl mx-auto leading-tight">
              Les Experts qui Donnent Vie à{' '}
              <span className="text-brand">
                Vos Projets
              </span>
            </motion.h1>
            
            <motion.p variants={fadeInUp} className="text-xl md:text-2xl mb-12 max-w-4xl mx-auto text-gray-200 leading-relaxed font-normal">
              Rencontrez l'équipe passionnée qui combine expertise technique, créativité et 
              connaissance du marché luxembourgeois pour propulser votre succès digital.
            </motion.p>
            
            <motion.div variants={fadeInUp} className="flex flex-col md:flex-row gap-4 justify-center items-center">
              <motion.a 
                href="#equipe"
                whileHover={{ scale: 1.05, y: -2 }}
                whileTap={{ scale: 0.95 }}
                className="bg-brand text-gray-900 px-8 py-4 rounded-lg font-bold text-lg shadow-xl hover:shadow-2xl transition-all duration-300"
              >
                Découvrir l'Équipe →
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
            <span className="text-gray-900 font-medium">Équipe</span>
          </nav>
        </div>
      </section>

      {/* Team Members */}
      <section id="equipe" className="py-24 bg-white">
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
                NOTRE ÉQUIPE D'EXPERTS
              </span>
            </motion.div>
            <motion.h2 variants={fadeInUp} className="text-4xl md:text-5xl font-bold mb-6 text-gray-900">
              6 Experts, Une Passion Commune
            </motion.h2>
            <motion.p variants={fadeInUp} className="text-xl max-w-4xl mx-auto text-gray-600 leading-relaxed">
              Chaque membre de notre équipe apporte une expertise unique et complémentaire 
              pour offrir des solutions marketing digitales complètes et innovantes.
            </motion.p>
          </motion.div>

          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={staggerChildren}
            className="grid md:grid-cols-2 lg:grid-cols-3 gap-8"
          >
            {teamMembers.map((member, index) => (
              <motion.div
                key={index}
                variants={fadeInUp}
                initial="rest"
                whileHover="hover"
                className="group"
              >
                <motion.div
                  variants={scaleOnHover}
                  className="bg-white rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 overflow-hidden"
                >
                  {/* Member Image */}
                  <div className="relative h-80 overflow-hidden">
                    <motion.img 
                      src={member.image} 
                      alt={member.name}
                      variants={imageHover}
                      className="w-full h-full object-cover"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-gray-900/50 to-transparent"></div>
                    
                    {/* LinkedIn Icon */}
                    <div className="absolute top-4 right-4">
                      <a 
                        href={member.linkedin}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center justify-center w-10 h-10 rounded-full bg-white/90 text-gray-900 hover:bg-brand hover:text-gray-900 transition-colors"
                      >
                        <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                          <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
                        </svg>
                      </a>
                    </div>
                  </div>
                  
                  <div className="p-8">
                    <h3 className="text-2xl font-bold mb-2 text-gray-900">
                      {member.name}
                    </h3>
                    <p className="text-brand font-semibold text-lg mb-4">
                      {member.role}
                    </p>
                    <p className="text-gray-600 text-base mb-6 leading-relaxed">
                      {member.bio}
                    </p>
                    
                    {/* Expertise Tags */}
                    <div className="mb-6">
                      <h4 className="font-semibold text-gray-900 mb-3 text-sm">EXPERTISE :</h4>
                      <div className="flex flex-wrap gap-2">
                        {member.expertise.map((skill, idx) => (
                          <span 
                            key={idx}
                            className="px-3 py-1 bg-gray-100 text-gray-700 rounded-full text-sm font-medium"
                          >
                            {skill}
                          </span>
                        ))}
                      </div>
                    </div>

                    {/* Certifications */}
                    <div>
                      <h4 className="font-semibold text-gray-900 mb-3 text-sm">CERTIFICATIONS :</h4>
                      <div className="space-y-1">
                        {member.certifications.map((cert, idx) => (
                          <div key={idx} className="flex items-center text-sm text-gray-600">
                            <div className="w-2 h-2 rounded-full bg-brand mr-2 flex-shrink-0"></div>
                            <span>{cert}</span>
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>
                </motion.div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Company Culture */}
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
                NOTRE CULTURE
              </span>
            </motion.div>
            <motion.h2 variants={fadeInUp} className="text-4xl md:text-5xl font-bold mb-6 text-gray-900">
              L'Esprit Wedid au Quotidien
            </motion.h2>
            <motion.p variants={fadeInUp} className="text-xl max-w-4xl mx-auto text-gray-600 leading-relaxed">
              Notre culture d'entreprise favorise l'innovation, la collaboration et l'excellence. 
              C'est cette alchimie qui nous permet de créer des solutions exceptionnelles pour nos clients.
            </motion.p>
          </motion.div>

          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={staggerChildren}
            className="grid md:grid-cols-2 lg:grid-cols-4 gap-8"
          >
            {culturePoints.map((point, index) => (
              <motion.div
                key={index}
                variants={fadeInUp}
                className="bg-white p-8 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 text-center"
              >
                <div className="text-4xl mb-4">{point.icon}</div>
                <h4 className="text-xl font-bold mb-4 text-gray-900">{point.title}</h4>
                <p className="text-gray-600 leading-relaxed">{point.description}</p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Join Us Section */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={staggerChildren}
            className="text-center"
          >
            <motion.div variants={fadeInUp} className="mb-6">
              <span className="inline-block bg-brand text-gray-900 px-4 py-2 rounded-full text-sm font-bold mb-8">
                REJOIGNEZ-NOUS
              </span>
            </motion.div>
            <motion.h2 variants={fadeInUp} className="text-4xl md:text-5xl font-bold mb-6 text-gray-900">
              Envie de Rejoindre l'Aventure ?
            </motion.h2>
            <motion.p variants={fadeInUp} className="text-xl max-w-4xl mx-auto text-gray-600 leading-relaxed mb-12">
              Nous sommes toujours à la recherche de talents passionnés pour renforcer notre équipe. 
              Si vous partagez notre vision et souhaitez contribuer au succès digital des entreprises luxembourgeoises, 
              nous serions ravis de vous rencontrer.
            </motion.p>
            
            <motion.div variants={fadeInUp} className="flex flex-col md:flex-row gap-4 justify-center">
              <motion.a 
                href="/careers"
                whileHover={{ scale: 1.05, y: -2 }}
                whileTap={{ scale: 0.95 }}
                className="bg-brand text-gray-900 px-8 py-4 rounded-lg font-bold text-lg shadow-xl hover:shadow-2xl transition-all duration-300"
              >
                Voir nos Offres d'Emploi →
              </motion.a>
              <motion.a 
                href="/contact"
                whileHover={{ scale: 1.05, y: -2 }}
                className="bg-gray-900 text-white px-8 py-4 rounded-lg hover:bg-gray-800 transition-all duration-300 font-semibold"
              >
                Candidature Spontanée
              </motion.a>
            </motion.div>
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
              Prêt à Collaborer avec{' '}
              <span className="text-brand">
                Nos Experts
              </span> ?
            </motion.h2>
            <motion.p variants={fadeInUp} className="text-xl mb-10 max-w-4xl mx-auto text-gray-200 leading-relaxed">
              Notre équipe d'experts est prête à analyser vos besoins et à créer une stratégie 
              digitale sur-mesure pour votre entreprise luxembourgeoise.
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
                href="tel:+352123456789"
                whileHover={{ scale: 1.05, y: -2 }}
                className="inline-flex items-center text-white border-2 border-white px-10 py-4 rounded-lg hover:bg-white hover:text-gray-900 transition-all duration-300 font-bold"
              >
                📞 +352 12 34 56 789
              </motion.a>
            </motion.div>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default TeamPage;