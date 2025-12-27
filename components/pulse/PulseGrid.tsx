import PulseColumn from "./PulseColumn";

export default function PulseGrid() {
  return (
    <div className="grid grid-cols-1 lg:grid-cols-3 gap-4">
      <PulseColumn title="New Pairs" />
      <PulseColumn title="Final Stretch" />
      <PulseColumn title="Migrated" />
    </div>
  );
}
