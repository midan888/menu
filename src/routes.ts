import { Router } from 'express';
import {
  getProducts,
  getProductById,
  createProduct,
  deleteProduct,
  updateProduct,
} from './product/routes';

export const attachRoutes = (router: Router): Router => {
  router.get('/products', getProducts);
  router.get('/products/:id', getProductById);
  router.post('/products', createProduct);
  router.delete('/products/:id', deleteProduct);
  router.post('/products/:id', updateProduct);

  return router;
};
