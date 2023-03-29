import express from 'express';
const defaultRouter = express.Router();

import clientRouter from './client';
import clientsRouter from './clients';
import mechanicRouter from './mechanic';
import mechanicsRouter from './mechanics';
import partsRouter from './parts';
import servicesRouter from './services';

defaultRouter.use('/api/v1/client', clientRouter);
defaultRouter.use('/api/v1/clients', clientsRouter);
defaultRouter.use('/api/v1/mechanic', mechanicRouter);
defaultRouter.use('/api/v1/mechanics', mechanicsRouter);
defaultRouter.use('/api/v1/parts', partsRouter);
defaultRouter.use('/api/v1/services', servicesRouter);

export default defaultRouter;
