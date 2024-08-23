import { Body, Controller, Get, HttpStatus, Param, Put } from '@nestjs/common';
import { Roles } from 'src/auth/decorators/roles.decorator';
import { Role } from 'src/auth/enums/role.enum';
import { DashboardService } from './dashboard.service';
import { GetBookingTourFormResponse } from './responses/get-booking-tour-form.response';
import { ArchiveBookingTourResponse } from './responses/archive-tour-booking.response';
import { ChangeTourStatusDto } from './dto/change-tour-status.dto';
import { Types } from 'mongoose';

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
  @Get('archived')
  @Roles(Role.Admin)
  async getArchivedBookings(): Promise<GetBookingTourFormResponse> {
    return {
      statusCode: HttpStatus.OK,
      message: 'Ok',
      data: await this.dashBoardService.getArchivedBookings(),
    };
  }

  @Get(':id')
  @Roles(Role.Admin)
  async getBooking(
    @Param('id') id: string,
  ): Promise<GetBookingTourFormResponse> {
    return {
      statusCode: HttpStatus.OK,
      message: 'Ok',
      data: await this.dashBoardService.getBooking(id),
    };
  }


  @Put('archive/:id')
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

  @Put('/change-status/:id')
  @Roles(Role.Admin)
  async changeStatus(
    @Param('id') id: string,
    @Body() status: ChangeTourStatusDto,
  ): Promise<ArchiveBookingTourResponse> {
    return {
      statusCode: HttpStatus.OK,
      message: 'Status changed',
      data: await this.dashBoardService.changeBookingStatus(
        new Types.ObjectId(id),
        status,
      ),
    };
  }
}
