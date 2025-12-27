"use client";

import { useEffect } from "react";
import { useRouter } from "next/navigation";
import { useAuthStore } from "@/store/authSlice";

import BackgroundVideo from "@/components/background/BackgroundVideo";
import Logo from "@/components/branding/Logo";

export default function AuthLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const router = useRouter();
  const user = useAuthStore((state) => state.user);

  // Redirect authenticated users into the app
  useEffect(() => {
    if (user) {
      router.replace("/discover");
    }
  }, [user, router]);

  return (
    <div className="relative min-h-screen">
      {/* Background video */}
      <BackgroundVideo />

      {/* Centered auth container */}
      <div className="relative z-10 flex min-h-screen items-center justify-center">
        <div className="w-full max-w-md rounded-xl bg-surface/90 border border-border p-6 shadow-2xl backdrop-blur-md">
          
          {/* Logo */}
          <div className="mb-6 flex justify-center">
            <Logo />
          </div>

          {children}
        </div>
      </div>
    </div>
  );
}
