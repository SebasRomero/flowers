import { Controller, Get, Req } from '@nestjs/common';
import { Roles } from 'src/auth/decorators/roles.decorator';
import { Role } from 'src/auth/enums/role.enum';

@Controller('dashboard')
export class DashboardController {
  @Get()
  @Roles(Role.Admin)
  getDashboard(@Req() req) {
    return 'Hey there! ' + req.user.username;
  }
}
