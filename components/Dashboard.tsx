import React from 'react';
import { UserRole } from '../types';
import { ROLE_DETAILS } from '../constants';
import { THEMES } from '../themes';

interface DashboardProps {
  user: {
    role: UserRole;
    name: string;
  };
  onLogout: () => void;
}

const InfoCard: React.FC<{ title: string; children: React.ReactNode; accentColor: string }> = ({ title, children, accentColor }) => (
  <div className="bg-white bg-opacity-80 backdrop-blur-sm p-6 rounded-lg shadow-md">
    <h3 className="text-xl font-semibold mb-4 border-b-2 border-gray-200 pb-2" style={{ color: accentColor }}>{title}</h3>
    {children}
  </div>
);

const Dashboard: React.FC<DashboardProps> = ({ user, onLogout }) => {
  const roleDetails = ROLE_DETAILS[user.role];
  const theme = THEMES[user.role];
  const { icon: Icon } = roleDetails;

  return (
    <div 
      className="min-h-screen bg-cover bg-center bg-fixed animate-fade-in" 
      style={{ backgroundImage: `url(${theme.backgroundImage})` }}
    >
      <div className="min-h-screen bg-brand-beige bg-opacity-80 backdrop-blur-sm">
        <header className="shadow-lg" style={{ backgroundColor: theme.primary }}>
          <div className="max-w-7xl mx-auto py-4 px-4 sm:px-6 lg:px-8 flex justify-between items-center">
            <div className="flex items-center">
              <Icon className="w-10 h-10 mr-3" style={{ color: theme.primaryText }}/>
              <h1 className="text-2xl font-bold" style={{ color: theme.primaryText }}>
                {user.role} Dashboard
              </h1>
            </div>
            <div className="flex items-center">
               <span className="mr-4 hidden md:block" style={{ color: theme.primaryText }}>Welcome, <span className="font-semibold">{user.name}</span>!</span>
              <button
                onClick={onLogout}
                className="bg-white hover:bg-gray-200 font-bold py-2 px-4 rounded-lg transition-colors duration-300"
                style={{ color: theme.primary }}
              >
                Logout
              </button>
            </div>
          </div>
        </header>

        <main className="max-w-7xl mx-auto py-8 px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            
            <div className="md:col-span-2 lg:col-span-3">
               <InfoCard title="Core Objective" accentColor={theme.accent}>
                  <p className="text-gray-600">{roleDetails.coreObjective}</p>
               </InfoCard>
            </div>
            
            <InfoCard title="Key Dashboard Elements" accentColor={theme.accent}>
              <ul className="list-disc list-inside text-gray-600 space-y-2">
                {roleDetails.dashboardElements.map((item, index) => <li key={index}>{item}</li>)}
              </ul>
            </InfoCard>
            
            <InfoCard title="Unique Interactions" accentColor={theme.accent}>
               <ul className="list-disc list-inside text-gray-600 space-y-2">
                {roleDetails.uniqueInteractions.map((item, index) => <li key={index}>{item}</li>)}
              </ul>
            </InfoCard>

            <div className="md:col-span-2 lg:col-span-1">
               <InfoCard title="Your Profile" accentColor={theme.accent}>
                  <p className="text-gray-600"><strong>Name:</strong> {user.name}</p>
                  <p className="text-gray-600"><strong>Role:</strong> {user.role}</p>
                  <p className="text-gray-600 mt-4 italic">This is a placeholder for more detailed user information and settings.</p>
               </InfoCard>
            </div>

          </div>
        </main>
      </div>
    </div>
  );
};

export default Dashboard;