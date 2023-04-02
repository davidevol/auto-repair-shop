import { Entity, Column, OneToMany, PrimaryColumn } from 'typeorm';
import { CarResponseEntity } from '../car/carResponseEntity';

@Entity()
export class ClientResponseWithCarsEntity {
  @PrimaryColumn()
  id!: string;

  @Column()
  name!: string;

  @Column()
  cpf_cnpj!: string;

  @Column()
  client_type!: string;

  @Column()
  birthday!: Date;

  @Column()
  phone!: string;

  @Column()
  email!: string;

  @Column()
  zipCode!: string;

  @Column()
  street!: string;

  @Column()
  number!: string;

  @Column()
  neighbourhood!: string;

  @Column()
  city!: string;

  @OneToMany(() => CarResponseEntity, (car) => car.carListResponse)
  cars!: CarResponseEntity[];
}
