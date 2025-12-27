import { InputHTMLAttributes } from "react";

export default function Input({
  className = "",
  ...props
}: InputHTMLAttributes<HTMLInputElement>) {
  return (
    <input
      {...props}
      className={`rounded-md bg-background border border-border px-3 py-2 text-sm outline-none focus:border-primary ${className}`}
    />
  );
}
