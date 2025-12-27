"use client";

import { useEffect, useState } from "react";

export function usePrices() {
  const [prices, setPrices] = useState<any[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch("/api/prices")
      .then((res) => res.json())
      .then(setPrices)
      .finally(() => setLoading(false));
  }, []);

  return { prices, loading };
}
