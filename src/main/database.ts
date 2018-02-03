import { createConnection } from 'typeorm';

export let connectionPromise;

export const initConnection = async() => {
  try {
    connectionPromise = await createConnection();
  } catch (err) {
    console.log(err);
  }
};
