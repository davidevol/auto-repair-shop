import { DataSource } from 'typeorm';
import dotenv from 'dotenv';

dotenv.config();

const port: number = parseInt(process.env.BDPORT as string) || 5432;
const host = process.env.BDHOST;
const password = process.env.BDPASSWORD;
const username = process.env.BDUSERNAME;
const database = process.env.BDDATABASE;

const PostgresDataSource = new DataSource({
  type: 'postgres',
  host: host,
  port: port,
  username: username,
  password: password,
  database: database,
  entities: [
    // ....
  ],
});

export default PostgresDataSource;
