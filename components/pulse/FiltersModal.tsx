"use client";

export default function FiltersModal({
  open,
  onClose,
}: {
  open: boolean;
  onClose: () => void;
}) {
  if (!open) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/60">
      <div className="w-full max-w-sm rounded-xl bg-surface p-4 border border-border">
        <h3 className="font-semibold mb-3">Filters</h3>

        <button
          onClick={onClose}
          className="mt-4 w-full bg-primary py-2 rounded-md"
        >
          Apply
        </button>
      </div>
    </div>
  );
}
