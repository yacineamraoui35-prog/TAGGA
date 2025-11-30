import { create } from 'zustand';
import type { Parcel, Journey } from '../types';

interface ParcelState {
  currentParcel: Partial<Parcel> | null;
  selectedJourney: Journey | null;
  availableJourneys: Journey[];
  setCurrentParcel: (parcel: Partial<Parcel>) => void;
  setSelectedJourney: (journey: Journey | null) => void;
  setAvailableJourneys: (journeys: Journey[]) => void;
  clearParcelData: () => void;
}

export const useParcelStore = create<ParcelState>((set) => ({
  currentParcel: null,
  selectedJourney: null,
  availableJourneys: [],
  setCurrentParcel: (parcel) => set({ currentParcel: parcel }),
  setSelectedJourney: (journey) => set({ selectedJourney: journey }),
  setAvailableJourneys: (journeys) => set({ availableJourneys: journeys }),
  clearParcelData: () =>
    set({
      currentParcel: null,
      selectedJourney: null,
      availableJourneys: [],
    }),
}));
