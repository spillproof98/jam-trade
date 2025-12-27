import ColumnHeader from "./ColumnHeader";
import TokenRow from "./TokenRow";

export default function PulseColumn({ title }: { title: string }) {
  return (
    <div className="rounded-xl bg-surface border border-border">
      <ColumnHeader title={title} />

      <div className="divide-y divide-border">
        {[1, 2, 3].map((i) => (
          <TokenRow key={i} />
        ))}
      </div>
    </div>
  );
}
