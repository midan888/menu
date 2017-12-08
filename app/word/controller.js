import { check, validationResult } from 'express-validator/check';
import { ValidationError } from '../main/exceptions';

const validateRequest = (req) => {
  const errors = validationResult(req);
  if (!errors.isEmpty()) {
    throw new ValidationError(errors.mapped());
  }
};

export const createWord = (router) => {
  const rules = [
    check('word').isAlpha().not().isEmpty(),
  ];

  router.post('/word/create', rules, (req, res) => {
    validateRequest(req);

    const { body } = req;
    const admin = saveAdmin(new Admin(), body);

    res.json(admin);
  });
};
