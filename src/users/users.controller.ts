import { Controller, Get, HttpStatus, Req } from '@nestjs/common';
import { UsersService } from './users.service';
import { GetCurrentUserResponse } from './responses/get-current-user-response';
import { Roles } from 'src/auth/decorators/roles.decorator';
import { Role } from 'src/auth/enums/role.enum';

@Controller('users')
export class UsersController {
  constructor(private userService: UsersService) {}

  @Get('current-user')
  @Roles(Role.Admin)
  async currentUser(@Req() req): Promise<GetCurrentUserResponse> {
    console.log(req);
    return {
      message: 'Current user',
      statusCode: HttpStatus.OK,
      data: await this.userService.getCurrentUser(req.user.sub),
    };
  }
}
