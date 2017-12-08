import axios from 'axios';
import Faker from 'Faker';
import httpAdapter from 'axios/lib/adapters/http';

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
    });

    expect(status).toEqual(200);
    done();
  });
});

test('findAdminByEmail', (done) => {
  const email = 'Deon@josiah.net';

  axios.post('/admin/findByEmail', {
    email,
  }).then(({ status, data }) => {
    expect(data).toMatchObject({
      email,
    });

    expect(status).toEqual(200);
    done();
  });
});

test('findAdminById', (done) => {
  const id = '59dabae5c89e7614aa25494c';
  axios.post('/admin/findById', {
    id,
  }).then(({ status, data }) => {
    expect(data).toMatchObject({
      _id: id,
    });

    expect(status).toEqual(200);
    done();
  });
});

test('search', (done) => {
  axios.post('/admin/search').then(({ status }) => {
    expect(status).toEqual(200);
    done();
  });
});

test('findAdmin:validation error', (done) => {
  axios.post('/admin/findByEmail').catch(({ response }) => {
    expect(response.status).toEqual(422);
    done();
  });
});
