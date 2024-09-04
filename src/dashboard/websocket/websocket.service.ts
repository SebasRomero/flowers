import { Injectable } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';
import { JwtService } from '@nestjs/jwt';
import { UsersService } from 'src/users/users.service';
import { Socket } from 'socket.io';

@Injectable()
export class GatewayService {
  constructor(
    private readonly userService: UsersService,
    private readonly jwtService: JwtService,
    private readonly configService: ConfigService,
  ) {}

  validateConnection(client: Socket) {
    let authToken = client.handshake.headers.authentication;
/*     console.log('authToken:', authToken); */
    if (authToken) {
      authToken = authToken.toString().substring(7);
    } else {
      client.disconnect();
      return;
    }
    let payload;

    try {
      payload = this.jwtService.verify(authToken, {
        secret: this.configService.get<string>('JWT_SECRET'),
      });
    } catch (error) {
/*       console.log(error); */
      client.disconnect();
      return;
    }

    const user = this.userService.findOneUser(payload.username);

    return user;
  }
}
