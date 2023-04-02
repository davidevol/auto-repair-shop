import { Entity, Column, ManyToOne, PrimaryColumn } from 'typeorm';
import { ClientResponseWithCarsEntity } from '../client/clientResponseWithCars';

@Entity()
export class CarResponseEntity {
  @PrimaryColumn()
  id!: string;

  @Column()
  license_plate!: string;

  @Column()
  model!: string;

  @Column()
  year!: number;

  @Column()
  manufacturer!: string;

  @Column()
  color!: string;

  @ManyToOne(() => ClientResponseWithCarsEntity, (client) => client.cars)
  carListResponse!: ClientResponseWithCarsEntity;
}
