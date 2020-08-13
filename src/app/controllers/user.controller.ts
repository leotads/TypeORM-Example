import { Request, Response } from 'express';
import UserRepository from '../repositories/user.repository'

export default {
  async index(req: Request, res: Response) {
    
    const users = await UserRepository.getUsers();
    
    res.status(200).json(users)
  }
}