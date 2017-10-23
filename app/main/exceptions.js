
export function ValidationError(errors) {
  this.name = 'MyError';
  this.message = 'Validation error';
  this.stack = (new Error()).stack;
  this.errors = errors;
}

ValidationError.prototype = new Error();

export default {};
