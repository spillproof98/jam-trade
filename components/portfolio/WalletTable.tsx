"use client";

import { useState } from "react";
import WalletRow from "./WalletRow";
import DepositModal from "@/components/modals/DepositModal";
import { Asset } from "@/store/walletSlice";

export default function WalletTable() {
  const [depositAsset, setDepositAsset] = useState<Asset | null>(null);

  return (
    <>
      <div className="rounded-xl bg-surface border border-border p-4">
        <h3 className="text-sm font-semibold mb-3">
          Wallet Balances
        </h3>

        <div className="space-y-2">
          <WalletRow asset="USD" onDeposit={setDepositAsset} />
          <WalletRow asset="SOL" onDeposit={setDepositAsset} />
          <WalletRow asset="ETH" onDeposit={setDepositAsset} />
        </div>
      </div>

      <DepositModal
        open={!!depositAsset}
        asset={depositAsset}
        onClose={() => setDepositAsset(null)}
      />
    </>
  );
}
