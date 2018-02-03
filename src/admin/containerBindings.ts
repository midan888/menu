import { Container } from 'inversify';
import { getRepository } from 'typeorm';
import { AdminController } from './AdminController';
import {
  TYPE_ADMIN_CONTROLLER,
  TYPE_ADMIN_REPO,
  TYPE_ADMIN_SERVICE_CREATE,
} from './interfaces';
import { AdminEntity } from './AdminEntity';
import { CreateAdminService } from './CreateAdminService';

export const bindAdminModule = (container: Container) => {
  container.bind(TYPE_ADMIN_CONTROLLER).to(AdminController);
  container.bind(TYPE_ADMIN_SERVICE_CREATE).to(CreateAdminService);
  container.bind(TYPE_ADMIN_REPO).toDynamicValue(() => ( getRepository(AdminEntity)));
};
