"use client";

import WalletTable from "@/components/portfolio/WalletTable";
import DragDropArea from "@/components/portfolio/DragDropArea";

export default function PortfolioPage() {
  return (
    <div className="relative z-10 max-w-4xl mx-auto px-6 py-8 space-y-6">
      <h1 className="text-xl font-semibold">Portfolio</h1>

      <p className="text-sm text-textMuted">
        View and manage your wallet balances
      </p>

      <WalletTable />

      <DragDropArea />
    </div>
  );
}
