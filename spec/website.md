# Site Web Professionnel Agence Marketing - Document d'Exigences Produit & Design System

## Résumé Exécutif

### Aperçu du Projet
Créer un site web professionnel et complet qui servira de présence numérique principale pour **Wedid**, établissant la crédibilité, générant des leads qualifiés, et présentant de manière détaillée les services de marketing digital offerts au Luxembourg et dans la Grande Région.

### Objectifs Business
- **Génération de Leads**: Convertir les visiteurs en prospects qualifiés via des CTA stratégiques
- **Autorité de Marque**: Établir la crédibilité et l'expertise dans le marketing digital
- **Domination SEO**: Se positionner en tête pour les recherches "agence marketing Luxembourg"
- **Éducation Client**: Fournir des informations complètes sur les services et méthodologies
- **Avantage Concurrentiel**: Se différencier par une expérience utilisateur supérieure

### Métriques de Succès
- Croissance du trafic organique de 50%+ en 6 mois
- Taux de conversion de 3-5% des visiteurs en leads
- Durée de session moyenne de 3+ minutes
- Vitesse de chargement sous 2 secondes
- Score d'utilisabilité mobile de 95+

## Design System & Identité Visuelle

### 🎨 **Palette de Couleurs**

#### Couleurs Principales
```css
--color--midnight-purple: #211056    /* Couleur corporate principale */
--color--brand: #d1f383              /* Vert signature - CTAs et accents */
--color--heading-color: #111          /* Noir texte titres */
--color--body-color: #474747          /* Gris texte corps */
```

#### Couleurs Secondaires
```css
--color--white: white                 /* Blanc pur */
--color--body-text-light: #d9d9d9     /* Gris clair pour textes secondaires */
--color--light-peach: #ffedcd         /* Pêche clair - sections accent */
--color--pink: #ebe6fd                /* Violet clair - backgrounds */
--color--border: #b3b3b3              /* Bordures standard */
--color--light-border: #dedede        /* Bordures légères */
```

### 📝 **Système Typographique**

#### Polices
```css
--fonts--heading-font: "Bdogrotesk Bf 648 A 656 Fd 543 A", "Times New Roman", sans-serif
--fonts--body-font: Inter, sans-serif
```

#### Hiérarchie des Tailles (Responsive)
```css
/* Desktop */
--size--h1: 70px        /* Titres principaux hero */
--size--h2: 45px        /* Titres sections principales */
--size--h3: 35px        /* Sous-titres importants */
--size--h4: 23px        /* Titres de cartes */
--size--h5: 20px        /* Petits titres */
--size--body: 16px      /* Texte corps */
--size--menu: 17px      /* Navigation */
--size--sub-menu: 14px  /* Texte secondaire */

/* Tablet (max-width: 991px) */
--size--h1: 50px
--size--h2: 36px
--size--h3: 28px
--size--h4: 22px
--size--h5: 18px

/* Mobile (max-width: 767px) */
--size--h1: 28px
--size--h2: 24px
--size--h3: 20px
--size--h4: 18px
--size--h5: 15px
--size--body: 14px
--size--sub-menu: 13px
```

#### Styles Typographiques
```css
/* Titres */
h1, h2, h3, h4, h5 {
  font-family: var(--fonts--heading-font);
  color: var(--color--heading-color);
  font-weight: 500;
  text-transform: capitalize;
  letter-spacing: -2px (h1-h3), -1px (h4-h5);
  line-height: 1.07-1.5;
}

/* Corps de texte */
body {
  font-family: var(--fonts--body-font);
  color: var(--color--body-color);
  font-size: var(--size--body);
  letter-spacing: -0.32px;
  font-weight: 400;
  line-height: 1.625;
}
```

### 🔲 **Layout & Espacements**

#### Containers
```css
.container-large: max-width: 1630px
.container: max-width: 1320px
.container-medium: max-width: 1300px
.container-small: max-width: 598px
```

#### Espacements Standards
```css
/* Sections */
padding-top/bottom: 120px (desktop)
padding-top/bottom: 60px (tablet)
padding-top/bottom: 50px (mobile)

/* Grilles */
grid-gap: 30px (desktop)
grid-gap: 20px (tablet)
grid-gap: 15px (mobile)
```

#### Breakpoints
```css
Desktop: min-width: 992px
Tablet: max-width: 991px
Mobile: max-width: 767px
Mobile Small: max-width: 479px
```

