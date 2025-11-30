import { api } from './api';
import type { Journey, CreateJourneyFormData } from '../types';

interface SearchJourneysParams {
  departureCity?: string;
  arrivalCity?: string;
  date?: string;
  minWeight?: number;
}

export const journeyService = {
  async createJourney(data: CreateJourneyFormData, token: string): Promise<Journey> {
    return api.post<Journey>('/journeys', data, token);
  },

  async getMyJourneys(token: string): Promise<Journey[]> {
    return api.get<Journey[]>('/journeys/my-journeys', token);
  },

  async searchJourneys(params: SearchJourneysParams): Promise<Journey[]> {
    const queryString = new URLSearchParams(
      params as Record<string, string>
    ).toString();
    return api.get<Journey[]>(`/journeys/search?${queryString}`);
  },

  async getJourneyById(id: string): Promise<Journey> {
    return api.get<Journey>(`/journeys/${id}`);
  },

  async updateJourney(
    id: string,
    data: Partial<CreateJourneyFormData>,
    token: string
  ): Promise<Journey> {
    return api.put<Journey>(`/journeys/${id}`, data, token);
  },

  async cancelJourney(id: string, token: string): Promise<Journey> {
    return api.delete<Journey>(`/journeys/${id}`, token);
  },

  async acceptParcel(journeyId: string, parcelId: string, token: string): Promise<Journey> {
    return api.post<Journey>(
      `/journeys/${journeyId}/accept-parcel`,
      { parcelId },
      token
    );
  },

  async rejectParcel(journeyId: string, parcelId: string, token: string): Promise<Journey> {
    return api.post<Journey>(
      `/journeys/${journeyId}/reject-parcel`,
      { parcelId },
      token
    );
  },
};
