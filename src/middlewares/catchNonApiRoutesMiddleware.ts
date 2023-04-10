import { RequestHandler } from 'express';
import { AppError } from '../errors/appError';

export const catchNonApiRoutesMiddleware: RequestHandler = (req, res, next) => {
  const { path } = req;
  !path.startsWith('*')
    ? next(new AppError(404, `Unknown route: ${path}`, 'Not Found'))
    : next();
};
