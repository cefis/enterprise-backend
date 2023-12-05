import { IsString, MinLength } from 'class-validator';

export class CreateUserDto {
  @IsString()
  @MinLength(4, { message: 'A senha precisa ter no minino 4 digitos' })
  password: string;

  @IsString()
  @MinLength(1, { message: 'O campo não pode ser vazio' })
  name: string;
}
