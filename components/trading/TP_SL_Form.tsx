export default function TPSLForm() {
  return (
    <div className="rounded-xl bg-surface border border-border p-4">
      <h4 className="text-sm font-medium mb-3">TP / SL</h4>

      <input
        placeholder="Take Profit"
        className="w-full mb-2 rounded-md bg-background border border-border px-3 py-2 text-sm"
      />

      <input
        placeholder="Stop Loss"
        className="w-full rounded-md bg-background border border-border px-3 py-2 text-sm"
      />
    </div>
  );
}
