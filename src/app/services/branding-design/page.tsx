'use client';

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

const BrandingDesignPage = () => {
  return (
    <div className="min-h-screen bg-white">
      {/* Navigation */}
      <nav className="fixed w-full top-0 z-50 bg-white/95 backdrop-blur-sm border-b border-gray-200 shadow-sm">
        <div className="max-w-7xl mx-auto px-6">
          <div className="flex justify-between items-center h-20">
            <div className="logo">
              <Link href="/" className="text-gray-900 font-bold text-2xl">Wedid</Link>
            </div>
            <div className="hidden lg:flex space-x-10">
              <Link href="/" className="text-gray-700 hover:text-gray-900 transition-colors font-medium">Accueil</Link>
              <Link href="/services" className="text-gray-700 hover:text-gray-900 transition-colors font-medium">Services</Link>
              <Link href="/services/branding-design" className="text-gray-900 font-semibold">Branding & Design</Link>
              <a href="#contact" className="text-gray-700 hover:text-gray-900 transition-colors font-medium">Contact</a>
            </div>
            <motion.button 
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="bg-brand text-gray-900 px-6 py-3 rounded-lg font-semibold shadow-md hover:shadow-lg transition-all duration-300"
            >
              Audit Gratuit
            </motion.button>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="relative min-h-[85vh] flex items-center justify-center overflow-hidden pt-20">
        <div 
          className="absolute inset-0 bg-cover bg-center bg-no-repeat"
          style={{
            backgroundImage: `url('https://images.unsplash.com/photo-1561070791-2526d30994b5?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2064&q=80')`
          }}
        />
        <div className="absolute inset-0 bg-gray-900/75"></div>
        
        <div className="max-w-6xl mx-auto px-6 relative z-10 text-center text-white">
          <motion.div
            initial="hidden"
            animate="visible"
            variants={staggerChildren}
          >
            <motion.div variants={fadeInUp} className="mb-8">
              <span className="inline-block bg-brand text-gray-900 px-4 py-2 rounded-full text-sm font-semibold mb-8">
                🎨 BRANDING & DESIGN LUXEMBOURG
              </span>
            </motion.div>
            
            <motion.h1 variants={fadeInUp} className="text-5xl md:text-7xl font-bold mb-8 max-w-5xl mx-auto leading-tight">
              Identité Visuelle{' '}
              <span className="text-brand">
                Distinctive
              </span>{' '}
              & Mémorable
            </motion.h1>
            
            <motion.p variants={fadeInUp} className="text-xl md:text-2xl mb-12 max-w-4xl mx-auto text-gray-200 leading-relaxed font-normal">
              Création d'identités visuelles fortes et supports marketing créatifs pour renforcer 
              votre image de marque sur le marché luxembourgeois et international.
            </motion.p>
            
            <motion.div variants={fadeInUp} className="flex flex-col md:flex-row gap-4 justify-center items-center">
              <motion.button 
                whileHover={{ scale: 1.05, y: -2 }}
                whileTap={{ scale: 0.95 }}
                className="bg-brand text-gray-900 px-8 py-4 rounded-lg font-bold text-lg shadow-xl hover:shadow-2xl transition-all duration-300"
              >
                Audit de Marque →
              </motion.button>
              
              <motion.a 
                whileHover={{ scale: 1.05, y: -2 }}
                href="#portfolio" 
                className="text-white border-2 border-white px-8 py-4 rounded-lg hover:bg-white hover:text-gray-900 transition-all duration-300 font-semibold"
              >
                Voir notre Portfolio
              </motion.a>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Services Overview */}
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
                NOS SPÉCIALITÉS
              </span>
            </motion.div>
            <motion.h2 variants={fadeInUp} className="text-4xl md:text-5xl font-bold mb-6 text-gray-900">
              3 Piliers du Branding
            </motion.h2>
            <motion.p variants={fadeInUp} className="text-xl max-w-4xl mx-auto text-gray-600 leading-relaxed">
              Chaque création respecte les codes culturels luxembourgeois tout en s'adaptant 
              aux standards internationaux de votre secteur d'activité.
            </motion.p>
          </motion.div>

          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={staggerChildren}
            className="grid lg:grid-cols-3 gap-8 mb-16"
          >
            {[
              {
                title: 'Identité Visuelle',
                description: 'Création de logos, chartes graphiques et guidelines pour une identité cohérente et impactante.',
                icon: '🎯',
                image: 'https://images.unsplash.com/photo-1626785774573-4b799315345d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2071&q=80',
                features: ['Logo & variations', 'Charte couleurs', 'Typographie', 'Guidelines'],
                href: '/services/branding-design/identite-visuelle',
                stats: '100+ identités créées'
              },
              {
                title: 'Design Graphique',
                description: 'Créations visuelles sur-mesure pour tous vos besoins communication print et digital.',
                icon: '✨',
                image: 'https://images.unsplash.com/photo-1611224923853-80b023f02d71?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2039&q=80',
                features: ['Affiches & flyers', 'Brochures', 'Packaging', 'Illustrations'],
                href: '/services/branding-design/design-graphique',
                stats: '500+ créations livrées'
              },
              {
                title: 'Supports Marketing',
                description: 'Conception de supports print et digital optimisés pour maximiser l\'impact de vos campagnes.',
                icon: '📢',
                image: 'https://images.unsplash.com/photo-1586717791821-3f44a563fa4c?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80',
                features: ['Catalogues', 'Bannières web', 'Présentations', 'Signalétique'],
                href: '/services/branding-design/supports-marketing',
                stats: '95% de satisfaction'
              }
            ].map((service, index) => (
              <motion.div
                key={index}
                variants={fadeInUp}
                className="group bg-white rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 overflow-hidden"
              >
                <div className="relative h-48 overflow-hidden">
                  <img 
                    src={service.image} 
                    alt={service.title}
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gray-900/40"></div>
                  <div className="absolute top-4 right-4">
                    <div className="inline-flex items-center justify-center w-12 h-12 rounded-lg bg-white/90 text-xl shadow-lg">
                      {service.icon}
                    </div>
                  </div>
                  <div className="absolute bottom-4 left-4">
                    <span className="inline-block bg-brand text-gray-900 px-3 py-1 rounded-full text-sm font-semibold">
                      {service.stats}
                    </span>
                  </div>
                </div>
                
                <div className="p-8">
                  <h3 className="text-2xl font-bold mb-4 text-gray-900">{service.title}</h3>
                  <p className="text-gray-600 text-base mb-6 leading-relaxed">{service.description}</p>
                  
                  <ul className="space-y-3 mb-8">
                    {service.features.map((feature, idx) => (
                      <li key={idx} className="flex items-center text-gray-700">
                        <div className="w-2 h-2 rounded-full bg-brand mr-3 flex-shrink-0"></div>
                        <span className="font-medium">{feature}</span>
                      </li>
                    ))}
                  </ul>

                  <Link
                    href={service.href}
                    className="inline-flex items-center justify-center w-full bg-gray-900 text-white px-6 py-3 rounded-lg font-semibold hover:bg-gray-800 transition-colors group"
                  >
                    En savoir plus
                    <span className="ml-2 transition-transform group-hover:translate-x-1">→</span>
                  </Link>
                </div>
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
              Prêt à Créer Votre{' '}
              <span className="text-brand">
                Identité Unique
              </span> ?
            </motion.h2>
            <motion.p variants={fadeInUp} className="text-xl mb-10 max-w-4xl mx-auto text-gray-200 leading-relaxed">
              Obtenez un audit de marque gratuit et découvrez comment renforcer 
              votre identité visuelle au Luxembourg.
            </motion.p>
            <motion.div variants={fadeInUp} className="flex flex-col md:flex-row gap-4 justify-center">
              <motion.button 
                whileHover={{ scale: 1.05, y: -2 }}
                whileTap={{ scale: 0.95 }}
                className="bg-brand text-gray-900 px-10 py-4 rounded-lg font-bold text-lg shadow-xl hover:shadow-2xl transition-all duration-300"
              >
                Audit de Marque →
              </motion.button>
              <motion.a 
                whileHover={{ scale: 1.05, y: -2 }}
                href="tel:+352123456789" 
                className="inline-flex items-center text-white border-2 border-white px-10 py-4 rounded-lg hover:bg-white hover:text-gray-900 transition-all duration-300 font-bold"
              >
                📞 +352 12 34 56 789
              </motion.a>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-16 border-t border-gray-800">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid md:grid-cols-4 gap-8 mb-12">
            <div className="md:col-span-2">
              <h4 className="text-brand mb-6 text-2xl font-bold">Wedid</h4>
              <p className="text-lg leading-relaxed text-gray-300 mb-6 max-w-md">
                L'agence créative de référence au Luxembourg. 
                Identités fortes, designs mémorables.
              </p>
              <div className="space-y-2">
                <p className="flex items-center text-gray-300"><span className="mr-2">📍</span> Luxembourg-Ville</p>
                <p className="flex items-center text-gray-300"><span className="mr-2">📞</span> +352 12 34 56 789</p>
                <p className="flex items-center text-gray-300"><span className="mr-2">✉️</span> contact@wedid.lu</p>
              </div>
            </div>
            <div>
              <h5 className="text-white mb-4 font-bold">Branding & Design</h5>
              <ul className="space-y-2 text-gray-300">
                <li><Link href="/services/branding-design/identite-visuelle" className="hover:text-brand transition-colors">Identité Visuelle</Link></li>
                <li><Link href="/services/branding-design/design-graphique" className="hover:text-brand transition-colors">Design Graphique</Link></li>
                <li><Link href="/services/branding-design/supports-marketing" className="hover:text-brand transition-colors">Supports Marketing</Link></li>
                <li><Link href="/services" className="hover:text-brand transition-colors">Tous nos services</Link></li>
              </ul>
            </div>
            <div>
              <h5 className="text-white mb-4 font-bold">Portfolio</h5>
              <ul className="space-y-2 text-gray-300">
                <li><a href="#" className="hover:text-brand transition-colors">Logos</a></li>
                <li><a href="#" className="hover:text-brand transition-colors">Print</a></li>
                <li><a href="#" className="hover:text-brand transition-colors">Digital</a></li>
                <li><a href="#" className="hover:text-brand transition-colors">Contact</a></li>
              </ul>
            </div>
          </div>
          <div className="border-t border-gray-800 pt-8 text-center text-gray-400">
            <p>&copy; 2024 Wedid. Tous droits réservés. | Agence Créative Luxembourg</p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default BrandingDesignPage;