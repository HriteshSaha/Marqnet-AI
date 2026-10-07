/**
 * Known permission module keys. Kept as a maintained TS list rather than a
 * Prisma enum (RolePermission.module is a plain string column) because this
 * catalog grows with every epic — adding one must not require a migration.
 */
export const PERMISSION_MODULES = [
  'organizations',
  'clients',
  'roles',
  'members',
  'approvals',
] as const;

export type PermissionModule = (typeof PERMISSION_MODULES)[number];

/** Matches every module — used by the seeded Owner role's blanket grant. */
export const WILDCARD_MODULE = '*';
