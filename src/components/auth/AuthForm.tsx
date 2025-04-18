
import { useState } from 'react';
import { Link } from 'react-router-dom';
import { Eye, EyeOff, User, Lock, Mail, Building, UserPlus } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Label } from '@/components/ui/label';
import { RadioGroup, RadioGroupItem } from '@/components/ui/radio-group';
import { toast } from 'sonner';
import { UserRole } from '@/types';

type AuthFormProps = {
  isRegister?: boolean;
};

const AuthForm = ({ isRegister = false }: AuthFormProps) => {
  const [showPassword, setShowPassword] = useState(false);
  const [userRole, setUserRole] = useState<UserRole>('client');
  
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (isRegister) {
      toast.success('Compte créé avec succès ! Vérifiez vos emails pour confirmer votre inscription.');
    } else {
      toast.success('Connexion réussie !');
    }
  };
  
  return (
    <div className="bg-white rounded-xl shadow-md overflow-hidden max-w-md w-full mx-auto">
      <div className="p-8">
        <div className="text-center mb-6">
          <h2 className="text-2xl font-bold text-gray-900">
            {isRegister ? 'Créer un compte' : 'Connexion'}
          </h2>
          <p className="text-gray-600 mt-2">
            {isRegister 
              ? 'Rejoignez notre plateforme de services à domicile' 
              : 'Accédez à votre espace personnel'}
          </p>
        </div>
        
        {isRegister && (
          <Tabs defaultValue="client" className="mb-6">
            <TabsList className="grid grid-cols-2 w-full">
              <TabsTrigger value="client" onClick={() => setUserRole('client')}>
                <User className="h-4 w-4 mr-2" />
                Client
              </TabsTrigger>
              <TabsTrigger value="provider" onClick={() => setUserRole('provider')}>
                <Building className="h-4 w-4 mr-2" />
                Prestataire
              </TabsTrigger>
            </TabsList>
            
            <TabsContent value="client" className="py-2">
              <p className="text-sm text-gray-500">
                En tant que client, vous pourrez demander des services à domicile et suivre vos interventions.
              </p>
            </TabsContent>
            
            <TabsContent value="provider" className="py-2">
              <p className="text-sm text-gray-500">
                En tant que prestataire, vous pourrez gérer vos services, recevoir des demandes et affecter des agents.
              </p>
            </TabsContent>
          </Tabs>
        )}
        
        <form onSubmit={handleSubmit} className="space-y-4">
          {isRegister && (
            <div>
              <Label htmlFor="name">Nom complet</Label>
              <div className="relative">
                <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
                  <User className="h-5 w-5 text-gray-400" />
                </div>
                <Input 
                  id="name" 
                  type="text" 
                  placeholder="Votre nom" 
                  className="pl-10"
                  required
                />
              </div>
            </div>
          )}
          
          <div>
            <Label htmlFor="email">Email</Label>
            <div className="relative">
              <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
                <Mail className="h-5 w-5 text-gray-400" />
              </div>
              <Input 
                id="email" 
                type="email" 
                placeholder="exemple@email.com" 
                className="pl-10"
                required
              />
            </div>
          </div>
          
          <div>
            <Label htmlFor="password">Mot de passe</Label>
            <div className="relative">
              <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
                <Lock className="h-5 w-5 text-gray-400" />
              </div>
              <Input 
                id="password" 
                type={showPassword ? "text" : "password"} 
                placeholder={isRegister ? "Créez un mot de passe" : "Votre mot de passe"}
                className="pl-10 pr-10"
                required
              />
              <div className="absolute inset-y-0 right-0 flex items-center pr-3">
                <button
                  type="button"
                  onClick={() => setShowPassword(!showPassword)}
                  className="text-gray-400 hover:text-gray-600"
                >
                  {showPassword ? (
                    <EyeOff className="h-5 w-5" />
                  ) : (
                    <Eye className="h-5 w-5" />
                  )}
                </button>
              </div>
            </div>
          </div>
          
          {isRegister && userRole === 'provider' && (
            <div>
              <Label htmlFor="company">Nom de l'entreprise</Label>
              <div className="relative">
                <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
                  <Building className="h-5 w-5 text-gray-400" />
                </div>
                <Input 
                  id="company" 
                  type="text" 
                  placeholder="Nom de votre entreprise" 
                  className="pl-10"
                  required
                />
              </div>
            </div>
          )}
          
          {!isRegister && (
            <div className="flex items-center justify-between">
              <div className="flex items-center">
                <input
                  id="remember"
                  type="checkbox"
                  className="h-4 w-4 text-artisan-primary border-gray-300 rounded focus:ring-artisan-primary"
                />
                <label htmlFor="remember" className="ml-2 block text-sm text-gray-700">
                  Se souvenir de moi
                </label>
              </div>
              <Link to="/forgot-password" className="text-sm text-artisan-primary hover:text-blue-700">
                Mot de passe oublié ?
              </Link>
            </div>
          )}
          
          <Button type="submit" className="w-full bg-artisan-primary hover:bg-blue-700">
            {isRegister ? (
              <span className="flex items-center">
                <UserPlus className="h-5 w-5 mr-2" />
                Créer mon compte
              </span>
            ) : (
              'Se connecter'
            )}
          </Button>
          
          {isRegister && (
            <p className="text-xs text-gray-500 mt-4">
              En créant un compte, vous acceptez nos{' '}
              <Link to="/terms" className="text-artisan-primary hover:text-blue-700">
                Conditions d'utilisation
              </Link>{' '}
              et notre{' '}
              <Link to="/privacy" className="text-artisan-primary hover:text-blue-700">
                Politique de confidentialité
              </Link>
              .
            </p>
          )}
        </form>
        
        <div className="mt-6 text-center">
          <p className="text-sm text-gray-600">
            {isRegister ? 'Déjà un compte ?' : 'Pas encore de compte ?'}{' '}
            <Link
              to={isRegister ? '/login' : '/register'}
              className="text-artisan-primary hover:text-blue-700 font-medium"
            >
              {isRegister ? 'Se connecter' : 'S\'inscrire'}
            </Link>
          </p>
        </div>
      </div>
    </div>
  );
};

export default AuthForm;
