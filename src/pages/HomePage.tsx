import { Link } from 'react-router-dom';
import { Package, Zap, Shield, DollarSign } from 'lucide-react';

const HomePage = () => {
  return (
    <div className="bg-white">
      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-black via-gray-900 to-black text-white py-20 md:py-32">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-4xl md:text-6xl font-bold mb-6">
              Livraison express via{' '}
              <span className="text-primary-green">voyageurs</span>
            </h1>
            <p className="text-xl md:text-2xl mb-8 text-gray-300">
              Envoyez vos colis rapidement et en toute sécurité avec TAGGA
            </p>
            <p className="text-lg mb-12 text-gray-400">
              Une alternative économique, rapide et écologique aux livraisons classiques
            </p>

            <div className="flex flex-col md:flex-row gap-4 justify-center">
              <Link
                to="/send-parcel"
                className="btn-primary text-lg px-8 py-4 inline-block"
              >
                <Package className="inline w-6 h-6 mr-2" />
                Envoyer un colis
              </Link>
              <Link
                to="/become-traveler"
                className="btn-secondary text-lg px-8 py-4 inline-block bg-white text-black hover:bg-gray-100"
              >
                Devenir voyageur
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">
            Pourquoi choisir TAGGA ?
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Feature 1 */}
            <div className="card text-center">
              <div className="bg-primary-green w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <Zap className="w-8 h-8 text-black" />
              </div>
              <h3 className="text-xl font-bold mb-3">Rapidité</h3>
              <p className="text-gray-600">
                Livraison express en moins de 24h selon disponibilité des voyageurs
              </p>
            </div>

            {/* Feature 2 */}
            <div className="card text-center">
              <div className="bg-primary-green w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <Shield className="w-8 h-8 text-black" />
              </div>
              <h3 className="text-xl font-bold mb-3">Sécurité</h3>
              <p className="text-gray-600">
                Paiement sécurisé via Stripe et système de vérification des utilisateurs
              </p>
            </div>

            {/* Feature 3 */}
            <div className="card text-center">
              <div className="bg-primary-green w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <DollarSign className="w-8 h-8 text-black" />
              </div>
              <h3 className="text-xl font-bold mb-3">Économique</h3>
              <p className="text-gray-600">
                Tarifs attractifs à partir de 30€ pour une livraison express
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* How It Works Section */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-4">
            Comment ça marche ?
          </h2>
          <p className="text-center text-gray-600 mb-12 max-w-2xl mx-auto">
            Un système simple en 3 étapes pour expédier ou transporter
          </p>

          {/* For Senders */}
          <div className="mb-16">
            <h3 className="text-2xl font-bold mb-8 text-center">
              Pour les <span className="text-primary-green">expéditeurs</span>
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="flex flex-col items-center text-center">
                <div className="w-12 h-12 bg-primary-green text-black font-bold rounded-full flex items-center justify-center text-xl mb-4">
                  1
                </div>
                <h4 className="font-bold mb-2">Publier votre envoi</h4>
                <p className="text-gray-600">
                  Renseignez les détails de votre colis et sa destination
                </p>
              </div>
              <div className="flex flex-col items-center text-center">
                <div className="w-12 h-12 bg-primary-green text-black font-bold rounded-full flex items-center justify-center text-xl mb-4">
                  2
                </div>
                <h4 className="font-bold mb-2">Choisir un voyageur</h4>
                <p className="text-gray-600">
                  Sélectionnez un voyageur parmi ceux disponibles
                </p>
              </div>
              <div className="flex flex-col items-center text-center">
                <div className="w-12 h-12 bg-primary-green text-black font-bold rounded-full flex items-center justify-center text-xl mb-4">
                  3
                </div>
                <h4 className="font-bold mb-2">Payer et suivre</h4>
                <p className="text-gray-600">
                  Payez en ligne et suivez votre livraison en temps réel
                </p>
              </div>
            </div>
          </div>

          {/* For Travelers */}
          <div>
            <h3 className="text-2xl font-bold mb-8 text-center">
              Pour les <span className="text-primary-green">voyageurs</span>
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="flex flex-col items-center text-center">
                <div className="w-12 h-12 bg-black text-primary-green font-bold rounded-full flex items-center justify-center text-xl mb-4">
                  1
                </div>
                <h4 className="font-bold mb-2">Publier votre trajet</h4>
                <p className="text-gray-600">
                  Indiquez votre itinéraire et vos disponibilités
                </p>
              </div>
              <div className="flex flex-col items-center text-center">
                <div className="w-12 h-12 bg-black text-primary-green font-bold rounded-full flex items-center justify-center text-xl mb-4">
                  2
                </div>
                <h4 className="font-bold mb-2">Accepter une demande</h4>
                <p className="text-gray-600">
                  Recevez et validez les demandes d'expédition
                </p>
              </div>
              <div className="flex flex-col items-center text-center">
                <div className="w-12 h-12 bg-black text-primary-green font-bold rounded-full flex items-center justify-center text-xl mb-4">
                  3
                </div>
                <h4 className="font-bold mb-2">Livrer et gagner</h4>
                <p className="text-gray-600">
                  Livrez le colis et recevez votre paiement
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-black text-white py-16">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            Prêt à commencer ?
          </h2>
          <p className="text-xl mb-8 text-gray-300">
            Rejoignez la communauté TAGGA dès aujourd'hui
          </p>
          <div className="flex flex-col md:flex-row gap-4 justify-center">
            <Link
              to="/register"
              className="btn-primary text-lg px-8 py-4 inline-block"
            >
              S'inscrire gratuitement
            </Link>
            <Link
              to="/contact"
              className="btn-secondary text-lg px-8 py-4 inline-block bg-white text-black hover:bg-gray-100"
            >
              Nous contacter
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
};

export default HomePage;
