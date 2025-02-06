'use client';

import React from 'react';
import Header from '../components/Header';
import RegisterForm from '@/app/components/RegisterForm';

const RegisterPage: React.FC = () => {
  return (
    <div>
        <div>
            <Header/>
        </div>
    <div className="min-h-screen flex items-center justify-center bg-gray-100">
      <div className="w-full max-w-md bg-white p-8 rounded-lg shadow-md">
        <h1 className="text-3xl font-bold text-center text-gray-800 mb-6">Inscription</h1>
        <RegisterForm />
      </div>
    </div>
    </div>
  );
};

export default RegisterPage;
