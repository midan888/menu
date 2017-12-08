/* eslint-env jest */
import { search } from './controller';

test('search', () => {
  const router = {
    post: jest.fn(),
  };

  const findAll = jest.fn();

  search(router, findAll);

  const route = router.post.mock.calls[0][0];
  const cb = router.post.mock.calls[0][1];

  cb();

  expect(route).toEqual('/admin/search');
});
