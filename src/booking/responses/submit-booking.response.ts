import { GeneralResponse } from 'src/responses/general.response';
import { SubmitBookingResponseDto } from '../dto/submit-booking-response.dto';
import { HttpStatus } from '@nestjs/common';

export class SubmitBookingResponse
  implements GeneralResponse<SubmitBookingResponseDto>
{
  statusCode: HttpStatus;
  message: string;
  data: SubmitBookingResponseDto;
}
