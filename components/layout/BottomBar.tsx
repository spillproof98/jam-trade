"use client";

import { useWalletStore } from "@/store/walletSlice";
import { useTradingStore } from "@/store/tradeSlice";

export default function BottomBar() {
  const usd = useWalletStore((s) => s.balances.USD);
  const pnl = useTradingStore((s) => s.totalPnL);

  return (
    <div className="fixed bottom-0 left-0 right-0 z-30 h-10 bg-surface border-t border-border">
      <div className="flex h-full items-center justify-between px-4 text-xs">
        <span className="font-mono">
          Wallet: ${usd.toFixed(2)}
        </span>

        <span
          className={pnl >= 0 ? "text-success" : "text-danger"}
        >
          PnL: ${pnl.toFixed(2)}
        </span>

        <span className="text-success">Network: Stable</span>
      </div>
    </div>
  );
}
