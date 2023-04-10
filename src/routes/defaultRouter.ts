import express, { Router } from 'express';

import clientRouter from './clientRouter';
import clientsRouter from './clientsRouter';
import mechanicRouter from './mechanicRouter';
import mechanicsRouter from './mechanicsRouter';
import partsRouter from './partsRouter';
import servicesRouter from './servicesRouter';
import carRouter from './carRouter';

interface Route {
  path: string;
  router: Router;
}

const routes: Route[] = [
  { path: '/api/v1/', router: carRouter },
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
