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

const LinkedInB2BLuxembourgBlogPost = () => {
  const [email, setEmail] = useState('');

  const handleNewsletterSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log('Newsletter signup:', email);
    setEmail('');
  };

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
                  Social Media
                </span>
                <span className="text-gray-500">•</span>
                <span className="text-gray-600">12 Mars 2024</span>
                <span className="text-gray-500">•</span>
                <span className="text-gray-600">10 min de lecture</span>
              </div>
              
              <h1 className="text-4xl md:text-5xl font-bold text-gray-900 leading-tight mb-6">
                Social Media B2B : Réussir sur LinkedIn au Luxembourg
              </h1>
              
              <p className="text-xl text-gray-600 leading-relaxed mb-8">
                Stratégies avancées pour développer votre présence LinkedIn et générer des leads B2B qualifiés 
                dans l'écosystème d'affaires luxembourgeois hautement connecté et international.
              </p>

              <div className="flex items-center space-x-4 pb-8 border-b border-gray-200">
                <img 
                  src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80" 
                  alt="Jean-Claude Weber"
                  className="w-12 h-12 rounded-full object-cover"
                />
                <div>
                  <p className="font-semibold text-gray-900">Jean-Claude Weber</p>
                  <p className="text-gray-600">Social Media Strategist chez Wedid</p>
                </div>
              </div>
            </motion.div>

            <motion.div variants={fadeInUp} className="mb-12">
              <img 
                src="https://images.unsplash.com/photo-1611224923853-80b023f02d71?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2039&q=80"
                alt="LinkedIn B2B Luxembourg"
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
              Le Luxembourg, en tant que hub financier et technologique européen, offre un terrain 
              particulièrement fertile pour le marketing B2B sur LinkedIn. Avec plus de 70% des dirigeants 
              d'entreprises luxembourgeoises actifs sur cette plateforme, maîtriser LinkedIn est 
              devenu essentiel pour développer son business.
            </p>

            <h2 className="text-3xl font-bold text-gray-900 mt-12 mb-6">Le Paysage LinkedIn au Luxembourg</h2>
            
            <p className="text-lg text-gray-700 leading-relaxed mb-6">
              Le marché luxembourgeois présente des caractéristiques uniques sur LinkedIn :
            </p>

            <ul className="list-disc pl-6 mb-8 space-y-3 text-lg text-gray-700">
              <li><strong>Forte concentration de décideurs :</strong> 45% des utilisateurs sont des C-level executives</li>
              <li><strong>Multiculturalisme :</strong> Contenu en français, anglais, allemand et luxembourgeois</li>
              <li><strong>Secteurs dominants :</strong> Finance (35%), Tech (25%), Consulting (20%)</li>
              <li><strong>Réseau dense :</strong> Moyenne de 800+ connexions par profil professionnel</li>
            </ul>

            <h2 className="text-3xl font-bold text-gray-900 mt-12 mb-6">Optimiser Votre Profil d'Entreprise</h2>
            
            <h3 className="text-2xl font-bold text-gray-900 mt-8 mb-4">1. Page Entreprise Complète</h3>
            <p className="text-lg text-gray-700 leading-relaxed mb-6">
              Votre page entreprise doit refléter votre positionnement sur le marché luxembourgeois :
            </p>

            <ul className="list-disc pl-6 mb-6 space-y-2 text-lg text-gray-700">
              <li>Logo haute résolution et banner professionnel</li>
              <li>Description multilingue (français/anglais minimum)</li>
              <li>Localisation précise (Luxembourg-Ville, Kirchberg, etc.)</li>
              <li>Secteurs d'activité clairement définis</li>
              <li>Contact direct avec numéro luxembourgeois</li>
            </ul>

            <h3 className="text-2xl font-bold text-gray-900 mt-8 mb-4">2. Showcase Pages Sectorielles</h3>
            <p className="text-lg text-gray-700 leading-relaxed mb-6">
              Créez des pages vitrine dédiées à vos différents services ou secteurs d'activité 
              pour mieux cibler les audiences spécialisées du Luxembourg.
            </p>

            <div className="bg-brand/10 border-l-4 border-brand p-6 my-8">
              <h4 className="text-xl font-bold text-gray-900 mb-3">💡 Astuce Luxembourg</h4>
              <p className="text-gray-700">
                Mettez en avant vos certifications locales (Chambre de Commerce, Luxflag, etc.) 
                et vos partenariats avec les institutions luxembourgeoises pour renforcer votre 
                crédibilité locale.
              </p>
            </div>

            <h2 className="text-3xl font-bold text-gray-900 mt-12 mb-6">Stratégie de Contenu B2B</h2>
            
            <h3 className="text-2xl font-bold text-gray-900 mt-8 mb-4">Types de Contenu Performants</h3>
            
            <div className="grid md:grid-cols-2 gap-6 mb-8">
              <div className="bg-gray-50 p-6 rounded-lg">
                <h4 className="text-lg font-bold text-gray-900 mb-3">📊 Études de Marché</h4>
                <p className="text-gray-700">Analyses du marché luxembourgeois, tendances sectorielles, insights économiques</p>
              </div>
              <div className="bg-gray-50 p-6 rounded-lg">
                <h4 className="text-lg font-bold text-gray-900 mb-3">🎯 Cas d'Usage</h4>
                <p className="text-gray-700">Success stories avec entreprises luxembourgeoises, ROI mesurable</p>
              </div>
              <div className="bg-gray-50 p-6 rounded-lg">
                <h4 className="text-lg font-bold text-gray-900 mb-3">🔮 Thought Leadership</h4>
                <p className="text-gray-700">Vision prospective, innovations, disruptions sectorielles</p>
              </div>
              <div className="bg-gray-50 p-6 rounded-lg">
                <h4 className="text-lg font-bold text-gray-900 mb-3">📚 Guides Pratiques</h4>
                <p className="text-gray-700">How-to adaptés aux réglementations et pratiques luxembourgeoises</p>
              </div>
            </div>

            <h3 className="text-2xl font-bold text-gray-900 mt-8 mb-4">Calendrier Editorial Optimal</h3>
            
            <ul className="list-disc pl-6 mb-8 space-y-2 text-lg text-gray-700">
              <li><strong>Lundi-Mardi :</strong> Contenu business et insights marché (9h-11h)</li>
              <li><strong>Mercredi-Jeudi :</strong> Thought leadership et analyses (14h-16h)</li>
              <li><strong>Vendredi :</strong> Contenu plus léger, coulisses entreprise (10h-12h)</li>
            </ul>

            <h2 className="text-3xl font-bold text-gray-900 mt-12 mb-6">Lead Generation Avancée</h2>
            
            <h3 className="text-2xl font-bold text-gray-900 mt-8 mb-4">LinkedIn Sales Navigator</h3>
            <p className="text-lg text-gray-700 leading-relaxed mb-6">
              Utilisez Sales Navigator pour identifier et cibler les décideurs luxembourgeois :
            </p>

            <ul className="list-disc pl-6 mb-8 space-y-2 text-lg text-gray-700">
              <li>Recherches par entreprise (top 500 Luxembourg)</li>
              <li>Filtrage par fonction et séniorité</li>
              <li>Alertes sur changements de poste</li>
              <li>Tracking des interactions et engagement</li>
            </ul>

            <h3 className="text-2xl font-bold text-gray-900 mt-8 mb-4">Stratégie d'Outreach</h3>
            
            <div className="bg-gray-50 p-8 rounded-2xl my-8">
              <h4 className="text-xl font-bold text-gray-900 mb-4">🎯 Template d'Approche Luxembourg</h4>
              <div className="space-y-4 text-gray-700">
                <p><strong>1. Connexion personnalisée :</strong></p>
                <p className="pl-4 italic">
                  "Bonjour [Prénom], j'ai remarqué votre expertise en [domaine] chez [Entreprise]. 
                  En tant que spécialiste du [votre domaine] pour les entreprises luxembourgeoises, 
                  j'aimerais échanger sur les défis actuels du secteur."
                </p>
                
                <p><strong>2. Follow-up avec valeur :</strong></p>
                <p className="pl-4 italic">
                  "Suite à notre connexion, je partage avec vous notre dernière étude sur [sujet pertinent] 
                  au Luxembourg. Les insights pourraient vous intéresser pour [problématique spécifique]."
                </p>
              </div>
            </div>

            <h2 className="text-3xl font-bold text-gray-900 mt-12 mb-6">LinkedIn Ads B2B au Luxembourg</h2>
            
            <h3 className="text-2xl font-bold text-gray-900 mt-8 mb-4">Ciblage Précis</h3>
            <p className="text-lg text-gray-700 leading-relaxed mb-6">
              Exploitez les options de ciblage LinkedIn pour atteindre votre audience B2B luxembourgeoise :
            </p>

            <ul className="list-disc pl-6 mb-8 space-y-2 text-lg text-gray-700">
              <li><strong>Géographique :</strong> Luxembourg + 25km pour inclure frontaliers</li>
              <li><strong>Secteur d'activité :</strong> Finance, Technology, Professional Services</li>
              <li><strong>Taille d'entreprise :</strong> 50-500 salariés (sweet spot Luxembourg)</li>
              <li><strong>Fonction :</strong> C-Suite, VP, Director, Manager</li>
              <li><strong>Compétences :</strong> Mots-clés techniques spécifiques</li>
            </ul>

            <h3 className="text-2xl font-bold text-gray-900 mt-8 mb-4">Formats Publicitaires Performants</h3>
            
            <div className="grid md:grid-cols-3 gap-6 mb-8">
              <div className="text-center p-6 border border-gray-200 rounded-lg">
                <div className="text-2xl mb-3">📄</div>
                <h4 className="font-bold text-gray-900 mb-2">Sponsored Content</h4>
                <p className="text-sm text-gray-600">Articles natifs, cas d'études</p>
              </div>
              <div className="text-center p-6 border border-gray-200 rounded-lg">
                <div className="text-2xl mb-3">✉️</div>
                <h4 className="font-bold text-gray-900 mb-2">InMail Messages</h4>
                <p className="text-sm text-gray-600">Messages directs personnalisés</p>
              </div>
              <div className="text-center p-6 border border-gray-200 rounded-lg">
                <div className="text-2xl mb-3">🎯</div>
                <h4 className="font-bold text-gray-900 mb-2">Lead Gen Forms</h4>
                <p className="text-sm text-gray-600">Capture de leads simplifiée</p>
              </div>
            </div>

            <h2 className="text-3xl font-bold text-gray-900 mt-12 mb-6">Mesurer le ROI</h2>
            
            <h3 className="text-2xl font-bold text-gray-900 mt-8 mb-4">KPIs Essentiels</h3>
            
            <div className="bg-gray-50 p-8 rounded-2xl my-8">
              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <h4 className="font-bold text-gray-900 mb-3">Métriques d'Engagement</h4>
                  <ul className="space-y-2 text-gray-700">
                    <li>• Taux d'engagement posts (&gt;3%)</li>
                    <li>• Croissance followers qualifiés</li>
                    <li>• Partages et commentaires</li>
                    <li>• Clics vers site web</li>
                  </ul>
                </div>
                <div>
                  <h4 className="font-bold text-gray-900 mb-3">Métriques Business</h4>
                  <ul className="space-y-2 text-gray-700">
                    <li>• Leads générés</li>
                    <li>• Coût par lead (CPL)</li>
                    <li>• Taux de conversion</li>
                    <li>• Revenus attribués</li>
                  </ul>
                </div>
              </div>
            </div>

            <h2 className="text-3xl font-bold text-gray-900 mt-12 mb-6">Best Practices Luxembourg</h2>
            
            <ul className="list-disc pl-6 mb-8 space-y-3 text-lg text-gray-700">
              <li><strong>Timing :</strong> Postez entre 9h-11h et 14h-16h (heures de bureau luxembourgeoises)</li>
              <li><strong>Langue :</strong> Alternez français/anglais selon votre audience cible</li>
              <li><strong>Networking :</strong> Participez aux événements digitaux luxembourgeois</li>
              <li><strong>Partenariats :</strong> Collaborez avec influenceurs B2B locaux</li>
              <li><strong>Compliance :</strong> Respectez le RGPD dans vos campagnes</li>
            </ul>

            <h2 className="text-3xl font-bold text-gray-900 mt-12 mb-6">Conclusion</h2>
            
            <p className="text-lg text-gray-700 leading-relaxed mb-6">
              LinkedIn reste LA plateforme incontournable pour le B2B au Luxembourg. En adaptant 
              votre stratégie aux spécificités du marché local - multiculturalisme, concentration 
              de décideurs, secteurs clés - vous pouvez générer des leads qualifiés et développer 
              des partenariats durables.
            </p>

            <p className="text-lg text-gray-700 leading-relaxed mb-8">
              La clé du succès réside dans la création de contenu de valeur, l'engagement 
              authentique avec votre réseau et l'utilisation intelligente des outils de 
              ciblage LinkedIn pour atteindre les bons décideurs au bon moment.
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
              Optimisons Votre Stratégie LinkedIn B2B
            </motion.h3>
            <motion.p variants={fadeInUp} className="text-lg text-gray-600 mb-8">
              Notre équipe d'experts LinkedIn peut vous aider à générer plus de leads qualifiés au Luxembourg.
            </motion.p>
            <motion.div variants={fadeInUp} className="flex flex-col md:flex-row gap-4 justify-center">
              <Link
                href="/consultation-gratuite"
                className="bg-brand text-gray-900 px-8 py-4 rounded-lg font-bold text-lg shadow-lg hover:shadow-xl transition-all duration-300"
              >
                Audit LinkedIn Gratuit →
              </Link>
              <Link
                href="/services/marketing-digital/social-media"
                className="border-2 border-gray-900 text-gray-900 px-8 py-4 rounded-lg font-bold hover:bg-gray-900 hover:text-white transition-all duration-300"
              >
                Nos Services Social Media
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
              Stratégies LinkedIn{' '}
              <span className="text-brand">Exclusives</span>
            </motion.h3>
            <motion.p variants={fadeInUp} className="text-lg text-gray-300 mb-8">
              Recevez chaque semaine nos meilleures tactiques LinkedIn B2B adaptées au Luxembourg.
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
    </div>
  );
};

export default LinkedInB2BLuxembourgBlogPost;