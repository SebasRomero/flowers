import {
  Body,
  Controller,
  Get,
  HttpStatus,
  Param,
  Put,
  Query,
  Req,
} from '@nestjs/common';
import { Roles } from 'src/auth/decorators/roles.decorator';
import { Role } from 'src/auth/enums/role.enum';
import { DashboardService } from './dashboard.service';
import { GetBookingTourFormResponse } from './responses/get-booking-tour-form.response';
import { ArchiveBookingTourResponse } from './responses/archive-tour-booking.response';
import { ChangeTourStatusDto } from './dto/change-tour-status.dto';
import { Types } from 'mongoose';
import { IQueryGetBookings, IQueryGetClient } from './types/query.interface';
import { GetClientsResponse } from './responses/get-client.response';

@Controller('dashboard')
export class DashboardController {
  constructor(private readonly dashBoardService: DashboardService) {}
  @Get()
  @Roles(Role.Admin)
  async getBookings(
    @Query() query: IQueryGetBookings,
  ): Promise<GetBookingTourFormResponse> {
    return {
      statusCode: HttpStatus.OK,
      message: 'Ok',
      data: await this.dashBoardService.getBookings(query),
    };
  }
  @Get('archived')
  @Roles(Role.Admin)
  async getArchivedBookings(
    @Query() query: IQueryGetBookings,
  ): Promise<GetBookingTourFormResponse> {
    return {
      statusCode: HttpStatus.OK,
      message: 'Ok',
      data: await this.dashBoardService.getArchivedBookings(query),
    };
  }

  @Get('client')
  @Roles(Role.Admin)
  async getClients(
    @Query() query: IQueryGetClient,
  ): Promise<GetClientsResponse> {
    return {
      statusCode: HttpStatus.OK,
      message: 'Clients',
      data: await this.dashBoardService.getClients(query),
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
    @Req() req,
    @Param('id') id: string,
    @Body() status: ChangeTourStatusDto,
  ): Promise<ArchiveBookingTourResponse> {
    return {
      statusCode: HttpStatus.OK,
      message: 'Status changed',
      data: await this.dashBoardService.changeBookingStatus(
        req.user.username,
        new Types.ObjectId(id),
        status,
      ),
    };
  }
}
