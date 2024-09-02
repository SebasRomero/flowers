import {
  OnGatewayConnection,
  OnGatewayDisconnect,
  WebSocketGateway,
  WebSocketServer,
} from '@nestjs/websockets';
import { Server, Socket } from 'socket.io';
import { GatewayService } from './websocket.service';

@WebSocketGateway({ namespace: '/v1/ws/bookings' })
export class WebsocketGateway
  implements OnGatewayConnection, OnGatewayDisconnect
{
  constructor(private readonly gatewayService: GatewayService) {}
  @WebSocketServer()
  server: Server;

  async handleConnection(client: Socket) {
    const user = await this.gatewayService.validateConnection(client);

    if (!user) client.disconnect();
  }

  handleDisconnect(client: Socket) {}

  sendUpdates(data: any) {
    this.server.emit('update', data);
  }
}
