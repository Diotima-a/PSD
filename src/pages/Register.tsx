
import Navbar from '@/components/layout/Navbar';
import AuthForm from '@/components/auth/AuthForm';

const Register = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <div className="flex-grow flex items-center justify-center bg-servigo-light py-12 px-4 sm:px-6 lg:px-8">
        <div className="w-full max-w-md space-y-8">
          <div className="text-center">
            <h2 className="mt-6 text-3xl font-bold tracking-tight text-servigo-dark">
              Créer un nouveau compte
            </h2>
            <p className="mt-2 text-sm text-gray-500">
              Déjà membre ?{' '}
              <a href="/login" className="font-medium text-servigo-primary hover:text-blue-500">
                Connectez-vous
              </a>
            </p>
          </div>
          <AuthForm isRegister={true} />
        </div>
      </div>
    </div>
  );
};

export default Register;
