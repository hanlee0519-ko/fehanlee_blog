import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";

export function middleware(request: NextRequest) {
  const { headers } = request;
  const userAgent = headers.get("user-agent") || "";
  // Check for bot user agents
  const isBot = /bot|crawler|spider|google|bing|yahoo/i.test(userAgent);
  // Skip redirect logic for bots
  if (isBot) {
    return NextResponse.next();
  }
}
