"use client";

import { useState } from "react";
import { useAuth } from "@/hooks/useAuth";

export default function SignupForm({ onSwitch }: { onSwitch: () => void }) {
  const { signup } = useAuth();

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  const handleSignup = async () => {
    if (!email || !password || !confirmPassword) {
      setError("All fields are required");
      return;
    }

    if (password !== confirmPassword) {
      setError("Passwords do not match");
      return;
    }

    try {
      setLoading(true);
      setError("");
      try {
        setLoading(true);
        setError("");
        await signup(email, password);

        // ✅ signup success → go to login screen
        onSwitch();
      } catch {
        setError("Failed to create account");
      } finally {
        setLoading(false);
      }

      // ✅ success → AuthModal will auto-close & redirect
    } catch (err) {
      setError("Failed to create account");
    } finally {
      setLoading(false);
    }
  };

  return (
    <>
      <h2 className="text-lg font-semibold mb-4">Create Account</h2>

      <input
        type="email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        placeholder="Email"
        className="w-full mb-3 rounded-md bg-background border border-border px-3 py-2"
      />

      <input
        type="password"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
        placeholder="Password"
        className="w-full mb-3 rounded-md bg-background border border-border px-3 py-2"
      />

      <input
        type="password"
        value={confirmPassword}
        onChange={(e) => setConfirmPassword(e.target.value)}
        placeholder="Confirm Password"
        className="w-full mb-2 rounded-md bg-background border border-border px-3 py-2"
      />

      {error && <p className="mb-2 text-sm text-danger">{error}</p>}

      <button
        onClick={handleSignup}
        disabled={loading}
        className="w-full bg-primary hover:bg-primaryHover py-2 rounded-md font-medium disabled:opacity-50"
      >
        {loading ? "Creating account..." : "Create Account"}
      </button>

      <p className="mt-4 text-sm text-textMuted">
        Already have an account?{" "}
        <button onClick={onSwitch} className="text-textPrimary underline">
          Login
        </button>
      </p>
    </>
  );
}
