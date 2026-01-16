
// Fix: Import React to provide the namespace for ReactNode
import React from 'react';

export interface Property {
  id: string;
  title: string;
  price: string;
  location: string;
  type: string;
  image: string;
  beds: number;
  area: string;
}

export interface Service {
  id: string;
  title: string;
  description: string;
  icon: React.ReactNode;
}

export enum AppSection {
  HOME = 'home',
  PROPERTIES = 'properties',
  SERVICES = 'services',
  CONCIERGE = 'concierge'
}
