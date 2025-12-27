"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";

import { useAuthStore } from "@/store/authSlice";
import { useWalletStore } from "@/store/walletSlice";
import DepositModal from "@/components/modals/DepositModal";

export default function MobileNav() {
  const pathname = usePathname();
  const user = useAuthStore((s) => s.user);
  const usd = useWalletStore((s) => s.balances.USD);

  const [showDeposit, setShowDeposit] = useState(false);

  if (!user) return null;

  const linkClass = (href: string) =>
    `flex flex-col items-center gap-1 ${
      pathname === href
        ? "text-primary font-medium"
        : "text-textSecondary"
    }`;

  return (
    <>
      <nav className="fixed bottom-0 left-0 right-0 z-40 bg-surface border-t border-border md:hidden">
        <div className="flex justify-around py-2 text-xs">
          <Link href="/discover" className={linkClass("/discover")}>
            Discover
          </Link>

          <Link href="/pulse" className={linkClass("/pulse")}>
            Pulse
          </Link>

          <button
            onClick={() => setShowDeposit(true)}
            className="flex flex-col items-center gap-1 text-primary"
          >
            +$
            <span className="text-[10px] font-mono">${usd.toFixed(2)}</span>
          </button>

          <Link href="/perpetuals" className={linkClass("/perpetuals")}>
            Trade
          </Link>

          <Link href="/portfolio" className={linkClass("/portfolio")}>
            Wallet
          </Link>
        </div>
      </nav>

      <DepositModal
        open={showDeposit}
        asset="USD"
        onClose={() => setShowDeposit(false)}
      />
    </>
  );
}
