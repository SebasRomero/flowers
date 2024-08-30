import { Role } from 'src/auth/enums/role.enum';

export interface IUser {
  username: string;
  name: string;
  password?: string;
  roles: Role[];
}
