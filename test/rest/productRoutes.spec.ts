import { postRequest, getRequest } from '../request';

describe('product routes', () => {
  test('create product', async () => {
    const product = {
      name: 'PizzaHut',
      restaurantId: 1,
    };

    const body = await postRequest('/products', product);

    console.log(body);

    expect(body).toMatchObject({
      name: 'PizzaHut',
      restaurantId: 1,
    });

    expect(body.id).toBeTruthy();
  });

  test('get products', async () => {
    const body = await getRequest('/products');

    console.log(body);

    expect(body.length).toBeTruthy();
  });
});
