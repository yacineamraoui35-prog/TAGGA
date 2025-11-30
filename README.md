# TAGGA - Plateforme de livraison express

TAGGA est une plateforme web de mise en relation entre particuliers pour l'envoi express de lettres et petits colis via des voyageurs empruntant déjà un trajet. Le service garantit une livraison rapide (< 24h selon disponibilité), simple et sécurisée.

## 🚀 Technologies utilisées

- **Frontend Framework**: React 18 + TypeScript
- **Build Tool**: Vite
- **Styling**: Tailwind CSS
- **Routing**: React Router v6
- **State Management**: Zustand
- **Forms**: React Hook Form + Zod
- **Maps**: React Leaflet
- **Payment**: Stripe
- **Icons**: Lucide React

## 📋 Prérequis

- Node.js >= 18.x
- npm ou yarn

## 🛠️ Installation

1. Cloner le repository:
```bash
git clone <repository-url>
cd TAGGA
```

2. Installer les dépendances:
```bash
npm install
```

3. Créer un fichier `.env` à partir de `.env.example`:
```bash
cp .env.example .env
```

4. Configurer les variables d'environnement dans `.env`:
```env
VITE_API_URL=http://localhost:3000/api
VITE_STRIPE_PUBLIC_KEY=your_stripe_public_key
VITE_MAP_API_KEY=your_map_api_key
```

## 🏃 Lancement du projet

### Mode développement
```bash
npm run dev
```
L'application sera accessible sur `http://localhost:5173`

### Build de production
```bash
npm run build
```

### Prévisualiser le build
```bash
npm run preview
```

## 📁 Structure du projet

```
TAGGA/
├── src/
│   ├── components/        # Composants React réutilisables
│   │   ├── layout/       # Header, Footer, etc.
│   │   ├── common/       # Boutons, inputs, etc.
│   │   ├── sender/       # Composants spécifiques expéditeur
│   │   ├── traveler/     # Composants spécifiques voyageur
│   │   ├── auth/         # Composants d'authentification
│   │   └── map/          # Composants de carte
│   ├── pages/            # Pages de l'application
│   │   ├── auth/         # Pages d'authentification
│   │   ├── sender/       # Pages expéditeur
│   │   ├── traveler/     # Pages voyageur
│   │   └── legal/        # Pages légales
│   ├── router/           # Configuration du routing
│   ├── services/         # Services API
│   ├── store/            # Store Zustand
│   ├── types/            # Types TypeScript
│   ├── utils/            # Fonctions utilitaires
│   ├── hooks/            # Custom React hooks
│   └── assets/           # Images, icônes, etc.
├── public/               # Fichiers publics statiques
└── index.html           # Point d'entrée HTML
```

## 🎨 Charte graphique

- **Couleurs principales**:
  - Noir (#000000)
  - Vert (#00FF00)
- **Police**: Inter (système)
- **Style**: Moderne, minimaliste, inspiré d'Uber

## 🔑 Fonctionnalités principales

### Côté Expéditeur
- ✅ Création de compte expéditeur
- ✅ Formulaire d'envoi de colis
- ✅ Consultation des voyageurs disponibles via carte interactive
- ✅ Réservation d'un voyageur
- ✅ Paiement sécurisé (Stripe)
- ✅ Accès à l'historique et suivi

### Côté Voyageur
- ✅ Création de compte voyageur
- ✅ Publication d'un trajet
- ✅ Réception de demandes
- ✅ Validation ou refus de missions
- ✅ Accès à l'historique et gains

### Administration
- ✅ Gestion des utilisateurs
- ✅ Gestion des trajets
- ✅ Gestion des transactions
- ✅ Gestion des litiges
- ✅ Dashboard global

## 💳 Paiement

- **Prix minimum**: 30 €
- **Commission TAGGA**: 20%
- **Système**: Stripe (paiement capturé puis libéré à la livraison)

## 🔐 Sécurité & Conformité

- Protection des données (RGPD)
- Paiement sécurisé via Stripe
- Vérification d'identité (KYC) - À venir
- CGU + Politique de confidentialité
- Mentions légales

## 🚧 Roadmap

### V1 (En cours)
- [x] Setup du projet
- [x] Design system et composants de base
- [x] Pages principales
- [ ] Formulaires d'envoi et de trajet
- [ ] Carte interactive
- [ ] Intégration Stripe
- [ ] Système d'authentification complet
- [ ] Dashboards utilisateurs

### V2 (Future)
- [ ] Application mobile React Native
- [ ] Chat intégré
- [ ] Système de notation
- [ ] Vérification KYC
- [ ] Assurance colis
- [ ] Tracking GPS en temps réel
- [ ] Notifications push

## 📝 Scripts disponibles

- `npm run dev` - Lancer le serveur de développement
- `npm run build` - Build de production
- `npm run preview` - Prévisualiser le build
- `npm run lint` - Linter le code

## 🤝 Contribution

Ce projet est actuellement en développement actif. Les contributions seront les bienvenues une fois la V1 stabilisée.

## 📄 Licence

Copyright © 2024 TAGGA. Tous droits réservés.

## 📞 Contact

- Email: contact@tagga.fr
- Téléphone: 01 23 45 67 89
- Adresse: Paris, France
