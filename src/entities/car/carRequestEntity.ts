import { IsNotEmpty, IsNumber, IsString, IsUUID } from 'class-validator';
import { Entity, Column, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
export class CarRequestEntity {
  @PrimaryGeneratedColumn('uuid')
  id!: string;

  @Column()
  @IsString()
  @IsUUID()
  license_plate!: string;

  @Column()
  @IsString()
  @IsNotEmpty({ message: 'The model cannot be empty.' })
  model!: string;

  @Column()
  @IsNumber()
  @IsNotEmpty({ message: 'The year cannot be empty.' })
  year!: number;

  @Column()
  @IsString()
  @IsNotEmpty({ message: 'The manufacturer cannot be empty.' })
  manufacturer!: string;

  @Column()
  @IsString()
  @IsNotEmpty({ message: 'The color cannot be empty.' })
  color!: string;
}
