import { Entity, Column, ManyToOne, PrimaryColumn } from 'typeorm';
import { MechanicListResponseEntity } from './mechanicListResponseEntity';

enum MechanicStatus {
  ACTIVE = 'active',
  INACTIVE = 'inactive',
  VACATIONS = 'vacations',
  BUSY = 'busy',
}

@Entity()
export class MechanicResponseEntity {
  @PrimaryColumn()
  id!: number;

  @Column()
  name!: string;

  @Column()
  cpf!: string;

  @Column()
  birthday!: string;

  @Column()
  phone!: string;

  @Column()
  email!: string;

  @Column('simple-array')
  specialties!: string[];

  @Column()
  hiringDate!: string;

  @Column()
  serviceFee!: number;

  @Column({
    type: 'enum',
    enum: MechanicStatus,
    default: MechanicStatus.ACTIVE,
  })
  status!: string;

  @ManyToOne(
    () => MechanicListResponseEntity,
    (MechanicList) => MechanicList.items,
  )
  mechanicListResponse!: MechanicListResponseEntity;
}
