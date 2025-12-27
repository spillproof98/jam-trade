export default function Tooltip({ text }: { text: string }) {
  return (
    <span className="absolute z-50 rounded bg-surface border border-border px-2 py-1 text-xs">
      {text}
    </span>
  );
}
