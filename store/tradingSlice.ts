import { create } from "zustand";

export type Position = {
  id: string;
  symbol: string;
  pnl: number; // unrealized or realized
};

type TradingState = {
  positions: Position[];
  totalPnL: number;

  addPosition: (symbol: string, pnl: number) => void;
  updatePositionPnL: (id: string, pnl: number) => void;
  closePosition: (id: string) => void;
  clearPositions: () => void;
};

export const useTradingStore = create<TradingState>((set) => ({
  positions: [],
  totalPnL: 0,

  addPosition: (symbol, pnl) =>
    set((state) => {
      const position = {
        id: crypto.randomUUID(),
        symbol,
        pnl,
      };

      return {
        positions: [...state.positions, position],
        totalPnL: state.totalPnL + pnl,
      };
    }),

  updatePositionPnL: (id, pnl) =>
    set((state) => {
      const positions = state.positions.map((p) =>
        p.id === id ? { ...p, pnl } : p
      );

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

  clearPositions: () => ({
    positions: [],
    totalPnL: 0,
  }),
}));
