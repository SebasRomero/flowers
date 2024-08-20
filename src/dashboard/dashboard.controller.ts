import { Controller, Get, HttpStatus, Param, Post, Put } from '@nestjs/common';
import { Roles } from 'src/auth/decorators/roles.decorator';
import { Role } from 'src/auth/enums/role.enum';
import { DashboardService } from './dashboard.service';
import { GetBookingTourFormResponse } from './responses/get-booking-tour-form.response';
import { ArchiveBookingTourResponse } from './responses/archive-tour-booking.response';

@Controller('dashboard')
export class DashboardController {
  constructor(private readonly dashBoardService: DashboardService) {}
  @Get()
  @Roles(Role.Admin)
  async getBookings(): Promise<GetBookingTourFormResponse> {
    return {
      statusCode: HttpStatus.OK,
      message: 'Ok',
      data: await this.dashBoardService.getBookings(),
    };
  }

  @Get('/archived')
  @Roles(Role.Admin)
  async getArchivedBookings(): Promise<GetBookingTourFormResponse> {
    return {
      statusCode: HttpStatus.OK,
      message: 'Ok',
      data: await this.dashBoardService.getArchivedBookings(),
    };
  }

  @Put(':id')
  @Roles(Role.Admin)
  async archiveBook(
    @Param('id') id: string,
  ): Promise<ArchiveBookingTourResponse> {
    return {
      statusCode: HttpStatus.OK,
      message: 'Archived',
      data: await this.dashBoardService.archiveBooking(id),
    };
  }
}
