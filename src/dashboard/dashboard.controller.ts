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
import { GetToursResponse } from './responses/get-tours.response';
import { ChangeTourPrice } from './dto/change-tour-price.dto';
import { ChangeArchivedStatusDto } from './dto/change-archived-status.dto';
import { Public } from 'src/auth/decorators/public.decorator';

@Controller('dashboard')
export class DashboardController {
  constructor(private readonly dashBoardService: DashboardService) {}
  @Get()
  @Roles(Role.AGENT)
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
  @Roles(Role.AGENT)
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
  @Roles(Role.AGENT)
  async getClients(
    @Query() query: IQueryGetClient,
  ): Promise<GetClientsResponse> {
    return {
      statusCode: HttpStatus.OK,
      message: 'Clients',
      data: await this.dashBoardService.getClients(query),
    };
  }

  @Get('tours')
  @Public()
  async getTours(): Promise<GetToursResponse> {
    return {
      message: 'Tours',
      statusCode: HttpStatus.OK,
      data: await this.dashBoardService.getTours(),
    };
  }
  @Put('tours')
  @Roles(Role.AGENT)
  async changePriceTour(
    @Body() changeTourPrice: ChangeTourPrice,
  ): Promise<GetToursResponse> {
    return {
      message: 'Price changed',
      statusCode: HttpStatus.OK,
      data: await this.dashBoardService.changeTourPrice(changeTourPrice),
    };
  }

  @Get(':id')
  @Roles(Role.AGENT)
  async getBooking(
    @Param('id') id: string,
  ): Promise<GetBookingTourFormResponse> {
    return {
      statusCode: HttpStatus.OK,
      message: 'Ok',
      data: await this.dashBoardService.getBooking(id),
    };
  }

  @Put('archived/:id')
  @Roles(Role.AGENT)
  async archiveBook(
    @Param('id') id: string,
    @Body() changeArchivedStatus: ChangeArchivedStatusDto,
  ): Promise<ArchiveBookingTourResponse> {
    return {
      statusCode: HttpStatus.OK,
      message: 'Status archived changed',
      data: await this.dashBoardService.archiveBooking(
        id,
        changeArchivedStatus,
      ),
    };
  }

  @Put('/change-status/:id')
  @Roles(Role.AGENT)
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
