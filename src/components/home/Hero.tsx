
import { Search } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Link } from 'react-router-dom';

const Hero = () => {
  return (
    <div className="relative bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 md:py-24">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
          <div className="md:pr-8 animate-fade-in">
            <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
              Services à domicile <span className="text-artisan-primary">professionnels</span>
            </h1>
            <p className="text-lg text-gray-600 mb-8">
              Trouvez rapidement des artisans qualifiés pour tous vos besoins à domicile. Plomberie, électricité, menuiserie et plus encore.
            </p>
            <div className="flex flex-col sm:flex-row space-y-4 sm:space-y-0 sm:space-x-4">
              <Link to="/services">
                <Button className="w-full sm:w-auto bg-artisan-primary hover:bg-blue-700 h-12 px-6 text-base">
                  Demander un service
                </Button>
              </Link>
              <Link to="/providers">
                <Button variant="outline" className="w-full sm:w-auto border-artisan-primary text-artisan-primary hover:bg-artisan-primary hover:text-white h-12 px-6 text-base">
                  Voir les prestataires
                </Button>
              </Link>
            </div>
          </div>
          <div className="relative rounded-xl overflow-hidden shadow-xl h-[300px] md:h-[400px] animate-slide-up">
            <img 
              src="https://images.unsplash.com/photo-1621905251189-08b45d6a269e?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1169&q=80" 
              alt="Service à domicile" 
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-tr from-black/40 to-transparent"></div>
            <div className="absolute bottom-0 left-0 p-6">
              <div className="flex items-center bg-white rounded-lg shadow-lg p-2 max-w-xs">
                <Search className="h-5 w-5 text-artisan-primary mr-2" />
                <span className="text-sm text-gray-700">Recherchez parmi +100 services...</span>
              </div>
            </div>
          </div>
        </div>
      </div>
      
      <div className="bg-gradient-to-r from-blue-50 to-blue-100 py-6">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-wrap justify-center md:justify-between items-center gap-4 text-center md:text-left">
            <p className="text-gray-600 font-medium">Déjà plus de <span className="text-artisan-primary font-bold">5,000+</span> interventions réalisées avec satisfaction</p>
            <div className="flex items-center space-x-8">
              <div className="flex -space-x-2">
                {[1, 2, 3, 4, 5].map((i) => (
                  <div key={i} className="w-8 h-8 rounded-full bg-gray-300 border-2 border-white overflow-hidden">
                    <img 
                      src={`https://randomuser.me/api/portraits/men/${10 + i}.jpg`} 
                      alt="Client" 
                      className="w-full h-full object-cover"
                    />
                  </div>
                ))}
              </div>
              <div className="hidden md:block">
                <div className="text-sm font-medium text-gray-900">300+ prestataires qualifiés</div>
                <div className="text-xs text-gray-500">Dans toute la France</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
