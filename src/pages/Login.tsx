
import React from 'react';
import LoginForm from '@/components/auth/LoginForm';

const Login = () => {
  return (
    <div className="min-h-screen bg-gradient-to-b from-pink-100/50 to-white flex flex-col items-center justify-center p-6">
      <LoginForm />
    </div>
  );
};

export default Login;
