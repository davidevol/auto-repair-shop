import { Route, Post, Body, Path } from 'tsoa';

import { createCar } from '../repositories/carRepository';

import { ICarRequestEntity } from '../repositories/carRepository';

@Route('clients')
export default class CarController {
  @Post('/:id/cars')
  public async createCar(
    @Path() id: string,
    @Body() body: ICarRequestEntity,
  ): Promise<ICarRequestEntity | null> {
    return createCar(id, body);
  }
}
