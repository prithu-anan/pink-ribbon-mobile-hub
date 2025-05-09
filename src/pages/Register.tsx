
import React from 'react';
import RegisterForm from '@/components/auth/RegisterForm';

const Register = () => {
  return (
    <div className="min-h-screen bg-gradient-to-b from-pink-100/50 to-white flex flex-col items-center justify-center p-6">
      <RegisterForm />
    </div>
  );
};

export default Register;
