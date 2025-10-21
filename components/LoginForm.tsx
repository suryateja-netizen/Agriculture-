import React, { useState } from 'react';
import { UserRole } from '../types';
import { ROLE_DETAILS } from '../constants';

interface LoginFormProps {
  role: UserRole;
  onLogin: (role: UserRole, name: string) => void;
  onBack: () => void;
}

const LoginForm: React.FC<LoginFormProps> = ({ role, onLogin, onBack }) => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const roleDetails = ROLE_DETAILS[role];

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (username.trim() && !isLoading) {
      setIsLoading(true);
      // Simulate network request for feedback
      setTimeout(() => {
        onLogin(role, username.trim());
      }, 1000);
    }
  };

  return (
    <div className="max-w-md mx-auto animate-slide-in-up">
      <div className="flex items-center justify-center mb-6">
        <roleDetails.icon className="w-16 h-16 text-brand-green" />
      </div>
      <h2 className="text-2xl font-bold text-center text-brand-green mb-2">Login as {role}</h2>
      <p className="text-center text-gray-500 mb-8">Enter your credentials to access your dashboard.</p>
      <form onSubmit={handleSubmit}>
        <div className="mb-4">
          <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="username">
            Username / Email
          </label>
          <input
            id="username"
            type="text"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
            className="shadow appearance-none border rounded w-full py-3 px-4 text-gray-700 leading-tight focus:outline-none focus:shadow-outline focus:ring-2 focus:ring-brand-light-green"
            placeholder="e.g., john.doe@example.com"
            required
            disabled={isLoading}
          />
        </div>
        <div className="mb-6">
          <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="password">
            Password
          </label>
          <input
            id="password"
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            className="shadow appearance-none border rounded w-full py-3 px-4 text-gray-700 mb-3 leading-tight focus:outline-none focus:shadow-outline focus:ring-2 focus:ring-brand-light-green"
            placeholder="******************"
            required
            disabled={isLoading}
          />
        </div>
        <div className="flex flex-col items-center space-y-4">
          <button
            type="submit"
            className="w-full bg-brand-green hover:bg-brand-light-green text-white font-bold py-3 px-4 rounded-lg focus:outline-none focus:shadow-outline transition-colors duration-300 flex items-center justify-center disabled:opacity-75 disabled:cursor-not-allowed"
            disabled={isLoading}
          >
            {isLoading ? (
              <>
                <svg className="animate-spin -ml-1 mr-3 h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                  <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                  <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                </svg>
                Signing In...
              </>
            ) : (
              'Sign In'
            )}
          </button>
          <button
            type="button"
            onClick={onBack}
            className="w-full text-brand-green font-semibold hover:underline disabled:opacity-75 disabled:cursor-not-allowed"
            disabled={isLoading}
          >
            &larr; Back to role selection
          </button>
        </div>
      </form>
    </div>
  );
};

export default LoginForm;