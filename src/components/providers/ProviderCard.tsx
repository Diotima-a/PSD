
import { CheckCircle2, Star, MapPin, UserCheck, Shield } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Link } from 'react-router-dom';
import { Provider } from '@/types';

type ProviderCardProps = {
  provider: Provider;
  featured?: boolean;
};

const ProviderCard = ({ provider, featured = false }: ProviderCardProps) => {
  return (
    <div className={`rounded-xl border ${featured ? 'border-artisan-primary shadow-md' : 'border-gray-200'} overflow-hidden card-hover transition-all`}>
      {featured && (
        <div className="bg-artisan-primary text-white text-xs font-medium py-1 px-3 text-center">
          Prestataire recommandé
        </div>
      )}
      
      <div className="p-6">
        <div className="flex items-center mb-4">
          <div className="w-16 h-16 rounded-full bg-gray-200 overflow-hidden mr-4 flex-shrink-0">
            {provider.logo ? (
              <img src={provider.logo} alt={provider.name} className="w-full h-full object-cover" />
            ) : (
              <div className="w-full h-full flex items-center justify-center bg-artisan-primary text-white text-xl font-bold">
                {provider.name.charAt(0)}
              </div>
            )}
          </div>
          
          <div>
            <h3 className="text-lg font-semibold">{provider.name}</h3>
            <div className="flex items-center text-sm text-gray-600">
              <div className="flex items-center mr-3">
                <Star className="w-4 h-4 text-yellow-400 mr-1" />
                <span>{provider.rating.toFixed(1)}</span>
              </div>
              <span className="text-gray-400">({provider.reviewCount} avis)</span>
            </div>
          </div>
        </div>
        
        <p className="text-gray-600 text-sm mb-4 line-clamp-2">
          {provider.description}
        </p>
        
        <div className="space-y-2 mb-4">
          <div className="inline-flex items-center bg-gray-100 rounded-full py-1 px-3 text-xs mr-2 mb-2">
            <MapPin className="w-3 h-3 mr-1" />
            <span>Paris et environs</span>
          </div>
          {provider.categories.slice(0, 3).map((category, index) => (
            <div key={index} className="inline-flex items-center bg-blue-50 text-artisan-primary rounded-full py-1 px-3 text-xs mr-2 mb-2">
              {category}
            </div>
          ))}
          {provider.categories.length > 3 && (
            <div className="inline-flex items-center bg-gray-100 rounded-full py-1 px-3 text-xs">
              +{provider.categories.length - 3}
            </div>
          )}
        </div>
        
        <div className="flex flex-col sm:flex-row sm:items-center justify-between border-t pt-4 mt-4">
          <div className="flex items-center space-x-3 text-xs text-gray-600 mb-3 sm:mb-0">
            <div className="flex items-center">
              <Shield className="w-4 h-4 text-green-600 mr-1" />
              <span>Vérifié</span>
            </div>
            <div className="flex items-center">
              <UserCheck className="w-4 h-4 text-blue-600 mr-1" />
              <span>Professionnel</span>
            </div>
          </div>
          
          <Link to={`/providers/${provider.id}`}>
            <Button size="sm" className="w-full sm:w-auto bg-artisan-primary hover:bg-blue-700">
              Voir profil
            </Button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default ProviderCard;
