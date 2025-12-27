export default function PerpetualsPage() {
  return (
    <div className="p-6">
      <h1 className="text-xl font-semibold mb-4">Perpetuals</h1>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-4">
        {/* Chart */}
        <div className="lg:col-span-2 rounded-xl bg-surface border border-border p-4">
          <p className="text-textMuted">TradingView Chart Area</p>
        </div>

        {/* Trade Panel */}
        <div className="rounded-xl bg-surface border border-border p-4">
          <p className="text-textMuted">Order Form (Long / Short)</p>
        </div>
      </div>
    </div>
  );
}
