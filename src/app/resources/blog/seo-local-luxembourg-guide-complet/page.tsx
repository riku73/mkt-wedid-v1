'use client';

import React, { useState } from 'react';
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

const SEOLocalLuxembourgBlogPost = () => {
  const [email, setEmail] = useState('');

  const handleNewsletterSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log('Newsletter signup:', email);
    setEmail('');
  };

  const relatedPosts = [
    {
      title: 'Google Ads pour Services Locaux au Luxembourg',
      href: '/resources/blog/google-ads-services-locaux-luxembourg',
      image: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2415&q=80'
    },
    {
      title: 'Marketing Local : Dominer votre Zone à Luxembourg',
      href: '/resources/blog/marketing-local-luxembourg-strategies',
      image: 'https://images.unsplash.com/photo-1486312338219-ce68d2c6f44d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2072&q=80'
    }
  ];

  return (
    <div className="min-h-screen bg-white">
      {/* Article Header */}
      <article className="pt-32 pb-16">
        <div className="max-w-4xl mx-auto px-6">
          <motion.div
            initial="hidden"
            animate="visible"
            variants={staggerChildren}
          >
            <motion.div variants={fadeInUp} className="mb-8">
              <Link href="/resources/blog" className="inline-flex items-center text-brand hover:text-gray-700 transition-colors font-medium">
                ← Retour au Blog
              </Link>
            </motion.div>

            <motion.div variants={fadeInUp} className="mb-8">
              <div className="flex items-center gap-4 mb-6">
                <span className="bg-brand text-gray-900 px-4 py-2 rounded-full text-sm font-semibold">
                  SEO
                </span>
                <span className="text-gray-500">•</span>
                <span className="text-gray-600">15 Mars 2024</span>
                <span className="text-gray-500">•</span>
                <span className="text-gray-600">12 min de lecture</span>
              </div>
              
              <h1 className="text-4xl md:text-5xl font-bold text-gray-900 leading-tight mb-6">
                Guide Complet du SEO Local au Luxembourg
              </h1>
              
              <p className="text-xl text-gray-600 leading-relaxed mb-8">
                Découvrez comment optimiser votre référencement pour dominer les recherches locales luxembourgeoises 
                et attirer plus de clients dans votre zone géographique avec des stratégies éprouvées.
              </p>

              <div className="flex items-center space-x-4 pb-8 border-b border-gray-200">
                <img 
                  src="https://images.unsplash.com/photo-1494790108755-2616b612b820?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=387&q=80" 
                  alt="Marie Dubois"
                  className="w-12 h-12 rounded-full object-cover"
                />
                <div>
                  <p className="font-semibold text-gray-900">Marie Dubois</p>
                  <p className="text-gray-600">SEO Manager chez Wedid</p>
                </div>
              </div>
            </motion.div>

            <motion.div variants={fadeInUp} className="mb-12">
              <img 
                src="https://images.unsplash.com/photo-1560472354-b33ff0c44a43?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2026&q=80"
                alt="SEO Local Luxembourg"
                className="w-full h-64 md:h-96 object-cover rounded-2xl shadow-lg"
              />
            </motion.div>
          </motion.div>
        </div>
      </article>

      {/* Article Content */}
      <div className="max-w-4xl mx-auto px-6 pb-16">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={staggerChildren}
          className="prose prose-lg max-w-none"
        >
          <motion.div variants={fadeInUp}>
            <p className="text-lg text-gray-700 leading-relaxed mb-8">
              Le SEO local est devenu un élément crucial pour les entreprises luxembourgeoises qui souhaitent 
              attirer des clients dans leur zone géographique. Avec plus de 80% des consommateurs qui effectuent 
              des recherches locales avant de visiter un magasin ou de contacter une entreprise, optimiser votre 
              présence locale en ligne n'est plus une option, c'est une nécessité.
            </p>

            <h2 className="text-3xl font-bold text-gray-900 mt-12 mb-6">Pourquoi le SEO Local est Crucial au Luxembourg ?</h2>
            
            <p className="text-lg text-gray-700 leading-relaxed mb-6">
              Le Luxembourg présente des spécificités uniques qui rendent le SEO local particulièrement important :
            </p>

            <ul className="list-disc pl-6 mb-8 space-y-3 text-lg text-gray-700">
              <li><strong>Marché concentré :</strong> Avec une superficie réduite, la concurrence locale est intense</li>
              <li><strong>Multilinguisme :</strong> Français, allemand, luxembourgeois et anglais coexistent</li>
              <li><strong>Population mobile :</strong> Beaucoup de frontaliers et résidents internationaux</li>
              <li><strong>Secteurs spécialisés :</strong> Finance, technologie, services aux entreprises dominent</li>
            </ul>

            <h2 className="text-3xl font-bold text-gray-900 mt-12 mb-6">Optimiser Google My Business pour le Luxembourg</h2>
            
            <p className="text-lg text-gray-700 leading-relaxed mb-6">
              Votre fiche Google My Business est le pilier de votre stratégie SEO local. Voici comment l'optimiser :
            </p>

            <h3 className="text-2xl font-bold text-gray-900 mt-8 mb-4">1. Informations Complètes et Précises</h3>
            <ul className="list-disc pl-6 mb-6 space-y-2 text-lg text-gray-700">
              <li>Adresse exacte avec code postal luxembourgeois</li>
              <li>Numéro de téléphone local (+352)</li>
              <li>Horaires d'ouverture détaillés</li>
              <li>Site web optimisé pour mobile</li>
              <li>Catégories d'activité précises</li>
            </ul>

            <h3 className="text-2xl font-bold text-gray-900 mt-8 mb-4">2. Photos de Qualité</h3>
            <p className="text-lg text-gray-700 leading-relaxed mb-6">
              Ajoutez des photos professionnelles de votre établissement, de votre équipe et de vos produits/services. 
              Les entreprises avec des photos reçoivent 42% de demandes d'itinéraires supplémentaires sur Google.
            </p>

            <h3 className="text-2xl font-bold text-gray-900 mt-8 mb-4">3. Gestion des Avis Clients</h3>
            <p className="text-lg text-gray-700 leading-relaxed mb-6">
              Encouragez vos clients satisfaits à laisser des avis. Répondez systématiquement aux avis, 
              qu'ils soient positifs ou négatifs. Une gestion proactive des avis améliore votre crédibilité 
              et votre classement local.
            </p>

            <div className="bg-brand/10 border-l-4 border-brand p-6 my-8">
              <h4 className="text-xl font-bold text-gray-900 mb-3">💡 Conseil d'Expert</h4>
              <p className="text-gray-700">
                Utilisez les mots-clés géographiques spécifiques au Luxembourg dans vos descriptions : 
                "Luxembourg-Ville", "Kirchberg", "Clausen", "Bonnevoie". Ces termes locaux améliorent 
                significativement votre visibilité pour les recherches géolocalisées.
              </p>
            </div>

            <h2 className="text-3xl font-bold text-gray-900 mt-12 mb-6">Stratégies de Contenu Local</h2>
            
            <p className="text-lg text-gray-700 leading-relaxed mb-6">
              Créez du contenu qui résonne avec votre audience luxembourgeoise :
            </p>

            <h3 className="text-2xl font-bold text-gray-900 mt-8 mb-4">Pages de Localisation</h3>
            <p className="text-lg text-gray-700 leading-relaxed mb-6">
              Créez des pages dédiées pour chaque zone que vous servez : Luxembourg-Ville, Esch-sur-Alzette, 
              Differdange, etc. Chaque page doit contenir :
            </p>

            <ul className="list-disc pl-6 mb-8 space-y-2 text-lg text-gray-700">
              <li>Informations spécifiques à la zone</li>
              <li>Témoignages de clients locaux</li>
              <li>Études de cas régionales</li>
              <li>Références aux landmarks locaux</li>
            </ul>

            <h3 className="text-2xl font-bold text-gray-900 mt-8 mb-4">Blog Local</h3>
            <p className="text-lg text-gray-700 leading-relaxed mb-6">
              Publiez régulièrement du contenu sur :
            </p>

            <ul className="list-disc pl-6 mb-8 space-y-2 text-lg text-gray-700">
              <li>Événements locaux (Digital Tech Summit, ICT Spring)</li>
              <li>Actualités économiques luxembourgeoises</li>
              <li>Guides sectoriels (finance, tech, services)</li>
              <li>Interviews d'entrepreneurs locaux</li>
            </ul>

            <h2 className="text-3xl font-bold text-gray-900 mt-12 mb-6">Citations et Annuaires Locaux</h2>
            
            <p className="text-lg text-gray-700 leading-relaxed mb-6">
              Construisez votre autorité locale en vous inscrivant sur les annuaires luxembourgeois pertinents :
            </p>

            <ul className="list-disc pl-6 mb-8 space-y-2 text-lg text-gray-700">
              <li><strong>Editus.lu :</strong> L'annuaire de référence au Luxembourg</li>
              <li><strong>Chambre de Commerce :</strong> Inscription obligatoire pour les entreprises</li>
              <li><strong>Luxflag :</strong> Pour les entreprises tech et innovantes</li>
              <li><strong>Annuaires sectoriels :</strong> Selon votre domaine d'activité</li>
            </ul>

            <div className="bg-gray-50 p-8 rounded-2xl my-8">
              <h4 className="text-xl font-bold text-gray-900 mb-4">📊 Statistiques Clés</h4>
              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <div className="text-3xl font-bold text-brand">78%</div>
                  <p className="text-gray-700">des recherches locales aboutissent à un achat</p>
                </div>
                <div>
                  <div className="text-3xl font-bold text-brand">50%</div>
                  <p className="text-gray-700">des consommateurs visitent le magasin le jour même</p>
                </div>
              </div>
            </div>

            <h2 className="text-3xl font-bold text-gray-900 mt-12 mb-6">Mesurer et Optimiser</h2>
            
            <p className="text-lg text-gray-700 leading-relaxed mb-6">
              Utilisez ces outils pour suivre vos performances SEO local :
            </p>

            <ul className="list-disc pl-6 mb-8 space-y-2 text-lg text-gray-700">
              <li><strong>Google Analytics :</strong> Trafic par zone géographique</li>
              <li><strong>Google Search Console :</strong> Requêtes de recherche locales</li>
              <li><strong>Google My Business Insights :</strong> Performances de votre fiche</li>
              <li><strong>Outils de tracking de positions :</strong> SEMrush, Ahrefs pour le suivi local</li>
            </ul>

            <h2 className="text-3xl font-bold text-gray-900 mt-12 mb-6">Conclusion</h2>
            
            <p className="text-lg text-gray-700 leading-relaxed mb-6">
              Le SEO local au Luxembourg demande une approche spécialisée qui tient compte des spécificités 
              du marché. En optimisant votre Google My Business, en créant du contenu local pertinent et 
              en construisant des citations de qualité, vous pouvez significativement améliorer votre 
              visibilité et attirer plus de clients locaux.
            </p>

            <p className="text-lg text-gray-700 leading-relaxed mb-8">
              N'oubliez pas que le SEO local est un processus continu qui nécessite du temps et de la 
              persévérance. Les résultats apparaissent généralement après 3-6 mois d'efforts constants.
            </p>
          </motion.div>
        </motion.div>
      </div>

      {/* CTA Section */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={staggerChildren}
          >
            <motion.h3 variants={fadeInUp} className="text-3xl font-bold text-gray-900 mb-4">
              Besoin d'Aide pour Votre SEO Local ?
            </motion.h3>
            <motion.p variants={fadeInUp} className="text-lg text-gray-600 mb-8">
              Notre équipe d'experts SEO peut vous aider à dominer les recherches locales au Luxembourg.
            </motion.p>
            <motion.div variants={fadeInUp} className="flex flex-col md:flex-row gap-4 justify-center">
              <Link
                href="/consultation-gratuite"
                className="bg-brand text-gray-900 px-8 py-4 rounded-lg font-bold text-lg shadow-lg hover:shadow-xl transition-all duration-300"
              >
                Consultation SEO Gratuite →
              </Link>
              <Link
                href="/services/marketing-digital/seo-sea"
                className="border-2 border-gray-900 text-gray-900 px-8 py-4 rounded-lg font-bold hover:bg-gray-900 hover:text-white transition-all duration-300"
              >
                Nos Services SEO
              </Link>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Newsletter */}
      <section className="py-16 bg-gray-900">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={staggerChildren}
          >
            <motion.h3 variants={fadeInUp} className="text-3xl font-bold text-white mb-4">
              Recevez Nos Derniers{' '}
              <span className="text-brand">Conseils SEO</span>
            </motion.h3>
            <motion.p variants={fadeInUp} className="text-lg text-gray-300 mb-8">
              Une fois par semaine, les meilleures stratégies SEO adaptées au marché luxembourgeois.
            </motion.p>
            
            <motion.form 
              variants={fadeInUp}
              onSubmit={handleNewsletterSubmit}
              className="flex flex-col md:flex-row gap-4 max-w-lg mx-auto"
            >
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="Votre adresse email"
                className="flex-1 px-6 py-4 rounded-lg text-gray-900 font-medium focus:outline-none focus:ring-2 focus:ring-brand"
                required
              />
              <button
                type="submit"
                className="bg-brand text-gray-900 px-8 py-4 rounded-lg font-bold shadow-xl hover:shadow-2xl transition-all duration-300"
              >
                S'abonner
              </button>
            </motion.form>
          </motion.div>
        </div>
      </section>

      {/* Related Posts */}
      <section className="py-16 bg-white">
        <div className="max-w-4xl mx-auto px-6">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={staggerChildren}
          >
            <motion.h3 variants={fadeInUp} className="text-3xl font-bold text-gray-900 mb-8 text-center">
              Articles Similaires
            </motion.h3>
            
            <motion.div variants={staggerChildren} className="grid md:grid-cols-2 gap-8">
              {relatedPosts.map((post, index) => (
                <motion.div key={index} variants={fadeInUp}>
                  <Link href={post.href} className="group block">
                    <div className="bg-white rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 overflow-hidden">
                      <img 
                        src={post.image} 
                        alt={post.title}
                        className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-300"
                      />
                      <div className="p-6">
                        <h4 className="text-xl font-bold text-gray-900 group-hover:text-brand transition-colors">
                          {post.title}
                        </h4>
                        <span className="inline-flex items-center mt-4 font-semibold text-gray-600 group-hover:text-brand transition-colors">
                          Lire l'article
                          <span className="ml-2 transition-transform group-hover:translate-x-1">→</span>
                        </span>
                      </div>
                    </div>
                  </Link>
                </motion.div>
              ))}
            </motion.div>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default SEOLocalLuxembourgBlogPost;