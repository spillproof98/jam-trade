"use client";

import React, { useEffect } from "react";
import { useRouter, usePathname } from "next/navigation";
import { useAuthStore } from "@/store/authSlice";

import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import BottomBar from "@/components/layout/BottomBar";
import BackgroundVideo from "@/components/background/BackgroundVideo";

export default function AppLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const router = useRouter();
  const pathname = usePathname();
  const user = useAuthStore((state) => state.user);

  const isAuthRoute =
    pathname.startsWith("/login") ||
    pathname.startsWith("/signup") ||
    pathname.startsWith("/forgot-password");

  useEffect(() => {
    if (!user && !isAuthRoute) {
      router.replace("/login");
    }
  }, [user, isAuthRoute, router]);

  // Prevent UI flash ONLY for protected routes
  if (!user && !isAuthRoute) return null;

  return (
    <>
      <BackgroundVideo />
      <Navbar />

      <main className="relative z-10 min-h-screen pt-14 pb-12">
        {children}
      </main>

      <BottomBar />
      <Footer />
    </>
  );
}
