"use client";

import Link from "next/link";
import { useState } from "react";
import Logo from "@/components/branding/Logo";
import { useAuthStore } from "@/store/authSlice";
import { useWalletStore } from "@/store/walletSlice";
import DepositModal from "@/components/modals/DepositModal";

export default function Navbar() {
  const user = useAuthStore((s) => s.user);
  const logout = useAuthStore((s) => s.logout);
  const usd = useWalletStore((s) => s.balances.USD);

  const [showDeposit, setShowDeposit] = useState(false);

  if (!user) return null;

  return (
    <>
      <header className="fixed top-0 left-0 right-0 z-30 h-14 bg-surface border-b border-border">
        <div className="flex h-full items-center justify-between px-6">
          
          {/* Left */}
          <div className="flex items-center gap-8">
            <Logo />
            <nav className="hidden md:flex gap-6 text-sm text-textSecondary">
              <Link href="/portfolio">Portfolio</Link>
              <Link href="/discover">Discover</Link>
              <Link href="/pulse">Pulse</Link>
              <Link href="/trackers">Trackers</Link>
              <Link href="/perpetuals">Perpetuals</Link>
              <Link href="/rewards">Rewards</Link>
              
            </nav>
          </div>

          {/* Right */}
          <div className="flex items-center gap-4 text-sm">
            <span className="font-mono text-textSecondary">
              ${usd.toFixed(2)}
            </span>

            <div className="flex items-center gap-2">
              <div className="h-8 w-8 rounded-full bg-primary flex items-center justify-center text-sm font-semibold">
                {user.email[0].toUpperCase()}
              </div>
            </div>

            <button
              onClick={() => setShowDeposit(true)}
              className="rounded-md bg-primary px-4 py-1.5 font-medium"
            >
              Deposit
            </button>

            <button
              onClick={logout}
              className="text-textMuted hover:text-danger"
            >
              Logout
            </button>
          </div>
        </div>
      </header>

     <DepositModal
  open={showDeposit}
  asset="USD"
  onClose={() => setShowDeposit(false)}
/>

    </>
  );
}
