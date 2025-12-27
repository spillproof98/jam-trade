import { create } from "zustand";

type PulseToken = {
  name: string;
  liquidity: number;
};

type PulseState = {
  newPairs: PulseToken[];
  finalStretch: PulseToken[];
  migrated: PulseToken[];
  setPulse: (data: Partial<PulseState>) => void;
};

export const usePulseStore = create<PulseState>((set) => ({
  newPairs: [],
  finalStretch: [],
  migrated: [],

  setPulse: (data) =>
    set((state) => ({
      ...state,
      ...data,
    })),
}));
