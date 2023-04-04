import { Entity } from 'typeorm';
import { ClientResponseWithCarsEntity } from './clientResponseWithCars';

@Entity()
export class ClientListResponseEntity {
  limit!: number;
  offset!: number;
  total!: number;
  items!: ClientResponseWithCarsEntity[];
}
