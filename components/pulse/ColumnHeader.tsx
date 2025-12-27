export default function ColumnHeader({ title }: { title: string }) {
  return (
    <div className="flex items-center justify-between px-4 py-3 border-b border-border">
      <h3 className="text-sm font-semibold">{title}</h3>
      <button className="text-xs text-textMuted hover:text-textPrimary">
        Filter
      </button>
    </div>
  );
}
