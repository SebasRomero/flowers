import { GeneralResponse } from 'src/responses/general.response';
import { LoginResponseDto } from '../dto/login-response.dto';
import { HttpStatus } from '@nestjs/common';

export class AuthLoginResponse implements GeneralResponse<LoginResponseDto> {
  statusCode: HttpStatus;
  message: string;
  data: LoginResponseDto;
}
