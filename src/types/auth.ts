import { ActionType, ResourceType } from "@prisma/client";

export type Permission = {
  resource: ResourceType;
  action: ActionType;
};

export enum AuthErrorKey {
  MISSING_TOKEN = "MISSING_TOKEN",
  INVALID_TOKEN = "INVALID_TOKEN",
  INSUFFICIENT_PERMISSIONS = "INSUFFICIENT_PERMISSIONS",
  INTERNAL_ERROR = "INTERNAL_ERROR",
}

export type AuthError = {
  error: string;
  code: AuthErrorKey;
  message?: string;
  requiredPermission?: string;
};

export type AuthResult = {
  isAuthenticated: boolean;
  user?: {
    id: string;
    email: string;
    name?: string | null;
    roleId: string;
  } | null;
};
