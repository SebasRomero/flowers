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

@Injectable()
export class BookingService {
  constructor(
    private utilitiesService: UtilitiesService,
    @InjectModel(Booking.name) private bookingModel: Model<Booking>,
    private mailService: MailService,
  ) {}

  findAll(): Promise<Booking[]> {
    return this.bookingModel.find();
  }

  async submitBooking(
    booking: SubmitBookingDto,
  ): Promise<SubmitBookingResponseDto> {
    const refactoredBooking: IBooking = {
      email: booking.email.toLowerCase(),
      name: booking.name.toLowerCase(),
      dateStartingTour: booking.dateStartingTour,
      numberOfPersons: booking.numberOfPersons,
      phone: booking.phone,
      tourName: booking.tourName,
      status: BookingStatus.unrevised,
      archived: false,
      orderNumber: this.utilitiesService.generateOrderNumber(),
      changeHistory: [
        {
          description: 'El cliente ha solicitado una reserva',
          date: new Date(),
        },
      ],
    };

    if (!Object.values(TourNames).includes(booking.tourName))
      throw new HttpException(
        'Tour name should be correct',
        HttpStatus.BAD_REQUEST,
      );

    const createdBooking = await this.bookingModel.create(refactoredBooking);

    this.mail(refactoredBooking);

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
