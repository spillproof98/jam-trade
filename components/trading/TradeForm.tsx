"use client";

export default function TradeForm() {
  return (
    <div className="rounded-xl bg-surface border border-border p-4">
      <h3 className="text-sm font-semibold mb-3">Trade</h3>

      <input
        placeholder="Amount"
        className="w-full mb-3 rounded-md bg-background border border-border px-3 py-2 text-sm"
      />

      <button className="w-full bg-success py-2 rounded-md mb-2 text-sm font-medium">
        Long
      </button>

      <button className="w-full bg-danger py-2 rounded-md text-sm font-medium">
        Short
      </button>
    </div>
  );
}
