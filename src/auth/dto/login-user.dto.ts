import { ApiProperty } from '@nestjs/swagger';

export class LoginUserDto {
  @ApiProperty({ type: String })
  username: string;
  @ApiProperty({ type: String })
  password: string;
}
