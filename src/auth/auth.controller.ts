import { Body, Controller, Post, Request, UseGuards } from '@nestjs/common';
import { LocalAuthGuard } from './guards/local-auth.guard';
import { AuthService } from './auth.service';
import { CreateUserDto } from './dto/create-user.dto';
import { LoginResponseDto } from './dto/login-response.dto';

@Controller('auth')
export class AuthController {
  constructor(private authService: AuthService) {}
  @UseGuards(LocalAuthGuard)
  @Post('login')
  login(@Request() req): LoginResponseDto {
    return this.authService.login(req.user);
  }

  @Post('signup')
  signup(@Request() req, @Body() createUser: CreateUserDto) {
    console.log(createUser);
    return this.authService.signUp(createUser);
  }
}
