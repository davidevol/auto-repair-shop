import { Entity, Column, PrimaryGeneratedColumn } from 'typeorm';
import {
  IsString,
  IsDateString,
  IsEmail,
  IsEnum,
  ArrayNotEmpty,
  ArrayUnique,
} from 'class-validator';

enum MechanicStatus {
  ACTIVE = 'active',
  INACTIVE = 'inactive',
  VACATIONS = 'vacations',
  BUSY = 'busy',
}

@Entity()
export class MechanicRequestEntity {
  @PrimaryGeneratedColumn()
  id!: number;

  @Column()
  @IsString()
  name!: string;

  @Column()
  @IsString()
  cpf!: string;

  @Column()
  @IsDateString()
  birthday!: string;

  @Column()
  @IsString()
  phone!: string;

  @Column()
  @IsEmail()
  email!: string;

  @Column('simple-array')
  @ArrayNotEmpty()
  @ArrayUnique()
  @IsString({ each: true })
  specialties!: string[];

  @Column()
  @IsDateString()
  hiringDate!: string;

  @Column()
  serviceFee!: number;

  @Column({
    type: 'enum',
    enum: MechanicStatus,
    default: MechanicStatus.ACTIVE,
  })
  @IsEnum(MechanicStatus)
  status!: string;
}
