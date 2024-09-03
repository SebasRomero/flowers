import {
  OnGatewayConnection,
  OnGatewayDisconnect,
  SubscribeMessage,
  WebSocketGateway,
  WebSocketServer,
} from '@nestjs/websockets';
import { Server, Socket } from 'socket.io';
import { GatewayService } from './websocket.service';
import { Model } from 'mongoose';
import { Booking } from 'src/booking/schemas/booking.schema';
import { InjectModel } from '@nestjs/mongoose';
import { IBooking } from 'src/booking/types/booking.interface';
import { DashboardService } from '../dashboard.service';
import { IdObject } from './websocket.types';

@WebSocketGateway({ namespace: 'api/v1/ws/booking' })
export class WebsocketGateway
  implements OnGatewayConnection, OnGatewayDisconnect
{
  constructor(
    private readonly gatewayService: GatewayService,
    @InjectModel(Booking.name) private readonly bookingModel: Model<Booking>,
    private readonly dashboardService: DashboardService,
  ) {}
  @WebSocketServer()
  server: Server;

  async handleConnection(client: Socket) {
    const user = await this.gatewayService.validateConnection(client);
    if (!user) client.disconnect();

    console.log('Connected');
  }

  handleDisconnect(client: Socket) {
    console.log('Disconected');
  }

  @SubscribeMessage('bookings')
  sendUpdates(data: any) {
    this.scheduleGetTours();
  }

  async scheduleGetTours() {
    const previousBookings: IBooking[] = await this.bookingModel.find().lean();

    let previousIds: IdObject[] = [];
    previousBookings.map((element) => {
      previousIds.push({ _id: element._id });
    });
    this.server.emit(
      'update',
      this.dashboardService.formatBookings(previousBookings),
    );
    setInterval(async () => {
      const newBookings = await this.getNewTours(previousIds);
      this.server.emit(
        'update',
        this.dashboardService.formatBookings(newBookings),
      );
      if (newBookings.length > 0) {
        previousIds = previousIds.concat(
          newBookings.map((doc) => ({ _id: doc._id })),
        );
      }
    }, 5000);
  }

  async getNewTours(previousIds: IdObject[]): Promise<any[]> {
    const ids = previousIds.map((doc: any) => doc._id);

    const newBookings = await this.bookingModel
      .find({ _id: { $nin: ids } })
      .lean();

    return newBookings;
  }
}
