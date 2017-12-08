import { createAdmin, findAdmin, search } from '../admin/controller';
import { findAll } from '../admin/repository';

const routes = [
  { fn: createAdmin, dependencies: [findAll] },
  { fn: findAdmin },
  { fn: search },
];

export function attachRoutes(router) {
  routes.forEach(({ dependencies, fn }) => {
    if (dependencies) {
      fn(router, ...dependencies);
    } else {
      fn(router);
    }
  });

  return router;
}

export default {};
