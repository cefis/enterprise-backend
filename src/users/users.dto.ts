import { $Enums } from '@prisma/client';

export type UsersDTO = {
  id?: string;
  name: string;
  password: string;
  createdAt: Date | string;
  type: $Enums.TypeUser;
};
