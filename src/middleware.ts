import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";

export function middleware(request: NextRequest) {
  if (request.nextUrl.pathname === "/") {
    let isLoggedIn = request.cookies.has("ntzwlt-user");
    if (isLoggedIn) return NextResponse.redirect(new URL("/home", request.url));
  }

  if (request.nextUrl.pathname.startsWith("/home")) {
    let isLoggedIn = request.cookies.has("ntzwlt-user");
    if (!isLoggedIn) return NextResponse.redirect(new URL("/", request.url));
  }
}
