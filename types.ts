
import React from 'react';

export enum UserRole {
  LandOwner = 'Land Owner',
  PublicUser = 'Public User',
  AgriConsultant = 'Agri Consultant',
  Supplier = 'Supplier',
  Buyer = 'Buyer',
  Seller = 'Seller',
  TransportProvider = 'Transport Provider',
  BankFinancial = 'Bank/Financial Services',
  DataAnalyst = 'Data Administrator',
}

export interface RoleDetails {
  role: UserRole;
  title: string;
  description: string;
  icon: React.FC<React.SVGProps<SVGSVGElement>>;
  coreObjective: string;
  dashboardElements: string[];
  uniqueInteractions: string[];
}
