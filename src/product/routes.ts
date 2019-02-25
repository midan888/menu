import { Request, Response } from 'express';
import { getRepository } from 'typeorm';
import ProductEntity from './ProductEntity';


export const getProducts = async (req: Request, res: Response) => {
  const products = await getRepository(ProductEntity).find();

  res.json(products);
};

export const getProductById = async (req: Request, res: Response) => {
  const product = await getRepository(ProductEntity).findOne(req.params.id);

  res.json(product);
};

export const createProduct = async (req: Request, res: Response) => {
  const { body } = req;
  const productRequest = {
    name: body.name,
    restaurantId: body.restaurantId,
    description: body.description,
    price: body.price,
    weight: body.weight,
    calories: body.calories,
    image: body.image,
  };

  const product = await getRepository(ProductEntity).save(productRequest);

  res.json(product);
};

export const updateProduct = async (req: Request, res: Response) => {
  const { body } = req;
  const productRequest = {
    name: body.name,
    restaurantId: body.restaurantId,
    description: body.description,
    price: body.price,
    weight: body.weight,
    calories: body.calories,
    image: body.image,
  };

  const result = await getRepository(ProductEntity).update(body.id, productRequest);

  res.json(result);
};

export const deleteProduct = async (req: Request, res: Response) => {
  const result = await getRepository(ProductEntity).delete(req.params.id);

  res.json(result);
};
