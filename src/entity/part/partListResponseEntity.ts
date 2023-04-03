import { Entity } from 'typeorm';
import { PartResponseEntity } from './partResponseEntity';

@Entity()
export class PartListResponseEntity {
  limit!: number;
  offset!: number;
  total!: number;
  items!: PartResponseEntity[];
}
