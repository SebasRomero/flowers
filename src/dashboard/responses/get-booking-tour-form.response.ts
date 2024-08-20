import { HttpStatus } from '@nestjs/common';
import { GeneralResponse } from 'src/responses/general.response';

export class GetBookingTourFormResponse implements GeneralResponse<any> {
  statusCode: HttpStatus;
  data: any;
  message: string;
}
