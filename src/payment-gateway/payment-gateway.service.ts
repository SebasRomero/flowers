import { HttpException, HttpStatus, Injectable } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';
import axios from 'axios';
import { CHECKOUT_ORDERS, HOST, PAYPAL_OAUTH } from 'src/constants';
import { CreateOrderDto } from './dto/create-order.dto';
import { InjectModel } from '@nestjs/mongoose';
import { Tour } from 'src/tour/schema/tour.schema';
import { Model } from 'mongoose';
import { Client } from 'src/client/schemas/client.schema';
import { PAYPAL_STATUS } from './types/paypal-status.types';

@Injectable()
export class PaymentGatewayService {
  private HOST: string;
  private PAYPAL_API_CLIENT: string;
  private PAYPAL_API_SECRET: string;
  private PAYPAL_API: string;
  constructor(
    private readonly configService: ConfigService,
    @InjectModel(Tour.name) private readonly tourModel: Model<Tour>,
    @InjectModel(Client.name) private readonly clientModel: Model<Client>,
  ) {
    this.HOST = HOST + configService.get<string>('PORT');
    this.PAYPAL_API_CLIENT = configService.get<string>('PAYPAL_API_CLIENT');
    this.PAYPAL_API_SECRET = configService.get<string>('PAYPAL_API_SECRET');
    this.PAYPAL_API = configService.get<string>('PAYPAL_API');
  }

  async createOrder(createOrder: CreateOrderDto) {
    const tour = await this.tourModel.findOne({
      name: createOrder.tourName,
    });

    if (!tour)
      throw new HttpException('Tour no encontrado', HttpStatus.BAD_REQUEST);

    const order = {
      intent: 'CAPTURE',
      purchase_units: [
        {
          amount: {
            currency_code: 'USD',
            value: createOrder.price,
          },
        },
      ],
      payment_source: {
        paypal: {
          experience_context: {
            payment_method_preference: 'IMMEDIATE_PAYMENT_REQUIRED',
            brand_name: 'Diamond Tours',
            landing_page: 'NO_PREFERENCE',
            shipping_preference: 'NO_SHIPPING',
            user_action: 'PAY_NOW',
            return_url: `${this.HOST}/api/v1/payment-gateway/capture-order`,
            cancel_url: `${this.HOST}/api/v1/payment-gateway/cancel-order`,
          },
        },
      },
    };

    const params = new URLSearchParams();
    params.append('grant_type', 'client_credentials');

    const {
      data: { access_token },
    } = await axios.post(`${this.PAYPAL_API + PAYPAL_OAUTH}`, params, {
      auth: {
        username: this.PAYPAL_API_CLIENT,
        password: this.PAYPAL_API_SECRET,
      },
    });

    let response;
    try {
      response = await axios.post(
        `${this.PAYPAL_API + CHECKOUT_ORDERS}`,
        order,
        {
          headers: {
            Authorization: `Bearer ${access_token}`,
          },
        },
      );
    } catch (error) {
      console.log(error);
      throw new HttpException(
        'Error creating order',
        HttpStatus.INTERNAL_SERVER_ERROR,
      );
    }

    await this.clientModel.updateOne(
      {
        'orders.orderNumber': createOrder.orderNumber,
      },
      {
        $set: {
          'orders.$.payment.statusPayment': response.data.status,
          'orders.$.payment.token': response.data.id,
        },
      },
    );

    return response.data.links[1];
  }

  async captureOrder(query: any) {
    const response = await axios.post(
      `${this.PAYPAL_API + CHECKOUT_ORDERS}${query.token}/capture`,
      {},
      {
        auth: {
          username: this.PAYPAL_API_CLIENT,
          password: this.PAYPAL_API_SECRET,
        },
      },
    );

    if (response.data.status == PAYPAL_STATUS.COMPLETED) {
      await this.clientModel.updateOne(
        {
          'orders.payment.token': response.data.id,
        },
        {
          $set: {
            'orders.$.payment.statusPayment': response.data.status,
            'orders.$.payment.totalPaid':
              response.data.purchase_units[0].payments.captures[0].amount.value,
          },
        },
      );

      //SEND EMAIL SAYING THANK YOU AND INFO ORDER
      return 'paid';
    }
  }
}
