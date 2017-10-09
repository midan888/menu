
class ValidationError extends Error {
  constructor(errors) {
    super('Validation error');

    this.errors = errors;
  }
}

export default ValidationError;
