import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";
import { getToken } from "next-auth/jwt";

export async function middleware(request: NextRequest) {
  const token = await getToken({
    req: request,
    secret: process.env.NEXTAUTH_SECRET,
  });

  const { pathname } = request.nextUrl;

  // ✅ Allow public routes without login
  const publicPaths = ["/login", "/register", "/api/auth"];
  if (publicPaths.some((path) => pathname.startsWith(path))) {
    return NextResponse.next();
  }

  // ✅ If user not signed in
  if (!token) {
    return NextResponse.redirect(new URL("/login", request.url));
  }

  // ✅ Protect admin routes
  if (pathname.startsWith("/admin")) {
    const role = token.role as string | undefined;

    if (role !== "admin") {
      // Unauthorized users are redirected to home
      return NextResponse.redirect(new URL("/", request.url));
    }
  }

  // ✅ Allow access for all other authenticated routes
  return NextResponse.next();
}

// ✅ Apply middleware only on protected paths
export const config = {
  matcher: [
    "/admin/:path*", // protect admin routes
    "/dashboard/:path*", // optional: protect other private routes
  ],
};
