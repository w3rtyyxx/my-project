// user.controller.ts
import { Body, Controller, Post } from '@nestjs/common';
import { UsersService } from './users.service'; // Make sure to import your UsersService
import { UserDto } from './users.dto'; // We'll define this DTO in the next step
import { User } from './users.entity';
@Controller('users')
export class UserController {
  constructor(private readonly usersService: UsersService) {}

  @Post()
  async create(@Body() createUserDto: UserDto): Promise<UserDto> {
    return await this.usersService.createUser(createUserDto);
  }
}
