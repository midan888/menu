import express from 'express';
import bodyParser from 'body-parser';
import mongoose from 'mongoose';
import cors from 'cors';
import { attachRoutes } from './app/main/routes';
import { ValidationError } from './app/main/exceptions';

mongoose.Promise = global.Promise;
mongoose.connect('mongodb://127.0.0.1/admin_skeleton', {
  useMongoClient: true,
});

const router = express.Router();
const app = express();

app.use(cors());
app.use(bodyParser.json());

app.use(attachRoutes(router));

app.use((err, req, res, next) => {
  if (err instanceof ValidationError) {
    res.status(422).json(err.errors);
  } else {
    res.status(500).json(err);
  }
});

app.listen(4000, () => {
  console.log('Example app listening on port 4000!');
});
