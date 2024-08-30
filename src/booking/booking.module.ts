import { Module } from '@nestjs/common';
import { BookingService } from './booking.service';
import { BookingController } from './booking.controller';
import { Booking, BookingSchema } from './schemas/booking.schema';
import { MailModule } from 'src/mail/mail.module';
import { MailService } from 'src/mail/mail.service';
import { MongooseModule } from '@nestjs/mongoose';
import { UtilitiesService } from 'src/utilities/utilities.service';
import { UtilitiesModule } from 'src/utilities/utilities.module';
import { Client, ClientSchema } from 'src/client/schemas/client.schema';

@Module({
  imports: [
    MongooseModule.forFeature([
      { name: Booking.name, schema: BookingSchema },
      { name: Client.name, schema: ClientSchema },
    ]),
    MailModule,
    UtilitiesModule,
  ],
  providers: [BookingService, MailService, UtilitiesService],
  controllers: [BookingController],
})
export class BookingModule {}
