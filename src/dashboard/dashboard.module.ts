import { Module } from '@nestjs/common';
import { DashboardService } from './dashboard.service';
import { DashboardController } from './dashboard.controller';
import { MongooseModule } from '@nestjs/mongoose';
import { Booking, BookingSchema } from 'src/booking/schemas/booking.schema';
import { UtilitiesService } from 'src/utilities/utilities.service';
import { Client, ClientSchema } from 'src/client/schemas/client.schema';
import { Tour, TourSchema } from 'src/tour/schema/tour.schema';

@Module({
  imports: [
    MongooseModule.forFeature([
      { name: Booking.name, schema: BookingSchema },
      { name: Client.name, schema: ClientSchema },
      { name: Tour.name, schema: TourSchema },
    ]),
  ],
  providers: [DashboardService, UtilitiesService],
  controllers: [DashboardController],
})
export class DashboardModule {}
