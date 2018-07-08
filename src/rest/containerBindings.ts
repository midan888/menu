import { Container } from 'inversify';
import { getRepository } from 'typeorm';
import RestAdminController from './RestAdminController';
import { TYPE_REST_CONTROLLER, TYPE_REST_REPO, TYPE_REST_CRUD_SERVICE } from './types';
import RestaurantEntity from './RestaurantEntity';
import RestCRUDService from './RestCRUDService';

const bindAdminModule = (container: Container) => {
  container.bind(TYPE_REST_CONTROLLER).to(RestAdminController);
  container.bind(TYPE_REST_CRUD_SERVICE).to(RestCRUDService);
  container.bind(TYPE_REST_REPO).toDynamicValue(() => ( getRepository(RestaurantEntity)));
};

export default bindAdminModule;
