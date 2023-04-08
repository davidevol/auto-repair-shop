import dotenv from 'dotenv';
import app from './app';
import logger from './utils/logger';
import PostgresDataSource from './database/appDataSource';

dotenv.config();
const PORT = process.env.PORT || 3000;

PostgresDataSource.initialize()
  .then(() => {
    logger.info('Data Source has been initialized!');
  })
  .catch((err) => {
    logger.error('Error during Data Source initialization', err);
  });

app.listen(PORT, () => {
  logger.info(`URL: http://localhost:${PORT}`);
});
