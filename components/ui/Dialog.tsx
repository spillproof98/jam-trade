"use client";

export default function Dialog({
  open,
  children,
}: {
  open: boolean;
  children: React.ReactNode;
}) {
  if (!open) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/60">
      <div className="rounded-xl bg-surface border border-border p-6">
        {children}
      </div>
    </div>
  );
}
