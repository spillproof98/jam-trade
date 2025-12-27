"use client";

export function useTrading() {
  const placeOrder = async (order: any) => {
    const res = await fetch("/api/trading", {
      method: "POST",
      body: JSON.stringify(order),
    });
    return res.json();
  };

  return { placeOrder };
}
