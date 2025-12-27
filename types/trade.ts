export type Trade = {
  symbol: string;
  side: "long" | "short";
  size: number;
  leverage: number;
};
