import { Request, Response } from 'express';

class RouteConfig {
  public path: string;
  public handler: (req: Request, res: Response) => void;
  public validationRules: any;

  constructor(
    path: string,
    handler: (req: Request, res: Response) => void,
    validationRules?: any,
  ) {
    this.path = path;
    this.handler = handler;
    this.validationRules = validationRules;
  }
}

export default RouteConfig;
