export const TYPE_ADMIN_CONTROLLER = 'adminController';
export const TYPE_ADMIN_REPO = 'adminRepo';
export const TYPE_ADMIN_SERVICE_CREATE = 'createAdminService';

export type CreateAdminRequestBody = {
  firstName: string;
  lastName: string;
  email: string;
  password: string;
  confirmPassword: string;
  phoneNumber: string;
};

