import { Permission } from "@/types/auth";
import { getUserPermissions } from "@/services/auth-server.service";

function formatPermission(permission: Permission): string {
  return `${permission.resource}:${permission.action}`;
}

export async function hasPermission(permission: Permission): Promise<boolean> {
  const userPermissions = await getUserPermissions();
  const requiredPermission = formatPermission(permission);
  return userPermissions.includes(requiredPermission);
}

export async function hasAnyPermission(
  permissions: Permission[]
): Promise<boolean> {
  const userPermissions = await getUserPermissions();
  return permissions.some((permission) =>
    userPermissions.includes(formatPermission(permission))
  );
}

export async function hasAllPermissions(
  permissions: Permission[]
): Promise<boolean> {
  const userPermissions = await getUserPermissions();
  return permissions.every((permission) =>
    userPermissions.includes(formatPermission(permission))
  );
}

export async function requirePermission(permission: Permission): Promise<void> {
  const hasRequiredPermission = await hasPermission(permission);
  if (!hasRequiredPermission) {
    throw new Error(
      `Missing required permission: ${formatPermission(permission)}`
    );
  }
}

export async function requireAnyPermission(
  permissions: Permission[]
): Promise<void> {
  const hasRequiredPermissions = await hasAnyPermission(permissions);
  if (!hasRequiredPermissions) {
    const requiredPermissions = permissions.map(formatPermission).join(", ");
    throw new Error(
      `Missing any of required permissions: ${requiredPermissions}`
    );
  }
}

export async function requireAllPermissions(
  permissions: Permission[]
): Promise<void> {
  const hasRequiredPermissions = await hasAllPermissions(permissions);
  if (!hasRequiredPermissions) {
    const requiredPermissions = permissions.map(formatPermission).join(", ");
    throw new Error(
      `Missing some of required permissions: ${requiredPermissions}`
    );
  }
}
