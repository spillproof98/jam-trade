"use client";

import { useState, useEffect } from "react";
import { useRouter } from "next/navigation";
import AuthModal from "@/components/auth/AuthModal";
import { useAuthStore } from "@/store/authSlice";

export default function LoginPage() {
  const router = useRouter();
  const user = useAuthStore((s) => s.user);

  const [open, setOpen] = useState(true);

  // If already logged in, go inside app
  useEffect(() => {
    if (user) {
      router.replace("/discover");
    }
  }, [user, router]);

  return (
    <AuthModal
      open={open}
      onClose={() => {
        setOpen(false);
        router.replace("/");
      }}
    />
  );
}
