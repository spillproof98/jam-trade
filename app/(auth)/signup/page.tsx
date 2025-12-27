"use client";

import Link from "next/link";

export default function SignupPage() {
  return (
    <>
      <h1 className="text-xl font-semibold mb-6">Sign Up</h1>

      <input
        type="email"
        placeholder="Email"
        className="w-full mb-3 rounded-md bg-background border border-border px-3 py-2 outline-none focus:border-primary"
      />

      <input
        type="password"
        placeholder="Password"
        className="w-full mb-3 rounded-md bg-background border border-border px-3 py-2 outline-none focus:border-primary"
      />

      <input
        type="password"
        placeholder="Confirm Password"
        className="w-full mb-4 rounded-md bg-background border border-border px-3 py-2 outline-none focus:border-primary"
      />

      <button className="w-full rounded-md bg-primary hover:bg-primaryHover py-2 font-medium">
        Create Account
      </button>

      <p className="mt-4 text-sm text-textMuted">
        Already have an account?{" "}
        <Link href="/login" className="text-textPrimary hover:underline">
          Login
        </Link>
      </p>
    </>
  );
}
