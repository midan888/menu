import { CreateAdminRequestBody } from './types';
import { injectable } from 'inversify';
import { getRepository, Repository, getConnection, BaseEntity } from 'typeorm';
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

  insertAdmin(data: CreateAdminRequestBody): Promise<AdminEntity> {
    const adminEntity = new AdminEntity();

    adminEntity.email = data.email;
    adminEntity.password = data.password;
    adminEntity.firstName = data.firstName;
    adminEntity.lastName = data.lastName;
    adminEntity.phoneNumber = data.phoneNumber;

    return this.repository.save(adminEntity);
  }
}

export default AdminRepository;
