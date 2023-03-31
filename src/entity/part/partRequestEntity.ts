import { Entity, Column, PrimaryGeneratedColumn } from 'typeorm';
import { IsNotEmpty, IsString, IsNumber } from 'class-validator';

@Entity()
export class PartRequestEntity {
  @PrimaryGeneratedColumn()
  partId!: number;

  @Column()
  @IsNotEmpty()
  @IsString()
  title!: string;

  @Column()
  @IsNotEmpty()
  @IsString()
  description!: string;

  @Column()
  @IsNotEmpty()
  @IsNumber()
  qtd!: number;

  @Column()
  @IsNotEmpty()
  @IsNumber()
  unitPrice!: number;
}
