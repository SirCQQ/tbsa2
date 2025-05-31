import { cookies } from "next/headers";
import { jwtVerify } from "jose";
import { AuthResult } from "@/types/auth";

const JWT_SECRET = process.env.JWT_SECRET || "your-secret-key";

export async function getCurrentUser(): Promise<AuthResult> {
  try {
    const cookieStore = await cookies();
    const token = cookieStore.get("token");

    if (!token) {
      return { isAuthenticated: false };
    }

    const { payload } = await jwtVerify(
      token.value,
      new TextEncoder().encode(JWT_SECRET)
    );

    if (!payload || !payload.sub) {
      return { isAuthenticated: false };
    }

    return {
      isAuthenticated: true,
      user: {
        id: payload.sub,
        email: payload.email as string,
        name: payload.name as string,
        roleId: payload.roleId as string,
      },
    };
  } catch (error) {
    console.error("Error getting current user:", error);
    return { isAuthenticated: false };
  }
}

export async function getUserPermissions(): Promise<string[]> {
  try {
    const cookieStore = await cookies();
    const token = cookieStore.get("token");

    if (!token) {
      return [];
    }

    const { payload } = await jwtVerify(
      token.value,
      new TextEncoder().encode(JWT_SECRET)
    );

    if (!payload || !payload.permissions) {
      return [];
    }

    return payload.permissions as string[];
  } catch (error) {
    console.error("Error getting user permissions:", error);
    return [];
  }
}

export async function getUserRole(): Promise<string | null> {
  try {
    const cookieStore = await cookies();
    const token = cookieStore.get("token");

    if (!token) {
      return null;
    }

    const { payload } = await jwtVerify(
      token.value,
      new TextEncoder().encode(JWT_SECRET)
    );

    if (!payload || !payload.role) {
      return null;
    }

    return payload.role as string;
  } catch (error) {
    console.error("Error getting user role:", error);
    return null;
  }
}
