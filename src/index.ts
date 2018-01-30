import 'reflect-metadata';
import { Router, Response, NextFunction, Errback } from 'express';
import * as express from 'express';
import * as bodyParser from 'body-parser';
import * as cors from 'cors';
import { initBindings } from './inversify.config';
import { attachRoutes } from './main/routes';
import { initConnection } from './main/database';
import { Request } from 'express-serve-static-core';
// import { ValidationError } from './main/exceptions';

const start = async() => {
  const router = Router();
  const app = express();

  initBindings();
  await initConnection();

  app.use(cors());
  app.use(bodyParser.json());
  app.use(attachRoutes(router));

  app.use((err: any, req: Request, res: Response, next: NextFunction) => {
    // if (err instanceof ValidationError) {
    //   // res.status(422).json(err.errors);
    // } else {
    //   res.status(500).json(err);
    // }

    res.status(500).json(err.message);
  });

  app.listen(4000, () => {
    console.log('Example app listening on port 4000!');
  });
};

start();
