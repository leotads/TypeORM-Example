import { EntityRepository, Repository, getConnection } from 'typeorm';

import { User } from '../models/User';


interface IUser {
    id: number;
    name: string;
    email: string;
    passwordHash: string;
    resetPasswordToken: string;
    resetPasswordExpiry: Date;
    createdAt: Date;
    updatedAt: Date;
}

@EntityRepository(User)
class UserRepository extends Repository<User> {
  
  public async getUsers(): Promise<IUser[]> {
    return await getConnection().manager.find(User)
  }
}

export default new UserRepository;