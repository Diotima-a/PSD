import Navbar from '@/components/layout/Navbar';
import Hero from '@/components/home/Hero';
import ServiceCategories from '@/components/home/ServiceCategories';
import { Button } from '@/components/ui/button';
import { Link } from 'react-router-dom';
import { ShieldCheck, Clock, UserCheck, MessageSquare, Star } from 'lucide-react';

const Index = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      
      <main className="flex-grow">
        <Hero />
        <ServiceCategories />
        
        {/* How it works section */}
        <section className="py-16 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold text-gray-900 mb-4">Comment ça marche</h2>
              <p className="text-lg text-gray-600 max-w-2xl mx-auto">
                Artisan-Link simplifie l'accès aux services professionnels à domicile en quelques étapes
              </p>
            </div>
            
            <div className="grid md:grid-cols-4 gap-8">
              {[
                {
                  step: 1,
                  title: "Choisissez un service",
                  description: "Sélectionnez le type de service dont vous avez besoin",
                  icon: <svg className="w-10 h-10 text-artisan-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2" /></svg>
                },
                {
                  step: 2,
                  title: "Décrivez votre besoin",
                  description: "Indiquez votre adresse, la date et décrivez votre besoin",
                  icon: <svg className="w-10 h-10 text-artisan-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M11 5H6a2 2 0 00-2 2v11a2 2 0 002 2h11a2 2 0 002-2v-5m-1.414-9.414a2 2 0 112.828 2.828L11.828 15H9v-2.828l8.586-8.586z" /></svg>
                },
                {
                  step: 3,
                  title: "Choisissez un prestataire",
                  description: "Sélectionnez parmi les prestataires disponibles",
                  icon: <svg className="w-10 h-10 text-artisan-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" /></svg>
                },
                {
                  step: 4,
                  title: "Intervention et paiement",
                  description: "Un agent intervient et le paiement est sécurisé",
                  icon: <svg className="w-10 h-10 text-artisan-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 10h4.764a2 2 0 011.789 2.894l-3.5 7A2 2 0 0115.263 21h-4.017c-.163 0-.326-.02-.485-.06L7 20m7-10V5a2 2 0 00-2-2h-.095c-.5 0-.905.405-.905.905 0 .714-.211 1.412-.608 2.006L7 11v9m7-10h-2M7 20H5a2 2 0 01-2-2v-6a2 2 0 012-2h2.5" /></svg>
                }
              ].map((item) => (
                <div key={item.step} className="flex flex-col items-center text-center">
                  <div className="relative">
                    <div className="w-20 h-20 bg-blue-50 rounded-full flex items-center justify-center mb-4">
                      {item.icon}
                    </div>
                    <div className="absolute -top-2 -right-2 w-8 h-8 bg-artisan-secondary rounded-full flex items-center justify-center text-white font-bold">
                      {item.step}
                    </div>
                  </div>
                  <h3 className="text-xl font-medium text-gray-900 mb-2">{item.title}</h3>
                  <p className="text-gray-600">{item.description}</p>
                </div>
              ))}
            </div>
            
            <div className="text-center mt-12">
              <Link to="/services">
                <Button className="bg-artisan-primary hover:bg-blue-700">
                  Demander un service maintenant
                </Button>
              </Link>
            </div>
          </div>
        </section>
        
        {/* Benefits section */}
        <section className="py-16 bg-gray-50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold text-gray-900 mb-4">Pourquoi choisir Artisan-Link</h2>
              <p className="text-lg text-gray-600 max-w-2xl mx-auto">
                Nous sélectionnons les meilleurs professionnels pour vous garantir un service de qualité
              </p>
            </div>
            
            <div className="grid md:grid-cols-4 gap-8">
              {[
                {
                  title: "Prestataires vérifiés",
                  description: "Tous nos prestataires sont vérifiés et qualifiés",
                  icon: <ShieldCheck className="h-10 w-10 text-artisan-primary" />
                },
                {
                  title: "Interventions rapides",
                  description: "Obtenez une assistance dans les meilleurs délais",
                  icon: <Clock className="h-10 w-10 text-artisan-primary" />
                },
                {
                  title: "Service client réactif",
                  description: "Une équipe à votre écoute 7j/7",
                  icon: <MessageSquare className="h-10 w-10 text-artisan-primary" />
                },
                {
                  title: "Satisfaction garantie",
                  description: "Des professionnels qui s'engagent sur la qualité",
                  icon: <UserCheck className="h-10 w-10 text-artisan-primary" />
                }
              ].map((item, i) => (
                <div key={i} className="bg-white p-6 rounded-xl shadow-sm border border-gray-100 card-hover">
                  <div className="flex flex-col items-center text-center">
                    <div className="mb-4">
                      {item.icon}
                    </div>
                    <h3 className="text-xl font-medium text-gray-900 mb-2">{item.title}</h3>
                    <p className="text-gray-600">{item.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>
        
        {/* Testimonials section */}
        <section className="py-16 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold text-gray-900 mb-4">Ce que disent nos clients</h2>
              <p className="text-lg text-gray-600 max-w-2xl mx-auto">
                Découvrez les témoignages des personnes qui nous font confiance
              </p>
            </div>
            
            <div className="grid md:grid-cols-3 gap-8">
              {[
                {
                  name: "Marie Dupont",
                  role: "Particulier",
                  comment: "J'ai fait appel à un plombier via Artisan-Link pour un problème urgent. Intervention rapide et de qualité. Je recommande !",
                  rating: 5,
                  image: "https://randomuser.me/api/portraits/women/68.jpg"
                },
                {
                  name: "Jean Martin",
                  role: "Particulier",
                  comment: "Très satisfait de l'électricien qui est intervenu chez moi. Professionnel, ponctuel et efficace. La plateforme est vraiment pratique.",
                  rating: 5,
                  image: "https://randomuser.me/api/portraits/men/32.jpg"
                },
                {
                  name: "Sophie Leroy",
                  role: "Particulier",
                  comment: "J'utilise régulièrement Artisan-Link pour différents services à domicile. La qualité est toujours au rendez-vous et le suivi impeccable.",
                  rating: 4,
                  image: "https://randomuser.me/api/portraits/women/42.jpg"
                }
              ].map((item, i) => (
                <div key={i} className="bg-gray-50 p-6 rounded-xl shadow-sm border border-gray-100">
                  <div className="flex items-center mb-4">
                    <img
                      src={item.image}
                      alt={item.name}
                      className="w-12 h-12 rounded-full object-cover mr-4"
                    />
                    <div>
                      <h4 className="font-semibold text-gray-900">{item.name}</h4>
                      <p className="text-sm text-gray-500">{item.role}</p>
                    </div>
                  </div>
                  <div className="flex mb-3">
                    {[...Array(5)].map((_, i) => (
                      <Star
                        key={i}
                        className={`h-4 w-4 ${
                          i < item.rating ? 'text-yellow-400' : 'text-gray-300'
                        }`}
                        fill={i < item.rating ? 'currentColor' : 'none'}
                      />
                    ))}
                  </div>
                  <p className="text-gray-600 italic">"{item.comment}"</p>
                </div>
              ))}
            </div>
          </div>
        </section>
        
        {/* CTA section */}
        <section className="py-16 bg-gradient-to-r from-artisan-primary to-blue-700 text-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h2 className="text-3xl font-bold mb-4">Prêt à trouver un artisan qualifié ?</h2>
            <p className="text-xl text-blue-100 mb-8 max-w-2xl mx-auto">
              Rejoignez les milliers de clients satisfaits qui font confiance à notre plateforme pour tous leurs besoins à domicile.
            </p>
            <div className="flex flex-col sm:flex-row justify-center space-y-4 sm:space-y-0 sm:space-x-4">
              <Link to="/services">
                <Button className="w-full sm:w-auto bg-white text-artisan-primary hover:bg-blue-50 h-12 px-6 text-base">
                  Demander un service
                </Button>
              </Link>
              <Link to="/register">
                <Button variant="outline" className="w-full sm:w-auto border-white text-white hover:bg-white/10 h-12 px-6 text-base">
                  Créer un compte
                </Button>
              </Link>
            </div>
          </div>
        </section>
      </main>
      
      <footer className="bg-gray-900 text-white py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div>
              <h3 className="text-xl font-bold mb-4">Artisan<span className="text-artisan-secondary">Link</span></h3>
              <p className="text-gray-400">
                La plateforme qui connecte les particuliers avec des professionnels qualifiés pour tous les services à domicile.
              </p>
            </div>
            <div>
              <h4 className="font-semibold uppercase tracking-wider mb-4">Services</h4>
              <ul className="space-y-2">
                <li><Link to="/services/plumbing" className="text-gray-400 hover:text-white">Plomberie</Link></li>
                <li><Link to="/services/electrical" className="text-gray-400 hover:text-white">Électricité</Link></li>
                <li><Link to="/services/carpentry" className="text-gray-400 hover:text-white">Menuiserie</Link></li>
                <li><Link to="/services/painting" className="text-gray-400 hover:text-white">Peinture</Link></li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold uppercase tracking-wider mb-4">Liens utiles</h4>
              <ul className="space-y-2">
                <li><Link to="/about" className="text-gray-400 hover:text-white">À propos</Link></li>
                <li><Link to="/providers" className="text-gray-400 hover:text-white">Prestataires</Link></li>
                <li><Link to="/faq" className="text-gray-400 hover:text-white">FAQ</Link></li>
                <li><Link to="/contact" className="text-gray-400 hover:text-white">Contact</Link></li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold uppercase tracking-wider mb-4">Légal</h4>
              <ul className="space-y-2">
                <li><Link to="/terms" className="text-gray-400 hover:text-white">Conditions d'utilisation</Link></li>
                <li><Link to="/privacy" className="text-gray-400 hover:text-white">Politique de confidentialité</Link></li>
                <li><Link to="/cookies" className="text-gray-400 hover:text-white">Cookies</Link></li>
              </ul>
            </div>
          </div>
          <div className="border-t border-gray-800 mt-8 pt-8 flex flex-col md:flex-row justify-between items-center">
            <p className="text-gray-400">© 2025 ArtisanLink. Tous droits réservés.</p>
            <div className="flex space-x-4 mt-4 md:mt-0">
              <a href="#" className="text-gray-400 hover:text-white">
                <svg className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                  <path fillRule="evenodd" d="M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.878v-6.987h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33v6.988C18.343 21.128 22 16.991 22 12z" clipRule="evenodd" />
                </svg>
              </a>
              <a href="#" className="text-gray-400 hover:text-white">
                <svg className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                  <path fillRule="evenodd" d="M12.315 2c2.43 0 2.784.013 3.808.06 1.064.049 1.791.218 2.427.465a4.902 4.902 0 011.772 1.153 4.902 4.902 0 011.153 1.772c.247.636.416 1.363.465 2.427.048 1.067.06 1.407.06 4.123v.08c0 2.643-.012 2.987-.06 4.043-.049 1.064-.218 1.791-.465 2.427a4.902 4.902 0 01-1.153 1.772 4.902 4.902 0 01-1.772 1.153c-.636.247-1.363.416-2.427.465-1.067.048-1.407.06-4.123.06h-.08c-2.643 0-2.987-.012-4.043-.06-1.064-.049-1.791-.218-2.427-.465a4.902 4.902 0 01-1.772-1.153 4.902 4.902 0 01-1.153-1.772c-.247-.636-.416-1.363-.465-2.427-.047-1.024-.06-1.379-.06-3.808v-.63c0-2.43.013-2.784.06-3.808.045-1.064.218-1.791.465-2.427a4.902 4.902 0 011.153-1.772A4.902 4.902 0 015.45 2.525c.636-.247 1.363-.416 2.427-.465C8.901 2.013 9.256 2 11.685 2h.63zm-.081 1.802h-.468c-2.456 0-2.784.011-3.807.058-.975.045-1.504.207-1.857.344-.467.182-.8.398-1.15.748-.35.35-.566.683-.748 1.15-.137.353-.3.882-.344 1.857-.047 1.023-.058 1.351-.058 3.807v.468c0 2.456.011 2.784.058 3.807.045.975.207 1.504.344 1.857.182.466.399.8.748 1.15.35.35.683.566 1.15.748.353.137.882.3 1.857.344 1.054.048 1.37.058 4.041.058h.08c2.597 0 2.917-.01 3.96-.058.976-.045 1.505-.207 1.858-.344.466-.182.8-.398 1.15-.748.35-.35.566-.683.748-1.15.137-.353.3-.882.344-1.857.048-1.055.058-1.37.058-4.041v-.08c0-2.597-.01-2.917-.058-3.96-.045-.976-.207-1.505-.344-1.858a3.097 3.097 0 00-.748-1.15 3.098 3.098 0 00-1.15-.748c-.353-.137-.882-.3-1.857-.344-1.023-.047-1.351-.058-3.807-.058zM12 6.865a5.135 5.135 0 110 10.27 5.135 5.135 0 010-10.27zm0 1.802a3.333 3.333 0 100 6.666 3.333 3.333 0 000-6.666zm5.338-3.205a1.2 1.2 0 110 2.4 1.2 1.2 0 010-2.4z" clipRule="evenodd" />
                </svg>
              </a>
              <a href="#" className="text-gray-400 hover:text-white">
                <svg className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                  <path d="M8.29 20.251c7.547 0 11.675-6.253 11.675-11.675 0-.178 0-.355-.012-.53A8.348 8.348 0 0022 5.92a8.19 8.19 0 01-2.357.646 4.118 4.118 0 001.804-2.27 8.224 8.224 0 01-2.605.996 4.107 4.107 0 00-6.993 3.743 11.65 11.65 0 01-8.457-4.287 4.106 4.106 0 001.27 5.477A4.072 4.072 0 012.8 9.713v.052a4.105 4.105 0 003.292 4.022 4.095 4.095 0 01-1.853.07 4.108 4.108 0 003.834 2.85A8.233 8.233 0 012 18.407a11.616 11.616 0 006.29 1.84" />
                </svg>
              </a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Index;
