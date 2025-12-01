import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Mail, MapPin, Calendar, Package, AlertCircle, ArrowRight } from 'lucide-react';

const SendParcelPage = () => {
  const navigate = useNavigate();
  const [step, setStep] = useState(1);
  const [formData, setFormData] = useState({
    // Step 1: Trajet
    departureCity: '',
    departureStation: '',
    arrivalCity: '',
    arrivalStation: '',
    desiredDate: '',

    // Step 2: Enveloppe
    envelopeType: 'letter',
    description: '',
    urgent: false,

    // Step 3: Prix
    proposedPrice: 30,
  });

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
    const { name, value, type } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: type === 'checkbox' ? (e.target as HTMLInputElement).checked : value
    }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (step < 3) {
      setStep(step + 1);
    } else {
      // Redirect to map to find travelers
      navigate('/find-traveler');
    }
  };

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <div className="bg-black text-white py-12">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto">
            <div className="inline-flex items-center gap-2 bg-primary-green text-black px-4 py-2 rounded-full font-semibold mb-4">
              <Mail className="w-4 h-4" />
              Envoi express
            </div>
            <h1 className="text-4xl md:text-5xl font-bold mb-4">
              Envoyez votre enveloppe
            </h1>
            <p className="text-xl text-gray-300">
              Service d'urgence en train & avion
            </p>
          </div>
        </div>
      </div>

      {/* Progress Steps */}
      <div className="bg-white border-b sticky top-16 z-40">
        <div className="container mx-auto px-4 py-6">
          <div className="max-w-3xl mx-auto">
            <div className="flex items-center justify-between">
              {[
                { num: 1, label: 'Trajet' },
                { num: 2, label: 'Enveloppe' },
                { num: 3, label: 'Prix' }
              ].map((s, index) => (
                <div key={s.num} className="flex items-center flex-1">
                  <div className="flex items-center">
                    <div className={`w-10 h-10 rounded-full flex items-center justify-center font-bold ${
                      step >= s.num
                        ? 'bg-primary-green text-black'
                        : 'bg-gray-200 text-gray-500'
                    }`}>
                      {s.num}
                    </div>
                    <span className={`ml-3 font-semibold ${
                      step >= s.num ? 'text-black' : 'text-gray-400'
                    }`}>
                      {s.label}
                    </span>
                  </div>
                  {index < 2 && (
                    <div className={`flex-1 h-1 mx-4 ${
                      step > s.num ? 'bg-primary-green' : 'bg-gray-200'
                    }`}></div>
                  )}
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Form */}
      <div className="container mx-auto px-4 py-12">
        <div className="max-w-3xl mx-auto">
          <form onSubmit={handleSubmit} className="bg-white rounded-xl shadow-lg p-8">
            {/* Step 1: Trajet */}
            {step === 1 && (
              <div className="space-y-6">
                <h2 className="text-2xl font-bold mb-6 flex items-center gap-2">
                  <MapPin className="w-6 h-6 text-primary-green" />
                  Votre trajet
                </h2>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
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
                      Gare/Aéroport de départ *
                    </label>
                    <input
                      type="text"
                      name="departureStation"
                      value={formData.departureStation}
                      onChange={handleInputChange}
                      placeholder="ex: Gare de Lyon / CDG"
                      className="input-field"
                      required
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
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
                      Gare/Aéroport d'arrivée *
                    </label>
                    <input
                      type="text"
                      name="arrivalStation"
                      value={formData.arrivalStation}
                      onChange={handleInputChange}
                      placeholder="ex: Part-Dieu / Saint-Exupéry"
                      className="input-field"
                      required
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-sm font-semibold mb-2">
                    Date souhaitée *
                  </label>
                  <div className="relative">
                    <Calendar className="absolute left-3 top-3.5 w-5 h-5 text-gray-400" />
                    <input
                      type="date"
                      name="desiredDate"
                      value={formData.desiredDate}
                      onChange={handleInputChange}
                      className="input-field pl-10"
                      min={new Date().toISOString().split('T')[0]}
                      required
                    />
                  </div>
                </div>

                <div className="bg-primary-green-lighter border border-primary-green rounded-lg p-4">
                  <div className="flex items-start gap-3">
                    <AlertCircle className="w-5 h-5 text-primary-green-dark flex-shrink-0 mt-0.5" />
                    <div className="text-sm">
                      <p className="font-semibold text-primary-green-dark mb-1">
                        Service express train & avion
                      </p>
                      <p className="text-gray-700">
                        Les voyageurs utilisant le train ou l'avion pourront voir votre demande.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            )}

            {/* Step 2: Enveloppe */}
            {step === 2 && (
              <div className="space-y-6">
                <h2 className="text-2xl font-bold mb-6 flex items-center gap-2">
                  <Package className="w-6 h-6 text-primary-green" />
                  Détails de l'enveloppe
                </h2>

                <div>
                  <label className="block text-sm font-semibold mb-2">
                    Type d'enveloppe *
                  </label>
                  <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                    {[
                      { value: 'letter', label: 'Lettre simple', icon: '📨' },
                      { value: 'document', label: 'Documents', icon: '📄' },
                      { value: 'package', label: 'Petite enveloppe', icon: '📦' }
                    ].map((type) => (
                      <label
                        key={type.value}
                        className={`flex items-center gap-3 p-4 border-2 rounded-lg cursor-pointer transition-all ${
                          formData.envelopeType === type.value
                            ? 'border-primary-green bg-primary-green-lighter'
                            : 'border-gray-200 hover:border-gray-300'
                        }`}
                      >
                        <input
                          type="radio"
                          name="envelopeType"
                          value={type.value}
                          checked={formData.envelopeType === type.value}
                          onChange={handleInputChange}
                          className="hidden"
                        />
                        <span className="text-2xl">{type.icon}</span>
                        <span className="font-medium">{type.label}</span>
                      </label>
                    ))}
                  </div>
                </div>

                <div>
                  <label className="block text-sm font-semibold mb-2">
                    Description du contenu *
                  </label>
                  <textarea
                    name="description"
                    value={formData.description}
                    onChange={handleInputChange}
                    placeholder="Décrivez brièvement le contenu (sans révéler d'informations sensibles)"
                    className="input-field min-h-[100px]"
                    required
                  />
                  <p className="text-sm text-gray-500 mt-2">
                    Exemple : "Documents administratifs", "Contrat signé", etc.
                  </p>
                </div>

                <div className="bg-gray-50 border border-gray-200 rounded-lg p-4">
                  <label className="flex items-center gap-3 cursor-pointer">
                    <input
                      type="checkbox"
                      name="urgent"
                      checked={formData.urgent}
                      onChange={handleInputChange}
                      className="w-5 h-5 text-primary-green focus:ring-primary-green rounded"
                    />
                    <div className="flex-1">
                      <div className="flex items-center gap-2">
                        <AlertCircle className="w-5 h-5 text-orange-500" />
                        <span className="font-semibold">Envoi urgent</span>
                      </div>
                      <p className="text-sm text-gray-600 mt-1">
                        Marquer comme prioritaire (bonus de 5€ pour le voyageur)
                      </p>
                    </div>
                  </label>
                </div>
              </div>
            )}

            {/* Step 3: Prix */}
            {step === 3 && (
              <div className="space-y-6">
                <h2 className="text-2xl font-bold mb-6 flex items-center gap-2">
                  <Package className="w-6 h-6 text-primary-green" />
                  Prix proposé
                </h2>

                <div>
                  <label className="block text-sm font-semibold mb-4">
                    Prix proposé (minimum 30€)
                  </label>
                  <div className="flex items-center gap-4">
                    <input
                      type="range"
                      name="proposedPrice"
                      min="30"
                      max="100"
                      step="5"
                      value={formData.proposedPrice}
                      onChange={handleInputChange}
                      className="flex-1"
                    />
                    <div className="text-3xl font-bold text-primary-green">
                      {formData.proposedPrice}€
                    </div>
                  </div>
                  <p className="text-sm text-gray-500 mt-2">
                    Prix recommandé selon la distance : 35-45€
                  </p>
                </div>

                <div className="bg-gray-50 rounded-lg p-6 space-y-3">
                  <h3 className="font-semibold text-lg">Récapitulatif</h3>
                  <div className="space-y-2 text-sm">
                    <div className="flex justify-between">
                      <span className="text-gray-600">Trajet :</span>
                      <span className="font-medium">
                        {formData.departureCity} → {formData.arrivalCity}
                      </span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-gray-600">Date :</span>
                      <span className="font-medium">{formData.desiredDate}</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-gray-600">Type :</span>
                      <span className="font-medium capitalize">{formData.envelopeType}</span>
                    </div>
                    {formData.urgent && (
                      <div className="flex justify-between text-orange-600">
                        <span>Urgence :</span>
                        <span className="font-medium">+5€</span>
                      </div>
                    )}
                    <div className="border-t pt-2 mt-2"></div>
                    <div className="flex justify-between text-lg font-bold">
                      <span>Prix total :</span>
                      <span className="text-primary-green">
                        {formData.proposedPrice + (formData.urgent ? 5 : 0)}€
                      </span>
                    </div>
                    <div className="text-xs text-gray-500">
                      Commission TAGGA (20%) : {((formData.proposedPrice + (formData.urgent ? 5 : 0)) * 0.2).toFixed(2)}€
                    </div>
                  </div>
                </div>
              </div>
            )}

            {/* Navigation Buttons */}
            <div className="flex items-center justify-between mt-8 pt-6 border-t">
              {step > 1 && (
                <button
                  type="button"
                  onClick={() => setStep(step - 1)}
                  className="btn-secondary"
                >
                  Retour
                </button>
              )}
              <button
                type="submit"
                className="btn-primary ml-auto flex items-center gap-2"
              >
                {step < 3 ? 'Continuer' : 'Trouver un voyageur'}
                <ArrowRight className="w-5 h-5" />
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default SendParcelPage;
