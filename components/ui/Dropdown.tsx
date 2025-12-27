"use client";

export default function Dropdown({
  options,
}: {
  options: string[];
}) {
  return (
    <select className="rounded-md bg-background border border-border px-3 py-2 text-sm">
      {options.map((o) => (
        <option key={o}>{o}</option>
      ))}
    </select>
  );
}
