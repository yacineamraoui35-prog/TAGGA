import { api } from './api';
import type { Parcel, SendParcelFormData } from '../types';

export const parcelService = {
  async createParcel(data: SendParcelFormData, token: string): Promise<Parcel> {
    return api.post<Parcel>('/parcels', data, token);
  },

  async getMyParcels(token: string): Promise<Parcel[]> {
    return api.get<Parcel[]>('/parcels/my-parcels', token);
  },

  async getParcelById(id: string, token: string): Promise<Parcel> {
    return api.get<Parcel>(`/parcels/${id}`, token);
  },

  async updateParcelStatus(
    id: string,
    status: Parcel['status'],
    token: string
  ): Promise<Parcel> {
    return api.put<Parcel>(`/parcels/${id}/status`, { status }, token);
  },

  async cancelParcel(id: string, token: string): Promise<Parcel> {
    return api.delete<Parcel>(`/parcels/${id}`, token);
  },

  async matchParcelWithJourney(
    parcelId: string,
    journeyId: string,
    token: string
  ): Promise<Parcel> {
    return api.post<Parcel>(
      `/parcels/${parcelId}/match`,
      { journeyId },
      token
    );
  },
};
