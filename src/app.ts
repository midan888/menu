import { NextFunction, Response, Router } from 'express';
import * as cors from 'cors';
import { attachRoutes } from './core/routes';
import { Request } from 'express-serve-static-core';
import * as bodyParser from 'body-parser';
import * as express from 'express';

export const initApp = () => {
  const router = Router();
  const app = express();

  app.use(cors());
  app.use(bodyParser.json());
  app.use(attachRoutes(router));
  app.use((err: any, req: Request, res: Response, next: NextFunction) => {
    // if (err instanceof ValidationError) {
    //   // res.status(422).json(err.errors);
    // } else {
    //   res.status(500).json(err);
    // }

    console.log(err);
    res.status(500).json(err);
  });

  return app;
};
