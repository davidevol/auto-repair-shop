import PostgresDataSource from '../app-data-source';
import {
  ClientRequestEntity,
  ClientType,
} from '../entity/client/clientRequestEntity';

export interface IClientRequestEntity {
  id: string;
  name: string;
  cpf_cnpj: string;
  client_type: ClientType;
  birthday: Date;
  phone: string;
  email: string;
  password: string;
  zipCode: string;
  street: string;
  number: string;
  neighbourhood: string;
  city: string;
}

export const getClients = async (): Promise<Array<ClientRequestEntity>> => {
  const clientRepository =
    PostgresDataSource.getRepository(ClientRequestEntity);
  return clientRepository.find();
};

export const createClients = async (
  payload: IClientRequestEntity,
): Promise<ClientRequestEntity> => {
  const clientRepository =
    PostgresDataSource.getRepository(ClientRequestEntity);
  const client = new ClientRequestEntity();
  return clientRepository.save({
    ...client,
    ...payload,
  });
};

export const getClient = async (
  id: string,
): Promise<ClientRequestEntity | null> => {
  const clientRepository =
    PostgresDataSource.getRepository(ClientRequestEntity);
  const client = await clientRepository.findOne({ where: { id } });
  if (!client) return null;
  return client;
};
