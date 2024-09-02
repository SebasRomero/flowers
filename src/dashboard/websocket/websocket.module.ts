import { Module } from '@nestjs/common';
import { WebsocketGateway } from './websocket.gateway';
import { MyScheduler } from './websocket.scheduler.module';
import { DashboardModule } from '../dashboard.module';
import { DashboardService } from '../dashboard.service';
import { MongooseModule } from '@nestjs/mongoose';
import { Booking, BookingSchema } from 'src/booking/schemas/booking.schema';
import { Client, ClientSchema } from 'src/client/schemas/client.schema';
import { Tour, TourSchema } from 'src/tour/schema/tour.schema';
import { UtilitiesService } from 'src/utilities/utilities.service';
import { AuthService } from 'src/auth/auth.service';
import { JwtService } from '@nestjs/jwt';
import { User, UserSchema } from 'src/users/schemas/user.schema';
import { UsersService } from 'src/users/users.service';
import { GatewayService } from './websocket.service';

@Module({
  imports: [
    DashboardModule,
    MongooseModule.forFeature([
      { schema: BookingSchema, name: Booking.name },
      { schema: ClientSchema, name: Client.name },
      { schema: TourSchema, name: Tour.name },
      { schema: UserSchema, name: User.name },
    ]),
  ],
  providers: [
    WebsocketGateway,
    GatewayService,
    MyScheduler,
    DashboardService,
    UtilitiesService,
    AuthService,
    JwtService,
    UsersService,
  ],
})
export class GatewayModule {}
