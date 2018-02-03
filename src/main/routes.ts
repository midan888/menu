import { Router } from 'express';
import { getRoutes } from '../admin/routes';
import { validateRequestMiddleWare } from './validation';
import { Request, Response } from 'express';
import { getContainer } from '../inversify.config';

const mergeRoutes = (): Array<RouteConfig> => {
  return [
    ...getRoutes(),
  ];
};

export function attachRoutes(router: Router) {
  mergeRoutes().forEach((routeConfig: RouteConfig) => {
    try {
      if (routeConfig.validationRules) {
        router.post(
          routeConfig.path,
          validateRequestMiddleWare(routeConfig.validationRules),
          routeConfig.handle);
      } else {
        router.post(routeConfig.path, routeConfig.handle);
      }
    } catch (err) {
      console.log('feodor');
    }
  });

  return router;
}

export class RouteConfig {
  public path: string;
  public controller: string;
  public method: string;
  public validationRules: any;

  constructor(
    path: string,
    controller: string,
    method: string,
    validationRules?: any,
  ) {
    this.path = path;
    this.controller = controller;
    this.method = method;
    this.validationRules = validationRules;

    this.handle = this.handle.bind(this);
  }

  async handle(req: Request, res: Response) {
    try {
      const controller = getContainer().get(this.controller);

      await controller[this.method](req, res);
    } catch (err) {
      console.log(err);
      res.status(500).json(err);
    }
  }
}
