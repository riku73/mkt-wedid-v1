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
      staggerChildren: 0.2,
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

// Company values data
const companyValues = [
  {
    icon: '🎯',
    title: 'Excellence & Expertise',
    description: 'Nous nous engageons à fournir des solutions marketing de la plus haute qualité, en combinant expertise technique et créativité pour dépasser les attentes de nos clients luxembourgeois.'
  },
  {
    icon: '🤝',
    title: 'Partenariat de Confiance',
    description: 'Nous construisons des relations durables basées sur la transparence, la communication et l\'accompagnement personnalisé de chaque entreprise dans sa croissance digitale.'
  },
  {
    icon: '🚀',
    title: 'Innovation Continue',
    description: 'Nous restons à la pointe des tendances digitales et adoptons les dernières technologies pour offrir à nos clients un avantage concurrentiel durable au Luxembourg.'
  },
  {
    icon: '📊',
    title: 'Résultats Mesurables',
    description: 'Chaque stratégie est orientée ROI avec des KPIs clairs et un reporting transparent pour maximiser l\'impact de votre investissement marketing.'
  },
  {
    icon: '🇱🇺',
    title: 'Expertise Locale',
    description: 'Notre connaissance approfondie du marché luxembourgeois nous permet de créer des campagnes parfaitement adaptées aux spécificités culturelles et réglementaires locales.'
  },
  {
    icon: '🌍',
    title: 'Vision Internationale',
    description: 'Nous aidons les entreprises luxembourgeoises à rayonner dans la Grande Région et au-delà, en tirant parti de la position stratégique unique du Luxembourg.'
  }
];

// Company milestones
const milestones = [
  {
    year: '2018',
    title: 'Fondation de Wedid',
    description: 'Création de l\'agence avec la vision de devenir la référence marketing digital au Luxembourg.'
  },
  {
    year: '2019',
    title: 'Premiers Grands Comptes',
    description: 'Signature de partenariats avec des leaders du secteur financier luxembourgeois.'
  },
  {
    year: '2020',
    title: 'Expansion Services',
    description: 'Développement de notre offre avec le branding, la création web et la formation.'
  },
  {
    year: '2021',
    title: 'Certifications Google',
    description: 'Obtention des certifications Google Ads et Google Analytics pour renforcer notre expertise.'
  },
  {
    year: '2022',
    title: 'Croissance Équipe',
    description: 'Renforcement de l\'équipe avec des spécialistes seniors dans chaque domaine d\'expertise.'
  },
  {
    year: '2023',
    title: 'Leadership Marché',
    description: 'Reconnaissance comme l\'une des agences marketing digital les plus innovantes du Luxembourg.'
  }
];

