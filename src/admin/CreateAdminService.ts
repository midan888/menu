import { CreateAdminRequestBody, TYPE_ADMIN_REPO } from './interfaces';
import { inject, injectable } from 'inversify';
import { AdminEntity } from './AdminEntity';
import { Repository } from 'typeorm';

@injectable()
export class CreateAdminService {
  private repository: Repository<AdminEntity>;

  constructor(@inject(TYPE_ADMIN_REPO) adminRepository) {
    this.repository = adminRepository;
  }

  createAdmin(data: CreateAdminRequestBody): Promise<AdminEntity> {
    const adminEntity = new AdminEntity();

    adminEntity.email = data.email;
    adminEntity.password = data.password;
    adminEntity.firstName = data.firstName;
    adminEntity.lastName = data.lastName;
    adminEntity.phoneNumber = data.phoneNumber;

    return this.repository.save(adminEntity);
  }

  search() {
    return this.repository.find();
  }
}
