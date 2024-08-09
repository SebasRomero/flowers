import {
  Body,
  Controller,
  HttpStatus,
  Post,
  Request,
  UseGuards,
} from '@nestjs/common';
import { LocalAuthGuard } from './guards/local-auth.guard';
import { AuthService } from './auth.service';
import { CreateUserDto } from './dto/create-user.dto';
import { Public } from './decorators/public.decorator';
import { Roles } from './decorators/roles.decorator';
import { Role } from './enums/role.enum';
import { AuthLoginResponse } from './responses/auth-login.response';
import { AuthSignUpResponse } from './responses/auth-signup.response';

@Controller('auth')
export class AuthController {
  constructor(private authService: AuthService) {}
  @Post('login')
  @Public()
  @UseGuards(LocalAuthGuard)
  login(@Request() req): AuthLoginResponse {
    return {
      statusCode: HttpStatus.OK,
      message: 'Logged in',
      data: this.authService.login(req.user),
    };
  }

  @Post('signup')
  @Roles(Role.Admin)
  async signup(@Body() createUser: CreateUserDto): Promise<AuthSignUpResponse> {
    return {
      statusCode: HttpStatus.OK,
      message: 'Signed up',
      data: await this.authService.signUp(createUser),
    };
  }
}
