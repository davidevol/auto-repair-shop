import { DataSource } from 'typeorm';
import 'reflect-metadata';
import dotenv from 'dotenv';

import { ClientRequestEntity } from './entity/client/clientRequestEntity';
import { ClientResponseEntity } from './entity/client/clientResponseEntity';
import { ClientResponseWithCarsEntity } from './entity/client/clientResponseWithCars';
import { CarResponseEntity } from './entity/car/carResponseEntity';

dotenv.config();

const PostgresDataSource = new DataSource({
  type: 'postgres',
  host: process.env.POSTGRES_HOST || 'localhost',
  port: Number(process.env.POSTGRES_PORT) || 5432,
  username: process.env.POSTGRES_USER || 'postgres',
  password: process.env.POSTGRES_PASSWORD || 'postgres',
  database: process.env.POSTGRES_DB || 'postgres',
  // entities: [__dirname + '/entity/*{.js,.ts}'], didn't work =(
  entities: [
    ClientResponseEntity,
    ClientRequestEntity,
    CarResponseEntity,
    ClientResponseWithCarsEntity,
  ],
  synchronize: true,
});

export default PostgresDataSource;
