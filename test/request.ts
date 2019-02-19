import * as got from 'got';

const HOST = 'http://localhost:4000';

const buildPath = (path: string) => {
  const filteredPath = path.replace(/^\//, '');

  return `${HOST}/${filteredPath}`;
};

export const getRequest = async (path: string) => {
  const response = await got(buildPath(path));

  return JSON.parse(response.body);
};

export const postRequest = async (path: string, data: object) => {
  const url = buildPath(path);

  const response = await got(url, {
    body: JSON.stringify(data),
    method: 'post',
    headers: {
      'Content-Type': 'application/json'
    }
  });

  return JSON.parse(response.body);
};
