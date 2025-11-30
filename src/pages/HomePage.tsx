import { Link } from 'react-router-dom';
import { Package, ArrowRight, Shield, Clock, DollarSign, Users, MapPin } from 'lucide-react';
import { useState } from 'react';

const HomePage = () => {
  const [searchType, setSearchType] = useState<'send' | 'travel'>('send');

  return (
    <div className="bg-white">
      {/* Hero Section - Style Uber */}
      <section className="relative bg-black text-white min-h-[600px] flex items-center overflow-hidden">
        {/* Background pattern */}
        <div className="absolute inset-0 opacity-10">
          <div className="absolute inset-0" style={{
            backgroundImage: 'radial-gradient(circle at 20% 50%, #10B981 0%, transparent 50%), radial-gradient(circle at 80% 80%, #10B981 0%, transparent 50%)',
          }}></div>
        </div>

        <div className="container mx-auto px-4 py-16 relative z-10">
          <div className="max-w-2xl">
            <h1 className="text-5xl md:text-6xl font-bold mb-6 leading-tight">
              Livraison express,<br />
              <span className="text-primary-green">simple et rapide</span>
            </h1>
            <p className="text-xl text-gray-300 mb-12">
              Envoyez vos colis en moins de 24h via des voyageurs de confiance
            </p>

            {/* Quick Search Tabs */}
            <div className="bg-white rounded-xl shadow-2xl p-6">
              {/* Tabs */}
              <div className="flex gap-4 mb-6 border-b border-gray-200">
                <button
                  onClick={() => setSearchType('send')}
                  className={`pb-3 px-2 font-semibold transition-colors relative ${
                    searchType === 'send'
                      ? 'text-black'
                      : 'text-gray-400 hover:text-gray-600'
                  }`}
                >
                  Envoyer un colis
                  {searchType === 'send' && (
                    <div className="absolute bottom-0 left-0 right-0 h-0.5 bg-black"></div>
                  )}
                </button>
                <button
                  onClick={() => setSearchType('travel')}
                  className={`pb-3 px-2 font-semibold transition-colors relative ${
                    searchType === 'travel'
                      ? 'text-black'
                      : 'text-gray-400 hover:text-gray-600'
                  }`}
                >
                  Proposer un trajet
                  {searchType === 'travel' && (
                    <div className="absolute bottom-0 left-0 right-0 h-0.5 bg-black"></div>
                  )}
                </button>
              </div>

              {/* Search Form */}
              {searchType === 'send' ? (
                <div className="space-y-4">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <input
                      type="text"
                      placeholder="Ville de départ"
                      className="px-4 py-3 bg-gray-50 text-black rounded-lg focus:outline-none focus:ring-2 focus:ring-primary-green"
                    />
                    <input
                      type="text"
                      placeholder="Ville d'arrivée"
                      className="px-4 py-3 bg-gray-50 text-black rounded-lg focus:outline-none focus:ring-2 focus:ring-primary-green"
                    />
                  </div>
                  <Link
                    to="/send-parcel"
                    className="w-full bg-black hover:bg-gray-900 text-white font-semibold py-4 rounded-lg transition-all flex items-center justify-center gap-2 group"
                  >
                    Rechercher un voyageur
                    <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                  </Link>
                </div>
              ) : (
                <div className="space-y-4">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <input
                      type="text"
                      placeholder="D'où partez-vous ?"
                      className="px-4 py-3 bg-gray-50 text-black rounded-lg focus:outline-none focus:ring-2 focus:ring-primary-green"
                    />
                    <input
                      type="text"
                      placeholder="Où allez-vous ?"
                      className="px-4 py-3 bg-gray-50 text-black rounded-lg focus:outline-none focus:ring-2 focus:ring-primary-green"
                    />
                  </div>
                  <Link
                    to="/become-traveler"
                    className="w-full bg-primary-green hover:bg-primary-green-dark text-black font-semibold py-4 rounded-lg transition-all flex items-center justify-center gap-2 group"
                  >
                    Publier mon trajet
                    <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                  </Link>
                </div>
              )}
            </div>
          </div>
        </div>
      </section>

      {/* Services Section - Style Uber */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            {/* Left - Image placeholder */}
            <div className="order-2 md:order-1">
              <div className="bg-gradient-to-br from-primary-green to-primary-green-dark rounded-3xl h-[400px] flex items-center justify-center shadow-xl">
                <Package className="w-32 h-32 text-white opacity-20" />
              </div>
            </div>

            {/* Right - Content */}
            <div className="order-1 md:order-2">
              <h2 className="text-4xl font-bold mb-6">
                Envoyez vos colis en toute simplicité
              </h2>
              <p className="text-lg text-gray-600 mb-8">
                Profitez de trajets déjà planifiés pour une livraison rapide et économique.
                TAGGA connecte expéditeurs et voyageurs pour un service gagnant-gagnant.
              </p>
              <div className="space-y-4">
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-primary-green-lighter rounded-full flex items-center justify-center flex-shrink-0">
                    <Clock className="w-6 h-6 text-primary-green-dark" />
                  </div>
                  <div>
                    <h3 className="font-bold text-lg mb-1">Livraison express</h3>
                    <p className="text-gray-600">Moins de 24h selon disponibilité</p>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-primary-green-lighter rounded-full flex items-center justify-center flex-shrink-0">
                    <Shield className="w-6 h-6 text-primary-green-dark" />
                  </div>
                  <div>
                    <h3 className="font-bold text-lg mb-1">Paiement sécurisé</h3>
                    <p className="text-gray-600">Protection complète via Stripe</p>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-primary-green-lighter rounded-full flex items-center justify-center flex-shrink-0">
                    <DollarSign className="w-6 h-6 text-primary-green-dark" />
                  </div>
                  <div>
                    <h3 className="font-bold text-lg mb-1">Tarifs attractifs</h3>
                    <p className="text-gray-600">À partir de 30€ seulement</p>
                  </div>
                </div>
              </div>
              <Link
                to="/send-parcel"
                className="inline-flex items-center gap-2 mt-8 text-black font-semibold hover:gap-4 transition-all group"
              >
                Commencer
                <ArrowRight className="w-5 h-5" />
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Travelers Section - Inversé */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            {/* Left - Content */}
            <div>
              <h2 className="text-4xl font-bold mb-6">
                Gagnez de l'argent en voyageant
              </h2>
              <p className="text-lg text-gray-600 mb-8">
                Rentabilisez vos trajets en transportant des colis. Simple, flexible et rémunérateur.
              </p>
              <div className="space-y-4">
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-primary-green-lighter rounded-full flex items-center justify-center flex-shrink-0">
                    <MapPin className="w-6 h-6 text-primary-green-dark" />
                  </div>
                  <div>
                    <h3 className="font-bold text-lg mb-1">Vos trajets, vos règles</h3>
                    <p className="text-gray-600">Choisissez ce que vous transportez</p>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-primary-green-lighter rounded-full flex items-center justify-center flex-shrink-0">
                    <Users className="w-6 h-6 text-primary-green-dark" />
                  </div>
                  <div>
                    <h3 className="font-bold text-lg mb-1">Communauté de confiance</h3>
                    <p className="text-gray-600">Utilisateurs vérifiés</p>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-primary-green-lighter rounded-full flex items-center justify-center flex-shrink-0">
                    <DollarSign className="w-6 h-6 text-primary-green-dark" />
                  </div>
                  <div>
                    <h3 className="font-bold text-lg mb-1">Revenus garantis</h3>
                    <p className="text-gray-600">80% du montant pour vous</p>
                  </div>
                </div>
              </div>
              <Link
                to="/become-traveler"
                className="inline-flex items-center gap-2 mt-8 text-black font-semibold hover:gap-4 transition-all group"
              >
                Devenir voyageur
                <ArrowRight className="w-5 h-5" />
              </Link>
            </div>

            {/* Right - Image placeholder */}
            <div>
              <div className="bg-gradient-to-br from-gray-900 to-black rounded-3xl h-[400px] flex items-center justify-center shadow-xl">
                <Users className="w-32 h-32 text-white opacity-20" />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-20 bg-black text-white">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
            <div>
              <div className="text-4xl md:text-5xl font-bold text-primary-green mb-2">1000+</div>
              <div className="text-gray-400">Colis livrés</div>
            </div>
            <div>
              <div className="text-4xl md:text-5xl font-bold text-primary-green mb-2">500+</div>
              <div className="text-gray-400">Voyageurs actifs</div>
            </div>
            <div>
              <div className="text-4xl md:text-5xl font-bold text-primary-green mb-2">&lt;24h</div>
              <div className="text-gray-400">Délai moyen</div>
            </div>
            <div>
              <div className="text-4xl md:text-5xl font-bold text-primary-green mb-2">4.8/5</div>
              <div className="text-gray-400">Satisfaction</div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-primary-green">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-4xl md:text-5xl font-bold mb-6 text-black">
            Prêt à commencer ?
          </h2>
          <p className="text-xl mb-10 text-gray-900 max-w-2xl mx-auto">
            Rejoignez des milliers d'utilisateurs qui font confiance à TAGGA pour leurs envois
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              to="/register"
              className="bg-black hover:bg-gray-900 text-white font-semibold px-8 py-4 rounded-lg transition-all inline-flex items-center justify-center gap-2"
            >
              Créer un compte
              <ArrowRight className="w-5 h-5" />
            </Link>
            <Link
              to="/contact"
              className="bg-white hover:bg-gray-100 text-black font-semibold px-8 py-4 rounded-lg transition-all"
            >
              En savoir plus
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
};

export default HomePage;
