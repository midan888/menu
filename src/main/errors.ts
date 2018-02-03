import { error } from 'util';

export class FieldError {
  public fieldName: string;
  public errors: string[];

  constructor(fieldName, errors) {
    this.fieldName = fieldName;
    this.errors = errors;
  }
}

export class AppError {
  public code: number;
  public message: string;
  public fields: FieldError[];

  constructor(message: string = 'app.error', code: number = 500) {
    this.message = message;
    this.code = code;
  }
}

export class ValidationError extends AppError {
  constructor(fieldErors: FieldError[]) {
    super('validation.error', 422);

    this.fields = fieldErors;
  }
}

export const validationError = (fieldName: string, error: string) => {
  return new ValidationError([
    new FieldError(fieldName, [error])
  ]);
};

export default AppError;
