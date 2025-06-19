'use client';

import { useState } from 'react';
import { motion, Variants } from 'framer-motion';
import Link from 'next/link';

interface ConsultationForm {
  // Personal Information
  firstName: string;
  lastName: string;
  email: string;
  phone: string;
  company: string;
  position: string;
  
  // Project Information
  projectType: string;
  currentWebsite: string;
  primaryGoal: string;
  targetAudience: string;
  budget: string;
  timeline: string;
  
  // Marketing Information
  currentMarketing: string[];
  challengeAreas: string[];
  competitors: string;
  
  // Additional Information
  specificNeeds: string;
  meetingPreference: string;
  meetingTime: string;
}

const projectTypes = [
  'Création de site web',
  'Refonte de site web',
  'Marketing digital complet',
  'SEO & Référencement',
  'Social Media Marketing',
  'Branding & Identité visuelle',
  'E-commerce',
  'Application web',
  'Consulting marketing',
  'Formation équipe',
  'Audit marketing',
  'Autre'
];

const budgetRanges = [
  'Moins de 5 000€',
  '5 000€ - 10 000€',
  '10 000€ - 25 000€',
  '25 000€ - 50 000€',
  '50 000€ - 100 000€',
  'Plus de 100 000€',
  'Budget à définir'
];

const timelineOptions = [
  'Urgent (< 1 mois)',
  '1-3 mois',
  '3-6 mois',
  '6-12 mois',
  'Plus de 12 mois',
  'Timeline flexible'
];

const currentMarketingOptions = [
  'Site web existant',
  'Réseaux sociaux',
  'Google Ads',
  'SEO',
  'Email marketing',
  'Content marketing',
  'Relations presse',
  'Événements',
  'Aucune stratégie digitale',
  'Autre'
];

const challengeOptions = [
  'Génération de leads',
  'Visibilité en ligne',
  'Conversion des visiteurs',
  'Présence sur les réseaux sociaux',
  'Référencement Google',
  'Image de marque',
  'Concurrence',
  'Mesure du ROI',
  'Formation équipe',
  'Stratégie digitale'
];

const meetingPreferences = [
  'Vidéoconférence',
  'Téléphone',
  'Rendez-vous au bureau (Luxembourg)',
  'Rendez-vous dans vos locaux'
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
      staggerChildren: 0.1,
      delayChildren: 0.1
    }
  }
};

