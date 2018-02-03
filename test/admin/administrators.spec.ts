import axios from 'axios';
import { AdminController } from '../../src/admin/AdminController';

describe('AdminController', () => {
  test('createAdmin', async () => {
    const admin = {
      firstName: 'Mika',
      lastName: 'Danielyan',
      email: 'midan888@gmail.com',
      phoneNumber: '79163436029',
      password: 'basturma8',
      confirmPassword: 'basturma8',
    };

    const res = await axios.post('http://localhost:4000/admin/create', admin);

    expect(res.data).toMatchObject({
      firstName: 'Mika',
      lastName: 'Danielyan',
    });
  });

  test('get all admins', async () => {
    const res = await axios.post('http://localhost:4000/admin/search');

    expect(res.status).toBe(200);
  });
});
