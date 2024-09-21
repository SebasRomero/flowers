import { HttpException, HttpStatus, Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { validateStatusChange } from './dashboard.functions';
import { ChangeTourStatusDto } from './dto/change-tour-status.dto';
import { UtilitiesService } from 'src/utilities/utilities.service';
import { IQueryGetBookings, IQueryGetClient } from './types/query.interface';
import { Client } from 'src/client/schemas/client.schema';
import { Tour } from 'src/tour/schema/tour.schema';
import { ChangeTourPrice } from './dto/change-tour-price.dto';
import { ChangeArchivedStatusDto } from './dto/change-archived-status.dto';
import { AddTourDto } from './dto/add-tour.dto';
import { IOrder } from 'src/client/types/order.type';
@Injectable()
export class DashboardService {
  constructor(
    @InjectModel(Client.name) private readonly clientModel: Model<Client>,
    @InjectModel(Tour.name) private readonly tourModel: Model<Tour>,
    private utilitiesService: UtilitiesService,
  ) {}

  async getBookings(query: IQueryGetBookings) {
    const { tourName, date } = query;

    const orders: IOrder[] = await this.getBooksByFilter(tourName, date, false);

    return this.formatBookings(orders);
  }

  formatBookings(orders: IOrder[]) {
    const result = [];
    let elementResults = [];
    if (orders.length > 0) {
      orders.map((element) => {
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

  async getBooking(orderNumber: string) {
    const order: IOrder[] = await this.clientModel.aggregate([
      {
        $unwind: '$orders',
      },
      {
        $match: {
          'orders.orderNumber': orderNumber,
        },
      },
      {
        $project: {
          _id: 0,
          email: '$orders.email',
          name: '$orders.name',
          orderNumber: '$orders.orderNumber',
          statusOrder: '$orders.statusOrder',
          dateStartingTour: '$orders.dateStartingTour',
          numberOfPersons: '$orders.numberOfPersons',
          phone: '$orders.phone',
          tourName: '$orders.tourName',
          isArchived: '$orders.isArchived',
          changeHistory: '$orders.changeHistory',
        },
      },
    ]);
    if (order.length != 0) return order;
    return [];
  }

  async getArchivedBookings(query) {
    const { tourName, date } = query;

    const orders: IOrder[] = await this.getBooksByFilter(tourName, date, true);

    const result = [];
    let elementResults = [];
    if (orders.length > 0) {
      orders.map((element) => {
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
    orderNumber: string,
    changeArchivedStatus: ChangeArchivedStatusDto,
  ) {
    const { isArchived } = changeArchivedStatus;

    /* const newId = new mongoose.Types.ObjectId(id); */

    await this.clientModel.findOneAndUpdate(
      { 'orders.orderNumber': orderNumber }, // Match by orderNumber
      {
        $set: {
          'orders.$.isArchived': isArchived, // Update the isArchived field
        },
      },
      { new: true },
    );

    const updatedOrder = await this.clientModel
      .findOne(
        { 'orders.orderNumber': orderNumber }, // Match the same order by orderNumber
        { 'orders.$': 1 }, // Return only the updated order in the orders array
      )
      .lean();

    if (!updatedOrder)
      throw new HttpException(
        'Error archivando la reserva',
        HttpStatus.BAD_REQUEST,
      );

    return updatedOrder.orders[0];
  }

  async changeBookingStatus(
    username: string,
    orderNumber: string,
    newStatus: ChangeTourStatusDto,
  ): Promise<IOrder> {
    let order: IOrder[] = await this.clientModel.aggregate([
      {
        $unwind: '$orders',
      },
      {
        $match: {
          'orders.orderNumber': orderNumber,
        },
      },
      {
        $project: {
          _id: 0,
          email: '$orders.email',
          name: '$orders.name',
          orderNumber: '$orders.orderNumber',
          statusOrder: '$orders.statusOrder',
          dateStartingTour: '$orders.dateStartingTour',
          numberOfPersons: '$orders.numberOfPersons',
          phone: '$orders.phone',
          tourName: '$orders.tourName',
          isArchived: '$orders.isArchived',
          changeHistory: '$orders.changeHistory',
        },
      },
    ]);
    if (order.length == 0) {
      throw new HttpException('No se encontró el tour', HttpStatus.BAD_REQUEST);
    }
    const actualOrder: IOrder = order[0];
    const currentStatus = actualOrder.statusOrder;

    if (validateStatusChange(currentStatus, newStatus.status)) {
      const actualHistory = actualOrder.changeHistory;
      actualHistory.push({
        observations: newStatus.observations,
        description: `${username} cambió el estado a ${newStatus.status}`,
        date: new Date(),
        newStatus: newStatus.status,
        lastStatus: currentStatus,
      });
      order = await this.clientModel.findOneAndUpdate(
        { 'orders.orderNumber': orderNumber },
        {
          $set: {
            'orders.$.statusOrder': newStatus.status,
            'orders.$.changeHistory': actualHistory,
          },
        },
        { new: true },
      );

      return actualOrder;
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
  ): Promise<IOrder[]> {
    let orders: IOrder[];
    if (tourName && date) {
      const newDate = new Date(date);
      const startOfDay = new Date(newDate.setUTCHours(0, 0, 0, 0));
      const endOfDay = new Date(newDate.setUTCHours(23, 59, 59, 999));

      orders = await this.clientModel.aggregate([
        {
          $unwind: '$orders',
        },
        {
          $match: {
            'orders.isArchived': isArchived,
            'orders.createdAt': {
              $gte: startOfDay,
              $lte: endOfDay,
            },
            'orders.tourName': tourName,
          },
        },
        {
          $project: {
            _id: 0,
            email: '$orders.email',
            name: '$orders.name',
            orderNumber: '$orders.orderNumber',
            statusOrder: '$orders.statusOrder',
            dateStartingTour: '$orders.dateStartingTour',
            numberOfPersons: '$orders.numberOfPersons',
            phone: '$orders.phone',
            tourName: '$orders.tourName',
            isArchived: '$orders.isArchived',
            changeHistory: '$orders.changeHistory',
          },
        },
      ]);
    } else if (tourName && !date) {
      orders = await this.clientModel.aggregate([
        {
          $unwind: '$orders',
        },
        {
          $match: {
            'orders.isArchived': isArchived,
            'orders.tourName': tourName,
          },
        },
        {
          $project: {
            _id: 0,
            email: '$orders.email',
            name: '$orders.name',
            orderNumber: '$orders.orderNumber',
            statusOrder: '$orders.statusOrder',
            dateStartingTour: '$orders.dateStartingTour',
            numberOfPersons: '$orders.numberOfPersons',
            phone: '$orders.phone',
            tourName: '$orders.tourName',
            isArchived: '$orders.isArchived',
            changeHistory: '$orders.changeHistory',
          },
        },
      ]);
    } else if (!tourName && date) {
      const newDate = new Date(date);
      const startOfDay = new Date(newDate.setUTCHours(0, 0, 0, 0));
      const endOfDay = new Date(newDate.setUTCHours(23, 59, 59, 999));

      orders = await this.clientModel.aggregate([
        {
          $unwind: '$orders',
        },
        {
          $match: {
            'orders.isArchived': isArchived,
            'orders.createdAt': {
              $gte: startOfDay,
              $lte: endOfDay,
            },
          },
        },
        {
          $project: {
            _id: 0,
            email: '$orders.email',
            name: '$orders.name',
            orderNumber: '$orders.orderNumber',
            statusOrder: '$orders.statusOrder',
            dateStartingTour: '$orders.dateStartingTour',
            numberOfPersons: '$orders.numberOfPersons',
            phone: '$orders.phone',
            tourName: '$orders.tourName',
            isArchived: '$orders.isArchived',
            changeHistory: '$orders.changeHistory',
          },
        },
      ]);
    } else {
      orders = await this.clientModel.aggregate([
        {
          $unwind: '$orders',
        },
        {
          $match: {
            'orders.isArchived': isArchived,
          },
        },
        {
          $project: {
            _id: 0,
            email: '$orders.email',
            name: '$orders.name',
            orderNumber: '$orders.orderNumber',
            statusOrder: '$orders.statusOrder',
            dateStartingTour: '$orders.dateStartingTour',
            numberOfPersons: '$orders.numberOfPersons',
            phone: '$orders.phone',
            tourName: '$orders.tourName',
            isArchived: '$orders.isArchived',
            changeHistory: '$orders.changeHistory',
          },
        },
      ]);
    }

    return orders;
  }

  async getClients(query: IQueryGetClient) {
    const { date, orderNumber, page } = query;
    const currentPage = Number(page) || 1;
    const responsePerPage = 8;
    const skip = responsePerPage * (currentPage - 1);

    if (date && orderNumber) {
      const newDate = new Date(date);
      const startOfDay = new Date(newDate.setUTCHours(0, 0, 0, 0));
      const endOfDay = new Date(newDate.setUTCHours(23, 59, 59, 999));

      const clients = await this.clientModel
        .find(
          {
            orders: {
              $elemMatch: {
                orderNumber: orderNumber,
                createdAt: { $gte: startOfDay, $lte: endOfDay },
              },
            },
          },
          {},
          { limit: skip + responsePerPage, skip },
        )
        .lean();

      const response = [];

      clients.map((element) => {
        const lastOrder = element.orders[element.orders.length - 1];
        response.push({
          name: element.name,
          email: element.email,
          phone: element.phone,
          orderNumber: lastOrder.orderNumber,
          statusOrder: lastOrder.statusOrder,
          createdAt: lastOrder.createdAt,
        });
      });
      return response;
    } else if (date && !orderNumber) {
      const newDate = new Date(date);
      const startOfDay = new Date(newDate.setUTCHours(0, 0, 0, 0));
      const endOfDay = new Date(newDate.setUTCHours(23, 59, 59, 999));

      const clients = await this.clientModel
        .find(
          {
            orders: {
              $elemMatch: {
                createdAt: { $gte: startOfDay, $lte: endOfDay },
              },
            },
          },
          {},
          { limit: skip + responsePerPage, skip },
        )
        .lean();

      const response = [];

      clients.map((element) => {
        const lastOrder = element.orders[element.orders.length - 1];
        response.push({
          name: element.name,
          email: element.email,
          phone: element.phone,
          orderNumber: lastOrder.orderNumber,
          statusOrder: lastOrder.statusOrder,
          createdAt: lastOrder.createdAt,
        });
      });
      return response;
    } else if (!date && orderNumber) {
      console.log('HERE');
      const clients = await this.clientModel
        .find(
          {
            orders: {
              $elemMatch: {
                orderNumber,
              },
            },
          },
          {},
          { limit: skip + responsePerPage, skip },
        )
        .lean();

      const response = [];

      clients.map((element) => {
        const lastOrder = element.orders[element.orders.length - 1];
        response.push({
          name: element.name,
          email: element.email,
          phone: element.phone,
          orderNumber: lastOrder.orderNumber,
          statusOrder: lastOrder.statusOrder,
          createdAt: lastOrder.createdAt,
        });
      });
      return response;
    } else {
      const clients = await this.clientModel
        .find({}, {}, { limit: skip + responsePerPage, skip })
        .lean();

      const response = [];

      clients.map((element) => {
        const lastOrder = element.orders[element.orders.length - 1];
        response.push({
          name: element.name,
          email: element.email,
          phone: element.phone,
          orderNumber: lastOrder.orderNumber,
          statusOrder: lastOrder.statusOrder,
          createdAt: lastOrder.createdAt,
        });
      });
      return response;
    }
  }

  async getTours() {
    return await this.tourModel.find().sort({ createdAt: -1 });
  }
  async changeTourPrice(changeTourPrice: ChangeTourPrice) {
    const { price, tourName, discountPercentage } = changeTourPrice;

    const discount = this.calculateDiscount(price, discountPercentage);
    const tour = await this.tourModel.findOneAndUpdate(
      { name: tourName },
      {
        $set: {
          price,
          discountPercentage,
          discountPrice: discount,
        },
      },
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

  async addTour(addTour: AddTourDto) {
    const { price, tourName } = addTour;

    const tourExist = await this.tourModel.findOne({ name: tourName });
    if (tourExist)
      throw new HttpException('El tour ya existe', HttpStatus.BAD_REQUEST);

    const discount = this.calculateDiscount(
      addTour.price,
      addTour.discountPercentage,
    );

    const response = this.tourModel.create({
      name: tourName,
      price,
      discountPercentage: addTour.discountPercentage,
      discountPrice: discount,
    });

    return response;
  }

  calculateDiscount(price: number, discount: number): number {
    return price - (discount / 100) * price;
  }

  /*   async addTour() {
    ToursArray.map(async (element) => {
      await this.tourModel.create({ name: element, price: 0 });
    });
  } */
}
