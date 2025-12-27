"use client";

import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import AuthModal from "@/components/auth/AuthModal";
import { useAuthStore } from "@/store/authSlice";

export default function ForgotPasswordPage() {
  const router = useRouter();
  const user = useAuthStore((s) => s.user);

  const [open, setOpen] = useState(true);

  // If logged in, go inside app
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
        router.replace("/login");
      }}
    />
  );
}
