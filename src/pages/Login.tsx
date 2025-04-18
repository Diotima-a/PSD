
import Navbar from '@/components/layout/Navbar';
import AuthForm from '@/components/auth/AuthForm';

const Login = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <div className="flex-grow flex items-center justify-center bg-servigo-light py-12 px-4 sm:px-6 lg:px-8">
        <div className="w-full max-w-md space-y-8">
          <div className="text-center">
            <h2 className="mt-6 text-3xl font-bold tracking-tight text-servigo-dark">
              Connexion à votre compte
            </h2>
            <p className="mt-2 text-sm text-gray-500">
              Ou{' '}
              <a href="/register" className="font-medium text-servigo-primary hover:text-blue-500">
                créer un nouveau compte
              </a>
            </p>
          </div>
          <AuthForm isRegister={false} />
        </div>
      </div>
    </div>
  );
};

export default Login;
