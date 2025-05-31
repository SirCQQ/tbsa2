import { NextResponse } from "next/server";
import { AuthError, AuthErrorKey } from "@/types/auth";

const AUTH_ERROR_MESSAGES: Record<AuthErrorKey, string> = {
  [AuthErrorKey.MISSING_TOKEN]: "Token-ul de autentificare lipsește",
  [AuthErrorKey.INVALID_TOKEN]: "Token-ul de autentificare este invalid",
  [AuthErrorKey.INSUFFICIENT_PERMISSIONS]:
    "Nu aveți permisiunile necesare pentru această acțiune",
  [AuthErrorKey.INTERNAL_ERROR]: "A apărut o eroare internă",
};

const AUTH_ERROR_STATUS: Record<AuthErrorKey, number> = {
  [AuthErrorKey.MISSING_TOKEN]: 401,
  [AuthErrorKey.INVALID_TOKEN]: 401,
  [AuthErrorKey.INSUFFICIENT_PERMISSIONS]: 403,
  [AuthErrorKey.INTERNAL_ERROR]: 500,
};

export function createAuthError(
  code: AuthErrorKey,
  customMessage?: string,
  requiredPermission?: string
): NextResponse<AuthError> {
  const error: AuthError = {
    error: AUTH_ERROR_MESSAGES[code],
    code,
    message: customMessage,
    requiredPermission,
  };

  return NextResponse.json(error, { status: AUTH_ERROR_STATUS[code] });
}
