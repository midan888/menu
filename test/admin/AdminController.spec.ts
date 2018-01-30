import axios, { AxiosRequestConfig, AxiosPromise, AxiosError } from 'axios';
import { AdminController } from '../../src/admin/AdminController';

describe('AdminController', () => {
  test('createAdmin', async () => {
    const res = await axios.post('http://localhost:4000/admin/create', {
      firstName: 'Mika',
    });

    expect(res.status).toBe(200);
  });
});
