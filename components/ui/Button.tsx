import { ButtonHTMLAttributes } from "react";

export default function Button({
  className = "",
  ...props
}: ButtonHTMLAttributes<HTMLButtonElement>) {
  return (
    <button
      {...props}
      className={`rounded-md bg-primary hover:bg-primaryHover px-4 py-2 text-sm font-medium ${className}`}
    />
  );
}
