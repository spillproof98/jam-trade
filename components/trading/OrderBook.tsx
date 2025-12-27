export default function OrderBook() {
  return (
    <div className="rounded-xl bg-surface border border-border p-4">
      <h3 className="text-sm font-semibold mb-3">Order Book</h3>

      <div className="space-y-1 text-xs">
        {[1, 2, 3, 4].map((i) => (
          <div key={i} className="flex justify-between text-danger">
            <span>{(100 - i).toFixed(2)}</span>
            <span>{(i * 10).toFixed(2)}</span>
          </div>
        ))}

        <div className="my-2 border-t border-border" />

        {[1, 2, 3, 4].map((i) => (
          <div key={i} className="flex justify-between text-success">
            <span>{(100 + i).toFixed(2)}</span>
            <span>{(i * 8).toFixed(2)}</span>
          </div>
        ))}
      </div>
    </div>
  );
}
