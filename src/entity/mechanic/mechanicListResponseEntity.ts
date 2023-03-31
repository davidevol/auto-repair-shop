import { Entity } from 'typeorm';
import { MechanicResponseEntity } from './mechanicResponseEntity';

@Entity()
export class MechanicListResponseEntity {
  limit!: number;
  offset!: number;
  total!: number;
  items!: MechanicResponseEntity[];
}
