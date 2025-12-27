"use client";

import { useState } from "react";

export default function LeverageSlider() {
  const [leverage, setLeverage] = useState(1);

  return (
    <div className="rounded-xl bg-surface border border-border p-4">
      <h4 className="text-sm font-medium mb-2">
        Leverage: {leverage}×
      </h4>

      <input
        type="range"
        min={1}
        max={20}
        value={leverage}
        onChange={(e) => setLeverage(Number(e.target.value))}
        className="w-full"
      />
    </div>
  );
}
