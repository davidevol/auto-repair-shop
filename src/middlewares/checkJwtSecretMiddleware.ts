import { Request, Response, NextFunction } from 'express';
import { AppError } from '../errors/appError';

// import dotenv from 'dotenv';
// dotenv.config();

export function checkJwtSecretMiddleware(
  req: Request,
  res: Response,
  next: NextFunction,
): void {
  if (!process.env.JWT_SECRET || process.env.JWT_SECRET === '') {
    return next(new AppError(500, 'Secret key not defined', 'Internal error'));
  }
  next();
}
