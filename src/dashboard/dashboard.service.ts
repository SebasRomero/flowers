import { HttpException, HttpStatus, Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import mongoose, { Model } from 'mongoose';
import { Booking } from 'src/booking/schemas/booking.schema';
import { BookingStatus } from 'src/booking/types/booking-status';

@Injectable()
export class DashboardService {
  constructor(
    @InjectModel(Booking.name) private readonly bookingModel: Model<Booking>,
  ) {}

  async getBookings() {
    return await this.bookingModel
      .find({ $nor: [{ status: BookingStatus.Archived }] })
      .lean();
  }

  async getBooking(id: string) {
    return await this.bookingModel.findOne({ orderNumber: id }).lean();
  }

  async getArchivedBookings() {
    return await this.bookingModel.find({
      status: { $ne: BookingStatus.Archived },
    });
  }

  async archiveBooking(id: string) {
    const newId = new mongoose.Types.ObjectId(id);
    const bookingUpdated = this.bookingModel
      .findOneAndUpdate(
        { _id: newId },
        { $set: { status: BookingStatus.Archived } },
        { new: true },
      )
      .lean();

    if (!bookingUpdated)
      throw new HttpException(
        'Tour name does not exist',
        HttpStatus.BAD_REQUEST,
      );

    return bookingUpdated;
  }
}
