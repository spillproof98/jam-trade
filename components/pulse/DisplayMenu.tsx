export default function DisplayMenu() {
  return (
    <div className="flex gap-2 text-xs text-textMuted">
      <button className="hover:text-textPrimary">Compact</button>
      <button className="hover:text-textPrimary">Expanded</button>
    </div>
  );
}
