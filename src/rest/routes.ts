import { RouteConfig } from '../core/routes';
import { TYPE_REST_CONTROLLER } from './types';
import { string } from 'yup';

const createRestRules = {
  name: string().min(2).required(),
};

const getRoutes = () => ([
  new RouteConfig(
    '/rest/create',
    TYPE_REST_CONTROLLER,
    'createRestaurant',
    createRestRules,
  ),
]);

export default getRoutes;