### 🎯 **Composants UI**

#### Boutons Principaux
```css
.button {
  background-color: var(--color--brand);
  border-radius: 8px;
  padding: 4px;
  position: relative;
  transition: all 0.3s ease;
}

.button-inner-wrap {
  font-family: var(--fonts--heading-font);
  color: var(--color--heading-color);
  text-transform: capitalize;
  border-radius: 5px;
  width: 100%;
  padding: 16px;
  font-weight: 500;
  background-color: var(--color--white);
}

/* États */
.button:hover .button-background {
  transform: translateX(100%);
}
```

#### Navigation
```css
.navbar {
  background-color: transparent;
  position: absolute;
  z-index: 99;
  padding: 15px 0;
}

.dropdown-toggle {
  color: var(--color--white);
  font-size: var(--size--menu);
  text-transform: capitalize;
  padding: 37px 10px 35px 0;
  transition: color 0.2s;
}

.dropdown-list {
  background-color: var(--color--white);
  border-radius: 8px;
  padding: 14px 0;
  box-shadow: 0 8px 90px rgba(0,0,0,0.08);
}
```

#### Cartes & Conteneurs
```css
.service-card {
  border-right: 1px solid var(--color--border);
  padding: 80px 40px;
  transition: background-color 0.3s;
}

.service-card:hover {
  background-color: var(--color--pink);
}

.pricing-card {
  background-color: var(--color--white);
  box-shadow: 0 8px 90px rgba(0,0,0,0.08);
  padding: 30px;
  border-radius: 8px;
}
```

#### Formulaires
```css
.input-field {
  color: var(--color--body-color);
  font-size: var(--size--body);
  border: none;
  border-bottom: 1px solid rgba(0,0,0,0.2);
  min-height: 43px;
  margin-bottom: 35px;
  padding: 0 0 25px;
  transition: border-color 0.2s;
}

.input-field:focus {
  border-color: var(--color--brand);
  outline: none;
}
```

### 🎨 **Effets Visuels**

#### Animations & Transitions
```css
/* Standards */
transition: color 0.3s, background-color 0.3s, transform 0.2s;

/* Hover effects */
.link:hover {
  color: var(--color--brand);
  transform: translateX(10px);
}
```

#### Overlays & Gradients
```css
/* Hero overlays */
.hero-overlay {
  background-image: 
    linear-gradient(180deg, var(--color--heading-color), transparent 23%),
    linear-gradient(112deg, rgba(0,0,0,0.8), rgba(0,0,0,0.7) 37%, transparent 54%);
}
```

## Analyse de Marché

### Audience Cible
**Primaire**: PME et startups luxembourgeoises
- Démographie: Dirigeants d'entreprise, 30-55 ans, revenus élevés, Luxembourg-Ville et environs
- Points de douleur: Visibilité en ligne limitée, manque d'expertise marketing digital, budget marketing inefficace
- Objectifs: Augmenter leur chiffre d'affaires, améliorer leur présence en ligne, optimiser leur ROI marketing
- Comportement digital: Recherche active sur Google, LinkedIn, consultation mobile fréquente

**Secondaire**: Entreprises internationales implantées au Luxembourg
- Grands groupes cherchant une expertise locale
- Startups fintech et crypto-monnaies
- Secteur financier traditionnel

### Analyse Concurrentielle
Analyser les 5 principaux concurrents locaux :
- Structure du site et parcours utilisateur
- Présentation des services et transparence tarifaire
- Stratégie de contenu et approche SEO
- Esthétique design et expérience utilisateur
- Mécanismes de génération de leads

### Positionnement Marché
Position comme: **Wedid - L'agence marketing digital de référence au Luxembourg**
- Expertise locale avec vision internationale
- Approche data-driven et ROI mesurable
- Service client premium et accompagnement personnalisé

## Architecture Technique

### Stack Technologique
**Frontend**:
- Next.js 15+ (App Router)
- React 19
- TypeScript pour la sécurité de types
- Tailwind CSS 3.4+ pour le styling
- Framer Motion pour les animations

**Performance & SEO**:
- Optimisation d'images avec Next.js Image
- Code splitting automatique et lazy loading
- Server-side rendering (SSR) pour les pages critiques
- Génération statique pour la performance
- Automatisation sitemap et robots.txt

