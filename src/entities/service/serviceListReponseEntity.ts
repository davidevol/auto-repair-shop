import { Entity } from 'typeorm';
import { ServiceResponseEntity } from './serviceResponseEntity';

@Entity()
export class ServiceListResponseEntity {
  limit!: number;
  offset!: number;
  total!: number;
  items!: ServiceResponseEntity[];
}
