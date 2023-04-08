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
export const loginClient = async ({
  email,
  password,
}: Credentials): Promise<AuthResponse | null> => {
  const clientRepository =
    PostgresDataSource.manager.getRepository(ClientRequestEntity);

  if (!process.env.JWT_SECRET || process.env.JWT_SECRET === '') {
    return null;
  }

  const client = await clientRepository.findOne({ where: { email } });

  if (!client || client.password !== password) {
    return null;
  }

  const clientId = { uuid: client.id };
  const secret = process.env.JWT_SECRET;
  const expiresIn = {
    expiresIn: '1h',
  };

  const accessToken = jwt.sign(clientId, secret, expiresIn);
  return { accessToken };
};
