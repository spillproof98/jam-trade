export default function Badge({
  label,
  color = "bg-border",
}: {
  label: string;
  color?: string;
}) {
  return (
    <span className={`rounded px-2 py-0.5 text-xs ${color}`}>
      {label}
    </span>
  );
}
