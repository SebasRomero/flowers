import { Role } from '../enums/role.enum';

export class CreateUserDto {
  username: string;
  password: string;
  role: Role[];
}
