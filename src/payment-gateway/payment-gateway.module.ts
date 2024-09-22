import { Module } from '@nestjs/common';
import { PaymentGatewayService } from './payment-gateway.service';
import { PaymentGatewayController } from './payment-gateway.controller';
import { MongooseModule } from '@nestjs/mongoose';
import { Tour, TourSchema } from 'src/tour/schema/tour.schema';
import { Client, ClientSchema } from 'src/client/schemas/client.schema';

@Module({
  imports: [
    MongooseModule.forFeature([
      { name: Tour.name, schema: TourSchema },
      { name: Client.name, schema: ClientSchema },
    ]),
  ],
  providers: [PaymentGatewayService],
  controllers: [PaymentGatewayController],
})
export class PaymentGatewayModule {}
