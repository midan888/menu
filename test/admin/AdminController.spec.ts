import axios from 'axios';
import { AdminController } from '../../src/admin/AdminController';

describe('AdminController', () => {
  test('createAdmin succesfully', async () => {
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
});
