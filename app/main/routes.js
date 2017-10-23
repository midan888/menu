import { createAdmin, findAdmin, search } from '../admin/controller';

const routes = [
  createAdmin,
  findAdmin,
  search,
];

export function attachRoutes(router) {
  routes.forEach((route) => {
    route(router);
  });

  return router;
};

export default {};
