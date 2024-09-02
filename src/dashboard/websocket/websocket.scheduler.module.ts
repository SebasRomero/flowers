import { Injectable } from '@nestjs/common';
import { DashboardService } from '../dashboard.service';
import { WebsocketGateway } from './websocket.gateway';

@Injectable()
export class MyScheduler {
  constructor(
    private readonly dashboardService: DashboardService,
    private readonly webSocketGateway: WebsocketGateway,
  ) {
    this.scheduleGetTours();
  }

  scheduleGetTours() {
    setInterval(async () => {
      const bookings = await this.dashboardService.getBookings({});
      this.webSocketGateway.sendUpdates(bookings);
    }, 5000);
  }
}
