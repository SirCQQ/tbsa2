import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";
import { getCurrentUser } from "@/services/auth-server.service";
import { createAuthError } from "@/lib/auth-errors";
import { AuthErrorKey } from "@/types/auth";

export async function middleware(request: NextRequest) {
  // Skip middleware for non-API routes and public API routes
  if (
    !request.nextUrl.pathname.startsWith("/api") ||
    request.nextUrl.pathname.startsWith("/api/auth")
  ) {
    return NextResponse.next();
  }

  try {
    // Check authentication
    const { isAuthenticated, user } = await getCurrentUser();

    if (!isAuthenticated || !user) {
      return createAuthError(AuthErrorKey.MISSING_TOKEN);
    }

    // Add user info to request headers for route handlers
    const requestHeaders = new Headers(request.headers);
    requestHeaders.set("x-user-id", user.id);
    requestHeaders.set("x-user-email", user.email);
    requestHeaders.set("x-user-role-id", user.roleId);

    // Continue to route handler with modified headers
    return NextResponse.next({
      request: {
        headers: requestHeaders,
      },
    });
  } catch (error) {
    console.error("Middleware error:", error);
    return createAuthError(AuthErrorKey.INTERNAL_ERROR);
  }
}

// Configure which routes use this middleware
export const config = {
  matcher: [
    // Match all API routes except /api/auth/*
    "/api/((?!auth).*)",
  ],
};
