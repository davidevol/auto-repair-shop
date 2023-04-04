import { Entity, Column, PrimaryGeneratedColumn, ManyToOne } from 'typeorm';
import { IsDate, IsEnum, IsNotEmpty, IsUUID } from 'class-validator';
import { CarResponseEntity } from '../car/carResponseEntity';
import { ClientResponseEntity } from '../client/clientResponseEntity';
import { MechanicResponseEntity } from '../mechanic/mechanicResponseEntity';
import { ServicePartRequest } from './servicePartRequestEntity';

enum ServiceRequestStatus {
  OPEN = 'open',
  IN_PROGRESS = 'in progress',
  BLOCKED = 'blocked',
  DELIVERED = 'delivered',
  CANCELLED = 'cancelled',
}

@Entity()
export class ServiceRequestEntity {
  @PrimaryGeneratedColumn()
  id!: number;

  @Column()
  @IsNotEmpty()
  @ManyToOne(() => ClientResponseEntity)
  @IsUUID()
  clientId!: string;

  @Column()
  @IsNotEmpty()
  @ManyToOne(() => CarResponseEntity)
  @IsUUID()
  carId!: string;

  @Column()
  @IsNotEmpty()
  @ManyToOne(() => MechanicResponseEntity)
  @IsUUID()
  mechanicId!: string;

  parts!: ServicePartRequest[];

  @Column()
  @IsDate()
  serviceEstimatedDeliveryDate!: Date;

  @IsEnum(ServiceRequestStatus)
  @Column({
    type: 'enum',
    enum: ServiceRequestStatus,
    default: ServiceRequestStatus.OPEN,
  })
  status!: ServiceRequestStatus;
}
