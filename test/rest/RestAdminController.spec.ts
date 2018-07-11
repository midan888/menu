import axios from 'axios';
import { makeRequest } from '../request';

describe('RestAdminController', () => {
  test('Create restaurant', async () => {
    const admin = {
      name: 'PizzaHut',
    };

    const { data } = await makeRequest('/rest/create', admin);

    expect(data).toMatchObject({
      name: 'PizzaHut',
    });
  });

  test('Delete restaurant', async () => {
    const admin = {
      name: 'PizzaHut',
    };
    const { data } = await makeRequest('/rest/create', admin);
    const { status } = await makeRequest('/rest/delete', { id: data.id });

    expect(status).toBe(200);
  });

  test('Search restaurants', async () => {
    const { status } = await makeRequest('/rest/search', {});

    expect(status).toBe(200);
  });
});
