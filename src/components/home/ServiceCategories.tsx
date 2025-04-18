
import React from 'react';
import { Link } from 'react-router-dom';
import { Wrench, Home, Wifi, PaintBucket, Leaf, Car, Zap, Plus } from 'lucide-react';

const ServiceCategories = () => {
  const categories = [
    {
      id: 'plumbing',
      name: 'Plomberie',
      icon: <Wrench className="h-10 w-10 text-servigo-primary" />,
      description: 'Réparation de fuites, installation sanitaire, débouchage...'
    },
    {
      id: 'electrical',
      name: 'Électricité',
      icon: <Zap className="h-10 w-10 text-servigo-primary" />,
      description: 'Installation, dépannage, mise aux normes...'
    },
    {
      id: 'renovation',
      name: 'Rénovation',
      icon: <Home className="h-10 w-10 text-servigo-primary" />,
      description: 'Travaux de rénovation intérieure et extérieure'
    },
    {
      id: 'internet',
      name: 'Internet & IT',
      icon: <Wifi className="h-10 w-10 text-servigo-primary" />,
      description: 'Installation, dépannage informatique et réseau'
    },
    {
      id: 'painting',
      name: 'Peinture',
      icon: <PaintBucket className="h-10 w-10 text-servigo-primary" />,
      description: 'Travaux de peinture intérieure et extérieure'
    },
    {
      id: 'gardening',
      name: 'Jardinage',
      icon: <Leaf className="h-10 w-10 text-servigo-primary" />,
      description: 'Entretien jardin, taille de haies, aménagement...'
    },
    {
      id: 'automotive',
      name: 'Automobile',
      icon: <Car className="h-10 w-10 text-servigo-primary" />,
      description: 'Réparation, entretien, diagnostic à domicile'
    }
  ];

  return (
    <section className="py-12 bg-servigo-light">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-servigo-dark mb-4">Nos services à domicile</h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            ServiGo vous propose une large gamme de services professionnels pour répondre à tous vos besoins
          </p>
        </div>
        
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-6">
          {categories.map((category) => (
            <Link 
              key={category.id}
              to={`/services/${category.id}`}
              className="bg-white p-6 rounded-lg shadow-sm border border-gray-100 text-center card-hover"
            >
              <div className="flex flex-col items-center">
                <div className="mb-4">
                  {category.icon}
                </div>
                <h3 className="text-lg font-semibold text-servigo-dark mb-2">{category.name}</h3>
                <p className="text-sm text-gray-500">{category.description}</p>
              </div>
            </Link>
          ))}
          
          <Link 
            to="/services"
            className="bg-white p-6 rounded-lg shadow-sm border border-servigo-primary border-dashed text-center flex items-center justify-center card-hover"
          >
            <div className="flex flex-col items-center">
              <div className="mb-4">
                <Plus className="h-10 w-10 text-servigo-primary" />
              </div>
              <h3 className="text-lg font-semibold text-servigo-primary">Tous les services</h3>
            </div>
          </Link>
        </div>
      </div>
    </section>
  );
};

export default ServiceCategories;
