import { Router } from 'express';
import {
  getProducts,
  getProductById,
  createProduct,
} from './product/routes';

export const attachRoutes = (router: Router): Router => {
  router.get('/products', getProducts);
  router.get('/products/:id', getProductById);
  router.post('/products', createProduct);

  return router;
};
