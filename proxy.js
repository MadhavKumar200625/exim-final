import { NextResponse } from "next/server";

export function proxy(request) {
  const url = request.nextUrl;
  const pathname = url.pathname;

  // If pathname contains any uppercase letter
  if (pathname !== pathname.toLowerCase() && !pathname.includes("/api/") ){
    const lowercaseUrl = url.clone();
    lowercaseUrl.pathname = pathname.toLowerCase();


    return NextResponse.redirect(lowercaseUrl, 301);
  }
}

export const config = {
  matcher: ["/:path*"],
};