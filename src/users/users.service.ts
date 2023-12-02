import { Injectable } from '@nestjs/common';
import { UsersDTO } from './users.dto';
import { PrismaService } from 'src/database/prisma.service';

@Injectable()
export class UsersService {
  constructor(private prisma: PrismaService) {}

  async create(data: UsersDTO) {
    if (!data.name || !data.password) {
      throw new Error('Preencha os campos  vazios');
    }

    const user = await this.prisma.user.create({
      data,
    });
    return user;
  }

  async findAll() {
    return this.prisma.user.findMany();
  }
}
