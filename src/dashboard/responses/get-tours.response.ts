import { HttpStatus } from '@nestjs/common';
import { GeneralResponse } from 'src/responses/general.response';

export class GetToursResponse implements GeneralResponse<any> {
  statusCode: HttpStatus;
  data: any;
  message: string;
}
