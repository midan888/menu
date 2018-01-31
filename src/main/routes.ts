import { Router } from 'express';
import RouteConfig from './RouteConfig';
import { getRoutes } from '../admin/routes';
import { validateRequestMiddleWare } from './validation';

const mergeRoutes = (): Array<RouteConfig> => {
  return [
    ...getRoutes(),
  ];
};

export function attachRoutes(router: Router) {
  mergeRoutes().forEach((routeConfig: RouteConfig) => {
    if (routeConfig.validationRules) {
      router.post(
        routeConfig.path,
        validateRequestMiddleWare(routeConfig.validationRules),
        routeConfig.handler);
    } else {
      router.post(routeConfig.path, routeConfig.handler);
    }
  });

  return router;
}
