import { api } from './api';
import type { LoginCredentials, RegisterData, User } from '../types';

interface AuthResponse {
  user: User;
  token: string;
}

export const authService = {
  async login(credentials: LoginCredentials): Promise<AuthResponse> {
    return api.post<AuthResponse>('/auth/login', credentials);
  },

  async register(data: RegisterData): Promise<AuthResponse> {
    return api.post<AuthResponse>('/auth/register', data);
  },

  async getCurrentUser(token: string): Promise<User> {
    return api.get<User>('/auth/me', token);
  },

  async updateProfile(data: Partial<User>, token: string): Promise<User> {
    return api.put<User>('/auth/profile', data, token);
  },

  async logout(token: string): Promise<void> {
    return api.post<void>('/auth/logout', {}, token);
  },
};
