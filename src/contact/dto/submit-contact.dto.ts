import { ApiProperty } from '@nestjs/swagger';
import { IsEmail, IsNotEmpty } from 'class-validator';
import { IPhoneNumber } from '../types/contact.interface';

export class SubmitContactDto {
  @ApiProperty({ description: 'The name of the person.', type: String })
  @IsNotEmpty()
  name: string;

  @ApiProperty({ description: 'The email of the client.', type: String })
  @IsNotEmpty()
  @IsEmail()
  email: string;

  @ApiProperty({ description: 'Phone number.', type: Object })
  @IsNotEmpty()
  phone: IPhoneNumber;

  @ApiProperty({ description: 'Message', type: String })
  @IsNotEmpty()
  message: string;
}
