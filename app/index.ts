import { Router, Response, NextFunction, Errback } from 'express';
import * as express from 'express';
import * as bodyParser from 'body-parser';
import * as cors from 'cors';
import { initBindings } from './inversify.config';
import { attachRoutes } from './main/routes';
import { Request } from 'express-serve-static-core';
// import { ValidationError } from './main/exceptions';

const router = Router();
export const app = express();

initBindings();

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
