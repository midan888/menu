import { check, validationResult } from 'express-validator/check';
import { saveAdmin, findByEmail, Admin, findById } from './repository';
import { ValidationError } from '../main/exceptions';

const validateRequest = (req) => {
  const errors = validationResult(req);
  if (!errors.isEmpty()) {
    throw new ValidationError(errors.mapped());
  }
};

export const createAdmin = (router) => {
  const rules = [
    check('firstName').isAlpha().not().isEmpty(),
    check('lastName').isAlpha().not().isEmpty(),
    check('email').isEmail().not().isEmpty(),
    check('password').not().isEmpty(),
  ];

  router.post('/admin/create', rules, (req, res) => {
    validateRequest(req);

    const { body } = req;
    const admin = saveAdmin(new Admin(), body);

    res.json(admin);
  });
};

export const findAdminByEmail = (router) => {
  const rules = [
    check('email').isEmail().not().isEmpty(),
  ];

  router.post('/admin/findByEmail', rules, (req, res) => {
    validateRequest(req);

    findByEmail(req.body.email).then((data) => {
      res.json(data);
    });
  });
};

export const findAdmin = (router) => {
  const rules = [
    check('id').not().isEmpty(),
  ];

  router.post('/admin/findById', rules, (req, res) => {
    validateRequest(req);

    findById(req.body.id).then((data) => {
      res.json(data);
    });
  });
};

export const search = (router, findAll) => {
  router.post('/admin/search', (req, res) => {
    findAll().then((data) => {
      res.json(data);
    });
  });
};
