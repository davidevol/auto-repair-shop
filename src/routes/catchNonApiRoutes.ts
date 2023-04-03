import { RequestHandler } from 'express';
import { AppError } from '../app-error';

export const catchNonApiRoutes: RequestHandler = (req, res, next) => {
  const { path } = req;
  !path.startsWith('/api/v1/')
    ? next(new AppError(404, `Unknown route: ${path}`, 'Not Found'))
    : next();
};
