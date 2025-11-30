import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet';
import { Icon } from 'leaflet';
import 'leaflet/dist/leaflet.css';
import { Train, Plane, Mail } from 'lucide-react';

// Fix pour les icônes Leaflet avec Vite
import iconUrl from 'leaflet/dist/images/marker-icon.png';
import iconRetinaUrl from 'leaflet/dist/images/marker-icon-2x.png';
import shadowUrl from 'leaflet/dist/images/marker-shadow.png';

const defaultIcon = new Icon({
  iconUrl,
  iconRetinaUrl,
  shadowUrl,
  iconSize: [25, 41],
  iconAnchor: [12, 41],
});

// Données de voyageurs fictives (à remplacer par vraies données de l'API)
const mockTravelers = [
  {
    id: '1',
    name: 'Sophie M.',
    from: 'Paris Gare de Lyon',
    to: 'Lyon Part-Dieu',
    transport: 'train',
    date: '2024-12-02',
    price: 35,
    lat: 48.8566,
    lng: 2.3522,
  },
  {
    id: '2',
    name: 'Marc D.',
    from: 'Paris CDG',
    to: 'Marseille Provence',
    transport: 'plane',
    date: '2024-12-03',
    price: 45,
    lat: 49.0097,
    lng: 2.5479,
  },
  {
    id: '3',
    name: 'Julie L.',
    from: 'Lyon Part-Dieu',
    to: 'Nice Ville',
    transport: 'train',
    date: '2024-12-02',
    price: 40,
    lat: 45.7640,
    lng: 4.8357,
  },
  {
    id: '4',
    name: 'Thomas R.',
    from: 'Marseille St-Charles',
    to: 'Paris Gare de Lyon',
    transport: 'train',
    date: '2024-12-04',
    price: 38,
    lat: 43.3032,
    lng: 5.3808,
  },
  {
    id: '5',
    name: 'Emma B.',
    from: 'Nice Côte d\'Azur',
    to: 'Paris Orly',
    transport: 'plane',
    date: '2024-12-03',
    price: 42,
    lat: 43.6584,
    lng: 7.2159,
  },
];

const TravelerMap = () => {
  return (
    <div className="w-full h-[600px] rounded-xl overflow-hidden shadow-xl border-4 border-primary-green">
      <MapContainer
        center={[46.603354, 1.888334]} // Centre de la France
        zoom={6}
        className="h-full w-full"
      >
        <TileLayer
          attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        />

        {mockTravelers.map((traveler) => (
          <Marker
            key={traveler.id}
            position={[traveler.lat, traveler.lng]}
            icon={defaultIcon}
          >
            <Popup>
              <div className="p-2">
                <div className="flex items-center gap-2 mb-2">
                  {traveler.transport === 'train' ? (
                    <Train className="w-5 h-5 text-primary-green" />
                  ) : (
                    <Plane className="w-5 h-5 text-primary-green" />
                  )}
                  <h3 className="font-bold text-lg">{traveler.name}</h3>
                </div>
                <div className="space-y-1 text-sm">
                  <p className="flex items-center gap-2">
                    <Mail className="w-4 h-4" />
                    <span><strong>De:</strong> {traveler.from}</span>
                  </p>
                  <p className="ml-6">
                    <strong>À:</strong> {traveler.to}
                  </p>
                  <p className="text-gray-600">
                    <strong>Date:</strong> {new Date(traveler.date).toLocaleDateString('fr-FR')}
                  </p>
                  <p className="text-primary-green font-bold">
                    {traveler.price}€
                  </p>
                </div>
                <button className="mt-3 w-full bg-primary-green hover:bg-primary-green-dark text-black font-semibold py-2 px-4 rounded-lg transition-colors">
                  Réserver
                </button>
              </div>
            </Popup>
          </Marker>
        ))}
      </MapContainer>
    </div>
  );
};

export default TravelerMap;
