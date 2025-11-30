import { Link } from 'react-router-dom';
import { Package, Mail, MapPin, Phone } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-black text-white mt-auto">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Logo & Description */}
          <div className="col-span-1">
            <Link to="/" className="flex items-center space-x-2 mb-4">
              <Package className="w-8 h-8 text-primary-green" />
              <span className="text-2xl font-bold">TAGGA</span>
            </Link>
            <p className="text-gray-400 text-sm">
              Livraison express via des voyageurs. Simple, rapide et sécurisé.
            </p>
          </div>

          {/* Services */}
          <div>
            <h3 className="font-bold mb-4 text-primary-green">Services</h3>
            <ul className="space-y-2">
              <li>
                <Link
                  to="/send-parcel"
                  className="text-gray-400 hover:text-primary-green transition-colors text-sm"
                >
                  Envoyer un colis
                </Link>
              </li>
              <li>
                <Link
                  to="/find-traveler"
                  className="text-gray-400 hover:text-primary-green transition-colors text-sm"
                >
                  Trouver un voyageur
                </Link>
              </li>
              <li>
                <Link
                  to="/become-traveler"
                  className="text-gray-400 hover:text-primary-green transition-colors text-sm"
                >
                  Devenir voyageur
                </Link>
              </li>
            </ul>
          </div>

          {/* Informations légales */}
          <div>
            <h3 className="font-bold mb-4 text-primary-green">Légal</h3>
            <ul className="space-y-2">
              <li>
                <Link
                  to="/terms"
                  className="text-gray-400 hover:text-primary-green transition-colors text-sm"
                >
                  CGU
                </Link>
              </li>
              <li>
                <Link
                  to="/privacy"
                  className="text-gray-400 hover:text-primary-green transition-colors text-sm"
                >
                  Confidentialité
                </Link>
              </li>
              <li>
                <Link
                  to="/legal"
                  className="text-gray-400 hover:text-primary-green transition-colors text-sm"
                >
                  Mentions légales
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="font-bold mb-4 text-primary-green">Contact</h3>
            <ul className="space-y-3">
              <li className="flex items-center space-x-2 text-gray-400 text-sm">
                <Mail className="w-4 h-4" />
                <a href="mailto:contact@tagga.fr" className="hover:text-primary-green">
                  contact@tagga.fr
                </a>
              </li>
              <li className="flex items-center space-x-2 text-gray-400 text-sm">
                <Phone className="w-4 h-4" />
                <span>01 23 45 67 89</span>
              </li>
              <li className="flex items-center space-x-2 text-gray-400 text-sm">
                <MapPin className="w-4 h-4" />
                <span>Paris, France</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-gray-800 mt-8 pt-8 text-center text-gray-400 text-sm">
          <p>&copy; {new Date().getFullYear()} TAGGA. Tous droits réservés.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
