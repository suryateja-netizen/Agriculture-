import { UserRole } from './types';

export interface Theme {
  primary: string;
  accent: string;
  primaryText: string;
  backgroundImage: string;
}

export const THEMES: Record<UserRole, Theme> = {
  [UserRole.LandOwner]: {
    primary: '#4A5C40', // Deep Forest Green: Represents connection to land, fertile soil.
    accent: '#D4A276',  // Earthy Tan: Evokes soil, wood, and harvested grains.
    primaryText: '#FFFFFF',
    backgroundImage: `https://picsum.photos/seed/farmland/1920/1080`,
  },
  [UserRole.PublicUser]: {
    primary: '#87CEEB', // Sky Blue: Represents openness, clarity, and public information.
    accent: '#A9B9A2',  // Muted Green: A soft, natural green for the agricultural theme.
    primaryText: '#1F2937',
    backgroundImage: `https://picsum.photos/seed/community/1920/1080`,
  },
  [UserRole.AgriConsultant]: {
    primary: '#4863A0', // Slate Blue: A professional color for knowledge and expertise.
    accent: '#9DC183',  // Sage Green: A wise, calming green hinting at agricultural wisdom.
    primaryText: '#FFFFFF',
    backgroundImage: `https://picsum.photos/seed/research/1920/1080`,
  },
  [UserRole.Supplier]: {
    primary: '#7C0A02', // Barn Red: Strong, business-like color of agricultural buildings.
    accent: '#DAA520',  // Goldenrod: Represents value, quality goods, and corn/grain.
    primaryText: '#FFFFFF',
    backgroundImage: `https://picsum.photos/seed/warehouse/1920/1080`,
  },
  [UserRole.Buyer]: {
    primary: '#0047AB', // Deep Blue: A serious color conveying trust and commerce.
    accent: '#FFA500',  // Bright Orange: Energetic, action-oriented, like fresh produce.
    primaryText: '#FFFFFF',
    backgroundImage: `https://picsum.photos/seed/marketplace/1920/1080`,
  },
  [UserRole.Seller]: {
    primary: '#228B22', // Verdant Green: A vibrant green for fresh produce and sales growth.
    accent: '#FFD700',  // Sunny Yellow: Represents ripe crops, optimism, and attracts attention.
    primaryText: '#FFFFFF',
    backgroundImage: `https://picsum.photos/seed/produce/1920/1080`,
  },
  [UserRole.TransportProvider]: {
    primary: '#71797E', // Steel Gray: Represents machinery, roads, and reliability.
    accent: '#FEEA00',  // Safety Yellow: Associated with transport and high visibility.
    primaryText: '#FFFFFF',
    backgroundImage: `https://picsum.photos/seed/highway/1920/1080`,
  },
  [UserRole.BankFinancial]: {
    primary: '#000080', // Navy Blue: A classic corporate color for trust and security.
    accent: '#FFBF00',  // Gold: Relates to wealth, assets, and high-value transactions.
    primaryText: '#FFFFFF',
    backgroundImage: `https://picsum.photos/seed/finance/1920/1080`,
  },
  [UserRole.DataAnalyst]: {
    primary: '#36454F', // Charcoal: A modern, tech-focused color for data analysis.
    accent: '#008080',  // Teal: A sophisticated color for intelligence and data visualization.
    primaryText: '#FFFFFF',
    backgroundImage: `https://picsum.photos/seed/dataviz/1920/1080`,
  },
};