import { Entity, Column, PrimaryGeneratedColumn, ManyToOne } from 'typeorm';
import { IsNotEmpty, IsUUID, IsNumber } from 'class-validator';
import { PartResponseEntity } from '../part/partResponseEntity';

@Entity()
export class ServicePartRequest {
  @PrimaryGeneratedColumn('uuid')
  id!: string;

  @Column()
  @IsNotEmpty()
  @ManyToOne(() => PartResponseEntity)
  @IsUUID()
  partId!: string;

  @Column()
  @IsNotEmpty()
  @IsNumber()
  qtd!: number;
}
