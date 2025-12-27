import { NextResponse } from "next/server";

export async function GET() {
  return NextResponse.json({
    newPairs: [
      { name: "TOKEN1", liquidity: 12000 },
      { name: "TOKEN2", liquidity: 8000 },
    ],
    finalStretch: [
      { name: "TOKEN3", liquidity: 45000 },
    ],
    migrated: [
      { name: "TOKEN4", liquidity: 100000 },
    ],
  });
}
