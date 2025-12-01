import { Link } from 'react-router-dom';
import { Mail, Package, Clock, CheckCircle, MapPin, Train, Plane, ArrowRight, AlertCircle } from 'lucide-react';
import { useAuthStore } from '../../store/authStore';

const SenderDashboard = () => {
  const user = useAuthStore(state => state.user);

  // Mock data pour les envois
  const stats = {
    total: 12,
    inTransit: 2,
    delivered: 10,
    pending: 0,
  };

  const activeDeliveries = [
    {
      id: '1',
      from: 'Paris Gare de Lyon',
      to: 'Lyon Part-Dieu',
      travelerName: 'Sophie M.',
      transport: 'train',
      status: 'in_transit',
      estimatedDelivery: '2025-12-01T18:30:00',
      trackingCode: 'TGG-001234',
      price: 35,
    },
    {
      id: '2',
      from: 'Paris CDG',
      to: 'Marseille Provence',
      travelerName: 'Marc D.',
      transport: 'plane',
      status: 'pickup_scheduled',
      estimatedDelivery: '2025-12-02T10:00:00',
      trackingCode: 'TGG-001235',
      price: 45,
    },
  ];

  const recentDeliveries = [
    {
      id: '3',
      from: 'Lyon Part-Dieu',
      to: 'Nice Ville',
      travelerName: 'Julie L.',
      transport: 'train',
      status: 'delivered',
      deliveredAt: '2025-11-28T14:20:00',
      price: 40,
    },
    {
      id: '4',
      from: 'Marseille St-Charles',
      to: 'Paris Gare de Lyon',
      travelerName: 'Thomas R.',
      transport: 'train',
      status: 'delivered',
      deliveredAt: '2025-11-25T16:45:00',
      price: 38,
    },
  ];

  const getStatusBadge = (status: string) => {
    switch (status) {
      case 'in_transit':
        return (
          <span className="inline-flex items-center gap-1 bg-blue-100 text-blue-700 px-3 py-1 rounded-full text-sm font-medium">
            <Clock className="w-4 h-4" />
            En transit
          </span>
        );
      case 'pickup_scheduled':
        return (
          <span className="inline-flex items-center gap-1 bg-yellow-100 text-yellow-700 px-3 py-1 rounded-full text-sm font-medium">
            <AlertCircle className="w-4 h-4" />
            Récupération prévue
          </span>
        );
      case 'delivered':
        return (
          <span className="inline-flex items-center gap-1 bg-green-100 text-green-700 px-3 py-1 rounded-full text-sm font-medium">
            <CheckCircle className="w-4 h-4" />
            Livré
          </span>
        );
      default:
        return null;
    }
  };

  const formatDate = (dateString: string) => {
    const date = new Date(dateString);
    return new Intl.DateTimeFormat('fr-FR', {
      day: 'numeric',
      month: 'short',
      hour: '2-digit',
      minute: '2-digit',
    }).format(date);
  };

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <div className="bg-black text-white py-8">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <h1 className="text-3xl font-bold mb-2">
              Bonjour, {user?.firstName} 👋
            </h1>
            <p className="text-gray-300">
              Gérez vos envois d'enveloppes en un coup d'œil
            </p>
          </div>
        </div>
      </div>

      {/* Content */}
      <div className="container mx-auto px-4 py-8">
        <div className="max-w-6xl mx-auto space-y-8">
          {/* Stats Cards */}
          <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
            <div className="bg-white rounded-xl shadow-md p-6">
              <div className="flex items-center justify-between mb-2">
                <Mail className="w-8 h-8 text-primary-green" />
                <span className="text-3xl font-bold">{stats.total}</span>
              </div>
              <p className="text-gray-600 font-medium">Total envois</p>
            </div>

            <div className="bg-white rounded-xl shadow-md p-6">
              <div className="flex items-center justify-between mb-2">
                <Clock className="w-8 h-8 text-blue-500" />
                <span className="text-3xl font-bold">{stats.inTransit}</span>
              </div>
              <p className="text-gray-600 font-medium">En transit</p>
            </div>

            <div className="bg-white rounded-xl shadow-md p-6">
              <div className="flex items-center justify-between mb-2">
                <CheckCircle className="w-8 h-8 text-green-500" />
                <span className="text-3xl font-bold">{stats.delivered}</span>
              </div>
              <p className="text-gray-600 font-medium">Livrés</p>
            </div>

            <div className="bg-primary-green rounded-xl shadow-md p-6 text-black">
              <Link
                to="/send-parcel"
                className="h-full flex flex-col items-center justify-center text-center hover:scale-105 transition-transform"
              >
                <Package className="w-8 h-8 mb-2" />
                <p className="font-bold">Nouvel envoi</p>
                <ArrowRight className="w-5 h-5 mt-1" />
              </Link>
            </div>
          </div>

          {/* Active Deliveries */}
          <div className="bg-white rounded-xl shadow-md p-6">
            <div className="flex items-center justify-between mb-6">
              <h2 className="text-2xl font-bold">Envois en cours</h2>
              <span className="text-sm text-gray-500">
                {activeDeliveries.length} {activeDeliveries.length > 1 ? 'envois actifs' : 'envoi actif'}
              </span>
            </div>

            {activeDeliveries.length === 0 ? (
              <div className="text-center py-12">
                <Package className="w-16 h-16 text-gray-300 mx-auto mb-4" />
                <p className="text-gray-500 mb-4">Aucun envoi en cours</p>
                <Link
                  to="/send-parcel"
                  className="inline-flex items-center gap-2 bg-primary-green hover:bg-primary-green-dark text-black font-semibold px-6 py-3 rounded-lg transition-colors"
                >
                  Envoyer une enveloppe
                  <ArrowRight className="w-5 h-5" />
                </Link>
              </div>
            ) : (
              <div className="space-y-4">
                {activeDeliveries.map((delivery) => (
                  <div
                    key={delivery.id}
                    className="border-2 border-gray-200 rounded-lg p-6 hover:border-primary-green transition-colors"
                  >
                    <div className="flex items-start justify-between mb-4">
                      <div className="flex items-center gap-3">
                        {delivery.transport === 'train' ? (
                          <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center">
                            <Train className="w-6 h-6 text-blue-600" />
                          </div>
                        ) : (
                          <div className="w-12 h-12 bg-sky-100 rounded-full flex items-center justify-center">
                            <Plane className="w-6 h-6 text-sky-600" />
                          </div>
                        )}
                        <div>
                          <p className="font-bold text-lg">
                            {delivery.from} → {delivery.to}
                          </p>
                          <p className="text-sm text-gray-600">
                            Code de suivi: <span className="font-mono font-semibold">{delivery.trackingCode}</span>
                          </p>
                        </div>
                      </div>
                      {getStatusBadge(delivery.status)}
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-3 gap-4 text-sm">
                      <div>
                        <p className="text-gray-500 mb-1">Voyageur</p>
                        <p className="font-semibold">{delivery.travelerName}</p>
                      </div>
                      <div>
                        <p className="text-gray-500 mb-1">Livraison estimée</p>
                        <p className="font-semibold">{formatDate(delivery.estimatedDelivery)}</p>
                      </div>
                      <div>
                        <p className="text-gray-500 mb-1">Prix</p>
                        <p className="font-semibold text-primary-green">{delivery.price}€</p>
                      </div>
                    </div>

                    <div className="mt-4 flex gap-3">
                      <button className="flex-1 bg-gray-100 hover:bg-gray-200 text-black font-semibold py-2 px-4 rounded-lg transition-colors flex items-center justify-center gap-2">
                        <MapPin className="w-4 h-4" />
                        Suivre
                      </button>
                      <button className="flex-1 border-2 border-gray-200 hover:border-primary-green text-black font-semibold py-2 px-4 rounded-lg transition-colors">
                        Contacter le voyageur
                      </button>
                    </div>
                  </div>
                ))}
              </div>
            )}
          </div>

          {/* Recent Deliveries */}
          <div className="bg-white rounded-xl shadow-md p-6">
            <h2 className="text-2xl font-bold mb-6">Livraisons récentes</h2>

            {recentDeliveries.length === 0 ? (
              <p className="text-gray-500 text-center py-8">Aucune livraison récente</p>
            ) : (
              <div className="space-y-3">
                {recentDeliveries.map((delivery) => (
                  <div
                    key={delivery.id}
                    className="border border-gray-200 rounded-lg p-4 hover:bg-gray-50 transition-colors"
                  >
                    <div className="flex items-center justify-between">
                      <div className="flex items-center gap-3 flex-1">
                        {delivery.transport === 'train' ? (
                          <Train className="w-5 h-5 text-gray-400" />
                        ) : (
                          <Plane className="w-5 h-5 text-gray-400" />
                        )}
                        <div className="flex-1">
                          <p className="font-semibold">
                            {delivery.from} → {delivery.to}
                          </p>
                          <p className="text-sm text-gray-500">
                            Livré le {formatDate(delivery.deliveredAt)} • {delivery.travelerName}
                          </p>
                        </div>
                      </div>
                      <div className="flex items-center gap-4">
                        <span className="font-semibold text-gray-700">{delivery.price}€</span>
                        {getStatusBadge(delivery.status)}
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            )}
          </div>

          {/* Quick Actions */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <Link
              to="/find-traveler"
              className="bg-primary-green hover:bg-primary-green-dark rounded-xl shadow-md p-6 transition-colors group"
            >
              <div className="flex items-center justify-between">
                <div>
                  <h3 className="text-xl font-bold text-black mb-2">
                    Carte des voyageurs
                  </h3>
                  <p className="text-gray-800">
                    Trouvez un voyageur près de vous
                  </p>
                </div>
                <MapPin className="w-12 h-12 text-black group-hover:scale-110 transition-transform" />
              </div>
            </Link>

            <Link
              to="/contact"
              className="bg-gray-900 hover:bg-black rounded-xl shadow-md p-6 transition-colors group text-white"
            >
              <div className="flex items-center justify-between">
                <div>
                  <h3 className="text-xl font-bold mb-2">
                    Besoin d'aide ?
                  </h3>
                  <p className="text-gray-300">
                    Contactez notre support
                  </p>
                </div>
                <Mail className="w-12 h-12 group-hover:scale-110 transition-transform" />
              </div>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SenderDashboard;
