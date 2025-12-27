"use client";

import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import { useAuthStore } from "@/store/authSlice";

import LoginForm from "./LoginForm";
import SignupForm from "./SignupForm";
import ForgotPasswordForm from "./ForgotPasswordForm";

export default function AuthModal({
  open,
  onClose,
}: {
  open: boolean;
  onClose: () => void;
}) {
  const router = useRouter();
  const user = useAuthStore((state) => state.user);

  const [mode, setMode] = useState<"login" | "signup" | "forgot">("login");

  // Auto-enter app after auth
  useEffect(() => {
    if (user && open) {
      onClose();
      router.replace("/discover");
    }
  }, [user, open, onClose, router]);

  if (!open) return null;

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center bg-black/60 backdrop-blur-sm"
      onClick={onClose}
    >
      <div
        className="w-full max-w-md rounded-xl bg-surface border border-border p-6 shadow-2xl animate-modal"
        onClick={(e) => e.stopPropagation()}
      >
        {mode === "login" && (
          <LoginForm
            onSwitchSignup={() => setMode("signup")}
            onForgot={() => setMode("forgot")}
          />
        )}

        {mode === "signup" && <SignupForm onSwitch={() => setMode("login")} />}

        {mode === "forgot" && (
          <ForgotPasswordForm onBack={() => setMode("login")} />
        )}

        <button
          onClick={onClose}
          className="mt-4 w-full text-xs text-textMuted hover:text-textPrimary"
        >
          Close
        </button>
      </div>
    </div>
  );
}
