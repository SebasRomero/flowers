import { IUser } from 'src/users/types/user.interface';

export class SignUpResponseDto {
  user: IUser;
  access_token: string;
}
