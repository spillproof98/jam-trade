import { create } from "zustand";


export type Position = {
  id: string;
  symbol: string; 
  size: number; 
  entryPrice: number;
  currentPrice: number;
  pnl: number; 
};

type TradingState = {
  positions: Position[];
  totalPnL: number;

  openPosition: (
    symbol: string,
    size: number,
    entryPrice: number
  ) => void;

  updatePrice: (
    id: string,
    newPrice: number
  ) => void;

  closePosition: (id: string) => void;

  clearAll: () => void;
};

export const useTradingStore = create<TradingState>((set) => ({
  positions: [],
  totalPnL: 0,

  openPosition: (symbol, size, entryPrice) =>
    set((state) => {
      const position: Position = {
        id: crypto.randomUUID(),
        symbol,
        size,
        entryPrice,
        currentPrice: entryPrice,
        pnl: 0,
      };

      return {
        positions: [...state.positions, position],
        totalPnL: state.totalPnL,
      };
    }),


  updatePrice: (id, newPrice) =>
    set((state) => {
      const positions = state.positions.map((p) => {
        if (p.id !== id) return p;

        const pnl =
          (newPrice - p.entryPrice) * p.size;

        return {
          ...p,
          currentPrice: newPrice,
          pnl,
        };
      });

      const totalPnL = positions.reduce(
        (sum, p) => sum + p.pnl,
        0
      );

      return { positions, totalPnL };
    }),


  closePosition: (id) =>
    set((state) => {
      const positions = state.positions.filter(
        (p) => p.id !== id
      );

      const totalPnL = positions.reduce(
        (sum, p) => sum + p.pnl,
        0
      );

      return { positions, totalPnL };
    }),

  clearAll: () => ({
    positions: [],
    totalPnL: 0,
  }),
}));
