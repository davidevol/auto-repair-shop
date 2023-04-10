/* eslint-disable @typescript-eslint/no-non-null-assertion */
import PostgresDataSource from '../database/appDataSource';
import { ClientRequestEntity } from '../entities/client/clientRequestEntity';
import jwt from 'jsonwebtoken';

export interface Credentials {
  email: string;
  password: string;
}

export interface AuthResponse {
  accessToken: string;
}

export interface Token {
  access_token: string;
}

export interface NewToken {
  newToken: string;
}

export const loginClient = async ({
  email,
  password,
}: Credentials): Promise<AuthResponse | null> => {
  const clientRepository =
    PostgresDataSource.manager.getRepository(ClientRequestEntity);

  const client = await clientRepository.findOne({ where: { email } });

  if (!client || client.password !== password) {
    return null;
  }

  const clientId = { uuid: client.id };
  const secret = process.env.JWT_SECRET;
  const expiresIn = {
    expiresIn: '1h',
  };

  const accessToken = jwt.sign(clientId, secret!, expiresIn);
  return { accessToken };
};

export const refreshToken = async ({
  access_token,
}: Token): Promise<NewToken | null> => {
  interface TokenPayload {
    exp: number;
    iat: number;
    uuid: string;
  }

  const decoded = jwt.verify(
    access_token,
    process.env.JWT_SECRET!,
  ) as TokenPayload;
  const clientId = decoded.uuid;

  const newToken = jwt.sign({ uuid: clientId }, process.env.JWT_SECRET!, {
    expiresIn: '2h',
  });

  return { newToken };
};
