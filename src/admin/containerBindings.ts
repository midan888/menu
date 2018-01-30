import { Container } from 'inversify';
import AdminRepository from './AdminRepository';
import AdminController from './AdminController';
import { TYPE_ADMIN_CONTROLLER, TYPE_ADMIN_REPO } from './types';

export const bindAdminModule = (container: Container) => {
  container.bind(TYPE_ADMIN_CONTROLLER).to(AdminController);
  container.bind(TYPE_ADMIN_REPO).to(AdminRepository);
};
