import { NextResponse } from "next/server";

export async function GET() {
  return NextResponse.json([
    { symbol: "BTC", price: 42000 },
    { symbol: "ETH", price: 2400 },
    { symbol: "SOL", price: 98 },
  ]);
}
