export const VERSION = '0.1.0';

export type IntegrationProvider =
  | 'github'
  | 'gitlab'
  | 'bitbucket'
  | 'jira'
  | 'linear'
  | 'azure_devops'
  | 'copilot'
  | 'snyk'
  | 'sonarqube';

export type IntegrationStatus = 'connected' | 'disconnected' | 'error';

export type Integration = {
  id: string;
  tenantId: string;
  provider: IntegrationProvider;
  status: IntegrationStatus;
  lastSyncAt: Date | null;
};
