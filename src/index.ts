import 'reflect-metadata';
import { initBindings } from './inversify.config';
import { initConnection } from './core/database';
import { initApp } from './app';

initBindings();
initConnection();

export const app = initApp();

app.listen(4000, () => {
  console.log('Example app listening on port 4000!');
});

