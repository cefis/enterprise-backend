import { Injectable } from '@nestjs/common';

@Injectable()
export class AuthService {
  validateUser(name: string, password: string) {
    throw new Error('Method not implemented.');
  }
}
