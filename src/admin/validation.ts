import { string, mixed } from 'yup';

export const createAdmin = {
  firstName: string().min(2).required(),
  lastName: string().min(2).required(),
  email: string().email().required(),
  phoneNumber: string().min(5),
  password: string().min(8).required(),
  confirmPassword: string().min(8).required(),
};
