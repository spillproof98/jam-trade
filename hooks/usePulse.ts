"use client";

import { useEffect, useState } from "react";

export function usePulse() {
  const [data, setData] = useState<any>(null);

  useEffect(() => {
    fetch("/api/pulse")
      .then((res) => res.json())
      .then(setData);
  }, []);

  return data;
}
