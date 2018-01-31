import RouteConfig from '../main/RouteConfig';
import { AdminController } from './AdminController';
import { getContainer } from '../inversify.config';
import { TYPE_ADMIN_CONTROLLER } from './types';
import { createAdmin } from './validation';

export const getRoutes = () => ([
  new RouteConfig('/admin/findAll', (req, res) => {
    getContainer().get<AdminController>(TYPE_ADMIN_CONTROLLER).findAll(req, res);
  }),
  new RouteConfig('/admin/create', (req, res) => {
    getContainer().get<AdminController>(TYPE_ADMIN_CONTROLLER).createAdmin(req, res);
  }, createAdmin),
]);
