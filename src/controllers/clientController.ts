import { Get, Route, Post, Body, Path } from 'tsoa';

import {
  getClients,
  createClients,
  IClientRequestEntity,
  getClient,
} from '../repositories/clientRepository';
import { ClientRequestEntity } from '../entity/client/clientRequestEntity';

@Route('clients')
export default class ClientController {
  @Get('/')
  public async getClients(): Promise<Array<ClientRequestEntity>> {
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
  ): Promise<ClientRequestEntity | null> {
    return getClient(String(id));
  }
}
