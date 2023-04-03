import PostgresDataSource from '../app-data-source';
import {
  ClientRequestEntity,
  ClientType,
} from '../entity/client/clientRequestEntity';
import { ClientResponseWithCarsEntity } from '../entity/client/clientResponseWithCars';

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

export interface IClientResponseEntity {
  id: string;
  name: string;
  cpf_cnpj: string;
  client_type: ClientType;
  birthday: Date;
  phone: string;
  email: string;
  zipCode: string;
  street: string;
  number: string;
  neighbourhood: string;
  city: string;
}

export interface IClientListResponseEntity {
  limit: number;
  offset: number;
  total: number;
  items: ClientResponseWithCarsEntity[];
}

const clientRepository =
  PostgresDataSource.manager.getRepository(ClientRequestEntity);

export const getClient = async (
  id: string,
): Promise<IClientResponseEntity | null> => {
  const client = await clientRepository.findOne({ where: { id } });
  if (!client) return null;

  const clientResponse: IClientResponseEntity = {
    id: client.id,
    name: client.name,
    email: client.email,
    phone: client.phone,
    cpf_cnpj: client.cpf_cnpj,
    client_type: client.client_type,
    birthday: client.birthday,
    zipCode: client.zipCode,
    street: client.street,
    number: client.number,
    neighbourhood: client.neighbourhood,
    city: client.city,
  };

  return clientResponse;
};

export const getClients = async (
  limit?: number | any,
  offset?: number | any,
): Promise<IClientListResponseEntity | any> => {
  const [clients, total] = await clientRepository.findAndCount({
    take: limit,
    skip: offset,
  });

  const clientResponseList = clients.map((client) => {
    return {
      id: client.id,
      name: client.name,
      email: client.email,
      phone: client.phone,
      cpf_cnpj: client.cpf_cnpj,
      client_type: client.client_type,
      birthday: client.birthday,
      zipCode: client.zipCode,
      street: client.street,
      number: client.number,
      neighbourhood: client.neighbourhood,
      city: client.city,
    };
  });

  const clientListResponse = {
    limit,
    offset,
    total,
    items: clientResponseList,
  };

  return clientListResponse;
};

export const createClients = async (
  payload: IClientRequestEntity,
): Promise<ClientRequestEntity> => {
  const client = new ClientRequestEntity();
  return clientRepository.save({
    ...client,
    ...payload,
  });
};

export const updateClient = async (
  id: string,
  updates: Partial<ClientRequestEntity>,
): Promise<IClientResponseEntity | null> => {
  const client = await getClient(id);
  if (!client) return null;

  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const { password, ...rest } = updates;

  const updatedClient = Object.assign(client, rest);

  await clientRepository.save(updatedClient);

  return client;
};

export const deleteClient = async (id: string): Promise<boolean> => {
  const client = await getClient(id);
  if (!client) return false;
  await clientRepository.delete(client.id);
  return true;
};
