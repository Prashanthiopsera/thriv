export const VERSION = '0.1.0';

export type AuthConfig = {
  jwtSecret: string;
  sessionTtlSeconds: number;
  maxConcurrentSessions: number;
};
