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

  async submitForm(form: SubmitBookingDto): Promise<SubmitBookingResponseDto> {
    const refactoredForm: IBooking = {
      email: form.email.toLowerCase(),
      name: form.name.toLowerCase(),
      dateStartingTour: form.dateStartingTour,
      numberOfPersons: form.numberOfPersons,
      phone: form.phone,
      tourName: form.tourName,
      status: BookingStatus.CASE1,
      orderNumber: this.utilitiesService.generateOrderNumber(),
    };

    if (!Object.values(TourNames).includes(form.tourName))
      throw new HttpException(
        'Tour name should be correct',
        HttpStatus.BAD_REQUEST,
      );

    const createdForm = await this.bookingModel.create(refactoredForm);

    this.mailService.sendRegularFormEmail({
      email: refactoredForm.email,
      name: this.utilitiesService.capitalizeFirstLetter(refactoredForm.name),
      tourName: refactoredForm.tourName,
      dateStartingTour: refactoredForm.dateStartingTour,
    });

    return SubmitBookingResponseDto.mapToResponse(createdForm);
  }
}
