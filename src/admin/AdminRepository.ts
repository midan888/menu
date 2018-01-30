import { CreateAdminRequestBody } from './types';
import { injectable } from 'inversify';
import { getRepository, Repository, getConnection } from 'typeorm';
import { AdminEntity } from './AdminEntity';

@injectable()
class AdminRepository {
  private readonly repository: Repository<AdminEntity>;

  constructor() {
    this.repository = getRepository(AdminEntity);
  }
  findAll(): Promise<AdminEntity[]> {
    return this.repository.find();
  }

  insertAdmin(adminData: CreateAdminRequestBody): Promise<string[]> {
    return Promise.resolve(['mika']);
  }
}

export default AdminRepository;
