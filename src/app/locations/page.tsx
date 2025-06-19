'use client';

import { Metadata } from 'next';
import { motion, Variants } from 'framer-motion';
import Link from 'next/link';

interface LocationData {
  id: string;
  name: string;
  description: string;
  businessFocus: string[];
  demographics: string;
  keyIndustries: string[];
  image: string;
  href: string;
  stats: {
    businesses: string;
    population: string;
    economy: string;
  };
  gradient: string;
}

const locationData: LocationData[] = [
  {
    id: 'luxembourg-ville',
    name: 'Luxembourg-Ville',
    description: 'Le cœur économique et financier du Grand-Duché, abritant les sièges sociaux des plus grandes entreprises européennes et institutions financières.',
    businessFocus: ['Services financiers', 'Sièges sociaux européens', 'Institutions gouvernementales', 'Tech & Fintech'],
    demographics: 'Centre d\'affaires international avec forte concentration d\'entreprises multinationales',
    keyIndustries: ['Finance', 'Banking', 'Insurance', 'Government', 'EU Institutions', 'Corporate HQ'],
    image: 'https://images.unsplash.com/photo-1578662996442-48f60103fc96?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80',
    href: '/locations/luxembourg-ville',
    stats: {
      businesses: '15,000+',
      population: '125,000',
      economy: '€45B GDP'
    },
    gradient: 'from-blue-600 to-purple-700'
  },
  {
    id: 'kirchberg',
    name: 'Kirchberg',
    description: 'Le quartier d\'affaires moderne, centre névralgique de l\'innovation technologique et siège des institutions européennes.',
    businessFocus: ['Tech & Innovation', 'Institutions européennes', 'Start-ups', 'R&D Centers'],
    demographics: 'Hub technologique avec écosystème startup dynamique et institutions européennes',
    keyIndustries: ['Technology', 'European Institutions', 'Innovation', 'Research', 'Startups', 'Digital'],
    image: 'https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80',
    href: '/locations/kirchberg',
    stats: {
      businesses: '3,000+',
      population: '8,000',
      economy: '€12B GDP'
    },
    gradient: 'from-green-500 to-teal-600'
  },
  {
    id: 'esch-sur-alzette',
    name: 'Esch-sur-Alzette',
    description: 'Deuxième ville du Luxembourg en pleine transformation, devenant un centre culturel et économique dynamique dans le sud.',
    businessFocus: ['Industries créatives', 'PME innovantes', 'Commerce local', 'Transformation urbaine'],
    demographics: 'Ville en renaissance avec forte croissance démographique et développement économique',
    keyIndustries: ['Creative Industries', 'Manufacturing', 'Retail', 'Services', 'Culture', 'Urban Development'],
    image: 'https://images.unsplash.com/photo-1449824913935-59a10b8d2000?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80',
    href: '/locations/esch-sur-alzette',
    stats: {
      businesses: '2,500+',
      population: '36,000',
      economy: '€2.8B GDP'
    },
    gradient: 'from-orange-500 to-red-600'
  },
  {
    id: 'differdange',
    name: 'Differdange',
    description: 'Centre industriel historique en reconversion, développant de nouveaux secteurs d\'activité et services aux entreprises.',
    businessFocus: ['Industrie 4.0', 'PME familiales', 'Services B2B', 'Reconversion industrielle'],
    demographics: 'Ville industrielle en transformation avec focus sur l\'innovation et la durabilité',
    keyIndustries: ['Manufacturing', 'Industry 4.0', 'B2B Services', 'Sustainability', 'Family Business', 'Innovation'],
    image: 'https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80',
    href: '/locations/differdange',
    stats: {
      businesses: '1,200+',
      population: '27,000',
      economy: '€1.8B GDP'
    },
    gradient: 'from-purple-500 to-pink-600'
  },
  {
    id: 'dudelange',
    name: 'Dudelange',
    description: 'Centre régional important avec une économie diversifiée, alliant tradition industrielle et innovation moderne.',
    businessFocus: ['Industrie diversifiée', 'Commerce de proximité', 'Services municipaux', 'PME locales'],
    demographics: 'Ville dynamique avec équilibre entre résidentiel et commercial, forte identité locale',
    keyIndustries: ['Diversified Industry', 'Local Commerce', 'Municipal Services', 'SMEs', 'Community Business', 'Regional Hub'],
    image: 'https://images.unsplash.com/photo-1497366216548-37526070297c?ixlib=rb-4.0.3&auto=format&fit=crop&w=2069&q=80',
    href: '/locations/dudelange',
    stats: {
      businesses: '900+',
      population: '21,000',
      economy: '€1.4B GDP'
    },
    gradient: 'from-indigo-500 to-blue-600'
  },
  {
    id: 'petange',
    name: 'Pétange',
    description: 'Commune frontalière stratégique, porte d\'entrée vers la France et la Belgique, avec une économie transfrontalière active.',
    businessFocus: ['Commerce transfrontalier', 'Logistique', 'Services de proximité', 'PME régionales'],
    demographics: 'Position stratégique frontalière favorisant les échanges commerciaux internationaux',
    keyIndustries: ['Cross-border Trade', 'Logistics', 'Regional Services', 'International Business', 'SMEs', 'Border Commerce'],
    image: 'https://images.unsplash.com/photo-1541873676-a18131494184?ixlib=rb-4.0.3&auto=format&fit=crop&w=2018&q=80',
    href: '/locations/petange',
    stats: {
      businesses: '800+',
      population: '18,000',
      economy: '€1.1B GDP'
    },
    gradient: 'from-teal-500 to-green-600'
  },
  {
    id: 'sanem',
    name: 'Sanem',
    description: 'Pôle industriel et logistique important, spécialisé dans la production et la distribution, avec un fort potentiel de développement.',
    businessFocus: ['Industrie lourde', 'Logistique', 'Distribution', 'Services industriels'],
    demographics: 'Centre industriel avec infrastructure logistique développée et opportunités B2B',
    keyIndustries: ['Heavy Industry', 'Logistics', 'Distribution', 'Industrial Services', 'Manufacturing', 'Supply Chain'],
    image: 'https://images.unsplash.com/photo-1498050108023-c5249f4df085?ixlib=rb-4.0.3&auto=format&fit=crop&w=2072&q=80',
    href: '/locations/sanem',
    stats: {
      businesses: '650+',
      population: '16,000',
      economy: '€1.6B GDP'
    },
    gradient: 'from-gray-600 to-gray-800'
  },
  {
    id: 'bettembourg',
    name: 'Bettembourg',
    description: 'Hub logistique stratégique du Luxembourg, centre névralgique du transport et de la distribution pour l\'Europe centrale.',
    businessFocus: ['Logistique européenne', 'Transport', 'E-commerce', 'Distribution'],
    demographics: 'Centre logistique majeur avec connectivité européenne exceptionnelle',
    keyIndustries: ['Logistics', 'Transportation', 'E-commerce', 'Distribution', 'Supply Chain', 'European Hub'],
    image: 'https://images.unsplash.com/photo-1494412651409-8963ce7935a7?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80',
    href: '/locations/bettembourg',
    stats: {
      businesses: '450+',
      population: '10,000',
      economy: '€2.2B GDP'
    },
    gradient: 'from-yellow-500 to-orange-600'
  }
];

