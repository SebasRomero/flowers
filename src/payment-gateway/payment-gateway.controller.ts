import { Body, Controller, Get, Post, Query } from '@nestjs/common';
import { PaymentGatewayService } from './payment-gateway.service';
import { CreateOrderDto } from './dto/create-order.dto';
import { Public } from 'src/auth/decorators/public.decorator';

@Controller('payment-gateway')
export class PaymentGatewayController {
  constructor(private readonly paymentService: PaymentGatewayService) {}

  @Post('create-order')
  createOrder(@Body() createOrder: CreateOrderDto) {
    return this.paymentService.createOrder(createOrder);
  }

  @Get('capture-order')
  @Public()
  captureOrder(@Query() query: any) {
    return this.paymentService.captureOrder(query);
  }
}
