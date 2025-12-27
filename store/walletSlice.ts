import { create } from "zustand";
import { persist } from "zustand/middleware";

export type Asset = "USD" | "SOL" | "ETH";

type WalletState = {
  balances: Record<Asset, number>;
  deposit: (asset: Asset, amount: number) => void;
  withdraw: (asset: Asset, amount: number) => boolean;
};

export const useWalletStore = create<WalletState>()(
  persist(
    (set, get) => ({
      balances: {
        USD: 0,
        SOL: 0,
        ETH: 0,
      },

      deposit: (asset, amount) =>
        set((state) => ({
          balances: {
            ...state.balances,
            [asset]: state.balances[asset] + amount,
          },
        })),

      withdraw: (asset, amount) => {
        const current = get().balances[asset];
        if (current < amount) return false;

        set({
          balances: {
            ...get().balances,
            [asset]: current - amount,
          },
        });

        return true;
      },
    }),
    {
      name: "jam-wallet",
    }
  )
);
