import { ApiProperty } from '@nestjs/swagger';
import { TourNames, ToursArray } from '../types/submit-booking.types';
import { IsEmail, IsNotEmpty } from 'class-validator';

export class SubmitBookingDto {
  @ApiProperty({ description: 'The name of the person.', type: String })
  @IsNotEmpty()
  name: string;

  @ApiProperty({ description: 'The email of the client.', type: String })
  @IsNotEmpty()
  @IsEmail()
  email: string;

  @ApiProperty({ description: 'Phone number.', type: String })
  @IsNotEmpty()
  phone: string;

  @ApiProperty({
    description: 'The number of persons to take the tour.',
    type: Number,
  })
  @IsNotEmpty()
  numberOfPersons: number;

  @ApiProperty({
    description: 'The type of tour or name.',
    enum: ToursArray,
  })
  @IsNotEmpty()
  tourName: TourNames;

  @ApiProperty({ description: 'The starting date of the tour.', type: Date })
  @IsNotEmpty()
  dateStartingTour: Date;
}
