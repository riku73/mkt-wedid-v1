'use client';

import { useState } from 'react';
import { motion, Variants } from 'framer-motion';
import Link from 'next/link';

interface DevisForm {
  // Contact Information
  firstName: string;
  lastName: string;
  email: string;
  phone: string;
  company: string;
  position: string;
  companySize: string;
  industry: string;
  
  // Project Details
  projectType: string[];
  projectDescription: string;
  currentSituation: string;
  projectGoals: string;
  targetAudience: string;
  
  // Technical Requirements
  websiteType: string;
  websiteFeatures: string[];
  designPreferences: string;
  contentStatus: string;
  integrations: string[];
  
  // Marketing Requirements
  marketingServices: string[];
  marketingGoals: string[];
  currentMarketing: string;
  competitors: string;
  
  // Project Scope
  budget: string;
  timeline: string;
  launchDate: string;
  priority: string;
  
  // Additional Information
  additionalServices: string[];
  specialRequirements: string;
  files: FileList | null;
}

const projectTypes = [
  'Site web vitrine',
  'Site e-commerce',
  'Application web',
  'Refonte de site existant',
  'Marketing digital',
  'SEO & Référencement',
  'Social Media Marketing',
  'Content Marketing',
  'Branding & Identité visuelle',
  'Formation marketing',
  'Consulting marketing',
  'Audit marketing'
];

const companySizes = [
  'Freelance / Indépendant',
  'Startup (1-10 employés)',
  'PME (11-50 employés)',
  'Entreprise moyenne (51-200 employés)',
  'Grande entreprise (200+ employés)',
  'Organisation publique',
  'Association / ONG'
];

const industries = [
  'Finance & Banque',
  'Technologie & IT',
  'Consulting',
  'Santé & Médical',
  'Immobilier',
  'E-commerce & Retail',
  'Hôtellerie & Restauration',
  'Services aux entreprises',
  'Industrie & Manufacturing',
  'Éducation & Formation',
  'Médias & Communication',
  'Autre'
];

const websiteTypes = [
  'Site vitrine institutionnel',
  'Site e-commerce B2C',
  'Site e-commerce B2B',
  'Plateforme SaaS',
  'Portail client',
  'Site communautaire',
  'Blog / Magazine',
  'Landing pages',
  'Application web métier'
];

const websiteFeatures = [
  'Formulaires de contact',
  'Chat en direct',
  'Système de réservation',
  'Espace client/membre',
  'Blog intégré',
  'Multilingue',
  'Paiement en ligne',
  'Gestion d\'inventaire',
  'CRM intégré',
  'Analytics avancés',
  'API personnalisées',
  'App mobile'
];

const marketingServices = [
  'Audit SEO complet',
  'Optimisation SEO technique',
  'Création de contenu',
  'Campagnes Google Ads',
  'Campagnes Facebook/Instagram',
  'LinkedIn Marketing',
  'Email Marketing',
  'Marketing automation',
  'Analytics & Reporting',
  'Gestion réseaux sociaux',
  'Relations presse digitales',
  'Growth hacking'
];

const marketingGoals = [
  'Augmenter le trafic web',
  'Améliorer le référencement',
  'Générer plus de leads',
  'Augmenter les ventes',
  'Développer la notoriété',
  'Fidéliser les clients',
  'Optimiser les conversions',
  'Réduire les coûts d\'acquisition',
  'Améliorer l\'engagement',
  'Développer à l\'international'
];

const integrations = [
  'Google Analytics',
  'Google Tag Manager',
  'CRM (Salesforce, HubSpot)',
  'Email marketing (Mailchimp, Sendinblue)',
  'ERP',
  'Système de paiement',
  'Chat en direct',
  'Outils de reservation',
  'Solutions comptables',
  'Réseaux sociaux'
];

const budgetRanges = [
  'Moins de 5 000€',
  '5 000€ - 10 000€',
  '10 000€ - 25 000€',
  '25 000€ - 50 000€',
  '50 000€ - 100 000€',
  '100 000€ - 200 000€',
  'Plus de 200 000€'
];

const timelineOptions = [
  'Urgent (moins de 1 mois)',
  '1-2 mois',
  '2-3 mois',
  '3-6 mois',
  '6-12 mois',
  'Plus de 12 mois',
  'Timeline flexible'
];

