
import Navbar from '@/components/layout/Navbar';
import AuthForm from '@/components/auth/AuthForm';

const Register = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <div className="flex-grow flex items-center justify-center bg-gray-50 py-12 px-4 sm:px-6 lg:px-8">
        <AuthForm isRegister={true} />
      </div>
    </div>
  );
};

export default Register;
