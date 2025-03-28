import { Injectable } from '@nestjs/common';
import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';
import { PrismaService } from '@learnify/packages/prisma';
import { User } from '@prisma/client';

@Injectable()
export class UserService {
  constructor(private readonly prisma: PrismaService) {
  }

  create(createUserDto: CreateUserDto) {
    return this.prisma.user.create({
      data: {
        ...createUserDto
      }
    });
  }


 async update(userId: number, updateUserDto: UpdateUserDto): Promise<User> {
    return this.prisma.user.update({
      where: {
        id: userId
      },
      data: {
        ...updateUserDto
      }
    });
  }


  getProfile(userId: number) {
    return this.prisma.user.findUnique({ where: { id: userId } });
  }
}
