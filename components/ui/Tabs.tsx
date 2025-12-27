"use client";

export default function Tabs({
  tabs,
  active,
  onChange,
}: {
  tabs: string[];
  active: string;
  onChange: (tab: string) => void;
}) {
  return (
    <div className="flex gap-4 border-b border-border">
      {tabs.map((tab) => (
        <button
          key={tab}
          onClick={() => onChange(tab)}
          className={`pb-2 text-sm ${
            active === tab
              ? "text-textPrimary border-b-2 border-primary"
              : "text-textMuted"
          }`}
        >
          {tab}
        </button>
      ))}
    </div>
  );
}
