import { NextResponse } from "next/server";

export async function POST(req: Request) {
  const { email, password } = await req.json();

  if (!email || !password) {
    return NextResponse.json(
      { error: "Email and password required" },
      { status: 400 }
    );
  }

  // ✅ MOCK LOGIN – accept any credentials
  return NextResponse.json({
    accessToken: "mock-access-token",
    refreshToken: "mock-refresh-token",
    user: { email },
  });
}
