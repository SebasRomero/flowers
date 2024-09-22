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
import { GatewayService } from 'src/dashboard/websocket/websocket.service';
import { WebsocketGateway } from 'src/dashboard/websocket/websocket.gateway';
import { UsersService } from 'src/users/users.service';
import { JwtService } from '@nestjs/jwt';
import { DashboardService } from 'src/dashboard/dashboard.service';
import { User, UserSchema } from 'src/users/schemas/user.schema';
import { Tour, TourSchema } from 'src/tour/schema/tour.schema';
import { PaymentGatewayService } from 'src/payment-gateway/payment-gateway.service';

@Module({
  imports: [
    MongooseModule.forFeature([
      { name: Booking.name, schema: BookingSchema },
      { name: Client.name, schema: ClientSchema },
      { name: User.name, schema: UserSchema },
      { name: Tour.name, schema: TourSchema },
    ]),
    MailModule,
    UtilitiesModule,
  ],
  providers: [
    BookingService,
    MailService,
    UtilitiesService,
    GatewayService,
    WebsocketGateway,
    UsersService,
    JwtService,
    DashboardService,
    PaymentGatewayService,
  ],
  controllers: [BookingController],
})
export class BookingModule {}
