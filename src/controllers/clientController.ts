import { Get, Route, Post, Body, Path } from 'tsoa';

import {
  getClients,
  createClients,
  getClient,
  updateClient,
  IClientRequestEntity,
  IClientResponseEntity,
} from '../repositories/clientRepository';
import { ClientRequestEntity } from '../entity/client/clientRequestEntity';

@Route('clients')
export default class ClientController {
  @Get('/')
  public async getClients(): Promise<Array<IClientResponseEntity>> {
    return getClients();
  }

  @Post('/')
  public async createClients(
    @Body() body: IClientRequestEntity,
  ): Promise<ClientRequestEntity> {
    return createClients(body);
  }

  @Get('/:id')
  public async getClient(
    @Path() id: string,
  ): Promise<IClientResponseEntity | null> {
    return getClient(id);
  }

  @Get('/:id')
  public async updateClient(
    @Path() id: string,
    @Body() body: IClientResponseEntity,
  ): Promise<IClientResponseEntity | null> {
    return updateClient(id, body);
  }
}
