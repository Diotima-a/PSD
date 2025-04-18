
export type UserRole = 'client' | 'provider' | 'agent' | 'admin';

export interface User {
  id: string;
  name: string;
  email: string;
  role: UserRole;
  profileImage?: string;
}

export interface ServiceCategory {
  id: string;
  name: string;
  icon: string;
  description: string;
}

export interface Provider {
  id: string;
  name: string;
  logo?: string;
  description: string;
  categories: string[];
  rating: number;
  reviewCount: number;
}

export interface Agent {
  id: string;
  name: string;
  providerId: string;
  profileImage?: string;
  specialties: string[];
}

export interface ServiceRequest {
  id: string;
  clientId: string;
  categoryId: string;
  description: string;
  address: string;
  requestDate: Date;
  desiredDate: Date;
  status: 'pending' | 'assigned' | 'in-progress' | 'completed' | 'cancelled';
  providerId?: string;
  agentId?: string;
}

export interface Review {
  id: string;
  serviceRequestId: string;
  clientId: string;
  providerId: string;
  agentId: string;
  rating: number;
  comment: string;
  date: Date;
}
