import * as got from 'got';

const HOST = 'http://localhost:4000';

const buildPath = (path: string) => {
  const filteredPath = path.replace(/^\//, '');

  return `${HOST}/${filteredPath}`;
};

interface Response<T = any> {
  statusCode: number;
  body: T;
}

export const getRequest = async (path: string): Promise<Response> => {
  const response = await got(buildPath(path));

  return {
    statusCode: response.statusCode,
    body: JSON.parse(response.body),
  };
};

export const deleteRequest = async (path: string): Promise<Response> => {
  const response = await got(buildPath(path), {
    method: 'DELETE',
  });

  return {
    statusCode: response.statusCode,
    body: JSON.parse(response.body),
  };
};

export const postRequest = async (path: string, data: object): Promise<Response> => {
  const url = buildPath(path);

  const response = await got(url, {
    body: JSON.stringify(data),
    method: 'post',
    headers: {
      'Content-Type': 'application/json'
    }
  });

  return {
    statusCode: response.statusCode,
    body: JSON.parse(response.body),
  };
};


