import React, { useState } from 'react';
import { UserRole } from '../types';
import { ROLE_DETAILS } from '../constants';
import RoleCard from './RoleCard';
import LoginForm from './LoginForm';

interface LoginProps {
  onLogin: (role: UserRole, name: string) => void;
}

const Login: React.FC<LoginProps> = ({ onLogin }) => {
  const [selectedRole, setSelectedRole] = useState<UserRole | null>(null);

  const handleRoleSelect = (role: UserRole) => {
    setSelectedRole(role);
  };

  const handleBack = () => {
    setSelectedRole(null);
  };

  return (
    <div className="flex items-center justify-center min-h-screen bg-cover bg-center" style={{backgroundImage: "url('https://picsum.photos/seed/agriculture/1920/1080')"}}>
      <div className="absolute inset-0 bg-black bg-opacity-50"></div>
      <main className="relative z-10 w-full max-w-6xl p-8 mx-auto my-12 transition-all duration-500">
        <div className="bg-white bg-opacity-90 backdrop-blur-sm rounded-xl shadow-2xl overflow-hidden">
          <div className="p-8 md:p-12 text-center">
            <h1 className="text-4xl md:text-5xl font-bold text-brand-green mb-2">Welcome to Agri-Connect</h1>
            <p className="text-lg text-gray-600">Your all-in-one platform for the agricultural ecosystem.</p>
          </div>
          
          <div className="p-8 md:p-12 bg-stone-100 animate-fade-in">
            {selectedRole ? (
              <LoginForm role={selectedRole} onLogin={onLogin} onBack={handleBack} />
            ) : (
              <div>
                <h2 className="text-2xl font-semibold text-center text-brand-green mb-8">Please select your role to continue</h2>
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                  {Object.values(ROLE_DETAILS).map((details) => (
                    <RoleCard key={details.role} details={details} onSelect={handleRoleSelect} />
                  ))}
                </div>
              </div>
            )}
          </div>
        </div>
      </main>
    </div>
  );
};

export default Login;