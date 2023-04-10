import { Entity, Column, PrimaryGeneratedColumn } from 'typeorm';
import {
  Length,
  IsEmail,
  IsEnum,
  IsString,
  IsNotEmpty,
  IsDateString,
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
  @IsNotEmpty({ message: 'The name cannot be empty.' })
  @IsString({ message: 'The name can only contain letters.' })
  name!: string;

  @Column()
  @Length(14, 18, {
    message: 'The CPF / CNPJ must have between 14 and 18 characters.',
  })
  cpf_cnpj!: string;

  @Column({ type: 'enum', enum: ClientType })
  @IsEnum(ClientType, { message: 'Please select PF or PJ' })
  @IsNotEmpty({ message: 'The Client Type cannot be empty.' })
  client_type!: ClientType;

  @Column()
  @IsDateString(undefined, { message: 'The birthday must be a valid date.' })
  birthday!: Date;

  @Column()
  @IsString({ message: 'The phone must be a valid number.' })
  @IsNotEmpty({ message: 'The phone cannot be empty.' })
  phone!: string;

  @Column()
  @IsEmail({}, { message: 'The email must be a valid email.' })
  email!: string;

  @Column()
  @IsNotEmpty({ message: 'The password cannot be empty.' })
  @IsString({ message: 'The password must be valid.' })
  password!: string;

  @Column()
  @IsString({ message: 'The zip code must be valid.' })
  @IsNotEmpty({ message: 'The zipCode number cannot be empty.' })
  zipCode!: string;

  @Column()
  @IsString({ message: 'The street name must be valid.' })
  @IsNotEmpty({ message: 'The street cannot be empty.' })
  street!: string;

  @Column()
  @IsString({ message: 'The address number must be valid.' })
  @IsNotEmpty({ message: 'The address number cannot be empty.' })
  number!: string;

  @Column()
  @IsString({ message: 'The neighbourhood name must be valid.' })
  @IsNotEmpty({ message: 'The neighbourhood cannot be empty.' })
  neighbourhood!: string;

  @Column()
  @IsString({ message: 'The city name must be valid.' })
  @IsNotEmpty({ message: 'The city cannot be empty.' })
  city!: string;
}
