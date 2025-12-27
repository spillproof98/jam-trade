"use client";

import { useState } from "react";
import { useAuth } from "@/hooks/useAuth";

export default function LoginForm({
  onSwitchSignup,
  onForgot,
}: {
  onSwitchSignup: () => void;
  onForgot: () => void;
}) {
  const { login } = useAuth();

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  const handleLogin = async () => {
    if (!email || !password) {
      setError("Please enter email and password");
      return;
    }

    try {
      setLoading(true);
      setError("");
      await login(email, password);
    } catch {
      setError("Invalid email or password");
    } finally {
      setLoading(false);
    }
  };

  return (
    <>
      <h2 className="text-lg font-semibold mb-4">Login</h2>

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
        className="w-full mb-2 rounded-md bg-background border border-border px-3 py-2"
      />

      {error && <p className="mb-2 text-sm text-danger">{error}</p>}

      <button
        onClick={handleLogin}
        disabled={loading}
        className="w-full bg-primary hover:bg-primaryHover py-2 rounded-md font-medium disabled:opacity-50"
      >
        {loading ? "Logging in..." : "Login"}
      </button>

      <button
        onClick={onForgot}
        className="mt-3 block w-full text-xs text-textMuted hover:text-textPrimary"
      >
        Forgot password?
      </button>

      <p className="mt-4 text-sm text-textMuted">
        Don’t have an account?{" "}
        <button
          onClick={onSwitchSignup}
          className="text-textPrimary underline"
        >
          Sign up
        </button>
      </p>
    </>
  );
}
