"use client";

export default function SuccessModal({
  open,
  message,
  onClose,
}: {
  open: boolean;
  message: string;
  onClose: () => void;
}) {
  if (!open) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/60">
      <div className="w-full max-w-sm rounded-xl bg-surface border border-border p-5 text-center">
        <h3 className="text-lg font-semibold text-success mb-2">
          Success
        </h3>

        <p className="text-sm text-textMuted mb-4">
          {message}
        </p>

        <button
          onClick={onClose}
          className="w-full bg-primary py-2 rounded-md"
        >
          Close
        </button>
      </div>
    </div>
  );
}
