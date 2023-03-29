import express, { Router } from 'express';

import clientRouter from './client';
import clientsRouter from './clients';
import mechanicRouter from './mechanic';
import mechanicsRouter from './mechanics';
import partsRouter from './parts';
import servicesRouter from './services';

interface Route {
  path: string;
  router: Router;
}

const routes: Route[] = [
  { path: '/api/v1/client', router: clientRouter },
  { path: '/api/v1/clients', router: clientsRouter },
  { path: '/api/v1/mechanic', router: mechanicRouter },
  { path: '/api/v1/mechanics', router: mechanicsRouter },
  { path: '/api/v1/parts', router: partsRouter },
  { path: '/api/v1/services', router: servicesRouter },
];

const defaultRouter = express.Router();

routes.forEach((route) => {
  defaultRouter.use(route.path, route.router);
});

export default defaultRouter;
