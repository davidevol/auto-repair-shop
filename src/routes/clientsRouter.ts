import express, { NextFunction, Request, Response } from 'express';
import ClientController from '../controllers/clientController';
import { AppError } from '../errors/appError';
import { ClientRequestEntity } from '../entities/client/clientRequestEntity';
import { validateEntityMiddleware } from '../middlewares/validateEntityMiddleware';

const router = express.Router();

router.get('/', async (req: Request, res: Response) => {
  const limit = req.query.limit;
  const offset = req.query.offset;
  const controller = new ClientController();
  const response = await controller.getClients(limit, offset);
  return res.send(response);
});

router.post(
  '/',
  validateEntityMiddleware(ClientRequestEntity),
  async (req: Request, res: Response) => {
    const controller = new ClientController();
    const response = await controller.createClients(req.body);
    return res.send(response);
  },
);

router.get('/:id', async (req: Request, res: Response, next: NextFunction) => {
  const controller = new ClientController();
  const response = await controller.getClient(req.params.id);
  return !response
    ? next(new AppError(404, `Unknown user ID ${req.params.id}`, 'Not Found'))
    : res.send(response);
});

router.patch(
  '/:id',
  async (req: Request, res: Response, next: NextFunction) => {
    const controller = new ClientController();
    const response = await controller.updateClient(req.params.id, req.body);
    return !response
      ? next(new AppError(404, `Unknown user ID ${req.params.id}`, 'Not Found'))
      : res.send(response);
  },
);

router.delete(
  '/:id',
  async (req: Request, res: Response, next: NextFunction) => {
    const controller = new ClientController();
    const response = await controller.deleteClient(req.params.id);
    return !response
      ? next(new AppError(404, `Unknown user ID ${req.params.id}`, 'Not Found'))
      : res.status(204);
  },
);

export default router;
