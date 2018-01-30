export const TYPE_ADMIN_CONTROLLER = 'adminController';
export const TYPE_ADMIN_REPO = 'adminRepo';

export interface ISaveAdminRequest {
  firstName: string;
  lastName: string;
  email: string;
  password: string;
}

export type CreateAdminRequestBody = {
  firstName: string;
  lastName: string;
  email: string;
  password: string;
};

export interface IAdminRepository {
  insertAdmin: (CreateAdminRequestBody) => Promise<string[]>;
  findAll: () => Promise<string[]>;
}
