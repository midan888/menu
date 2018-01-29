import { IAdminRepository, SaveAdminRequestBody } from './types';
import { injectable, inject } from 'inversify';

@injectable()
class AdminRepository implements IAdminRepository {
  findAll() {
    return Promise.resolve(['ss']);
  }
}

export default AdminRepository;
