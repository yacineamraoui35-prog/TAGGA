import { Link } from 'react-router-dom';
import { ArrowLeft, Shield } from 'lucide-react';

const PrivacyPage = () => {
  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <div className="bg-black text-white py-12">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="inline-flex items-center gap-2 bg-primary-green text-black px-4 py-2 rounded-full font-semibold mb-4">
              <Shield className="w-4 h-4" />
              Protection des données
            </div>
            <h1 className="text-4xl md:text-5xl font-bold mb-4">
              Politique de Confidentialité
            </h1>
            <p className="text-xl text-gray-300">
              Dernière mise à jour : 1er décembre 2025
            </p>
          </div>
        </div>
      </div>

      {/* Content */}
      <div className="container mx-auto px-4 py-12">
        <div className="max-w-4xl mx-auto">
          <div className="bg-white rounded-xl shadow-lg p-8 md:p-12">
            <div className="prose prose-lg max-w-none">
              <section className="mb-8">
                <h2 className="text-2xl font-bold mb-4">1. Introduction</h2>
                <p className="text-gray-700 mb-4">
                  TAGGA accorde une grande importance à la protection de vos données personnelles. La présente Politique de Confidentialité a pour objectif de vous informer sur la manière dont nous collectons, utilisons, partageons et protégeons vos informations personnelles.
                </p>
                <p className="text-gray-700 mb-4">
                  Cette politique s'applique à tous les utilisateurs de la plateforme TAGGA, qu'ils soient expéditeurs ou voyageurs.
                </p>
              </section>

              <section className="mb-8">
                <h2 className="text-2xl font-bold mb-4">2. Responsable du Traitement</h2>
                <p className="text-gray-700 mb-4">
                  Le responsable du traitement des données personnelles est :
                </p>
                <div className="bg-gray-50 p-4 rounded-lg mb-4">
                  <p className="text-gray-700">
                    <strong>TAGGA</strong><br />
                    123 Avenue de la République<br />
                    75011 Paris, France<br />
                    Email : privacy@tagga.fr
                  </p>
                </div>
              </section>

              <section className="mb-8">
                <h2 className="text-2xl font-bold mb-4">3. Données Collectées</h2>
                <h3 className="text-xl font-semibold mb-3">3.1 Données d'identification</h3>
                <ul className="list-disc pl-6 mb-4 text-gray-700">
                  <li>Nom et prénom</li>
                  <li>Adresse email</li>
                  <li>Numéro de téléphone</li>
                  <li>Date de naissance (pour vérification d'âge)</li>
                  <li>Photo de profil (optionnelle)</li>
                </ul>

                <h3 className="text-xl font-semibold mb-3">3.2 Données de transaction</h3>
                <ul className="list-disc pl-6 mb-4 text-gray-700">
                  <li>Informations de paiement (via Stripe, non stockées par TAGGA)</li>
                  <li>Historique des envois et trajets</li>
                  <li>Montants des transactions</li>
                  <li>Codes de suivi</li>
                </ul>

                <h3 className="text-xl font-semibold mb-3">3.3 Données de navigation</h3>
                <ul className="list-disc pl-6 mb-4 text-gray-700">
                  <li>Adresse IP</li>
                  <li>Type de navigateur et appareil</li>
                  <li>Pages visitées et durée de visite</li>
                  <li>Cookies et technologies similaires</li>
                </ul>

                <h3 className="text-xl font-semibold mb-3">3.4 Données de localisation</h3>
                <ul className="list-disc pl-6 mb-4 text-gray-700">
                  <li>Gares et aéroports de départ/arrivée</li>
                  <li>Localisation approximative (pour affichage sur la carte)</li>
                </ul>
              </section>

              <section className="mb-8">
                <h2 className="text-2xl font-bold mb-4">4. Finalités du Traitement</h2>
                <p className="text-gray-700 mb-4">
                  Vos données personnelles sont collectées et traitées pour les finalités suivantes :
                </p>
                <ul className="list-disc pl-6 mb-4 text-gray-700">
                  <li><strong>Création et gestion de compte :</strong> Permettre votre inscription et l'accès à votre compte</li>
                  <li><strong>Mise en relation :</strong> Connecter expéditeurs et voyageurs</li>
                  <li><strong>Traitement des paiements :</strong> Gérer les transactions financières de manière sécurisée</li>
                  <li><strong>Service client :</strong> Répondre à vos questions et réclamations</li>
                  <li><strong>Sécurité :</strong> Prévenir la fraude et garantir la sécurité de la plateforme</li>
                  <li><strong>Amélioration des services :</strong> Analyser l'utilisation pour améliorer notre plateforme</li>
                  <li><strong>Communication :</strong> Vous envoyer des notifications importantes et informations sur votre compte</li>
                </ul>
              </section>

              <section className="mb-8">
                <h2 className="text-2xl font-bold mb-4">5. Base Légale du Traitement</h2>
                <p className="text-gray-700 mb-4">
                  Le traitement de vos données personnelles repose sur :
                </p>
                <ul className="list-disc pl-6 mb-4 text-gray-700">
                  <li><strong>Exécution du contrat :</strong> Pour fournir les services demandés</li>
                  <li><strong>Consentement :</strong> Pour l'envoi de communications marketing (avec possibilité de retrait)</li>
                  <li><strong>Intérêt légitime :</strong> Pour la sécurité et l'amélioration de nos services</li>
                  <li><strong>Obligation légale :</strong> Pour respecter nos obligations légales et réglementaires</li>
                </ul>
              </section>

              <section className="mb-8">
                <h2 className="text-2xl font-bold mb-4">6. Partage des Données</h2>
                <p className="text-gray-700 mb-4">
                  Vos données personnelles peuvent être partagées avec :
                </p>
                <h3 className="text-xl font-semibold mb-3">6.1 Entre utilisateurs</h3>
                <p className="text-gray-700 mb-4">
                  Lorsqu'une mise en relation est effectuée, certaines informations sont partagées :
                </p>
                <ul className="list-disc pl-6 mb-4 text-gray-700">
                  <li>Prénom et initiale du nom</li>
                  <li>Photo de profil</li>
                  <li>Numéro de téléphone (pour coordination de la remise/livraison)</li>
                </ul>

                <h3 className="text-xl font-semibold mb-3">6.2 Prestataires de services</h3>
                <ul className="list-disc pl-6 mb-4 text-gray-700">
                  <li><strong>Stripe :</strong> Pour le traitement des paiements</li>
                  <li><strong>Hébergement :</strong> Serveurs sécurisés pour stocker les données</li>
                  <li><strong>Service email :</strong> Pour l'envoi de notifications</li>
                  <li><strong>Cartographie :</strong> OpenStreetMap pour l'affichage de la carte</li>
                </ul>

                <h3 className="text-xl font-semibold mb-3">6.3 Autorités</h3>
                <p className="text-gray-700 mb-4">
                  En cas d'obligation légale ou de demande judiciaire, nous pouvons être amenés à communiquer vos données aux autorités compétentes.
                </p>
              </section>

              <section className="mb-8">
                <h2 className="text-2xl font-bold mb-4">7. Durée de Conservation</h2>
                <p className="text-gray-700 mb-4">
                  Vos données sont conservées pendant les durées suivantes :
                </p>
                <ul className="list-disc pl-6 mb-4 text-gray-700">
                  <li><strong>Données de compte :</strong> Jusqu'à la suppression de votre compte + 1 an</li>
                  <li><strong>Données de transaction :</strong> 10 ans (obligation comptable)</li>
                  <li><strong>Données de navigation :</strong> 13 mois maximum</li>
                  <li><strong>Données de support client :</strong> 3 ans après la clôture du dossier</li>
                </ul>
              </section>

              <section className="mb-8">
                <h2 className="text-2xl font-bold mb-4">8. Vos Droits</h2>
                <p className="text-gray-700 mb-4">
                  Conformément au RGPD, vous disposez des droits suivants :
                </p>
                <ul className="list-disc pl-6 mb-4 text-gray-700">
                  <li><strong>Droit d'accès :</strong> Obtenir une copie de vos données personnelles</li>
                  <li><strong>Droit de rectification :</strong> Corriger vos données inexactes ou incomplètes</li>
                  <li><strong>Droit à l'effacement :</strong> Supprimer vos données (sous certaines conditions)</li>
                  <li><strong>Droit à la limitation :</strong> Limiter le traitement de vos données</li>
                  <li><strong>Droit à la portabilité :</strong> Recevoir vos données dans un format structuré</li>
                  <li><strong>Droit d'opposition :</strong> Vous opposer au traitement de vos données</li>
                  <li><strong>Droit de retrait du consentement :</strong> À tout moment, sans affecter la licéité du traitement antérieur</li>
                </ul>

                <p className="text-gray-700 mb-4">
                  Pour exercer vos droits, contactez-nous à :{' '}
                  <a href="mailto:privacy@tagga.fr" className="text-primary-green hover:text-primary-green-dark font-semibold">
                    privacy@tagga.fr
                  </a>
                </p>

                <p className="text-gray-700 mb-4">
                  Vous disposez également du droit d'introduire une réclamation auprès de la CNIL (Commission Nationale de l'Informatique et des Libertés).
                </p>
              </section>

              <section className="mb-8">
                <h2 className="text-2xl font-bold mb-4">9. Sécurité des Données</h2>
                <p className="text-gray-700 mb-4">
                  Nous mettons en œuvre des mesures techniques et organisationnelles appropriées pour protéger vos données :
                </p>
                <ul className="list-disc pl-6 mb-4 text-gray-700">
                  <li>Chiffrement SSL/TLS pour les transmissions de données</li>
                  <li>Authentification à deux facteurs (optionnelle)</li>
                  <li>Pare-feu et systèmes de détection d'intrusion</li>
                  <li>Accès restreint aux données personnelles</li>
                  <li>Sauvegardes régulières et sécurisées</li>
                  <li>Formation du personnel sur la protection des données</li>
                </ul>
              </section>

              <section className="mb-8">
                <h2 className="text-2xl font-bold mb-4">10. Cookies</h2>
                <p className="text-gray-700 mb-4">
                  Nous utilisons des cookies pour améliorer votre expérience. Types de cookies utilisés :
                </p>
                <ul className="list-disc pl-6 mb-4 text-gray-700">
                  <li><strong>Cookies essentiels :</strong> Nécessaires au fonctionnement de la plateforme</li>
                  <li><strong>Cookies de performance :</strong> Pour analyser l'utilisation et améliorer nos services</li>
                  <li><strong>Cookies de préférence :</strong> Pour mémoriser vos choix (langue, etc.)</li>
                </ul>
                <p className="text-gray-700 mb-4">
                  Vous pouvez gérer vos préférences de cookies via les paramètres de votre navigateur.
                </p>
              </section>

              <section className="mb-8">
                <h2 className="text-2xl font-bold mb-4">11. Transferts Internationaux</h2>
                <p className="text-gray-700 mb-4">
                  Vos données sont principalement stockées dans l'Union Européenne. Si un transfert hors UE est nécessaire, nous nous assurons que des garanties appropriées sont en place (clauses contractuelles types, Privacy Shield, etc.).
                </p>
              </section>

              <section className="mb-8">
                <h2 className="text-2xl font-bold mb-4">12. Mineurs</h2>
                <p className="text-gray-700 mb-4">
                  La plateforme TAGGA est réservée aux personnes âgées de 18 ans et plus. Nous ne collectons pas sciemment de données personnelles auprès de mineurs.
                </p>
              </section>

              <section className="mb-8">
                <h2 className="text-2xl font-bold mb-4">13. Modifications</h2>
                <p className="text-gray-700 mb-4">
                  Nous nous réservons le droit de modifier cette Politique de Confidentialité à tout moment. Les modifications substantielles vous seront notifiées par email ou via la plateforme.
                </p>
              </section>

              <section className="mb-8">
                <h2 className="text-2xl font-bold mb-4">14. Contact</h2>
                <p className="text-gray-700">
                  Pour toute question concernant cette politique ou vos données personnelles :<br />
                  Email : {' '}
                  <a href="mailto:privacy@tagga.fr" className="text-primary-green hover:text-primary-green-dark font-semibold">
                    privacy@tagga.fr
                  </a><br />
                  Téléphone : +33 1 23 45 67 89
                </p>
              </section>
            </div>

            <div className="mt-12 pt-8 border-t">
              <Link
                to="/"
                className="inline-flex items-center gap-2 text-primary-green hover:text-primary-green-dark font-semibold"
              >
                <ArrowLeft className="w-5 h-5" />
                Retour à l'accueil
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PrivacyPage;
