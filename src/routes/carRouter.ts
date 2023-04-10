import express, { NextFunction, Request, Response } from 'express';
import { isUUID } from 'class-validator';
import { AppError } from '../errors/appError';
import CarController from '../controllers/carController';
const router = express.Router();

router.post(
  '/clients/:id/cars',
  async (req: Request, res: Response, next: NextFunction) => {
    const id = req.params.id;
    if (!isUUID(id)) {
      return next(new AppError(400, 'Invalid UUID', 'Invalid route'));
    }

    const controller = new CarController();
    const response = await controller.createCar(id, req.body);
    if (!response) {
      return next(
        new AppError(500, 'Internal server error', 'a problem has occurred'),
      );
    }
    return res.send(response);
  },
);

export default router;
