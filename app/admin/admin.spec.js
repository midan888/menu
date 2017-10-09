import axios from 'axios';
import Faker from 'Faker';
import httpAdapter from 'axios/lib/adapters/http'

axios.defaults.adapter = httpAdapter;
axios.defaults.baseURL = 'http://127.0.0.1:4000';

test('createAdmin', (done) => {
  const firstName = Faker.Name.firstName();
  const lastName = Faker.Name.lastName();
  const email = Faker.Internet.email();
  const password = 'qwerty';

  axios.post('/admin/create', {
    firstName,
    lastName,
    email,
    password,
  }).then(({ status, data }) => {
    expect(data).toMatchObject({
      firstName,
      lastName,
      email,
      password,
    })

    expect(status).toEqual(200);
    done()
  })
});

test('findAdmin', (done) => {
  const email = 'Deon@josiah.net';

  axios.post('/admin/findByEmail', {
    email,
  }).then(({ status, data }) => {
    expect(data).toMatchObject({
      email,
    })

    expect(status).toEqual(200);
    done()
  })
});

test('search', (done) => {
  axios.post('/admin/search').then(({ status, data }) => {
    expect(status).toEqual(200);
    done()
  })
});

