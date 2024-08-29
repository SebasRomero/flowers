import { ApiProperty } from '@nestjs/swagger';
import { IsEmail, IsNotEmpty } from 'class-validator';
import { TourNames, ToursArray } from '../types/submit-booking.types';
import { IDescriptionBooking } from 'src/dashboard/types/description.interface';

export class UpdateStatusBookingDto {
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

  @ApiProperty({ description: 'Reason of the update' })
  observations: IDescriptionBooking;
}
