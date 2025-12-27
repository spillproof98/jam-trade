"use client";

import { useState } from "react";
import { Asset, useWalletStore } from "@/store/walletSlice";

export default function DepositModal({
  open,
  asset,
  onClose,
}: {
  open: boolean;
  asset: Asset | null;
  onClose: () => void;
}) {
  const deposit = useWalletStore((s) => s.deposit);
  const [amount, setAmount] = useState("");

  if (!open || !asset) return null;

  const handleDeposit = () => {
    const value = Number(amount);
    if (!value || value <= 0) return;

    deposit(asset, value);
    setAmount("");
    onClose();
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/60 backdrop-blur-sm">
      <div className="w-full max-w-sm rounded-xl bg-surface border border-border p-6 shadow-xl animate-modal">
        <h3 className="text-lg font-semibold mb-4">
          Deposit {asset}
        </h3>

        <input
          type="number"
          placeholder={`Amount in ${asset}`}
          value={amount}
          onChange={(e) => setAmount(e.target.value)}
          className="w-full mb-4 rounded-md bg-background border border-border px-3 py-2"
        />

        <button
          onClick={handleDeposit}
          className="w-full bg-primary py-2 rounded-md font-medium"
        >
          Deposit
        </button>

        <button
          onClick={onClose}
          className="mt-3 w-full text-xs text-textMuted hover:text-textPrimary"
        >
          Cancel
        </button>
      </div>
    </div>
  );
}
