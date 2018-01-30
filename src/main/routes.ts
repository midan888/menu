import { Router } from 'express';
import RouteConfig from './RouteConfig';
import { getRoutes } from '../admin/routes';

const mergeRoutes = (): Array<RouteConfig> => {
  return [
    ...getRoutes(),
  ];
};

export function attachRoutes(router: Router) {
  mergeRoutes().forEach((routeConfig: RouteConfig) => {
    router.post(routeConfig.path, routeConfig.handler);
  });

  return router;
}
