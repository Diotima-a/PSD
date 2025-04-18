
import { Link } from 'react-router-dom';
import { Wrench, ZapOff, Droplets, Paintbrush, Hammer, Fan, Thermometer, Sofa, PencilRuler, plus } from 'lucide-react';
import { cn } from '@/lib/utils';

type CategoryCardProps = {
  icon: React.ReactNode;
  title: string;
  color: string;
  to: string;
};

const CategoryCard = ({ icon, title, color, to }: CategoryCardProps) => (
  <Link to={to} className="group card-hover">
    <div className="flex flex-col items-center p-6 rounded-xl bg-white border border-gray-100 shadow-sm">
      <div className={cn("w-14 h-14 rounded-full flex items-center justify-center mb-4", color)}>
        {icon}
      </div>
      <h3 className="text-base font-medium text-gray-900 group-hover:text-artisan-primary transition-colors">
        {title}
      </h3>
    </div>
  </Link>
);

const ServiceCategories = () => {
  const categories = [
    { icon: <Wrench className="h-6 w-6 text-white" />, title: "Plomberie", color: "bg-blue-500", to: "/services/plumbing" },
    { icon: <ZapOff className="h-6 w-6 text-white" />, title: "Électricité", color: "bg-yellow-500", to: "/services/electrical" },
    { icon: <Hammer className="h-6 w-6 text-white" />, title: "Menuiserie", color: "bg-amber-700", to: "/services/carpentry" },
    { icon: <Paintbrush className="h-6 w-6 text-white" />, title: "Peinture", color: "bg-red-500", to: "/services/painting" },
    { icon: <Fan className="h-6 w-6 text-white" />, title: "Climatisation", color: "bg-sky-500", to: "/services/air-conditioning" },
    { icon: <Thermometer className="h-6 w-6 text-white" />, title: "Chauffage", color: "bg-orange-500", to: "/services/heating" },
    { icon: <Sofa className="h-6 w-6 text-white" />, title: "Ameublement", color: "bg-green-600", to: "/services/furniture" },
    { icon: <PencilRuler className="h-6 w-6 text-white" />, title: "Rénovation", color: "bg-purple-600", to: "/services/renovation" },
  ];

  return (
    <section className="py-12 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">Catégories de services</h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Découvrez nos différentes catégories de services à domicile proposés par des professionnels qualifiés
          </p>
        </div>
        
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-6">
          {categories.map((category) => (
            <CategoryCard 
              key={category.title}
              icon={category.icon}
              title={category.title}
              color={category.color}
              to={category.to}
            />
          ))}
        </div>
        
        <div className="mt-10 text-center">
          <Link 
            to="/services" 
            className="inline-flex items-center text-artisan-primary hover:text-blue-700 font-medium"
          >
            Voir toutes les catégories
            <svg className="ml-2 h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
            </svg>
          </Link>
        </div>
      </div>
    </section>
  );
};

export default ServiceCategories;
