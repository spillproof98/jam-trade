"use client";

export default function Switch({
  enabled,
  onToggle,
}: {
  enabled: boolean;
  onToggle: () => void;
}) {
  return (
    <button
      onClick={onToggle}
      className={`w-10 h-5 rounded-full ${
        enabled ? "bg-success" : "bg-border"
      }`}
    >
      <div
        className={`h-4 w-4 bg-white rounded-full transition ${
          enabled ? "translate-x-5" : "translate-x-1"
        }`}
      />
    </button>
  );
}
