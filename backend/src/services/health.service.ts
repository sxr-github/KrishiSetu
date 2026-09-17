export interface HealthStatus {
  status: 'ok';
  service: 'krishisetu-backend';
  message: string;
  uptimeSeconds: number;
  timestamp: string;
}

export const getHealthStatus = (): HealthStatus => ({
  status: 'ok',
  service: 'krishisetu-backend',
  message: 'KrishiSetu backend is running',
  uptimeSeconds: Math.floor(process.uptime()),
  timestamp: new Date().toISOString(),
});
