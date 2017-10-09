import express from 'express';
import bodyParser from 'body-parser';
import mongoose from 'mongoose';
import { attachRoutes } from './app/main/routes';
import ValidationError from "./app/main/ValidationError";

mongoose.Promise = global.Promise;
mongoose.connect('mongodb://127.0.0.1/admin_skeleton', {
  useMongoClient: true
});

const router = express.Router()
const app = express();

app.use(bodyParser.json())
app.use(attachRoutes(router));

app.use(function (err, req, res, next) {
  if (err instanceof ValidationError) {
    res.status(422).json(err);
  } else {
    res.status(500).json(err);
  }
});

app.listen(4000, function () {
    console.log('Example app listening on port 4000!');
});