**Intégrations Tierces**:
- Google Analytics 4
- Google Search Console
- Gestion de formulaires (Nodemailer/FormSpree)
- Google Maps pour localisation
- Pixels réseaux sociaux (LinkedIn, Facebook)

### Exigences Infrastructure
- **Hébergement**: Vercel pour performance optimale Next.js
- **Domaine**: .lu ou .com avec certificat SSL
- **CDN**: Distribution globale de contenu
- **Monitoring**: Surveillance uptime et performance

## Architecture d'Information

### Structure du Site

```
Accueil
├── À Propos
│   ├── Notre Histoire
│   ├── Équipe
│   └── Certifications & Partenaires
├── Services
│   ├── Marketing Digital
│   │   ├── SEO/SEA
│   │   ├── Social Media Marketing
│   │   └── Content Marketing
│   ├── Création de Sites Web
│   │   ├── Sites Vitrine
│   │   ├── E-commerce
│   │   └── Applications Web
│   ├── Branding & Design
│   │   ├── Identité Visuelle
│   │   ├── Design Graphique
│   │   └── Supports Marketing
│   └── Consulting & Formation
│       ├── Audit Marketing
│       ├── Stratégie Digitale
│       └── Formation Équipes
├── Projets & Cas d'Étude
│   ├── Portfolio Clients
│   ├── Études de Cas Détaillées
│   └── Témoignages Clients
├── Notre Méthode
│   ├── Process de Travail
│   ├── Timeline & Étapes
│   └── Garanties Qualité
├── Resources
│   ├── Blog Marketing
│   ├── Guides & Whitepapers
│   ├── FAQ
│   └── Outils Gratuits
├── Zones d'Intervention
│   ├── Luxembourg-Ville
│   ├── Esch-sur-Alzette
│   ├── Grande Région
│   └── Services à Distance
└── Contact
    ├── Demander un Devis
    ├── Informations Contact
    └── Consultation Gratuite
```

### Exigences par Page

#### Page d'Accueil
**Objectif**: Convertir immédiatement et établir la crédibilité
**Éléments Clés**:
- Section hero avec proposition de valeur claire
- CTA principal "Consultation Gratuite"
- Aperçu services avec cartes visuelles
- Preuves sociales (témoignages, clients, certifications)
- Processus en 4 étapes
- CTA secondaire et informations contact

**Design Components**:
- Hero full-screen avec overlay gradient
- Service cards avec hover effects
- Counter sections avec animations
- Testimonial carousel
- CTA sections avec backgrounds visuels

#### Pages Services
**Structure**: Page dédiée par catégorie + pages services spécifiques
**Contenu Requis**:
- Description service et bénéfices
- Méthodologie et process
- Exemples de réalisations
- Informations tarifaires (fourchettes)
- FAQ spécifique au service
- Services connexes
- Mention zone d'intervention Luxembourg
- Placement CTA fort

**Design Components**:
- Hero avec breadcrumbs
- Service grids avec animations
- Process timelines
- Pricing tables
- Case study showcases

#### Pages Localisation
**Objectif**: Capturer le trafic SEO local
**Contenu**:
- Services spécifiques à la zone
- Connaissance marché local
- Couverture zone d'intervention
- Réglementations locales
- Informations contact zone
- Témoignages/cas d'études locaux

## Stratégie de Contenu

### Piliers de Contenu
1. **Expertise Marketing**: Guides détaillés et conseils stratégiques
2. **Autorité Locale**: Connaissance spécifique du marché luxembourgeois
3. **Succès Clients**: Cas d'études et témoignages
4. **Éducation Digitale**: Formations et ressources gratuites

### Exigences de Contenu

#### Descriptions Services
- **Longueur**: 1000-1800 mots par page service principale
- **Structure**: Problème → Solution → Méthodologie → Bénéfices → Résultats
- **Éléments**: 
  - Titres et sous-titres clairs
  - Bullet points pour lecture rapide
  - Éléments visuels (images, schémas)
  - Intégration témoignages clients
  - Section FAQ

#### Stratégie SEO Contenu
- **Mots-clés Primaires**: "Wedid Luxembourg", "agence marketing Luxembourg", "marketing digital Luxembourg"
- **Longue Traîne**: "Wedid agence SEO", "Wedid création site web Luxembourg", "agence SEO Luxembourg"
- **Clusters Thématiques**: Créer des groupes thématiques autour des services
- **SEO Local**: Mots-clés géolocalisés naturellement intégrés

