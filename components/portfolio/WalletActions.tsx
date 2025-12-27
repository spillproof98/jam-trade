"use client";

import { Asset } from "@/store/walletSlice";

export default function WalletActions({
  asset,
  onDeposit,
}: {
  asset: Asset;
  onDeposit: () => void;
}) {
  return (
    <div className="flex gap-2 text-xs">
      <button
        onClick={onDeposit}
        className="text-primary hover:underline"
      >
        Deposit
      </button>

      <button
        className="text-textMuted hover:text-textPrimary"
        disabled
      >
        Withdraw
      </button>
    </div>
  );
}
