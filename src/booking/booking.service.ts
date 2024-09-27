import { HttpException, HttpStatus, Injectable } from '@nestjs/common';
import { Booking } from './schemas/booking.schema';
import { SubmitBookingDto } from './dto/submit-booking.dto';
import { SubmitBookingResponseDto } from './dto/submit-booking-response.dto';
import { MailService } from 'src/mail/mail.service';
import { TourNames } from './types/submit-booking.types';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { UtilitiesService } from 'src/utilities/utilities.service';
import { BookingStatus } from './types/booking-status';
import { Client } from 'src/client/schemas/client.schema';
import { IClient } from 'src/client/types/client.types';
import { WebsocketGateway } from 'src/dashboard/websocket/websocket.gateway';
import { IOrder } from 'src/client/types/order.type';
import { PaymentGatewayService } from 'src/payment-gateway/payment-gateway.service';
import { DiscountCouponService } from 'src/discount-coupon/discount-coupon.service';
import { TourService } from 'src/tour/tour.service';
import { IDiscountCoupon } from 'src/discount-coupon/types/discount.types';
import { ITour } from 'src/tour/types/tour.interface';

@Injectable()
export class BookingService {
  constructor(
    private utilitiesService: UtilitiesService,
    @InjectModel(Booking.name) private bookingModel: Model<Booking>,
    @InjectModel(Client.name) private clientModel: Model<Client>,
    private paymentGatewayService: PaymentGatewayService,
    private websocketGateway: WebsocketGateway,
    private mailService: MailService,
    private discountCoupon: DiscountCouponService,
    private toursService: TourService,
  ) {}

  findAll(): Promise<Booking[]> {
    return this.bookingModel.find();
  }

  async submitBooking(
    booking: SubmitBookingDto,
  ): Promise<SubmitBookingResponseDto> {
    const date = new Date(booking.dateStartingTour);
    const actualDate = new Date();
    const tour: ITour = await this.toursService.getTour(
      TourNames[booking.tourName],
    );
    let discount: IDiscountCoupon;
    if (booking.couponCode != null) {
      discount = await this.discountCoupon.getDiscountCoupon(
        booking.couponCode,
      );
    }

    if (date < actualDate)
      throw new HttpException('La fecha debe correcta', HttpStatus.BAD_REQUEST);

    if (!Object.keys(TourNames).includes(booking.tourName))
      throw new HttpException(
        'El nombre del tour debe ser correcto',
        HttpStatus.BAD_REQUEST,
      );

    const finalPrice = await this.getFinalPrice(booking, tour, discount);

    const order: IOrder = {
      name: booking.name.toLowerCase(),
      email: booking.email.toLowerCase(),
      orderNumber: this.utilitiesService.generateOrderNumber(),
      statusOrder: BookingStatus.unrevised,
      payment: {
        token: '',
        totalPaid: 0,
        statusPayment: '',
      },
      dateStartingTour: booking.dateStartingTour,
      numberOfPersons: booking.numberOfPersons,
      phone: booking.phone,
      tourName: TourNames[booking.tourName],
      isArchived: false,
      couponCode: booking.couponCode ?? null,
      createdAt: new Date(),
      actualPrice: finalPrice,
      lastPrice: 0,
      changeHistory: [
        {
          description: 'El cliente ha solicitado una reserva',
          date: new Date(),
        },
      ],
    };

    this.mail(order, booking.name);
    this.websocketGateway.sendUpdates(order);

    const client: IClient = {
      name: booking.name.toLowerCase(),
      email: order.email,
      phone: order.phone,
      orders: [order],
    };

    const clientExist = await this.clientModel
      .findOneAndUpdate({ email: client.email }, { $push: { orders: order } })
      .lean();
    if (!clientExist) {
      await this.clientModel.create(client);
    }

    let orderLink;
    if (booking.payImmediately)
      orderLink = await this.paymentGatewayService.createOrder({
        email: client.email,
        price: finalPrice,
        tourName: order.tourName,
        orderNumber: order.orderNumber,
      });
    const response = {
      name: client.name,
      changeHistory: order.changeHistory,
      dateStartingTour: order.dateStartingTour,
      email: client.email,
      isArchived: order.isArchived,
      numberOfPersons: order.numberOfPersons,
      orderNumber: order.orderNumber,
      phone: client.phone,
      status: order.statusOrder,
      tourName: TourNames[booking.tourName],
      orderLink: orderLink ?? null,
      actualPrice: order.actualPrice,
    };

    return SubmitBookingResponseDto.mapToResponse(response);
  }

  mail(order: IOrder, name: string): void {
    const actualDate = new Date(order.dateStartingTour);
    const day = actualDate.getDate();
    const month = actualDate.getMonth() + 1;
    const year = actualDate.getFullYear();
    this.mailService.sendBookingEmail({
      email: order.email,
      name: this.utilitiesService.capitalizeFirstLetter(name),
      tourName: order.tourName,
      orderNumber: order.orderNumber,
      numberOfPersons: order.numberOfPersons.toString(),
      dateStartingTour: `${month}/${day}/${year}`,
    });

    this.mailService.sendBookingEmailTeam({
      email: order.email,
      name: this.utilitiesService.capitalizeFirstLetter(name),
      tourName: order.tourName,
      orderNumber: order.orderNumber,
      numberOfPersons: order.numberOfPersons.toString(),
      dateStartingTour: `${month}/${day}/${year}`,
    });
  }

  async chooseCorrectDiscount(
    tourPrice: number,
    tourDiscount: number,
    codeCoupon: string,
    couponDiscount: number,
  ): Promise<number> {
    const finalPriceTourDiscount = tourPrice - (tourDiscount / 100) * tourPrice;
    const finalPriceCouponDiscount =
      tourPrice - (couponDiscount / 100) * tourPrice;

    if (finalPriceCouponDiscount < finalPriceTourDiscount) {
      await this.discountCoupon.updateCouponUses(codeCoupon);
      return finalPriceCouponDiscount;
    }

    return finalPriceTourDiscount;
  }

  async getFinalPrice(
    booking: SubmitBookingDto,
    tour: ITour,
    discount: IDiscountCoupon,
  ): Promise<number> {
    if (booking.payImmediately && discount) {
      return (
        (await this.chooseCorrectDiscount(
          tour.price,
          tour.discountPercentage,
          discount.code,
          discount.discountPercentage,
        )) * booking.numberOfPersons
      );
    } else if (!booking.payImmediately && discount) {
      await this.discountCoupon.updateCouponUses(discount.code);
      return tour.price - (discount.discountPercentage / 100) * tour.price;
    } else if (booking.payImmediately && !discount) {
      return tour.discountPrice;
    } else {
      return tour.price;
    }
  }
}
