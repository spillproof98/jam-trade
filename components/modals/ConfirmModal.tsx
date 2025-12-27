"use client";

export default function ConfirmModal({
  open,
  title,
  message,
  onConfirm,
  onCancel,
}: {
  open: boolean;
  title: string;
  message: string;
  onConfirm: () => void;
  onCancel: () => void;
}) {
  if (!open) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/60">
      <div className="w-full max-w-sm rounded-xl bg-surface border border-border p-5">
        <h3 className="font-semibold mb-2">{title}</h3>
        <p className="text-sm text-textMuted mb-4">{message}</p>

        <div className="flex gap-3">
          <button
            onClick={onConfirm}
            className="flex-1 bg-primary py-2 rounded-md"
          >
            Confirm
          </button>
          <button
            onClick={onCancel}
            className="flex-1 bg-background border border-border py-2 rounded-md"
          >
            Cancel
          </button>
        </div>
      </div>
    </div>
  );
}
