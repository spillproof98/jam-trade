"use client";

import { useEffect } from "react";

export default function Toast({
  message,
  type = "info",
  onClose,
}: {
  message: string;
  type?: "info" | "success" | "error";
  onClose: () => void;
}) {
  useEffect(() => {
    const timer = setTimeout(onClose, 3000);
    return () => clearTimeout(timer);
  }, [onClose]);

  const color =
    type === "success"
      ? "bg-success"
      : type === "error"
      ? "bg-danger"
      : "bg-surface";

  return (
    <div className={`fixed top-4 right-4 z-50 rounded-md px-4 py-2 text-sm ${color}`}>
      {message}
    </div>
  );
}
