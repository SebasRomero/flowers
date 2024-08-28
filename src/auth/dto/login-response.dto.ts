import { IUser } from 'src/users/types/user.interface';

export class LoginResponseDto {
  user: IUser;
  access_token: string;
}
