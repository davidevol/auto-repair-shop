import { DataSource } from 'typeorm';
import 'reflect-metadata';
import dotenv from 'dotenv';

import { ClientRequestEntity } from '../entities/client/clientRequestEntity';
import { ClientResponseEntity } from '../entities/client/clientResponseEntity';
import { ClientResponseWithCarsEntity } from '../entities/client/clientResponseWithCars';
import { CarResponseEntity } from '../entities/car/carResponseEntity';
import { CarRequestEntity } from '../entities/car/carRequestEntity';

dotenv.config();

const PostgresDataSource = new DataSource({
  type: 'postgres',
  host: process.env.POSTGRES_HOST || 'localhost',
  port: Number(process.env.POSTGRES_PORT) || 5432,
  username: process.env.POSTGRES_USER || 'postgres',
  password: process.env.POSTGRES_PASSWORD || 'postgres',
  database: process.env.POSTGRES_DB || 'postgres',
  entities: [
    ClientResponseEntity,
    ClientRequestEntity,
    CarRequestEntity,
    CarResponseEntity,
    ClientResponseWithCarsEntity,
    __dirname + '/entities/**/*{.js,.ts}',
  ],
  synchronize: true,
});

export default PostgresDataSource;
