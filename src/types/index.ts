// User types
export type UserRole = 'sender' | 'traveler' | 'both';

export interface User {
  id: string;
  email: string;
  firstName: string;
  lastName: string;
  phone: string;
  role: UserRole;
  avatar?: string;
  verified: boolean;
  createdAt: Date;
}

// Journey/Trip types
export interface Location {
  address: string;
  city: string;
  postalCode: string;
  country: string;
  lat: number;
  lng: number;
}

export interface Journey {
  id: string;
  travelerId: string;
  traveler?: User;
  departure: Location;
  arrival: Location;
  departureDate: Date;
  arrivalDate?: Date;
  availableWeight: number; // in kg
  availableSize: string; // 'small' | 'medium' | 'large'
  constraints?: string;
  pricePerKg?: number;
  status: 'available' | 'booked' | 'completed' | 'cancelled';
  createdAt: Date;
}

// Parcel/Shipment types
export type ParcelSize = 'letter' | 'small' | 'medium' | 'large';

export interface Parcel {
  id: string;
  senderId: string;
  sender?: User;
  journeyId?: string;
  journey?: Journey;
  departure: Location;
  arrival: Location;
  desiredDate: Date;
  parcelType: 'letter' | 'package' | 'document';
  size: ParcelSize;
  weight: number; // in kg
  description: string;
  fragile: boolean;
  price: number; // minimum 30€
  status: 'pending' | 'matched' | 'in_transit' | 'delivered' | 'cancelled';
  createdAt: Date;
  deliveredAt?: Date;
}

// Transaction types
export type TransactionStatus = 'pending' | 'captured' | 'released' | 'refunded' | 'failed';

export interface Transaction {
  id: string;
  parcelId: string;
  senderId: string;
  travelerId: string;
  amount: number;
  commission: number; // 20% of amount
  travelerAmount: number; // amount - commission
  status: TransactionStatus;
  stripePaymentIntentId?: string;
  createdAt: Date;
  completedAt?: Date;
}

// Message types (for future V2)
export interface Message {
  id: string;
  senderId: string;
  receiverId: string;
  parcelId?: string;
  content: string;
  read: boolean;
  createdAt: Date;
}

// Auth types
export interface LoginCredentials {
  email: string;
  password: string;
}

export interface RegisterData {
  email: string;
  password: string;
  firstName: string;
  lastName: string;
  phone: string;
  role: UserRole;
}

// Form types
export interface SendParcelFormData {
  departure: {
    address: string;
    city: string;
    postalCode: string;
  };
  arrival: {
    address: string;
    city: string;
    postalCode: string;
  };
  desiredDate: string;
  parcelType: 'letter' | 'package' | 'document';
  size: ParcelSize;
  weight: number;
  description: string;
  fragile: boolean;
}

export interface CreateJourneyFormData {
  departure: {
    address: string;
    city: string;
    postalCode: string;
  };
  arrival: {
    address: string;
    city: string;
    postalCode: string;
  };
  departureDate: string;
  arrivalDate?: string;
  availableWeight: number;
  availableSize: string;
  constraints?: string;
}
