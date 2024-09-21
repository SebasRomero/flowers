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

@Injectable()
export class BookingService {
  constructor(
    private utilitiesService: UtilitiesService,
    @InjectModel(Booking.name) private bookingModel: Model<Booking>,
    @InjectModel(Client.name) private clientModel: Model<Client>,
    private websocketGateway: WebsocketGateway,
    private mailService: MailService,
  ) {}

  findAll(): Promise<Booking[]> {
    return this.bookingModel.find();
  }

  async submitBooking(
    booking: SubmitBookingDto,
  ): Promise<SubmitBookingResponseDto> {
    const date = new Date(booking.dateStartingTour);
    const actualDate = new Date();
    if (date < actualDate)
      throw new HttpException('La fecha debe correcta', HttpStatus.BAD_REQUEST);
    /*     const refactoredBooking: IBooking = {
      email: booking.email.toLowerCase(),
      name: booking.name.toLowerCase(),
      dateStartingTour: booking.dateStartingTour,
      numberOfPersons: booking.numberOfPersons,
      phone: booking.phone,
      tourName: TourNames[booking.tourName],
      status: BookingStatus.unrevised,
      isArchived: false,
      orderNumber: this.utilitiesService.generateOrderNumber(),
      changeHistory: [
        {
          description: 'El cliente ha solicitado una reserva',
          date: new Date(),
        },
      ],
    }; */

    if (!Object.keys(TourNames).includes(booking.tourName))
      throw new HttpException(
        'El nombre del tour debe ser correcto',
        HttpStatus.BAD_REQUEST,
      );

    /*     const createdBooking = await this.bookingModel.create(refactoredBooking); */
    const order: IOrder = {
      name: booking.name.toLowerCase(),
      email: booking.email.toLowerCase(),
      orderNumber: this.utilitiesService.generateOrderNumber(),
      statusOrder: BookingStatus.unrevised,
      dateStartingTour: booking.dateStartingTour,
      numberOfPersons: booking.numberOfPersons,
      phone: booking.phone,
      tourName: TourNames[booking.tourName],
      isArchived: false,
      createdAt: new Date(),
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
}
