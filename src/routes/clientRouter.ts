/* eslint-disable @typescript-eslint/no-non-null-assertion */
import express from 'express';
import dotenv from 'dotenv';
import jwt from 'jsonwebtoken';
import AuthController from '../controllers/authController';
import logger from '../utils/logger';
import { Credentials } from '../service/authService';
import { AppError } from '../errors/appError';

dotenv.config();

const router = express.Router();

router.post('/login', async (req, res, next) => {
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
  logger.info({ response });
  res.setHeader('Authorization', `Bearer ${response}`);
  res.status(200).send('Success');
});

router.post('/refreshToken', async (req, res, next) => {
  const { access_token } = req.body;

  if (!process.env.JWT_SECRET || process.env.JWT_SECRET === '') {
    return next(new AppError(500, 'Secret key not defined', 'Internal error'));
  }

  try {
    interface TokenPayload {
      exp: number;
      iat: number;
      uuid: string;
    }

    const decoded = jwt.verify(
      access_token,
      process.env.JWT_SECRET,
    ) as TokenPayload;
    const clientId = decoded.uuid;

    const newToken = jwt.sign({ uuid: clientId }, process.env.JWT_SECRET, {
      expiresIn: '2h',
    });

    res.setHeader('Authorization', `Bearer ${newToken}`);
    res.status(200).send('Success');
  } catch (err) {
    return next(
      new AppError(
        401,
        'The user has missing or invalid credentials',
        'invalid credentials',
      ),
    );
  }
});

export default router;
