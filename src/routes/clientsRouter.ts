import express, { NextFunction, Request, Response } from 'express';
import ClientController from '../controllers/clientController';
import { QueryFailedError } from 'typeorm';
import {
  ValidationErrorResponse,
  validationErrorHandler,
} from '../app-validation-error';
import { AppError } from '../app-error';

const router = express.Router();

router.use(
  (
    err: ValidationErrorResponse,
    req: Request,
    res: Response,
    next: NextFunction,
  ) => {
    err instanceof QueryFailedError
      ? validationErrorHandler(err, req, res, next)
      : next(new AppError(500, 'Internal server error', 'error'));
  },
);

router.get('/', async (req: Request, res: Response) => {
  const limit = req.query.limit;
  const offset = req.query.offset;
  const controller = new ClientController();
  const response = await controller.getClients(limit, offset);
  return res.send(response);
});

router.post('/', async (req: Request, res: Response, next: NextFunction) => {
  try {
    const controller = new ClientController();
    const response = await controller.createClients(req.body);
    return res.send(response);
  } catch (err) {
    err instanceof QueryFailedError;
    return next(err);
  }
});

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

// TODO

router.get(':id/cars'); // get all cars
router.post(':id/cars'); // add client car
router.patch(':id/cars/:carId'); // update client car
router.delete(':id/cars/:carId'); // remove client car by id
router.get(':id/cars/:carId'); // remove client car by id

export default router;
