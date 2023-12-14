import { IsString, MinLength } from 'class-validator';
import { User } from '../entities/user.entity';

export class CreateUserDto extends User {
  @IsString()
  @MinLength(4, { message: 'A senha precisa ter no minino 4 digitos' })
  password: string;

  @IsString()
  @MinLength(1, { message: 'O campo não pode ser vazio' })
  name: string;
}
