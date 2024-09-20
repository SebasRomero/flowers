import {
  Body,
  Controller,
  Delete,
  Get,
  HttpStatus,
  Param,
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
import { LoginUserDto } from './dto/login-user.dto';
import { GetUserResponse } from './responses/get-user.response';

@Controller('auth')
export class AuthController {
  constructor(private authService: AuthService) {}
  @Post('login')
  @Public()
  @UseGuards(LocalAuthGuard)
  login(@Request() req, @Body() loginUserDto: LoginUserDto): AuthLoginResponse {
    return {
      statusCode: HttpStatus.OK,
      message: 'Logged in',
      data: this.authService.login(req.user),
    };
  }

  @Post('create-user')
  @Roles(Role.ADMIN)
  async createUser(
    @Body() createUser: CreateUserDto,
  ): Promise<AuthSignUpResponse> {
    return {
      statusCode: HttpStatus.OK,
      message: 'User created',
      data: await this.authService.createUser(createUser),
    };
  }

  @Get('users')
  @Roles(Role.ADMIN)
  async getUsers(): Promise<GetUserResponse> {
    return {
      statusCode: HttpStatus.OK,
      message: 'Users',
      data: await this.authService.getUsers(),
    };
  }

  @Delete('delete-user/:id')
  @Roles(Role.ADMIN)
  async deleteUser(@Param('id') id: string): Promise<any> {
    return {
      statusCode: HttpStatus.OK,
      message: 'User deleted',
      data: await this.authService.deleteUser(id),
    };
  }
}