const AboutPage = () => {
  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="relative pt-28 pb-20 px-4 sm:pt-32 sm:pb-24 sm:px-6 lg:pt-32 lg:pb-32 overflow-hidden">
        <div 
          className="absolute inset-0 bg-cover bg-center bg-no-repeat"
          style={{
            backgroundImage: `url('https://images.unsplash.com/photo-1600880292203-757bb62b4baf?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80')`
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
                🇱🇺 À PROPOS DE WEDID
              </span>
            </motion.div>
            
            <motion.h1 variants={fadeInUp} className="text-5xl md:text-7xl font-bold mb-8 max-w-5xl mx-auto leading-tight">
              L'Agence Marketing Digital{' '}
              <span className="text-brand">
                de Référence
              </span>{' '}
              au Luxembourg
            </motion.h1>
            
            <motion.p variants={fadeInUp} className="text-xl md:text-2xl mb-12 max-w-4xl mx-auto text-gray-200 leading-relaxed font-normal">
              Depuis 2018, nous accompagnons les entreprises luxembourgeoises dans leur transformation digitale 
              avec expertise, passion et résultats mesurables.
            </motion.p>
            
            <motion.div variants={fadeInUp} className="flex flex-col md:flex-row gap-4 justify-center items-center">
              <motion.a 
                href="#notre-histoire"
                whileHover={{ scale: 1.05, y: -2 }}
                whileTap={{ scale: 0.95 }}
                className="bg-brand text-gray-900 px-8 py-4 rounded-lg font-bold text-lg shadow-xl hover:shadow-2xl transition-all duration-300"
              >
                Découvrir notre Histoire →
              </motion.a>
              
              <motion.a 
                href="/about/team"
                whileHover={{ scale: 1.05, y: -2 }}
                className="text-white border-2 border-white px-8 py-4 rounded-lg hover:bg-white hover:text-gray-900 transition-all duration-300 font-semibold"
              >
                Rencontrer l'Équipe
              </motion.a>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Mission & Vision */}
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
                NOTRE MISSION
              </span>
            </motion.div>
            <motion.h2 variants={fadeInUp} className="text-4xl md:text-5xl font-bold mb-6 text-gray-900">
              Propulser Votre Réussite Digitale
            </motion.h2>
            <motion.p variants={fadeInUp} className="text-xl max-w-4xl mx-auto text-gray-600 leading-relaxed">
              Notre mission est d'accompagner chaque entreprise luxembourgeoise dans sa transformation digitale 
              en créant des stratégies marketing sur-mesure qui génèrent des résultats concrets et durables.
            </motion.p>
          </motion.div>

          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={staggerChildren}
            className="grid md:grid-cols-2 gap-12 mb-20"
          >
            <motion.div variants={fadeInUp} className="relative">
              <div className="bg-gray-50 rounded-2xl p-8 h-full">
                <div className="text-4xl mb-6">🎯</div>
                <h3 className="text-3xl font-bold mb-6 text-gray-900">Notre Mission</h3>
                <p className="text-gray-600 text-lg leading-relaxed mb-6">
                  Transformer les défis digitaux de nos clients en opportunités de croissance mesurable. 
                  Nous croyons que chaque entreprise mérite une stratégie marketing personnalisée qui 
                  reflète ses valeurs et amplifie son potentiel.
                </p>
                <ul className="space-y-3">
                  <li className="flex items-center text-gray-700">
                    <div className="w-2 h-2 rounded-full bg-brand mr-3"></div>
                    <span>Stratégies sur-mesure pour chaque client</span>
                  </li>
                  <li className="flex items-center text-gray-700">
                    <div className="w-2 h-2 rounded-full bg-brand mr-3"></div>
                    <span>Résultats mesurables et transparents</span>
                  </li>
                  <li className="flex items-center text-gray-700">
                    <div className="w-2 h-2 rounded-full bg-brand mr-3"></div>
                    <span>Accompagnement personnalisé et continu</span>
                  </li>
                </ul>
              </div>
            </motion.div>

            <motion.div variants={fadeInUp} className="relative">
              <div className="bg-gray-900 text-white rounded-2xl p-8 h-full">
                <div className="text-4xl mb-6">🚀</div>
                <h3 className="text-3xl font-bold mb-6">Notre Vision</h3>
                <p className="text-gray-200 text-lg leading-relaxed mb-6">
                  Devenir l'agence partenaire incontournable des entreprises ambitieuses du Luxembourg, 
                  en alliant innovation technologique, créativité et expertise locale pour créer 
                  des success stories digitales remarquables.
                </p>
                <ul className="space-y-3">
                  <li className="flex items-center text-gray-200">
                    <div className="w-2 h-2 rounded-full bg-brand mr-3"></div>
                    <span>Leadership sur le marché luxembourgeois</span>
                  </li>
                  <li className="flex items-center text-gray-200">
                    <div className="w-2 h-2 rounded-full bg-brand mr-3"></div>
                    <span>Innovation continue et anticipation des tendances</span>
                  </li>
                  <li className="flex items-center text-gray-200">
                    <div className="w-2 h-2 rounded-full bg-brand mr-3"></div>
                    <span>Expansion dans la Grande Région</span>
                  </li>
                </ul>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Company Values */}
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
                NOS VALEURS
              </span>
            </motion.div>
            <motion.h2 variants={fadeInUp} className="text-4xl md:text-5xl font-bold mb-6 text-gray-900">
              Ce Qui Nous Guide au Quotidien
            </motion.h2>
            <motion.p variants={fadeInUp} className="text-xl max-w-4xl mx-auto text-gray-600 leading-relaxed">
              Nos valeurs fondamentales façonnent chaque décision, chaque stratégie et chaque relation 
              que nous construisons avec nos clients luxembourgeois.
            </motion.p>
          </motion.div>

          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={staggerChildren}
            className="grid md:grid-cols-2 lg:grid-cols-3 gap-8"
          >
            {companyValues.map((value, index) => (
              <motion.div
                key={index}
                variants={fadeInUp}
                initial="rest"
                whileHover="hover"
                className="group"
              >
                <motion.div
                  variants={scaleOnHover}
                  className="bg-white p-8 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 h-full"
                >
                  <div className="text-4xl mb-6">{value.icon}</div>
                  <h4 className="text-xl font-bold mb-4 text-gray-900">{value.title}</h4>
                  <p className="text-gray-600 leading-relaxed">{value.description}</p>
                </motion.div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Company Timeline */}
      <section id="notre-histoire" className="py-24 bg-white">
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
                NOTRE PARCOURS
              </span>
            </motion.div>
            <motion.h2 variants={fadeInUp} className="text-4xl md:text-5xl font-bold mb-6 text-gray-900">
              6 Années d'Excellence au Luxembourg
            </motion.h2>
            <motion.p variants={fadeInUp} className="text-xl max-w-4xl mx-auto text-gray-600 leading-relaxed">
              Découvrez les moments clés qui ont façonné notre évolution et notre succès 
              sur le marché luxembourgeois du marketing digital.
            </motion.p>
          </motion.div>

          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={staggerChildren}
            className="relative"
          >
            {/* Timeline line */}
            <div className="absolute left-8 md:left-1/2 transform md:-translate-x-px h-full w-0.5 bg-brand"></div>

            <div className="space-y-12">
              {milestones.map((milestone, index) => (
                <motion.div
                  key={index}
                  variants={fadeInUp}
                  className={`relative flex items-center ${
                    index % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'
                  }`}
                >
                  {/* Timeline dot */}
                  <div className="absolute left-8 md:left-1/2 transform -translate-x-1/2 w-4 h-4 bg-brand rounded-full border-4 border-white shadow-lg z-10"></div>

                  <div className={`w-full md:w-1/2 ${index % 2 === 0 ? 'md:pr-12' : 'md:pl-12'}`}>
                    <div className="ml-16 md:ml-0 bg-white p-8 rounded-2xl shadow-lg border border-gray-100">
                      <div className="text-brand font-bold text-lg mb-2">{milestone.year}</div>
                      <h4 className="text-2xl font-bold mb-4 text-gray-900">{milestone.title}</h4>
                      <p className="text-gray-600 leading-relaxed">{milestone.description}</p>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* Luxembourg Focus */}
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
                🇱🇺 LUXEMBOURG FOCUS
              </span>
            </motion.div>
            <motion.h2 variants={fadeInUp} className="text-4xl md:text-5xl font-bold mb-6 text-gray-900">
              Ancrés dans l'Écosystème Luxembourgeois
            </motion.h2>
            <motion.p variants={fadeInUp} className="text-xl max-w-4xl mx-auto text-gray-600 leading-relaxed">
              Notre expertise va au-delà du marketing digital : nous comprenons les spécificités 
              du marché luxembourgeois et adaptons nos stratégies aux réalités locales.
            </motion.p>
          </motion.div>

          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={staggerChildren}
            className="grid md:grid-cols-2 lg:grid-cols-4 gap-8"
          >
            {[
              {
                icon: '💼',
                title: 'Secteurs d\'Expertise',
                description: 'Finance, Fintech, Consulting, Services aux entreprises, Technologies'
              },
              {
                icon: '🌐',
                title: 'Multilinguisme',
                description: 'Stratégies adaptées aux 3 langues officielles et à la diversité culturelle'
              },
              {
                icon: '📊',
                title: 'Conformité RGPD',
                description: 'Respect strict des réglementations européennes et luxembourgeoises'
              },
              {
                icon: '🤝',
                title: 'Réseau Local',
                description: 'Partenariats avec les acteurs clés de l\'écosystème business luxembourgeois'
              }
            ].map((feature, index) => (
              <motion.div
                key={index}
                variants={fadeInUp}
                className="bg-white p-8 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 text-center"
              >
                <div className="text-4xl mb-4">{feature.icon}</div>
                <h4 className="text-xl font-bold mb-4 text-gray-900">{feature.title}</h4>
                <p className="text-gray-600 leading-relaxed">{feature.description}</p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Team & Certifications Links */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={staggerChildren}
            className="grid md:grid-cols-2 gap-8"
          >
            <motion.div variants={fadeInUp} className="group">
              <Link href="/about/team">
                <motion.div
                  initial="rest"
                  whileHover="hover"
                  variants={scaleOnHover}
                  className="relative h-96 rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300"
                >
                  <div 
                    className="absolute inset-0 bg-cover bg-center"
                    style={{
                      backgroundImage: `url('https://images.unsplash.com/photo-1522202176988-66273c2fd55f?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2071&q=80')`
                    }}
                  />
                  <div className="absolute inset-0 bg-gray-900/60 group-hover:bg-gray-900/70 transition-colors"></div>
                  <div className="absolute inset-0 flex items-center justify-center p-8 text-center text-white">
                    <div>
                      <div className="text-5xl mb-4">👥</div>
                      <h3 className="text-3xl font-bold mb-4">Notre Équipe</h3>
                      <p className="text-lg mb-6 text-gray-200">
                        Rencontrez les experts qui donnent vie à vos projets digitaux
                      </p>
                      <span className="inline-flex items-center text-brand font-semibold">
                        Découvrir l'équipe →
                      </span>
                    </div>
                  </div>
                </motion.div>
              </Link>
            </motion.div>

            <motion.div variants={fadeInUp} className="group">
              <Link href="/about/certifications">
                <motion.div
                  initial="rest"
                  whileHover="hover"
                  variants={scaleOnHover}
                  className="relative h-96 rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300"
                >
                  <div 
                    className="absolute inset-0 bg-cover bg-center"
                    style={{
                      backgroundImage: `url('https://images.unsplash.com/photo-1553729459-efe14ef6055d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80')`
                    }}
                  />
                  <div className="absolute inset-0 bg-gray-900/60 group-hover:bg-gray-900/70 transition-colors"></div>
                  <div className="absolute inset-0 flex items-center justify-center p-8 text-center text-white">
                    <div>
                      <div className="text-5xl mb-4">🏆</div>
                      <h3 className="text-3xl font-bold mb-4">Certifications</h3>
                      <p className="text-lg mb-6 text-gray-200">
                        Nos accréditations et partenariats avec les leaders du digital
                      </p>
                      <span className="inline-flex items-center text-brand font-semibold">
                        Voir nos certifications →
                      </span>
                    </div>
                  </div>
                </motion.div>
              </Link>
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
              Prêt à Travailler{' '}
              <span className="text-brand">
                Ensemble
              </span> ?
            </motion.h2>
            <motion.p variants={fadeInUp} className="text-xl mb-10 max-w-4xl mx-auto text-gray-200 leading-relaxed">
              Découvrez comment notre expertise peut transformer votre présence digitale. 
              Bénéficiez d'une consultation gratuite avec nos experts.
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
                href="/contact"
                whileHover={{ scale: 1.05, y: -2 }}
                className="text-white border-2 border-white px-10 py-4 rounded-lg hover:bg-white hover:text-gray-900 transition-all duration-300 font-bold"
              >
                Nous Contacter
              </motion.a>
            </motion.div>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default AboutPage;