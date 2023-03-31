import { Entity } from 'typeorm';
import { PartResponseEntity } from './partResponseEntity';

@Entity()
export class ClientListResponseEntity {
  limit!: number;
  offset!: number;
  total!: number;
  items!: PartResponseEntity[];
}
