import { HttpException, HttpStatus, Injectable } from '@nestjs/common';
import { Booking } from './schemas/booking.schema';
import { SubmitBookingDto } from './dto/submit-booking.dto';
import { SubmitBookingResponseDto } from './dto/submit-booking-response.dto';
import { MailService } from 'src/mail/mail.service';
import { TourNames } from './types/submit-booking.types';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { UtilitiesService } from 'src/utilities/utilities.service';
import { IBooking } from './types/booking.interface';
import { BookingStatus } from './types/booking-status';
import { Client } from 'src/client/schemas/client.schema';
import { IClient } from 'src/client/types/client.types';

@Injectable()
export class BookingService {
  constructor(
    private utilitiesService: UtilitiesService,
    @InjectModel(Booking.name) private bookingModel: Model<Booking>,
    @InjectModel(Client.name) private clientModel: Model<Client>,
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
    const refactoredBooking: IBooking = {
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
    };

    if (!Object.keys(TourNames).includes(booking.tourName))
      throw new HttpException(
        'El nombre del tour debe ser correcto',
        HttpStatus.BAD_REQUEST,
      );

    const createdBooking = await this.bookingModel.create(refactoredBooking);

    this.mail(refactoredBooking);

    const client: IClient = {
      name: refactoredBooking.name,
      orderNumber: refactoredBooking.orderNumber,
      phone: refactoredBooking.phone,
      status: refactoredBooking.status,
    };
    await this.clientModel.create(client);

    return SubmitBookingResponseDto.mapToResponse(createdBooking);
  }

  mail(refactoredBooking: IBooking): void {
    this.mailService.sendBookingEmail({
      email: refactoredBooking.email,
      name: this.utilitiesService.capitalizeFirstLetter(refactoredBooking.name),
      tourName: refactoredBooking.tourName,
      orderNumber: refactoredBooking.orderNumber,
      numberOfPersons: refactoredBooking.numberOfPersons.toString(),
      dateStartingTour: refactoredBooking.dateStartingTour,
    });

    this.mailService.sendBookingEmailTeam({
      email: refactoredBooking.email,
      name: this.utilitiesService.capitalizeFirstLetter(refactoredBooking.name),
      tourName: refactoredBooking.tourName,
      orderNumber: refactoredBooking.orderNumber,
      numberOfPersons: refactoredBooking.numberOfPersons.toString(),
      dateStartingTour: refactoredBooking.dateStartingTour,
    });
  }
}
