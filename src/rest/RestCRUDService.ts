import { TYPE_REST_REPO, IRestCRUDService, CreateRestRequest } from './types';
import { inject, injectable } from 'inversify';
import RestaurantEntity from './RestaurantEntity';
import { Repository } from 'typeorm';

@injectable()
class RestCRUDService implements IRestCRUDService {
  private repository: Repository<RestaurantEntity>;

  constructor(@inject(TYPE_REST_REPO) repository) {
    this.repository = repository;
  }

  async create(req: CreateRestRequest): Promise<RestaurantEntity> {
    const restaurant = new RestaurantEntity();

    restaurant.name = req.name;
    restaurant.address = '';
    restaurant.phoneNumber = '';

    return this.repository.save(restaurant);
  }
}


export default RestCRUDService;
