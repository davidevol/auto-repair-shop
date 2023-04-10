import express, { NextFunction, Request, Response } from 'express';
import AuthController from '../controllers/authController';
import { Credentials } from '../service/authService';
import { AppError } from '../errors/appError';

const router = express.Router();

router.post(
  '/login',
  async (req: Request, res: Response, next: NextFunction) => {
    const { email, password } = req.body as Credentials;
    const authController = new AuthController();
    const response = await authController.loginClient({ email, password });
    if (!response) {
      return next(
        new AppError(
          401,
          'Invalid email or password. Please try again.',
          'invalid credentials',
        ),
      );
    }
    res.setHeader('Authorization', `Bearer ${response.accessToken}`);
    res.status(200).send('Success');
  },
);

router.post(
  '/refreshToken',
  async (req: Request, res: Response, next: NextFunction) => {
    const authController = new AuthController();
    const response = await authController.refreshToken(req.body);
    if (!response) {
      return next(
        new AppError(
          401,
          'The user has missing or invalid credentials',
          'invalid credentials',
        ),
      );
    }
    res.setHeader('Authorization', `Bearer ${response.newToken}`);
    res.status(200).send('Success');
  },
);

export default router;
