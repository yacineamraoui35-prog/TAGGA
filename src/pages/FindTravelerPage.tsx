import { useState } from 'react';
import { Search, Train, Plane, Filter, MapPin } from 'lucide-react';
import TravelerMap from '../components/map/TravelerMap';

const FindTravelerPage = () => {
  const [transport, setTransport] = useState<string>('all');

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <div className="bg-black text-white py-12">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="inline-flex items-center gap-2 bg-primary-green text-black px-4 py-2 rounded-full font-semibold mb-4">
              <MapPin className="w-4 h-4" />
              Carte interactive
            </div>
            <h1 className="text-4xl md:text-5xl font-bold mb-4">
              Trouvez votre voyageur
            </h1>
            <p className="text-xl text-gray-300">
              Visualisez en temps réel les voyageurs disponibles sur votre trajet
            </p>
          </div>
        </div>
      </div>

      {/* Filters & Search */}
      <div className="bg-white shadow-md sticky top-16 z-40">
        <div className="container mx-auto px-4 py-6">
          <div className="max-w-6xl mx-auto">
            <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
              {/* Departure */}
              <div className="relative">
                <Search className="absolute left-3 top-3.5 w-5 h-5 text-gray-400" />
                <input
                  type="text"
                  placeholder="Gare/Aéroport de départ"
                  className="w-full pl-10 pr-4 py-3 border-2 border-gray-200 rounded-lg focus:border-primary-green focus:outline-none"
                />
              </div>

              {/* Arrival */}
              <div className="relative">
                <Search className="absolute left-3 top-3.5 w-5 h-5 text-gray-400" />
                <input
                  type="text"
                  placeholder="Gare/Aéroport d'arrivée"
                  className="w-full pl-10 pr-4 py-3 border-2 border-gray-200 rounded-lg focus:border-primary-green focus:outline-none"
                />
              </div>

              {/* Transport Type */}
              <div className="relative">
                <Filter className="absolute left-3 top-3.5 w-5 h-5 text-gray-400" />
                <select
                  value={transport}
                  onChange={(e) => setTransport(e.target.value)}
                  className="w-full pl-10 pr-4 py-3 border-2 border-gray-200 rounded-lg focus:border-primary-green focus:outline-none appearance-none bg-white"
                >
                  <option value="all">Tous les transports</option>
                  <option value="train">🚄 Train</option>
                  <option value="plane">✈️ Avion</option>
                </select>
              </div>

              {/* Search Button */}
              <button className="bg-primary-green hover:bg-primary-green-dark text-black font-semibold py-3 px-6 rounded-lg transition-colors flex items-center justify-center gap-2">
                <Search className="w-5 h-5" />
                Rechercher
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Map Section */}
      <div className="container mx-auto px-4 py-8">
        <div className="max-w-6xl mx-auto">
          {/* Info bar */}
          <div className="bg-white rounded-lg shadow-sm p-4 mb-6 flex items-center justify-between">
            <div className="flex items-center gap-6">
              <div className="flex items-center gap-2">
                <div className="w-3 h-3 bg-primary-green rounded-full"></div>
                <span className="text-sm font-medium">5 voyageurs disponibles</span>
              </div>
              <div className="flex items-center gap-3 text-sm text-gray-600">
                <span className="flex items-center gap-1">
                  <Train className="w-4 h-4" />3
                </span>
                <span className="flex items-center gap-1">
                  <Plane className="w-4 h-4" />2
                </span>
              </div>
            </div>
            <button className="text-primary-green hover:text-primary-green-dark font-semibold text-sm flex items-center gap-2">
              <Filter className="w-4 h-4" />
              Plus de filtres
            </button>
          </div>

          {/* Map */}
          <TravelerMap />

          {/* Legend */}
          <div className="bg-white rounded-lg shadow-sm p-6 mt-6">
            <h3 className="font-bold text-lg mb-4">Comment ça marche ?</h3>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <div className="flex items-start gap-3">
                <div className="w-8 h-8 bg-primary-green-lighter rounded-full flex items-center justify-center flex-shrink-0">
                  <MapPin className="w-5 h-5 text-primary-green-dark" />
                </div>
                <div>
                  <h4 className="font-semibold mb-1">1. Cliquez sur un marqueur</h4>
                  <p className="text-sm text-gray-600">
                    Visualisez les détails du trajet et du voyageur
                  </p>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <div className="w-8 h-8 bg-primary-green-lighter rounded-full flex items-center justify-center flex-shrink-0">
                  <Train className="w-5 h-5 text-primary-green-dark" />
                </div>
                <div>
                  <h4 className="font-semibold mb-1">2. Vérifiez le trajet</h4>
                  <p className="text-sm text-gray-600">
                    Train ou avion, dates et tarifs
                  </p>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <div className="w-8 h-8 bg-primary-green-lighter rounded-full flex items-center justify-center flex-shrink-0">
                  <Search className="w-5 h-5 text-primary-green-dark" />
                </div>
                <div>
                  <h4 className="font-semibold mb-1">3. Réservez en un clic</h4>
                  <p className="text-sm text-gray-600">
                    Paiement sécurisé et confirmation immédiate
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FindTravelerPage;
