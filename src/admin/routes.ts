import { RouteConfig } from '../core/routes';
import { TYPE_ADMIN_CONTROLLER } from './interfaces';
import { createAdminRules } from './validation';

export const getRoutes = () => ([
  new RouteConfig(
    '/admin/create',
    TYPE_ADMIN_CONTROLLER,
    'createAdmin',
    createAdminRules,
  ),
  new RouteConfig(
    '/admin/search',
    TYPE_ADMIN_CONTROLLER,
    'search',
  ),
]);