const additionalServices = [
  'Hébergement & maintenance',
  'Formation équipe',
  'Support technique',
  'Création de contenu',
  'Photographie professionnelle',
  'Vidéos marketing',
  'Traduction multilingue',
  'Conformité RGPD',
  'Optimisation mobile',
  'Tests utilisateurs'
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

const DevisPage = () => {
  const [currentStep, setCurrentStep] = useState(1);
  const [formData, setFormData] = useState<DevisForm>({
    firstName: '',
    lastName: '',
    email: '',
    phone: '',
    company: '',
    position: '',
    companySize: '',
    industry: '',
    projectType: [],
    projectDescription: '',
    currentSituation: '',
    projectGoals: '',
    targetAudience: '',
    websiteType: '',
    websiteFeatures: [],
    designPreferences: '',
    contentStatus: '',
    integrations: [],
    marketingServices: [],
    marketingGoals: [],
    currentMarketing: '',
    competitors: '',
    budget: '',
    timeline: '',
    launchDate: '',
    priority: '',
    additionalServices: [],
    specialRequirements: '',
    files: null
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);

  const totalSteps = 6;

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleMultiSelectChange = (name: string, value: string) => {
    const currentArray = formData[name as keyof DevisForm] as string[];
    const updatedArray = currentArray.includes(value)
      ? currentArray.filter(item => item !== value)
      : [...currentArray, value];
    
    setFormData(prev => ({
      ...prev,
      [name]: updatedArray
    }));
  };

  const handleFileUpload = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData(prev => ({
      ...prev,
      files: e.target.files
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
    await new Promise(resolve => setTimeout(resolve, 3000));
    
    setIsSubmitting(false);
    setSubmitted(true);
  };

  const renderStepContent = () => {
    switch (currentStep) {
      case 1:
        return (
          <div className="space-y-6">
            <div className="text-center mb-8">
              <h3 className="text-2xl font-bold text-gray-900 mb-4">Informations sur Votre Entreprise</h3>
              <p className="text-gray-600">Commençons par mieux vous connaître</p>
            </div>
            
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
                />
              </div>
            </div>

            <div className="grid md:grid-cols-2 gap-6">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Taille de l'entreprise
                </label>
                <select
                  name="companySize"
                  value={formData.companySize}
                  onChange={handleInputChange}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-brand focus:border-transparent"
                >
                  <option value="">Sélectionnez la taille</option>
                  {companySizes.map((size) => (
                    <option key={size} value={size}>{size}</option>
                  ))}
                </select>
              </div>
              
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Secteur d'activité
                </label>
                <select
                  name="industry"
                  value={formData.industry}
                  onChange={handleInputChange}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-brand focus:border-transparent"
                >
                  <option value="">Sélectionnez le secteur</option>
                  {industries.map((industry) => (
                    <option key={industry} value={industry}>{industry}</option>
                  ))}
                </select>
              </div>
            </div>
          </div>
        );

      case 2:
        return (
          <div className="space-y-6">
            <div className="text-center mb-8">
              <h3 className="text-2xl font-bold text-gray-900 mb-4">Type de Projet</h3>
              <p className="text-gray-600">Quels services recherchez-vous ?</p>
            </div>
            
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-4">
                Services souhaités * (sélectionnez tous les services pertinents)
              </label>
              <div className="grid md:grid-cols-2 gap-3">
                {projectTypes.map((type) => (
                  <label key={type} className="flex items-center p-4 border-2 border-gray-200 rounded-lg hover:border-brand cursor-pointer transition-colors">
                    <input
                      type="checkbox"
                      checked={formData.projectType.includes(type)}
                      onChange={() => handleMultiSelectChange('projectType', type)}
                      className="mr-3 h-4 w-4 text-brand focus:ring-brand"
                    />
                    <div>
                      <span className="font-medium text-gray-900">{type}</span>
                    </div>
                  </label>
                ))}
              </div>
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Description détaillée du projet *
              </label>
              <textarea
                name="projectDescription"
                required
                rows={5}
                value={formData.projectDescription}
                onChange={handleInputChange}
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-brand focus:border-transparent"
                placeholder="Décrivez en détail votre projet, vos attentes et vos spécificités..."
              />
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Situation actuelle
              </label>
              <textarea
                name="currentSituation"
                rows={3}
                value={formData.currentSituation}
                onChange={handleInputChange}
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-brand focus:border-transparent"
                placeholder="Site web existant, outils marketing actuels, problématiques rencontrées..."
              />
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Objectifs principaux *
              </label>
              <textarea
                name="projectGoals"
                required
                rows={3}
                value={formData.projectGoals}
                onChange={handleInputChange}
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-brand focus:border-transparent"
                placeholder="Quels sont vos objectifs avec ce projet ? (augmenter les ventes, améliorer la notoriété, etc.)"
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
                placeholder="Décrivez votre clientèle cible (âge, profession, besoins, localisation...)"
              />
            </div>
          </div>
        );

      case 3:
        return (
          <div className="space-y-6">
            <div className="text-center mb-8">
              <h3 className="text-2xl font-bold text-gray-900 mb-4">Spécifications Techniques</h3>
              <p className="text-gray-600">Détaillons les aspects techniques de votre projet</p>
            </div>
            
            {formData.projectType.some(type => type.includes('Site') || type.includes('e-commerce') || type.includes('Application')) && (
              <>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Type de site web
                  </label>
                  <select
                    name="websiteType"
                    value={formData.websiteType}
                    onChange={handleInputChange}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-brand focus:border-transparent"
                  >
                    <option value="">Sélectionnez le type</option>
                    {websiteTypes.map((type) => (
                      <option key={type} value={type}>{type}</option>
                    ))}
                  </select>
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-4">
                    Fonctionnalités souhaitées
                  </label>
                  <div className="grid md:grid-cols-2 gap-3">
                    {websiteFeatures.map((feature) => (
                      <label key={feature} className="flex items-center p-3 border border-gray-300 rounded-lg hover:bg-gray-50 cursor-pointer">
                        <input
                          type="checkbox"
                          checked={formData.websiteFeatures.includes(feature)}
                          onChange={() => handleMultiSelectChange('websiteFeatures', feature)}
                          className="mr-3 h-4 w-4 text-brand focus:ring-brand"
                        />
                        <span className="text-sm">{feature}</span>
                      </label>
                    ))}
                  </div>
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Préférences design
                  </label>
                  <textarea
                    name="designPreferences"
                    rows={3}
                    value={formData.designPreferences}
                    onChange={handleInputChange}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-brand focus:border-transparent"
                    placeholder="Style souhaité, couleurs, sites que vous aimez, éléments à éviter..."
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    État du contenu
                  </label>
                  <textarea
                    name="contentStatus"
                    rows={3}
                    value={formData.contentStatus}
                    onChange={handleInputChange}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-brand focus:border-transparent"
                    placeholder="Avez-vous déjà les textes, images, vidéos ? Besoin de création de contenu ?"
                  />
                </div>
              </>
            )}

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-4">
                Intégrations nécessaires
              </label>
              <div className="grid md:grid-cols-2 gap-3">
                {integrations.map((integration) => (
                  <label key={integration} className="flex items-center p-3 border border-gray-300 rounded-lg hover:bg-gray-50 cursor-pointer">
                    <input
                      type="checkbox"
                      checked={formData.integrations.includes(integration)}
                      onChange={() => handleMultiSelectChange('integrations', integration)}
                      className="mr-3 h-4 w-4 text-brand focus:ring-brand"
                    />
                    <span className="text-sm">{integration}</span>
                  </label>
                ))}
              </div>
            </div>
          </div>
        );

      case 4:
        return (
          <div className="space-y-6">
            <div className="text-center mb-8">
              <h3 className="text-2xl font-bold text-gray-900 mb-4">Besoins Marketing</h3>
              <p className="text-gray-600">Stratégie et actions marketing envisagées</p>
            </div>
            
            {formData.projectType.some(type => type.includes('Marketing') || type.includes('SEO') || type.includes('Social')) && (
              <>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-4">
                    Services marketing souhaités
                  </label>
                  <div className="grid md:grid-cols-2 gap-3">
                    {marketingServices.map((service) => (
                      <label key={service} className="flex items-center p-3 border border-gray-300 rounded-lg hover:bg-gray-50 cursor-pointer">
                        <input
                          type="checkbox"
                          checked={formData.marketingServices.includes(service)}
                          onChange={() => handleMultiSelectChange('marketingServices', service)}
                          className="mr-3 h-4 w-4 text-brand focus:ring-brand"
                        />
                        <span className="text-sm">{service}</span>
                      </label>
                    ))}
                  </div>
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-4">
                    Objectifs marketing prioritaires
                  </label>
                  <div className="grid md:grid-cols-2 gap-3">
                    {marketingGoals.map((goal) => (
                      <label key={goal} className="flex items-center p-3 border border-gray-300 rounded-lg hover:bg-gray-50 cursor-pointer">
                        <input
                          type="checkbox"
                          checked={formData.marketingGoals.includes(goal)}
                          onChange={() => handleMultiSelectChange('marketingGoals', goal)}
                          className="mr-3 h-4 w-4 text-brand focus:ring-brand"
                        />
                        <span className="text-sm">{goal}</span>
                      </label>
                    ))}
                  </div>
                </div>
              </>
            )}

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Actions marketing actuelles
              </label>
              <textarea
                name="currentMarketing"
                rows={3}
                value={formData.currentMarketing}
                onChange={handleInputChange}
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-brand focus:border-transparent"
                placeholder="Décrivez vos actions marketing actuelles, budgets, résultats..."
              />
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Analyse concurrentielle
              </label>
              <textarea
                name="competitors"
                rows={3}
                value={formData.competitors}
                onChange={handleInputChange}
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-brand focus:border-transparent"
                placeholder="Principaux concurrents, leurs sites web, leurs stratégies marketing..."
              />
            </div>
          </div>
        );

      case 5:
        return (
          <div className="space-y-6">
            <div className="text-center mb-8">
              <h3 className="text-2xl font-bold text-gray-900 mb-4">Budget & Planning</h3>
              <p className="text-gray-600">Planification et contraintes du projet</p>
            </div>
            
            <div className="grid md:grid-cols-2 gap-6">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Budget envisagé *
                </label>
                <select
                  name="budget"
                  required
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
                  Timeline souhaitée *
                </label>
                <select
                  name="timeline"
                  required
                  value={formData.timeline}
                  onChange={handleInputChange}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-brand focus:border-transparent"
                >
                  <option value="">Sélectionnez la timeline</option>
                  {timelineOptions.map((option) => (
                    <option key={option} value={option}>{option}</option>
                  ))}
                </select>
              </div>
            </div>

            <div className="grid md:grid-cols-2 gap-6">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Date de lancement souhaitée
                </label>
                <input
                  type="date"
                  name="launchDate"
                  value={formData.launchDate}
                  onChange={handleInputChange}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-brand focus:border-transparent"
                />
              </div>
              
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Niveau de priorité
                </label>
                <select
                  name="priority"
                  value={formData.priority}
                  onChange={handleInputChange}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-brand focus:border-transparent"
                >
                  <option value="">Sélectionnez la priorité</option>
                  <option value="Critique">Critique - Très urgent</option>
                  <option value="Élevée">Élevée - Important</option>
                  <option value="Moyenne">Moyenne - Standard</option>
                  <option value="Faible">Faible - Pas pressé</option>
                </select>
              </div>
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-4">
                Services additionnels souhaités
              </label>
              <div className="grid md:grid-cols-2 gap-3">
                {additionalServices.map((service) => (
                  <label key={service} className="flex items-center p-3 border border-gray-300 rounded-lg hover:bg-gray-50 cursor-pointer">
                    <input
                      type="checkbox"
                      checked={formData.additionalServices.includes(service)}
                      onChange={() => handleMultiSelectChange('additionalServices', service)}
                      className="mr-3 h-4 w-4 text-brand focus:ring-brand"
                    />
                    <span className="text-sm">{service}</span>
                  </label>
                ))}
              </div>
            </div>
          </div>
        );

      case 6:
        return (
          <div className="space-y-6">
            <div className="text-center mb-8">
              <h3 className="text-2xl font-bold text-gray-900 mb-4">Informations Complémentaires</h3>
              <p className="text-gray-600">Derniers détails pour finaliser votre demande</p>
            </div>
            
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Exigences spéciales ou contraintes
              </label>
              <textarea
                name="specialRequirements"
                rows={4}
                value={formData.specialRequirements}
                onChange={handleInputChange}
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-brand focus:border-transparent"
                placeholder="Contraintes techniques, réglementaires, accessibilité, sécurité..."
              />
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Documents à joindre
              </label>
              <div className="border-2 border-dashed border-gray-300 rounded-lg p-6 text-center">
                <input
                  type="file"
                  multiple
                  onChange={handleFileUpload}
                  className="hidden"
                  id="file-upload"
                  accept=".pdf,.doc,.docx,.png,.jpg,.jpeg"
                />
                <label htmlFor="file-upload" className="cursor-pointer">
                  <div className="text-gray-600 mb-2">
                    📎 Cliquez pour joindre des fichiers
                  </div>
                  <div className="text-sm text-gray-500">
                    Brief, maquettes, exemples, cahier des charges... (PDF, Word, Images)
                  </div>
                </label>
                {formData.files && (
                  <div className="mt-4 text-left">
                    <p className="font-medium text-gray-700 mb-2">Fichiers sélectionnés :</p>
                    {Array.from(formData.files).map((file, index) => (
                      <div key={index} className="text-sm text-gray-600">
                        📄 {file.name} ({Math.round(file.size / 1024)} KB)
                      </div>
                    ))}
                  </div>
                )}
              </div>
            </div>

            <div className="bg-blue-50 p-6 rounded-lg">
              <h4 className="font-bold text-blue-900 mb-3">Processus après soumission :</h4>
              <ul className="space-y-2 text-blue-700">
                <li className="flex items-center">
                  <span className="mr-2">✅</span>
                  Accusé de réception immédiat
                </li>
                <li className="flex items-center">
                  <span className="mr-2">✅</span>
                  Analyse détaillée de votre demande (24-48h)
                </li>
                <li className="flex items-center">
                  <span className="mr-2">✅</span>
                  Appel de clarification si nécessaire
                </li>
                <li className="flex items-center">
                  <span className="mr-2">✅</span>
                  Devis détaillé sous 3-5 jours ouvrés
                </li>
                <li className="flex items-center">
                  <span className="mr-2">✅</span>
                  Présentation et négociation du projet
                </li>
              </ul>
            </div>

            <div className="bg-green-50 p-4 rounded-lg">
              <p className="text-sm text-green-700">
                <strong>Confidentialité :</strong> Toutes les informations partagées sont strictement confidentielles. 
                Nous pouvons signer un NDA si nécessaire avant de commencer l'analyse de votre projet.
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
            backgroundImage: `url('https://images.unsplash.com/photo-1554224155-6726b3ff858f?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2026&q=80')`
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
                🇱🇺 DEMANDE DE DEVIS
              </span>
            </motion.div>
            
            <motion.h1 variants={fadeInUp} className="text-5xl md:text-7xl font-bold mb-8 max-w-5xl mx-auto leading-tight">
              Obtenez Votre{' '}
              <span className="text-brand">
                Devis Détaillé
              </span>
            </motion.h1>
            
            <motion.p variants={fadeInUp} className="text-xl md:text-2xl mb-12 max-w-4xl mx-auto text-gray-200 leading-relaxed font-normal">
              Formulaire complet pour recevoir une proposition personnalisée et détaillée 
              adaptée aux spécificités de votre projet au Luxembourg.
            </motion.p>
          </motion.div>
        </div>
      </section>

      {/* Quote Form */}
      <section className="py-24 bg-gray-50">
        <div className="max-w-5xl mx-auto px-6">
          {submitted ? (
            <motion.div
              initial="hidden"
              animate="visible"
              variants={fadeInUp}
              className="bg-white p-12 rounded-2xl shadow-lg text-center"
            >
              <div className="text-6xl mb-6">🎉</div>
              <h2 className="text-3xl font-bold mb-6 text-gray-900">Demande de Devis Reçue !</h2>
              <p className="text-xl text-gray-600 mb-8 leading-relaxed">
                Merci pour ces informations détaillées. Notre équipe va analyser votre projet 
                et vous faire parvenir un devis complet sous 3-5 jours ouvrés.
              </p>
              
              <div className="grid md:grid-cols-3 gap-6 mb-8">
                <div className="bg-blue-50 p-6 rounded-lg">
                  <h3 className="font-bold text-blue-900 mb-3">Analyse</h3>
                  <p className="text-blue-700 text-sm">24-48h pour étudier votre demande en détail</p>
                </div>
                
                <div className="bg-green-50 p-6 rounded-lg">
                  <h3 className="font-bold text-green-900 mb-3">Devis</h3>
                  <p className="text-green-700 text-sm">3-5 jours pour recevoir votre proposition</p>
                </div>
                
                <div className="bg-purple-50 p-6 rounded-lg">
                  <h3 className="font-bold text-purple-900 mb-3">Présentation</h3>
                  <p className="text-purple-700 text-sm">Rendez-vous pour présenter le projet</p>
                </div>
              </div>
              
              <div className="flex flex-col md:flex-row gap-4 justify-center">
                <Link
                  href="/consultation-gratuite"
                  className="bg-brand text-gray-900 px-8 py-4 rounded-lg font-bold hover:bg-brand/90 transition-colors"
                >
                  Programmer une Consultation
                </Link>
                <Link
                  href="/portfolio"
                  className="bg-gray-900 text-white px-8 py-4 rounded-lg font-bold hover:bg-gray-800 transition-colors"
                >
                  Voir nos Réalisations
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
                <div className="w-full bg-gray-200 rounded-full h-3">
                  <div 
                    className="bg-brand h-3 rounded-full transition-all duration-500"
                    style={{ width: `${(currentStep / totalSteps) * 100}%` }}
                  ></div>
                </div>
              </div>

              {/* Form Content */}
              <form onSubmit={handleSubmit}>
                {renderStepContent()}

                {/* Navigation Buttons */}
                <div className="flex justify-between mt-8 pt-8 border-t border-gray-200">
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
                        {isSubmitting ? 'Envoi en cours...' : 'Envoyer la Demande de Devis'}
                      </motion.button>
                    )}
                  </div>
                </div>
              </form>
            </motion.div>
          )}
        </div>
      </section>

      {/* Why Choose Us */}
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
                POURQUOI WEDID
              </span>
            </motion.div>
            <motion.h2 variants={fadeInUp} className="text-4xl md:text-5xl font-bold mb-6 text-gray-900">
              Devis Transparent & Détaillé
            </motion.h2>
            <motion.p variants={fadeInUp} className="text-xl max-w-4xl mx-auto text-gray-600 leading-relaxed">
              Notre processus de devis vous garantit une proposition claire, complète et adaptée à vos besoins réels.
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
                icon: '📋',
                title: 'Analyse Approfondie',
                description: 'Étude détaillée de vos besoins, contraintes et objectifs pour une proposition sur-mesure.'
              },
              {
                icon: '💰',
                title: 'Tarification Transparente',
                description: 'Devis détaillé avec breakdown complet des coûts, sans surprise ni frais cachés.'
              },
              {
                icon: '⏱️',
                title: 'Délais Réalistes',
                description: 'Planning précis avec jalons intermédiaires et dates de livraison respectées.'
              },
              {
                icon: '🎯',
                title: 'Solutions Adaptées',
                description: 'Recommandations personnalisées basées sur votre secteur et votre marché au Luxembourg.'
              },
              {
                icon: '🤝',
                title: 'Support Dédié',
                description: 'Accompagnement personnalisé depuis l\'analyse jusqu\'à la livraison du projet.'
              },
              {
                icon: '📊',
                title: 'ROI Mesurable',
                description: 'Objectifs chiffrés et KPIs définis pour mesurer le succès de votre investissement.'
              }
            ].map((feature, index) => (
              <motion.div
                key={index}
                variants={fadeInUp}
                className="bg-gray-50 p-8 rounded-2xl hover:shadow-lg transition-all duration-300"
              >
                <div className="text-4xl mb-4">{feature.icon}</div>
                <h3 className="text-xl font-bold mb-4 text-gray-900">{feature.title}</h3>
                <p className="text-gray-600 leading-relaxed">{feature.description}</p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 bg-gray-900">
        <div className="max-w-6xl mx-auto px-6 text-center">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={staggerChildren}
          >
            <motion.h2 variants={fadeInUp} className="text-4xl md:text-6xl font-bold mb-6 text-white">
              Besoin d'Aide pour{' '}
              <span className="text-brand">
                Votre Projet
              </span> ?
            </motion.h2>
            <motion.p variants={fadeInUp} className="text-xl mb-10 max-w-4xl mx-auto text-gray-200 leading-relaxed">
              Notre équipe est là pour vous accompagner à chaque étape. N'hésitez pas à nous contacter.
            </motion.p>
            <motion.div variants={fadeInUp} className="flex flex-col md:flex-row gap-4 justify-center">
              <Link
                href="/consultation-gratuite"
                className="bg-brand text-gray-900 px-10 py-4 rounded-lg font-bold text-lg shadow-xl hover:shadow-2xl hover:bg-brand/90 transition-all duration-300"
              >
                Consultation Gratuite →
              </Link>
              <a
                href="tel:+35228372410"
                className="text-white border-2 border-white px-10 py-4 rounded-lg hover:bg-white hover:text-gray-900 transition-all duration-300 font-bold"
              >
                📞 +352 28 37 24 10
              </a>
            </motion.div>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default DevisPage;