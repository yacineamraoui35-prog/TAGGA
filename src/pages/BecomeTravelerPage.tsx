import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Train, Plane, Calendar, Euro, Users, ArrowRight } from 'lucide-react';

const BecomeTravelerPage = () => {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    departureCity: '',
    departureStation: '',
    arrivalCity: '',
    arrivalStation: '',
    date: '',
    transport: 'train',
    maxEnvelopes: 1,
  });

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    setFormData(prev => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Redirect to dashboard
    navigate('/traveler/dashboard');
  };

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <div className="bg-black text-white py-12">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto">
            <div className="inline-flex items-center gap-2 bg-primary-green text-black px-4 py-2 rounded-full font-semibold mb-4">
              <Users className="w-4 h-4" />
              Voyageurs
            </div>
            <h1 className="text-4xl md:text-5xl font-bold mb-4">
              Devenez voyageur TAGGA
            </h1>
            <p className="text-xl text-gray-300">
              Rentabilisez vos trajets en train & avion
            </p>
          </div>
        </div>
      </div>

      {/* Benefits */}
      <div className="bg-white border-b">
        <div className="container mx-auto px-4 py-8">
          <div className="max-w-5xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="flex items-center gap-3">
              <div className="w-12 h-12 bg-primary-green-lighter rounded-full flex items-center justify-center flex-shrink-0">
                <Euro className="w-6 h-6 text-primary-green-dark" />
              </div>
              <div>
                <p className="font-bold">Revenus garantis</p>
                <p className="text-sm text-gray-600">80% du montant pour vous</p>
              </div>
            </div>
            <div className="flex items-center gap-3">
              <div className="w-12 h-12 bg-primary-green-lighter rounded-full flex items-center justify-center flex-shrink-0">
                <Train className="w-6 h-6 text-primary-green-dark" />
              </div>
              <div>
                <p className="font-bold">Trajets habituels</p>
                <p className="text-sm text-gray-600">Pas de détour nécessaire</p>
              </div>
            </div>
            <div className="flex items-center gap-3">
              <div className="w-12 h-12 bg-primary-green-lighter rounded-full flex items-center justify-center flex-shrink-0">
                <Users className="w-6 h-6 text-primary-green-dark" />
              </div>
              <div>
                <p className="font-bold">Communauté vérifiée</p>
                <p className="text-sm text-gray-600">Utilisateurs de confiance</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Form */}
      <div className="container mx-auto px-4 py-12">
        <div className="max-w-3xl mx-auto">
          <form onSubmit={handleSubmit} className="bg-white rounded-xl shadow-lg p-8">
            <h2 className="text-2xl font-bold mb-6">Publier mon trajet</h2>

            {/* Transport Type */}
            <div className="mb-6">
              <label className="block text-sm font-semibold mb-3">
                Mode de transport *
              </label>
              <div className="grid grid-cols-2 gap-4">
                <label className={`flex items-center gap-3 p-4 border-2 rounded-lg cursor-pointer transition-all ${
                  formData.transport === 'train'
                    ? 'border-primary-green bg-primary-green-lighter'
                    : 'border-gray-200 hover:border-gray-300'
                }`}>
                  <input
                    type="radio"
                    name="transport"
                    value="train"
                    checked={formData.transport === 'train'}
                    onChange={handleInputChange}
                    className="hidden"
                  />
                  <Train className="w-6 h-6 text-primary-green-dark" />
                  <span className="font-medium">Train 🚄</span>
                </label>
                <label className={`flex items-center gap-3 p-4 border-2 rounded-lg cursor-pointer transition-all ${
                  formData.transport === 'plane'
                    ? 'border-primary-green bg-primary-green-lighter'
                    : 'border-gray-200 hover:border-gray-300'
                }`}>
                  <input
                    type="radio"
                    name="transport"
                    value="plane"
                    checked={formData.transport === 'plane'}
                    onChange={handleInputChange}
                    className="hidden"
                  />
                  <Plane className="w-6 h-6 text-primary-green-dark" />
                  <span className="font-medium">Avion ✈️</span>
                </label>
              </div>
            </div>

            {/* Departure */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
              <div>
                <label className="block text-sm font-semibold mb-2">
                  Ville de départ *
                </label>
                <input
                  type="text"
                  name="departureCity"
                  value={formData.departureCity}
                  onChange={handleInputChange}
                  placeholder="ex: Paris"
                  className="input-field"
                  required
                />
              </div>
              <div>
                <label className="block text-sm font-semibold mb-2">
                  {formData.transport === 'train' ? 'Gare de départ' : 'Aéroport de départ'} *
                </label>
                <input
                  type="text"
                  name="departureStation"
                  value={formData.departureStation}
                  onChange={handleInputChange}
                  placeholder={formData.transport === 'train' ? 'ex: Gare de Lyon' : 'ex: CDG'}
                  className="input-field"
                  required
                />
              </div>
            </div>

            {/* Arrival */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
              <div>
                <label className="block text-sm font-semibold mb-2">
                  Ville d'arrivée *
                </label>
                <input
                  type="text"
                  name="arrivalCity"
                  value={formData.arrivalCity}
                  onChange={handleInputChange}
                  placeholder="ex: Lyon"
                  className="input-field"
                  required
                />
              </div>
              <div>
                <label className="block text-sm font-semibold mb-2">
                  {formData.transport === 'train' ? 'Gare d\'arrivée' : 'Aéroport d\'arrivée'} *
                </label>
                <input
                  type="text"
                  name="arrivalStation"
                  value={formData.arrivalStation}
                  onChange={handleInputChange}
                  placeholder={formData.transport === 'train' ? 'ex: Part-Dieu' : 'ex: Saint-Exupéry'}
                  className="input-field"
                  required
                />
              </div>
            </div>

            {/* Date & Capacity */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
              <div>
                <label className="block text-sm font-semibold mb-2">
                  Date du voyage *
                </label>
                <div className="relative">
                  <Calendar className="absolute left-3 top-3.5 w-5 h-5 text-gray-400" />
                  <input
                    type="date"
                    name="date"
                    value={formData.date}
                    onChange={handleInputChange}
                    className="input-field pl-10"
                    min={new Date().toISOString().split('T')[0]}
                    required
                  />
                </div>
              </div>
              <div>
                <label className="block text-sm font-semibold mb-2">
                  Nombre d'enveloppes max
                </label>
                <select
                  name="maxEnvelopes"
                  value={formData.maxEnvelopes}
                  onChange={handleInputChange}
                  className="input-field"
                >
                  {[1, 2, 3, 4, 5].map(num => (
                    <option key={num} value={num}>{num}</option>
                  ))}
                </select>
              </div>
            </div>

            {/* Info box */}
            <div className="bg-primary-green-lighter border border-primary-green rounded-lg p-4 mb-6">
              <h3 className="font-semibold text-primary-green-dark mb-2">Comment ça marche ?</h3>
              <ul className="text-sm space-y-1 text-gray-700">
                <li>✓ Vous recevrez des demandes d'expéditeurs</li>
                <li>✓ Vous choisissez les enveloppes à transporter</li>
                <li>✓ Paiement sécurisé après livraison</li>
                <li>✓ 80% du montant directement pour vous</li>
              </ul>
            </div>

            {/* Submit */}
            <button type="submit" className="btn-primary w-full flex items-center justify-center gap-2">
              Publier mon trajet
              <ArrowRight className="w-5 h-5" />
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default BecomeTravelerPage;
