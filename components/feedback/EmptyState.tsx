export default function EmptyState({
  title,
  description,
}: {
  title: string;
  description?: string;
}) {
  return (
    <div className="rounded-xl border border-border bg-surface p-6 text-center">
      <h3 className="font-medium mb-1">{title}</h3>
      {description && (
        <p className="text-sm text-textMuted">{description}</p>
      )}
    </div>
  );
}
