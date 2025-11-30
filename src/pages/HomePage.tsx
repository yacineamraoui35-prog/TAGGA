import { Link } from 'react-router-dom';
import { Mail, ArrowRight, Shield, Zap, Train, Plane, MapPin, Users } from 'lucide-react';
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
            {/* Badge urgence */}
            <div className="inline-flex items-center gap-2 bg-primary-green text-black px-4 py-2 rounded-full font-semibold mb-6">
              <Zap className="w-4 h-4" />
              Service express & urgence
            </div>

            <h1 className="text-5xl md:text-6xl font-bold mb-6 leading-tight">
              Envoi d'enveloppes<br />
              <span className="text-primary-green">en train & avion</span>
            </h1>
            <p className="text-xl text-gray-300 mb-4">
              Service d'urgence pour vos documents importants
            </p>
            <p className="text-lg text-gray-400 mb-12 flex items-center gap-3">
              <Train className="w-5 h-5 text-primary-green" />
              <Plane className="w-5 h-5 text-primary-green" />
              <span>Livraison express moyenne & longue distance</span>
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
                  Envoyer une enveloppe
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
                      placeholder="Gare/Aéroport de départ"
                      className="px-4 py-3 bg-gray-50 text-black rounded-lg focus:outline-none focus:ring-2 focus:ring-primary-green"
                    />
                    <input
                      type="text"
                      placeholder="Gare/Aéroport d'arrivée"
                      className="px-4 py-3 bg-gray-50 text-black rounded-lg focus:outline-none focus:ring-2 focus:ring-primary-green"
                    />
                  </div>
                  <Link
                    to="/find-traveler"
                    className="w-full bg-black hover:bg-gray-900 text-white font-semibold py-4 rounded-lg transition-all flex items-center justify-center gap-2 group"
                  >
                    <MapPin className="w-5 h-5" />
                    Trouver un voyageur sur la carte
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
                  <div className="flex gap-4">
                    <select className="flex-1 px-4 py-3 bg-gray-50 text-black rounded-lg focus:outline-none focus:ring-2 focus:ring-primary-green">
                      <option value="">Mode de transport</option>
                      <option value="train">Train 🚄</option>
                      <option value="plane">Avion ✈️</option>
                      <option value="both">Les deux</option>
                    </select>
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

      {/* Services Section - Style Uber avec image */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            {/* Left - Image placeholder */}
            <div className="order-2 md:order-1">
              <div className="relative bg-gradient-to-br from-primary-green to-primary-green-dark rounded-3xl h-[400px] overflow-hidden shadow-xl">
                {/* Placeholder pour image réelle */}
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="text-center text-white">
                    <Mail className="w-32 h-32 mx-auto mb-4 opacity-20" />
                    <p className="text-sm opacity-50">Image : Enveloppe dans un train/avion</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Right - Content */}
            <div className="order-1 md:order-2">
              <div className="inline-flex items-center gap-2 bg-primary-green-lighter text-primary-green-dark px-4 py-2 rounded-full font-semibold mb-4">
                <Zap className="w-4 h-4" />
                Express & Urgence
              </div>
              <h2 className="text-4xl font-bold mb-6">
                Vos documents importants livrés en urgence
              </h2>
              <p className="text-lg text-gray-600 mb-8">
                Profitez des trajets en train et avion pour une livraison express de vos enveloppes.
                TAGGA connecte expéditeurs et voyageurs pour un service d'urgence fiable.
              </p>
              <div className="space-y-4">
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-primary-green-lighter rounded-full flex items-center justify-center flex-shrink-0">
                    <Train className="w-6 h-6 text-primary-green-dark" />
                  </div>
                  <div>
                    <h3 className="font-bold text-lg mb-1">Train & Avion</h3>
                    <p className="text-gray-600">Moyenne et longue distance</p>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-primary-green-lighter rounded-full flex items-center justify-center flex-shrink-0">
                    <Shield className="w-6 h-6 text-primary-green-dark" />
                  </div>
                  <div>
                    <h3 className="font-bold text-lg mb-1">Sécurisé & Traçable</h3>
                    <p className="text-gray-600">Paiement protégé et suivi en temps réel</p>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-primary-green-lighter rounded-full flex items-center justify-center flex-shrink-0">
                    <Zap className="w-6 h-6 text-primary-green-dark" />
                  </div>
                  <div>
                    <h3 className="font-bold text-lg mb-1">Service d'urgence</h3>
                    <p className="text-gray-600">Pour vos documents prioritaires</p>
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

      {/* Travelers Section - Inversé avec image */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            {/* Left - Content */}
            <div>
              <div className="inline-flex items-center gap-2 bg-gray-100 text-gray-900 px-4 py-2 rounded-full font-semibold mb-4">
                <Users className="w-4 h-4" />
                Voyageurs
              </div>
              <h2 className="text-4xl font-bold mb-6">
                Rentabilisez vos trajets en train & avion
              </h2>
              <p className="text-lg text-gray-600 mb-8">
                Vous prenez le train ou l'avion régulièrement ? Gagnez de l'argent en transportant des enveloppes légères et sécurisées.
              </p>
              <div className="space-y-4">
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-primary-green-lighter rounded-full flex items-center justify-center flex-shrink-0">
                    <MapPin className="w-6 h-6 text-primary-green-dark" />
                  </div>
                  <div>
                    <h3 className="font-bold text-lg mb-1">Carte interactive</h3>
                    <p className="text-gray-600">Trouvez des demandes près de votre trajet</p>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-primary-green-lighter rounded-full flex items-center justify-center flex-shrink-0">
                    <Mail className="w-6 h-6 text-primary-green-dark" />
                  </div>
                  <div>
                    <h3 className="font-bold text-lg mb-1">Enveloppes légères</h3>
                    <p className="text-gray-600">Documents et enveloppes uniquement</p>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-primary-green-lighter rounded-full flex items-center justify-center flex-shrink-0">
                    <Zap className="w-6 h-6 text-primary-green-dark" />
                  </div>
                  <div>
                    <h3 className="font-bold text-lg mb-1">Revenus garantis</h3>
                    <p className="text-gray-600">80% du montant directement pour vous</p>
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
              <div className="relative bg-gradient-to-br from-gray-900 to-black rounded-3xl h-[400px] overflow-hidden shadow-xl">
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="text-center text-white">
                    <div className="flex gap-8 mb-4">
                      <Train className="w-24 h-24 opacity-20" />
                      <Plane className="w-24 h-24 opacity-20" />
                    </div>
                    <p className="text-sm opacity-50">Image : Voyageur dans un train/avion</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Map Section - Nouveau */}
      <section className="py-20 bg-primary-green-lighter">
        <div className="container mx-auto px-4 text-center">
          <div className="max-w-3xl mx-auto">
            <div className="inline-flex items-center gap-2 bg-white px-4 py-2 rounded-full font-semibold mb-6">
              <MapPin className="w-4 h-4 text-primary-green-dark" />
              Carte interactive
            </div>
            <h2 className="text-4xl font-bold mb-6">
              Trouvez des voyageurs près de vous
            </h2>
            <p className="text-xl text-gray-700 mb-8">
              Visualisez en temps réel les voyageurs disponibles sur votre trajet
            </p>
            <Link
              to="/find-traveler"
              className="inline-flex items-center gap-2 bg-black hover:bg-gray-900 text-white font-semibold px-8 py-4 rounded-lg transition-all"
            >
              <MapPin className="w-5 h-5" />
              Ouvrir la carte
              <ArrowRight className="w-5 h-5" />
            </Link>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-20 bg-black text-white">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
            <div>
              <div className="text-4xl md:text-5xl font-bold text-primary-green mb-2">2500+</div>
              <div className="text-gray-400">Enveloppes livrées</div>
            </div>
            <div>
              <div className="text-4xl md:text-5xl font-bold text-primary-green mb-2">800+</div>
              <div className="text-gray-400">Voyageurs actifs</div>
            </div>
            <div>
              <div className="text-4xl md:text-5xl font-bold text-primary-green mb-2">&lt;12h</div>
              <div className="text-gray-400">Délai moyen</div>
            </div>
            <div>
              <div className="text-4xl md:text-5xl font-bold text-primary-green mb-2">4.9/5</div>
              <div className="text-gray-400">Satisfaction</div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-primary-green">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-4xl md:text-5xl font-bold mb-6 text-black">
            Service express d'urgence
          </h2>
          <p className="text-xl mb-10 text-gray-900 max-w-2xl mx-auto">
            Rejoignez la communauté TAGGA pour vos envois urgents de documents
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
