import type { NextFunction, Request, Response } from 'express';

import { env } from '../config/env.js';
import { AppError } from '../utils/appError.js';

export const errorHandler = (
  error: unknown,
  _req: Request,
  res: Response,
  _next: NextFunction,
): void => {
  const statusCode = error instanceof AppError ? error.statusCode : 500;
  const message =
    error instanceof AppError || statusCode < 500
      ? (error as Error).message
      : 'Internal server error';

  if (statusCode >= 500 && env.nodeEnv !== 'test') {
    console.error(error);
  }

  res.status(statusCode).json({ error: { message, statusCode } });
};
