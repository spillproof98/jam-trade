import { create } from "zustand";

type UIState = {
  depositOpen: boolean;
  setDepositOpen: (open: boolean) => void;
};

export const useUIStore = create<UIState>((set) => ({
  depositOpen: false,
  setDepositOpen: (open) => set({ depositOpen: open }),
}));
