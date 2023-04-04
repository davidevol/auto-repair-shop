import { IsNumber, IsString } from 'class-validator';
import { Entity, Column, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
export class CarResponseEntity {
  @PrimaryGeneratedColumn('uuid')
  id!: string;

  @Column()
  @IsString()
  license_plate!: string;

  @Column()
  @IsString()
  model!: string;

  @Column()
  @IsNumber()
  year!: number;

  @Column()
  @IsString()
  manufacturer!: string;

  @Column()
  @IsString()
  color!: string;
}
