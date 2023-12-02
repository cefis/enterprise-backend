import { User } from '../entities/user.entity';
import { IsEnum, IsString, MinLength } from 'class-validator';

export enum TypeUser {
  STUDENT = 'STUDENT',
  TEACHER = 'TEACHER',
}

export class CreateUserDto extends User {
  @IsString()
  @MinLength(4, { message: 'A senha precisa ter no minino 4 digitos' })
  password: string;

  @IsString()
  @MinLength(1, { message: 'O campo não pode ser vazio' })
  name: string;

  @IsEnum(TypeUser, { message: 'Você precisa informar o tipo do usuario' })
  readonly type: TypeUser;
}
