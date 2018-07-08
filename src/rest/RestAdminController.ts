import { Request, Response } from 'express';
import { inject, injectable } from 'inversify';
import { TYPE_REST_CRUD_SERVICE } from './types';
import RestCRUDService from './RestCRUDService';

@injectable()
class RestAdminController {
  private crudService: RestCRUDService;

  constructor(@inject(TYPE_REST_CRUD_SERVICE) service) {
    this.crudService = service;
  }

  async createRestaurant(req: Request, res: Response) {
    const { body } = req;
    const createRestReq = {
      name: body.name,
    };

    res.json(await this.crudService.create(createRestReq));
  }
}

export default RestAdminController;
