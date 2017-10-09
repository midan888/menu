import { check, validationResult } from 'express-validator/check';
import { saveAdmin, findByEmail, findAll } from "./model";
import ValidationError from '../main/ValidationError';

const validateRequest = (req) => {
  const errors = validationResult(req);
  if (!errors.isEmpty()) {
    throw new ValidationError(errors.mapped());
  }
}

export const createAdmin = (router) => {
  const rules = [
    check('firstName').isAlpha().not().isEmpty(),
    check('lastName').isAlpha().not().isEmpty(),
    check('email').isEmail().not().isEmpty(),
    check('password').not().isEmpty(),
  ];

  router.post('/admin/create', rules, function(req, res) {
    validateRequest(req);

    const { body } = req;
    const admin = saveAdmin(body);

    res.json(admin);
  });
}

export const findAdmin = (router) => {
  const rules = [
    check('email').isEmail().not().isEmpty(),
  ];

  router.post('/admin/findByEmail', rules, function(req, res) {
    validateRequest(req);

    findByEmail(req.body.email).then((data) => {
      res.json(data);
    })
  });
}

export const search = (router) => {
  router.post('/admin/search', function(req, res) {
    findAll().then((data) => {
      res.json(data);
    })
  });
}
