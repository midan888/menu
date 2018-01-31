import { Request, Response } from 'express';
import { inject, injectable } from 'inversify';
import { TYPE_ADMIN_REPO } from './types';
import AdminRepository from './AdminRepository';

@injectable()
export class AdminController {
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
      confirmPassword: req.body.confirmPassword,
      phoneNumber: req.body.phoneNumber,
    };

    res.json(await this.adminRepo.insertAdmin(createAdminRequestBody));
  }

  async findAll(req: Request, res: Response) {
    res.json(await this.adminRepo.findAll());
  }
}