const servicesOffered = [
  {
    icon: '🚀',
    title: 'Marketing Digital Local',
    description: 'SEO local, Google My Business, publicité géolocalisée'
  },
  {
    icon: '💻',
    title: 'Sites Web Adaptés',
    description: 'Développement avec focus sur votre marché local'
  },
  {
    icon: '🎨',
    title: 'Identité Visuelle',
    description: 'Branding adapté aux codes culturels locaux'
  },
  {
    icon: '📊',
    title: 'Analytics Locaux',
    description: 'Suivi des performances par zone géographique'
  },
  {
    icon: '📱',
    title: 'Social Media Local',
    description: 'Stratégies adaptées aux communautés locales'
  },
  {
    icon: '🤝',
    title: 'Networking B2B',
    description: 'Connexions avec l\'écosystème business local'
  }
];

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
    scale: 1.02,
    transition: { 
      duration: 0.3,
      ease: "easeOut"
    }
  }
};

const LocationsPage = () => {
  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="relative min-h-[85vh] flex items-center justify-center overflow-hidden pt-20">
        <div 
          className="absolute inset-0 bg-cover bg-center bg-no-repeat"
          style={{
            backgroundImage: `url('https://images.unsplash.com/photo-1605379399843-5870eea9b74e?ixlib=rb-4.0.3&auto=format&fit=crop&w=2126&q=80')`
          }}
        />
        <div className="absolute inset-0 bg-gray-900/70"></div>
        
        <div className="max-w-7xl mx-auto px-6 relative z-10 text-center text-white">
          <motion.div
            initial="hidden"
            animate="visible"
            variants={staggerChildren}
          >
            <motion.div variants={fadeInUp} className="mb-8">
              <span className="inline-block bg-brand text-gray-900 px-6 py-3 rounded-full text-sm font-bold mb-8">
                🇱🇺 PRÉSENCE LOCALE AU LUXEMBOURG
              </span>
            </motion.div>
            
            <motion.h1 variants={fadeInUp} className="text-5xl md:text-7xl font-bold mb-8 max-w-6xl mx-auto leading-tight">
              Marketing Digital dans{' '}
              <span className="text-brand">
                Toutes les Régions
              </span>{' '}
              du Luxembourg
            </motion.h1>
            
            <motion.p variants={fadeInUp} className="text-xl md:text-2xl mb-12 max-w-4xl mx-auto text-gray-200 leading-relaxed">
              De Luxembourg-Ville à Esch-sur-Alzette, en passant par Kirchberg et toutes les communes du Grand-Duché, 
              nous accompagnons les entreprises locales avec une expertise adaptée à chaque territoire.
            </motion.p>
            
            <motion.div variants={fadeInUp} className="flex flex-col md:flex-row gap-6 justify-center items-center">
              <motion.a 
                href="#locations"
                whileHover={{ scale: 1.05, y: -2 }}
                whileTap={{ scale: 0.95 }}
                className="bg-brand text-gray-900 px-10 py-4 rounded-lg font-bold text-lg shadow-xl hover:shadow-2xl transition-all duration-300 inline-flex items-center"
              >
                Découvrir nos Zones d'Intervention
                <span className="ml-2">→</span>
              </motion.a>
              
              <motion.a 
                whileHover={{ scale: 1.05, y: -2 }}
                href="/consultation-gratuite" 
                className="text-white border-2 border-white px-10 py-4 rounded-lg hover:bg-white hover:text-gray-900 transition-all duration-300 font-bold inline-flex items-center"
              >
                <span className="mr-2">📞</span>
                Consultation Locale Gratuite
              </motion.a>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Locations Grid */}
      <section id="locations" className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={staggerChildren}
            className="text-center mb-20"
          >
            <motion.div variants={fadeInUp} className="mb-6">
              <span className="inline-block bg-brand text-gray-900 px-4 py-2 rounded-full text-sm font-bold mb-8">
                NOS ZONES D'INTERVENTION
              </span>
            </motion.div>
            <motion.h2 variants={fadeInUp} className="text-4xl md:text-5xl font-bold mb-6 text-gray-900">
              8 Territoires, Une Expertise Commune
            </motion.h2>
            <motion.p variants={fadeInUp} className="text-xl max-w-4xl mx-auto text-gray-600 leading-relaxed">
              Chaque région du Luxembourg a ses spécificités économiques et culturelles. 
              Notre approche locale nous permet de créer des stratégies parfaitement adaptées à votre marché.
            </motion.p>
          </motion.div>

          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={staggerChildren}
            className="grid md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 mb-16"
          >
            {locationData.map((location, index) => (
              <motion.div
                key={location.id}
                variants={fadeInUp}
                initial="rest"
                whileHover="hover"
                className="group"
              >
                <motion.div
                  variants={scaleOnHover}
                  className="relative rounded-2xl bg-white shadow-lg border border-gray-100 hover:shadow-2xl transition-all duration-500 overflow-hidden h-full"
                >
                  {/* Location Image */}
                  <div className="relative h-48 overflow-hidden">
                    <img 
                      src={location.image} 
                      alt={`${location.name} - Zone d'intervention Wedid`}
                      className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                    />
                    <div className="absolute inset-0 bg-gray-900/40"></div>
                    
                    {/* Stats overlay */}
                    <div className="absolute top-4 right-4">
                      <div className="bg-white/90 rounded-lg px-3 py-2 text-xs font-bold text-gray-900">
                        {location.stats.businesses} entreprises
                      </div>
                    </div>
                  </div>
                  
                  <div className="p-6">
                    <h3 className="text-xl font-bold mb-3 text-gray-900">
                      {location.name}
                    </h3>
                    <p className="text-gray-600 text-sm mb-4 leading-relaxed line-clamp-3">
                      {location.description}
                    </p>
                    
                    {/* Key Stats */}
                    <div className="grid grid-cols-3 gap-2 mb-4 text-xs">
                      <div className="text-center p-2 bg-gray-50 rounded">
                        <div className="font-bold text-gray-900">{location.stats.businesses}</div>
                        <div className="text-gray-600">Entreprises</div>
                      </div>
                      <div className="text-center p-2 bg-gray-50 rounded">
                        <div className="font-bold text-gray-900">{location.stats.population}</div>
                        <div className="text-gray-600">Habitants</div>
                      </div>
                      <div className="text-center p-2 bg-gray-50 rounded">
                        <div className="font-bold text-gray-900">{location.stats.economy}</div>
                        <div className="text-gray-600">PIB</div>
                      </div>
                    </div>

                    {/* Key Industries */}
                    <div className="mb-6">
                      <h4 className="font-semibold text-gray-900 mb-2 text-sm">Secteurs clés :</h4>
                      <div className="flex flex-wrap gap-1">
                        {location.keyIndustries.slice(0, 3).map((industry, idx) => (
                          <span key={idx} className="inline-block bg-brand/20 text-gray-700 px-2 py-1 rounded text-xs font-medium">
                            {industry}
                          </span>
                        ))}
                        {location.keyIndustries.length > 3 && (
                          <span className="inline-block bg-gray-100 text-gray-600 px-2 py-1 rounded text-xs">
                            +{location.keyIndustries.length - 3}
                          </span>
                        )}
                      </div>
                    </div>

                    {/* CTA Button */}
                    <Link
                      href={location.href}
                      className="inline-flex items-center justify-center w-full bg-gray-900 text-white px-4 py-3 rounded-lg font-semibold hover:bg-gray-800 transition-colors group text-sm"
                    >
                      Découvrir {location.name}
                      <span className="ml-2 transition-transform group-hover:translate-x-1">→</span>
                    </Link>
                  </div>
                </motion.div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Services par Zone */}
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
                SERVICES ADAPTÉS
              </span>
            </motion.div>
            <motion.h2 variants={fadeInUp} className="text-4xl md:text-5xl font-bold mb-6 text-gray-900">
              Marketing Digital Adapté à Chaque Territoire
            </motion.h2>
            <motion.p variants={fadeInUp} className="text-xl max-w-4xl mx-auto text-gray-600 leading-relaxed">
              Nos services sont personnalisés selon les spécificités de chaque zone : 
              centres d'affaires, communes industrielles, hubs technologiques ou zones frontalières.
            </motion.p>
          </motion.div>

          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={staggerChildren}
            className="grid md:grid-cols-2 lg:grid-cols-3 gap-8"
          >
            {servicesOffered.map((service, index) => (
              <motion.div
                key={index}
                variants={fadeInUp}
                className="bg-white p-8 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300"
              >
                <div className="text-4xl mb-4">{service.icon}</div>
                <h4 className="text-xl font-bold mb-4 text-gray-900">{service.title}</h4>
                <p className="text-gray-600 leading-relaxed">{service.description}</p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Luxembourg Map Section */}
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
                COUVERTURE TERRITORIALE
              </span>
            </motion.div>
            <motion.h2 variants={fadeInUp} className="text-4xl md:text-5xl font-bold mb-6 text-gray-900">
              Présence dans Tout le Grand-Duché
            </motion.h2>
            <motion.p variants={fadeInUp} className="text-xl max-w-4xl mx-auto text-gray-600 leading-relaxed">
              De la capitale financière aux communes industrielles, nous couvrons l'ensemble du territoire luxembourgeois 
              avec une approche personnalisée pour chaque région.
            </motion.p>
          </motion.div>

          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeInUp}
            className="bg-gray-50 rounded-2xl p-8 lg:p-12"
          >
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              <div>
                <h3 className="text-3xl font-bold mb-6 text-gray-900">
                  Expertise Locale, Impact Global
                </h3>
                <div className="space-y-6">
                  <div className="flex items-start">
                    <div className="w-8 h-8 rounded-full bg-brand flex items-center justify-center mr-4 mt-1 flex-shrink-0">
                      <span className="text-gray-900 font-bold text-sm">1</span>
                    </div>
                    <div>
                      <h4 className="font-bold text-gray-900 mb-2">Analyse Territoriale</h4>
                      <p className="text-gray-600">Étude approfondie de votre marché local et de vos concurrents directs.</p>
                    </div>
                  </div>
                  <div className="flex items-start">
                    <div className="w-8 h-8 rounded-full bg-brand flex items-center justify-center mr-4 mt-1 flex-shrink-0">
                      <span className="text-gray-900 font-bold text-sm">2</span>
                    </div>
                    <div>
                      <h4 className="font-bold text-gray-900 mb-2">Stratégie Adaptée</h4>
                      <p className="text-gray-600">Développement d'une approche marketing spécifique à votre zone d'activité.</p>
                    </div>
                  </div>
                  <div className="flex items-start">
                    <div className="w-8 h-8 rounded-full bg-brand flex items-center justify-center mr-4 mt-1 flex-shrink-0">
                      <span className="text-gray-900 font-bold text-sm">3</span>
                    </div>
                    <div>
                      <h4 className="font-bold text-gray-900 mb-2">Déploiement Local</h4>
                      <p className="text-gray-600">Mise en œuvre avec suivi des performances par territoire.</p>
                    </div>
                  </div>
                </div>
              </div>
              <div className="relative">
                <img 
                  src="https://images.unsplash.com/photo-1551836022-deb4988cc6c0?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80" 
                  alt="Luxembourg territorial coverage"
                  className="w-full h-auto rounded-xl shadow-lg"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-gray-900/20 to-transparent rounded-xl"></div>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 bg-gray-900 relative overflow-hidden">
        <div 
          className="absolute inset-0 bg-cover bg-center bg-no-repeat"
          style={{
            backgroundImage: `url('https://images.unsplash.com/photo-1526304640581-d334cdbbf45e?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80')`
          }}
        />
        <div className="absolute inset-0 bg-gray-900/85"></div>
        
        <div className="max-w-6xl mx-auto px-6 text-center relative z-10">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={staggerChildren}
          >
            <motion.h2 variants={fadeInUp} className="text-4xl md:text-6xl font-bold mb-6 text-white">
              Développez Votre Business{' '}
              <span className="text-brand">
                Localement
              </span>
            </motion.h2>
            <motion.p variants={fadeInUp} className="text-xl mb-10 max-w-4xl mx-auto text-gray-200 leading-relaxed">
              Contactez-nous pour une consultation gratuite adaptée à votre zone d'activité. 
              Analysons ensemble les opportunités spécifiques à votre territoire luxembourgeois.
            </motion.p>
            <motion.div variants={fadeInUp} className="flex flex-col md:flex-row gap-6 justify-center">
              <motion.a 
                href="/consultation-gratuite"
                whileHover={{ scale: 1.05, y: -2 }}
                whileTap={{ scale: 0.95 }}
                className="bg-brand text-gray-900 px-12 py-4 rounded-lg font-bold text-lg shadow-xl hover:shadow-2xl transition-all duration-300 inline-flex items-center justify-center"
              >
                Consultation Locale Gratuite
                <span className="ml-2">→</span>
              </motion.a>
              <motion.a 
                whileHover={{ scale: 1.05, y: -2 }}
                href="tel:+352123456789" 
                className="inline-flex items-center justify-center text-white border-2 border-white px-12 py-4 rounded-lg hover:bg-white hover:text-gray-900 transition-all duration-300 font-bold"
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

export default LocationsPage;