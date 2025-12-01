import { Link } from 'react-router-dom';
import { Mail, Plane, Train, Euro, Calendar, MapPin, ArrowRight, CheckCircle, Clock } from 'lucide-react';
import { useAuthStore } from '../../store/authStore';

const TravelerDashboard = () => {
  const user = useAuthStore(state => state.user);

  // Mock data pour les trajets
  const stats = {
    totalJourneys: 8,
    activeJourneys: 2,
    totalEarnings: 320,
    pendingRequests: 3,
  };

  const activeJourneys = [
    {
      id: '1',
      from: 'Paris Gare de Lyon',
      to: 'Lyon Part-Dieu',
      transport: 'train',
      date: '2025-12-02',
      time: '14:30',
      maxEnvelopes: 3,
      requests: 2,
      status: 'active',
    },
    {
      id: '2',
      from: 'Lyon Part-Dieu',
      to: 'Marseille St-Charles',
      transport: 'train',
      date: '2025-12-05',
      time: '09:15',
      maxEnvelopes: 2,
      requests: 1,
      status: 'active',
    },
  ];

  const pendingRequests = [
    {
      id: '1',
      journeyId: '1',
      from: 'Paris Gare de Lyon',
      to: 'Lyon Part-Dieu',
      senderName: 'Marie L.',
      proposedPrice: 35,
      urgent: false,
      description: 'Documents administratifs',
    },
    {
      id: '2',
      journeyId: '1',
      from: 'Paris Gare de Lyon',
      to: 'Lyon Part-Dieu',
      senderName: 'Pierre D.',
      proposedPrice: 40,
      urgent: true,
      description: 'Contrat signé',
    },
    {
      id: '3',
      journeyId: '2',
      from: 'Lyon Part-Dieu',
      to: 'Marseille St-Charles',
      senderName: 'Sophie M.',
      proposedPrice: 38,
      urgent: false,
      description: 'Courrier important',
    },
  ];

  const earningsHistory = [
    {
      id: '1',
      date: '2025-11-28',
      from: 'Paris CDG',
      to: 'Nice Côte d\'Azur',
      amount: 42,
      status: 'paid',
    },
    {
      id: '2',
      date: '2025-11-25',
      from: 'Lyon Part-Dieu',
      to: 'Paris Gare de Lyon',
      amount: 35,
      status: 'paid',
    },
    {
      id: '3',
      date: '2025-11-20',
      from: 'Marseille St-Charles',
      to: 'Nice Ville',
      amount: 30,
      status: 'paid',
    },
  ];

  const formatDate = (dateString: string) => {
    const date = new Date(dateString);
    return new Intl.DateTimeFormat('fr-FR', {
      day: 'numeric',
      month: 'long',
    }).format(date);
  };

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <div className="bg-black text-white py-8">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <h1 className="text-3xl font-bold mb-2">
              Bonjour, {user?.firstName} ✈️
            </h1>
            <p className="text-gray-300">
              Gérez vos trajets et maximisez vos gains
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
                <MapPin className="w-8 h-8 text-primary-green" />
                <span className="text-3xl font-bold">{stats.totalJourneys}</span>
              </div>
              <p className="text-gray-600 font-medium">Trajets publiés</p>
            </div>

            <div className="bg-white rounded-xl shadow-md p-6">
              <div className="flex items-center justify-between mb-2">
                <Calendar className="w-8 h-8 text-blue-500" />
                <span className="text-3xl font-bold">{stats.activeJourneys}</span>
              </div>
              <p className="text-gray-600 font-medium">Trajets actifs</p>
            </div>

            <div className="bg-white rounded-xl shadow-md p-6">
              <div className="flex items-center justify-between mb-2">
                <Mail className="w-8 h-8 text-orange-500" />
                <span className="text-3xl font-bold">{stats.pendingRequests}</span>
              </div>
              <p className="text-gray-600 font-medium">Demandes reçues</p>
            </div>

            <div className="bg-primary-green rounded-xl shadow-md p-6">
              <div className="flex items-center justify-between mb-2">
                <Euro className="w-8 h-8 text-black" />
                <span className="text-3xl font-bold text-black">{stats.totalEarnings}€</span>
              </div>
              <p className="text-gray-900 font-medium">Gains totaux</p>
            </div>
          </div>

          {/* Pending Requests */}
          {pendingRequests.length > 0 && (
            <div className="bg-white rounded-xl shadow-md p-6">
              <div className="flex items-center justify-between mb-6">
                <h2 className="text-2xl font-bold">Demandes en attente</h2>
                <span className="bg-orange-100 text-orange-700 px-3 py-1 rounded-full text-sm font-semibold">
                  {pendingRequests.length} {pendingRequests.length > 1 ? 'nouvelles' : 'nouvelle'}
                </span>
              </div>

              <div className="space-y-4">
                {pendingRequests.map((request) => (
                  <div
                    key={request.id}
                    className="border-2 border-gray-200 rounded-lg p-5 hover:border-primary-green transition-colors"
                  >
                    <div className="flex items-start justify-between mb-4">
                      <div>
                        <div className="flex items-center gap-2 mb-2">
                          <p className="font-bold text-lg">{request.senderName}</p>
                          {request.urgent && (
                            <span className="bg-orange-100 text-orange-700 px-2 py-1 rounded text-xs font-semibold">
                              URGENT +5€
                            </span>
                          )}
                        </div>
                        <p className="text-gray-600 flex items-center gap-2">
                          <MapPin className="w-4 h-4" />
                          {request.from} → {request.to}
                        </p>
                        <p className="text-sm text-gray-500 mt-1">{request.description}</p>
                      </div>
                      <div className="text-right">
                        <p className="text-2xl font-bold text-primary-green">
                          {request.proposedPrice}€
                        </p>
                        <p className="text-xs text-gray-500">
                          Vous recevez {(request.proposedPrice * 0.8).toFixed(2)}€
                        </p>
                      </div>
                    </div>

                    <div className="flex gap-3">
                      <button className="flex-1 bg-primary-green hover:bg-primary-green-dark text-black font-semibold py-2 px-4 rounded-lg transition-colors flex items-center justify-center gap-2">
                        <CheckCircle className="w-4 h-4" />
                        Accepter
                      </button>
                      <button className="flex-1 border-2 border-gray-200 hover:border-gray-300 text-black font-semibold py-2 px-4 rounded-lg transition-colors">
                        Refuser
                      </button>
                      <button className="border-2 border-gray-200 hover:border-primary-green text-black font-semibold py-2 px-4 rounded-lg transition-colors">
                        Contacter
                      </button>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* Active Journeys */}
          <div className="bg-white rounded-xl shadow-md p-6">
            <div className="flex items-center justify-between mb-6">
              <h2 className="text-2xl font-bold">Mes trajets actifs</h2>
              <Link
                to="/become-traveler"
                className="bg-primary-green hover:bg-primary-green-dark text-black font-semibold px-4 py-2 rounded-lg transition-colors text-sm flex items-center gap-2"
              >
                Publier un trajet
                <ArrowRight className="w-4 h-4" />
              </Link>
            </div>

            {activeJourneys.length === 0 ? (
              <div className="text-center py-12">
                <Calendar className="w-16 h-16 text-gray-300 mx-auto mb-4" />
                <p className="text-gray-500 mb-4">Aucun trajet actif</p>
                <Link
                  to="/become-traveler"
                  className="inline-flex items-center gap-2 bg-primary-green hover:bg-primary-green-dark text-black font-semibold px-6 py-3 rounded-lg transition-colors"
                >
                  Publier mon prochain trajet
                  <ArrowRight className="w-5 h-5" />
                </Link>
              </div>
            ) : (
              <div className="space-y-4">
                {activeJourneys.map((journey) => (
                  <div
                    key={journey.id}
                    className="border-2 border-gray-200 rounded-lg p-5 hover:border-primary-green transition-colors"
                  >
                    <div className="flex items-start justify-between mb-4">
                      <div className="flex items-center gap-3">
                        {journey.transport === 'train' ? (
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
                            {journey.from} → {journey.to}
                          </p>
                          <p className="text-sm text-gray-600">
                            {formatDate(journey.date)} à {journey.time}
                          </p>
                        </div>
                      </div>
                      {journey.requests > 0 && (
                        <span className="bg-orange-100 text-orange-700 px-3 py-1 rounded-full text-sm font-semibold flex items-center gap-1">
                          <Mail className="w-4 h-4" />
                          {journey.requests} {journey.requests > 1 ? 'demandes' : 'demande'}
                        </span>
                      )}
                    </div>

                    <div className="flex items-center justify-between text-sm">
                      <div className="flex items-center gap-6">
                        <div>
                          <p className="text-gray-500">Capacité</p>
                          <p className="font-semibold">{journey.maxEnvelopes} enveloppes max</p>
                        </div>
                        <div>
                          <p className="text-gray-500">Statut</p>
                          <p className="font-semibold text-green-600">Actif</p>
                        </div>
                      </div>
                      <button className="bg-gray-100 hover:bg-gray-200 text-black font-semibold py-2 px-4 rounded-lg transition-colors">
                        Voir les détails
                      </button>
                    </div>
                  </div>
                ))}
              </div>
            )}
          </div>

          {/* Earnings History */}
          <div className="bg-white rounded-xl shadow-md p-6">
            <h2 className="text-2xl font-bold mb-6">Historique des gains</h2>

            {earningsHistory.length === 0 ? (
              <p className="text-gray-500 text-center py-8">Aucun gain pour le moment</p>
            ) : (
              <div className="space-y-3">
                {earningsHistory.map((earning) => (
                  <div
                    key={earning.id}
                    className="border border-gray-200 rounded-lg p-4 hover:bg-gray-50 transition-colors"
                  >
                    <div className="flex items-center justify-between">
                      <div className="flex-1">
                        <p className="font-semibold">
                          {earning.from} → {earning.to}
                        </p>
                        <p className="text-sm text-gray-500">
                          {formatDate(earning.date)}
                        </p>
                      </div>
                      <div className="flex items-center gap-4">
                        <div className="text-right">
                          <p className="text-xl font-bold text-primary-green">+{earning.amount}€</p>
                          <p className="text-xs text-gray-500">80% du montant</p>
                        </div>
                        <span className="inline-flex items-center gap-1 bg-green-100 text-green-700 px-3 py-1 rounded-full text-sm font-medium">
                          <CheckCircle className="w-4 h-4" />
                          Payé
                        </span>
                      </div>
                    </div>
                  </div>
                ))}

                <div className="border-t-2 pt-4 mt-4">
                  <div className="flex items-center justify-between">
                    <p className="font-bold text-lg">Total des gains</p>
                    <p className="text-3xl font-bold text-primary-green">{stats.totalEarnings}€</p>
                  </div>
                  <p className="text-sm text-gray-500 mt-1">
                    Commission TAGGA déduite (20%)
                  </p>
                </div>
              </div>
            )}
          </div>

          {/* Quick Actions */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="bg-primary-green-lighter border-2 border-primary-green rounded-xl p-6">
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 bg-primary-green rounded-full flex items-center justify-center flex-shrink-0">
                  <Clock className="w-6 h-6 text-black" />
                </div>
                <div>
                  <h3 className="font-bold text-lg mb-2">
                    Gagnez jusqu'à 50€ par trajet
                  </h3>
                  <p className="text-gray-700 mb-3">
                    Publiez vos trajets en train ou avion et transportez jusqu'à 5 enveloppes
                  </p>
                  <Link
                    to="/become-traveler"
                    className="text-primary-green-dark font-semibold hover:underline"
                  >
                    Publier un trajet →
                  </Link>
                </div>
              </div>
            </div>

            <Link
              to="/contact"
              className="bg-gray-900 hover:bg-black rounded-xl shadow-md p-6 transition-colors group text-white"
            >
              <div className="flex items-center justify-between">
                <div>
                  <h3 className="text-xl font-bold mb-2">
                    Une question ?
                  </h3>
                  <p className="text-gray-300">
                    Contactez notre support voyageurs
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

export default TravelerDashboard;
