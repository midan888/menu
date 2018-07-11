import axios from 'axios';

const HOST = 'http://localhost:4000';

export const makeRequest = async(path: string, data: any) => {
  return await axios.post(`${HOST}${path}`, data);
};
