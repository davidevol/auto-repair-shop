import { Request, Response, NextFunction } from 'express';
import { ClassConstructor, plainToInstance } from 'class-transformer';
import { validate } from 'class-validator';

export const validateEntityMiddleware = (
  entityClass: ClassConstructor<object>,
) => {
  return async (req: Request, res: Response, next: NextFunction) => {
    const entity = plainToInstance(entityClass, req.body);
    const errors = await validate(entity);

    if (errors.length > 0) {
      const validationErrors: { [key: string]: string[] } = {};

      errors.map((error) => {
        const property = error.property;
        const message = Object.values(error.constraints || {}).join(' and ');

        if (!validationErrors[property]) {
          validationErrors[property] = [];
        }
        validationErrors[property].push(message);
      });

      return res.status(422).json({
        message: 'Validation error',
        errors: validationErrors,
      });
    }

    next();
  };
};