### Ton et Voix
- **Professionnel mais accessible**
- **Expert et confiant sans être prétentieux**
- **Pédagogique et orienté conseil**
- **Clair et sans jargon technique excessif**
- **Langage centré client**

## Design Expérience Utilisateur

### Principes de Design
1. **Design de Confiance**: Chaque élément construit la crédibilité
2. **Optimisation Conversion**: Parcours clair vers contact/devis
3. **Mobile-First**: Majorité du trafic mobile
4. **Performance-Focused**: Temps de chargement critiques
5. **Accessibilité**: Conformité WCAG 2.1 AA

### Optimisation Parcours Utilisateur

#### Parcours Conversion Principal
1. **Atterrissage**: Section hero capture l'attention
2. **Engagement**: Aperçu services suscite l'intérêt
3. **Confiance**: Preuves sociales construisent la confiance
4. **Apprentissage**: Explication processus éduque
5. **Conversion**: CTA clair pour consultation gratuite

#### Parcours Secondaires
- Exploration services → service spécifique → contact
- Recherche locale → page zone → page service → contact
- Recherche problème → blog/FAQ → page service → contact

## Exigences Fonctionnelles

### Fonctionnalités Core
- **Formulaire Devis Multi-étapes**: Système de demande détaillé
- **Portfolio Interactif**: Showcase projets clients
- **Système Témoignages**: Avis et évaluations clients
- **Formulaires Contact**: Multiples points de contact
- **Calculateur Budget**: Estimation budgétaire basique
- **Système Blog**: Gestion contenu pour SEO

### Fonctionnalités Avancées
- **Chat en Direct**: Support client temps réel
- **Prise RDV en Ligne**: Système de réservation consultation
- **Portail Client**: Suivi projets pour clients
- **Consultations Virtuelles**: Réservation appels vidéo
- **Audit Gratuit**: Outil d'analyse site web

### Fonctionnalités Performance
- **Optimisation Images**: Format WebP, lazy loading
- **Stratégie Cache**: Génération statique + CDN
- **Core Web Vitals**: Optimisation métriques Google
- **Chargement Progressif**: Contenu critique en premier

## Stratégie SEO

### SEO Technique
- **Structure Site**: Hiérarchie URL propre
- **Schema Markup**: LocalBusiness, Service, Review schemas
- **Optimisation Meta**: Titres et descriptions uniques
- **Linking Interne**: Stratégie de liens entre pages
- **XML Sitemap**: Génération automatique sitemap

### SEO Contenu
- **Stratégie Mots-clés**: Cibler mots-clés commerciaux haute intention
- **SEO Local**: Optimisation Google My Business
- **Calendrier Contenu**: Articles blog réguliers
- **Link Building**: Partenariats industrie et annuaires locaux

### Priorité SEO Local
- **Google My Business**: Profil complet avec photos et avis
- **Citations Locales**: NAP cohérent sur annuaires
- **Contenu Local**: Pages spécifiques aux zones
- **Mots-clés Locaux**: "[Service] Luxembourg" ciblage

## Phases de Développement

### Phase 1: Fondation (Semaines 1-2)
- Setup projet Next.js et configuration
- Implémentation design system complet
- Structure pages de base et routing
- Développement composants core avec Tailwind

### Phase 2: Contenu & Design (Semaines 3-4)
- Développement homepage et optimisation
- Création pages services principales
- Setup formulaires et génération leads
- Implémentation design responsive

### Phase 3: Fonctionnalités Avancées (Semaines 5-6)
- Développement pages localisation
- Système portfolio/galerie
- Setup système blog
- Optimisation SEO et schema markup

### Phase 4: Tests & Lancement (Semaines 7-8)
- Optimisation performance
- Tests cross-browser et responsive
- Vérification accessibilité
- Préparation lancement et setup DNS

## Assurance Qualité

### Exigences Tests
- **Performance**: Score Lighthouse 90+ sur toutes métriques
- **Design System**: Cohérence visuelle sur tous breakpoints
- **Responsive**: Tests sur toutes tailles d'écran
- **Compatibilité Navigateurs**: Chrome, Firefox, Safari, Edge
- **Tests Formulaires**: Tous formulaires et soumissions
- **Validation SEO**: Meta tags, schema markup, sitemap

