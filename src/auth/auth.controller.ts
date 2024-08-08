import { Body, Controller, Post, UseGuards } from '@nestjs/common';
import { LocalAuthGuard } from './guards/local-auth.guard';
import { AuthService } from './auth.service';
import { CreateUserDto } from './dto/create-user.dto';
import { LoginResponseDto } from './dto/login-response.dto';
import { LoginUserDto } from './dto/login-user.dto';

@Controller('auth')
export class AuthController {
  constructor(private authService: AuthService) {}
  @UseGuards(LocalAuthGuard)
  @Post('login')
  login(@Body() loginUser: LoginUserDto): LoginResponseDto {
    return this.authService.login(loginUser);
  }

  @Post('signup')
  signup(@Body() createUser: CreateUserDto) {
    return this.authService.signUp(createUser);
  }
}
