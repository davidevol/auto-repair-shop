import { Column, Entity } from 'typeorm';
import { ServicePartRequest } from './servicePartRequestEntity';

@Entity()
export class ServiceResponseEntity {
  @Column()
  id!: number;

  @Column()
  clientId!: string;

  @Column()
  carId!: string;

  @Column()
  mechanicId!: string;

  @Column()
  parts!: ServicePartRequest[];

  @Column()
  serviceEstimatedDeliveryDate!: Date;

  @Column()
  status!: string;
}
