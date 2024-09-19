import { Module } from '@nestjs/common';
import { BookingModule } from './booking/booking.module';
import { ConfigModule, ConfigService } from '@nestjs/config';
import { MailModule } from './mail/mail.module';
import { MongooseModule } from '@nestjs/mongoose';
import { AuthModule } from './auth/auth.module';
import { UsersModule } from './users/users.module';
import { UtilitiesModule } from './utilities/utilities.module';
import { DashboardModule } from './dashboard/dashboard.module';
import { RolesGuard } from './auth/guards/roles.guard';
import { APP_GUARD } from '@nestjs/core';
import { JwtAuthGuard } from './auth/guards/jwt-auth.guard';
import { ContactModule } from './contact/contact.module';
import { ClientService } from './client/client.service';
import { ClientModule } from './client/client.module';
import { TourModule } from './tour/tour.module';
import { GatewayModule } from './dashboard/websocket/websocket.module';
import { PaymentGatewayModule } from './payment-gateway/payment-gateway.module';
@Module({
  imports: [
    ConfigModule.forRoot({
      isGlobal: true,
    }),
    MongooseModule.forRootAsync({
      imports: [ConfigModule],
      useFactory: async (configService: ConfigService) => {
        const env = configService.get<string>('NODE_ENV');

        const uri =
          env === 'production'
            ? configService.get<string>('DB_URI_PROD')
            : configService.get<string>('DB_URI_TEST');
        return {
          uri,
        };
      },
      inject: [ConfigService],
    }),
    BookingModule,
    MailModule,
    AuthModule,
    UsersModule,
    UtilitiesModule,
    DashboardModule,
    ContactModule,
    ClientModule,
    TourModule,
    GatewayModule,
    PaymentGatewayModule,
  ],
  providers: [
    { provide: APP_GUARD, useClass: JwtAuthGuard },
    { provide: APP_GUARD, useClass: RolesGuard },
    ClientService,
  ],
})
export class AppModule {}
