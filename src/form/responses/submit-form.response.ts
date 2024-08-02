import { GeneralResponse } from 'src/responses/general.response';
import { SubmitFormResponseDto } from '../dto/submit-form-response.dto';
import { HttpStatus } from '@nestjs/common';

export class SubmitFormResponse
  implements GeneralResponse<SubmitFormResponseDto>
{
  statusCode: HttpStatus;
  message: string;
  data: SubmitFormResponseDto;
}
