import { CarResponseEntity } from './carResponseEntity';
import { Entity } from 'typeorm';

@Entity()
export class CarListResponseEntity {
  limit!: number;
  offset!: number;
  total!: number;
  items!: CarResponseEntity[];
}
