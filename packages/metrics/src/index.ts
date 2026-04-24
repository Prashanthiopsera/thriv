export const VERSION = '0.1.0';

export type MetricType =
  | 'dora_deployment_frequency'
  | 'dora_lead_time'
  | 'dora_change_failure_rate'
  | 'dora_mttr'
  | 'say_do_ratio'
  | 'ai_attribution_score'
  | 'pipeline_health';

export type MetricSnapshot = {
  id: string;
  tenantId: string;
  teamId: string;
  metricType: MetricType;
  metricValue: Record<string, unknown>;
  snapshotDate: Date;
  computedAt: Date;
};
