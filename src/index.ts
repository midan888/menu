import 'reflect-metadata';
import { initConnection } from './core/database';
import { initApp } from './app';

initConnection();

const app = initApp();

app.listen(4000, () => {
  console.log('Example app listening on port 4000!');
});
