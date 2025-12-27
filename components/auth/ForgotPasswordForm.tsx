"use client";

import { useState } from "react";

export default function ForgotPasswordForm({
  onBack,
}: {
  onBack: () => void;
}) {
  const [email, setEmail] = useState("");
  const [loading, setLoading] = useState(false);
  const [message, setMessage] = useState("");

  const handleReset = async () => {
    if (!email) {
      setMessage("Please enter your email");
      return;
    }

    try {
      setLoading(true);
      setMessage("");
      // later: call /api/auth/forgot-password
      setMessage("Reset link sent to your email");
    } catch {
      setMessage("Failed to send reset link");
    } finally {
      setLoading(false);
    }
  };

  return (
    <>
      <h2 className="text-lg font-semibold mb-4">Reset Password</h2>

      <input
        type="email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        placeholder="Email"
        className="w-full mb-3 rounded-md bg-background border border-border px-3 py-2"
      />

      {message && (
        <p className="mb-2 text-sm text-textMuted">{message}</p>
      )}

      <button
        onClick={handleReset}
        disabled={loading}
        className="w-full bg-primary hover:bg-primaryHover py-2 rounded-md font-medium disabled:opacity-50"
      >
        {loading ? "Sending..." : "Send Reset Link"}
      </button>

      <button
        onClick={onBack}
        className="mt-4 block w-full text-xs text-textMuted hover:text-textPrimary"
      >
        Back to login
      </button>
    </>
  );
}
