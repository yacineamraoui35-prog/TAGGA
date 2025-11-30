import { Link } from 'react-router-dom';
import { Package, User, Menu, X } from 'lucide-react';
import { useState } from 'react';
import { useAuthStore } from '../../store/authStore';

const Header = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const { isAuthenticated, user, logout } = useAuthStore();

  const handleLogout = () => {
    logout();
    setMobileMenuOpen(false);
  };

  return (
    <header className="bg-black text-white sticky top-0 z-50 shadow-lg">
      <nav className="container mx-auto px-4 py-4">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <Link to="/" className="flex items-center space-x-2">
            <Package className="w-8 h-8 text-primary-green" />
            <span className="text-2xl font-bold">TAGGA</span>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-6">
            <Link
              to="/send-parcel"
              className="hover:text-primary-green transition-colors"
            >
              Envoyer un colis
            </Link>
            <Link
              to="/find-traveler"
              className="hover:text-primary-green transition-colors"
            >
              Trouver un voyageur
            </Link>
            <Link
              to="/become-traveler"
              className="hover:text-primary-green transition-colors"
            >
              Devenir voyageur
            </Link>
            <Link
              to="/contact"
              className="hover:text-primary-green transition-colors"
            >
              Contact
            </Link>

            {isAuthenticated ? (
              <div className="flex items-center space-x-4">
                <Link
                  to={
                    user?.role === 'traveler'
                      ? '/traveler/dashboard'
                      : '/sender/dashboard'
                  }
                  className="flex items-center space-x-2 hover:text-primary-green transition-colors"
                >
                  <User className="w-5 h-5" />
                  <span>{user?.firstName}</span>
                </Link>
                <button
                  onClick={handleLogout}
                  className="btn-secondary py-2 px-4 text-sm"
                >
                  Déconnexion
                </button>
              </div>
            ) : (
              <div className="flex items-center space-x-4">
                <Link to="/login" className="hover:text-primary-green transition-colors">
                  Connexion
                </Link>
                <Link to="/register" className="btn-primary py-2 px-4 text-sm">
                  Inscription
                </Link>
              </div>
            )}
          </div>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          >
            {mobileMenuOpen ? (
              <X className="w-6 h-6" />
            ) : (
              <Menu className="w-6 h-6" />
            )}
          </button>
        </div>

        {/* Mobile Navigation */}
        {mobileMenuOpen && (
          <div className="md:hidden mt-4 pb-4 space-y-4">
            <Link
              to="/send-parcel"
              className="block hover:text-primary-green transition-colors"
              onClick={() => setMobileMenuOpen(false)}
            >
              Envoyer un colis
            </Link>
            <Link
              to="/find-traveler"
              className="block hover:text-primary-green transition-colors"
              onClick={() => setMobileMenuOpen(false)}
            >
              Trouver un voyageur
            </Link>
            <Link
              to="/become-traveler"
              className="block hover:text-primary-green transition-colors"
              onClick={() => setMobileMenuOpen(false)}
            >
              Devenir voyageur
            </Link>
            <Link
              to="/contact"
              className="block hover:text-primary-green transition-colors"
              onClick={() => setMobileMenuOpen(false)}
            >
              Contact
            </Link>

            {isAuthenticated ? (
              <>
                <Link
                  to={
                    user?.role === 'traveler'
                      ? '/traveler/dashboard'
                      : '/sender/dashboard'
                  }
                  className="block hover:text-primary-green transition-colors"
                  onClick={() => setMobileMenuOpen(false)}
                >
                  Mon compte
                </Link>
                <button
                  onClick={handleLogout}
                  className="block w-full text-left hover:text-primary-green transition-colors"
                >
                  Déconnexion
                </button>
              </>
            ) : (
              <>
                <Link
                  to="/login"
                  className="block hover:text-primary-green transition-colors"
                  onClick={() => setMobileMenuOpen(false)}
                >
                  Connexion
                </Link>
                <Link
                  to="/register"
                  className="block btn-primary text-center"
                  onClick={() => setMobileMenuOpen(false)}
                >
                  Inscription
                </Link>
              </>
            )}
          </div>
        )}
      </nav>
    </header>
  );
};

export default Header;
