export default function PulsePage() {
  return (
    <div className="p-6">
      <h1 className="text-xl font-semibold mb-4">Pulse</h1>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-4">
        {/* New Pairs */}
        <div className="rounded-xl bg-surface border border-border p-4">
          <h2 className="font-medium mb-2">New Pairs</h2>
          <p className="text-sm text-textMuted">Live newly launched tokens</p>
        </div>

        {/* Final Stretch */}
        <div className="rounded-xl bg-surface border border-border p-4">
          <h2 className="font-medium mb-2">Final Stretch</h2>
          <p className="text-sm text-textMuted">Tokens nearing migration</p>
        </div>

        {/* Migrated */}
        <div className="rounded-xl bg-surface border border-border p-4">
          <h2 className="font-medium mb-2">Migrated</h2>
          <p className="text-sm text-textMuted">Recently migrated tokens</p>
        </div>
      </div>
    </div>
  );
}
