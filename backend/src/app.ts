import cors from 'cors';
import express, { type Express } from 'express';
import helmet from 'helmet';

import { errorHandler } from './middleware/errorHandler.js';
import { notFound } from './middleware/notFound.js';
import { apiRouter } from './routes/index.js';

export const createApp = (): Express => {
  const app = express();

  app.use(helmet());
  app.use(cors());
  app.use(express.json());

  app.use('/api', apiRouter);

  app.use(notFound);
  app.use(errorHandler);

  return app;
};
