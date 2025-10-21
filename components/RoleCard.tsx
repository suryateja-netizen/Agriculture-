import React from 'react';
import { RoleDetails, UserRole } from '../types';

interface RoleCardProps {
  details: RoleDetails;
  onSelect: (role: UserRole) => void;
}

const RoleCard: React.FC<RoleCardProps> = ({ details, onSelect }) => {
  return (
    <button
      onClick={() => onSelect(details.role)}
      className="group flex flex-col items-center p-6 text-center bg-white rounded-lg shadow-md hover:shadow-xl hover:-translate-y-2 hover:scale-105 transition-all duration-300 cursor-pointer border-2 border-transparent hover:border-brand-light-green"
    >
      <div className="mb-4 text-brand-green group-hover:text-brand-light-green transition-colors duration-300">
        <details.icon className="w-16 h-16" />
      </div>
      <h3 className="text-xl font-bold text-gray-800 mb-2">{details.title}</h3>
      <p className="text-gray-500 text-sm">{details.description}</p>
    </button>
  );
};

export default RoleCard;