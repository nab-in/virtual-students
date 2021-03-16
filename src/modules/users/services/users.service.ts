import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { User } from '../entities/users.entity';
import { userDTOResolver } from '../helpers/resolve-user-payload.helper';

@Injectable()
export class UsersService {
  constructor(
    @InjectRepository(User)
    private repository: Repository<User>,
  ) {}
  async create(createUserDTO: User): Promise<User> {
    const user = new User();
    const userDTO = await userDTOResolver(createUserDTO, this.repository);
    Object.keys(userDTO).forEach((key) => {
      user[key] = userDTO[key];
    });
    const savedUser = await this.repository.save(user);
    return savedUser;
  }
}
