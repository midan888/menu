import { RouteConfig } from '../core/routes';
import { TYPE_REST_CONTROLLER } from './types';
import { string, number } from 'yup';

const createRestRules = {
  name: string().min(2).required(),
};

const deleteRestRules = {
  id: number().required(),
};

const getRoutes = () => ([
  new RouteConfig(
    '/rest/create',
    TYPE_REST_CONTROLLER,
    'createRestaurant',
    createRestRules,
  ),
  new RouteConfig(
    '/rest/delete',
    TYPE_REST_CONTROLLER,
    'deleteRestaurant',
    deleteRestRules,
  ),
  new RouteConfig(
    '/rest/search',
    TYPE_REST_CONTROLLER,
    'searchRestaurants',
  ),
]);

export default getRoutes;
