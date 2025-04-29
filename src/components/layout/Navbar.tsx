
import { useState } from 'react';
import { Link } from 'react-router-dom';
import { Menu, X, UserCircle } from 'lucide-react';
import { Button } from '@/components/ui/button';

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const isLoggedIn = false; // Replace with actual auth state

  return (
    <nav className="bg-white shadow-sm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16">
          <div className="flex">
            <Link to="/" className="flex-shrink-0 flex items-center">
              <span className="text-artisan-primary font-display text-xl font-bold">Artisan<span className="text-artisan-secondary">Link</span></span>
            </Link>
            <div className="hidden sm:ml-6 sm:flex sm:space-x-8">
              <Link to="/" className="inline-flex items-center px-1 pt-1 border-b-2 border-transparent text-sm font-medium text-gray-500 hover:text-gray-700 hover:border-gray-300">
                Accueil
              </Link>
              <Link to="/services" className="inline-flex items-center px-1 pt-1 border-b-2 border-transparent text-sm font-medium text-gray-500 hover:text-gray-700 hover:border-gray-300">
                Services
              </Link>
              <Link to="/providers" className="inline-flex items-center px-1 pt-1 border-b-2 border-transparent text-sm font-medium text-gray-500 hover:text-gray-700 hover:border-gray-300">
                Prestataires
              </Link>
              <Link to="/about" className="inline-flex items-center px-1 pt-1 border-b-2 border-transparent text-sm font-medium text-gray-500 hover:text-gray-700 hover:border-gray-300">
                À propos
              </Link>
            </div>
          </div>
          <div className="hidden sm:ml-6 sm:flex sm:items-center">
            {isLoggedIn ? (
              <div className="flex items-center">
                <Link to="/dashboard" className="flex items-center text-sm font-medium text-gray-700 text-artisan-primary">
                  <UserCircle className="mr-1 h-5 w-5" />
                  Mon espace
                </Link>
              </div>
            ) : (
              <div className="flex items-center space-x-4">
                <Link to="/login">
                  <Button variant="ghost" className="text-artisan-primary text-artisan-primary hover:bg-blue-50">
                    Connexion
                  </Button>
                </Link>
                <Link to="/register">
                  <Button className="bg-artisan-primary bg-blue-700">
                    Inscription
                  </Button>
                </Link>
              </div>
            )}
          </div>
          <div className="-mr-2 flex items-center sm:hidden">
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="inline-flex items-center justify-center p-2 rounded-md text-gray-400 hover:text-gray-500 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-artisan-primary"
            >
              <span className="sr-only">Open main menu</span>
              {isMenuOpen ? (
                <X className="block h-6 w-6" aria-hidden="true" />
              ) : (
                <Menu className="block h-6 w-6" aria-hidden="true" />
              )}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile menu */}
      {isMenuOpen && (
        <div className="sm:hidden">
          <div className="pt-2 pb-3 space-y-1">
            <Link to="/" className="block pl-3 pr-4 py-2 border-l-4 border-transparent text-base font-medium text-gray-600 hover:bg-gray-50 hover:border-gray-300 hover:text-gray-800">
              Accueil
            </Link>
            <Link to="/services" className="block pl-3 pr-4 py-2 border-l-4 border-transparent text-base font-medium text-gray-600 hover:bg-gray-50 hover:border-gray-300 hover:text-gray-800">
              Services
            </Link>
            <Link to="/providers" className="block pl-3 pr-4 py-2 border-l-4 border-transparent text-base font-medium text-gray-600 hover:bg-gray-50 hover:border-gray-300 hover:text-gray-800">
              Prestataires
            </Link>
            <Link to="/about" className="block pl-3 pr-4 py-2 border-l-4 border-transparent text-base font-medium text-gray-600 hover:bg-gray-50 hover:border-gray-300 hover:text-gray-800">
              À propos
            </Link>
          </div>
          <div className="pt-4 pb-3 border-t border-gray-200">
            {isLoggedIn ? (
              <div className="flex items-center px-4">
                <div className="flex-shrink-0">
                  <UserCircle className="h-10 w-10 text-gray-400" />
                </div>
                <div className="ml-3">
                  <div className="text-base font-medium text-gray-800">Nom d'utilisateur</div>
                  <Link to="/dashboard" className="text-sm font-medium text-artisan-primary text-artisan-primary">
                    Mon espace
                  </Link>
                </div>
              </div>
            ) : (
              <div className="flex flex-col space-y-3 px-4">
                <Link to="/login" className="w-full">
                  <Button variant="outline" className="w-full">Connexion</Button>
                </Link>
                <Link to="/register" className="w-full">
                  <Button className="w-full bg-artisan-primary bg-blue-700">Inscription</Button>
                </Link>
              </div>
            )}
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
