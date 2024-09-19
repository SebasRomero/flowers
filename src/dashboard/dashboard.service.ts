import { HttpException, HttpStatus, Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import mongoose, { Model, Types } from 'mongoose';
import { Booking } from 'src/booking/schemas/booking.schema';
import { validateStatusChange } from './dashboard.functions';
import { IBooking } from 'src/booking/types/booking.interface';
import { ChangeTourStatusDto } from './dto/change-tour-status.dto';
import { UtilitiesService } from 'src/utilities/utilities.service';
import { IQueryGetBookings, IQueryGetClient } from './types/query.interface';
import { Client } from 'src/client/schemas/client.schema';
import { Tour } from 'src/tour/schema/tour.schema';
import { ChangeTourPrice } from './dto/change-tour-price.dto';
import { ChangeArchivedStatusDto } from './dto/change-archived-status.dto';
@Injectable()
export class DashboardService {
  constructor(
    @InjectModel(Booking.name) private readonly bookingModel: Model<Booking>,
    @InjectModel(Client.name) private readonly clientModel: Model<Client>,
    @InjectModel(Tour.name) private readonly tourModel: Model<Tour>,
    private utilitiesService: UtilitiesService,
  ) {}

  async getBookings(query: IQueryGetBookings) {
    const { tourName, date } = query;

    const bookings: IBooking[] = await this.getBooksByFilter(
      tourName,
      date,
      false,
    );

    return this.formatBookings(bookings);
  }

  formatBookings(bookings: IBooking[]) {
    const result = [];
    let elementResults = [];
    if (bookings.length > 0) {
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
    }
    return result;
  }

  async getBooking(id: string) {
    const booking = await this.bookingModel.findOne({ orderNumber: id }).lean();
    if (booking) return booking;
    return [];
  }

  async getArchivedBookings(query) {
    const { tourName, date } = query;

    const bookings: IBooking[] = await this.getBooksByFilter(
      tourName,
      date,
      true,
    );

    const result = [];
    let elementResults = [];
    if (bookings.length > 0) {
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
    }

    return result;
  }

  async archiveBooking(
    id: string,
    changeArchivedStatus: ChangeArchivedStatusDto,
  ) {
    const { isArchived } = changeArchivedStatus;
    const newId = new mongoose.Types.ObjectId(id);
    const bookingUpdated = await this.bookingModel
      .findOneAndUpdate({ _id: newId }, { $set: { isArchived } }, { new: true })
      .lean();

    if (!bookingUpdated)
      throw new HttpException(
        'Error archivando la reserva',
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

      await this.clientModel.updateOne(
        { orderNumber: booking.orderNumber },
        {
          $set: {
            status: newStatus.status,
          },
        },
      );
      return booking;
    }

    throw new HttpException(
      'Error cambiando el estado',
      HttpStatus.BAD_REQUEST,
    );
  }

  async getBooksByFilter(
    tourName: string,
    date: string,
    isArchived: boolean,
  ): Promise<IBooking[]> {
    let bookings: IBooking[];
    if (tourName && date) {
      const newDate = new Date(date);
      const startOfDay = new Date(newDate.setUTCHours(0, 0, 0, 0));
      const endOfDay = new Date(newDate.setUTCHours(23, 59, 59, 999));

      bookings = await this.bookingModel
        .find({
          isArchived,
          tourName: tourName,
          createdAt: {
            $gte: startOfDay,
            $lte: endOfDay,
          },
        })
        .lean();
    } else if (tourName && !date) {
      bookings = await this.bookingModel
        .find({
          isArchived,
          tourName: tourName,
        })
        .lean();
    } else if (!tourName && date) {
      const newDate = new Date(date);
      const startOfDay = new Date(newDate.setUTCHours(0, 0, 0, 0));
      const endOfDay = new Date(newDate.setUTCHours(23, 59, 59, 999));
      bookings = await this.bookingModel
        .find({
          isArchived,
          createdAt: {
            $gte: startOfDay,
            $lte: endOfDay,
          },
        })
        .lean();
    } else {
      bookings = await this.bookingModel
        .find({
          isArchived,
        })
        .lean();
    }
    return bookings;
  }

  async getClients(query: IQueryGetClient) {
    const { date, orderNumber, page } = query;
    const currentPage = Number(page) || 1;
    const responsePerPage = 2;
    const skip = responsePerPage * (currentPage - 1);

    if (date && orderNumber) {
      const newDate = new Date(date);
      const startOfDay = new Date(newDate.setUTCHours(0, 0, 0, 0));
      const endOfDay = new Date(newDate.setUTCHours(23, 59, 59, 999));

      return await this.clientModel.aggregate([
        {
          $match: {
            orderNumber,
            createdAt: {
              $gte: startOfDay,
              $lte: endOfDay,
            },
          },
        },
        {
          $sort: { createdAt: -1 }, // Sort documents by createdAt in descending order (latest first)
        },
        {
          $group: {
            _id: '$email', // Group by the email field
            document: { $first: '$$ROOT' }, // Take the first document in the sorted order (latest document)
          },
        },
        {
          $replaceRoot: { newRoot: '$document' }, // Replace the root to return the actual document instead of the grouped result
        },
        {
          $limit: skip + responsePerPage,
        },
        {
          $skip: skip,
        },
      ]);
    } else if (date && !orderNumber) {
      const newDate = new Date(date);
      const startOfDay = new Date(newDate.setUTCHours(0, 0, 0, 0));
      const endOfDay = new Date(newDate.setUTCHours(23, 59, 59, 999));
      return await this.clientModel.aggregate([
        {
          $match: {
            createdAt: {
              $gte: startOfDay,
              $lte: endOfDay,
            },
          },
        },
        {
          $sort: { createdAt: -1 },
        },
        {
          $group: {
            _id: '$email',
            document: { $first: '$$ROOT' },
          },
        },
        {
          $replaceRoot: { newRoot: '$document' },
        },
        {
          $limit: skip + responsePerPage,
        },
        {
          $skip: skip,
        },
      ]);
    } else if (!date && orderNumber) {
      return await this.clientModel.aggregate([
        { $match: { orderNumber } },
        {
          $sort: { createdAt: -1 },
        },
        {
          $group: {
            _id: '$email',
            document: { $first: '$$ROOT' },
          },
        },
        {
          $replaceRoot: { newRoot: '$document' },
        },
        {
          $limit: skip + responsePerPage,
        },
        {
          $skip: skip,
        },
      ]);
    } else {
      return await this.clientModel.aggregate([
        {
          $sort: { createdAt: -1 },
        },
        {
          $group: {
            _id: '$email',
            document: { $first: '$$ROOT' },
          },
        },
        {
          $replaceRoot: { newRoot: '$document' },
        },
        {
          $limit: skip + responsePerPage,
        },
        {
          $skip: skip,
        },
      ]);
    }
  }

  async getTours() {
    return await this.tourModel.find().sort({ createdAt: -1 });
  }
  async changeTourPrice(changeTourPrice: ChangeTourPrice) {
    const { price, tourName } = changeTourPrice;
    const tour = await this.tourModel.findOneAndUpdate(
      { name: tourName },
      { $set: { price } },
      {
        new: true,
      },
    );
    if (tour) return tour;
    throw new HttpException(
      'Error cambiando el precio del tour',
      HttpStatus.BAD_REQUEST,
    );
  }

  /*   async addTour() {
    ToursArray.map(async (element) => {
      await this.tourModel.create({ name: element, price: 0 });
    });
  } */
}
