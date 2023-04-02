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

export const getClients = async (): Promise<Array<IClientResponseEntity>> => {
  const clients = await clientRepository.find();
  return clients.map((client) => ({
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
  }));
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
