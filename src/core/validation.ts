import { NextFunction, Response, Request } from 'express';
import { ValidationError, object } from 'yup';

export const validateRequestMiddleWare = (validationRules: any) => {
  return async(req: Request, res: Response, next: NextFunction) => {
    try {
      await object().shape(validationRules).validate(req.body, { abortEarly: false });
      next();
    } catch (err) {
      const response = err.inner.map((validationError: ValidationError) => {
        return {
          field: validationError.path,
          errors: validationError.errors,
        };
      });
      res.status(422).json(response);
    }
  };
};
