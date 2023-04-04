import { Entity, Column, PrimaryGeneratedColumn } from 'typeorm';
import {
  Length,
  IsEmail,
  IsDate,
  IsAlpha,
  IsEnum,
  IsNumber,
  IsString,
} from 'class-validator';

export enum ClientType {
  PF = 'PF',
  PJ = 'PJ',
}

@Entity()
export class ClientRequestEntity {
  @PrimaryGeneratedColumn('uuid')
  id!: string;

  @Column()
  @IsAlpha()
  name!: string;

  @Column()
  @Length(14, 18)
  cpf_cnpj!: string;

  @Column({ type: 'enum', enum: ClientType })
  @IsEnum(ClientType)
  client_type!: ClientType;

  @Column()
  @IsDate()
  birthday!: Date;

  @Column()
  @IsNumber()
  phone!: string;

  @Column()
  @IsEmail()
  email!: string;

  @Column()
  @IsString()
  password!: string;

  @Column()
  @IsNumber()
  zipCode!: string;

  @Column()
  @IsString()
  street!: string;

  @Column()
  @IsNumber()
  number!: string;

  @Column()
  @IsString()
  neighbourhood!: string;

  @Column()
  @IsString()
  city!: string;
}
