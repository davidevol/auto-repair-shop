import { NextFunction, Request, Response } from 'express';
import { AppError } from './app-error';
import logger from './logger';

interface ErrorResponse {
  statusCode: number;
  message: string;
  error?: string;
}

export function AppErrorHandler(
  err: ErrorResponse,
  req: Request,
  res: Response<ErrorResponse>,
  next: NextFunction,
) {
  if (err instanceof AppError) {
    logger.error(err.stack);

    const { statusCode, message, error } = err;
    res.status(statusCode).json({
      statusCode,
      message,
      error,
    });
  } else {
    next(err);
  }
}
