enum TypeUser {
  STUDENT = 'STUDENT',
  TEACHER = 'TEACHER',
}

export class User {
  id?: string;
  name: string;
  password: string;
  type?: TypeUser;
}
