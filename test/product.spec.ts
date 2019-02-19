import { postRequest, getRequest, deleteRequest } from './request';

const createProduct = async () => {
  const product = {
    name: 'PizzaHut',
    restaurantId: 1,
  };

  return postRequest('/products', product);
};

describe('product routes', () => {
  test('create product', async () => {

    const { body } = await createProduct();
    console.log(body);

    expect(body).toMatchObject({
      name: 'PizzaHut',
      restaurantId: 1,
    });

    expect(body.id).toBeTruthy();
  });

  test('get products', async () => {
    const { body } = await getRequest('/products');

    console.log(body);

    expect(body.length).toBeTruthy();
  });

  test('delete product', async () => {
    const { body } = await createProduct();
    const { statusCode, body: a } = await deleteRequest(`/products/${body.id}`);
    console.log(statusCode, a);

    expect(statusCode).toBeTruthy();
  });

  test('update product', async () => {
    const { body } = await createProduct();
    await postRequest(`/products/${body.id}`, {
      ...body,
      name: 'mika'
    });

    const { body: getBody } = await getRequest(`/products/${body.id}`);

    expect(getBody.name).toBe('mika');
  });
});
