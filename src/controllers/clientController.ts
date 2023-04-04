import { Get, Route, Post, Body, Path, Patch, Delete, Query } from 'tsoa';

import {
  getClients,
  createClients,
  getClient,
  updateClient,
  deleteClient,
  IClientRequestEntity,
  IClientResponseEntity,
  IClientListResponseEntity,
} from '../repositories/clientRepository';
import { ClientRequestEntity } from '../entities/client/clientRequestEntity';

@Route('clients')
export default class ClientController {
  @Get('/')
  public async getClients(
    @Query('limit') limit: number | any,
    @Query('offset') offset: number | any,
  ): Promise<Array<IClientListResponseEntity | any>> {
    return getClients(limit, offset);
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

  @Patch('/:id')
  public async updateClient(
    @Path() id: string,
    @Body() body: IClientResponseEntity,
  ): Promise<IClientResponseEntity | null> {
    return updateClient(id, body);
  }

  @Delete('/:id')
  public async deleteClient(
    @Path() id: string,
  ): Promise<IClientResponseEntity | boolean> {
    return deleteClient(id);
  }
}
