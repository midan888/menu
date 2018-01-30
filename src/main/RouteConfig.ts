import { Request, Response } from 'express';

class RouteConfig {
  public path: string;
  public handler: (req: Request, res: Response) => void;

  constructor(path: string, handler: (req: Request, res: Response) => void) {
    this.path = path;
    this.handler = handler;
  }
}

export default RouteConfig;
