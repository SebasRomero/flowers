import { GeneralResponse } from 'src/responses/general.response';
import { HttpStatus } from '@nestjs/common';
import { SignUpResponseDto } from '../dto/signup-response.dto';

export class AuthSignUpResponse implements GeneralResponse<SignUpResponseDto> {
  statusCode: HttpStatus;
  message: string;
  data: SignUpResponseDto;
}
