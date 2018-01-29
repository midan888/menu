import { Request, Response } from 'express';
import { inject, injectable } from 'inversify';
import { TYPE_ADMIN_REPO } from './types';
import AdminRepository from './AdminRepository';

@injectable()
class AdminController {
  private adminRepo: AdminRepository;

  constructor(@inject(TYPE_ADMIN_REPO) adminRepository: AdminRepository) {
    this.adminRepo = adminRepository;
  }

  async findAll(req: Request, res: Response) {
    const admins = await this.adminRepo.findAll();

    res.json(admins);
  }
}

export default AdminController;
