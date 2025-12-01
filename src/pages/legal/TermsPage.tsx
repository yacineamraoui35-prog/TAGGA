import { Link } from 'react-router-dom';
import { ArrowLeft, FileText } from 'lucide-react';

const TermsPage = () => {
  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <div className="bg-black text-white py-12">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="inline-flex items-center gap-2 bg-primary-green text-black px-4 py-2 rounded-full font-semibold mb-4">
              <FileText className="w-4 h-4" />
              Document légal
            </div>
            <h1 className="text-4xl md:text-5xl font-bold mb-4">
              Conditions Générales d'Utilisation
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
                <h2 className="text-2xl font-bold mb-4">1. Objet</h2>
                <p className="text-gray-700 mb-4">
                  Les présentes Conditions Générales d'Utilisation (ci-après « CGU ») ont pour objet de définir les modalités et conditions d'utilisation de la plateforme TAGGA (ci-après la « Plateforme »), ainsi que les droits et obligations des utilisateurs.
                </p>
                <p className="text-gray-700 mb-4">
                  TAGGA est un service de mise en relation entre expéditeurs souhaitant faire livrer des enveloppes et voyageurs utilisant le train ou l'avion pour des trajets moyenne et longue distance.
                </p>
              </section>

              <section className="mb-8">
                <h2 className="text-2xl font-bold mb-4">2. Acceptation des CGU</h2>
                <p className="text-gray-700 mb-4">
                  L'utilisation de la Plateforme implique l'acceptation pleine et entière des présentes CGU. Si vous n'acceptez pas ces conditions, vous ne devez pas utiliser la Plateforme.
                </p>
                <p className="text-gray-700 mb-4">
                  TAGGA se réserve le droit de modifier les présentes CGU à tout moment. Les utilisateurs seront informés de toute modification substantielle.
                </p>
              </section>

              <section className="mb-8">
                <h2 className="text-2xl font-bold mb-4">3. Inscription et Compte Utilisateur</h2>
                <h3 className="text-xl font-semibold mb-3">3.1 Création de compte</h3>
                <p className="text-gray-700 mb-4">
                  Pour utiliser les services de TAGGA, vous devez créer un compte en fournissant des informations exactes, complètes et à jour. Vous pouvez vous inscrire en tant que :
                </p>
                <ul className="list-disc pl-6 mb-4 text-gray-700">
                  <li>Expéditeur : pour envoyer des enveloppes</li>
                  <li>Voyageur : pour transporter des enveloppes lors de vos trajets</li>
                  <li>Les deux : pour bénéficier des deux services</li>
                </ul>

                <h3 className="text-xl font-semibold mb-3">3.2 Sécurité du compte</h3>
                <p className="text-gray-700 mb-4">
                  Vous êtes responsable de la confidentialité de vos identifiants de connexion. Toute activité effectuée depuis votre compte sera présumée avoir été effectuée par vous.
                </p>
              </section>

              <section className="mb-8">
                <h2 className="text-2xl font-bold mb-4">4. Services Proposés</h2>
                <h3 className="text-xl font-semibold mb-3">4.1 Service d'envoi</h3>
                <p className="text-gray-700 mb-4">
                  Les expéditeurs peuvent publier des demandes d'envoi d'enveloppes avec les caractéristiques suivantes :
                </p>
                <ul className="list-disc pl-6 mb-4 text-gray-700">
                  <li>Trajets en train ou avion uniquement</li>
                  <li>Enveloppes, documents et petits plis (pas de colis volumineux)</li>
                  <li>Option service d'urgence disponible (+5€)</li>
                  <li>Prix minimum : 30€</li>
                </ul>

                <h3 className="text-xl font-semibold mb-3">4.2 Service de transport</h3>
                <p className="text-gray-700 mb-4">
                  Les voyageurs peuvent publier leurs trajets et accepter de transporter des enveloppes moyennant rémunération. Conditions :
                </p>
                <ul className="list-disc pl-6 mb-4 text-gray-700">
                  <li>Trajets en train ou avion uniquement</li>
                  <li>Maximum 5 enveloppes par trajet</li>
                  <li>Rémunération : 80% du prix (20% de commission TAGGA)</li>
                  <li>Paiement sécurisé via la plateforme</li>
                </ul>
              </section>

              <section className="mb-8">
                <h2 className="text-2xl font-bold mb-4">5. Tarification et Paiement</h2>
                <h3 className="text-xl font-semibold mb-3">5.1 Prix et commission</h3>
                <p className="text-gray-700 mb-4">
                  Les expéditeurs proposent un prix pour le transport (minimum 30€). TAGGA prélève une commission de 20% sur chaque transaction. Le voyageur reçoit 80% du montant total.
                </p>

                <h3 className="text-xl font-semibold mb-3">5.2 Modalités de paiement</h3>
                <p className="text-gray-700 mb-4">
                  Les paiements sont effectués via Stripe. Le montant est débité lors de la confirmation de la réservation et versé au voyageur après confirmation de la livraison.
                </p>
              </section>

              <section className="mb-8">
                <h2 className="text-2xl font-bold mb-4">6. Responsabilités</h2>
                <h3 className="text-xl font-semibold mb-3">6.1 Responsabilité de l'expéditeur</h3>
                <ul className="list-disc pl-6 mb-4 text-gray-700">
                  <li>Ne pas envoyer de contenus interdits, dangereux ou illégaux</li>
                  <li>Fournir une description exacte du contenu</li>
                  <li>Emballer correctement l'enveloppe</li>
                  <li>Être présent aux lieux et horaires convenus pour la remise</li>
                </ul>

                <h3 className="text-xl font-semibold mb-3">6.2 Responsabilité du voyageur</h3>
                <ul className="list-disc pl-6 mb-4 text-gray-700">
                  <li>Transporter l'enveloppe avec soin</li>
                  <li>Respecter les horaires et lieux de remise et livraison</li>
                  <li>Ne pas ouvrir ou altérer le contenu</li>
                  <li>Informer en cas de retard ou problème</li>
                </ul>

                <h3 className="text-xl font-semibold mb-3">6.3 Responsabilité de TAGGA</h3>
                <p className="text-gray-700 mb-4">
                  TAGGA agit uniquement en tant qu'intermédiaire de mise en relation. La plateforme ne peut être tenue responsable :
                </p>
                <ul className="list-disc pl-6 mb-4 text-gray-700">
                  <li>De la perte, du vol ou de la détérioration des enveloppes</li>
                  <li>Du non-respect des engagements par les utilisateurs</li>
                  <li>Des retards de transport indépendants de notre volonté</li>
                </ul>
              </section>

              <section className="mb-8">
                <h2 className="text-2xl font-bold mb-4">7. Contenus Interdits</h2>
                <p className="text-gray-700 mb-4">
                  Il est strictement interdit d'envoyer via TAGGA :
                </p>
                <ul className="list-disc pl-6 mb-4 text-gray-700">
                  <li>Argent liquide, chèques, cartes bancaires</li>
                  <li>Substances illégales ou dangereuses</li>
                  <li>Armes ou objets interdits par la loi</li>
                  <li>Produits périssables ou nécessitant une température contrôlée</li>
                  <li>Documents confidentiels de haute sécurité</li>
                  <li>Matières inflammables ou explosives</li>
                </ul>
              </section>

              <section className="mb-8">
                <h2 className="text-2xl font-bold mb-4">8. Annulation et Remboursement</h2>
                <p className="text-gray-700 mb-4">
                  Les expéditeurs peuvent annuler une réservation jusqu'à 24h avant le départ. Le remboursement sera effectué intégralement (frais de service déduits).
                </p>
                <p className="text-gray-700 mb-4">
                  En cas d'annulation par le voyageur, l'expéditeur est remboursé intégralement et peut publier une nouvelle demande.
                </p>
              </section>

              <section className="mb-8">
                <h2 className="text-2xl font-bold mb-4">9. Données Personnelles</h2>
                <p className="text-gray-700 mb-4">
                  TAGGA s'engage à protéger vos données personnelles conformément au RGPD. Pour plus d'informations, consultez notre{' '}
                  <Link to="/privacy" className="text-primary-green hover:text-primary-green-dark font-semibold">
                    Politique de Confidentialité
                  </Link>.
                </p>
              </section>

              <section className="mb-8">
                <h2 className="text-2xl font-bold mb-4">10. Résiliation</h2>
                <p className="text-gray-700 mb-4">
                  TAGGA se réserve le droit de suspendre ou résilier un compte en cas de violation des présentes CGU, sans préavis ni indemnité.
                </p>
              </section>

              <section className="mb-8">
                <h2 className="text-2xl font-bold mb-4">11. Droit Applicable</h2>
                <p className="text-gray-700 mb-4">
                  Les présentes CGU sont régies par le droit français. Tout litige sera soumis aux tribunaux compétents de Paris.
                </p>
              </section>

              <section className="mb-8">
                <h2 className="text-2xl font-bold mb-4">12. Contact</h2>
                <p className="text-gray-700">
                  Pour toute question concernant ces CGU, contactez-nous à :{' '}
                  <a href="mailto:legal@tagga.fr" className="text-primary-green hover:text-primary-green-dark font-semibold">
                    legal@tagga.fr
                  </a>
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

export default TermsPage;
