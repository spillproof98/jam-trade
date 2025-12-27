"use client";

export default function FilterModal({
  open,
  onClose,
}: {
  open: boolean;
  onClose: () => void;
}) {
  if (!open) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/60">
      <div className="w-full max-w-sm rounded-xl bg-surface border border-border p-5">
        <h3 className="font-semibold mb-4">Filters</h3>

        <label className="block text-sm mb-2">
          Min Liquidity
        </label>
        <input className="w-full mb-4 rounded-md bg-background border border-border px-3 py-2 text-sm" />

        <button className="w-full bg-primary py-2 rounded-md">
          Apply Filters
        </button>

        <button
          onClick={onClose}
          className="mt-3 w-full text-xs text-textMuted hover:text-textPrimary"
        >
          Cancel
        </button>
      </div>
    </div>
  );
}
