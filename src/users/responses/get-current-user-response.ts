import { HttpStatus } from '@nestjs/common';
import { GeneralResponse } from 'src/responses/general.response';
import { IUser } from '../types/user.interface';

export class GetCurrentUserResponse implements GeneralResponse<IUser> {
  statusCode: HttpStatus;
  message: string;
  data: IUser;
}
