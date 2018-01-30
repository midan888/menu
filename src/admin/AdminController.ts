import { Request, Response } from 'express';
import { inject, injectable } from 'inversify';
import { CreateAdminRequestBody, TYPE_ADMIN_REPO } from './types';
import AdminRepository from './AdminRepository';

@injectable()
class AdminController {
  private adminRepo: AdminRepository;

  constructor(@inject(TYPE_ADMIN_REPO) adminRepository: AdminRepository) {
    this.adminRepo = adminRepository;
  }

  async createAdmin(req: Request, res: Response) {
    const createAdminRequestBody = {
      firstName: req.body.firstName,
      lastName: req.body.lastName,
      email: req.body.email,
      password: req.body.password,
    };

    this.adminRepo.insertAdmin(createAdminRequestBody);
  }

  async findAll(req: Request, res: Response) {
    res.json(await this.adminRepo.findAll());
  }
}

export default AdminController;
