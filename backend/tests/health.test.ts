import request from 'supertest';
import { describe, expect, it } from 'vitest';

import { createApp } from '../src/app.js';

const app = createApp();

describe('GET /api/health', () => {
  it('reports that the backend is running', async () => {
    const response = await request(app).get('/api/health');

    expect(response.status).toBe(200);
    expect(response.body).toMatchObject({
      status: 'ok',
      service: 'krishisetu-backend',
      message: 'KrishiSetu backend is running',
    });
  });
});

describe('unknown routes', () => {
  it('returns a structured 404 error', async () => {
    const response = await request(app).get('/api/does-not-exist');

    expect(response.status).toBe(404);
    expect(response.body.error.statusCode).toBe(404);
  });
});