const ConsultationPage = () => {
  const [currentStep, setCurrentStep] = useState(1);
  const [formData, setFormData] = useState<ConsultationForm>({
    firstName: '',
    lastName: '',
    email: '',
    phone: '',
    company: '',
    position: '',
    projectType: '',
    currentWebsite: '',
    primaryGoal: '',
    targetAudience: '',
    budget: '',
    timeline: '',
    currentMarketing: [],
    challengeAreas: [],
    competitors: '',
    specificNeeds: '',
    meetingPreference: '',
    meetingTime: ''
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);

  const totalSteps = 4;

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleMultiSelectChange = (name: string, value: string) => {
    const currentArray = formData[name as keyof ConsultationForm] as string[];
    const updatedArray = currentArray.includes(value)
      ? currentArray.filter(item => item !== value)
      : [...currentArray, value];
    
    setFormData(prev => ({
      ...prev,
      [name]: updatedArray
    }));
  };

  const nextStep = () => {
    if (currentStep < totalSteps) {
      setCurrentStep(currentStep + 1);
    }
  };

  const prevStep = () => {
    if (currentStep > 1) {
      setCurrentStep(currentStep - 1);
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Simulate form submission
    await new Promise(resolve => setTimeout(resolve, 2000));
    
    setIsSubmitting(false);
    setSubmitted(true);
  };

  const renderStepContent = () => {
    switch (currentStep) {
      case 1:
        return (
          <div className="space-y-6">
            <h3 className="text-2xl font-bold text-gray-900 mb-6">Informations de Contact</h3>
            
            <div className="grid md:grid-cols-2 gap-6">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Prénom *
                </label>
                <input
                  type="text"
                  name="firstName"
                  required
                  value={formData.firstName}
                  onChange={handleInputChange}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-brand focus:border-transparent"
                  placeholder="Votre prénom"
                />
              </div>
              
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Nom *
                </label>
                <input
                  type="text"
                  name="lastName"
                  required
                  value={formData.lastName}
                  onChange={handleInputChange}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-brand focus:border-transparent"
                  placeholder="Votre nom"
                />
              </div>
            </div>

            <div className="grid md:grid-cols-2 gap-6">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Email professionnel *
                </label>
                <input
                  type="email"
                  name="email"
                  required
                  value={formData.email}
                  onChange={handleInputChange}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-brand focus:border-transparent"
                  placeholder="votre@entreprise.com"
                />
              </div>
              
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Téléphone *
                </label>
                <input
                  type="tel"
                  name="phone"
                  required
                  value={formData.phone}
                  onChange={handleInputChange}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-brand focus:border-transparent"
                  placeholder="+352 XX XX XX XX"
                />
              </div>
            </div>

            <div className="grid md:grid-cols-2 gap-6">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Entreprise *
                </label>
                <input
                  type="text"
                  name="company"
                  required
                  value={formData.company}
                  onChange={handleInputChange}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-brand focus:border-transparent"
                  placeholder="Nom de votre entreprise"
                />
              </div>
              
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Fonction
                </label>
                <input
                  type="text"
                  name="position"
                  value={formData.position}
                  onChange={handleInputChange}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-brand focus:border-transparent"
                  placeholder="Directeur, Manager, etc."
                />
              </div>
            </div>
          </div>
        );

      case 2:
        return (
          <div className="space-y-6">
            <h3 className="text-2xl font-bold text-gray-900 mb-6">Votre Projet</h3>
            
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Type de projet *
              </label>
              <select
                name="projectType"
                required
                value={formData.projectType}
                onChange={handleInputChange}
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-brand focus:border-transparent"
              >
                <option value="">Sélectionnez votre projet</option>
                {projectTypes.map((type) => (
                  <option key={type} value={type}>{type}</option>
                ))}
              </select>
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Site web actuel
              </label>
              <input
                type="url"
                name="currentWebsite"
                value={formData.currentWebsite}
                onChange={handleInputChange}
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-brand focus:border-transparent"
                placeholder="https://votre-site.com (si existant)"
              />
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Objectif principal *
              </label>
              <textarea
                name="primaryGoal"
                required
                rows={3}
                value={formData.primaryGoal}
                onChange={handleInputChange}
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-brand focus:border-transparent"
                placeholder="Quel est votre objectif principal avec ce projet ?"
              />
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Public cible
              </label>
              <textarea
                name="targetAudience"
                rows={3}
                value={formData.targetAudience}
                onChange={handleInputChange}
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-brand focus:border-transparent"
                placeholder="Décrivez votre public cible (âge, secteur, localisation...)"
              />
            </div>

            <div className="grid md:grid-cols-2 gap-6">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Budget envisagé
                </label>
                <select
                  name="budget"
                  value={formData.budget}
                  onChange={handleInputChange}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-brand focus:border-transparent"
                >
                  <option value="">Sélectionnez votre budget</option>
                  {budgetRanges.map((range) => (
                    <option key={range} value={range}>{range}</option>
                  ))}
                </select>
              </div>
              
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Timeline souhaitée
                </label>
                <select
                  name="timeline"
                  value={formData.timeline}
                  onChange={handleInputChange}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-brand focus:border-transparent"
                >
                  <option value="">Sélectionnez votre timeline</option>
                  {timelineOptions.map((option) => (
                    <option key={option} value={option}>{option}</option>
                  ))}
                </select>
              </div>
            </div>
          </div>
        );

      case 3:
        return (
          <div className="space-y-6">
            <h3 className="text-2xl font-bold text-gray-900 mb-6">Situation Marketing Actuelle</h3>
            
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-4">
                Actions marketing actuelles (sélectionnez toutes les options pertinentes)
              </label>
              <div className="grid md:grid-cols-2 gap-3">
                {currentMarketingOptions.map((option) => (
                  <label key={option} className="flex items-center p-3 border border-gray-300 rounded-lg hover:bg-gray-50 cursor-pointer">
                    <input
                      type="checkbox"
                      checked={formData.currentMarketing.includes(option)}
                      onChange={() => handleMultiSelectChange('currentMarketing', option)}
                      className="mr-3 h-4 w-4 text-brand focus:ring-brand"
                    />
                    <span className="text-sm">{option}</span>
                  </label>
                ))}
              </div>
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-4">
                Principaux défis marketing (sélectionnez toutes les options pertinentes)
              </label>
              <div className="grid md:grid-cols-2 gap-3">
                {challengeOptions.map((challenge) => (
                  <label key={challenge} className="flex items-center p-3 border border-gray-300 rounded-lg hover:bg-gray-50 cursor-pointer">
                    <input
                      type="checkbox"
                      checked={formData.challengeAreas.includes(challenge)}
                      onChange={() => handleMultiSelectChange('challengeAreas', challenge)}
                      className="mr-3 h-4 w-4 text-brand focus:ring-brand"
                    />
                    <span className="text-sm">{challenge}</span>
                  </label>
                ))}
              </div>
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Principaux concurrents
              </label>
              <textarea
                name="competitors"
                rows={3}
                value={formData.competitors}
                onChange={handleInputChange}
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-brand focus:border-transparent"
                placeholder="Listez vos principaux concurrents et leurs sites web si possible"
              />
            </div>
          </div>
        );

      case 4:
        return (
          <div className="space-y-6">
            <h3 className="text-2xl font-bold text-gray-900 mb-6">Finalisation</h3>
            
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Besoins spécifiques ou questions
              </label>
              <textarea
                name="specificNeeds"
                rows={4}
                value={formData.specificNeeds}
                onChange={handleInputChange}
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-brand focus:border-transparent"
                placeholder="Y a-t-il des aspects spécifiques de votre projet que vous aimeriez discuter ? Des questions particulières ?"
              />
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Préférence pour l'entretien *
              </label>
              <select
                name="meetingPreference"
                required
                value={formData.meetingPreference}
                onChange={handleInputChange}
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-brand focus:border-transparent"
              >
                <option value="">Comment préférez-vous nous rencontrer ?</option>
                {meetingPreferences.map((pref) => (
                  <option key={pref} value={pref}>{pref}</option>
                ))}
              </select>
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Disponibilités
              </label>
              <textarea
                name="meetingTime"
                rows={2}
                value={formData.meetingTime}
                onChange={handleInputChange}
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-brand focus:border-transparent"
                placeholder="Indiquez vos disponibilités (jours de la semaine, créneaux horaires préférés...)"
              />
            </div>

            <div className="bg-blue-50 p-6 rounded-lg">
              <h4 className="font-bold text-blue-900 mb-3">Ce qui vous attend après soumission :</h4>
              <ul className="space-y-2 text-blue-700">
                <li className="flex items-center">
                  <span className="mr-2">✅</span>
                  Confirmation de réception immédiate
                </li>
                <li className="flex items-center">
                  <span className="mr-2">✅</span>
                  Contact de notre équipe dans les 24h
                </li>
                <li className="flex items-center">
                  <span className="mr-2">✅</span>
                  Consultation gratuite de 45 minutes
                </li>
                <li className="flex items-center">
                  <span className="mr-2">✅</span>
                  Recommandations personnalisées
                </li>
                <li className="flex items-center">
                  <span className="mr-2">✅</span>
                  Proposition détaillée si projet confirmé
                </li>
              </ul>
            </div>

            <div className="bg-green-50 p-4 rounded-lg">
              <p className="text-sm text-green-700">
                <strong>Conformité RGPD :</strong> Toutes vos informations sont traitées de manière confidentielle 
                et utilisées uniquement pour préparer votre consultation. Vous pouvez demander leur suppression à tout moment.
              </p>
            </div>
          </div>
        );

      default:
        return null;
    }
  };

  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="relative min-h-[60vh] flex items-center justify-center overflow-hidden pt-20">
        <div 
          className="absolute inset-0 bg-cover bg-center bg-no-repeat"
          style={{
            backgroundImage: `url('https://images.unsplash.com/photo-1556761175-5973dc0f32e7?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2065&q=80')`
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
                🇱🇺 CONSULTATION GRATUITE
              </span>
            </motion.div>
            
            <motion.h1 variants={fadeInUp} className="text-5xl md:text-7xl font-bold mb-8 max-w-5xl mx-auto leading-tight">
              Consultation Marketing{' '}
              <span className="text-brand">
                Gratuite
              </span>
            </motion.h1>
            
            <motion.p variants={fadeInUp} className="text-xl md:text-2xl mb-12 max-w-4xl mx-auto text-gray-200 leading-relaxed font-normal">
              45 minutes d'expertise gratuite pour analyser vos besoins et définir une stratégie sur-mesure 
              pour votre entreprise luxembourgeoise.
            </motion.p>
          </motion.div>
        </div>
      </section>

      {/* Consultation Form */}
      <section className="py-24 bg-gray-50">
        <div className="max-w-4xl mx-auto px-6">
          {submitted ? (
            <motion.div
              initial="hidden"
              animate="visible"
              variants={fadeInUp}
              className="bg-white p-12 rounded-2xl shadow-lg text-center"
            >
              <div className="text-6xl mb-6">🎉</div>
              <h2 className="text-3xl font-bold mb-6 text-gray-900">Demande Reçue !</h2>
              <p className="text-xl text-gray-600 mb-8 leading-relaxed">
                Merci pour ces informations détaillées. Notre équipe va analyser votre demande 
                et vous contacter dans les 24 heures pour planifier votre consultation gratuite.
              </p>
              
              <div className="grid md:grid-cols-2 gap-6 mb-8">
                <div className="bg-blue-50 p-6 rounded-lg">
                  <h3 className="font-bold text-blue-900 mb-3">Prochaines étapes :</h3>
                  <ul className="text-left space-y-2 text-blue-700">
                    <li>• Analyse de votre demande (24h)</li>
                    <li>• Contact téléphonique pour planifier</li>
                    <li>• Consultation de 45 minutes</li>
                    <li>• Recommandations personnalisées</li>
                  </ul>
                </div>
                
                <div className="bg-green-50 p-6 rounded-lg">
                  <h3 className="font-bold text-green-900 mb-3">En attendant :</h3>
                  <ul className="text-left space-y-2 text-green-700">
                    <li>• Préparez vos questions</li>
                    <li>• Consultez notre portfolio</li>
                    <li>• Réfléchissez à vos objectifs</li>
                    <li>• Rassemblez vos données actuelles</li>
                  </ul>
                </div>
              </div>
              
              <div className="flex flex-col md:flex-row gap-4 justify-center">
                <Link
                  href="/portfolio"
                  className="bg-brand text-gray-900 px-8 py-4 rounded-lg font-bold hover:bg-brand/90 transition-colors"
                >
                  Voir notre Portfolio
                </Link>
                <Link
                  href="/services"
                  className="bg-gray-900 text-white px-8 py-4 rounded-lg font-bold hover:bg-gray-800 transition-colors"
                >
                  Découvrir nos Services
                </Link>
              </div>
            </motion.div>
          ) : (
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={fadeInUp}
              className="bg-white p-8 md:p-12 rounded-2xl shadow-lg"
            >
              {/* Progress Bar */}
              <div className="mb-8">
                <div className="flex justify-between items-center mb-4">
                  <span className="text-sm font-medium text-gray-600">
                    Étape {currentStep} sur {totalSteps}
                  </span>
                  <span className="text-sm font-medium text-gray-600">
                    {Math.round((currentStep / totalSteps) * 100)}% complété
                  </span>
                </div>
                <div className="w-full bg-gray-200 rounded-full h-2">
                  <div 
                    className="bg-brand h-2 rounded-full transition-all duration-300"
                    style={{ width: `${(currentStep / totalSteps) * 100}%` }}
                  ></div>
                </div>
              </div>

              {/* Form Content */}
              <form onSubmit={handleSubmit}>
                {renderStepContent()}

                {/* Navigation Buttons */}
                <div className="flex justify-between mt-8">
                  {currentStep > 1 && (
                    <button
                      type="button"
                      onClick={prevStep}
                      className="px-6 py-3 border border-gray-300 rounded-lg font-medium text-gray-700 hover:bg-gray-50 transition-colors"
                    >
                      ← Précédent
                    </button>
                  )}
                  
                  <div className="ml-auto">
                    {currentStep < totalSteps ? (
                      <button
                        type="button"
                        onClick={nextStep}
                        className="bg-brand text-gray-900 px-8 py-3 rounded-lg font-bold hover:bg-brand/90 transition-colors"
                      >
                        Suivant →
                      </button>
                    ) : (
                      <motion.button
                        type="submit"
                        disabled={isSubmitting}
                        whileHover={{ scale: 1.02 }}
                        whileTap={{ scale: 0.98 }}
                        className="bg-gray-900 text-white px-8 py-3 rounded-lg font-bold hover:bg-gray-800 transition-colors disabled:opacity-50"
                      >
                        {isSubmitting ? 'Envoi en cours...' : 'Envoyer la Demande'}
                      </motion.button>
                    )}
                  </div>
                </div>
              </form>
            </motion.div>
          )}
        </div>
      </section>

      {/* Benefits Section */}
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
                VOTRE CONSULTATION GRATUITE
              </span>
            </motion.div>
            <motion.h2 variants={fadeInUp} className="text-4xl md:text-5xl font-bold mb-6 text-gray-900">
              Ce que Vous Obtiendrez
            </motion.h2>
            <motion.p variants={fadeInUp} className="text-xl max-w-4xl mx-auto text-gray-600 leading-relaxed">
              Une session personnalisée de 45 minutes avec nos experts pour établir une stratégie sur-mesure.
            </motion.p>
          </motion.div>

          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={staggerChildren}
            className="grid md:grid-cols-2 lg:grid-cols-3 gap-8"
          >
            {[
              {
                icon: '🔍',
                title: 'Audit Gratuit',
                description: 'Analyse complète de votre présence digitale actuelle et identification des points d\'amélioration.'
              },
              {
                icon: '🎯',
                title: 'Stratégie Personnalisée',
                description: 'Recommandations spécifiques basées sur vos objectifs, votre marché et votre budget.'
              },
              {
                icon: '📊',
                title: 'Plan d\'Action',
                description: 'Roadmap détaillée avec les étapes prioritaires pour atteindre vos objectifs marketing.'
              },
              {
                icon: '🚀',
                title: 'Opportunités Identifiées',
                description: 'Découverte des opportunités manquées et des leviers de croissance pour votre entreprise.'
              },
              {
                icon: '💡',
                title: 'Conseils d\'Expert',
                description: 'Insights et best practices basés sur notre expérience avec les entreprises luxembourgeoises.'
              },
              {
                icon: '📋',
                title: 'Proposition Détaillée',
                description: 'Si vous le souhaitez, proposition commerciale personnalisée pour la mise en œuvre.'
              }
            ].map((benefit, index) => (
              <motion.div
                key={index}
                variants={fadeInUp}
                className="bg-gray-50 p-8 rounded-2xl hover:shadow-lg transition-all duration-300"
              >
                <div className="text-4xl mb-4">{benefit.icon}</div>
                <h3 className="text-xl font-bold mb-4 text-gray-900">{benefit.title}</h3>
                <p className="text-gray-600 leading-relaxed">{benefit.description}</p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Trust Signals */}
      <section className="py-24 bg-gray-900">
        <div className="max-w-6xl mx-auto px-6 text-center">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={staggerChildren}
          >
            <motion.h2 variants={fadeInUp} className="text-4xl md:text-6xl font-bold mb-6 text-white">
              Rejoignez Plus de{' '}
              <span className="text-brand">
                100 Entreprises
              </span>
            </motion.h2>
            <motion.p variants={fadeInUp} className="text-xl mb-10 max-w-4xl mx-auto text-gray-200 leading-relaxed">
              Qui nous font confiance pour leur transformation digitale au Luxembourg et dans la Grande Région.
            </motion.p>
            <motion.div variants={fadeInUp} className="flex flex-col md:flex-row gap-4 justify-center">
              <Link
                href="/portfolio"
                className="bg-brand text-gray-900 px-10 py-4 rounded-lg font-bold text-lg shadow-xl hover:shadow-2xl hover:bg-brand/90 transition-all duration-300"
              >
                Voir nos Réalisations →
              </Link>
              <a
                href="tel:+35228372410"
                className="text-white border-2 border-white px-10 py-4 rounded-lg hover:bg-white hover:text-gray-900 transition-all duration-300 font-bold"
              >
                📞 Appel Direct
              </a>
            </motion.div>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default ConsultationPage;