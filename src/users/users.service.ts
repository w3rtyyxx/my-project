import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { User } from './users.entity';
import { UserDto } from './users.dto';

@Injectable()
export class UsersService {
  constructor(
    @InjectRepository(User)
    private readonly userRepository: Repository<User>,
  ) {}

  async createUser(createUserDto: UserDto): Promise<User> {
    const { username, password } = createUserDto;
    const user = new User();
    user.username = username;
    user.password = password;
    return await this.userRepository.save(user);
  }
}


