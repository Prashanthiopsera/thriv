export const VERSION = '0.1.0';

export type WidgetType =
  | 'dora_chart'
  | 'say_do_ratio'
  | 'ai_attribution'
  | 'pipeline_health'
  | 'security_posture';

export type Widget = {
  id: string;
  type: WidgetType;
  position: { x: number; y: number; w: number; h: number };
  config: Record<string, unknown>;
};

export type DashboardLayout = {
  id: string;
  tenantId: string;
  userId: string;
  layoutName: string;
  widgets: Widget[];
  isDefault: boolean;
};
