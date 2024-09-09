import { IsNotEmpty } from 'class-validator';
import { ApiProperty } from '@nestjs/swagger';

export class CreateUserDto {
  @ApiProperty({ description: 'El username del usuario', type: String })
  @IsNotEmpty()
  username: string;
  @ApiProperty({ description: 'El nombre del usuario', type: String })
  @IsNotEmpty()
  name: string;
  @ApiProperty({ description: 'La contraseña del usuario', type: String })
  @IsNotEmpty()
  password: string;
  /*   @ApiProperty({ description: 'Los roles del usuario', enum: [RoleUser] })
  @IsNotEmpty()
  role: RoleUser[]; */
}
