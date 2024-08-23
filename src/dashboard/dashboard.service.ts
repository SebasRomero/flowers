import { HttpException, HttpStatus, Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import mongoose, { Model, Types } from 'mongoose';
import { Booking } from 'src/booking/schemas/booking.schema';
import { Archived } from 'src/booking/types/booking-status';
import { validateStatusChange } from './dashboard.functions';
import { IBooking } from 'src/booking/types/booking.interface';
import { ChangeTourStatusDto } from './dto/change-tour-status.dto';
@Injectable()
export class DashboardService {
  constructor(
    @InjectModel(Booking.name) private readonly bookingModel: Model<Booking>,
  ) {}

  async getBookings() {
    return await this.bookingModel
      .find({ $nor: [{ status: Archived }] })
      .lean();
  }

  async getBooking(id: string) {
    return await this.bookingModel.findOne({ orderNumber: id }).lean();
  }

  async getArchivedBookings() {
    return await this.bookingModel.find({ status: { $ne: Archived } });
  }

  async archiveBooking(id: string) {
    const newId = new mongoose.Types.ObjectId(id);
    const bookingUpdated = await this.bookingModel
      .findOneAndUpdate(
        { _id: newId },
        { $set: { status: Archived } },
        { new: true },
      )
      .lean();

    if (!bookingUpdated)
      throw new HttpException(
        'Error archiving the book',
        HttpStatus.BAD_REQUEST,
      );

    return bookingUpdated;
  }

  async changeBookingStatus(
    id: Types.ObjectId,
    newStatus: ChangeTourStatusDto,
  ): Promise<IBooking> {
    let booking = await this.bookingModel.findById(id).lean();
    const currentStatus = booking.status;

    if (validateStatusChange(currentStatus, newStatus.status)) {
      const actualHistory = booking.changeHistory;
      actualHistory.push({
        description: newStatus.description,
        date: new Date(),
        newStatus: newStatus.status,
        lastStatus: currentStatus,
      });
      booking = await this.bookingModel.findByIdAndUpdate(
        id,
        {
          status: newStatus.status,
          changeHistory: actualHistory,
        },
        { new: true },
      );
      return booking;
    }

    throw new HttpException(
      'Error changing the status',
      HttpStatus.BAD_REQUEST,
    );
  }
}
