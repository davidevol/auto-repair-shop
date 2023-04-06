/* eslint-disable @typescript-eslint/no-non-null-assertion */
import express from 'express';
import dotenv from 'dotenv';
import jwt from 'jsonwebtoken';
import { ClientRequestEntity } from '../entities/client/clientRequestEntity';
import PostgresDataSource from '../app-data-source';
import logger from '../utils/logger';
import { AppError } from '../utils/app-error';

dotenv.config();

const router = express.Router();

router.post('/login', async (req, res) => {
  const { email, password } = req.body;

  const clientRepository =
    PostgresDataSource.manager.getRepository(ClientRequestEntity);
  const client = await clientRepository.findOne({ where: { email } });

  if (!client || client.password !== password) {
    res.status(401).send('Credenciais inválidas');
    return;
  }

  const clientId = { uuid: client.id };

  const secret = process.env.JWT_SECRET!;
  const expiresIn = {
    expiresIn: '1h',
  };

  const token = jwt.sign(clientId, secret, expiresIn);
  logger.info(token);

  res.setHeader('Authorization', `Bearer ${token}`);
  res.status(200);
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
    res.status(200);
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
