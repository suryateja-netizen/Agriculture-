
import React, { useState } from 'react';
import { UserRole } from './types';
import Login from './components/Login';
import Dashboard from './components/Dashboard';

const App: React.FC = () => {
  const [loggedInUser, setLoggedInUser] = useState<{ role: UserRole; name: string } | null>(null);

  const handleLogin = (role: UserRole, name: string) => {
    setLoggedInUser({ role, name });
  };

  const handleLogout = () => {
    setLoggedInUser(null);
  };

  return (
    <div className="min-h-screen font-sans text-gray-800">
      {loggedInUser ? (
        <Dashboard user={loggedInUser} onLogout={handleLogout} />
      ) : (
        <Login onLogin={handleLogin} />
      )}
    </div>
  );
};

export default App;
