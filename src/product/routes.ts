import { Request, Response } from 'express';
import { getRepository } from 'typeorm';
import ProductEntity from './ProductEntity';


export const getProducts = async (req: Request, res: Response) => {
  const products = await getRepository(ProductEntity).find();

  res.json(products);
};

export const getProductById = async (req: Request, res: Response) => {
  const product = await getRepository(ProductEntity).findOne(req.query.id);

  res.json(product);
};

export const createProduct = async (req: Request, res: Response) => {
  const { body } = req;
  const productRequest = {
    name: body.name,
    restaurantId: body.restaurantId,
  };

  const product = await getRepository(ProductEntity).save(productRequest);

  res.json(product);
};
