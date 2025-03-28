import { Controller, Get, Post, Body, Patch, Param } from '@nestjs/common';
import { UserService } from './user.service';
import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';
import { CurrentUser } from './decorators/user.decorator';

@Controller('user')
export class UserController {
  constructor(private readonly userService: UserService) {}

  @Post()
  create(@Body() createUserDto: CreateUserDto) {
    return this.userService.create(createUserDto);
  }



  @Patch(":userId")
  async updateUser(@Body() updateUserDto: UpdateUserDto, @Param("userId") userId: string) {
    return this.userService.update(+userId,updateUserDto);
  }


  @Get()
  getProfile(@CurrentUser("id") userId: string) {
    return this.userService.getProfile(+userId);
  }
}
