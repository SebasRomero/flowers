import { Role } from '../enums/role.enum';

export class CreateUserDto {
  username: string;
  name: string;
  password: string;
  role: Role[];
}
