import { HttpException, HttpStatus, Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import mongoose, { Model, Types } from 'mongoose';
import { Booking } from 'src/booking/schemas/booking.schema';
import { validateStatusChange } from './dashboard.functions';
import { IBooking } from 'src/booking/types/booking.interface';
import { ChangeTourStatusDto } from './dto/change-tour-status.dto';
import { UtilitiesService } from 'src/utilities/utilities.service';
@Injectable()
export class DashboardService {
  constructor(
    @InjectModel(Booking.name) private readonly bookingModel: Model<Booking>,
    private utilitiesService: UtilitiesService,
  ) {}

  async getBookings() {
    const bookings: IBooking[] = await this.bookingModel
      .find({ $nor: [{ archived: true }] })
      .lean();

    const result = [];
    let elementResults = [];
    bookings.map((element) => {
      element.changeHistory.map((elementHistory) => {
        const actualElementHistory = {
          description: elementHistory.description,
          lastStatus: elementHistory.lastStatus,
          observations: elementHistory.observations,
          newStatus: elementHistory.newStatus,
          date: this.utilitiesService.getMinutesHours(elementHistory.date),
        };

        elementResults.push(actualElementHistory);
      });
      element.changeHistory = elementResults;
      result.push(element);
      elementResults = [];
    });

    return result;
  }

  async getBooking(id: string) {
    const booking = await this.bookingModel.findOne({ orderNumber: id }).lean();
    if (booking) return booking;
    return [];
  }

  async getArchivedBookings() {
    return await this.bookingModel.find({ archived: true });
  }

  async archiveBooking(id: string) {
    const newId = new mongoose.Types.ObjectId(id);
    const bookingUpdated = await this.bookingModel
      .findOneAndUpdate(
        { _id: newId },
        { $set: { archived: true } },
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
    username: string,
    id: Types.ObjectId,
    newStatus: ChangeTourStatusDto,
  ): Promise<IBooking> {
    let booking = await this.bookingModel.findById(id).lean();
    const currentStatus = booking.status;

    if (validateStatusChange(currentStatus, newStatus.status)) {
      const actualHistory = booking.changeHistory;
      actualHistory.push({
        observations: newStatus.observations,
        description: `${username} cambió el estado a ${newStatus.status}`,
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
