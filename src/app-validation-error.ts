import { Request, Response, NextFunction } from 'express';
import { QueryFailedError } from 'typeorm';

export interface ValidationErrorResponse {
  type: string;
  errors?: { resource: string; message: string }[];
}

export function validationErrorHandler(
  err: ValidationErrorResponse,
  req: Request,
  res: Response,
  next: NextFunction,
): void {
  if (err instanceof QueryFailedError) {
    const response: ValidationErrorResponse = {
      type: 'Validation error',
    };
    res.status(422).json(response);
  } else {
    next(err);
  }
}
