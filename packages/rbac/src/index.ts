export const VERSION = '0.1.0';

export type Role =
  | 'org_admin'
  | 'engineering_leader'
  | 'engineering_manager'
  | 'individual_contributor'
  | 'platform_engineer'
  | 'security_officer';

export type AuthContext = {
  tenantId: string;
  userId: string;
  role: Role;
  orgSubtreeIds: string[];
  directReportIds: string[];
};
