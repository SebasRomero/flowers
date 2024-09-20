import { GeneralResponse } from 'src/responses/general.response';
import { GetUsersDto } from '../dto/get-user-response.dto';
import { HttpStatus } from '@nestjs/common';

export class GetUserResponse implements GeneralResponse<GetUsersDto[]> {
  statusCode: HttpStatus;
  message: string;
  data: GetUsersDto[];
}
