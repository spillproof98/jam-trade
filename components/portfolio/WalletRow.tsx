"use client";

import { Asset, useWalletStore } from "@/store/walletSlice";
import WalletActions from "./WalletActions";

export default function WalletRow({
  asset,
  onDeposit,
}: {
  asset: Asset;
  onDeposit: (asset: Asset) => void;
}) {
  const balance = useWalletStore((s) => s.balances[asset]);

  return (
    <div className="flex items-center justify-between rounded-lg bg-background border border-border px-3 py-2 text-sm">
      <span className="font-medium">{asset}</span>

      <span className="font-mono font-semibold">
        {balance.toFixed(2)}
      </span>

      <WalletActions
        asset={asset}
        onDeposit={() => onDeposit(asset)}
      />
    </div>
  );
}