### Checklist Lancement
- [ ] Configuration DNS et certificat SSL
- [ ] Setup Google Analytics et Search Console
- [ ] Optimisation Google My Business
- [ ] Intégration réseaux sociaux
- [ ] Tests formulaires contact
- [ ] Setup monitoring performance
- [ ] Validation design system complet
- [ ] Tests accessibilité WCAG 2.1 AA
- [ ] Mesures sauvegarde et sécurité

## Intégration Marketing

### Génération Leads
- **CTA Principal**: "Consultation Gratuite" avec design system cohérent
- **Lead Magnets**: Guides marketing, audits gratuits
- **Options Contact**: Téléphone, email, formulaires, chat
- **Stratégie Follow-up**: Séquences email automatisées

### Preuve Sociale
- **Témoignages Clients**: Avis vidéo et écrits avec design cards
- **Études de Cas**: Showcases projets avec layouts visuels
- **Certifications**: Credentials Google, Facebook, etc.
- **Années d'Expérience**: Mise en avant ancienneté

### Analytics & Tracking Conversion
- **Setup Objectifs**: Tracker demandes devis, appels, soumissions
- **Analyse Heatmap**: Tracking comportement utilisateur
- **Tests A/B**: Optimiser CTAs et éléments design
- **Reporting Mensuel**: Trafic, leads, et métriques conversion

## Considérations Budget

### Coûts Développement
- **Design & Développement**: €8,000 - €15,000
- **Design System Implementation**: €2,000 - €3,000
- **Création Contenu**: €2,000 - €4,000
- **Photographie**: €500 - €1,500
- **Intégrations Tierces**: €500 - €1,000

### Coûts Récurrents
- **Hébergement**: €50-€200/mois
- **Domaine & SSL**: €50/an
- **Outils Analytics**: €100-€300/mois
- **Maintenance**: €500-€1,500/mois

## Notes de Personnalisation Spécifiques Luxembourg

### Spécificités Marché Luxembourgeois
- **Multilinguisme**: Site principal en français, prévoir versions anglaise/allemande
- **Secteurs Clés**: Finance, Fintech, Crypto, Consulting, Services aux entreprises
- **Réglementation**: RGPD strict, réglementations financières spécifiques
- **Concurrence**: Marché restreint mais concurrence internationale

### Adaptations Design & Contenu
- **Références Locales**: Mentionner quartiers Kirchberg, Clausen, etc.
- **Partenariats**: Chambres de commerce, clusters tech luxembourgeois
- **Événements**: Digital Tech Summit, ICT Spring, etc.
- **Médias Locaux**: Paperjam, Silicon Luxembourg, etc.
- **Design Culturel**: Approche business plus formelle, standards qualité élevés

### Considérations UX/UI
- **Navigation**: Claire et professionnelle (standards luxembourgeois)
- **Couleurs**: Palette sophistiquée respectant codes business locaux
- **Typography**: Lisibilité optimale pour audience multilingue
- **Mobile**: Priorité absolue (usage mobile élevé au Luxembourg)

---

## Architecture CSS & Implémentation

### Organisation des Fichiers
```
styles/
├── globals.css          (reset, variables CSS)
├── components/
│   ├── buttons.css
│   ├── navigation.css
│   ├── forms.css
│   └── cards.css
├── layouts/
│   ├── grid.css
│   └── containers.css
└── utilities/
    ├── spacing.css
    ├── colors.css
    └── typography.css
```

### Classes Utilitaires Tailwind Custom
```css
/* Espacements */
.section-padding { @apply py-32 md:py-16 sm:py-12; }
.container-padding { @apply px-4; }

/* Couleurs brand */
.text-brand { color: var(--color--brand); }
.bg-brand { background-color: var(--color--brand); }
.border-brand { border-color: var(--color--brand); }

/* Typography */
.heading-font { font-family: var(--fonts--heading-font); }
.body-font { font-family: var(--fonts--body-font); }
```

### Checklist Technique Final
- [ ] Variables CSS configurées
- [ ] Composants React avec TypeScript
- [ ] Tailwind config optimisé
- [ ] Images WebP + lazy loading
- [ ] Schema markup implémenté
- [ ] Tests performance Lighthouse
- [ ] Validation W3C
- [ ] Tests accessibilité complète

Ce document unifié combine les exigences business, techniques et design pour créer une roadmap complète du projet d'agence marketing luxembourgeoise.