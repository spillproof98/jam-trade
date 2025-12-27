export default function PositionsTable() {
  return (
    <div className="rounded-xl bg-surface border border-border p-4 mt-4">
      <h3 className="text-sm font-semibold mb-3">Open Positions</h3>

      <div className="text-xs text-textSecondary space-y-2">
        <div className="flex justify-between">
          <span>BTC-PERP</span>
          <span className="text-success">+$0.00</span>
        </div>
      </div>
    </div>
  );
}
