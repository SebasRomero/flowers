import { ApiProperty } from '@nestjs/swagger';
import { TourNames } from '../types/submit-form.types';

export class SubmitFormDto {
  @ApiProperty({ description: 'The name of the person.', type: String })
  name: string;

  @ApiProperty({ description: 'The email of the client.', type: String })
  email: string;

  @ApiProperty({ description: 'Phone number.', type: String })
  phone: string;

  @ApiProperty({
    description: 'The number of persons to take the tour.',
    type: Number,
  })
  numberOfPersons: number;

  @ApiProperty({
    description: 'The type of tour or name.',
    enum: ['TOUR1, TOUR2'],
  })
  tourName: TourNames;

  @ApiProperty({ description: 'The starting date of the tour.', type: Date })
  dateStartingTour: Date;
}
