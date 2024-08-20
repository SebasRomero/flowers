import { GeneralResponse } from 'src/responses/general.response';
import { SubmitContactResponseDto } from '../dto/submit-contact-response.dto';
import { HttpStatus } from '@nestjs/common';

export class SubmitContactResponse
  implements GeneralResponse<SubmitContactResponseDto>
{
  statusCode: HttpStatus;
  message: string;
  data: SubmitContactResponseDto;
}
