import RestaurantEntity from './RestaurantEntity';

export const TYPE_REST_CONTROLLER = 'TYPE_REST_CONTROLLER';
export const TYPE_REST_REPO = 'TYPE_REST_REPO';
export const TYPE_REST_CRUD_SERVICE = 'TYPE_REST_CRUD_SERVICE';


export type CreateRestRequest = {
  name: string
};

export interface IRestCRUDService {
  create(req: CreateRestRequest): Promise<RestaurantEntity>;
}
